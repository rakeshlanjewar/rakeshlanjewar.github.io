export const profile = {
  firstName: "Rakesh",
  lastName: "Lanjewar",
  fullName: "Rakesh Dhanraj Lanjewar",
  title: "Full Stack Developer",
  titleOptions: [
    "Full Stack Developer",
    "Node.js / NestJS Engineer",
    "AI-Agent Integrator",
    "Cloud Practitioner (AWS)",
    "Test-Driven Developer",
  ],
  location: "Hyderabad, India",
  email: "rakesh.sakoli@gmail.com",
  phone: "+91 72764 40827",
  phoneHref: "+917276440827",
  linkedin: "https://www.linkedin.com/in/rakesh-lanjewar/",
  github: "https://github.com/rakeshlanjewar",
  twitter: "https://twitter.com/RDxLanjewar",
  website: "https://rakesh.link",
  years: "8+",
  summary:
    "Senior Software Engineer with over 8 years of experience specialising in scalable full-stack architecture (Node.js, NestJS, Vue 3) and Agile methodologies. Proven expertise in integrating AI capability into production applications, utilising autonomous AI agents, advanced prompt engineering, and Test-Driven Development (TDD) to automate complex engineering workflows. Strong proficiency in relational database design (PostgreSQL) and translating intricate requirements into high-performance, intelligent systems that drive operational efficiency and business success.",
};

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "Ruby"] },
  { group: "Frontend", items: ["React", "Next.js", "Vue 3", "React Native", "Flutter", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "NestJS", "ExpressJS", "Ruby on Rails", "Laravel", "GraphQL (code-first)"] },
  { group: "Data & Infra", items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Microservices", "Docker"] },
  { group: "Cloud & DevOps", items: ["AWS (EC2, ECS/Fargate, S3, SQS)", "CI/CD", "Git", "GitHub Actions"] },
  { group: "AI & Testing", items: ["AI Agents", "LangChain", "MCP servers", "Prompt Engineering", "E2E & Unit Testing", "TDD"] },
];

