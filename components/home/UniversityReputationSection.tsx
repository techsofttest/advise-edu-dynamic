"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getPages } from "@/lib/page";
import type { UniversityPathways } from "@/lib/page";

export function UniversityReputationSection() {
  const [data, setData] = useState<UniversityPathways | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.university_pathways;

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            content1: apiData.content1 ?? {},
            content2: apiData.content2 ?? {},
          });
        }
      } catch (error) {
        console.error("Failed to load university pathways:", error);
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
      <section
        id="about"
        className="bg-white py-16 text-center sm:py-20 lg:py-24"
      >
        Loading university pathways...
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const title = data.content1?.title ?? "";
  const imageUrl = data.content1?.image;
  const heading = data.content2?.heading ?? "";
  const description = data.content2?.description ?? "";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left Column: Image */}
        <ScrollReveal delay={100}>
          <div className="relative h-[400px] w-full overflow-hidden shadow-sm sm:h-[480px] lg:h-[580px] lg:rounded-r-3xl">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title || "University campus"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
                unoptimized
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-neutral-100 text-neutral-500">
                University image unavailable
              </div>
            )}

            <div className="absolute bottom-0 left-0 rounded-tr-2xl bg-[#F6921E] px-7 py-4 shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                {title}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Dynamic Text */}
        <ScrollReveal delay={250}>
          <div className="px-6 sm:px-12 md:px-16 lg:pr-24 lg:pl-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {title}
            </span>

            <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              {heading}
            </h2>

            <p className="mt-5 text-base font-medium leading-7 text-neutral-700">
              {description}
            </p>

            <Button href="#contact" variant="blue" size="md" className="mt-7">
              Speak with an advisor
              <ArrowRight size={16} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
