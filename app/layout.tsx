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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://walidur-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Walidur Rahman — Cloud, DevOps & AI Engineer",
    template: "%s | Walidur Rahman",
  },

  description:
    "Portfolio of Md Walidur Rahman — IT Engineering student in Tampere, Finland specializing in AWS cloud architecture, Docker, Kubernetes, DevOps automation, AI systems, and full-stack TypeScript web development.",

  applicationName: "Walidur Rahman Portfolio",

  authors: [
    {
      name: "Md Walidur Rahman",
      url: SITE_URL,
    },
  ],
  creator: "Md Walidur Rahman",
  publisher: "Md Walidur Rahman",
  category: "technology",

  keywords: [
    "Walidur Rahman",
    "Md Walidur Rahman",
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS",
    "Docker",
    "Kubernetes",
    "Software Developer",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Artificial Intelligence",
    "Cybersecurity",
    "Tampere",
    "Finland",
    "Centria University of Applied Sciences",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Walidur Rahman — Cloud, DevOps & AI Engineer",
    description:
      "Architecting resilient cloud infrastructure, intelligent AI systems, and tactile full-stack web experiences.",
    siteName: "Walidur Rahman",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Walidur Rahman — Cloud / DevOps + AI Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Walidur Rahman — Cloud, DevOps & AI Engineer",
    description:
      "Architecting resilient cloud infrastructure, intelligent AI systems, and tactile full-stack web experiences.",
    images: ["/social-preview.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0d0b" },
    { media: "(prefers-color-scheme: light)", color: "#f5f0e6" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Md Walidur Rahman",
      alternateName: "Walidur Rahman",
      url: SITE_URL,
      jobTitle: "Cloud, DevOps & Full-Stack Engineer",
      description:
        "IT Engineering student in Tampere, Finland specializing in AWS cloud architecture, containerized DevOps workflows, machine learning telemetry, and high-craft TypeScript interfaces.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tampere",
        addressCountry: "FI",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Centria University of Applied Sciences",
      },
      knowsAbout: [
        "Amazon Web Services (AWS)",
        "Docker",
        "Kubernetes",
        "DevOps",
        "CI/CD",
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "Artificial Intelligence",
        "Cybersecurity",
      ],
      sameAs: [
        "https://github.com/mdWalidur",
        "https://www.linkedin.com/in/md-walidur-rahman-b86453264/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Walidur Rahman — Portfolio",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}