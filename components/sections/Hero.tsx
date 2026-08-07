"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

type HeroProps = {
  name?: string;
  role?: string;
  tagline?: string;
  portraitSrc?: string;
};

function HeroTechStack() {
  const stack = ["Docker", "Kubernetes", "Terraform", "AWS", "Python", "Node.js", "React", "Next.js", "AI/ML"];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mdWalidur",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-walidur-rahman-b86453264/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:ratul087@gmail.com",
    icon: Mail,
  },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition = (delay = 0) => ({
  delay,
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1] as const,
});

export default function Hero({
  name = "Walidur Rahman",
  role = "Cloud/DevOps + AI Engineer",
  tagline = "Building cloud-native applications, automating infrastructure, and creating AI-powered solutions.",
  portraitSrc = "/profile/profile.png",
}: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    };

    const handleLeave = () => {
      setMousePosition({ x: 50, y: 50 });
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const nameParts = name.trim().split(" ");
  const firstName = nameParts.slice(0, -1).join(" ") || nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";

  const particles = [
    {
      id: "p1",
      left: "12%",
      top: "22%",
      className: "h-2 w-2 rounded-full bg-teal-300/45 blur-[1px]",
      duration: 7.5,
      delay: 0,
    },
    {
      id: "p2",
      left: "82%",
      top: "20%",
      className: "h-1.5 w-1.5 rounded-full bg-cyan-300/35",
      duration: 8.8,
      delay: 0.8,
    },
    {
      id: "p3",
      left: "76%",
      top: "72%",
      className: "h-2.5 w-2.5 rounded-full bg-teal-200/35 blur-[0.5px]",
      duration: 9.4,
      delay: 1.3,
    },
    {
      id: "p4",
      left: "20%",
      top: "76%",
      className: "h-1.5 w-1.5 rounded-full bg-white/40",
      duration: 6.7,
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-screen overflow-hidden bg-[#050505] px-5 pb-12 pt-28 text-slate-100 sm:px-8 sm:pt-32 lg:px-12 xl:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 transition duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20,184,166,0.18), transparent 28%), radial-gradient(circle at 85% 70%, rgba(45,212,191,0.08), transparent 24%)`,
        }}
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.28 }}
        animate={{ opacity: [0.12, 0.2, 0.12], scale: [1, 1.01, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 12, 0], y: [0, -18, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-[130px]"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {particles.map(({ id, left, top, className, duration, delay }) => (
          <motion.span
            key={id}
            initial={{ opacity: 0.25, y: 0, scale: 1 }}
            animate={{
              opacity: [0.25, 0.7, 0.25],
              y: [0, -14, 0],
              x: [0, 6, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${className}`}
            style={{ left, top }}
          />
        ))}
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-center">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-10 xl:gap-20">
          <div className="relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={fadeUpTransition(0)}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-teal-300" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                {role}
              </p>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={fadeUpTransition(0.08)}
              className="max-w-4xl font-semibold uppercase leading-[0.82] tracking-[-0.075em] text-white"
            >
              <span className="block text-[clamp(3.5rem,9vw,8.5rem)]">
                {firstName}
              </span>
              {lastName && (
                <span className="block pl-[0.12em] text-[clamp(3.5rem,9vw,8.5rem)] text-transparent [-webkit-text-stroke:1px_rgba(226,232,240,0.9)] sm:[-webkit-text-stroke:1.5px_rgba(226,232,240,0.9)]">
                  {lastName}
                </span>
              )}
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={fadeUpTransition(0.16)}
              className="mt-9 flex max-w-xl flex-col gap-6 sm:mt-11 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-sm text-base leading-relaxed text-slate-400 sm:text-lg">
                {tagline}
              </p>

              <motion.div
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="hidden shrink-0 items-center gap-3 sm:flex"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Available for work
                </span>

                <motion.span
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-2.5 w-2.5 items-center justify-center"
                >
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-teal-400/30 blur-[2px]" />
                  <span className="relative h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_16px_rgba(45,212,191,0.9)]" />
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={fadeUpTransition(0.24)}
              className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-4 rounded-full bg-teal-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition-transform duration-300 hover:-translate-y-1 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#050505]"
              >
                View selected work
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="/Walidur_Rahman_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#050505]"
              >
                Resume
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={fadeUpTransition(0.32)}
              className="mt-10 flex items-center gap-3 sm:mt-14"
            >
              <span className="mr-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                Find me
              </span>

              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#050505]"
                >
                  <Icon size={17} strokeWidth={1.8} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full bg-teal-400/10 blur-3xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#091210] shadow-2xl shadow-black/50">
              <Image
                src={portraitSrc}
                alt={`Portrait of ${name}`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-center grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06100f]/90 via-[#06100f]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300/10 via-transparent to-transparent mix-blend-screen" />

              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                Based in Finland
              </div>

              <div className="absolute bottom-5 left-5 right-5 border-t border-white/15 pt-4">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-teal-200/70">
                      Cloud/DevOps + AI Engineer
                    </p>
                    <p className="mt-1 text-lg font-medium tracking-[-0.03em] text-white">
                      Building scalable, cloud-native systems for the web.
                    </p>
                  </div>

                  <HeroTechStack />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-[15%] hidden rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-[0.16em] text-slate-900">
                Focus
              </p>
              <p className="mt-1 text-sm font-semibold text-teal-1000">
                Design × Code
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-14 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:mt-16"
        >
          <span>Portfolio </span>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-teal-300"
          >
            Scroll to explore
            <ArrowDownRight
              size={14}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}