const screen = (
  src,
  alt,
  caption,
  kind = "App screenshot",
  width = 1600,
  height = 900,
) => ({ src, alt, caption, kind, width, height });

export const projects = [
  {
    slug: "junior-ranger",
    title: "Junior Ranger",
    subtitle: "A little curiosity. A world to discover.",
    category: "Industry",
    status: "Learning app prototype",
    featured: true,
    tone: "ranger",
    oneLiner:
      "A wildlife learning app that turns exploring local nature into photo-based missions for young learners.",
    role: "Team leadership & mobile development",
    tech: ["Swift", "AI integration", "Mobile UX"],
    contributionSummary: [
      "Combined team leadership with mobile app development.",
      "Helped bring wildlife exploration and learning activities into one app experience.",
    ],
    gallery: [
      screen(
        "/projects/junior-ranger.webp",
        "Junior Ranger home, nature missions and photo identification screens",
        "The experience at a glance: choose a quest, explore a mission and photograph a discovery.",
        "App screenshots",
        1600,
        904,
      ),
      screen(
        "/projects/gallery/junior-ranger-1.webp",
        "Junior Ranger home showing today’s quest and mission progress",
        "A clear starting point: today’s quest, mission progress and exploration shortcuts.",
        "App screenshot",
        509,
        1022,
      ),
      screen(
        "/projects/gallery/junior-ranger-2.webp",
        "Nature Explorer mission list with sunflower and butterfly activities",
        "Mission cards connect a recognisable plant or animal with a specific activity.",
        "App screenshot",
        497,
        1022,
      ),
      screen(
        "/projects/gallery/junior-ranger-3.webp",
        "Sunflower identification screen with a captured photo and identifying status",
        "The photo step keeps the active mission, identification status and retake action together.",
        "App screenshot",
        497,
        1022,
      ),
    ],
    evidence: [
      {
        label: "Watch walkthrough",
        type: "Video · YouTube",
        href: "https://youtube.com/shorts/4QIalMF5-Is",
      },
    ],
    overview: [
      "Junior Ranger is a team project exploring how a mobile app can support Indigenous children learning about local wildlife. The product connects an outdoor activity with a small, understandable task: find something in nature, take a photograph and continue a learning mission.",
      "The interface brings the current quest, progress and exploration activities into the same experience. The screens follow the journey from the home screen to a mission and its photo-identification step.",
    ],
    contributions: [
      {
        title: "Mobile application development",
        text: "My role included developing the mobile application as part of the team. The project brings together mission-based activities and wildlife identification, with Swift and external recognition services in the project stack.",
      },
      {
        title: "Team leadership",
        text: "I also took on a team leadership role, connecting the product’s learning purpose with the work needed to build a coherent mobile experience. The app shown here is a shared team outcome, with my contribution spanning development and coordination.",
      },
    ],
    decisions: [
      {
        title: "Give each exploration a clear next step",
        text: "The displayed flow moves from a daily quest to a named mission, then to a photograph. A mission such as finding a sunflower makes the activity concrete. The current task stays visible while the image is being identified, so the learner retains context.",
      },
      {
        title: "Show the state of the task",
        text: "The identification screen shows progress and keeps a retake action available. The interaction gives the learner context while waiting, and a clear way to try another photograph.",
      },
    ],
    outcome:
      "The prototype brings together a daily quest, a mission list and a photo-identification step. The walkthrough shows the mission-based experience; the team’s project stack includes Swift, Google Vision API and iNaturalist API.",
    limitations:
      "The next evaluation would focus on whether learners understand each task and how the app handles uncertain identification results. Learning outcomes and recognition accuracy still need to be evaluated beyond the prototype demonstration.",
    takeaway:
      "A useful AI feature needs a clear surrounding experience: a reason to use it, a visible task state and a way to recover.",
  },
  {
    slug: "food-buddy",
    title: "QUT Food Buddy",
    subtitle: "Making room for one more.",
    category: "Academic",
    status: "Mobile app project",
    featured: true,
    tone: "food",
    oneLiner:
      "A social meal-planning app that helps university students discover, join and organise meals together.",
    role: "Mobile development & UX/UI",
    tech: ["React Native", "Expo", "JavaScript"],
    contributionSummary: [
      "Contributed mobile development and UX/UI design.",
      "Worked on an experience centred on discovering and organising shared meals.",
    ],
    gallery: [
      screen(
        "/projects/foodbuddy.webp",
        "Food Buddy meal list, meal details and create-meal screens",
        "Browse a meal, check its details and organise a new gathering.",
        "App screenshots",
        1600,
        900,
      ),
      screen(
        "/projects/gallery/foodbuddy-1.webp",
        "Meal list with search, campus filters, meeting places and available spots",
        "Meal cards make the location, time and available places visible before opening an event.",
        "App screenshot",
        438,
        900,
      ),
      screen(
        "/projects/gallery/foodbuddy-2.webp",
        "Meal detail with location, join-meal action and review form",
        "The detail screen brings meeting information and the join action into one place.",
        "App screenshot",
        436,
        900,
      ),
      screen(
        "/projects/gallery/foodbuddy-3.webp",
        "Create-meal form with venue, campus, date, time and available spots",
        "A structured form captures the practical details someone needs to attend.",
        "App screenshot",
        438,
        900,
      ),
    ],
    evidence: [
      {
        label: "Watch walkthrough",
        type: "Video · YouTube",
        href: "https://youtu.be/hNPBbQBeToY",
      },
    ],
    overview: [
      "Finding someone to eat with can be a small but meaningful part of settling into university. QUT Food Buddy explores that problem through a mobile app where students can discover shared meals and organise their own. The product makes a social invitation concrete through a place, a time and an available spot.",
      "My role combined mobile application development with UX/UI design. The screens cover the core journey: browsing meals, opening an event and creating a meal. They use the in-app name “QUT Meal Buddy”; this portfolio retains the project name QUT Food Buddy.",
    ],
    contributions: [
      {
        title: "Connect the product flow and interface",
        text: "I contributed UX/UI design to the mobile experience. The case focuses on how browsing, meal details and the creation form fit together, with consistent navigation and information that supports a decision to participate.",
      },
      {
        title: "Contribute to the mobile application",
        text: "My development role used the project’s React Native, Expo and JavaScript stack. My focus in this case is the mobile experience. REST API and authentication capabilities sit within the wider application.",
      },
    ],
    decisions: [
      {
        title: "Make the invitation specific",
        text: "The meal list shows meeting place, time and available spots. Surfacing those details lets someone assess a gathering before opening it. Search and campus controls provide additional ways to narrow the list.",
      },
      {
        title: "Match creation to discovery",
        text: "The creation screen asks for the same practical information that appears on a meal card: title, venue, campus, time and capacity. That relationship keeps the organising flow connected to what another student needs to see.",
      },
    ],
    outcome:
      "The app brings meal discovery, event details and meal creation into one experience. The screenshots and recorded walkthrough show these connected flows, including the controls for joining a meal.",
    limitations:
      "This is an academic project. A useful next evaluation would ask students to find a suitable meal and organise one, then observe where they hesitate. The longer-term effect on social connection would need separate research.",
    takeaway:
      "Small, practical interface details can make a social idea easier to understand: who can join, where to meet and what happens next.",
  },
  {
    slug: "heyjarvis",
    title: "Hey Jarvis",
    subtitle: "A familiar voice in a new place.",
    category: "Hackathon",
    status: "AI companion concept",
    featured: true,
    tone: "jarvis",
    oneLiner:
      "A conversational assistant concept for international students navigating everyday life in Australia.",
    role: "Product planning & UX/UI",
    tech: ["Product design", "Conversational UX", "AI concept"],
    contributionSummary: [
      "Shaped the product concept and user experience.",
      "Contributed interface design for an international-student use case.",
    ],
    gallery: [
      screen(
        "/projects/jarvis.webp",
        "Hey Jarvis team prototype interface with voice status and text-input controls",
        "The team’s companion interface brings voice status and a text-input option together.",
        "Team prototype",
        1600,
        941,
      ),
    ],
    evidence: [
      {
        label: "View project walkthrough",
        type: "Project post · LinkedIn",
        href: "https://www.linkedin.com/posts/kris-hsu_hackathon-artificialintelligence-conversationalai-ugcPost-7449073004086587392-cyLr/",
      },
    ],
    overview: [
      "Hey Jarvis is a hackathon concept for a conversational companion that helps international students navigate life in Australia. Its proposed use cases bring together everyday guidance, schedule management and opportunities to connect with other people.",
      "My contribution was product planning and UX/UI design. This is a product and interaction case, alongside my development projects: it shows how I think about a user’s situation and translate it into an experience a team can discuss and prototype. My scope was the product and user experience, within a team hackathon project.",
    ],
    contributions: [
      {
        title: "Frame the product around a person’s situation",
        text: "I contributed product planning for the international-student use case. The concept connects several everyday needs through one conversational entry point, giving the team a common product direction for the hackathon.",
      },
      {
        title: "Design the interaction and interface",
        text: "I contributed UX/UI design. The prototype gives the team a concrete way to communicate the intended experience. My focus was the user journey and interface, including how a student understands the companion’s current state.",
      },
    ],
    decisions: [
      {
        title: "Make the conversational state visible",
        text: "The shared prototype displays listening and input states around a central voice interface. These signals matter in a conversational product because the person needs to understand whether the assistant is ready, listening or waiting for another action.",
      },
      {
        title: "Keep a text entry point visible",
        text: "Alongside the voice controls, the supplied screen contains a text-input field. That gives the concept another interaction path. The next step would be to test when students prefer speaking or typing and whether the state changes are understandable.",
      },
    ],
    outcome:
      "The result is a team hackathon concept with a prototype interface and a public project walkthrough. It brings the international-student use case into a conversational format that can be explored and discussed.",
    limitations:
      "This remains a hackathon concept. Further work would validate the proposed use cases with international students and evaluate the clarity of the interaction, the quality of responses and the practicality of the integrations.",
    takeaway:
      "Product thinking complements engineering: define the situation, make the interaction understandable and be precise about what a prototype has demonstrated.",
  },
  {
    slug: "ThaimeUp",
    title: "ThaimeUp",
    subtitle: "From menu to order.",
    category: "Academic",
    status: "Coursework web application",
    featured: false,
    tone: "thai",
    oneLiner:
      "A full-stack restaurant ordering system with customer ordering and administrator menu management.",
    role: "Full-stack development",
    tech: ["Python / Flask", "MySQL", "Bootstrap"],
    gallery: [
      screen(
        "/projects/thaimeup.webp",
        "ThaimeUp restaurant ordering application",
        "The coursework application presents a restaurant-owned ordering experience.",
        "Application screenshot",
        1600,
        874,
      ),
    ],
    evidence: [
      {
        label: "Explore source code",
        type: "Repository · GitHub",
        href: "https://github.com/ruby23719111/thaimeup",
      },
    ],
    overview: [
      "ThaimeUp is a university coursework application that simulates an ordering system for a Thai restaurant. It connects customer-facing menu browsing and ordering with administration of restaurant content.",
    ],
    contributions: [
      {
        title: "Build across the application",
        text: "My role was full-stack development using Python, Flask, MySQL and Bootstrap. The documented application includes menu and category browsing, basket management, authenticated ordering and administrator management.",
      },
    ],
    decisions: [
      {
        title: "Separate customer and administration workflows",
        text: "The repository describes customer ordering alongside admin-only management of items, categories and orders. It also documents soft deletion to preserve order history, an important distinction from simply removing past records.",
      },
    ],
    outcome:
      "A public repository provides the application structure, setup instructions and documented functionality. This gives a technical reviewer a route from the interface into the implementation.",
    limitations:
      "This is a simulated coursework system. The repository identifies further interface and responsiveness improvements; commercial deployment and operational evaluation would be separate next steps.",
    takeaway:
      "A useful ordering flow depends on the relationship between the interface, application rules and stored data.",
  },
  {
    slug: "safemind",
    title: "SafeMind",
    subtitle: "A clearer way to report an incident.",
    category: "Hackathon",
    status: "Incident-reporting prototype",
    featured: false,
    tone: "safe",
    oneLiner:
      "A GenAI-assisted workplace incident-reporting concept with a guided reporting interface.",
    role: "UX & front-end development",
    tech: ["Next.js", "React", "GenAI"],
    gallery: [
      screen(
        "/projects/safemind.webp",
        "SafeMind workplace incident-reporting prototype",
        "The prototype explores a guided approach to workplace incident reporting.",
        "Prototype screenshot",
        1600,
        849,
      ),
    ],
    evidence: [
      {
        label: "Watch walkthrough",
        type: "Video · YouTube",
        href: "https://youtu.be/t3-JGh9h8hE",
      },
    ],
    overview: [
      "SafeMind explores how a guided interface can help someone describe a workplace incident. The hackathon prototype uses a GenAI-supported reporting concept to organise a process that can otherwise feel difficult to start.",
    ],
    contributions: [
      {
        title: "UX and front-end contribution",
        text: "My role covered UX and front-end development. The project stack includes Next.js, React and JavaScript. I focused on the reporting experience within the wider team prototype.",
      },
    ],
    decisions: [
      {
        title: "Focus the interface on the reporting task",
        text: "The case centres on the person providing an account of an incident and the interface that supports that task. The recorded walkthrough provides a closer view of the prototype than a technology list alone.",
      },
    ],
    outcome:
      "The available interface image and video document the hackathon prototype. They provide a concrete starting point for discussing the user flow and my front-end role.",
    limitations:
      "Further validation would need to examine task completion and the accuracy of the information captured. The prototype has not yet established an improvement in reporting speed or data quality.",
    takeaway:
      "For a guided reporting product, clarity and the ability to review information matter as much as the AI feature.",
  },
  {
    slug: "mcp-exploration",
    title: "Tool-enabled LLMs",
    subtitle: "Giving a conversation useful tools.",
    category: "Personal",
    status: "MCP exploration",
    featured: false,
    tone: "mcp",
    oneLiner:
      "Custom MCP tools exploring file search and retrieval from Claude Desktop.",
    role: "Development & system design",
    tech: ["MCP", "Node.js", "Tool integration"],
    gallery: [
      screen(
        "/projects/mcp.webp",
        "MCP exploration project screenshot",
        "An original image from the tool-enabled LLM exploration.",
        "Project screenshot",
        1600,
        1696,
      ),
    ],
    evidence: [
      {
        label: "Read project notes",
        type: "Project post · LinkedIn",
        href: "https://www.linkedin.com/posts/kris-hsu_mcp-buildclub-aiagents-activity-7404535037032976384-GzKi/",
      },
    ],
    overview: [
      "This personal exploration investigated how a conversational application can use external tools. The project focused on custom MCP tools that let Claude Desktop search for and retrieve files beyond a standard chat interaction.",
    ],
    contributions: [
      {
        title: "Explore the tool boundary",
        text: "My role covered development and system design, using MCP and Node.js. The contribution was connecting a conversational client to file-search and retrieval capabilities through custom tools.",
      },
    ],
    decisions: [
      {
        title: "Make the capability concrete",
        text: "File search and retrieval provide a bounded example of a tool-enabled workflow: the client requests an operation, a tool performs it, and information returns to the conversation. The public project notes provide further context.",
      },
    ],
    outcome:
      "The exploration connected Claude Desktop with a bounded file-search and retrieval capability. The project notes capture the experiment and provide additional context on the integration.",
    limitations:
      "This is a personal exploration. Before extending it, I would review the tool permissions, define explicit failure responses and test the integration against a wider range of file requests.",
    takeaway:
      "Tool integration is about a clear boundary between what the model requests and what the surrounding application permits.",
  },
  {
    slug: "vcinity",
    title: "VCINITY",
    subtitle: "Finding your place on campus.",
    category: "Academic",
    status: "UX prototype",
    featured: false,
    tone: "vcinity",
    oneLiner:
      "A student-community concept exploring onboarding, discovery and campus engagement.",
    role: "UX & interaction design",
    tech: ["Figma", "User flows", "Prototyping"],
    gallery: [
      screen(
        "/projects/vcinity.webp",
        "VCINITY student community interface prototype",
        "A view of the student-community prototype and its visual design.",
        "UX prototype",
        1600,
        851,
      ),
    ],
    evidence: [
      {
        label: "Explore interactive prototype",
        type: "Prototype · Figma",
        href: "https://www.figma.com/proto/hws7cRIrB4JcINTl1v33he/IFN637_A3_Prototype_ChiaChi-Hsu_n12286443?node-id=6007-406&starting-point-node-id=6007%3A406",
      },
    ],
    overview: [
      "VCINITY is an academic UX prototype exploring how students can discover communities and campus opportunities. Its focus is the experience of finding relevant information and understanding how to take part.",
    ],
    contributions: [
      {
        title: "Design the user journey",
        text: "My role was UX and interaction design. The work used Figma, user flows and prototyping to explore onboarding and engagement experiences. The linked prototype is the primary interactive artefact.",
      },
    ],
    decisions: [
      {
        title: "Make discovery part of onboarding",
        text: "The design connects getting started with discovering communities. A prototype makes it possible to discuss that sequence and the relationship between screens before treating the idea as a deployed application.",
      },
    ],
    outcome:
      "A Figma prototype and original project image document the design work. Visitors can review the concept here and follow the prototype link for more interaction detail.",
    limitations:
      "This is a UX prototype. The next step would be to test the onboarding and discovery tasks with students before progressing to implementation.",
    takeaway:
      "An interactive prototype makes a proposed user journey concrete enough to discuss, evaluate and improve.",
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    subtitle: "Making the work easier to understand.",
    category: "Personal",
    status: "Portfolio website",
    featured: false,
    tone: "portfolio",
    oneLiner:
      "A Next.js portfolio built around clear contributions, real screenshots and shareable project cases.",
    role: "Content, UX/UI & front-end development",
    tech: ["Next.js", "React", "Responsive CSS"],
    gallery: [
      screen(
        "/projects/portfolio.webp",
        "Previous version of Kris Hsu’s portfolio",
        "The previous portfolio, retained as a reference for the redesign.",
        "Previous website",
        1600,
        874,
      ),
    ],
    evidence: [
      {
        label: "Explore source code",
        type: "Repository · GitHub",
        href: "https://github.com/ruby23719111/kris-portfolio",
      },
    ],
    overview: [
      "This website presents eight projects through a consistent reading path: understand the problem, see the product and identify my contribution. It is designed for people evaluating graduate and junior software-development candidates.",
    ],
    contributions: [
      {
        title: "Connect the content and implementation",
        text: "The redesign uses a shared project-data source, individual case routes and reusable screenshot galleries. It is implemented with AI-assisted development; the engineering work includes reviewing the generated changes and checking the resulting experience.",
      },
    ],
    decisions: [
      {
        title: "Give evidence a clear reading order",
        text: "Project cards open internal case studies, while videos, prototypes and code have explicit external links. Screenshots are available before a visitor needs to leave the site. Native links, keyboard controls and responsive layouts support that reading path.",
      },
    ],
    outcome:
      "The implementation provides a home page, eight shareable cases and an overview of the complete project collection. The image above records the earlier website for comparison.",
    limitations:
      "Recruiter comprehension and hiring outcomes have not been measured. Automated and browser checks can assess technical behaviour, but they do not replace a usability review with people unfamiliar with the projects.",
    takeaway:
      "The portfolio is part of the product experience: it should make the work easier to evaluate and its claims easier to verify.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug) =>
  projects.find((project) => project.slug === slug);
