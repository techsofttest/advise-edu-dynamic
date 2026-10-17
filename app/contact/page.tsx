import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { FinalContactSection } from "@/components/home/FinalContactSection";
import { ContactMethodsSection } from "@/components/contact/ContactMethodsSection";
import { FAQSection } from "@/components/home/FAQSection";

import { getContactPage } from "@/lib/contact";

export async function generateMetadata(): Promise<Metadata> {
  const contactPage = await getContactPage();
  const seo = contactPage.seo;

  return {
    title: seo.meta_title || "Contact Us",
    description:
      seo.meta_description ||
      "Get in touch with us for enquiries and more information.",
    keywords: seo.meta_keywords || undefined,

    openGraph: {
      title: seo.meta_title || "Contact Us",
      description:
        seo.meta_description ||
        "Get in touch with us for enquiries and more information.",
      type: "website",
    },
  };
}

async function ContactContent() {
  const contactPage = await getContactPage();

  return (
    <>
      <PageHero
        badge={contactPage.bannerData.category}
        title={contactPage.bannerData.title}
        bgImage={
          contactPage.bannerData.image ??
          "/banner/Mentorship in the Campus Corridor.png"
        }
      />

      <FinalContactSection contact={contactPage.contact} />

      <ContactMethodsSection contact={contactPage.contact} />

      <Suspense
        fallback={
          <section className="bg-white py-20">
            <div className="mx-auto max-w-[1150px] px-6 text-center">
              Loading FAQs...
            </div>
          </section>
        }
      >
        <FAQSection />
      </Suspense>
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-body">
      <Header />

      <Suspense
        fallback={
          <section className="min-h-[60vh] flex items-center justify-center">
            Loading contact page...
          </section>
        }
      >
        <ContactContent />
      </Suspense>

      <Footer />
    </main>
  );
}
