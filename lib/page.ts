// lib/api/page.ts

export interface TextContent {
  title?: string;
  heading?: string;
  description?: string;
  description1?: string;
  description2?: string;
  name?: string;
  image?: string | null;
  website?: string | null;
  number?: string;
}

export interface StepData {
  number: string;
  title: string;
  description: string;
}

export interface BodyData {
  name: string;
  description: string;
  website: string | null;
  image: string | null;
}

// ID 1: Take the First Step
export interface TakeTheFirstStep {
  id: number;
  title: string;
  heading1: string;
  heading2: string;
  description: string;
}

// ID 2: B.Tech Credit Transfer
export interface BtechCreditTransfer {
  id: number;
  content1: TextContent;
  content2: TextContent;
  features: string[];
}

// ID 3: Courses and Branches
export interface CoursesBranches {
  id: number;
  title: string;
  heading: string;
  description: string;
  branches: string[];
}

// ID 4: University Guidance
export interface UniversityGuidance {
  id: number;
  title: string;
  heading: string;
  description: string;
}

// ID 5: University Pathways
export interface UniversityPathways {
  id: number;
  content1: TextContent;
  content2: TextContent;
}

// ID 6: Simple Process
export interface SimpleProcess {
  id: number;
  content1: TextContent;
  content2: {
    steps: StepData[];
  };
}

// ID 7: Admissions
export interface Admissions {
  id: number;
  title: string;
  heading: string;
  description: string;
  image: string | null;
}

// ID 8: Arts and Science
export interface ArtsScience {
  id: number;
  name: string;
  heading: string;
  description: string;
  courses: string[];
}

// ID 9: Personalised Guidance
export interface PersonalisedGuidance {
  id: number;
  name: string;
  heading: string;
  description: string;
  image: string | null;
}

// ID 10: Recognized Bodies
export interface RecognizedBodies {
  id: number;
  name: string;
  heading: string;
  description: string;
  bodies: BodyData[];
}

// ID 11: Recognitions and Approvals
export interface RecognitionsApprovals {
  id: number;
  name: string;
  heading: string;
  description: string;
  recognitions: RecognitionData[];
}

// Each recognition group inside the recognitions array
export interface RecognitionData {
  heading: string;
  items: string[];
}

// ID 12: Embassy and Document Services
export interface EmbassyDocumentServices {
  id: number;
  content1: TextContent;
  content2: TextContent & {
    services: string[];
  };
}

// ID 13: Need More Information
export interface NeedMoreInformation {
  id: number;
  content1: TextContent;
}

// ID 14: Engineering Admissions
export interface EngineeringAdmissions {
  id: number;
  content1: TextContent;
}

// ID 15: Embassy Verification
export interface EmbassyVerification {
  id: number;
  content1: TextContent;
}

// ID 16: Who We Are
export interface WhoWeAre {
  id: number;
  content1: {
    title: string;
    heading: string;
    description1: string;
    description2: string;
    expert_counselling: TextContent;
    transparent_process: TextContent;
  };
  content2: {
    image: string | null;
    our_promise: TextContent;
  };
}

// ID 17: Our Foundation
export interface OurFoundation {
  id: number;
  content1: TextContent;
  content2: {
    our_mission: TextContent;
    our_vision: TextContent;
    legal_recognition: TextContent;
  };
}

// ID 18: Get In Touch
export interface GetInTouch {
  id: number;
  content1: TextContent;
}

// ID 19: VFS Appointments
export interface VfsAppointments {
  id: number;
  title: string;
  heading: string;
  description: string;
  countries: string[];
}

// Complete API response data
export interface PageData {
  take_the_first_step: TakeTheFirstStep;
  btech_credit_transfer: BtechCreditTransfer;
  courses_branches: CoursesBranches;
  university_guidance: UniversityGuidance;
  university_pathways: UniversityPathways;
  simple_process: SimpleProcess;
  admissions: Admissions;
  arts_science: ArtsScience;
  personalised_guidance: PersonalisedGuidance;
  recognized_bodies: RecognizedBodies;
  recognitions_approvals: RecognitionsApprovals;
  embassy_document_services: EmbassyDocumentServices;
  need_more_information: NeedMoreInformation;
  engineering_admissions: EngineeringAdmissions;
  embassy_verification: EmbassyVerification;
  who_we_are: WhoWeAre;
  our_foundation: OurFoundation;
  get_in_touch: GetInTouch;
  vfs_appointments: VfsAppointments;
}

export interface PageApiResponse {
  status: boolean;
  data: PageData;
}

// Default page data
const emptyPageData: PageData = {
  take_the_first_step: {
    id: 0,
    title: "",
    heading1: "",
    heading2: "",
    description: "",
  },

  btech_credit_transfer: {
    id: 0,
    content1: {},
    content2: {},
    features: [],
  },

  courses_branches: {
    id: 0,
    title: "",
    heading: "",
    description: "",
    branches: [],
  },

  university_guidance: {
    id: 0,
    title: "",
    heading: "",
    description: "",
  },

  university_pathways: {
    id: 0,
    content1: {},
    content2: {},
  },

  simple_process: {
    id: 0,
    content1: {},
    content2: {
      steps: [],
    },
  },

  admissions: {
    id: 0,
    title: "",
    heading: "",
    description: "",
    image: null,
  },

  arts_science: {
    id: 0,
    name: "",
    heading: "",
    description: "",
    courses: [],
  },

  personalised_guidance: {
    id: 0,
    name: "",
    heading: "",
    description: "",
    image: null,
  },

  recognized_bodies: {
    id: 0,
    name: "",
    heading: "",
    description: "",
    bodies: [],
  },

  recognitions_approvals: {
    id: 0,
    name: "",
    heading: "",
    description: "",
    recognitions: [],
  },

  embassy_document_services: {
    id: 0,
    content1: {},
    content2: {
      services: [],
    },
  },

  need_more_information: {
    id: 0,
    content1: {},
  },

  engineering_admissions: {
    id: 0,
    content1: {},
  },

  embassy_verification: {
    id: 0,
    content1: {},
  },

  who_we_are: {
    id: 0,
    content1: {
      title: "",
      heading: "",
      description1: "",
      description2: "",
      expert_counselling: {
        title: "",
        description: "",
      },
      transparent_process: {
        title: "",
        description: "",
      },
    },
    content2: {
      image: null,
      our_promise: {
        title: "",
        description: "",
      },
    },
  },

  our_foundation: {
    id: 0,
    content1: {},
    content2: {
      our_mission: {},
      our_vision: {},
      legal_recognition: {},
    },
  },

  get_in_touch: {
    id: 0,
    content1: {},
  },

  vfs_appointments: {
    id: 0,
    title: "",
    heading: "",
    description: "",
    countries: [],
  },
};

// Fetch page API
async function fetchPageApi(): Promise<PageApiResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Page API Error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

// Fetch all page data
export async function getPages(): Promise<PageData> {
  try {
    const result = await fetchPageApi();

    if (!result.status || !result.data) {
      console.error("Page API returned invalid data");
      return emptyPageData;
    }

    return {
      ...emptyPageData,
      ...result.data,
    };
  } catch (error) {
    console.error("Page API Error:", error);
    return emptyPageData;
  }
}
