import type { Metadata } from "next";

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

interface AboutApiResponse {
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
      heading3?: string | null;
      image?: string | null;
    };
  };
}

async function getAboutData(): Promise<AboutApiResponse["data"] | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not configured.");
    return null;
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/about`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`About API request failed: ${response.status}`);
    }

    const result: AboutApiResponse = await response.json();

    return result.status ? result.data : null;
  } catch (error) {
    console.error("Failed to fetch About API data:", error);
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
  const apiData = await getAboutData();
  const seo = apiData?.seo;

  return {
    title: plainText(seo?.meta_title) || "About Us | Advise Edu",
    description:
      plainText(seo?.meta_description) ||
      "Learn about Advise Edu and our commitment to helping students access recognized university pathways.",
    keywords: plainText(seo?.meta_keywords) || undefined,
  };
}

export default async function AboutPage() {
  const apiData = await getAboutData();
  const banner = apiData?.banner;

  const badge = plainText(banner?.tag) || "About Advise Edu";

  const heading1 = plainText(banner?.heading1) || "Empowering Students";

  const heading2 = plainText(banner?.heading2) || "Through Recognized";

  const heading3 = plainText(banner?.heading3) || "University Pathways";

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* Shared Dynamic Page Hero Banner */}
      <PageHero
        badge={badge}
        title={`${heading1} ${heading2} ${heading3}`.trim()}
        bgImage={
          banner?.image || "/banner/Curly-Haired Artist in a Sunlit Studio.png"
        }
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
