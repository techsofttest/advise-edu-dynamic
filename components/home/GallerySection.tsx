"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const gallerySlides = [
  [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
    images.gallery5,
    images.gallery6,
  ],
  [
    images.gallery7,
    images.gallery8,
    images.gallery9,
    images.gallery10,
    images.gallery11,
    images.gallery12,
  ],
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-[#F4F8FA] py-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Gallery
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              A look inside our <br />academic environment
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          {/* Embla Carousel Viewport */}
          <div className="mt-10 overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {gallerySlides.map((slideImages, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {slideImages.map((image, imgIndex) => (
                      <div
                        key={image + imgIndex}
                        className="relative aspect-[1.25] overflow-hidden rounded-xl shadow-sm"
                      >
                        <Image
                          src={image}
                          alt={`Advise Edu gallery image ${slideIndex * 6 + imgIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls & Indicators */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {/* Indicators (Dots) to the left of control buttons */}
            <div className="flex items-center gap-2">
              {gallerySlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${selectedIndex === index
                    ? "w-8 bg-neutral-700"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                />
              ))}
            </div>

            {/* Navigation Control Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Previous Gallery Slide"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1B75BB] text-white transition-all hover:bg-[#125488] active:scale-95 cursor-pointer shadow-sm"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={scrollNext}
                aria-label="Next Gallery Slide"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1B75BB] text-white transition-all hover:bg-[#125488] active:scale-95 cursor-pointer shadow-sm"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

