export const practiceLinks = {
  consultation: "https://bettertogethertherapy.sessionshealth.com/request",
  clientPortal:
    "https://bettertogethertherapy.sessionshealth.com/clients/sign_in",
} as const;

export function getPracticeLinkAttributes(href: string) {
  const opensInNewTab =
    href === practiceLinks.consultation || href === practiceLinks.clientPortal;

  return {
    target: opensInNewTab ? "_blank" : undefined,
    rel: opensInNewTab ? "noopener noreferrer" : undefined,
    title: opensInNewTab ? "Opens in a new tab" : undefined,
  };
}

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
  "Anthem Blue Cross Blue Shield Colorado",
  "Blue Cross Blue Shield of Texas",
  "Blue Cross Blue Shield of Massachusetts",
  "Carelon Behavioral Health",
  "Cigna",
  "Horizon Blue Cross Blue Shield of New Jersey",
  "Independence Blue Cross",
  "Optum",
  "Quest Behavioral Health",
  "UnitedHealthcare",
];

export const featuredInsuranceNames = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
];

export const pendingInsuranceNames = ["Oscar", "Oxford"];

export const recognitionStatements = [
  "Your child feels overwhelmed.",
  "Your teenager has stopped talking to you.",
  "Small disagreements keep becoming big conflicts.",
  "You’re doing your best, but something still feels off.",
  "Anxiety is affecting school, work, sleep, or relationships.",
  "A major change has made life feel unfamiliar.",
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
  professionalTitle: string;
  initials: string;
  portrait?: { src: string; position: string };
  specialty: string;
  metaDescription: string;
  biography: string[];
  approach: {
    summary: string;
    introduction: string;
    focusAreas: string[];
    description: string;
  };
  background: string[];
  therapeuticApproach?: {
    introduction: string;
    methods: string[];
    conclusion: string;
  };
  workingTogether: string[];
  sessionLocations?: { inPerson: string; online: string };
};

export const samanthaSerbin: Therapist = {
  slug: "samantha-serbin",
  name: "Samantha Serbin",
  credentials: "LPC",
  role: "Founder · Therapist",
  professionalTitle: "Licensed Professional Counselor",
  initials: "SS",
  portrait: {
    src: "/images/therapists/samantha-serbin.jpg",
    position: "50% 35%",
  },
  specialty:
    "Support for children, teens, adults, and families navigating anxiety, depression, school stress, and life transitions.",
  metaDescription:
    "Meet Samantha Serbin, LPC, founder of Better Together Therapy. Therapy for children, teens, adults, and families in the Greater Austin Area and online across Texas and Colorado.",
  biography: [
    "Before becoming a therapist, Samantha worked in education, where she saw firsthand how emotional health, school pressure, family dynamics, and major life transitions can shape a young person’s experience.",
    "That perspective continues to guide her work today. Samantha helps children, teens, adults, and families better understand what is happening beneath the surface, work through patterns that may be keeping them stuck, and create meaningful, lasting change.",
    "Based in the Greater Austin Area, Samantha offers in-person therapy in the Greater Austin Area and online therapy throughout Texas and Colorado.",
  ],
  approach: {
    summary:
      "Thoughtful, practical therapy shaped by experience in both education and mental health.",
    introduction: "Samantha works with clients navigating:",
    focusAreas: [
      "Anxiety",
      "Depression",
      "Child & adolescent concerns",
      "Family dynamics",
      "Life transitions",
      "School and academic stress",
      "Self-esteem and identity",
      "Parent-child relationships",
    ],
    description:
      "Her approach is collaborative and individualized, with a focus on understanding the root of the concern rather than simply managing what appears on the surface.",
  },
  background: [
    "Samantha earned her BA in Secondary Education from Arizona State University before beginning her career as a teacher.",
    "After several years in education, she returned to graduate school and earned her Master’s in Clinical Psychology from Pepperdine University, with an emphasis in Marriage and Family Therapy.",
    "Her experience in both education and counseling gives her a unique understanding of the connection between emotional health, family relationships, school environments, and the challenges children and young adults face as they grow.",
  ],
  workingTogether: [
    "Therapy with Samantha is supportive, collaborative, and grounded in the belief that meaningful change begins with understanding ourselves more clearly.",
    "She creates space for clients to be honest about what is difficult while also helping them identify practical ways to move forward.",
    "Whether she is working with a child, teenager, adult, or parent, Samantha’s goal is to help clients feel understood, supported, and more confident navigating what comes next.",
  ],
  sessionLocations: {
    inPerson: "Greater Austin Area",
    online: "Texas & Colorado",
  },
};

