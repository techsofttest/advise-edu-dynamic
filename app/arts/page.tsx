import type { Metadata } from "next";

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
import { getPages } from "@/lib/page";

interface ArtsScienceApiResponse {
  status: boolean;
  data: {
    seo?: {
      id: number;
      meta_title?: string | null;
      meta_description?: string | null;
      meta_keywords?: string | null;
    };
    banner?: {
      id: number;
      tag?: string | null;
      heading1?: string | null;
      heading2?: string | null;
      description?: string | null;
      image?: string | null;
    };
  };
}

async function getArtsScienceData(): Promise<
  ArtsScienceApiResponse["data"] | null
> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not configured.");
    return null;
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/arts-science`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Arts & Science API request failed: ${response.status}`);
    }

    const result: ArtsScienceApiResponse = await response.json();

    return result.status ? result.data : null;
  } catch (error) {
    console.error("Failed to fetch Arts & Science API data:", error);
    return null;
  }
}

function plainText(value?: string | null): string {
  return (value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata(): Promise<Metadata> {
  const apiData = await getArtsScienceData();
  const seo = apiData?.seo;

  return {
    title:
      plainText(seo?.meta_title) ||
      "Arts, Science & Commerce Degree Programs | Advise Edu",
    description:
      plainText(seo?.meta_description) ||
      "Explore undergraduate and postgraduate programs across BA, B.Com, B.Sc, BBA, BCA, MBA, MCA, MSW, and Psychology with UGC-recognized universities.",
    keywords: plainText(seo?.meta_keywords) || undefined,
  };
}

export default async function ArtsSciencePage() {
  const [apiData, pages] = await Promise.all([
    getArtsScienceData(),
    getPages(),
  ]);

  const banner = apiData?.banner;
  const personalisedGuidance = pages?.personalised_guidance;

  const bannerTag = plainText(banner?.tag) || "Undergraduate & Postgraduate";

  const heading1 = plainText(banner?.heading1) || "Arts, Science & Commerce";

  const heading2 = plainText(banner?.heading2) || "Academic Programs";

  const bannerDescription =
    plainText(banner?.description) ||
    "Explore flexible degree programs tailored for management, computing, sciences, commerce, psychology, and humanities across recognized universities.";

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* 01. Dynamic Page Hero */}
      <PageHero
        badge={bannerTag}
        title={`${heading1} ${heading2}`.trim()}
        description={bannerDescription}
        bgImage={
          banner?.image || "/banner/Smiling Student on a Sunlit Campus.png"
        }
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

      {/* 06. Personalised Guidance */}
      <ReusableEnquirySection
        id="enquiry"
        badgeText={personalisedGuidance?.name || "Personalised Guidance"}
        badgeColor="#26A9E0"
        title={
          personalisedGuidance?.heading ||
          "Flexible Degree Pathways for Arts, Science & Commerce"
        }
        description={
          personalisedGuidance?.description ||
          "Whether you are aiming for career progression, completing a discontinued program, or seeking degree equivalency, our advisors help you navigate legal and verified university admissions."
        }
        imageSrc={
          personalisedGuidance?.image ||
          "/admission/Friends Strolling Through Campus.png"
        }
        imageAlt="Students on campus discussing education"
        formTitle="Arts & Science Enquiry"
        formSubtitle="Tell us which degree or course you are interested in."
        formVariant="blue"
        buttonText="SUBMIT ENQUIRY"
        sectionBg="bg-[#F4F8FA]"
      />

      {/* 07. University Reputation & Experience */}
      <UniversityReputationSection />

      {/* 08. Talk with Counsellor */}
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
