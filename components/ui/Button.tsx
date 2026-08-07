import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className,
  showArrow = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:-translate-y-1 hover:bg-emerald-600"
          : "border border-white/15 hover:border-emerald-500 hover:bg-white/5",
        className
      )}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}