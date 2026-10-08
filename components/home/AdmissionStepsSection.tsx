"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AdmissionStepsSection() {
  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal delay={100}>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Simple Process
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Admission Steps
            </h2>

            <p className="mt-3 text-sm text-neutral-700 font-medium">
              Follow a simple process from enquiry to your next academic step.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Line Container */}
        <ScrollReveal delay={200} className="w-full">
          {(isVisible) => (
            <div className="relative w-full h-[2px] bg-neutral-300 overflow-hidden mb-2">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#F6921E] via-[#1B75BB] to-[#F6921E] origin-left transition-transform duration-[3200ms] ease-out ${isVisible ? "scale-x-100" : "scale-x-0"
                  }`}
              />
            </div>
          )}
        </ScrollReveal>



        <div className="grid grid-cols-1 md:grid-cols-4">
          {[
            ["01", "Enquire", "Share your academic requirements."],
            ["02", "Review", "Understand suitable pathways."],
            ["03", "Choose", "Select the right programme."],
            ["04", "Proceed", "Complete the next steps with guidance."],
          ].map(([number, title, text], idx) => (
            <ScrollReveal key={number} delay={150 * (idx + 1)}>
              <div className="px-5 py-7 first:pl-0 md:border-r md:border-neutral-300 md:last:border-r-0 h-full">
                <div className="text-3xl font-bold text-[#F6921E]">
                  {number}
                </div>

                <h3 className="font-heading mt-4 text-3xl font-semibold text-neutral-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-700 font-medium">
                  {text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


