import { Phone, Mail, Clock } from "lucide-react";
import type { ContactData } from "@/lib/contact";

interface ContactMethodsSectionProps {
  contact: ContactData;
}

export function ContactMethodsSection({ contact }: ContactMethodsSectionProps) {
  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
            Reach Out
          </span>

          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
            Multiple Ways to Connect
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base font-medium text-neutral-600">
            Choose the method most convenient for you. Our advisors respond
            promptly to all enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Direct Call */}
          <div className="flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#F6921E]/40 hover:shadow-md">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B75BB]/10 text-[#1B75BB]">
              <Phone size={28} />
            </div>

            <h3 className="font-heading mb-2 text-xl font-bold text-neutral-900">
              Call Us Directly
            </h3>

            <p className="mb-4 text-sm font-medium text-neutral-600">
              Speak directly with an academic consultant.
            </p>

            {contact.phone ? (
              <a
                href={`tel:${contact.phone}`}
                className="break-words text-base font-bold text-[#1B75BB] hover:underline"
              >
                {contact.phone}
              </a>
            ) : (
              <p className="text-sm text-neutral-500">
                Phone number unavailable
              </p>
            )}
          </div>

          {/* Card 2: Email */}
          <div className="flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#F6921E]/40 hover:shadow-md">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F6921E]/10 text-[#F6921E]">
              <Mail size={28} />
            </div>

            <h3 className="font-heading mb-2 text-xl font-bold text-neutral-900">
              Email Support
            </h3>

            <p className="mb-4 text-sm font-medium text-neutral-600">
              Send us your academic documents for evaluation.
            </p>

            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="break-words text-base font-bold text-[#F6921E] hover:underline"
              >
                {contact.email}
              </a>
            ) : (
              <p className="text-sm text-neutral-500">
                Email address unavailable
              </p>
            )}
          </div>

          {/* Card 3: Working Hours */}
          <div className="flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#F6921E]/40 hover:shadow-md">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#26A9E0]/10 text-[#26A9E0]">
              <Clock size={28} />
            </div>

            <h3 className="font-heading mb-2 text-xl font-bold text-neutral-900">
              Working Hours
            </h3>

            <p className="text-base font-bold text-neutral-900">
              {contact.opening_hours || "Working hours unavailable"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
