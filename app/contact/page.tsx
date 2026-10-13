import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { FinalContactSection } from "@/components/home/FinalContactSection";
import { ContactMethodsSection } from "@/components/contact/ContactMethodsSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* Shared Page Hero Banner */}
      <PageHero
        badge="Contact Us"
        title="We Are Here to Guide Your Academic Journey"
        bgImage="/banner/Mentorship in the Campus Corridor.png"
      />

      {/* Modular Section 1: Main Contact Form & Direct Information */}
      <FinalContactSection />

      {/* Modular Section 2: Contact Methods & Hours */}
      <ContactMethodsSection />

      {/* Modular Section 3: Frequently Asked Questions */}
      <FAQSection />

      <Footer />
    </main>
  );
}
