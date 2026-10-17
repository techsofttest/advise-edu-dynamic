"use client";

import { useEffect, useState } from "react";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getPages } from "@/lib/page";
import type { UniversityGuidance } from "@/lib/page";

export function CounsellorSection() {
  const [data, setData] = useState<UniversityGuidance | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.university_guidance;

        if (isMounted && apiData?.id) {
          setData(apiData);
        }
      } catch (error) {
        console.error("Failed to load university guidance:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="relative z-20 bg-[#1B75BB] py-8 text-center text-white">
        Loading university guidance...
      </section>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <section className="relative z-20 bg-[#1B75BB]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-8 sm:px-12 md:px-16 lg:grid-cols-[1fr_580px] lg:px-24 lg:py-12">
        <ScrollReveal>
          <div className="text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {data.title}
            </span>

            <h2 className="font-heading mt-4 max-w-[620px] text-4xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
              {data.heading}
            </h2>

            <p className="mt-5 max-w-[560px] text-base font-medium leading-7 text-white">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative w-full max-w-[580px] justify-self-center rounded-2xl shadow-md lg:-mt-24 lg:-mb-16 lg:justify-self-end lg:z-30">
            <EnquiryForm
              title="Talk With University Counsellor"
              subtitle="Tell us about your academic background."
              variant="darkBlue"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
