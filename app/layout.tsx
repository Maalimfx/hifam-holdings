import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { MessageCircle } from "lucide-react";

// 1. Professional Metadata and Icons
export const metadata = {
  metadataBase: new URL('http://localhost:3000'), 
  title: "Hifam Holdings Limited | Excellence in Every Sector",
  description: "One Brand, Multiple Services. Built for Everyday Life in Kenya.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

// 2. The Required Default Export Function
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased relative">
        <ThemeProvider>
          {/* Main Website Content */}
          {children}

          {/* 3. FLOATING WHATSAPP BUTTON */}
          <a 
            href="https://wa.me/254729989616?text=Hello%20Hifam%20Holdings,%20I%20am%20interested%20in%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            {/* Tooltip that shows on hover */}
            <span className="absolute right-full mr-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 dark:border-slate-700 pointer-events-none">
              Chat with Hifam
            </span>
            <MessageCircle size={32} />
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}