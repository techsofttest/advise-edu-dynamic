import type { Metadata } from "next";

import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { EligibilitySection } from "@/components/home/EligibilitySection";
import { AttestationSection } from "@/components/home/AttestationSection";
import { FullWidthBanner } from "@/components/ui/FullWidthBanner";
import { ReusableEnquirySection } from "@/components/ui/ReusableEnquirySection";
import { AwarenessVideosSection } from "@/components/home/AwarenessVideosSection";
import { AffiliationSection } from "@/components/home/AffiliationSection";
import { AccreditationSection } from "@/components/home/AccreditationSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalContactSection } from "@/components/home/FinalContactSection";
import { getPages } from "@/lib/page";

interface AttestationApiResponse {
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
    };
  };
}

async function getAttestationData(): Promise<
  AttestationApiResponse["data"] | null
> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not configured.");
    return null;
  }

  try {
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/attestation`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Attestation API request failed: ${response.status}`);
    }

    const result: AttestationApiResponse = await response.json();

    return result.status ? result.data : null;
  } catch (error) {
    console.error("Failed to fetch Attestation API data:", error);
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
  const apiData = await getAttestationData();
  const seo = apiData?.seo;

  return {
    title:
      plainText(seo?.meta_title) ||
      "Embassy Attestation & Apostille Services | Advise Edu",

    description:
      plainText(seo?.meta_description) ||
      "Fast and verified embassy attestation services for overseas education and employment.",

    keywords: plainText(seo?.meta_keywords) || undefined,
  };
}

export default async function AttestationPage() {
  const [apiData, pages] = await Promise.all([
    getAttestationData(),
    getPages(),
  ]);

  const banner = apiData?.banner;
  const embassyVerification = pages?.embassy_verification?.content1;

  const bannerTag = plainText(banner?.tag) || "Overseas & Embassy Services";

  const heading1 = plainText(banner?.heading1) || "Global Embassy & Apostille";

  const heading2 = plainText(banner?.heading2) || "Attestation Services";

  const bannerDescription =
    plainText(banner?.description) ||
    "Fast, trustworthy document attestation assistance for international education, employment visas, and professional licensing across Gulf and global destinations.";

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      {/* 01. Dynamic Page Hero */}
      <PageHero
        badge={bannerTag}
        title={`${heading1} ${heading2}`.trim()}
        description={bannerDescription}
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

      {/* 05. Dynamic Embassy Verification Form */}
      <ReusableEnquirySection
        id="enquiry"
        badgeText={embassyVerification?.title || "Embassy Verification"}
        badgeColor="#F6921E"
        title={
          embassyVerification?.heading ||
          "Start Your Certificate Attestation Process"
        }
        description={
          embassyVerification?.description ||
          "We assist with degree certificates, diploma certificates, marksheets, and personal documents with expedited government and destination embassy stamping."
        }
        imageSrc={
          embassyVerification?.image ||
          "/admission/Collaborative Office Document Review.png"
        }
        imageAlt="Document review for embassy attestation"
        formTitle="Attestation Request"
        formSubtitle="Tell us your certificate type and destination country."
        formVariant="darkBlue"
        buttonText="SUBMIT FOR VERIFICATION"
        sectionBg="bg-white"
      />

      {/* 06. Affiliation & Academic Pathways */}
      <AffiliationSection />

      {/* 07. Recognitions & Accreditation */}
      <AccreditationSection />

      {/* 08. Educational & Awareness Videos */}
      <AwarenessVideosSection />

      {/* 09. Student & Professional Reviews */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Final Contact & Office Info */}
      <FinalContactSection />

      <Footer />
    </main>
  );
}
