import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface AffiliationItem {
  shortName: string;
  fullName: string;
  url: string;
  logo: string;
}

const affiliations: AffiliationItem[] = [
  {
    shortName: "UGC",
    fullName: "University Grants Commission",
    url: "www.ugceresources.in",
    logo: "/affiliation-logo/UGC.png",
  },
  {
    shortName: "AIU",
    fullName: "Association Of Indian Universities",
    url: "www.aiu.ac.in",
    logo: "/affiliation-logo/AIU.png",
  },
  {
    shortName: "Govt.of ARUNACHAL PRADESH",
    fullName: "Govt.of ARUNACHAL PRADESH",
    url: "www.arunachalpradesh.gov.in",
    logo: "/affiliation-logo/Govt.of ARUNACHAL PRADESH.png",
  },
  {
    shortName: "State Govt.of MANIPUR",
    fullName: "State Govt.of MANIPUR",
    url: "www.ditmanipur.gov.in",
    logo: "/affiliation-logo/State Govt.of MANIPUR.png",
  },
];

export function AffiliationSection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal delay={100}>
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
            Recognized Bodies
          </span>

          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
            Affiliation
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-sm leading-6 text-neutral-600 font-medium">
            University, programme and academic information should always be
            understood before making an important education decision.
          </p>
        </ScrollReveal>

        {/* Affiliation Items Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {affiliations.map((item, idx) => (
            <ScrollReveal key={item.shortName} delay={150 * (idx + 1)}>
              <div
                className="flex flex-col items-center justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40 h-full"
              >
              {/* Logo */}
              <div className="relative h-16 w-16 shrink-0 mb-4">
                <Image
                  src={item.logo}
                  alt={item.shortName}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              {/* Header Title */}
              <h3 className="font-heading text-xl font-bold text-neutral-900 mb-1">
                {item.shortName}
              </h3>

              {/* Full Name */}
              <p className="text-sm font-semibold text-neutral-800 leading-snug mb-4 min-h-[42px] flex items-center justify-center">
                {item.fullName}
              </p>

              {/* Website Link */}
              <a
                href={`https://${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#1B75BB] hover:underline"
              >
                {item.url}
              </a>
            </div>
          </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
