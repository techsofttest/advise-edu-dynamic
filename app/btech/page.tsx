import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { EligibilitySection } from "@/components/home/EligibilitySection";
import { BTechCreditTransferSection } from "@/components/home/BTechCreditTransferSection";
import { BTechCoursesSection } from "@/components/home/BTechCoursesSection";
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
  title: "B.Tech Credit Transfer & Degree Completion | Advise Edu",
  description:
    "Complete your B.Tech engineering degree through legal credit transfer, backlog clearance, and lateral entry in UGC & AICTE recognized universities.",
};

export default function BTechPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* 01. Detailed Page Hero */}
      <PageHero
        badge="B.Tech Pathways"
        title="Complete Your B.Tech Degree With Confidence"
        description="Understand credit transfer options, backlog clearing, and recognized university pathways tailored for your engineering discipline."
        bgImage="/banner/Collaborative Robotics Lab Workshop.png"
      />

      {/* 02. Eligibility Check Form */}
      <EligibilitySection />

      {/* 03. B.Tech Credit Transfer Details */}
      <BTechCreditTransferSection />

      {/* 04. Engineering Disciplines & Courses List */}
      <BTechCoursesSection />

      {/* 05. Service Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/B.Tech Pathways_ Complete Your Degree.png"
        alt="B.Tech Pathways Complete Your Degree"
        buttonHref="#check-eligibility"
      />

      {/* 06. Admission Steps & Roadmap */}
      <AdmissionStepsSection />

      {/* 07. Dedicated Engineering Admissions Form */}
      <ReusableEnquirySection
        id="enquiry"
        badgeText="Engineering Admissions"
        badgeColor="#1B75BB"
        title="Fast-Track Your B.Tech Admission Evaluation"
        description="Submit your previous semester marksheets and diploma transcripts. Our senior advisors will analyze your syllabus mapping and recommend legitimate UGC-approved university options."
        imageSrc="/admission/engineers_lab.jpg"
        imageAlt="Engineering students in laboratory"
        formTitle="B.Tech Admission Enquiry"
        formSubtitle="Share your diploma or engineering semester details."
        formVariant="orange"
        buttonText="SUBMIT EVALUATION"
        sectionBg="bg-white"
      />

      {/* 09. University Reputation & Experience */}
      <UniversityReputationSection />

      {/* 08. Talk with Counsellor */}
      <CounsellorSection />

      {/* 10. Educational & Awareness Videos */}
      <AwarenessVideosSection />

      {/* 11. Affiliation & Academic Pathways */}
      <AffiliationSection />

      {/* 12. Recognitions & Accreditation */}
      <AccreditationSection />

      {/* 13. Student Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Final Contact & Office Info */}
      <FinalContactSection />

      <Footer />
    </main>
  );
}
