"use client";

import { useEffect, useState } from "react";
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
              ? apiData.recognitions.map((item) => ({
                  heading: item?.heading ?? "",
                  items: Array.isArray(item?.items) ? item.items : [],
                }))
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

  const recognitions = data.recognitions.filter(
    (item) => item.heading || item.items.length > 0,
  );

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
                "Explore academic recognition and credential evaluation frameworks."}
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Recognition Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {recognitions.map((item, idx) => (
            <ScrollReveal
              key={`${item.heading}-${idx}`}
              delay={120 * (idx + 1)}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              <div className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#F6921E]/40 hover:shadow-md">
                <h3 className="font-heading mb-5 text-xl font-bold leading-snug text-neutral-900">
                  {item.heading}
                </h3>

                <ul className="space-y-3">
                  {item.items.map((recognition, itemIdx) => (
                    <li
                      key={`${recognition}-${itemIdx}`}
                      className="flex items-start gap-3 text-sm font-medium leading-6 text-neutral-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6921E]" />
                      <span>{recognition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
