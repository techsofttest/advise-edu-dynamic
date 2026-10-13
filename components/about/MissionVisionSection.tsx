import { Target, Award, ShieldCheck } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
            Our Foundation
          </span>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
            Driven by Academic Integrity
          </h2>
          <p className="mt-3 text-base text-neutral-600 max-w-2xl mx-auto font-medium">
            We guide students with transparency, ensuring every pathway strictly complies with UGC, AICTE, and university norms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40">
            <div className="h-12 w-12 rounded-xl bg-[#F6921E]/10 flex items-center justify-center text-[#F6921E] mb-6">
              <Target size={26} />
            </div>
            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
              Our Mission
            </h3>
            <p className="text-sm leading-6 text-neutral-600 font-medium">
              To simplify higher education transfers and backlog completion, enabling every student to achieve a legitimate degree without losing valuable academic years.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40">
            <div className="h-12 w-12 rounded-xl bg-[#1B75BB]/10 flex items-center justify-center text-[#1B75BB] mb-6">
              <Award size={26} />
            </div>
            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
              Our Vision
            </h3>
            <p className="text-sm leading-6 text-neutral-600 font-medium">
              To be India's most trusted educational advisory platform, bridging the gap between students, recognized universities, and global career opportunities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40">
            <div className="h-12 w-12 rounded-xl bg-[#26A9E0]/10 flex items-center justify-center text-[#26A9E0] mb-6">
              <ShieldCheck size={26} />
            </div>
            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
              100% Legal & Recognized
            </h3>
            <p className="text-sm leading-6 text-neutral-600 font-medium">
              All degree recommendations adhere to 2(f) UGC Act, AIU equivalence standards, and government embassy verification guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
