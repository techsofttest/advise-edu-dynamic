import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BTechCreditTransferSection() {
  return (
    <section id="btech" className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
        {/* Left Column: Full Width Image on Left Edge */}
        <ScrollReveal delay={100}>
          <div className="relative h-[400px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden lg:rounded-r-3xl shadow-sm">
            <Image
              src="/btech/b1.png"
              alt="B.Tech credit transfer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
            />

            <div className="absolute bottom-0 left-0 bg-[#F6921E] px-7 py-4 rounded-tr-2xl shadow-md">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                B.Tech Pathway
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                Credit Transfer
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Content with Generous Horizontal Padding */}
        <ScrollReveal delay={250}>
          <div className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              B.Tech Credit Transfer
            </span>

            <h2 className="font-heading mt-4 max-w-[620px] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl">
              Don&apos;t let academic setbacks define your future.
            </h2>

            <p className="mt-6 max-w-[600px] text-base leading-7 text-neutral-800">
              If your B.Tech journey has been affected by failed subjects,
              backlogs, arrears or an interrupted course, Advise Edu can help
              you understand possible academic pathways.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Academic history review",
                "Credit transfer guidance",
                "University pathway guidance",
                "Personalised counselling",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 border-t border-neutral-200 pt-3"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#F6921E]"
                    strokeWidth={2}
                  />
                  <span className="text-sm font-medium text-neutral-800">{item}</span>
                </div>
              ))}
            </div>

            <Button href="#counselling" variant="blue" size="md" className="mt-8">
              Learn More
              <ArrowRight size={16} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
