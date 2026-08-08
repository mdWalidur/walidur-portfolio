"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const email = "ratul087@gmail.com";

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
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const transition = (delay = 0) => ({
  duration: 1.2,
  delay,
  ease: [0.19, 1, 0.22, 1] as const,
});

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-28 overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-12 xl:px-20"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          AMBIENT LIGHT
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background: "var(--accent)",
          opacity: 0.045,
        }}
      />

      {/* =====================================================
          TECHNICAL GRID
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.055,
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--text-primary) 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--text-primary) 12%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
            =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={reveal}
          transition={transition()}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <span
                className="h-px w-10"
                style={{
                  background: "var(--accent)",
                }}
              />

              <p
                className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                Contact
              </p>

              <span
                className="h-px w-10"
                style={{
                  background: "var(--accent)",
                }}
              />
            </div>
          </div>

          <h2
            id="contact-heading"
            className="mt-7 text-5xl font-light leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-8xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Let&apos;s build

            <span
              className="block font-serif italic font-light"
              style={{
                color: "var(--accent)",
              }}
            >
              something good.
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Have a project, an idea, or a role you think we should
            talk about? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT CARD
            =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={transition(0.12)}
          whileHover={{
            y: -5,
            rotateX: 1,
            rotateY: -1,
          }}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          className="group relative mx-auto mt-14 max-w-4xl overflow-hidden border backdrop-blur-[20px] sm:mt-20"
        >
          {/* =================================================
              CARD ATMOSPHERE
              ================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background: "var(--accent)",
              opacity: 0.045,
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-px w-0 transition-all duration-[1200ms] group-hover:w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent), transparent)",
            }}
          />

          {/* Corner details */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-8 w-8 border-b border-r"
            style={{
              borderColor: "var(--border)",
            }}
          />

          <span
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-8 w-8 border-l border-t"
            style={{
              borderColor: "var(--border)",
            }}
          />

          <div
            className="relative p-6 sm:p-9"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface-soft)",
              boxShadow:
                "0 25px 90px var(--shadow-color)",
            }}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* =================================================
                  EMAIL
                  ================================================= */}

              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="absolute inset-0 animate-ping rounded-full"
                      style={{
                        background: "var(--accent)",
                        opacity: 0.35,
                      }}
                    />

                    <span
                      className="relative h-2.5 w-2.5 rounded-full"
                      style={{
                        background: "var(--accent)",
                        boxShadow:
                          "0 0 14px color-mix(in srgb, var(--accent) 60%, transparent)",
                      }}
                    />
                  </span>

                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--accent-dark)",
                    }}
                  >
                    Available for opportunities
                  </p>
                </div>

                <a
                  href={`mailto:${email}`}
                  className="mt-5 inline-flex max-w-full items-center gap-3 break-all text-xl font-medium tracking-[-0.035em] transition-colors duration-700 sm:text-2xl lg:text-3xl"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  <Mail
                    size={21}
                    className="hidden shrink-0 sm:block"
                    style={{
                      color: "var(--accent)",
                    }}
                  />

                  {email}
                </a>
              </div>

              {/* =================================================
                  ACTIONS
                  ================================================= */}

              <div className="flex shrink-0 items-center gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group/copy inline-flex h-12 items-center gap-2 border px-4 text-sm font-semibold transition-all duration-700 hover:-translate-y-0.5 focus:outline-none"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {copied ? (
                    <Check
                      size={17}
                      style={{
                        color: "var(--accent)",
                      }}
                    />
                  ) : (
                    <Copy size={17} />
                  )}

                  {copied ? "Copied" : "Copy"}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="group/send inline-flex h-12 items-center gap-2 px-5 text-sm font-bold transition-all duration-700 hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                    color: "var(--selection-foreground)",
                    boxShadow:
                      "0 12px 35px color-mix(in srgb, var(--accent) 20%, transparent)",
                  }}
                >
                  Send email

                  <Send
                    size={16}
                    className="transition-transform duration-700 group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Technical footer inside card */}
            <div
              className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-5"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span
                className="font-mono text-[8px] uppercase tracking-[0.2em]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Communication channel / 01
              </span>

              <span
                className="font-mono text-[8px] uppercase tracking-[0.2em]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Response preferred by email
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            SOCIAL
            =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={reveal}
          transition={transition(0.25)}
          className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 border-t pt-7 sm:mt-12 sm:flex-row"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Prefer social? You can also find me here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map(
              ({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-medium transition-all duration-700 hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-soft)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon
                    size={16}
                    className="transition-colors duration-700 group-hover:text-[var(--accent)]"
                  />

                  {label}

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )
            )}

            <a
              href={`mailto:${email}`}
              aria-label="Send an email"
              className="group grid h-10 w-10 place-items-center border transition-all duration-700 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-soft)",
                color: "var(--text-secondary)",
              }}
            >
              <Mail
                size={16}
                className="transition-colors duration-700 group-hover:text-[var(--accent)]"
              />
            </a>
          </div>
        </motion.div>

        {/* ===================================================
            CLOSING STATEMENT
            =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p
            className="font-serif text-lg italic sm:text-xl"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Good ideas deserve thoughtful execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}