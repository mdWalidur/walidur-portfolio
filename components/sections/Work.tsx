"use client";

import { useState, useEffect, useMemo, type ReactNode } from "react";

import {
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Activity,
  Calculator,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import SectionShell from "@/components/ui/SectionTitle";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  visual: "iot" | "calculator" | "security";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Smart Room Monitor",
    category: "Real-Time IoT Dashboard",
    description:
      "A real-time environmental monitoring system that reads temperature and humidity from a DHT22 sensor, transmits data through MQTT, and visualizes live readings in a browser dashboard.",
    tags: [
      "ESP32",
      "DHT22",
      "MQTT",
      "Flask",
      "Socket.IO",
      "Chart.js",
    ],
    liveUrl:
      "https://wokwi.com/projects/460027800656399361",
    githubUrl:
      "https://github.com/mdWalidur/Internet-of-things",
    visual: "iot",
  },

  {
    number: "02",
    title: "Network Calculator Suite",
    category: "Networking Web Tool",
    description:
      "A practical browser-based toolkit for working through common network calculations in a clear, accessible interface.",
    tags: [
      "Networking",
      "Web Tools",
      "GitHub Pages",
      "Responsive Design",
    ],
    liveUrl:
      "https://mdwalidur.github.io/Network-Calculator-Suite/",
    visual: "calculator",
  },

  {
    number: "03",
    title: "System Security Assessment",
    category: "Application Security Testing",
    description:
      "A two-phase security assessment of a Docker-deployed booking system. Used OWASP ZAP to identify, retest, document, and communicate web-security findings.",
    tags: [
      "OWASP ZAP",
      "Docker",
      "Web Security",
      "Penetration Testing",
      "Security Reporting",
    ],
    githubUrl:
      "https://github.com/mdWalidur/Introduction-to-Cybersecurity",
    visual: "security",
  },
];

/* =========================================================
   SHARED VISUAL WRAPPER
   ========================================================= */

function VisualShell({
  children,
  label,
  icon,
}: {
  children: ReactNode;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div
      className="
        relative
        h-full
        min-h-[310px]
        overflow-hidden
        border
        bg-[var(--surface)]

        sm:min-h-[390px]

        lg:min-h-[460px]
      "
      style={{
        borderColor: "var(--border)",
        boxShadow: "0 24px 80px var(--shadow-color)",
      }}
    >
      {/* Ambient glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          blur-3xl
          opacity-[0.08]
        "
        style={{
          background: "var(--accent)",
        }}
      />

      {/* Technical grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
        "
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Top label */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          z-20
          flex
          items-center
          justify-between

          sm:left-7
          sm:right-7
          sm:top-7
        "
      >
        <div className="flex items-center gap-2.5">
          <span
            className="
              grid
              h-7
              w-7
              place-items-center
              border
            "
            style={{
              borderColor: "var(--border)",
              color: "var(--accent)",
              background: "var(--surface-soft)",
            }}
          >
            {icon}
          </span>

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.24em]

              sm:text-[9px]
              sm:tracking-[0.28em]
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {label}
          </span>
        </div>

        <span
          className="
            hidden
            text-[8px]
            uppercase
            tracking-[0.25em]

            sm:block
          "
          style={{
            color: "var(--text-muted)",
          }}
        >
          SYSTEM / 2026
        </span>
      </div>

      {children}
    </div>
  );
}

/* =========================================================
   IOT VISUAL (INTERACTIVE LIVE TELEMETRY)
   ========================================================= */

