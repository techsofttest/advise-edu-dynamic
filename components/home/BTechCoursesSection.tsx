import { ChevronRight } from "lucide-react";
import { btechCourses } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BTechCoursesSection() {
  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Courses & Branches
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Bachelor of Technology
            </h2>

            <p className="mt-2 text-sm text-neutral-700 font-medium">
              Explore available B.Tech engineering disciplines.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
          {btechCourses.map((course, index) => (
            <ScrollReveal key={course} delay={(index % 6) * 50}>
              <a
                href="#check-eligibility"
                className="group flex items-center gap-3 border-t border-neutral-300 py-3.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#F6921E] text-xs font-bold text-[#F6921E]">
                  {index + 1}
                </span>

                <span className="flex-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-[#1B75BB]">
                  {course}
                </span>

                <ChevronRight
                  size={16}
                  className="text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-[#F6921E]"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

