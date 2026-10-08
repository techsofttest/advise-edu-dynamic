import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { attestations, images } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AttestationSection() {
  return (
    <section id="attestation" className="relative bg-[#F4F8FA] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left Column: Full Width Image on Left Edge */}
        <ScrollReveal>
          <div className="relative h-[400px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden lg:rounded-r-3xl shadow-sm">
            <Image
              src='/admission/Professional Visa Consultation Meeting.png'
              alt="Overseas education services"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
            />

            <div className="absolute bottom-0 left-0 bg-[#F6921E] px-7 py-4 rounded-tr-2xl shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                Overseas Services
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Text & Content */}
        <div className="px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-24">
          <ScrollReveal delay={100}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Embassy & Document Services
            </span>

            <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              Embassy Attestations
            </h2>

            <p className="mt-5 max-w-[600px] text-base leading-7 text-neutral-700 font-medium">
              Advise Edu provides guidance and assistance for document attestation requirements for overseas education and professional purposes.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 border-t border-neutral-300 sm:grid-cols-2">
            {attestations.map((item, index) => (
              <ScrollReveal key={item} delay={(index % 4) * 60 + 150}>
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

