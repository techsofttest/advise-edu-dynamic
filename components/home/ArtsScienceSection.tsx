import { ArrowRight, ChevronRight } from "lucide-react";
import { artsCourses } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ArtsScienceSection() {
  return (
    <section id="arts" className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <ScrollReveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
                Arts & Science
              </span>

              <h2 className="font-heading mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
                Arts and Science Courses
              </h2>

              <p className="mt-5 max-w-[450px] text-base leading-7 text-neutral-800">
                Explore undergraduate and postgraduate programmes across
                management, commerce, computer applications, psychology,
                social work and related disciplines.
              </p>

              <Button href="#check-eligibility" variant="orange" size="md" className="mt-7">
                Enquire Now
                <ArrowRight size={16} />
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 border-t border-neutral-300 sm:grid-cols-2">
            {artsCourses.map((course, index) => (
              <ScrollReveal key={course} delay={(index % 4) * 60}>
                <a
                  href="#check-eligibility"
                  className="group flex items-center justify-between border-b border-neutral-300 py-4 pr-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#F6921E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-semibold text-neutral-900 group-hover:text-[#1B75BB]">
                      {course}
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

