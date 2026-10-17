"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getPages } from "@/lib/page";
import type { BtechCreditTransfer } from "@/lib/page";

export function BTechCreditTransferSection() {
  const [data, setData] = useState<BtechCreditTransfer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.btech_credit_transfer;

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            content1: apiData.content1 ?? {},
            content2: apiData.content2 ?? {},
            features: Array.isArray(apiData.features) ? apiData.features : [],
          });
        }
      } catch (error) {
        console.error("Failed to load B.Tech data:", error);
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
      <section id="btech" className="bg-white px-6 py-16 text-center">
        Loading B.Tech content...
      </section>
    );
  }

  // Do not render hardcoded fallback content.
  if (!data) {
    return null;
  }

  return (
    <section
      id="btech"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left Column: Dynamic Image */}
        <ScrollReveal delay={100}>
          <div className="relative h-[400px] w-full overflow-hidden shadow-sm sm:h-[480px] lg:h-[580px] lg:rounded-r-3xl">
            {data.content1.image && (
              <img
                src={data.content1.image}
                alt={data.content1.heading || "B.Tech credit transfer"}
                className="h-full w-full object-cover object-center"
              />
            )}

            <div className="absolute bottom-0 left-0 rounded-tr-2xl bg-[#F6921E] px-7 py-4 shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                {data.content1.title}
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {data.content1.heading}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Dynamic Content */}
        <ScrollReveal delay={250}>
          <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {data.content2.title}
            </span>

            <h2 className="font-heading mt-4 max-w-[620px] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl">
              {data.content2.heading}
            </h2>

            <p className="mt-6 max-w-[600px] text-base leading-7 text-neutral-800">
              {data.content2.description}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(data.features ?? []).map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-start gap-2 border-t border-neutral-200 pt-3"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#F6921E]"
                    strokeWidth={2}
                  />

                  <span className="text-sm font-medium text-neutral-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button
              href="#counselling"
              variant="blue"
              size="md"
              className="mt-8"
            >
              KNOW YOUR OPTIONS
              <ArrowRight size={16} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
