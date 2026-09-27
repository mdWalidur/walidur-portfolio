import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mdwalidur.github.io"
  ),

  title: {
    default: "Walidur Rahman — IT Engineering Portfolio",
    template: "%s | Walidur Rahman",
  },

  description:
    "Portfolio of Walidur Rahman, an IT engineering student and technology enthusiast exploring software development, cloud computing, DevOps, AI, and modern digital systems.",

  keywords: [
    "Walidur Rahman",
    "IT Engineer",
    "Software Developer",
    "Cloud Computing",
    "DevOps",
    "Artificial Intelligence",
    "Portfolio",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Walidur Rahman — IT Engineering Portfolio",
    description:
      "Exploring software, cloud systems, DevOps, AI, and modern technology.",
    siteName: "Walidur Rahman",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Walidur Rahman — IT Engineering Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Walidur Rahman — IT Engineering Portfolio",
    description:
      "IT Engineering portfolio focused on software, cloud, DevOps, and emerging technology.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#121314",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="signal"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}