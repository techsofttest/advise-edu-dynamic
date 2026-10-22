"use client";

import { useCallback, useState, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface GalleryImage {
  id: number;
  image: string | null;
}

interface GalleryApiResponse {
  status: boolean;
  message?: string;
  data: GalleryImage[];
}

export function GallerySection() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fetch gallery images from Laravel API
  useEffect(() => {
    const controller = new AbortController();

    async function fetchGallery() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/gallery`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to load gallery images.");
        }

        const result: GalleryApiResponse = await response.json();

        if (!result.status || !Array.isArray(result.data)) {
          throw new Error("Invalid gallery API response.");
        }

        setGalleryImages(
          result.data.filter((item) => item.image && item.image.trim() !== ""),
        );
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(
          err instanceof Error ? err.message : "Unable to load gallery images.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGallery();

    return () => controller.abort();
  }, []);

  // Automatically create slides containing six images each
  const gallerySlides = useMemo(() => {
    const slides: GalleryImage[][] = [];

    for (let i = 0; i < galleryImages.length; i += 6) {
      slides.push(galleryImages.slice(i, i + 6));
    }

    return slides;
  }, [galleryImages]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: gallerySlides.length > 1 },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        active: gallerySlides.length > 1,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="overflow-hidden bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Gallery
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              A look inside our <br />
              academic environment
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          {loading ? (
            <div className="mt-10 py-16 text-center text-neutral-500">
              Loading gallery images...
            </div>
          ) : error ? (
            <div className="mt-10 py-16 text-center text-red-600">{error}</div>
          ) : galleryImages.length === 0 ? (
            <div className="mt-10 py-16 text-center text-neutral-500">
              No gallery images available.
            </div>
          ) : (
            <>
              {/* Embla Carousel Viewport */}
              <div
                ref={emblaRef}
                className="mt-10 cursor-grab overflow-hidden active:cursor-grabbing"
              >
                <div className="flex">
                  {gallerySlides.map((slideImages, slideIndex) => (
                    <div key={slideIndex} className="min-w-0 flex-[0_0_100%]">
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                        {slideImages.map((item) => (
                          <div
                            key={item.id}
                            className="relative aspect-[1.25] overflow-hidden rounded-xl shadow-sm"
                          >
                            <img
                              src={item.image!}
                              alt={`Advise Edu gallery image ${item.id}`}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls and indicators */}
              {gallerySlides.length > 1 && (
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    {gallerySlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={selectedIndex === index}
                        className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                          selectedIndex === index
                            ? "w-8 bg-neutral-700"
                            : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={scrollPrev}
                      aria-label="Previous Gallery Slide"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#1B75BB] text-white shadow-sm transition-all hover:bg-[#125488] active:scale-95"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={scrollNext}
                      aria-label="Next Gallery Slide"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#1B75BB] text-white shadow-sm transition-all hover:bg-[#125488] active:scale-95"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
