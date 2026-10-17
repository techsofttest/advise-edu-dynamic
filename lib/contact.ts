export interface SeoData {
  id: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

export interface BannerData {
  id: number;
  category: string;
  title: string;
  image: string | null;
}

export interface ContactData {
  id: number;
  address: string;
  map_link: string;
  phone: string;
  email: string;
  opening_hours: string;
}

export interface ContactPage {
  seo: SeoData;
  bannerData: BannerData;
  contact: ContactData;
}

// Default contact data
const emptyContact: ContactData = {
  id: 0,
  address: "",
  map_link: "",
  phone: "",
  email: "",
  opening_hours: "",
};

// Default full contact page data
const emptyContactPage: ContactPage = {
  seo: {
    id: 0,
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
  },

  bannerData: {
    id: 0,
    category: "",
    title: "",
    image: null,
  },

  contact: { ...emptyContact },
};

// Shared API fetch function
async function fetchContactApi() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Contact API Error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

// Fetch contact information for the header and footer
export async function getContact(): Promise<ContactData> {
  try {
    const result = await fetchContactApi();
    const contact = result.data?.contact;

    if (!contact) {
      console.error("Contact API returned invalid contact data");
      return { ...emptyContact };
    }

    return {
      id: contact.id ?? 0,
      address: contact.address ?? "",
      map_link: contact.map_link ?? "",
      phone: contact.phone ?? "",
      email: contact.email ?? "",
      opening_hours: contact.opening_hours ?? "",
    };
  } catch (error) {
    console.error("Contact API Error:", error);
    return { ...emptyContact };
  }
}

// Fetch complete contact page data
export async function getContactPage(): Promise<ContactPage> {
  try {
    const result = await fetchContactApi();
    const data = result.data;

    if (!data?.seo || !data?.bannerData || !data?.contact) {
      console.error("Contact API returned invalid data");
      return emptyContactPage;
    }

    return {
      seo: {
        id: data.seo.id ?? 0,
        meta_title: data.seo.meta_title ?? "",
        meta_description: data.seo.meta_description ?? "",
        meta_keywords: data.seo.meta_keywords ?? "",
      },

      bannerData: {
        id: data.bannerData.id ?? 0,
        category: data.bannerData.category ?? "",
        title: data.bannerData.title ?? "",
        image: data.bannerData.image ?? null,
      },

      contact: {
        id: data.contact.id ?? 0,
        address: data.contact.address ?? "",
        map_link: data.contact.map_link ?? "",
        phone: data.contact.phone ?? "",
        email: data.contact.email ?? "",
        opening_hours: data.contact.opening_hours ?? "",
      },
    };
  } catch (error) {
    console.error("Contact API Error:", error);
    return emptyContactPage;
  }
}
