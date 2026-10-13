import { Phone, Mail, Clock } from "lucide-react";

export function ContactMethodsSection() {
  return (
    <section className="bg-[#F4F8FA] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F6921E]">
            Reach Out
          </span>
          <h2 className="font-heading mt-3 text-4xl font-semibold tracking-[-0.035em] text-neutral-900 sm:text-5xl">
            Multiple Ways to Connect
          </h2>
          <p className="mt-3 text-base text-neutral-600 max-w-2xl mx-auto font-medium">
            Choose the method most convenient for you. Our advisors respond promptly to all enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Direct Call */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40 text-center flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-[#1B75BB]/10 flex items-center justify-center text-[#1B75BB] mb-5">
              <Phone size={28} />
            </div>
            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
              Call Us Directly
            </h3>
            <p className="text-sm text-neutral-600 font-medium mb-4">
              Speak directly with an academic consultant.
            </p>
            <a
              href="tel:+919000000000"
              className="text-base font-bold text-[#1B75BB] hover:underline"
            >
              +91 90000 00000
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40 text-center flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-[#F6921E]/10 flex items-center justify-center text-[#F6921E] mb-5">
              <Mail size={28} />
            </div>
            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
              Email Support
            </h3>
            <p className="text-sm text-neutral-600 font-medium mb-4">
              Send us your academic documents for evaluation.
            </p>
            <a
              href="mailto:info@advisedu.com"
              className="text-base font-bold text-[#F6921E] hover:underline"
            >
              info@advisedu.com
            </a>
          </div>

          {/* Card 3: Working Hours */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F6921E]/40 text-center flex flex-col items-center">
            <div className="h-14 w-14 rounded-full bg-[#26A9E0]/10 flex items-center justify-center text-[#26A9E0] mb-5">
              <Clock size={28} />
            </div>
            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
              Working Hours
            </h3>
            <p className="text-sm text-neutral-600 font-medium mb-1">
              Monday to Saturday
            </p>
            <p className="text-base font-bold text-neutral-900">
              9:00 AM – 6:00 PM (IST)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