function IoTVisual() {
  const [temperature, setTemperature] = useState(24.6);
  const [humidity, setHumidity] = useState(61);
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setTemperature(() => {
        const delta = Math.sin(Date.now() / 1200) * 0.3;
        return Number((24.6 + delta).toFixed(1));
      });
      setHumidity(() => {
        const delta = Math.round(Math.cos(Date.now() / 1800) * 1.5);
        return Math.min(85, Math.max(45, 61 + delta));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isStreaming]);

  const bars = [
    Math.round((temperature - 15) * 4.2),
    Math.round((temperature - 14) * 4.5),
    Math.round((temperature - 16) * 4.0),
    Math.round((temperature - 13) * 4.8),
    Math.round((temperature - 15) * 4.4),
    Math.round((temperature - 12) * 5.1),
    Math.round((temperature - 14) * 4.6),
    Math.round((temperature - 11) * 5.3),
    Math.round((temperature - 13) * 4.9),
    Math.round((temperature - 10) * 5.6),
    Math.round((temperature - 12) * 5.2),
    Math.round((temperature - 9) * 5.8),
  ];

  const isHighTemp = temperature >= 27;

  return (
    <VisualShell
      label="Interactive IoT Telemetry"
      icon={<Activity size={14} strokeWidth={1.5} />}
    >
      <div className="absolute inset-x-4 bottom-4 top-16 sm:inset-x-6 sm:bottom-6 sm:top-20 flex flex-col justify-between">
        <div
          className="border p-4 sm:p-5 shadow-2xl backdrop-blur-md"
          style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Smart Room Monitor · ESP32 + DHT22
              </p>
              <p className="mt-1 text-base sm:text-xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
                Live Sensor Telemetry
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsStreaming((prev) => !prev)}
              className="border px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider transition-colors"
              style={{
                borderColor: isStreaming ? "var(--accent)" : "var(--border)",
                color: isStreaming ? "var(--accent)" : "var(--text-muted)",
                background: "var(--surface)",
              }}
            >
              {isStreaming ? "● Stream Active" : "○ Stream Paused"}
            </button>
          </div>

          <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
            <div
              className="border p-3"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Temperature
                </span>
                <span
                  className="rounded-full px-1.5 py-0.5 font-mono text-[7px] uppercase"
                  style={{
                    background: isHighTemp ? "rgba(239, 68, 68, 0.2)" : "rgba(200, 255, 61, 0.15)",
                    color: isHighTemp ? "#f87171" : "var(--accent)",
                  }}
                >
                  {isHighTemp ? "Elevated" : "Optimal"}
                </span>
              </div>
              <p className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                {temperature}°
                <span className="ml-1 text-xs font-normal text-[var(--text-secondary)]">C</span>
              </p>

              <div className="mt-2 flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setTemperature((t) => Number(Math.max(16, t - 0.5).toFixed(1)))}
                  className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[8px] hover:border-[var(--accent)]"
                >
                  -0.5°
                </button>
                <button
                  type="button"
                  onClick={() => setTemperature((t) => Number(Math.min(36, t + 0.5).toFixed(1)))}
                  className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[8px] hover:border-[var(--accent)]"
                >
                  +0.5°
                </button>
              </div>
            </div>

            <div
              className="border p-3"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Humidity
                </span>
                <span className="font-mono text-[7px] uppercase text-[var(--text-muted)]">
                  Relative
                </span>
              </div>
              <p className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                {humidity}
                <span className="ml-1 text-xs font-normal text-[var(--text-secondary)]">%</span>
              </p>

              <div className="mt-2 flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setHumidity((h) => Math.max(30, h - 2))}
                  className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[8px] hover:border-[var(--accent)]"
                >
                  -2%
                </button>
                <button
                  type="button"
                  onClick={() => setHumidity((h) => Math.min(95, h + 2))}
                  className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[8px] hover:border-[var(--accent)]"
                >
                  +2%
                </button>
              </div>
            </div>
          </div>

          <div
            className="mt-2.5 h-14 sm:h-16 border p-2 flex items-end gap-1"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {bars.map((h, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm transition-all duration-500"
                style={{
                  height: `${Math.min(100, Math.max(15, h))}%`,
                  background: isHighTemp ? "#f87171" : "var(--accent)",
                  opacity: 0.35 + index * 0.05,
                }}
              />
            ))}
          </div>

          <div
            className="mt-2.5 flex items-center justify-between border px-2.5 py-1.5 font-mono text-[8px]"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span className="truncate text-[var(--text-muted)]">
              [MQTT esp32/dht22] → <strong className="text-[var(--accent)]">{`{"temp": ${temperature}, "hum": ${humidity}, "status": "${isHighTemp ? "ALERT" : "OK"}"}`}</strong>
            </span>
            <span className="shrink-0 text-[var(--text-muted)] uppercase tracking-wider ml-2">
              QoS 1
            </span>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

/* =========================================================
   CALCULATOR VISUAL (INTERACTIVE LIVE SUBNET CALCULATOR)
   ========================================================= */

function calculateSubnet(input: string) {
  const trimmed = input.trim();
  const match = trimmed.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!match) {
    return {
      valid: false,
      ip: trimmed,
      mask: "Invalid CIDR",
      hosts: "0",
      range: "Enter format: x.x.x.x/prefix",
      network: "—",
      broadcast: "—",
    };
  }

  const octets = [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
  const prefix = Number(match[5]);

  if (octets.some((o) => o < 0 || o > 255) || prefix < 0 || prefix > 32) {
    return {
      valid: false,
      ip: trimmed,
      mask: "Invalid Range",
      hosts: "0",
      range: "Prefix must be 0-32",
      network: "—",
      broadcast: "—",
    };
  }

  const ipInt = (octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3];
  const maskInt = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  const netInt = (ipInt & maskInt) >>> 0;
  const broadInt = (netInt | ~maskInt) >>> 0;

  const intToIp = (val: number) =>
    `${(val >>> 24) & 255}.${(val >>> 16) & 255}.${(val >>> 8) & 255}.${val & 255}`;

  const netmask = intToIp(maskInt);
  const network = intToIp(netInt);
  const broadcast = intToIp(broadInt);
  const totalUsable = prefix >= 31 ? (prefix === 31 ? 2 : 1) : Math.max(0, Math.pow(2, 32 - prefix) - 2);
  const firstUsable = prefix >= 31 ? network : intToIp(netInt + 1);
  const lastUsable = prefix >= 31 ? broadcast : intToIp(broadInt - 1);

  return {
    valid: true,
    ip: `${octets.join(".")}/${prefix}`,
    mask: netmask,
    hosts: totalUsable.toLocaleString(),
    range: `${firstUsable} — ${lastUsable}`,
    network,
    broadcast,
  };
}

function CalculatorVisual() {
  const [cidr, setCidr] = useState("192.168.1.0/24");
  const result = useMemo(() => calculateSubnet(cidr), [cidr]);

  const presets = [
    { label: "/24 LAN", value: "192.168.1.0/24" },
    { label: "/16 VPC", value: "10.0.0.0/16" },
    { label: "/28 Cloud", value: "172.16.4.0/28" },
  ];

  return (
    <VisualShell
      label="Live Subnet Calculator"
      icon={<Calculator size={14} strokeWidth={1.5} />}
    >
      <div className="absolute inset-x-4 bottom-4 top-16 sm:inset-x-6 sm:bottom-6 sm:top-20 flex flex-col justify-between">
        <div
          className="border p-4 sm:p-5 shadow-2xl backdrop-blur-md"
          style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--accent)]">
                CIDR Subnet Calculator
              </span>
            </div>
            <span
              className="border px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em]"
              style={{
                borderColor: result.valid ? "var(--accent)" : "var(--border)",
                color: result.valid ? "var(--accent)" : "var(--text-muted)",
              }}
            >
              {result.valid ? "Valid IPv4" : "Invalid CIDR"}
            </span>
          </div>

          <div className="mt-3">
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <input
                type="text"
                value={cidr}
                onChange={(e) => setCidr(e.target.value)}
                placeholder="192.168.1.0/24"
                className="border px-3 py-2 font-mono text-xs sm:text-sm outline-none transition-colors focus:border-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                }}
              />
              <span
                className="grid place-items-center px-3 font-mono text-[9px] font-bold uppercase tracking-wider"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-contrast)",
                }}
              >
                CALC
              </span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[8px] uppercase text-[var(--text-muted)]">
                Presets:
              </span>
              {presets.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setCidr(p.value)}
                  className={`rounded border px-2 py-0.5 font-mono text-[8px] uppercase transition-colors ${
                    cidr === p.value
                      ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--surface)]"
                      : "border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div
              className="border p-2.5"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Netmask
              </p>
              <p className="mt-1 font-mono text-[10px] sm:text-xs font-semibold text-[var(--text-primary)] truncate">
                {result.mask}
              </p>
            </div>

            <div
              className="border p-2.5"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Usable Hosts
              </p>
              <p className="mt-1 font-mono text-[10px] sm:text-xs font-semibold text-[var(--accent)] truncate">
                {result.hosts}
              </p>
            </div>

            <div
              className="border p-2.5 col-span-2"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Usable Host Range
              </p>
              <p className="mt-1 font-mono text-[10px] sm:text-xs font-medium text-[var(--text-primary)] truncate">
                {result.range}
              </p>
            </div>
          </div>

          <div
            className="mt-2.5 flex items-center justify-between border px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span className="text-[var(--text-muted)]">
              Network: <strong className="text-[var(--text-secondary)]">{result.network}</strong>
            </span>
            <span className="text-[var(--text-muted)]">
              Broadcast: <strong className="text-[var(--text-secondary)]">{result.broadcast}</strong>
            </span>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

/* =========================================================
   SECURITY VISUAL (INTERACTIVE OWASP ZAP & HARDENING AUDIT)
   ========================================================= */

function SecurityVisual() {
  const [activeTab, setActiveTab] = useState<"findings" | "patch">("findings");
  const [selectedFinding, setSelectedFinding] = useState<number>(0);

  const findings = [
    {
      title: "SQL Injection Flaw",
      severity: "CRITICAL",
      cve: "CWE-89",
      location: "/api/booking/query",
      remediation: "Prepared statements & parameterized ORM queries enforced",
      status: "Patched",
    },
    {
      title: "Directory Path Traversal",
      severity: "HIGH",
      cve: "CWE-22",
      location: "/static/receipts/..",
      remediation: "Input canonicalization & restricted chroot filesystem path",
      status: "Patched",
    },
    {
      title: "Missing Security Headers",
      severity: "MEDIUM",
      cve: "CWE-1021",
      location: "Nginx Gateway",
      remediation: "Configured Strict-Transport-Security, CSP & X-Frame-Options",
      status: "Hardened",
    },
  ];

  return (
    <VisualShell
      label="Application Security Assessment"
      icon={<ShieldCheck size={14} strokeWidth={1.5} />}
    >
      <div className="absolute inset-x-4 bottom-4 top-16 sm:inset-x-6 sm:bottom-6 sm:top-20 flex flex-col justify-between">
        <div
          className="border p-4 sm:p-5 shadow-2xl backdrop-blur-md"
          style={{ borderColor: "var(--border)", background: "var(--surface-soft)" }}
        >
          <div
            className="flex items-center justify-between border-b pb-3"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                OWASP ZAP · Penetration Testing
              </p>
              <p className="text-base sm:text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                Docker Booking System
              </p>
            </div>

            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("findings")}
                className={`border px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider transition-colors ${
                  activeTab === "findings"
                    ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--surface)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Findings
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("patch")}
                className={`border px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider transition-colors ${
                  activeTab === "patch"
                    ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--surface)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                Docker Patch
              </button>
            </div>
          </div>

          {activeTab === "findings" ? (
            <div className="mt-3 space-y-2">
              {findings.map((f, i) => (
                <div
                  key={f.title}
                  onClick={() => setSelectedFinding(i)}
                  className={`cursor-pointer border p-2.5 transition-colors ${
                    selectedFinding === i
                      ? "border-[var(--accent)] bg-[var(--surface)]"
                      : "border-[var(--border)] bg-[var(--surface)]/60 hover:border-[var(--border-strong)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded px-1.5 py-0.5 font-mono text-[7px] font-bold"
                        style={{
                          background:
                            f.severity === "CRITICAL"
                              ? "rgba(239, 68, 68, 0.2)"
                              : f.severity === "HIGH"
                              ? "rgba(249, 115, 22, 0.2)"
                              : "rgba(234, 179, 8, 0.2)",
                          color:
                            f.severity === "CRITICAL"
                              ? "#f87171"
                              : f.severity === "HIGH"
                              ? "#fb923c"
                              : "#facc15",
                        }}
                      >
                        {f.severity}
                      </span>
                      <span className="font-mono text-xs font-medium text-[var(--text-primary)]">
                        {f.title}
                      </span>
                    </div>

                    <span className="font-mono text-[8px] font-semibold uppercase text-[var(--accent)]">
                      ✓ {f.status}
                    </span>
                  </div>

                  {selectedFinding === i && (
                    <div
                      className="mt-2 border-t pt-2 font-mono text-[8px] text-[var(--text-muted)] space-y-1"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p>
                        Endpoint: <span className="text-[var(--text-secondary)]">{f.location}</span>
                      </p>
                      <p>
                        Mitigation: <span className="text-[var(--accent)]">{f.remediation}</span>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className="mt-3 overflow-x-auto border p-3 font-mono text-[9px] leading-relaxed"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="text-[var(--text-muted)] border-b pb-1 mb-2"># nginx.security.conf (Docker Hardening Diff)</div>
              <div className="text-emerald-400">+ add_header X-Frame-Options &quot;DENY&quot; always;</div>
              <div className="text-emerald-400">+ add_header X-Content-Type-Options &quot;nosniff&quot; always;</div>
              <div className="text-emerald-400">+ add_header Content-Security-Policy &quot;default-src &apos;self&apos;&quot;;</div>
              <div className="text-emerald-400">+ add_header Strict-Transport-Security &quot;max-age=31536000&quot;;</div>
              <div className="text-red-400 mt-1">- server_tokens on;</div>
              <div className="text-emerald-400">+ server_tokens off;</div>
            </div>
          )}

          <div
            className="mt-2.5 flex items-center justify-between border px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span className="text-[var(--text-muted)]">
              Retesting Score: <strong className="text-[var(--accent)]">100% PASS</strong>
            </span>
            <span className="text-[var(--text-muted)]">
              Compliance: <strong className="text-[var(--text-primary)]">OWASP TOP 10 VERIFIED</strong>
            </span>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

/* =========================================================
   VISUAL SELECTOR
   ========================================================= */

function ProjectVisual({
  visual,
}: {
  visual: Project["visual"];
}) {
  if (visual === "calculator") {
    return <CalculatorVisual />;
  }

  if (visual === "security") {
    return <SecurityVisual />;
  }

  return <IoTVisual />;
}

/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const destinationUrl =
    project.liveUrl ?? project.githubUrl;

  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="group relative"
    >
      {/* Project number line */}

      <div
        className="
          mb-5
          flex
          items-center
          justify-between

          sm:mb-7
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              font-mono
              text-sm
              tracking-[-0.02em]
            "
            style={{
              color: "var(--accent)",
            }}
          >
            /{project.number}
          </span>

          <span
            className="
              h-px
              w-8

              sm:w-12
            "
            style={{
              background: "var(--border)",
            }}
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]

              sm:text-[9px]
              sm:tracking-[0.28em]
            "
            style={{
              color: "var(--text-muted)",
            }}
          >
            Selected project
          </span>
        </div>

        <span
          className="
            hidden
            text-[8px]
            uppercase
            tracking-[0.25em]

            sm:block
          "
          style={{
            color: "var(--text-muted)",
          }}
        >
          0{index + 1} / 03
        </span>
      </div>

      {/* Main layout */}

      <div
        className={`
          grid
          items-center
          gap-8

          lg:grid-cols-[1.12fr_0.88fr]
          lg:gap-14

          xl:gap-20

          ${
            reversed
              ? "lg:[&>.project-visual]:order-2"
              : ""
          }
        `}
      >
        {/* Visual */}

        <div className="project-visual">
          {destinationUrl ? (
            <a
              href={destinationUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="
                group/visual
                relative
                block
                overflow-hidden
                outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--accent)]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[var(--background)]
              "
            >
              <div
                className="
                  transition-transform
                  duration-1000
                  ease-[cubic-bezier(0.19,1,0.22,1)]
                  group-hover/visual:scale-[1.015]
                "
              >
                <ProjectVisual
                  visual={project.visual}
                />
              </div>

              {/* Hover overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover/visual:opacity-100
                "
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, transparent), transparent 45%)",
                }}
              />

              {/* Open button */}

              <span
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  grid
                  h-10
                  w-10
                  translate-y-1
                  place-items-center
                  border
                  opacity-0
                  transition-all
                  duration-500
                  group-hover/visual:translate-y-0
                  group-hover/visual:opacity-100

                  sm:right-5
                  sm:top-5
                  sm:h-11
                  sm:w-11
                "
                style={{
                  borderColor: "var(--accent)",
                  background: "var(--accent)",
                  color: "var(--accent-contrast)",
                }}
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                />
              </span>

              {/* Category */}

              <span
                className="
                  absolute
                  bottom-4
                  left-4
                  z-30
                  border
                  px-3
                  py-1.5
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  backdrop-blur-md

                  sm:bottom-5
                  sm:left-5
                  sm:text-[8px]
                "
                style={{
                  borderColor: "var(--border)",
                  background:
                    "color-mix(in srgb, var(--background) 82%, transparent)",
                  color: "var(--text-primary)",
                }}
              >
                {project.category}
              </span>
            </a>
          ) : (
            <ProjectVisual
              visual={project.visual}
            />
          )}
        </div>

        {/* Information */}

        <div
          className="
            lg:py-5

            xl:py-8
          "
        >
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]

              sm:text-[9px]
              sm:tracking-[0.25em]
            "
            style={{
              color: "var(--accent)",
            }}
          >
            {project.category}
          </p>

          <h3
            className="
              mt-3
              max-w-xl
              text-3xl
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]

              sm:mt-4
              sm:text-4xl

              lg:text-[clamp(2.5rem,4vw,4.4rem)]
            "
            style={{
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7

              sm:mt-6
              sm:text-base
              sm:leading-7
            "
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}

          <div
            className="
              mt-6
              flex
              max-w-xl
              flex-wrap
              gap-2
            "
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  border
                  px-2.5
                  py-1.5
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.1em]
                  transition-colors
                  duration-500

                  sm:px-3
                  sm:text-[9px]
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-soft)",
                  color: "var(--text-secondary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-4

              sm:mt-8
              sm:gap-5
            "
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  group/link
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  transition-transform
                  duration-500
                  hover:-translate-y-0.5

                  sm:text-[11px]
                "
                style={{
                  color: "var(--accent)",
                }}
              >
                View project

                <ExternalLink
                  size={15}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-500
                    group-hover/link:translate-x-0.5
                    group-hover/link:-translate-y-0.5
                  "
                />
              </a>
            )}

            {project.liveUrl &&
              project.githubUrl && (
                <span
                  className="
                    h-5
                    w-px
                  "
                  style={{
                    background: "var(--border)",
                  }}
                />
              )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  group/github
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  transition-transform
                  duration-500
                  hover:-translate-y-0.5

                  sm:text-[11px]
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                <FaGithub
                  size={17}
                  className="
                    transition-colors
                    duration-500
                    group-hover/github:text-[var(--accent)]
                  "
                />

                {project.liveUrl
                  ? "Source"
                  : "View on GitHub"}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}

      {index < projects.length - 1 && (
        <div
          className="
            mt-14
            h-px
            w-full

            sm:mt-20

            lg:mt-28
          "
          style={{
            background:
              "linear-gradient(90deg, var(--border), transparent)",
          }}
        />
      )}
    </motion.article>
  );
}

