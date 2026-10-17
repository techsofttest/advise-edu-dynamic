"use client";

import { useEffect, useState } from "react";
import { getPages } from "@/lib/page";
import type { NeedMoreInformation } from "@/lib/page";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MoreDetailsSection() {
  const [data, setData] = useState<NeedMoreInformation | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();

        if (isMounted && pages.need_more_information?.id) {
          setData(pages.need_more_information);
        }
      } catch (error) {
        console.error("Failed to load more information section:", error);
      }
    }

    void loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const content = data?.content1;

  return (
    <section className="relative z-20 bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-8 sm:px-12 md:px-16 lg:grid-cols-[1fr_580px] lg:px-24 lg:py-12">
        <ScrollReveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {content?.title || "Need More Information?"}
            </span>

            <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
              {content?.heading || "Tell us what you need."}
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-800">
              {content?.description ||
                "Leave your details and our team will help you understand the available academic options."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative w-full max-w-[580px] justify-self-center rounded-2xl border-2 border-gray-300 shadow-md lg:-mt-20 lg:-mb-16 lg:z-30 lg:justify-self-end">
            <EnquiryForm
              title="More Details"
              subtitle="We will get in touch with you."
              variant="darkBlue"
              compact
              buttonText="SUBMIT"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
