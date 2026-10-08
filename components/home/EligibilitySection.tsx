import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EligibilitySection() {
  return (
    <section id="check-eligibility" className="relative z-20 bg-[#F4F8FA]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-12 sm:px-12 md:px-16 lg:grid-cols-[1fr_580px] lg:px-24 lg:py-16">
        {/* Left Text Content */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Take the first step
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold leading-none tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              Check
              <br />
              Eligibility
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-neutral-700 font-medium">
              Find out whether your academic history may qualify you for an
              alternative pathway to complete your degree.
            </p>
          </div>
        </ScrollReveal>

        {/* Right Form: Overlapping Hero Section on Desktop Only */}
        <ScrollReveal delay={200}>
          <div className="w-full max-w-[580px] justify-self-center lg:justify-self-end relative lg:-mt-36 lg:z-30 shadow-md rounded-2xl">
            <EnquiryForm
              title="Check Eligibility"
              subtitle="Fill in your details and our academic advisor will contact you."
              variant="orange"
              buttonText="SUBMIT"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
