import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { AboutCTASection } from "@/components/about/AboutCTASection";
import { UniversityReputationSection } from "@/components/home/UniversityReputationSection";
import { AffiliationSection } from "@/components/home/AffiliationSection";
import { AccreditationSection } from "@/components/home/AccreditationSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* Shared Page Hero Banner */}
      <PageHero
        badge="About Advise Edu"
        title="Empowering Students Through Recognized University Pathways"
      />

      {/* Modular Section 1: Who We Are & Team Background */}
      <WhoWeAreSection />

      {/* Modular Section 2: University Reputation */}
      <UniversityReputationSection />

      {/* Modular Section 3: Mission, Vision & Values */}
      <MissionVisionSection />

      {/* Modular Section 4: Affiliation & Accreditation */}
      <AffiliationSection />
      <AccreditationSection />

      {/* Modular Section 5: Form Callout CTA Component */}
      <AboutCTASection />

      {/* Modular Section 6: Testimonials & FAQ */}
      <TestimonialsSection />
      <FAQSection />

      <Footer />
    </main>
  );
}
