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

import {
  portfolioProfile,
  socialLinks,
} from "../data/portfolio";

const easing = [0.19, 1, 0.22, 1] as const;

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = portfolioProfile.email;

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
      className="
        relative
        scroll-mt-28
        overflow-hidden
        border-t
        px-5
        py-24

        sm:px-8
        sm:py-28

        lg:px-12
        lg:py-32

        xl:px-20
      "
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
        borderColor: "var(--border)",
      }}
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            inset-0
            opacity-[0.015]
          "
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[28rem]
            w-[28rem]
            -translate-x-1/2
            rounded-full
            blur-[150px]
          "
          style={{
            background: "var(--accent)",
            opacity: 0.025,
          }}
        />
      </div>

      {/* Container */}

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: easing,
          }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4">
            <span
              className="
                h-px
                w-10

                sm:w-12
              "
              style={{
                background: "var(--accent)",
              }}
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]

                sm:text-[10px]
              "
              style={{
                color: "var(--accent)",
              }}
            >
              Contact
            </span>
          </div>

          <h2
            id="contact-heading"
            className="
              mt-7
              max-w-4xl
              text-[clamp(3rem,8vw,7rem)]
              font-light
              leading-[0.9]
              tracking-[-0.065em]
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            Let&apos;s build

            <span
              className="
                block
                font-serif
                italic
              "
              style={{
                color: "var(--accent)",
              }}
            >
              something good.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7

              sm:mt-8
              sm:text-base
              sm:leading-8

              lg:text-lg
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Have a project, an idea, or an opportunity you think
            we should talk about? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact area */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            delay: 0.12,
            duration: 0.8,
            ease: easing,
          }}
          className="
            mt-12
            border

            sm:mt-16
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          {/* Email */}

          <div
            className="
              p-6

              sm:p-8

              lg:p-10
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                  "
                  style={{
                    background: "var(--accent)",
                    opacity: 0.3,
                  }}
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                  "
                  style={{
                    background: "var(--accent)",
                    boxShadow:
                      "0 0 12px var(--accent)",
                  }}
                />
              </span>

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]

                  sm:text-[9px]
                "
                style={{
                  color: "var(--accent)",
                }}
              >
                Available for opportunities
              </span>
            </div>

            <div
              className="
                mt-7
                flex
                flex-col
                gap-6
                border-t
                pt-6

                sm:mt-8
                sm:flex-row
                sm:items-end
                sm:justify-between
                sm:pt-8
              "
              style={{
                borderColor: "var(--border)",
              }}
            >
              <div className="min-w-0">
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                  "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="
                    mt-2
                    block
                    break-all
                    text-xl
                    font-medium
                    tracking-[-0.035em]
                    transition-colors
                    duration-200

                    hover:text-[var(--accent)]

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[var(--accent)]

                    sm:text-2xl

                    lg:text-3xl
                  "
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {email}
                </a>
              </div>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2.5
                "
              >
                <button
                  type="button"
                  onClick={copyEmail}
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    gap-2
                    border
                    px-4
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    transition-all
                    duration-200

                    hover:-translate-y-0.5

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[var(--accent)]
                  "
                  style={{
                    borderColor: copied
                      ? "var(--accent)"
                      : "var(--border)",
                    background: copied
                      ? "color-mix(in srgb, var(--accent) 8%, var(--surface))"
                      : "var(--surface)",
                    color: copied
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  }}
                >
                  {copied ? (
                    <Check size={15} />
                  ) : (
                    <Copy size={15} />
                  )}

                  {copied ? "Copied" : "Copy email"}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    gap-2
                    px-5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:opacity-90

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[var(--accent)]
                  "
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-contrast)",
                    boxShadow:
                      "0 12px 30px color-mix(in srgb, var(--accent) 12%, transparent)",
                  }}
                >
                  Send email

                  <Send
                    size={15}
                    strokeWidth={1.7}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Social links */}

          <div
            className="
              grid
              border-t

              sm:grid-cols-3
            "
            style={{
              borderColor: "var(--border)",
            }}
          >
            {socialLinks.map(({ label, href }) => {
              const Icon =
                socialIcons[
                  label as keyof typeof socialIcons
                ];

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    min-h-16
                    items-center
                    justify-between
                    gap-4
                    px-6
                    py-4
                    transition-colors
                    duration-200

                    hover:bg-[var(--surface)]

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-[-2px]
                    focus-visible:outline-[var(--accent)]

                    sm:border-r
                    sm:px-7

                    lg:px-8
                  "
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  <span className="flex items-center gap-3">
                    {Icon && (
                      <Icon
                        size={17}
                        style={{
                          color: "var(--accent)",
                        }}
                      />
                    )}

                    <span
                      className="
                        text-xs
                        font-medium
                      "
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {label}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                    style={{
                      color: "var(--text-muted)",
                    }}
                  />
                </a>
              );
            })}

            {/* Email */}

            <a
              href={`mailto:${email}`}
              className="
                group
                flex
                min-h-16
                items-center
                justify-between
                gap-4
                border-t
                px-6
                py-4
                transition-colors
                duration-200

                hover:bg-[var(--surface)]

                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-[-2px]
                focus-visible:outline-[var(--accent)]

                sm:border-t-0
                sm:px-7

                lg:px-8
              "
              style={{
                borderColor: "var(--border)",
              }}
            >
              <span className="flex items-center gap-3">
                <Mail
                  size={17}
                  strokeWidth={1.5}
                  style={{
                    color: "var(--accent)",
                  }}
                />

                <span
                  className="
                    text-xs
                    font-medium
                  "
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Email
                </span>
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
                style={{
                  color: "var(--text-muted)",
                }}
              />
            </a>
          </div>
        </motion.div>

        {/* Bottom note */}

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
            delay: 0.2,
            duration: 0.7,
            ease: easing,
          }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-3

            sm:mt-10
          "
        >
          <span
            className="
              h-px
              w-8
            "
            style={{
              background: "var(--accent)",
            }}
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.23em]

              sm:text-[9px]
            "
            style={{
              color: "var(--text-muted)",
            }}
          >
            Open to meaningful conversations
          </span>
        </motion.div>
      </div>
    </section>
  );
}