export interface Faq {
  id: number;
  question: string;
  answer: string;
}

const emptyFaq: Faq[] = [];

async function fetchFaqApi() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faq`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`FAQ API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getFaqs(): Promise<Faq[]> {
  try {
    const result = await fetchFaqApi();
    const faqs = result.data;

    if (!Array.isArray(faqs)) {
      console.error("FAQ API returned invalid data");
      return emptyFaq;
    }

    return faqs.map((faq: Faq) => ({
      id: faq.id ?? 0,
      question: faq.question ?? "",
      answer: faq.answer ?? "",
    }));
  } catch (error) {
    console.error("FAQ API Error:", error);
    return emptyFaq;
  }
}
