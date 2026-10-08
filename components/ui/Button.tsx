import React from "react";

export type ButtonVariant =
  | "orange"
  | "blue"
  | "gold"
  | "cyan"
  | "darkBlue"
  | "outline"
  | "white"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "orange",
      size = "md",
      fullWidth = false,
      href,
      target,
      rel,
      children,
      className = "",
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    // Sleek modern base styles: smooth tactile hover, crisp clean stroke, no chunky cartoon borders
    const baseStyles =
      "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-lg border shadow-none cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none select-none";

    const variantStyles: Record<ButtonVariant, string> = {
      orange:
        "bg-[#F6921E] text-white border-[#F6921E] hover:bg-[#e08316] hover:border-[#e08316]",
      blue:
        "bg-[#1B75BB] text-white border-[#1B75BB] hover:bg-[#15639e] hover:border-[#15639e]",
      gold:
        "bg-[#FAAF40] text-neutral-900 border-[#FAAF40] hover:bg-[#e59e31] hover:border-[#e59e31]",
      cyan:
        "bg-[#26A9E0] text-white border-[#26A9E0] hover:bg-[#1f94c6] hover:border-[#1f94c6]",
      darkBlue:
        "bg-[#125488] text-white border-[#125488] hover:bg-[#0e436d] hover:border-[#0e436d]",
      outline:
        "bg-transparent text-[#1B75BB] border-[#1B75BB] hover:bg-[#1B75BB] hover:text-white",
      white:
        "bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300",
      ghost:
        "bg-transparent text-[#1B75BB] border-transparent hover:bg-[#1B75BB]/10",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "px-4 py-2.5 text-xs gap-1.5 min-h-[38px]",
      md: "px-6 py-3.5 text-sm gap-2 min-h-[48px]",
      lg: "px-8 py-4 text-base gap-2.5 min-h-[56px]",
      icon: "p-3 text-sm flex items-center justify-center rounded-lg aspect-square min-h-[44px]",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${
      sizeStyles[size]
    } ${fullWidth ? "w-full flex" : ""} ${className}`.trim();

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        type={type}
        disabled={disabled}
        className={combinedClassName}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
