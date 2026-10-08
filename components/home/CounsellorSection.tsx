import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CounsellorSection() {
  return (
    <section className="relative z-20 bg-[#1B75BB]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-8 sm:px-12 md:px-16 lg:grid-cols-[1fr_580px] lg:px-24 lg:py-12">
        <ScrollReveal>
          <div className="text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              University Guidance
            </span>

            <h2 className="font-heading mt-4 max-w-[620px] text-4xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-5xl">
              Talk With a University Counsellor
            </h2>

            <p className="mt-5 max-w-[560px] text-base leading-7 text-white font-medium">
              Get guidance about courses, branches, previous university
              details, academic history and possible next steps.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="w-full max-w-[580px] justify-self-center lg:justify-self-end relative lg:-mt-24 lg:-mb-16 lg:z-30 shadow-md rounded-2xl">
            <EnquiryForm
              title="Talk With University Counsellor"
              subtitle="Tell us about your academic background."
              variant="darkBlue"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


