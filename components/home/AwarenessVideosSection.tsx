import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { images } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AwarenessVideosSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
                Awareness Videos
              </span>

              <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
                Understand your options
              </h2>
            </div>

            <a
              href="#"
              className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1B75BB] sm:flex"
            >
              View All
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "What is credit transfer?",
              image: images.video1,
              youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              title: "Who is eligible?",
              image: images.video2,
              youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              title: "B.Tech backlogs explained",
              image: images.video3,
              youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              title: "What should you do next?",
              image: images.video4,
              youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              title: "How degree attestation works",
              image: images.video5,
              youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
            {
              title: "Choosing the right university",
              image: images.video6,
              youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
          ].map((video, index) => (
            <ScrollReveal key={video.title} delay={(index % 3) * 100}>
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6921E] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play size={18} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-3 text-base font-semibold text-neutral-900 group-hover:text-[#1B75BB]">
                  {video.title}
                </h3>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

