import { Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ContactData } from "@/lib/contact";

interface FinalContactSectionProps {
  contact: ContactData;
}

export function FinalContactSection({ contact }: FinalContactSectionProps) {
  return (
    <section id="contact" className="relative z-20 bg-[#1B75BB] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-8 sm:px-12 md:px-16 lg:grid-cols-[1fr_1fr] lg:px-24 lg:py-12">
        <ScrollReveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </span>

            <h2 className="font-heading mt-4 max-w-[600px] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl">
              Your next academic step starts with a conversation.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-white" />

                <div>
                  <p className="text-sm font-bold text-white/80">Office</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    {contact?.address ? (
                      contact.address
                    ) : (
                      <span className="text-white/70">Address unavailable</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone size={20} className="mt-1 shrink-0 text-white" />

                <div>
                  <p className="text-sm font-bold text-white/80">Phone</p>

                  {contact?.phone ? (
                    <a
                      href={`tel:${contact.phone}`}
                      className="mt-1 block text-sm font-medium text-white hover:underline"
                    >
                      {contact.phone}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-white/70">
                      Phone unavailable
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail size={20} className="mt-1 shrink-0 text-white" />

                <div>
                  <p className="text-sm font-bold text-white/80">Email</p>

                  {contact?.email ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 block break-words text-sm font-medium text-white hover:underline"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-white/70">
                      Email unavailable
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative w-full max-w-[580px] justify-self-center rounded-2xl shadow-md lg:z-30 lg:-mt-20 lg:-mb-16 lg:justify-self-end">
            <EnquiryForm
              title="Quick Enquiry"
              subtitle="Have a question? Leave your details and our team will get back to you."
              variant="orange"
              buttonText="SUBMIT"
              compact
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
