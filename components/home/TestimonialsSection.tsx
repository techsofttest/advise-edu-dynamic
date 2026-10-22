"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Testimonial {
  id: number;
  name: string;
  description: string;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })],
  );

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/testimonial`,
        );

        if (!res.ok) throw new Error("Failed to fetch testimonials");

        const data = await res.json();
        setTestimonials(data.data || []);
      } catch (error) {
        console.error("Testimonials API Error:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-[#125488] py-20 text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FAAF40]">
              Testimonials
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              What students say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div
            className="mt-12 overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex -ml-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="pl-6 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
                >
                  <div className="min-h-[360px] bg-white/[0.06] p-6 sm:p-7 rounded-xl shadow-sm flex flex-col justify-between select-none">
                    <div
                      className="text-2xl leading-7 text-white font-medium"
                      dangerouslySetInnerHTML={{
                        __html: `“${testimonial.description.replace(
                          /<\/?p>/g,
                          "",
                        )}”`,
                      }}
                    />

                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full text-white border border-white shrink-0">
                        <User className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-sm font-bold tracking-wider text-white/90">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={scrollPrev}
                aria-label="Previous Testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAAF40] text-black transition-all hover:bg-[#FAAF40]/70 hover:text-neutral-900 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={scrollNext}
                aria-label="Next Testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAAF40] text-black transition-all hover:bg-[#FAAF40]/70 hover:text-neutral-900 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