export const projects = [
  {
    name: "GxP Pharma Platform",
    org: "Sanofi",
    tag: "Cloud · Compliance",
    description:
      "Serverless AWS infrastructure (ECS/Fargate, SQS, S3) powering GxP-compliant pharmaceutical projects with 100% on-time delivery. High-performance platform on NestJS, GraphQL, TypeORM and Vue 3.",
    stack: ["NestJS", "GraphQL", "TypeORM", "Vue 3", "AWS"],
  },
  {
    name: "AI Engineering Workbench",
    org: "Sanofi",
    tag: "AI Agents",
    description:
      "Custom MCP servers and LangChain prototypes that automate complex engineering workflows — boosting engineering productivity with autonomous agents and prompt engineering.",
    stack: ["AI Agents", "LangChain", "MCP", "Node.js"],
  },
  {
    name: "NFT Marketplace",
    org: "Tech Alchemy",
    tag: "Web3",
    description:
      "End-to-end development of an NFT marketplace on a NestJS, Nx and React platform, backed by custom Node.js / Temporal.io indexers syncing real-time Polygon data.",
    stack: ["NestJS", "Nx", "React", "Web3", "Temporal.io", "Polygon"],
  },
  {
    name: "HealthMachine",
    org: "Avegen",
    tag: "HealthTech",
    description:
      "Drove test coverage from 60% to 90% to secure production deployments, and modernised a legacy web + mobile codebase across NestJS, Node.js, Rails, React and React Native.",
    stack: ["NestJS", "Rails", "React", "React Native"],
  },
  {
    name: "adilstore.com",
    org: "Al Adil Trading",
    tag: "E-commerce",
    description:
      "Maintained and scaled a retail e-commerce platform — Flutter mobile apps with Python backend microservices, plus data integration between MS Dynamics GP and GoFrugal.",
    stack: ["Flutter", "Python", "Microservices"],
  },
  {
    name: "Raisoni Admission Portal",
    org: "Global Education",
    tag: "EdTech",
    description:
      "Core architecture for a university admission portal securely processing 1,000+ applications, while modernising 15+ PHP institutional sites to cut load times by 50%.",
    stack: ["PHP", "MySQL", "Web"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "Sanofi Healthcare India Pvt. Ltd.",
    location: "Hyderabad, India",
    start: "2024-07",
    end: "Present",
    endLabel: "Current",
    bullets: [
      "Scalable Architecture — Built reliable serverless AWS infrastructure (ECS/Fargate, SQS, S3) to support GxP-compliant pharmaceutical projects with 100% on-time delivery.",
      "AI Integration — Boosted engineering productivity by creating custom MCP servers and LangChain prototypes to automate complex tasks.",
      "Full-Stack Development — Developed a high-performance platform using NestJS, GraphQL, TypeORM, and Vue 3.",
      "Modernization & Security — Upgraded to Node.js 22 and Vue 3, refactoring legacy code to fix 90% of security vulnerabilities.",
    ],
  },
  {
    role: "SDE-2",
    org: "Tech Alchemy Studios Pvt. Ltd.",
    location: "Pune, India",
    start: "2023-06",
    end: "2024-06",
    bullets: [
      "Web3 Infrastructure — Built custom Node.js and Temporal.io indexers to sync real-time Polygon data, integrated into a robust NestJS, Nx, and React platform.",
      "App Optimization — Improved performance and reliability using TanStack Query, Web3 frameworks, and Docker-based AWS deployments.",
      "Technical Leadership — Led the end-to-end development of an NFT marketplace.",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Avegen India Pvt. Ltd.",
    location: "Pune, India",
    start: "2021-12",
    end: "2023-06",
    bullets: [
      "Championed testing best practices for HealthMachine, driving test coverage from 60% to 90% to secure production deployments and minimise regressions.",
      "Modernized legacy web and mobile codebases using NestJS, Node.js, Ruby on Rails, React, and React Native to improve overall system stability.",
      "Authored comprehensive architectural documentation, establishing a centralised knowledge base that accelerated onboarding for new engineering hires.",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Originating Motion Software Solutions Pvt. Ltd.",
    location: "Remote, India",
    start: "2020-01",
    end: "2021-12",
    bullets: [
      "Served as Technical Lead & SME for cross-functional teams, bridging stakeholders and engineering to successfully deliver 3 high-priority projects.",
      "Architected scalable full-stack applications using Node.js, NestJS, Next.js, React, and Laravel, optimising development lifecycles.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Al Adil Trading Co. LLC",
    location: "Dubai, UAE",
    start: "2018-08",
    end: "2019-12",
    bullets: [
      "Engineered seamless data integration between MS Dynamics GP and GoFrugal within a strict 2-month timeline.",
      "Maintained and scaled adilstore.com, utilising Flutter for mobile apps and Python for backend microservices.",
    ],
  },
  {
    role: "PHP Developer (Internship)",
    org: "Global Education Ltd.",
    location: "Nagpur, India",
    start: "2017-07",
    end: "2018-04",
    bullets: [
      "Developed core architecture for the Raisoni Group admission portal, securely processing 1,000+ applications while modernising 15+ PHP institutional websites to improve page load speeds by 50%.",
    ],
  },
];

export const certs = [{ name: "AWS Certified Cloud Practitioner", date: "2025-07" }];

export const education = [
  {
    degree: "Master of Science — Data Science: Computer Science",
    school: "Chandigarh University, Punjab",
    year: "2022-12",
  },
  {
    degree: "Bachelor of Computer Applications — Computer Science",
    school: "Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur",
    year: "2018-07",
  },
];

export const languages = ["English", "Hindi", "Marathi"];
export const interests = ["OSS", "AI Agents", "Prompt Engineering", "Cloud Architecture"];
