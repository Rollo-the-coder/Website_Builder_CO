import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lift active:translate-y-0",
  secondary:
    "border border-line bg-surface text-ink hover:border-accent/35 hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0",
  ghost: "text-ink hover:text-accent",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
} & ComponentProps<typeof Link>;

export function ButtonLink({ href, variant = "primary", className, children, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<"button">;

export function Button({ variant = "primary", className, children, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
