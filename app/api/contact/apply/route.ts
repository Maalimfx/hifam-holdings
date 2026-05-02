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
    const body = await req.json();
    console.log("Backend received data:", body);

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('applications')
      .insert([{ 
        job_title: body.job_title, 
        applicant_name: body.applicant_name, 
        phone: body.phone, 
        email: body.email, 
        experience: body.experience, 
        resume_url: body.resume_url 
      }]);

    if (dbError) {
      console.error("Supabase Database Error:", dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    // 2. Send Email Alert
    try {
      await resend.emails.send({
        from: 'Hifam Careers <onboarding@resend.dev>',
        to: 'hifamholdingsltd26@gmail.com', // Must be your registered Resend email
        subject: `New Application: ${body.job_title}`,
        html: `<p>New application from ${body.applicant_name}. Check the Hifam Admin Dashboard for details.</p>`
      });
    } catch (emailError: any) {
      console.error("Resend Email Error:", emailError.message);
      // We don't crash the whole process if only the email fails
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("General API Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}