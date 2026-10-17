"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getPages } from "@/lib/page";
import type { RecognitionsApprovals } from "@/lib/page";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AccreditationSection() {
  const [data, setData] = useState<RecognitionsApprovals | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.recognitions_approvals;

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            recognitions: Array.isArray(apiData.recognitions)
              ? apiData.recognitions
              : [],
          });
        }
      } catch (error) {
        console.error("Failed to load recognitions and approvals:", error);
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
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-12 md:px-16 lg:px-24">
          <p className="text-sm font-medium text-neutral-500">
            Loading recognitions and approvals...
          </p>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Dynamic Header */}
        <ScrollReveal delay={100}>
          <div className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {data.name || "Recognitions & Approvals"}
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              {data.heading || "Accreditation"}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base font-medium text-neutral-600">
              {data.description ||
                "University approvals ensuring legal validity, degree equivalence, and national educational standards."}
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Recognition Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {data.recognitions.map((item, idx) => (
            <ScrollReveal
              key={`${item.name}-${idx}`}
              delay={120 * (idx + 1)}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#F6921E]/40 hover:shadow-md">
                <div>
                  {/* Badge and Logo */}
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="inline-block font-bold text-gray-900">
                      {item.name}
                    </div>
                  </div>

                  {/* Dynamic Title */}
                  <h3 className="font-heading mb-4 max-w-[80%] text-xl font-bold leading-snug text-neutral-900">
                    {item.heading}
                  </h3>

                  {/* Dynamic Description */}
                  <p className="text-sm font-medium leading-6 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
