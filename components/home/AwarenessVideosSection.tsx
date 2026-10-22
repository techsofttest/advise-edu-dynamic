import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface YouTubeVideo {
  id: number;
  title: string;
  link: string;
}

interface VideosApiResponse {
  status: boolean;
  data: YouTubeVideo[];
}

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    let videoId: string | null = null;

    if (hostname === "youtu.be") {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] ?? null;
    } else if (
      hostname === "youtube.com" ||
      hostname === "m.youtube.com" ||
      hostname === "youtube-nocookie.com"
    ) {
      videoId =
        parsedUrl.searchParams.get("v") ??
        parsedUrl.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1] ??
        null;
    }

    return videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId) ? videoId : null;
  } catch {
    return null;
  }
}

async function getVideos(): Promise<YouTubeVideo[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not configured.");
    return [];
  }

  try {
    const response = await fetch(`${apiUrl}/youtube-video`);

    if (!response.ok) {
      console.error("Failed to fetch YouTube videos:", response.status);
      return [];
    }

    const result: VideosApiResponse = await response.json();

    return result.status && Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}

export async function AwarenessVideosSection() {
  const videos = await getVideos();

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
          </div>
        </ScrollReveal>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => {
              const videoId = getYouTubeVideoId(video.link);

              const thumbnail = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : null;

              return (
                <ScrollReveal key={video.id} delay={(index % 3) * 100}>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`Watch ${video.title} on YouTube`}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100">
                      {thumbnail ? (
                        <Image
                          src={thumbnail}
                          alt={video.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-neutral-500">
                          Thumbnail unavailable
                        </div>
                      )}

                      <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6921E] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play
                            size={18}
                            fill="currentColor"
                            className="ml-0.5"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-3 text-base font-semibold text-neutral-900 group-hover:text-[#1B75BB]">
                      {video.title}
                    </h3>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <p className="py-8 text-center text-neutral-500">
            No awareness videos are available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
