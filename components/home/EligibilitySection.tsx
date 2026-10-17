"use client";

import { useEffect, useState } from "react";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getPages } from "@/lib/page";
import type { TakeTheFirstStep } from "@/lib/page";

const defaultData: TakeTheFirstStep = {
  id: 1,
  title: "Take the first step",
  heading1: "Check",
  heading2: "Eligibility",
  description:
    "Find out whether your academic history may qualify you for an alternative pathway to complete your degree.",
};

export function EligibilitySection() {
  const [data, setData] = useState<TakeTheFirstStep>(defaultData);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      const pages = await getPages();

      if (isMounted && pages.take_the_first_step.id !== 0) {
        setData({
          ...defaultData,
          ...pages.take_the_first_step,
        });
      }
    }

    void loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="check-eligibility" className="relative z-20 bg-[#F4F8FA]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-12 sm:px-12 md:px-16 lg:grid-cols-[1fr_580px] lg:px-24 lg:py-16">
        {/* Left Text Content */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {data.title}
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold leading-none tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              {data.heading1}
              <br />
              {data.heading2}
            </h2>

            <p className="mt-4 max-w-md text-base font-medium leading-7 text-neutral-700">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Right Form: Overlapping Hero Section on Desktop Only */}
        <ScrollReveal delay={200}>
          <div className="relative w-full max-w-[580px] justify-self-center rounded-2xl shadow-md lg:-mt-36 lg:z-30 lg:justify-self-end">
            <EnquiryForm
              title="Take the First Step"
              subtitle="Enter your details, and our academic advisor will guide you through the next steps."
              variant="orange"
              buttonText="CHECK ELIGIBILITY"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
