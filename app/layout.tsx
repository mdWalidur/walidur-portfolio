import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import MouseInteraction from "@/components/effects/MouseInteraction";

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
    default: "Walidur Rahman | Cloud, DevOps & AI Engineer",
    template: "%s | Walidur Rahman",
  },

  description:
    "Portfolio of Walidur Rahman — a Cloud, DevOps and AI Engineer building modern digital experiences, cloud solutions, and intelligent applications.",

  keywords: [
    "Walidur Rahman",
    "Cloud Engineer",
    "DevOps Engineer",
    "AI Engineer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Artificial Intelligence",
    "Web Development",
  ],

  authors: [
    {
      name: "Walidur Rahman",
    },
  ],

  creator: "Walidur Rahman",

  applicationName: "Walidur Rahman Portfolio",

  metadataBase: new URL(
    "https://walidur-portfolio.vercel.app"
  ),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walidur-portfolio.vercel.app",

    title: "Walidur Rahman | Cloud, DevOps & AI Engineer",

    description:
      "Cloud, DevOps and AI Engineer building modern digital experiences, cloud solutions, and intelligent applications.",

    siteName: "Walidur Rahman",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Walidur Rahman — Cloud, DevOps & AI Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Walidur Rahman | Cloud, DevOps & AI Engineer",

    description:
      "Cloud, DevOps and AI Engineer building modern digital experiences and intelligent applications.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#eee9dc",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0a0a0a",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <MouseInteraction />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}