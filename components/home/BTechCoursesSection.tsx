"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getPages } from "@/lib/page";
import type { CoursesBranches } from "@/lib/page";

export function BTechCoursesSection() {
  const [data, setData] = useState<CoursesBranches | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.courses_branches;

        // console.log("B.Tech courses API data:", apiData);
        // console.log("B.Tech branches:", apiData?.branches);

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            branches: Array.isArray(apiData.branches) ? apiData.branches : [],
          });
        }
      } catch (error) {
        console.error("Failed to load B.Tech courses:", error);
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
      <section className="bg-[#F4F8FA] py-20 text-center">
        Loading courses...
      </section>
    );
  }

  // Do not display hardcoded fallback content.
  if (!data) {
    return null;
  }

  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {data.title}
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {data.heading}
            </h2>

            <p className="mt-2 text-sm font-medium text-neutral-700">
              {data.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
          {(data.branches ?? []).map((course, index) => (
            <ScrollReveal key={`${course}-${index}`} delay={(index % 6) * 50}>
              <a
                href="#check-eligibility"
                className="group flex items-center gap-3 border-t border-neutral-300 py-3.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#F6921E] text-xs font-bold text-[#F6921E]">
                  {index + 1}
                </span>

                <span className="flex-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-[#1B75BB]">
                  {course}
                </span>

                <ChevronRight
                  size={16}
                  className="text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-[#F6921E]"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
