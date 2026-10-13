import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { EligibilitySection } from "@/components/home/EligibilitySection";
import { AttestationSection } from "@/components/home/AttestationSection";
import { FullWidthBanner } from "@/components/ui/FullWidthBanner";
import { AdmissionStepsSection } from "@/components/home/AdmissionStepsSection";
import { ReusableEnquirySection } from "@/components/ui/ReusableEnquirySection";
import { CounsellorSection } from "@/components/home/CounsellorSection";
import { UniversityReputationSection } from "@/components/home/UniversityReputationSection";
import { AwarenessVideosSection } from "@/components/home/AwarenessVideosSection";
import { AffiliationSection } from "@/components/home/AffiliationSection";
import { AccreditationSection } from "@/components/home/AccreditationSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalContactSection } from "@/components/home/FinalContactSection";

export const metadata = {
  title: "Embassy Attestation & Apostille Services | Advise Edu",
  description:
    "Fast and verified embassy attestation services for UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Apostille countries for overseas education and employment.",
};

export default function AttestationPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* 01. Detailed Page Hero */}
      <PageHero
        badge="Overseas & Embassy Services"
        title="Global Embassy & Apostille Attestation Services"
        description="Fast, trustworthy document attestation assistance for international education, employment visas, and professional licensing across Gulf and global destinations."
        bgImage="/banner/Hopeful Journey Through the Airport.png"
      />

      {/* 02. Quick Document Assessment / Eligibility Form */}
      <EligibilitySection />

      {/* 03. Embassy & Document Attestation Breakdown */}
      <AttestationSection />

      {/* 04. Service Full Width Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/Global Embassy Services Banner.png"
        alt="Global Embassy & Apostille Attestation Services"
        buttonHref="#check-eligibility"
      />

      {/* 06. Dedicated Attestation Submission Form */}
      <ReusableEnquirySection
        id="enquiry"
        badgeText="Embassy Verification"
        badgeColor="#F6921E"
        title="Start Your Certificate Attestation Process"
        description="We assist with degree certificates, diploma certificates, marksheets, and personal documents with expedited government and destination embassy stamping."
        imageSrc="/admission/Collaborative Office Document Review.png"
        imageAlt="Document review for embassy attestation"
        formTitle="Attestation Request"
        formSubtitle="Tell us your certificate type and destination country."
        formVariant="darkBlue"
        buttonText="SUBMIT FOR VERIFICATION"
        sectionBg="bg-white"
      />

      {/* 09. Educational & Awareness Videos */}
      <AwarenessVideosSection />

      {/* 10. Affiliation & Academic Pathways */}
      <AffiliationSection />

      {/* 11. Recognitions & Accreditation */}
      <AccreditationSection />

      {/* 12. Student & Professional Reviews */}
      <TestimonialsSection />

      {/* 13. Frequently Asked Questions */}
      <FAQSection />

      {/* 14. Final Contact & Office Info */}
      <FinalContactSection />

      <Footer />
    </main>
  );
}
