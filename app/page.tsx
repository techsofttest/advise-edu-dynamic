import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { FullWidthBanner } from "@/components/ui/FullWidthBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { EligibilitySection } from "@/components/home/EligibilitySection";
import { BTechCreditTransferSection } from "@/components/home/BTechCreditTransferSection";
import { BTechCoursesSection } from "@/components/home/BTechCoursesSection";
import { CounsellorSection } from "@/components/home/CounsellorSection";
import { UniversityReputationSection } from "@/components/home/UniversityReputationSection";
import { AdmissionStepsSection } from "@/components/home/AdmissionStepsSection";
import { ReusableEnquirySection } from "@/components/ui/ReusableEnquirySection";
import { ArtsScienceSection } from "@/components/home/ArtsScienceSection";
import { AwarenessVideosSection } from "@/components/home/AwarenessVideosSection";
import { AffiliationSection } from "@/components/home/AffiliationSection";
import { AccreditationSection } from "@/components/home/AccreditationSection";
import { AttestationSection } from "@/components/home/AttestationSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { MoreDetailsSection } from "@/components/home/MoreDetailsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalContactSection } from "@/components/home/FinalContactSection";
import { images } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* 01. Hero & Introduction */}
      <HeroSection />

      {/* 02. Form 1: Check Eligibility */}
      <EligibilitySection />

      {/* 03. BANNER 1: B.Tech Full Width Image Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/B.Tech Pathways_ Complete Your Degree.png"
        alt="Complete Your B.Tech Journey"
        buttonHref="#btech"
      />

      {/* 04. B.Tech Credit Transfer Details */}
      <BTechCreditTransferSection />

      {/* 05. B.Tech Engineering Disciplines */}
      <BTechCoursesSection />

      {/* 06. Form 2: Talk with Counsellor */}
      <CounsellorSection />

      {/* 07. University Reputation & Experience */}
      <UniversityReputationSection />

      {/* 08. Admission Steps & Process */}
      <AdmissionStepsSection />

      {/* 09. Form 3: Admission Enquiry */}
      <ReusableEnquirySection
        badgeText="Admissions"
        badgeColor="#26A9E0"
        title="Start your admission enquiry."
        description="Tell us which course you are interested in and share your academic background. Our team can help you understand the next steps."
        imageSrc='/admission/Friends Strolling Through Campus.png'
        imageAlt="Students discussing education"
        formTitle="Admission Enquiry"
        formSubtitle="Tell us what you are looking for."
        formVariant="green"
        buttonText="SUBMIT"
        sectionBg="bg-white"
      />

      {/* 10. BANNER 2: Arts & Science Full Width Image Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/Academic Programs on Campus.png"
        alt="Arts, Science & Commerce Academic Programs"
        buttonHref="#arts"
      />

      {/* 11. Arts & Science Courses */}
      <ArtsScienceSection />

      {/* 12. Form 4: Personal Counselling */}
      <ReusableEnquirySection
        id="counselling"
        badgeText="Personalised Guidance"
        badgeColor="#26A9E0"
        title="Looking for personal counselling?"
        description="Your academic situation is unique. Speak with an advisor who can understand your current course, academic history and goals before discussing possible options."
        imageSrc="/counselling/advisor_meeting.jpg"
        imageAlt="Academic counselling"
        formTitle="Looking Personal Counselling?"
        formSubtitle="Our academic advisors are ready to understand your situation."
        formVariant="blue"
        sectionBg="bg-[#F4F8FA]"
      />

      {/* 13. Educational & Awareness Videos */}
      <AwarenessVideosSection />

      {/* 14. Affiliation & Academic Pathways */}
      <AffiliationSection />

      {/* 15. Recognitions & Accreditation */}
      <AccreditationSection />

      {/* 16. BANNER 3: Attestation Full Width Image Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/Global Embassy Services Banner.png"
        alt="Global Embassy & Apostille Attestation Services"
        buttonHref="#attestation"
      />

      {/* 18. Embassy & Document Attestation */}
      <AttestationSection />

      {/* 19. Student Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 20. Form 6: More Information Request */}
      <MoreDetailsSection />

      {/* 21. Campus & Environment Gallery */}
      <GallerySection />

      {/* 22. Frequently Asked Questions */}
      <FAQSection />

      {/* 23. Final Contact & Office Info */}
      <FinalContactSection />

      <Footer />
    </main>
  );
}