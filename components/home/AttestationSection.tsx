"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { getPages } from "@/lib/page";
import type { EmbassyDocumentServices } from "@/lib/page";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AttestationSection() {
  const [data, setData] = useState<EmbassyDocumentServices | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const pages = await getPages();
        const apiData = pages.embassy_document_services;

        if (isMounted && apiData?.id) {
          setData({
            ...apiData,
            content1: apiData.content1 ?? {},
            content2: {
              ...apiData.content2,
              services: Array.isArray(apiData.content2?.services)
                ? apiData.content2.services
                : [],
            },
          });
        }
      } catch (error) {
        console.error("Failed to load embassy document services:", error);
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
        id="attestation"
        className="relative overflow-hidden bg-[#F4F8FA] py-16 sm:py-20 lg:py-24"
      >
        <p className="text-center text-sm font-medium text-neutral-500">
          Loading embassy services...
        </p>
      </section>
    );
  }

  if (!data) return null;

  const content1 = data.content1;
  const content2 = data.content2;

  return (
    <section
      id="attestation"
      className="relative overflow-hidden bg-[#F4F8FA] py-16 sm:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left Column: Dynamic Image */}
        <ScrollReveal>
          <div className="relative h-[400px] w-full overflow-hidden shadow-sm sm:h-[480px] lg:h-[580px] lg:rounded-r-3xl">
            {content1.image ? (
              <Image
                src={content1.image}
                alt={content1.title || "Overseas education services"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="object-cover object-center"
                priority={false}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-neutral-200">
                <span className="text-sm text-neutral-500">
                  Image unavailable
                </span>
              </div>
            )}

            <div className="absolute bottom-0 left-0 rounded-tr-2xl bg-[#F6921E] px-7 py-4 shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                {content1.title || "Overseas Services"}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Dynamic Text and Services */}
        <div className="px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-24">
          <ScrollReveal delay={100}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {content2.title || "Embassy & Document Services"}
            </span>

            <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              {content2.heading || "Embassy Attestations"}
            </h2>

            <p className="mt-5 max-w-[600px] text-base font-medium leading-7 text-neutral-700">
              {content2.description ||
                "Guidance and assistance for document attestation requirements for overseas education and professional purposes."}
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 border-t border-neutral-300 sm:grid-cols-2">
            {content2.services.map((item, index) => (
              <ScrollReveal
                key={`${item}-${index}`}
                delay={(index % 4) * 60 + 150}
              >
                <a
                  href="#contact"
                  className="group flex items-center justify-between border-b border-neutral-300 py-4 pr-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#F6921E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-neutral-900 group-hover:text-[#1B75BB]">
                      {item}
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
