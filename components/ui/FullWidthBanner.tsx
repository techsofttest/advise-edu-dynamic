import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export interface FullWidthBannerProps {
  imageSrc?: string;
  alt?: string;
  // Legacy text overlay props (optional)
  badge?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  bgImage?: string;
  variant?: "primary" | "secondary" | "accent";
}

export function FullWidthBanner({
  imageSrc,
  alt = "Service Banner",
  badge,
  title,
  subtitle,
  buttonText,
  buttonHref,
  bgImage,
  variant = "primary",
}: FullWidthBannerProps) {
  // If an imageSrc is passed directly, display image only full-width banner
  if (imageSrc) {
    const targetHref = buttonHref || "#check-eligibility";
    return (
      <ScrollReveal>
        <a
          href={targetHref}
          className="block w-full overflow-hidden bg-neutral-100 transition-opacity hover:opacity-95"
        >
          <div className="relative w-full">
            <Image
              src={imageSrc}
              alt={alt}
              width={1920}
              height={400}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </div>
        </a>
      </ScrollReveal>
    );
  }

  // Fallback to legacy text banner layout if title is provided
  const gradients = {
    primary: "from-[#1B75BB] to-[#125488]",
    secondary: "from-[#125488] to-[#1B75BB]",
    accent: "from-[#F6921E] to-[#FAAF40]",
  };

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 text-white">
      {bgImage && (
        <Image
          src={bgImage}
          alt={title || alt}
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority={false}
        />
      )}

      <div
        className={`relative z-10 bg-gradient-to-r ${gradients[variant]} px-6 py-12 sm:px-12 md:px-16 lg:px-24 sm:py-16`}
      >
        <ScrollReveal>
          <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-[750px]">
              {badge && (
                <span className="mb-3 inline-block rounded-md bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {badge}
                </span>
              )}

              {title && (
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}

              {subtitle && (
                <p className="mt-3 text-base text-white/90 font-medium sm:text-lg">
                  {subtitle}
                </p>
              )}
            </div>

            {buttonText && buttonHref && (
              <Button href={buttonHref} variant="orange" size="md">
                {buttonText}
              </Button>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

