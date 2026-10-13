import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { EligibilitySection } from "@/components/home/EligibilitySection";
import { ArtsScienceSection } from "@/components/home/ArtsScienceSection";
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
  title: "Arts, Science & Commerce Degree Programs | Advise Edu",
  description:
    "Explore undergraduate and postgraduate programs across BA, B.Com, B.Sc, BBA, BCA, MBA, MCA, MSW, and Psychology with UGC-recognized universities.",
};

export default function ArtsSciencePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* 01. Detailed Page Hero */}
      <PageHero
        badge="Undergraduate & Postgraduate"
        title="Arts, Science & Commerce Academic Programs"
        description="Explore flexible degree programs tailored for management, computing, sciences, commerce, psychology, and humanities across recognized universities."
        bgImage="/banner/Smiling Student on a Sunlit Campus.png"
      />

      {/* 02. Eligibility Check Form */}
      <EligibilitySection />

      {/* 03. Arts & Science Courses Section */}
      <ArtsScienceSection />

      {/* 04. Service Full Width Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/Academic Programs on Campus.png"
        alt="Arts, Science & Commerce Academic Programs"
        buttonHref="#check-eligibility"
      />

      {/* 05. Admission Process Roadmap */}
      <AdmissionStepsSection />

      {/* 06. Dedicated Arts & Science Admissions Form */}
      <ReusableEnquirySection
        id="enquiry"
        badgeText="Personalised Guidance"
        badgeColor="#26A9E0"
        title="Flexible Degree Pathways for Arts, Science & Commerce"
        description="Whether you are aiming for career progression, completing a discontinued program, or seeking degree equivalency, our advisors help you navigate legal and verified university admissions."
        imageSrc="/admission/Friends Strolling Through Campus.png"
        imageAlt="Students on campus discussing education"
        formTitle="Arts & Science Enquiry"
        formSubtitle="Tell us which degree or course you are interested in."
        formVariant="blue"
        buttonText="SUBMIT ENQUIRY"
        sectionBg="bg-[#F4F8FA]"
      />

      {/* 08. University Reputation & Experience */}
      <UniversityReputationSection />

      {/* 07. Talk with Counsellor */}
      <CounsellorSection />

      {/* 09. Educational & Awareness Videos */}
      <AwarenessVideosSection />

      {/* 10. Affiliation & Academic Pathways */}
      <AffiliationSection />

      {/* 11. Recognitions & Accreditation */}
      <AccreditationSection />

      {/* 12. Student Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 13. Frequently Asked Questions */}
      <FAQSection />

      {/* 14. Final Contact & Office Info */}
      <FinalContactSection />

      <Footer />
    </main>
  );
}
