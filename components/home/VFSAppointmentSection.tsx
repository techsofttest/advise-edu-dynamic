import { ChevronRight } from "lucide-react";
import { getPages } from "@/lib/page";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export async function VFSAppointmentSection() {
  const pages = await getPages();
  const vfsAppointments = pages.vfs_appointments;

  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
              {vfsAppointments.title}
            </span>

            <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              {vfsAppointments.heading}
            </h2>

            <p className="mt-2 text-sm font-medium text-neutral-700">
              {vfsAppointments.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
          {vfsAppointments.countries.map((country, index) => (
            <ScrollReveal key={country} delay={(index % 6) * 50}>
              <a
                href="#check-eligibility"
                className="group flex items-center gap-3 border-t border-neutral-300 py-3.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#F6921E] text-xs font-bold text-[#F6921E]">
                  {index + 1}
                </span>

                <span className="flex-1 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-[#1B75BB]">
                  {country}
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
