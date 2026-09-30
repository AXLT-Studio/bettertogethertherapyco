export const practiceLinks = {
  consultation: "https://bettertogethertherapy.sessionshealth.com/request",
  clientPortal:
    "https://bettertogethertherapy.sessionshealth.com/clients/sign_in",
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Therapists", href: "/therapists" },
  { label: "Services", href: "/services" },
  { label: "Insurance & Rates", href: "/insurance-rates" },
  { label: "FAQ", href: "/faq" },
  { label: "Client Portal", href: practiceLinks.clientPortal },
];

export const insuranceNames = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
];

export const recognitionStatements = [
  "Your child seems overwhelmed by everything.",
  "Your teenager has stopped talking to you.",
  "Every small disagreement turns into a bigger conflict.",
  "You’re doing everything you can, but something still feels off.",
  "Anxiety is affecting school, work, sleep, or relationships.",
  "A big life change has made the familiar feel unfamiliar.",
];

export const audiences = [
  {
    id: "children",
    title: "Children",
    description:
      "Helping little people make sense of big feelings, with parents as part of the conversation.",
    detail:
      "A place to explore emotions, changes at home, and the parts of school or everyday life that feel difficult. We’ll talk about your child’s needs and how you can be involved.",
    serviceSlug: "child-adolescent-therapy",
  },
  {
    id: "teens",
    title: "Teens",
    description:
      "Room to be heard, navigate growing up, and build a stronger sense of self.",
    detail:
      "Support for the pressure of school, friendships, identity, and finding more independence. Together, we’ll consider what support could look like for your teen and family.",
    serviceSlug: "child-adolescent-therapy",
  },
  {
    id: "adults",
    title: "Adults",
    description:
      "Support for the worry, uncertainty, and expectations you don’t have to carry alone.",
    detail:
      "Time to talk about your own needs, whether you’re navigating anxiety, low mood, changing roles, or a new chapter in life.",
    serviceSlug: "life-transitions",
  },
  {
    id: "families",
    title: "Families",
    description:
      "Finding new ways to listen, understand one another, and move forward together.",
    detail:
      "A shared conversation about communication, recurring conflict, parenting, and the changes that affect everyone at home.",
    serviceSlug: "family-dynamics",
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  topics: string[];
};

export const services: Service[] = [
  {
    slug: "anxiety",
    title: "Anxiety",
    description: "When worry takes up more room than you’d like.",
    introduction:
      "When the what-ifs follow you into school, work, or the quiet moments at home, it can be hard to switch off. Start with a conversation about what you’ve been experiencing.",
    topics: [
      "Everyday worry and overwhelm",
      "School, work, and social pressures",
      "How worry shows up at home",
    ],
  },
  {
    slug: "depression",
    title: "Depression",
    description: "Support when everyday life feels heavier than usual.",
    introduction:
      "You may feel disconnected, worn down, or less like yourself. You don’t need to have the right words before reaching out.",
    topics: [
      "Feeling low or disconnected",
      "Changes in motivation and routines",
      "Making room for support",
    ],
  },
  {
    slug: "child-adolescent-therapy",
    title: "Child & Adolescent Therapy",
    description: "Care that makes room for growing minds and big feelings.",
    introduction:
      "Growing up comes with changes that can be difficult to explain. We make room for children, teens, and parents to share what’s happening from their own perspective.",
    topics: [
      "Big feelings and growing independence",
      "School and friendship challenges",
      "Working together with parents",
    ],
  },
  {
    slug: "family-dynamics",
    title: "Family Dynamics",
    description: "More understanding. New ways to connect.",
    introduction:
      "When the same disagreements keep coming up, it can feel like you’re talking past each other. Therapy offers a place to consider what each person needs.",
    topics: [
      "Communication and recurring conflict",
      "Parenting and changing family roles",
      "Navigating change as a family",
    ],
  },
  {
    slug: "life-transitions",
    title: "Life Transitions",
    description: "Finding your footing when things change.",
    introduction:
      "Even a change you wanted can bring unfamiliar feelings. There’s room to talk about what you’re leaving behind and what comes next.",
    topics: [
      "New schools, jobs, or stages of life",
      "Changes in relationships and roles",
      "Uncertainty about what comes next",
    ],
  },
];

export type Therapist = {
  slug: string;
  name: string;
  credentials: string | null;
  role: string;
  initials: string;
  portrait?: { src: string; position: string };
  specialty: string;
  biography: string;
  note: string;
};

export const therapists: Therapist[] = [
  {
    slug: "samantha-serbin",
    name: "Samantha Serbin",
    credentials: "LPC",
    role: "Founder",
    initials: "SS",
    portrait: {
      src: "/images/therapists/samantha-serbin.jpg",
      position: "50% 35%",
    },
    specialty: "An education-informed perspective on children and families.",
    biography:
      "Before becoming a therapist, Samantha worked in education, where she saw firsthand how emotional health, family dynamics, school pressure, and everyday life can intersect. That perspective is part of the foundation of Better Together Therapy.",
    note: "Full biography, areas of focus, session options, and current availability to be added.",
  },
  {
    slug: "shelly-kessinger",
    name: "Shelly Kessinger",
    credentials: null,
    role: "Therapist",
    initials: "SK",
    portrait: {
      src: "/images/therapists/shelly-kessinger.png",
      position: "50% 30%",
    },
    specialty: "Areas of focus to be added.",
    biography:
      "Get to know Shelly’s approach to therapy, the people she works with, and what a first conversation might look like. Her full introduction will be added here.",
    note: "Credentials, full biography, areas of focus, session options, and current availability to be confirmed.",
  },
];

export type FAQ = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do you accept insurance?",
    answer:
      "Insurance participation is being confirmed. The carrier names shown in this outline are placeholders, not a verified list of accepted plans. Coverage and costs need to be confirmed for your plan and therapist before booking.",
    href: "/insurance-rates",
    linkLabel: "Explore insurance & rates",
  },
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. We offer in-person therapy in Leander, TX. Our street address, therapist availability, and appointment details will be added here.",
  },
  {
    question: "Do you offer virtual sessions?",
    answer:
      "Yes. We offer online therapy for clients in Texas and Colorado. Therapist availability and session options will be confirmed before scheduling.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Session lengths and fees will be listed once confirmed. They may vary by appointment type; these details will be discussed before you book.",
  },
  {
    question: "How do I know which therapist is the right fit?",
    answer:
      "Start by getting to know our therapists and their approaches. A consultation is an opportunity to share what you’re looking for and ask questions about working together.",
    href: "/therapists",
    linkLabel: "Meet the therapists",
  },
  {
    question: "What should I expect during the first appointment?",
    answer:
      "The first appointment is a chance to get to know one another and talk about what brings you to therapy. Specific intake steps, paperwork, and information for parents will be added here.",
  },
];

export const values = [
  {
    title: "Care shaped around you",
    description:
      "Your story, your needs, and your goals guide the conversation.",
  },
  {
    title: "Thoughtful, evidence-based approaches",
    description:
      "Professional knowledge, with room for the person in front of us.",
  },
  {
    title: "A child & family perspective",
    description:
      "An understanding that school, home, and emotional health are connected.",
  },
  {
    title: "A collaborative relationship",
    description:
      "A process we take part in together, with space for your voice.",
  },
];
