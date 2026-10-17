"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { getPages } from "@/lib/page";
import type { RecognizedBodies } from "@/lib/page";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AffiliationSection() {
  const [data, setData] = useState<RecognizedBodies | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.recognized_bodies;

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            bodies: Array.isArray(apiData.bodies) ? apiData.bodies : [],
          });
        }
      } catch (error) {
        console.error("Failed to load recognized bodies:", error);
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
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-12 md:px-16 lg:px-24">
          Loading recognized bodies...
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal delay={100}>
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
            {data.name || "Recognized Bodies"}
          </span>

          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
            {data.heading || "Affiliation"}
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-sm font-medium leading-6 text-neutral-600">
            {data.description ||
              "University, programme and academic information should always be understood before making an important education decision."}
          </p>
        </ScrollReveal>

        {/* Dynamic Recognized Bodies Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.bodies.map((item, idx) => (
            <ScrollReveal key={`${item.name}-${idx}`} delay={150 * (idx + 1)}>
              <div className="flex h-full flex-col items-center justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#F6921E]/40 hover:shadow-md">
                {/* Logo */}
                <div className="relative mb-4 h-16 w-16 shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name || "Recognized body"}
                      fill
                      sizes="64px"
                      unoptimized
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-neutral-500">
                      {item.name?.slice(0, 3) || "N/A"}
                    </div>
                  )}
                </div>

                {/* Body Name */}
                <h3 className="font-heading mb-1 text-xl font-bold text-neutral-900">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="mb-4 flex min-h-[42px] items-center justify-center text-sm font-semibold leading-snug text-neutral-800">
                  {item.description || ""}
                </p>

                {/* Website */}
                {item.website && (
                  <a
                    href={
                      /^https?:\/\//i.test(item.website)
                        ? item.website
                        : `https://${item.website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-sm font-semibold text-[#1B75BB] hover:underline"
                  >
                    {item.website
                      .replace(/^https?:\/\//i, "")
                      .replace(/\/$/, "")}
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
