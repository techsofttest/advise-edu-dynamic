import Image from "next/image";

export interface PageHeroProps {
  badge: string;
  title: string;
  description?: string;
  bgImage?: string;
}

export function PageHero({
  badge,
  title,
  description,
  bgImage,
}: PageHeroProps) {
  const imageSrc =
    bgImage || "/banner/Curly-Haired Artist in a Sunlit Studio.png";

  return (
    <section className="relative pt-32 pb-20 bg-neutral-900 text-white overflow-hidden">
      {/* Background Image Layer */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Brand Gradient Overlay - dark on left for text legibility, transparent on right for image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-md bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm mb-4">
            {badge}
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-white/90 font-medium leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
