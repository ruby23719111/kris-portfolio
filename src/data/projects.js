const screen = (
  src,
  alt,
  caption,
  kind = "App screenshot",
  width = 1600,
  height = 900,
) => ({ src, alt, caption, kind, width, height });

const juniorRangerEarlyGallery = [
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
    ];

export const projects = [
  {
    slug: "junior-ranger",
    title: "Junior Ranger",
    subtitle: "A little curiosity. A world to discover.",
    category: "Industry-linked capstone",
    status: "Final project version",
    featured: true,
    tone: "ranger",
    oneLiner:
      "A wildlife learning app where young learners complete photo missions, discover species and play learning games.",
    role: "Team lead · Mobile & backend development",
    tech: ["React Native / Expo", "Python / Flask", "Vertex AI"],
    contributionSummary: [
      "Built mobile and backend integrations connecting photo missions with wildlife recognition.",
      "Led team delivery and contributed model integration, narration and a shared interface system.",
    ],
    gallery: [
      screen(
        "/projects/junior-ranger/final-home.webp",
        "Final Junior Ranger home with the current quest, progress and wildlife learning entry points",
        "Start with a quest and see progress through the learning experience.",
        "Final demo frame",
        552,
        1200,
      ),
      screen(
        "/projects/junior-ranger/final-missions.webp",
        "Final mission selection with birds, animals and plants categories",
        "Choose a wildlife category to find a photo mission.",
        "Final demo frame",
        552,
        1200,
      ),
      screen(
        "/projects/junior-ranger/final-photo.webp",
        "Photo review screen showing an ibis image with submit and retake actions",
        "Review the selected photograph before submitting it for recognition.",
        "Final demo frame",
        552,
        1200,
      ),
      screen(
        "/projects/junior-ranger/final-reward.webp",
        "Mission success screen with earned points and an unlocked clothing reward",
        "A completed mission connects progress with a visible reward.",
        "Final demo frame",
        552,
        1200,
      ),
      screen(
        "/projects/junior-ranger/final-quiz.webp",
        "Wildlife fact and knowledge question in the final Junior Ranger app",
        "Continue from identifying wildlife to learning about it.",
        "Final demo frame",
        552,
        1200,
      ),
      screen(
        "/projects/junior-ranger/final-games.webp",
        "Games menu with Drawing Studio, Sort the Rubbish and Memory Match",
        "Explore learning activities beyond the camera-based missions.",
        "Final demo frame",
        552,
        1200,
      ),
    ],
    video: {
      src: "/videos/junior-ranger-final.mp4",
      poster: "/projects/junior-ranger/final-home.webp",
      title: "Junior Ranger — final project walkthrough",
      caption:
        "The final demo shows the app’s missions, recognition flow, learning activities and rewards. Recorded demonstration; not a field evaluation.",
      durationLabel: "4 min",
      type: "video/mp4",
    },
    evidence: [],
    overview: [
      "Junior Ranger is a two-semester team capstone supporting the Queensland Indigenous Land and Sea Ranger program. The app explores how First Nations children can learn about local wildlife through photo missions, facts, quizzes and games.",
      "The final project version brings those activities into a connected mobile experience. I was the team lead and contributed across mobile development, the Python backend and model integration. The product shown here is a shared team outcome.",
    ],
    contributions: [
      {
        title: "Connect the app, backend and recognition models",
        text: "I connected the React Native / Expo app to recognition and species APIs through a Flask backend. My work included labelled datasets, custom Vertex AI models and integrating prediction checks into the mission flow.",
      },
      {
        title: "Support learning and a consistent interface",
        text: "I integrated Gemini narration and contributed a shared UI system and avatar assets. Narration provides another way to access the learning content, alongside the visible text and activities.",
      },
      {
        title: "Coordinate a shared team delivery",
        text: "I used Jira and GitHub to coordinate sprints and turn client feedback into tasks. My earlier independent prototype helped establish the camera and recognition workflow before the team developed the final experience.",
      },
    ],
    decisions: [
      {
        title: "Treat recognition as a decision, not just a prediction",
        text: "The final implementation checks the expected category, target species and prediction confidence before awarding progress. An uncertain result should let the learner try again. A model score alone does not establish that the task was completed correctly.",
      },
      {
        title: "Keep the next action clear",
        text: "Photo review separates taking a picture from submitting it. Visible progress, retry controls and narration states help explain what is happening. The surrounding interface matters when recognition or audio depends on a network request.",
      },
    ],
    outcome:
      "The team completed a functional capstone version with a React Native / Expo app, Flask service and model integration. The final demo shows the connected journey through missions, photo review, completion, wildlife questions, games and rewards.",
    limitations:
      "Recognition requires an active backend and internet connection. The next step is field evaluation with the intended users, including uncertain photos and unreliable connections. The demo establishes the product flow; recognition reliability and learning outcomes remain to be evaluated.",
    takeaway:
      "An AI learning feature needs a clear task, careful handling of uncertainty and an understandable path after the result.",
    evolution: {
      title: "How the project evolved",
      intro:
        "One project, developed in two stages. The final version is shown above; the early prototype below records where the interaction began.",
      changes: [
        {
          title: "From a core flow to a connected learning experience",
          text: "Phase 1 established the quest, mission and photo-identification flow. Phase 2 brought recognition, narration, quizzes, games and rewards together around that flow.",
        },
        {
          title: "From an early prototype to the final mobile stack",
          text: "The final app uses React Native / Expo for the cross-platform mobile experience and Flask for recognition requests. Earlier SwiftUI work remains part of the project’s development history.",
        },
      ],
    },
    phases: [
      {
        id: "phase-1",
        title: "Phase 1 — establishing the core flow",
        label: "Earlier prototype",
        summary:
          "An initial quest, mission list and photo-identification experience tested the central interaction before the final project version.",
        role: "Initial prototyping & team leadership",
        tech: [],
        contributions: [
          {
            title: "Build the initial prototype",
            text: "I developed the initial prototype independently and tested the camera and image-recognition workflow on an iPhone.",
          },
        ],
        decisions: [],
        gallery: juniorRangerEarlyGallery,
        evidence: [
          {
            label: "Watch Phase 1 walkthrough",
            type: "Earlier prototype · YouTube",
            href: "https://youtube.com/shorts/4QIalMF5-Is",
          },
        ],
        outcome:
          "The earlier screenshots and walkthrough record the quest-to-photo interaction that preceded the final version.",
        limitations:
          "These screens show the early interaction prototype; the complete learning activities and rewards appear in Phase 2.",
      },
      {
        id: "phase-2",
        title: "Phase 2 — bringing the experience together",
        label: "Final project version",
        summary:
          "The final version adds a connected set of wildlife missions, learning activities, narration and rewards, shown in the gallery and full demo above.",
        role: "Team lead · Mobile, backend & model integration",
        tech: ["React Native / Expo", "Python / Flask", "Vertex AI"],
        contributions: [
          {
            title: "Integrate and coordinate the final experience",
            text: "My work covered the mobile/backend connection, model and narration integration, shared interface work and team coordination.",
          },
        ],
        decisions: [],
        gallery: [],
        evidence: [],
        outcome:
          "The final demo and release source provide complementary evidence of the visible product flow and its implementation.",
        limitations:
          "An academic capstone deliverable with documented limitations.",
      },
    ],
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
    title: "Building Tool-Enabled LLMs with MCP",
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
    title: "Personal Portfolio Website",
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
      screen("/projects/portfolio/home.webp", "Redesigned portfolio homepage with graduate positioning and selected work", "The homepage introduces my background and brings the selected work into view.", "Current website", 1280, 900),
      screen("/projects/portfolio/experience.webp", "Experience section separating the development internship and industry capstone", "Experience cards distinguish professional, academic and community contributions.", "Current website", 1280, 900),
      screen("/projects/portfolio/mobile.webp", "The portfolio introduction and navigation on a mobile screen", "The same reading path adapts to a single-column mobile layout.", "Current mobile website", 375, 812),
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
        text: "All eight projects are visible on the homepage. Details expand in place, with independent case links for sharing. Screenshots are available before a visitor needs to leave the site. Videos, prototypes and source code have explicit links, while native links and keyboard controls support the reading path.",
      },
    ],
    outcome:
      "The completed site presents all eight projects on one page, with independent case links, experience and a personal journey. Seven integration checks pass, and layout checks at five widths from 320 to 1440 pixels found no horizontal overflow. Mobile Lighthouse tests of the local production build scored 95–96 for Performance and 100 for Accessibility, Best Practices and SEO across the homepage, project list and Junior Ranger case. These are laboratory results, not real-user measurements.",
    limitations:
      "Recruiter comprehension and hiring outcomes have not been measured. Automated and browser checks can assess technical behaviour, but they do not replace a usability review with people unfamiliar with the projects.",
    takeaway:
      "The portfolio is part of the product experience: it should make the work easier to evaluate and its claims easier to verify.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug) =>
  projects.find((project) => project.slug === slug);
