import type { Metadata } from "next";

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
// import { FinalContactSection } from "@/components/home/FinalContactSection";
import { getPages } from "@/lib/page";

interface HomeSeoData {
  id: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

interface HomeBannerData {
  id: number;
  heading1: string;
  heading2: string;
  subtitle: string;
  description: string;
}

interface HomeApiResponse {
  status: boolean;
  data: {
    seo: HomeSeoData;
    banner: HomeBannerData;
  };
}

const emptyHomeData: HomeApiResponse["data"] = {
  seo: {
    id: 0,
    meta_title: "Advise Edu",
    meta_description: "",
    meta_keywords: "",
  },
  banner: {
    id: 0,
    heading1: "",
    heading2: "",
    subtitle: "",
    description: "",
  },
};

async function getHomeData(): Promise<HomeApiResponse["data"]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured.");
    }

    const response = await fetch(`${apiUrl}/home`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Home API Error: ${response.status} ${response.statusText}`,
      );
    }

    const result: HomeApiResponse = await response.json();

    if (!result.status || !result.data) {
      throw new Error("Invalid Home API response.");
    }

    return {
      seo: {
        id: result.data.seo?.id ?? 0,
        meta_title: result.data.seo?.meta_title ?? "Advise Edu",
        meta_description: result.data.seo?.meta_description ?? "",
        meta_keywords: result.data.seo?.meta_keywords ?? "",
      },
      banner: {
        id: result.data.banner?.id ?? 0,
        heading1: result.data.banner?.heading1 ?? "",
        heading2: result.data.banner?.heading2 ?? "",
        subtitle: result.data.banner?.subtitle ?? "",
        description: result.data.banner?.description ?? "",
      },
    };
  } catch (error) {
    console.error("Home API Error:", error);
    return emptyHomeData;
  }
}

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHomeData();

  return {
    title: seo.meta_title || "Advise Edu",
    description: stripHtml(seo.meta_description),
    keywords: seo.meta_keywords
      ? seo.meta_keywords.split(",").map((keyword) => keyword.trim())
      : [],
  };
}

export default async function HomePage() {
  const { banner } = await getHomeData();

  const pages = await getPages();
  const admissions = pages.admissions;

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />
      {/* 01. Hero & Introduction - Dynamic Laravel Data */}
      <HeroSection banner={banner} />
      {/* 02. Form 1: Check Eligibility */}
      <EligibilitySection />
      {/* 03. B.Tech Full Width Image Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/B.Tech Pathways_ Complete Your Degree_upd.png"
        alt="Complete Your B.Tech Journey"
        buttonHref="/btech"
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
        badgeText={admissions.title || "Admissions"}
        badgeColor="#26A9E0"
        title={admissions.heading || "Start your admission enquiry."}
        description={
          admissions.description ||
          "Tell us which course you are interested in and share your academic background. Our team can help you understand the next steps."
        }
        imageSrc={
          admissions.image || "/admission/Friends Strolling Through Campus.png"
        }
        imageAlt="Students discussing education"
        formTitle="Admission Enquiry"
        formSubtitle="Tell us what you are looking for."
        formVariant="green"
        buttonText="SUBMIT"
        sectionBg="bg-white"
      />

      <AccreditationSection />
      {/* 16. Attestation Full Width Image Banner */}

      {/* 10. Arts & Science Full Width Image Banner */}
      <FullWidthBanner
        imageSrc="/service-banner/Academic Programs on Campus.png"
        alt="Arts, Science & Commerce Academic Programs"
        buttonHref="/arts"
      />
      {/* 11. Arts & Science Courses */}
      <ArtsScienceSection />

      {/* 12. Form 4: Personal Counselling */}
      {(() => {
        const guidance = pages.personalised_guidance;

        return (
          <ReusableEnquirySection
            id="counselling"
            badgeText={guidance.name || "Personalised Guidance"}
            badgeColor="#26A9E0"
            title={guidance.heading || "Looking for personal counselling?"}
            description={
              guidance.description ||
              "Your academic situation is unique. Speak with an advisor who can understand your current course, academic history and goals before discussing possible options."
            }
            imageSrc={guidance.image || "/counselling/advisor_meeting.jpg"}
            imageAlt="Academic counselling"
            formTitle="Looking Personal Counselling?"
            formSubtitle="Our academic advisors are ready to understand your situation."
            formVariant="blue"
            sectionBg="bg-[#F4F8FA]"
          />
        );
      })()}

      {/* 13. Educational & Awareness Videos */}
      <AwarenessVideosSection />
      {/* 14. Affiliation & Academic Pathways */}
      <AffiliationSection />
      {/* 15. Recognitions & Accreditation */}

      <FullWidthBanner
        imageSrc="/service-banner/Global Embassy Services Banner.png"
        alt="Global Embassy & Apostille Attestation Services"
        buttonHref="/attestation"
      />
      {/* 17. Embassy & Document Attestation */}
      <AttestationSection />
      {/* 18. Student Reviews & Testimonials */}
      <TestimonialsSection />
      {/* 19. More Information Request */}
      <MoreDetailsSection />
      {/* 20. Campus & Environment Gallery */}
      <GallerySection />
      {/* 21. Frequently Asked Questions */}
      <FAQSection />
      {/* 22. Final Contact & Office Info */}
      {/* <FinalContactSection /> */}
      <Footer />
    </main>
  );
}
