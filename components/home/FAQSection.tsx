import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1150px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Frequently Asked Questions
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              Questions students ask
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          {[
            "What is B.Tech credit transfer?",
            "Who can enquire about B.Tech credit transfer?",
            "Can I continue my degree after an academic interruption?",
            "Which documents may be required?",
            "What B.Tech branches are available?",
            "What Arts and Science programmes are available?",
            "How can I speak with an academic counsellor?",
          ].map((question, index) => (
            <ScrollReveal key={question} delay={(index % 7) * 50}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-neutral-900">
                  {question}
                  <ChevronDown
                    size={18}
                    className="transition-transform group-open:rotate-180"
                  />
                </summary>

                <div className="pb-5 pr-8 text-sm leading-6 text-neutral-700 font-medium">
                  Contact Advise Edu for guidance specific to your academic
                  situation and programme.
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

