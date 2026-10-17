"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getPages } from "@/lib/page";
import type { SimpleProcess, StepData } from "@/lib/page";

export function AdmissionStepsSection() {
  const [data, setData] = useState<SimpleProcess | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.simple_process;

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            content1: apiData.content1 ?? {},
            content2: {
              steps: Array.isArray(apiData.content2?.steps)
                ? apiData.content2.steps
                : [],
            },
          });
        }
      } catch (error) {
        console.error("Failed to load admission steps:", error);
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
        Loading admission steps...
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const steps: StepData[] = data.content2.steps;

  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal delay={100}>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {data.content1.title}
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {data.content1.heading}
            </h2>

            <p className="mt-3 text-sm font-medium text-neutral-700">
              {data.content1.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Line Container */}
        <ScrollReveal delay={200} className="w-full">
          {(isVisible) => (
            <div className="relative mb-2 h-[2px] w-full overflow-hidden bg-neutral-300">
              <div
                className={`absolute inset-0 origin-left bg-gradient-to-r from-[#F6921E] via-[#1B75BB] to-[#F6921E] transition-transform duration-[3200ms] ease-out ${
                  isVisible ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </div>
          )}
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {steps.map((step, idx) => (
            <ScrollReveal key={`${step.number}-${idx}`} delay={150 * (idx + 1)}>
              <div className="h-full px-5 py-7 first:pl-0 md:border-r md:border-neutral-300 md:last:border-r-0">
                <div className="text-3xl font-bold text-[#F6921E]">
                  {step.number}
                </div>

                <h3 className="font-heading mt-4 text-3xl font-semibold text-neutral-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-neutral-700">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
