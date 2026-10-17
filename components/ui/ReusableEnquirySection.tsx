import Image from "next/image";
import { EnquiryForm, FormVariant } from "@/components/ui/EnquiryForm";
import { COLORS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ReusableEnquirySectionProps {
  id?: string;
  badgeText: string;
  badgeColor?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  formTitle: string;
  formSubtitle: string;
  formVariant?: FormVariant;
  buttonText?: string;
  sectionBg?: string;
}

const containerBgMap: Record<FormVariant, string> = {
  blue: COLORS.primaryDark, // #125488
  green: "#1B7FA9", // Rich Dark Cyan/Blue
  orange: "#D97800", // Rich Dark Orange
  darkBlue: "#0B3A60", // Deep Navy
  gold: "#D98E20", // Rich Dark Gold
};

export function ReusableEnquirySection({
  id,
  badgeText,
  badgeColor = "#1B75BB",
  title,
  description,
  imageSrc,
  imageAlt,
  formTitle,
  formSubtitle,
  formVariant = "blue",
  buttonText,
  sectionBg = "bg-[#F4F8FA]",
}: ReusableEnquirySectionProps) {
  return (
    <section id={id} className={`${sectionBg} py-20`}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 sm:px-12 md:px-16 lg:grid-cols-[1fr_580px] lg:items-center lg:px-24">
        <ScrollReveal delay={100}>
          <div>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: badgeColor }}
            >
              {badgeText}
            </span>
            <h2 className="font-heading mt-4 max-w-[650px] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-[620px] text-base leading-7 text-neutral-800">
              {description}
            </p>

            <div className="mt-8 relative min-h-[260px] max-w-[620px] overflow-hidden rounded-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div
            className="w-full h-full flex items-center justify-center rounded-2xl p-5 sm:p-7 shadow-sm transition-colors duration-300"
            style={{ backgroundColor: containerBgMap[formVariant] }}
          >
            <EnquiryForm
              title={formTitle}
              subtitle={formSubtitle}
              variant={formVariant}
              buttonText={buttonText}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
