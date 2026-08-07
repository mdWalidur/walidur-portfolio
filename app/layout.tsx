import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Walidur Rahman | Cloud/DevOps + AI Engineer",
    template: "%s | Walidur Rahman",
  },
  description:
    "Portfolio of Walidur Rahman, a Cloud/DevOps + AI Engineer building thoughtful web experiences with modern technology, AI, IoT, and cybersecurity.",
  keywords: [
    "Walidur Rahman",
    "Cloud/DevOps + AI Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "IoT",
    "Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: "Walidur Rahman" }],
  creator: "Walidur Rahman",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Walidur Rahman | Cloud/DevOps + AI Engineer",
    description:
      "Building thoughtful web experiences with modern technology, AI, IoT, and cybersecurity.",
    siteName: "Walidur Rahman Portfolio",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Walidur Rahman — Cloud/DevOps + AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walidur Rahman | Cloud/DevOps + AI Engineer",
    description:
      "Building thoughtful web experiences with modern technology, AI, IoT, and cybersecurity.",
    images: ["/social-preview.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-[#050505] font-sans text-slate-100 antialiased`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute left-[8%] top-[6%] h-[30rem] w-[30rem] rounded-full bg-teal-400/10 blur-[140px]" />
          <div className="absolute right-[10%] top-[24%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-[140px]" />
          <div className="absolute left-[28%] bottom-[8%] h-[34rem] w-[34rem] rounded-full bg-emerald-400/10 blur-[170px]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}