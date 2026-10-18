import type { Metadata, Viewport } from "next";
import {
  JetBrains_Mono,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mdwalidur.github.io"
  ),

  title: {
    default: "Walidur Rahman — Cloud, DevOps & Creative Engineering",
    template: "%s | Walidur Rahman",
  },

  description:
    "Portfolio of Walidur Rahman — engineering resilient cloud architectures, automated DevOps pipelines, and expressive digital experiences.",

  keywords: [
    "Walidur Rahman",
    "Cloud Engineer",
    "DevOps",
    "Software Developer",
    "AWS",
    "Docker",
    "Kubernetes",
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
    title: "Walidur Rahman — Cloud, DevOps & Creative Engineering",
    description:
      "Engineering resilient cloud systems, automated pipelines, and expressive web experiences.",
    siteName: "Walidur Rahman",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Walidur Rahman — Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Walidur Rahman — Cloud, DevOps & Creative Engineering",
    description:
      "Engineering resilient cloud systems, automated pipelines, and expressive web experiences.",
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
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}