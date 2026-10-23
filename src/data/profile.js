const linkedin = "https://www.linkedin.com/in/kris-hsu/";

export const intro = {
  eyebrow: "Graduate & junior software development · Australia",
  title: "Building useful web and mobile experiences.",
  description:
    "I’m Kris Hsu, a final-year Master of Information Technology student at QUT, seeking graduate and junior software development opportunities in Australia.",
  internship:
    "Currently gaining development experience as an AI App Developer intern at Pixelz360.",
};

export const developmentExperience = [
  {
    id: "pixelz360",
    role: "AI App Developer",
    organisation: "Pixelz360",
    period: "Jul 2026–present",
    type: "Internship",
    summary:
      "A current development internship in Brisbane, alongside my Master of Information Technology at QUT.",
    contributions: [],
    href: linkedin,
  },
  {
    id: "junior-ranger-capstone",
    role: "Team lead & developer",
    organisation: "Junior Ranger · QUT industry project",
    period: "2026",
    type: "Industry-linked capstone",
    summary:
      "A two-semester team project supporting the Queensland Indigenous Land and Sea Ranger program, developed with an industry partner.",
    contributions: [
      "Contributed mobile, backend and model integration work.",
      "Coordinated delivery and translated client feedback into team tasks.",
    ],
    href: "/projects/junior-ranger",
  },
];

export const communityExperience = [
  {
    id: "acs-qld",
    role: "Emerging Professionals Committee Member",
    organisation: "ACS Queensland",
    period: "Jan 2026–present",
    type: "Professional community",
    summary:
      "Supporting initiatives that connect emerging technology professionals with the wider industry.",
    contributions: [
      "Contribute to university engagement, knowledge sharing and community initiatives.",
    ],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7434039803320446976/",
  },
  {
    id: "qut-mentor",
    role: "Student Mentor",
    organisation: "Women in Science · QUT",
    period: "Jul 2026–present",
    type: "Student mentoring",
    summary:
      "Supporting other students through a mentoring role, while continuing to learn from my own mentors.",
    contributions: [],
    href: linkedin,
  },
  {
    id: "code-network",
    role: "Graphic Designer",
    organisation: "Code Network",
    period: "Oct 2025–Jul 2026",
    type: "Student community",
    summary:
      "Contributed design work within QUT’s technology student community.",
    contributions: [],
    href: linkedin,
  },
];

export const mentorshipExperience = [
  {
    id: "aws-mentee",
    role: "Mentee",
    organisation: "AWS mentorship",
    type: "Professional development",
    summary: "Learning from industry guidance as a mentee.",
    href: linkedin,
  },
  {
    id: "cisco-mentee",
    role: "Mentee",
    organisation: "Cisco MentorMe",
    type: "Professional development",
    summary: "Participating as a mentee in the Cisco MentorMe programme.",
    href: linkedin,
  },
];

export const journey = {
  eyebrow: "The experiences behind the work",
  title: "From understanding contracts to building software.",
  paragraphs: [
    "My interest in IT began while I was working as a legal coordinator at a high-tech company in Taiwan. To include technical details in contracts, I worked across departments with engineers and needed to understand the products they were building. Those conversations were my first real introduction to the technical side of a product, and the point at which I began to take an interest in IT.",
    "Studying and living in Germany and Mexico was another important part of my journey. These were my first experiences of building a life outside Taiwan. Learning to navigate two very different cultural environments strengthened my ability to adapt: finding my footing, understanding unfamiliar expectations and continuing to learn along the way.",
    "Today, I’m completing a Master of Information Technology at QUT and gaining practical development experience through projects and an internship. I bring that combination of legal study, international experience and technical learning to the way I approach problems and work with other people.",
  ],
};

export const education = [
  {
    institution: "Queensland University of Technology",
    qualification: "Master of Information Technology",
    period: "2025–2026",
    detail: "Australia · Final year",
  },
  {
    institution: "Karlsruhe University of Applied Sciences",
    qualification: "Tricontinental Master in Global Studies",
    period: "2018–2021",
    detail: "Germany · Global Studies programme",
  },
  {
    institution: "Universidad de Monterrey (UDEM)",
    qualification: "Global Studies study experience",
    period: "2019",
    detail: "Mexico · A study period within my international education",
  },
  {
    institution: "National Chung Hsing University",
    qualification: "Bachelor of Laws",
    period: "2014–2018",
    detail: "Taiwan",
  },
];

// Actual photos selected and inspected from Kris’s authorised LinkedIn posts.
export const communityPhotos = [
  {
    src: "/community/acs-tech-awards.webp",
    alt: "Kris at the ACS Queensland Tech Awards",
    caption:
      "ACS Queensland Tech Awards — EPC member and event volunteer.",
    sourceHref:
      "https://www.linkedin.com/feed/update/urn:li:activity:7511220916115394560/",
    sourceLabel: "Kris’s LinkedIn post",
    width: 800,
    height: 1200,
  },
  {
    src: "/community/qut-industry-night.webp",
    alt: "Kris taking part in QUT Tech Industry Night",
    caption:
      "QUT Tech Industry Night — ACS industry booth representative.",
    sourceHref:
      "https://www.linkedin.com/feed/update/urn:li:activity:7494355022365741056/",
    sourceLabel: "Kris’s LinkedIn post",
    width: 800,
    height: 1067,
  },
  {
    src: "/community/qut-mentoring.webp",
    alt: "Kris with QUT career mentor Craig Richards",
    caption:
      "With my QUT career mentor, Craig Richards — learning as a mentee.",
    sourceHref:
      "https://www.linkedin.com/feed/update/urn:li:activity:7501253806005956608/",
    sourceLabel: "Kris’s LinkedIn post",
    width: 800,
    height: 1155,
  },
];

// Internal provenance; components do not present this as another page section.
export const profileEvidence = {
  reviewedOn: "2026-10-23",
  sources: [
    {
      source: "Kris’s LinkedIn profile, experience and education sections",
      href: linkedin,
      confirms:
        "Role titles, institutions, listed periods, QUT study, committee and mentoring participation.",
    },
    {
      source: "Kris’s explicit account in this conversation",
      confirms:
        "Legal coordinator role in Taiwan, technical contract work with engineers, first interest in IT, and the significance of living and studying in Germany and Mexico.",
    },
    {
      source: "Supplied IFN736 Phase 2 artefact agreement and release source",
      confirms:
        "Junior Ranger is an industry-linked university capstone. The supplied artefacts corroborate the final implementation; they do not establish government employment.",
    },
  ],
  pending: [
    "Neil-reviewed résumé PDF has not been supplied; retain Request résumé.",
    "Legal employer and employment dates have not been supplied.",
    "The Karlsruhe/UDEM programme relationship has not been fully verified; UDEM is a study experience, not a separately claimed MBA.",
    "Do not infer an employment relationship from the Junior Ranger industry partnership.",
    "Pixelz360 project responsibilities and client outcomes are not yet described in verified public material.",
  ],
};
