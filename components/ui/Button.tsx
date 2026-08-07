import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-7 py-4 font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-emerald-500 text-white hover:bg-emerald-600 hover:-translate-y-1 shadow-lg shadow-emerald-500/20"
          : "border border-white/15 hover:border-emerald-500 hover:bg-white/5",
        className
      )}
    >
      {children}
    </Link>
  );
}