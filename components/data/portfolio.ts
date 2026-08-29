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
    "IT Engineering Student focused on software development, cloud technologies, and building practical digital solutions.",

  summary:
    "I am an IT Engineering student with an interest in software development, cloud computing, DevOps, and modern web technologies. I enjoy building practical projects, learning new technologies, and improving my skills through hands-on development.",
  
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
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Credentials",
    href: "#credentials",
  },
  {
    label: "About",
    href: "#about",
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