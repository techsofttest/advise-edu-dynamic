import Image from "next/image";
import { GraduationCap, HeartHandshake } from "lucide-react";

export function WhoWeAreSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left Column: Text & Features with Padding */}
        <div className="px-6 sm:px-12 md:px-16 lg:pl-24 lg:pr-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
            Who We Are
          </span>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
            Dedicated Academic Advisors Guiding Your Educational Future
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-700 font-medium">
            Advise Edu was established with a singular focus: to help students navigate the complexities of higher education, university transfers, and course completion. We understand that academic setbacks, credit gaps, or career pivots can leave students feeling uncertain.
          </p>
          <p className="mt-4 text-base leading-7 text-neutral-700 font-medium">
            Our team of experienced educational consultants works closely with UGC-recognized universities, AICTE-approved institutions, and foreign embassy attestation bodies to deliver clear, legally sound, and personalized guidance for every student.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F8FA] border border-neutral-100">
              <GraduationCap className="w-6 h-6 text-[#1B75BB] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Expert Counselling</h4>
                <p className="text-xs text-neutral-600 font-medium mt-1">Personalized step-by-step guidance tailored to your marksheets.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F8FA] border border-neutral-100">
              <HeartHandshake className="w-6 h-6 text-[#F6921E] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Transparent Process</h4>
                <p className="text-xs text-neutral-600 font-medium mt-1">Zero hidden claims — only verified & legal university pathways.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full Bleed Image Pinned to Right Edge */}
        <div className="relative h-[400px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden lg:rounded-l-3xl shadow-sm">
          <Image
            src="/admission/Collaborative Office Document Review.png"
            alt="Advise Edu Advisory Team"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 text-neutral-900">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1B75BB]">
              Our Promise
            </p>
            <h4 className="font-heading text-lg font-bold mt-1">
              100% Genuine Guidance & Verified Equivalency
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
