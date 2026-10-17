"use client";

import { useEffect, useState } from "react";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { getPages } from "@/lib/page";

export interface AboutCTASectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export function AboutCTASection({
  badge,
  title,
  subtitle,
}: AboutCTASectionProps) {
  const [apiContent, setApiContent] = useState({
    badge: "Get In Touch",
    title: "Ready to take the next step in your education?",
    subtitle:
      "Our senior academic counselors are ready to evaluate your previous marksheets, credit eligibility, and university options.",
  });

  useEffect(() => {
    async function fetchGetInTouch() {
      const pages = await getPages();
      const content = pages.get_in_touch.content1;

      setApiContent({
        badge: content.title || "Get In Touch",
        title:
          content.heading || "Ready to take the next step in your education?",
        subtitle:
          content.description ||
          "Our senior academic counselors are ready to evaluate your previous marksheets, credit eligibility, and university options.",
      });
    }

    fetchGetInTouch();
  }, []);

  return (
    <section className="relative z-20 bg-[#F6921E]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-8 sm:px-12 md:px-16 lg:grid-cols-[1fr_580px] lg:px-24 lg:py-12">
        <div className="text-white">
          <span className="text-xs font-bold uppercase tracking-wider text-white/90">
            {badge ?? apiContent.badge}
          </span>

          <h2 className="font-heading mt-4 max-w-[620px] text-4xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
            {title ?? apiContent.title}
          </h2>

          <p className="mt-5 max-w-[560px] text-base leading-7 text-white font-medium">
            {subtitle ?? apiContent.subtitle}
          </p>
        </div>

        <div className="border-2 border-white w-full max-w-[580px] justify-self-center lg:justify-self-end relative lg:-mt-24 lg:-mb-16 lg:z-30 shadow-md rounded-2xl">
          <EnquiryForm
            title="Speak With Our Advisor"
            subtitle="Fill out your details below and our team will get in touch."
            variant="blue"
          />
        </div>
      </div>
    </section>
  );
}
