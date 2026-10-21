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
import { getPages } from "@/lib/page";
import type { Metadata } from "next";

interface BtechApiResponse {
  status: boolean;
  data: {
    seo: {
      id: number;
      meta_title: string;
      meta_description: string;
      meta_keywords: string;
    };
    banner: {
      id: number;
      tag: string;
      heading1: string;
      heading2: string;
      description: string;
    };
  };
}

// Fetch B.Tech SEO and banner data directly from Laravel
async function getBtechData(): Promise<BtechApiResponse["data"] | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.error("NEXT_PUBLIC_API_URL is not configured.");
      return null;
    }

    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/btech`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`B.Tech API request failed: ${response.status}`);
    }

    const result: BtechApiResponse = await response.json();

    return result.status ? result.data : null;
  } catch (error) {
    console.error("Failed to fetch B.Tech API data:", error);
    return null;
  }
}

// Dynamic SEO metadata
export async function generateMetadata(): Promise<Metadata> {
  const btechData = await getBtechData();
  const seo = btechData?.seo;

  return {
    title:
      seo?.meta_title ||
      "B.Tech Credit Transfer & Degree Completion | Advise Edu",
    description:
      seo?.meta_description ||
      "Complete your B.Tech engineering degree through credit transfer, backlog clearance, and recognized university pathways.",
    keywords: seo?.meta_keywords || undefined,
  };
}

export default async function BTechPage() {
  const [pages, btechData] = await Promise.all([getPages(), getBtechData()]);

  const engineeringAdmissions = pages.engineering_admissions?.content1;

  const banner = btechData?.banner;

  const bannerTag = banner?.tag || "B.Tech Pathways";
  const bannerHeading1 = banner?.heading1 || "Complete Your B.Tech";
  const bannerHeading2 = banner?.heading2 || "Degree With Confidence";
  const bannerDescription =
    banner?.description ||
    "Understand credit transfer options, backlog clearing, and recognized university pathways tailored for your engineering discipline.";

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* 01. Dynamic B.Tech Banner */}
      <PageHero
        badge={bannerTag}
        title={`${bannerHeading1} ${bannerHeading2}`.trim()}
        description={bannerDescription}
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
        imageSrc="/service-banner/B.Tech Pathways_ Complete Your Degree_upd.png"
        alt="B.Tech Pathways Complete Your Degree"
        buttonHref="#check-eligibility"
      />

      {/* 06. Admission Steps & Roadmap */}
      <AdmissionStepsSection />

      {/* 07. Dedicated Engineering Admissions Form */}
      <ReusableEnquirySection
        id="enquiry"
        badgeText={engineeringAdmissions?.title || "Engineering Admissions"}
        badgeColor="#1B75BB"
        title={
          engineeringAdmissions?.heading ||
          "Fast-Track Your B.Tech Admission Evaluation"
        }
        description={
          engineeringAdmissions?.description ||
          "Submit your previous semester marksheets and diploma transcripts. Our senior advisors will analyze your syllabus mapping and recommend legitimate UGC-approved university options."
        }
        imageSrc={
          engineeringAdmissions?.image || "/admission/engineers_lab.jpg"
        }
        imageAlt="Engineering students in laboratory"
        formTitle="B.Tech Admission Enquiry"
        formSubtitle="Share your diploma or engineering semester details."
        formVariant="orange"
        buttonText="SUBMIT EVALUATION"
        sectionBg="bg-white"
      />

      {/* 08. University Reputation & Experience */}
      <UniversityReputationSection />

      {/* 09. Talk with Counsellor */}
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
