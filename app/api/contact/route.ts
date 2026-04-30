import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // 1. Save to Database
    const { error: dbError } = await supabase
      .from('inquiries')
      .insert([{ name, email, service, message }]);

    if (dbError) throw dbError;

    // 2. Send Email Alert to you
    await resend.emails.send({
      from: 'Hifam Web <onboarding@resend.dev>',
      to: 'hifamholdingsltd26@gmail.com',
      subject: `New Lead: ${service} from ${name}`,
      html: `<strong>Name:</strong> ${name}<br/><strong>Service:</strong> ${service}<br/><strong>Message:</strong> ${message}`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}