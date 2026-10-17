"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

import { getPages } from "@/lib/page";
import type { ArtsScience } from "@/lib/page";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ArtsScienceSection() {
  const [data, setData] = useState<ArtsScience | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.arts_science;

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            courses: Array.isArray(apiData.courses) ? apiData.courses : [],
          });
        }
      } catch (error) {
        console.error("Failed to load Arts & Science data:", error);
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
      <section id="arts" className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-12 md:px-16 lg:px-24">
          Loading courses...
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const courses = data.courses ?? [];

  return (
    <section id="arts" className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <ScrollReveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
                {data.name}
              </span>

              <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
                {data.heading}
              </h2>

              <p className="mt-5 max-w-[450px] text-base leading-7 text-neutral-800">
                {data.description}
              </p>

              <Button
                href="#check-eligibility"
                variant="orange"
                size="md"
                className="mt-7"
              >
                Enquire Now
                <ArrowRight size={16} />
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 border-t border-neutral-300 sm:grid-cols-2">
            {courses.map((course, index) => (
              <ScrollReveal key={`${course}-${index}`} delay={(index % 4) * 60}>
                <a
                  href="#check-eligibility"
                  className="group flex items-center justify-between border-b border-neutral-300 py-4 pr-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#F6921E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-semibold text-neutral-900 group-hover:text-[#1B75BB]">
                      {course}
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-neutral-500 group-hover:text-[#F6921E]"
                  />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