export const shellyKessinger: Therapist = {
  slug: "shelly-kessinger",
  name: "Shelly Kessinger",
  credentials: null,
  role: "Therapist",
  professionalTitle: "Counselor · 16+ Years of Experience",
  initials: "SK",
  portrait: {
    src: "/images/therapists/shelly-kessinger.png",
    position: "50% 30%",
  },
  specialty:
    "Relationship and communication support for couples, individuals, families, and youth, with practical tools for everyday life.",
  metaDescription:
    "Meet Shelly Kessinger, a counselor with 16+ years of experience specializing in relationships and communication for couples, individuals, families, and youth.",
  biography: [
    "Shelly is a relationship and communication specialist with more than 16 years of experience in mental health and counseling.",
    "She works with couples, individuals, families, and youth, helping clients make sense of complicated emotions, recognize the patterns affecting their relationships, and develop practical tools for meaningful change.",
    "Her style is warm and approachable, while also being direct, collaborative, and focused on helping clients move forward.",
  ],
  approach: {
    summary:
      "Making complicated emotions and relationship patterns easier to understand — and easier to change.",
    introduction: "Shelly specializes in:",
    focusAreas: [
      "Couples counseling",
      "Communication difficulties",
      "Relationship conflict",
      "Rebuilding trust",
      "Infidelity recovery",
      "Emotional disconnection",
      "Family relationships",
      "Individual counseling",
      "Youth counseling",
      "Life and relationship transitions",
    ],
    description:
      "She has a particular strength in helping couples understand one another more clearly, rebuild emotional connection, and replace unproductive communication patterns with practical skills they can use outside of therapy.",
  },
  background: [
    "Shelly earned her Bachelor of Science in Psychology from the University of Texas at Austin in 2006 and her Master of Education in Counseling from the University of Houston in 2009.",
    "Her experience spans nonprofit counseling centers, inpatient care, intensive outpatient programs, and private practice, giving her experience working with clients across a wide range of concerns and stages of life.",
  ],
  therapeuticApproach: {
    introduction:
      "Shelly individualizes treatment around each client’s needs and goals rather than relying on a one-size-fits-all approach.",
    methods: [
      "Gottman Method",
      "Emotionally Focused Therapy (EFT)",
      "Cognitive Behavioral Therapy (CBT)",
      "Dialectical Behavior Therapy (DBT)",
      "Motivational Interviewing",
      "Solution-Focused Therapy",
    ],
    conclusion:
      "The specific approach depends on the client, the relationship, and what they are hoping to change.",
  },
  workingTogether: [
    "Clients often describe Shelly as warm, down-to-earth, and easy to talk to.",
    "She balances compassion with directness and has a natural ability to break complex emotional issues into clear, manageable pieces.",
    "Sessions are not only about understanding what is happening. Shelly also emphasizes practical tools, communication skills, and strategies clients can carry into everyday life.",
    "Her goal is to help clients leave therapy with both greater insight and a clearer idea of what to do next.",
  ],
};

export const therapists: Therapist[] = [samanthaSerbin, shellyKessinger];

export type FAQ = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
  showOnHome?: boolean;
};

export const faqPageItems: FAQ[] = [
  {
    question: "Do you accept insurance?",
    answer:
      "Yes. Better Together Therapy works with several major insurance plans through Headway and Alma. Coverage can vary by therapist and individual plan, so we recommend confirming your benefits before scheduling. Visit our Insurance & Rates page for current participating plans and private-pay information.",
    href: "/insurance-rates",
    linkLabel: "Insurance & Rates",
    showOnHome: true,
  },
  {
    question: "How much does therapy cost?",
    answer:
      "Cost depends on whether you use insurance or choose private pay. Better Together Therapy offers both options. Current private-pay rates, participating insurance plans, and coverage information are available on our Insurance & Rates page.",
    href: "/insurance-rates",
    linkLabel: "Insurance & Rates",
  },
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. We offer in-person therapy from our Leander office, serving clients throughout the Greater Austin Area. Our office is located at 1640 Highland Falls, Suite 802, Leander, TX 78641.",
    showOnHome: true,
  },
  {
    question: "Do you offer virtual sessions?",
    answer:
      "Yes. Online therapy is available to clients throughout Texas and Colorado. Virtual sessions can be a flexible and convenient option for many clients, and your therapist can help determine whether online or in-person care is the better fit for your needs.",
    showOnHome: true,
  },
  {
    question: "How long are sessions?",
    answer:
      "Standard therapy sessions are approximately 53 minutes. Complimentary consultations are 15 minutes. Session length may vary depending on the type of appointment.",
    showOnHome: true,
  },
  {
    question: "How long does therapy typically last?",
    answer:
      "There isn’t one set timeline for therapy. Some clients find that a shorter period of focused support meets their needs, while others benefit from longer-term work. Your therapist will regularly check in with you about your goals, progress, and what continues to feel helpful.",
  },
  {
    question: "How do I know which therapist is the right fit?",
    answer:
      "Finding the right therapist is personal. Our therapist profiles outline each clinician’s specialties, approach, and the clients they most often work with. You can also start with a complimentary consultation if you’re unsure where to begin.",
    href: "/therapists",
    linkLabel: "Therapist profiles",
    showOnHome: true,
  },
  {
    question: "What should I expect during the first appointment?",
    answer:
      "Your first session is a chance to talk about what brought you to therapy, what you’ve been experiencing, and what you hope to get from the process. Your therapist will also spend time getting to know you, answering questions, and beginning to identify goals for your work together.",
    showOnHome: true,
  },
];

export const faqs = faqPageItems.filter((item) => item.showOnHome);

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
