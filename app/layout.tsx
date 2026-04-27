import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// 1. Professional Metadata and Icons
export const metadata = {
  metadataBase: new URL('http://localhost:3000'), // Fixes the terminal warning
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
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}