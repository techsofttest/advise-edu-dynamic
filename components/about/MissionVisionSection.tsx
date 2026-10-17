"use client";

import { useEffect, useState } from "react";
import { Target, Award, ShieldCheck } from "lucide-react";
import { getPages } from "@/lib/page";
import type { OurFoundation } from "@/lib/page";

export function MissionVisionSection() {
  const [foundation, setFoundation] = useState<OurFoundation | null>(null);

  useEffect(() => {
    async function fetchFoundation() {
      const pages = await getPages();
      setFoundation(pages.our_foundation);
    }

    fetchFoundation();
  }, []);

  if (!foundation) {
    return null;
  }

  const { content1, content2 } = foundation;

  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
            {content1.title}
          </span>

          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
            {content1.heading}
          </h2>

          <p className="mt-3 text-base text-neutral-600 max-w-2xl mx-auto font-medium">
            {content1.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Our Mission */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40">
            <div className="h-12 w-12 rounded-xl bg-[#F6921E]/10 flex items-center justify-center text-[#F6921E] mb-6">
              <Target size={26} />
            </div>

            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
              {content2.our_mission.title}
            </h3>

            <p className="text-sm leading-6 text-neutral-600 font-medium">
              {content2.our_mission.description}
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40">
            <div className="h-12 w-12 rounded-xl bg-[#1B75BB]/10 flex items-center justify-center text-[#1B75BB] mb-6">
              <Award size={26} />
            </div>

            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
              {content2.our_vision.title}
            </h3>

            <p className="text-sm leading-6 text-neutral-600 font-medium">
              {content2.our_vision.description}
            </p>
          </div>

          {/* Card 3: Legal Recognition */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40">
            <div className="h-12 w-12 rounded-xl bg-[#26A9E0]/10 flex items-center justify-center text-[#26A9E0] mb-6">
              <ShieldCheck size={26} />
            </div>

            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
              {content2.legal_recognition.title}
            </h3>

            <p className="text-sm leading-6 text-neutral-600 font-medium">
              {content2.legal_recognition.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