/* =========================================================
   WORK SECTION
   ========================================================= */

export default function Work() {
  return (
    <SectionShell
      id="work"
      eyebrow="Selected work"
      title="Projects made to solve real problems."
      description="A selection of projects spanning IoT, web development, networking, and cybersecurity."
      contentClassName="
        space-y-14
        sm:space-y-20
        lg:space-y-28
      "
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
        />
      ))}

      {/* More work */}

      <motion.a
        href="https://github.com/mdWalidur"
        target="_blank"
        rel="noreferrer"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="
          group
          mt-12
          flex
          min-h-16
          items-center
          justify-between
          gap-4
          border-y
          px-1
          py-5
          outline-none
          transition-all
          duration-700

          sm:mt-20
          sm:min-h-20
          sm:py-6

          focus-visible:ring-2
          focus-visible:ring-[var(--accent)]
        "
        style={{
          borderColor: "var(--border)",
          color: "var(--text-primary)",
        }}
      >
        <span className="flex items-center gap-3">
          <span
            className="
              grid
              h-8
              w-8
              place-items-center
              border
            "
            style={{
              borderColor: "var(--border)",
              color: "var(--accent)",
              background: "var(--surface-soft)",
            }}
          >
            <FaGithub size={15} />
          </span>

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]

              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            Explore more work on GitHub
          </span>
        </span>

        <ArrowUpRight
          size={19}
          strokeWidth={1.5}
          style={{
            color: "var(--accent)",
          }}
          className="
            shrink-0
            transition-transform
            duration-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </motion.a>
    </SectionShell>
  );
}