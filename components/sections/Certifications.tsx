"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const certifications = [
  {
    title: "AWS Academy Graduate – Cloud Developing",
    issuer: "Amazon Web Services (AWS)",
    date: "March 7, 2026",
    image: "/certifications/aws-cloud-developing.png",
    credentialUrl:
      "https://www.credly.com/badges/c6f58ca3-a1d7-4dbd-a812-1e4b08e1c9d5",
    tags: ["AWS", "Cloud Development"],
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "October 26, 2025",
    image: "/certifications/aws-cloud-foundations.png",
    credentialUrl:
      "https://www.credly.com/badges/0d867bd2-b54c-49a2-a398-3190079c7118",
    tags: ["AWS", "Cloud Computing"],
  },
  {
    title: "AWS Academy Graduate – Cloud Operations",
    issuer: "Amazon Web Services (AWS)",
    date: "October 26, 2025",
    image: "/certifications/aws-cloud-operations.png",
    credentialUrl:
      "https://www.credly.com/badges/f730dfaa-e2f8-447b-bbee-36430e20b45d",
    tags: ["AWS", "Cloud Operations"],
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
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

/* =========================================================
   CERTIFICATIONS
   ========================================================= */

export default function Certifications() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="relative scroll-mt-28 overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-20"
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 h-[32rem] w-[32rem] rounded-full blur-[140px]"
        style={{
          background: "var(--accent)",
          opacity: 0.035,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-px opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--accent), transparent)",
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
          className="mb-14 grid gap-8 border-b pb-10 md:mb-16 lg:grid-cols-[1fr_0.62fr]"
          style={{
            borderColor: "var(--border)",
          }}
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span
                className="h-px w-12"
                style={{
                  background: "var(--accent)",
                }}
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                style={{
                  color: "var(--accent)",
                }}
              >
                Credentials
              </span>
            </div>

            <h2
              id="credentials-heading"
              className="max-w-3xl text-4xl font-light tracking-[-0.05em] sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Cloud skills,
              <br />

              <span
                className="font-serif italic"
                style={{
                  color: "var(--accent)",
                }}
              >
                curiosity, and practice.
              </span>
            </h2>
          </div>

          <p
            className="max-w-md self-end text-base leading-7"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Professional credentials supporting my journey
            across cloud computing, DevOps, Linux, and
            modern software development.
          </p>
        </motion.div>

        {/* ===================================================
            AWS GRID
            =================================================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={reveal}
              transition={transition(index * 0.08)}
              whileHover={{
                y: -8,
                rotateX: 1.5,
                rotateY:
                  index === 1
                    ? 0
                    : index === 0
                      ? -1
                      : 1,
              }}
              style={{
                perspective: "1200px",
              }}
              className="group relative overflow-hidden border backdrop-blur-[20px]"
            >
              {/* Card */}
              <div
                className="h-full"
                style={{
                  background: "var(--surface-soft)",
                  borderColor: "var(--border)",
                  boxShadow:
                    "0 20px 70px var(--shadow-color)",
                }}
              >
                {/* =================================================
                    ACCENT GLOW
                    ================================================= */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
                  style={{
                    background: "var(--accent)",
                  }}
                />

                {/* =================================================
                    NUMBER
                    ================================================= */}

                <div
                  className="absolute left-5 top-5 z-20 text-[9px] font-semibold tracking-[0.25em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  / 0{index + 1}
                </div>

                {/* =================================================
                    BADGE AREA
                    ================================================= */}

                <div
                  className="relative flex h-[290px] items-center justify-center overflow-hidden border-b sm:h-[310px]"
                  style={{
                    borderColor: "var(--border)",
                    background:
                      "radial-gradient(circle at center, color-mix(in srgb, var(--accent) 7%, transparent), transparent 58%)",
                  }}
                >
                  {/* Technical grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--border-soft) 1px, transparent 1px), linear-gradient(90deg, var(--border-soft) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Ring */}
                  <div
                    aria-hidden="true"
                    className="absolute h-56 w-56 rounded-full border opacity-40 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-70"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--accent) 35%, transparent)",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-44 w-44 rounded-full border border-dashed opacity-25 transition-transform duration-[1600ms] group-hover:rotate-45"
                    style={{
                      borderColor: "var(--accent)",
                    }}
                  />

                  {/* Badge */}
                  <div
                    className="relative z-10 transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                    style={{
                      filter:
                        "drop-shadow(0 20px 30px var(--shadow-color))",
                    }}
                  >
                    <Image
                      src={certification.image}
                      alt={certification.title}
                      width={240}
                      height={240}
                      className="h-[205px] w-[205px] object-contain sm:h-[220px] sm:w-[220px]"
                    />
                  </div>

                  {/* Gold scan line */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-0 transition-all duration-[1200ms] group-hover:w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--accent), transparent)",
                    }}
                  />
                </div>

                {/* =================================================
                    CONTENT
                    ================================================= */}

                <div className="relative p-6 sm:p-7">
                  <div className="flex items-center gap-2">
                    <Award
                      size={14}
                      style={{
                        color: "var(--accent)",
                      }}
                    />

                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.22em]"
                      style={{
                        color: "var(--accent)",
                      }}
                    >
                      {certification.issuer}
                    </p>
                  </div>

                  <h3
                    className="mt-4 min-h-[58px] text-lg font-medium leading-7 tracking-[-0.025em]"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    {certification.title}
                  </h3>

                  <p
                    className="mt-4 text-[10px] uppercase tracking-[0.18em]"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    Issued {certification.date}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {certification.tags.map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-3 py-1.5 text-[10px] font-medium"
                          style={{
                            borderColor:
                              "var(--border)",
                            background:
                              "var(--surface)",
                            color:
                              "var(--text-secondary)",
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  {/* Verify */}
                  <a
                    href={
                      certification.credentialUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    Verify credential

                    <ExternalLink
                      size={14}
                      className="transition-all duration-700 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      style={{
                        color: "var(--accent)",
                      }}
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ===================================================
            CISCO / LINUX
            =================================================== */}

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={reveal}
          transition={transition(0.25)}
          className="group relative mt-5 overflow-hidden border backdrop-blur-[20px]"
          style={{
            background: "var(--surface-soft)",
            borderColor: "var(--border)",
            boxShadow:
              "0 20px 70px var(--shadow-color)",
          }}
        >
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">

            {/* Certificate image */}
            <div
              className="relative overflow-hidden border-b p-5 md:border-b-0 md:border-r md:p-7"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
  src="/certifications/linux-essentials.jpeg"
  alt="Linux Essentials Certification from Cisco Networking Academy"
  fill
  sizes="(min-width: 768px) 55vw, 100vw"
  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
/>

                {/* Image overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, transparent), transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 md:p-10">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={18}
                  style={{
                    color: "var(--accent)",
                  }}
                />

                <p
                  className="text-[9px] font-semibold uppercase tracking-[0.22em]"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  Cisco Networking Academy
                </p>
              </div>

              <h3
                className="mt-4 text-2xl font-medium tracking-[-0.035em] md:text-3xl"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Linux Essentials
                <br />

                <span
                  className="font-serif italic"
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  Certification
                </span>
              </h3>

              <p
                className="mt-5 max-w-xl text-sm leading-7"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Successfully completed NDG Linux Essentials
                through the Cisco Networking Academy program.
              </p>

              <p
                className="mt-5 text-[10px] uppercase tracking-[0.18em]"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Issued June 6, 2024
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Linux",
                  "Linux Administration",
                  "Embedded Linux",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1.5 text-[10px]"
                    style={{
                      borderColor:
                        "var(--border)",
                      background:
                        "var(--surface)",
                      color:
                        "var(--text-secondary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* ===================================================
            FOOTNOTE
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
          transition={transition(0.4)}
          className="mt-8 flex items-center gap-3"
        >
          <span
            className="h-px w-8"
            style={{
              background: "var(--accent)",
            }}
          />

          <p
            className="text-[9px] uppercase tracking-[0.25em]"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Credentials verified through official providers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}