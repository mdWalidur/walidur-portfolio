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
    "Full-Stack & Cloud Engineer designing scalable web applications, automated DevOps pipelines, and practical AI-driven systems.",

  summary:
    "IT Engineering student in Tampere, Finland focused on AWS cloud infrastructure, containerized microservices, and high-performance TypeScript & React web applications.",

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