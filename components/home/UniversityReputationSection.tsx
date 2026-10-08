import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function UniversityReputationSection() {
  return (
    <section id="about" className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left Column: Full Width Image on Left Edge */}
        <ScrollReveal delay={100}>
          <div className="relative h-[400px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden lg:rounded-r-3xl shadow-sm">
            <Image
              src={images.university}
              alt="University campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
            />

            <div className="absolute bottom-0 left-0 bg-[#F6921E] px-7 py-4 rounded-tr-2xl shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                University Pathways
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Text & Content */}
        <ScrollReveal delay={250}>
          <div className="px-6 sm:px-12 md:px-16 lg:pl-16 lg:pr-24">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              University Pathways
            </span>

            <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              Reputation and student experience matter.
            </h2>

            <p className="mt-5 text-base leading-7 text-neutral-700 font-medium">
              Choosing an academic pathway is about more than simply selecting a course. Understand the institution, programme, academic structure and your options before making an important decision.
            </p>

            <p className="mt-4 text-base leading-7 text-neutral-700 font-medium">
              Advise Edu helps students understand available pathways and make informed academic decisions.
            </p>

            <Button href="#contact" variant="blue" size="md" className="mt-7">
              Speak with an advisor
              <ArrowRight size={16} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
