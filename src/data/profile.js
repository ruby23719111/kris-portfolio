const linkedin = "https://www.linkedin.com/in/kris-hsu";

export const intro = {
  title: "IT graduate who turns what clients need into working software.",
  lead:
    "I’m Kris Hsu. Full-stack web and mobile development, AI integration, and turning client feedback into requirements. I finish my Master of IT at QUT in December 2026 and I’m currently an AI App Developer intern at Pixelz360 in Brisbane.",
  photo: {
    src: "/community/qut-industry-night.webp",
    alt: "Kris standing beside the ACS banner at QUT Tech Industry Night",
    caption: "At the ACS booth, QUT Tech Industry Night",
    width: 800,
    height: 1067,
  },
};

// Shown directly under the introduction for recruiters.
export const glance = [
  {
    label: "Looking for",
    value: "Graduate and junior IT roles: software development, business analysis, IT consulting",
  },
  { label: "Available", value: "Full-time from December 2026" },
  {
    label: "Work rights",
    value: "Temporary Graduate visa (subclass 485), applying on graduation. Full work rights, no sponsorship needed.",
  },
  { label: "Location", value: "Brisbane, and open to relocating anywhere in Australia" },
];

export const skills = [
  { label: "Languages", value: "JavaScript, Python, SQL, HTML, CSS" },
  { label: "Front end & mobile", value: "React, Next.js, React Native / Expo, Bootstrap, responsive CSS" },
  { label: "Back end & data", value: "REST API design, FastAPI, Flask, Node.js, MySQL" },
  { label: "AI integration", value: "GenAI integration, Vertex AI custom models, Gemini API, Google Vision API, MCP tools" },
  {
    label: "Business analysis",
    value: "Requirements gathering, stakeholder engagement, process mapping, user journey mapping, prototyping in Figma",
  },
  { label: "Delivery", value: "Agile sprints, Jira, Git / GitHub, AWS, Vercel, Microsoft 365" },
  { label: "Spoken languages", value: "English (fluent), Mandarin (native)" },
];

export const experience = [
  {
    group: "Work",
    items: [
      {
        id: "pixelz360",
        period: "Jul 2026 – now",
        role: "AI App Developer intern",
        organisation: "Pixelz360, Brisbane",
        summary:
          "Building and prototyping internal software with AI-assisted tools, and turning business needs into clear, buildable specifications.",
        photo: {
          src: "/community/pixelz360-team.webp",
          alt: "Kris with the Pixelz360 team in Brisbane",
          caption: "With the Pixelz360 team",
          width: 1400,
          height: 1050,
        },
      },
      {
        id: "qld-government",
        period: "2026 – now",
        role: "Software Engineer Intern",
        organisation: "Queensland Government — Department of Environment, Tourism, Science and Innovation",
        summary:
          "Led a team of five building Junior Ranger, a wildlife-recognition app for Indigenous Junior Rangers. Ran client meetings to gather requirements.",
        href: "/projects/junior-ranger",
      },
    ],
  },
  {
    group: "Community",
    items: [
      { id: "acs-qld", period: "Jan 2026 – now", role: "Emerging Professionals Committee", organisation: "ACS Queensland" },
      { id: "qut-mentor", period: "Jul 2026 – now", role: "Student mentor", organisation: "Women in Science, QUT" },
      { id: "code-network", period: "Oct 2025 – Jul 2026", role: "Graphic designer", organisation: "QUT Code Network" },
      { id: "mentee", period: "Ongoing", role: "Mentee", organisation: "AWS mentorship and Cisco MentorMe" },
    ],
  },
  {
    group: "Education",
    items: [
      { id: "qut", period: "2025 – Dec 2026", role: "Master of Information Technology", detail: "Queensland University of Technology" },
      {
        id: "global-studies",
        period: "2018 – 2020",
        role: "Tricontinental Master in Global Studies",
        detail: "Karlsruhe University of Applied Sciences, Germany — with a study period at Universidad de Monterrey, Mexico (2019)",
      },
      { id: "nchu", period: "2014 – 2018", role: "Bachelor of Laws", detail: "National Chung Hsing University, Taiwan" },
    ],
  },
];

export const about = {
  title: "About me",
  paragraphs: [
    "I got into IT while working at a tech company in Taiwan, where conversations with engineers made me curious about how products are built. I’m now finishing my Master of IT at QUT and interning at Pixelz360 in Brisbane.",
    "Studying in Germany and Mexico taught me to settle into unfamiliar places quickly and work well with people who see things differently.",
  ],
  route: ["Taichung 2014", "Karlsruhe 2018", "Monterrey 2019", "Brisbane 2025"],
};

// Photos from Kris’s own LinkedIn posts, used with his permission.
export const communityPhotos = [
  {
    src: "/community/acs-tech-awards.webp",
    alt: "Kris with two others at the ACS Queensland Tech Awards",
    caption: "Volunteering at the ACS Queensland Tech Awards",
    sourceHref: "https://www.linkedin.com/feed/update/urn:li:activity:7511220916115394560/",
    width: 800,
    height: 1200,
  },
  {
    src: "/community/qut-mentoring.webp",
    alt: "Kris with his QUT career mentor Craig Richards",
    caption: "With my QUT career mentor, Craig Richards",
    sourceHref: "https://www.linkedin.com/feed/update/urn:li:activity:7501253806005956608/",
    width: 800,
    height: 1155,
  },
];
