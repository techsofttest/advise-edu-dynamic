import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getFaqs } from "@/lib/faq";

export async function FAQSection() {
  const faqs = await getFaqs();

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
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <ScrollReveal key={faq.id} delay={(index % 7) * 50}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-neutral-900">
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={18}
                      className="shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <div
                    className="pb-5 pr-8 text-sm font-medium leading-6 text-neutral-700 [&_p]:mb-2 [&_p:last-child]:mb-0"
                    dangerouslySetInnerHTML={{
                      __html: faq.answer,
                    }}
                  />
                </details>
              </ScrollReveal>
            ))
          ) : (
            <p className="py-6 text-center text-sm text-neutral-600">
              No FAQs are available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
