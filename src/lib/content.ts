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
  topics: {
    title: string;
    description: string;
    expandedDescription: string;
  }[];
};

export const services: Service[] = [
  {
    slug: "anxiety",
    title: "Anxiety",
    description: "When worry takes up more room than you’d like.",
    introduction:
      "When the what-ifs follow you into school, work, or the quiet moments at home, it can be hard to switch off. Start with a conversation about what you’ve been experiencing.",
    topics: [
      {
        title: "Everyday worry & overwhelm",
        description:
          "Learning to understand patterns of worry and the stress response.",
        expandedDescription:
          "We can explore the thoughts, situations, and patterns that keep worry going, and find practical ways to feel more grounded in everyday life.",
      },
      {
        title: "Social anxiety & avoidance",
        description:
          "Working through fears of judgment, difficult situations, or experiences you’ve started avoiding.",
        expandedDescription:
          "Therapy can help you understand what makes social situations feel difficult, build confidence, and practice new ways of responding without letting fear make the decisions for you.",
      },
      {
        title: "Panic & physical symptoms",
        description:
          "Understanding the connection between anxious thoughts, physical sensations, and the nervous system.",
        expandedDescription:
          "We can make sense of what happens in your body when anxiety rises and develop tools to respond with more awareness and a greater sense of control.",
      },
    ],
  },
  {
    slug: "depression",
    title: "Depression",
    description: "Support when everyday life feels heavier than usual.",
    introduction:
      "You may feel disconnected, worn down, or less like yourself. You don’t need to have the right words before reaching out.",
    topics: [
      {
        title: "Low mood & loss of interest",
        description:
          "Making sense of persistent sadness, disconnection, or losing interest in things that once mattered.",
        expandedDescription:
          "We can explore what may be contributing to feeling disconnected or stuck, while creating practical ways to reconnect with the parts of life that matter to you.",
      },
      {
        title: "Energy, sleep & concentration",
        description:
          "Working through the ways depression can affect daily routines, motivation, and focus.",
        expandedDescription:
          "Therapy can help you understand how depression is affecting your everyday functioning and develop manageable strategies for rebuilding routines, motivation, and focus.",
      },
      {
        title: "Self-worth & difficult thoughts",
        description:
          "Exploring guilt, hopelessness, negative thinking, and the beliefs that can keep you feeling stuck.",
        expandedDescription:
          "We can work together to notice patterns of self-criticism and difficult thinking, and develop a more balanced and compassionate way of relating to yourself.",
      },
    ],
  },
  {
    slug: "child-adolescent-therapy",
    title: "Child & Adolescent Therapy",
    description: "Care that makes room for growing minds and big feelings.",
    introduction:
      "Growing up comes with changes that can be difficult to explain. We make room for children, teens, and parents to share what’s happening from their own perspective.",
    topics: [
      {
        title: "Emotions & self-understanding",
        description:
          "Helping young people recognize, express, and work through difficult feelings.",
        expandedDescription:
          "Therapy gives children and teens a supportive space to put words to what they are experiencing, understand their emotions, and build practical coping skills.",
      },
      {
        title: "School, friendships & social skills",
        description:
          "Support with academic pressure, peer relationships, communication, and navigating social challenges.",
        expandedDescription:
          "We can work on communication, confidence, problem-solving, and the social or academic challenges that can make growing up feel overwhelming.",
      },
      {
        title: "Anxiety, depression & difficult experiences",
        description:
          "Creating space to work through anxiety, low mood, trauma, grief, and other challenges.",
        expandedDescription:
          "Care can be tailored to the child or teen and may include support around anxiety, depression, grief, difficult experiences, or changes at home and school.",
      },
    ],
  },
  {
    slug: "family-dynamics",
    title: "Family Dynamics",
    description: "More understanding. New ways to connect.",
    introduction:
      "When the same disagreements keep coming up, it can feel like you’re talking past each other. Therapy offers a place to consider what each person needs.",
    topics: [
      {
        title: "Communication & recurring conflict",
        description:
          "Learning to listen, express needs, and move away from patterns that escalate conflict.",
        expandedDescription:
          "Family therapy can help everyone better understand the patterns behind recurring conflict and practice new ways of communicating and responding.",
      },
      {
        title: "Parent–child relationships & boundaries",
        description:
          "Understanding each other’s needs while creating healthier boundaries and expectations.",
        expandedDescription:
          "We can create space for different perspectives while working toward clearer expectations, healthier boundaries, and stronger relationships between family members.",
      },
      {
        title: "Family change & transitions",
        description:
          "Support through divorce, blended families, moving, grief, or other changes that affect the whole family.",
        expandedDescription:
          "Major changes can affect everyone differently. Therapy can help families process those changes together while finding ways to stay connected.",
      },
    ],
  },
  {
    slug: "life-transitions",
    title: "Life Transitions",
    description: "Finding your footing when things change.",
    introduction:
      "Even a change you wanted can bring unfamiliar feelings. There’s room to talk about what you’re leaving behind and what comes next.",
    topics: [
      {
        title: "Work, school & major life changes",
        description:
          "Navigating a new job, career change, retirement, college, or a move to a new place.",
        expandedDescription:
          "Transitions can bring excitement and uncertainty at the same time. Therapy provides space to process the change and figure out what you need in this next chapter.",
      },
      {
        title: "Relationships & family changes",
        description:
          "Support through marriage, separation, divorce, parenthood, blended families, or changing roles.",
        expandedDescription:
          "When relationships or family roles change, it can take time to adjust. We can work through the emotions and practical challenges while making space for what comes next.",
      },
      {
        title: "Grief, identity & uncertainty",
        description:
          "Making space for loss, shifting identities, and the emotions that come with entering a new chapter.",
        expandedDescription:
          "Therapy can provide a place to process loss, uncertainty, or changes in how you see yourself, while gradually finding a clearer sense of direction.",
      },
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
  credentials: "LPC",
  role: "Therapist",
  professionalTitle: "Licensed Professional Counselor · 16+ Years of Experience",
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
