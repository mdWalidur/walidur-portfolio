import type {
  NavigationItem,
  PortfolioProfile,
  SocialLink,
} from "@/types/portfolio";

export const portfolioProfile: PortfolioProfile = {
  name: "Md Walidur Rahman",
  shortName: "Walidur",
  location: "Tampere, Finland",

  headline:
    "Architecting resilient cloud infrastructure, intelligent AI systems, and tactile full-stack web experiences.",

  summary:
    "IT Engineering student in Tampere, Finland specializing in AWS cloud architecture, containerized DevOps workflows, machine learning telemetry, and high-craft TypeScript interfaces.",

  email: "ratul087@gmail.com",

  github: "https://github.com/mdWalidur",

  linkedin: "https://www.linkedin.com/in/md-walidur-rahman-b86453264/",
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Credentials",
    href: "#credentials",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: portfolioProfile.github,
  },
  {
    label: "LinkedIn",
    href: portfolioProfile.linkedin,
  },
];