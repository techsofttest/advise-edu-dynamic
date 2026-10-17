import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface HeroSectionProps {
  banner: {
    id: number;
    heading1: string;
    heading2: string;
    subtitle: string;
    description: string;
  };
}

export function HeroSection({ banner }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full lg:h-screen pt-20 overflow-hidden bg-neutral-900 text-white"
    >
      {/* Background Image */}
      <Image
        src="/home-hero/h7.png"
        alt="Academic Guidance Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full min-h-[550px] max-w-[1440px] flex-col justify-between px-6 py-12 sm:px-12 md:px-16 lg:px-24 lg:py-20">
        {/* Top Left Header */}
        <ScrollReveal delay={100}>
          <div className="max-w-[800px]">
            <h1 className="font-heading text-[42px] font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[72px]">
              {banner.heading1}
            </h1>

            <h2 className="font-heading text-[42px] font-bold leading-[0.98] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[72px]">
              {banner.heading2}
            </h2>

            <p className="mt-3 text-base font-bold text-white sm:text-xl md:text-2xl">
              {banner.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Bottom Left Description & Buttons */}
        <ScrollReveal delay={250}>
          <div className="mt-8 max-w-[650px]">
            <p className="text-lg leading-7 text-neutral-200 font-medium sm:text-md">
              {banner.description}
            </p>

            <div className="mt-8">
              <a
                href="#check-eligibility"
                className="inline-flex items-center group cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Connected Pill/Rectangle */}
                <div className="flex items-center bg-white text-neutral-950 pl-6 pr-4 py-3.5 rounded-full font-heading text-md font-black shadow-lg group-hover:bg-[#e08316] group-hover:text-white transition-colors border-r border-neutral-950/20">
                  Check My Eligibility Now
                </div>

                {/* Connected Circle Button */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F6921E] text-white shadow-lg group-hover:bg-[#e08316] transition-colors">
                  <svg
                    className="h-8 w-8 stroke-white transform -rotate-55 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
