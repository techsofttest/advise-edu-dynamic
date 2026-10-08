import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface AccreditationItem {
  badge: string;
  title: string;
  logo: string;
  description: string;
}

const accreditations: AccreditationItem[] = [
  {
    badge: "UGC Recognition",
    title: "University Grants Commission",
    logo: "/accreditation-logo/University Grants Commission.png",
    description:
      "Recognized under Section 2(f) of the UGC Act 1956, confirming its status as a legitimate university.",
  },
  {
    badge: "AICTE",
    title: "All India Council For Technical Education",
    logo: "/accreditation-logo/All India Council For Technical Education.png",
    description:
      "Ensuring compliance with national quality standards in engineering, management, and other professional areas.",
  },
  {
    badge: "PCI",
    title: "Pharmacy Council Of India",
    logo: "/accreditation-logo/Pharmacy Council Of India.png",
    description:
      "Approval for pharmacy programs, confirming adherence to education standards for pharmaceutical courses.",
  },
  {
    badge: "BCI",
    title: "Bar Council Of India",
    logo: "/accreditation-logo/Bar Council Of India.png",
    description:
      "Recognition for law programs, ensuring legal education meets national benchmarks.",
  },
  {
    badge: "AIU",
    title: "Association Of Indian Universities",
    logo: "/accreditation-logo/Association Of Indian Universities.png",
    description:
      "Membership supports degree equivalence and status among Indian universities.",
  },
];

export function AccreditationSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Header */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              Recognitions & Approvals
            </span>
            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
              Accreditation
            </h2>
            <p className="mt-3 text-base text-neutral-600 max-w-2xl mx-auto font-medium">
              University approvals ensuring legal validity, degree equivalence, and national educational standards.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid of Accreditation Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {accreditations.map((item, idx) => (
            <ScrollReveal
              key={item.badge}
              delay={120 * (idx + 1)}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40">
                <div>
                  {/* Top Row: Badge & Logo */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="inline-block font-bold text-gray-900">
                      {item.badge}
                    </div>

                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-neutral-50 p-1 border border-neutral-100">
                      <Image
                        src={item.logo}
                        alt={item.badge}
                        fill
                        sizes="56px"
                        className="object-contain p-1"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold leading-snug text-neutral-900 mb-4 max-w-[80%]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 text-neutral-600 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
