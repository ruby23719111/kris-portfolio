const shot = (src, alt, caption, width, height) => ({ src, alt, caption, width, height });

export const projects = [
  {
    slug: "junior-ranger",
    title: "Junior Ranger",
    featured: true,
    meta: "Queensland Government internship · 2026 · Team lead",
    caseMeta: "Queensland Government internship · 2026",
    oneLiner:
      "A mobile app where First Nations children photograph local wildlife, an AI model recognises the species, and they unlock facts, quizzes and games.",
    role: "Team lead. Mobile, backend and model integration.",
    listRole: "Team lead · Queensland Government internship",
    tech: ["React Native / Expo", "Python / Flask", "Vertex AI", "Gemini"],
    facts: [{ label: "Project", value: "Two phases, team of five, for the Queensland Indigenous Land and Sea Ranger program." }],
    highlights: [
      "Built the Flask API between the Expo app, custom Vertex AI models and Gemini narration.",
      "Worked on three custom Vertex AI models covering the 18 species the missions use.",
      "Led the team: sprints in Jira, client feedback turned into tasks.",
    ],
    panel: { kind: "phones", tone: "#EEE0A8" },
    cover: [
      shot("/projects/junior-ranger/final-home.webp", "Junior Ranger home screen with today’s quest", "Start with today’s quest.", 552, 1200),
      shot("/projects/junior-ranger/final-photo.webp", "Reviewing a photo of an ibis before submitting it for recognition", "Check the photo before sending it.", 552, 1200),
      shot("/projects/junior-ranger/final-reward.webp", "Mission accomplished screen with points and a new reward", "A correct match earns points and gear.", 552, 1200),
    ],
    gallery: [
      shot("/projects/junior-ranger/final-home.webp", "Home screen with today’s quest and progress", "Start with today’s quest.", 552, 1200),
      shot("/projects/junior-ranger/final-missions.webp", "Choosing birds, animals or plants", "Pick a habitat to find a mission.", 552, 1200),
      shot("/projects/junior-ranger/final-photo.webp", "Reviewing a photo of an ibis before submitting", "Check the photo before sending it.", 552, 1200),
      shot("/projects/junior-ranger/final-reward.webp", "Mission accomplished with points and a new reward", "A correct match earns points and gear.", 552, 1200),
      shot("/projects/junior-ranger/final-quiz.webp", "A wildlife fact followed by a question", "Then learn something about it.", 552, 1200),
      shot("/projects/junior-ranger/final-games.webp", "Games menu: Drawing Studio, Sort the Rubbish, Memory Match", "Games for when the camera’s away.", 552, 1200),
    ],
    links: [
      { label: "Case study", href: "/projects/junior-ranger", primary: true },
      { label: "4-min demo", href: "/projects/junior-ranger#demo" },
    ],
    video: {
      src: "/videos/junior-ranger-final.mp4",
      poster: "/projects/junior-ranger/final-home.webp",
      title: "Junior Ranger final demo",
      duration: "4 min",
      caption: "Missions, photo review, recognition, quizzes, games and rewards. A recorded walkthrough, not a field test.",
    },
    brief: [
      "The client was the Queensland Government’s Indigenous Land and Sea Ranger program. The question was how First Nations children could learn about the wildlife around them — not from a textbook, but by going outside, finding it and photographing it.",
      "The app is a shared team outcome. Below is what I was responsible for.",
    ],
    contributions: [
      {
        title: "Connected the app to the models.",
        text: "The Expo app talks to a Flask backend, which calls our own Vertex AI models. I worked on the labelled datasets and the custom models, and wired the prediction check into the mission flow.",
      },
      {
        title: "Added narration and a shared UI kit.",
        text: "Gemini reads the learning content aloud, so it isn’t only text on a screen. I also built shared interface components and the avatar assets.",
      },
      {
        title: "Ran the team.",
        text: "Sprints in Jira and GitHub, regular client meetings to gather requirements, and explaining technical trade-offs in plain language to non-technical stakeholders.",
      },
    ],
    architecture: {
      steps: [
        { title: "Mobile app", tech: "React Native / Expo" },
        { title: "Backend API", tech: "Python / Flask, Docker", note: "Validates, resizes and strips EXIF from photos", highlight: true },
      ],
      services: [
        { title: "Vertex AI AutoML", note: "three custom models: birds, animals, plants" },
        { title: "Gemini TTS", note: "narration, cached, on Cloud Run" },
      ],
      text: "The app never talks to Google Cloud directly. Every photo goes through the Flask API, so credentials stay on the server and photos aren’t stored. Each model only chooses between the six species its missions use, plus “other”, and the API answers with one of four decisions: match, different species, uncertain or other.",
    },
    decisions: [
      {
        title: "A prediction isn’t a pass.",
        text: "A photo only counts if the top result is the mission’s species, scores at least 0.80 and leads the runner-up by 10 points. Otherwise the child hears “not sure, try again” instead of a wrong answer.",
      },
      {
        title: "Taking a photo and sending it are two steps.",
        text: "Kids review the picture first and can retake it. Progress, retry and narration states are always visible, because recognition and audio both wait on the network.",
      },
    ],
    outcome: [
      "We delivered a working app with the front end, backend, models and narration connected end to end.",
      "It’s covered by 30 automated test files on the app side and unit tests on the backend, with the cloud calls mocked.",
      "What it hasn’t had yet is a proper accuracy test. A model’s confidence score isn’t the same as how often it’s right, so the next step is to measure accuracy on a held-out set of real photos taken by kids, then calibrate the 0.80 and 10-point thresholds against it.",
    ],
    phases: {
      intro: "Phase 1, the semester before, ended with an MVP: a quest, a mission list and a photo step, tested on an iPhone. For Phase 2 we rebuilt almost all of it.",
      image: shot("/projects/junior-ranger.webp", "Phase 1 MVP: home, mission list and photo identification screens", "Phase 1 MVP.", 1600, 904),
      walkthrough: "https://youtube.com/shorts/4QIalMF5-Is",
      rows: [
        ["App", "SwiftUI, iPhone only", "React Native / Expo, one codebase for iPhone and Android"],
        ["Recognition", "General image labels matched to species names", "Three custom Vertex AI models trained on the 18 mission species"],
        ["Pass rule", "Name match", "Right species, score ≥ 0.80, 10-point lead; otherwise “try again”"],
        ["Learning", "Quest, missions, photo", "Plus facts, quizzes, games, avatar rewards and Gemini narration"],
        ["Design", "First pass", "Redesigned from scratch with a shared UI kit"],
      ],
      why: [
        {
          title: "General labels weren’t specific enough.",
          text: "A general model can tell you it’s a bird, not which bird. Training our own models on just the species the missions ask for, plus “other”, gave the model a much narrower question to answer.",
        },
        {
          title: "One codebase, more devices.",
          text: "Moving from SwiftUI to React Native meant the same app could run on the iPhones and Android phones kids actually have.",
        },
        {
          title: "Keep the cloud behind the backend.",
          text: "In an app for children, photos and Google credentials shouldn’t live on the phone, so everything now goes through the Flask API.",
        },
      ],
      myPart: [
        ["Phase 1", "built the first camera-to-recognition flow and tested it on an iPhone."],
        ["Phase 2", "led the team of five; connected the app, backend and models; integrated Gemini narration; ran client meetings."],
      ],
    },
  },
  {
    slug: "ThaimeUp",
    title: "ThaimeUp",
    featured: true,
    meta: "QUT coursework · 2025 · full-stack web app",
    caseMeta: "QUT coursework · 2025",
    oneLiner:
      "Online ordering for a restaurant: customers browse and order, staff manage the menu and orders from a separate admin side.",
    role: "Full-stack development",
    listRole: "Full-stack · coursework",
    tech: ["Python / Flask", "MySQL", "Bootstrap"],
    highlights: [
      "Built the whole stack: Flask routes, MySQL schema, Bootstrap front end.",
      "Menu, basket, logged-in checkout and role-based admin pages.",
      "Soft deletes, so removing a dish never breaks past orders.",
    ],
    panel: { kind: "browser", tone: "#E9E4DC" },
    cover: [shot("/projects/thaimeup.webp", "ThaimeUp ordering site: menu categories and dishes", "The customer-facing menu.", 1600, 874)],
    gallery: [shot("/projects/thaimeup.webp", "ThaimeUp ordering site: menu categories and dishes", "The customer-facing menu.", 1600, 874)],
    links: [{ label: "Code on GitHub", href: "https://github.com/ruby23719111/thaimeup", primary: true }],
    brief: [
      "A coursework project that simulates an ordering system for a Thai restaurant, connecting the menu customers see with the admin tools behind it.",
    ],
    contributions: [
      {
        title: "Built across the stack.",
        text: "Python and Flask on the server, MySQL for data, Bootstrap for the interface. Menu and category browsing, a basket, logged-in ordering, and admin pages for items, categories and orders.",
      },
    ],
    decisions: [
      {
        title: "Customers and staff get different tools.",
        text: "Ordering is open to logged-in customers; managing items, categories and orders is admin-only.",
      },
      {
        title: "Soft-delete menu items.",
        text: "Removing a dish hides it from the menu but keeps it in the database, so order history stays intact.",
      },
    ],
    outcome: [
      "The public repository has the full source, setup instructions and documented features, so a reviewer can go from the interface straight into the code.",
      "It’s a simulation, not a live restaurant. The repo lists interface and responsiveness improvements as next steps.",
    ],
  },
  {
    slug: "food-buddy",
    title: "QUT Food Buddy",
    featured: true,
    meta: "QUT team project · mobile app",
    caseMeta: "QUT team project · mobile app",
    oneLiner:
      "Helps students find someone to eat with: browse meals on campus, join an open spot, or organise your own.",
    role: "Mobile development and UX/UI design",
    listRole: "Mobile & UX/UI · team project",
    tech: ["React Native", "Expo", "JavaScript"],
    highlights: [
      "Mobile development in React Native and Expo.",
      "Designed the flows: browse, meal detail, create a meal.",
      "Made the create form collect exactly what a meal card shows.",
    ],
    panel: { kind: "phones", tone: "#DDE3E7" },
    cover: [
      shot("/projects/gallery/foodbuddy-1.webp", "Meal list with campus filters and open spots", "Browse meals by campus.", 438, 900),
      shot("/projects/gallery/foodbuddy-2.webp", "Meal detail with location and a join button", "See where and when, then join.", 436, 900),
      shot("/projects/gallery/foodbuddy-3.webp", "Create-meal form with venue, campus, time and spots", "Or organise your own.", 438, 900),
    ],
    gallery: [
      shot("/projects/gallery/foodbuddy-1.webp", "Meal list with search, campus filters, meeting places and available spots", "Browse meals by campus.", 438, 900),
      shot("/projects/gallery/foodbuddy-2.webp", "Meal detail with location, join-meal action and review form", "See where and when, then join.", 436, 900),
      shot("/projects/gallery/foodbuddy-3.webp", "Create-meal form with venue, campus, date, time and available spots", "Or organise your own.", 438, 900),
    ],
    links: [
      { label: "Case study", href: "/projects/food-buddy", primary: true },
      { label: "Walkthrough video", href: "https://youtu.be/hNPBbQBeToY" },
    ],
    brief: [
      "Finding someone to eat with is a small but real part of settling into uni. Food Buddy makes the invitation concrete: a place, a time and a spot left at the table.",
      "The screens use the in-app name “QUT Meal Buddy”.",
    ],
    contributions: [
      {
        title: "Designed the core flows.",
        text: "Browsing meals, opening one and creating one, with consistent navigation and the details someone needs to decide whether to join.",
      },
      {
        title: "Worked on the mobile app.",
        text: "React Native, Expo and JavaScript, focused on the screens shown here.",
      },
    ],
    decisions: [
      {
        title: "Make the invitation specific.",
        text: "Meal cards show the meeting place, time and spots left, so you can judge a meal before opening it. Search and campus filters narrow the list.",
      },
      {
        title: "Ask for what people need to see.",
        text: "The create form collects the same fields a meal card shows: title, venue, campus, time and capacity.",
      },
    ],
    outcome: [
      "A working app covering discovery, meal details, joining and creating meals, shown end to end in the walkthrough video.",
      "Next I’d watch students try to find and organise a meal, and see where they hesitate.",
    ],
  },
  {
    slug: "heyjarvis",
    title: "Hey Jarvis",
    featured: false,
    meta: "Hackathon · product concept",
    caseMeta: "Hackathon · product concept",
    oneLiner: "A voice assistant concept for international students finding their feet in Australia.",
    summary: "A voice assistant concept for international students. I scoped the use cases and designed the interaction for the team’s prototype.",
    role: "Product planning and UX/UI",
    listRole: "Product planning & UX · hackathon",
    tech: ["Requirements", "Conversational UX"],
    thumb: shot("/projects/jarvis.webp", "", "", 1600, 941),
    panel: { kind: "wide", tone: "#0B1520" },
    gallery: [shot("/projects/jarvis.webp", "Hey Jarvis prototype: a circular voice indicator with text input below", "The team’s prototype: voice status with a text option.", 1600, 941)],
    links: [
      { label: "Team’s LinkedIn post", href: "https://www.linkedin.com/posts/kris-hsu_hackathon-artificialintelligence-conversationalai-ugcPost-7449073004086587392-cyLr/" },
    ],
    brief: [
      "A hackathon concept: one conversational entry point for the everyday questions international students have — getting around, managing a schedule, meeting people.",
    ],
    contributions: [
      { title: "Scoped the product.", text: "Framed the use cases around an international student’s situation, which gave the team a shared direction." },
      { title: "Designed the interaction.", text: "The user journey and interface, including how a student can tell what the assistant is doing." },
    ],
    decisions: [
      { title: "Show the assistant’s state.", text: "Listening, ready and waiting are visible around the voice indicator, so nobody talks to a microphone that isn’t on." },
      { title: "Keep a text box.", text: "Speaking out loud isn’t always an option, so typing stays one tap away." },
    ],
    outcome: [
      "A team prototype and a public walkthrough. The next step would be testing the use cases with international students.",
    ],
  },
  {
    slug: "mcp-exploration",
    title: "MCP file tools",
    featured: false,
    meta: "Personal · exploration",
    caseMeta: "Personal exploration",
    oneLiner: "Custom MCP tools in Node.js that let Claude Desktop search and read local files.",
    summary: "Custom MCP tools in Node.js that let Claude Desktop search and read local files.",
    role: "Development and system design",
    listRole: "Development · personal",
    tech: ["Node.js", "MCP"],
    thumb: shot("/projects/mcp.webp", "", "", 1600, 1696),
    panel: { kind: "wide", tone: "#ECEAE4" },
    gallery: [shot("/projects/mcp.webp", "Claude Desktop listing the files it can access through the custom tools", "Claude Desktop using the custom file tools.", 1600, 1696)],
    links: [
      { label: "Project notes", href: "https://www.linkedin.com/posts/kris-hsu_mcp-buildclub-aiagents-activity-7404535037032976384-GzKi/" },
    ],
    brief: ["An experiment in giving a chat app real tools: custom Model Context Protocol servers that search for and read files."],
    contributions: [{ title: "Built the tools.", text: "File search and retrieval tools in Node.js, connected to Claude Desktop over MCP." }],
    decisions: [
      {
        title: "Draw the boundary clearly.",
        text: "The model asks, the tool does the work, and the app decides what’s allowed. File search is a small enough job to see that boundary clearly.",
      },
    ],
    outcome: ["Before extending it I’d tighten the tool permissions, define explicit failure responses and test against a wider range of requests."],
  },
  {
    slug: "safemind",
    title: "SafeMind",
    featured: false,
    meta: "Hackathon · 2025",
    caseMeta: "Hackathon · 2025",
    oneLiner: "Injured workers capture evidence by voice and photo; GenAI turns it into a structured workplace-injury report.",
    summary: "Injured workers capture evidence by voice and photo; GenAI turns it into a structured workplace-injury report.",
    role: "UX and front-end development",
    listRole: "UX & front end · hackathon",
    tech: ["Next.js", "React"],
    thumb: shot("/projects/safemind.webp", "", "", 1600, 849),
    thumbPosition: "70% 50%",
    panel: { kind: "wide", tone: "#E7ECEF" },
    gallery: [shot("/projects/safemind.webp", "SafeMind welcome screen with options to report an incident", "The reporting prototype.", 1600, 849)],
    links: [{ label: "Walkthrough video", href: "https://youtu.be/t3-JGh9h8hE" }],
    brief: ["Reporting a workplace injury is stressful and easy to put off. SafeMind guides the person through it and turns what they say and photograph into a structured form."],
    contributions: [{ title: "Designed and built the reporting flow.", text: "UX and front end in Next.js and React, within the team’s prototype." }],
    decisions: [
      { title: "Focus on the person reporting.", text: "The interface is about getting their account down clearly and letting them review it before anything is submitted." },
    ],
    outcome: ["A working hackathon prototype with a recorded walkthrough. Next would be testing task completion and checking how accurate the generated reports are."],
  },
  {
    slug: "vcinity",
    title: "VCINITY",
    featured: false,
    meta: "QUT coursework · 2025",
    caseMeta: "QUT coursework · 2025",
    oneLiner: "A student community app concept that brings career, wellbeing, social and academic support into one place.",
    summary: "User flows and a clickable prototype for helping new students find campus communities.",
    role: "UX and interaction design",
    listRole: "UX & interaction design",
    tech: ["Figma", "User flows"],
    thumb: shot("/projects/vcinity.webp", "", "", 1600, 851),
    panel: { kind: "wide", tone: "#111111" },
    gallery: [shot("/projects/vcinity.webp", "VCINITY prototype home screen with community categories", "The prototype’s home screen.", 1600, 851)],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/hws7cRIrB4JcINTl1v33he/IFN637_A3_Prototype_ChiaChi-Hsu_n12286443?node-id=6007-406&starting-point-node-id=6007%3A406",
      },
    ],
    brief: ["New students have to piece together clubs, careers, wellbeing and study support from different places. VCINITY explores putting them in one app."],
    contributions: [{ title: "Designed the journey.", text: "User flows and a clickable Figma prototype covering onboarding and community discovery." }],
    decisions: [{ title: "Make discovery part of onboarding.", text: "New students see communities that fit them while they set up, instead of hunting for them later." }],
    outcome: ["Usability feedback on the prototype was positive. The next step would be building it."],
  },
  {
    slug: "portfolio",
    title: "This portfolio",
    featured: false,
    meta: "Personal · 2026",
    caseMeta: "Personal · 2026",
    oneLiner: "Next.js site with a page per project, deployed on Vercel.",
    summary: "Next.js site with a page per project, deployed on Vercel.",
    role: "Design and front-end development",
    listRole: "Design & front end · personal",
    tech: ["Next.js", "React", "CSS"],
    thumb: shot("/projects/portfolio/home.webp", "", "", 1600, 1000),
    panel: { kind: "wide", tone: "#E9E7E1" },
    gallery: [
      shot("/projects/portfolio/home.webp", "This site’s homepage on a desktop screen", "Desktop.", 1600, 1000),
      shot("/projects/portfolio/mobile.webp", "This site’s homepage on a phone", "Phone.", 780, 1688),
    ],
    links: [{ label: "Code on GitHub", href: "https://github.com/ruby23719111/kris-portfolio" }],
    brief: ["A portfolio written for the people who hire graduates: a recruiter scanning for 30 seconds, and a hiring manager who wants to see how I work."],
    contributions: [
      { title: "Content, design and front end.", text: "One data file drives the homepage and every case page, built with the Next.js App Router, next/font and next/image." },
    ],
    decisions: [
      { title: "Answer the recruiter’s questions first.", text: "Role, availability, work rights and location sit right under the introduction, and the résumé is one click away." },
      { title: "Real evidence only.", text: "Real screenshots, a real demo video and links to code. No stock images or made-up numbers." },
    ],
    outcome: ["Static pages, fast on a phone, and every project has its own link to share."],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
export const getProject = (slug) => projects.find((project) => project.slug === slug);
