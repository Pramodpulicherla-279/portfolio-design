export const profile = {
  name: 'Pramod Pulicherla',
  shortName: 'Pramod',
  initials: 'PP',
  role: 'SDET',
  roleLong: 'SDET & Full-Stack Developer',
  location: 'Hyderabad, Telangana',
  email: 'pramodpulicherla350@gmail.com',
  phone: '+91 7660852538',
  phoneRaw: '917660852538',
  github: 'https://github.com/Pramodpulicherla-279',
  githubUser: 'Pramodpulicherla-279',
  // GitHub's REST API has no contributions-calendar endpoint, and the GraphQL
  // one that does needs a token — which cannot ship in a public static site.
  // This is a CORS-enabled public mirror of that GraphQL query.
  contributionsApi: 'https://github-contributions-api.jogruber.de/v4',
  linkedin: 'https://www.linkedin.com/in/pramod-pulicherla-0113b916a/',
  resumeFile: 'Pramod-Pulicherla-SDET.pdf',
  photo: 'pramod-hero.png',
  photoWebp: 'pramod-hero.webp',
  tagline:
    'I build the automation that keeps web and mobile products honest — and the products themselves.',
  summary: [
    'QA Automation Tester with 1+ years of experience designing and developing end-to-end automation suites for web and mobile applications using Python, Appium and Playwright.',
    'Builds scalable applications and RESTful services using the MERN stack and FastAPI, with experience in CI/CD integration and full-stack development.',
    'Experienced in cross-platform testing, performance/load validation and latency testing, ensuring reliable and high-quality delivery across multiple mobile applications.',
  ],
};

export const stats = [
  { value: '1+', label: 'Years as an QA Automation Tester' },
  { value: '4', label: 'Android apps automated' },
  { value: '60%', label: 'Manual regression cut' },
  { value: '3', label: 'Products shipped live' },
];

export const skillGroups = [
  {
    id: 'testing',
    title: 'Testing & Automation',
    caption: 'The core craft',
    featured: true,
    items: [
      'Python',
      'Playwright',
      'Selenium',
      'Appium',
      'ChromeDriver',
      'Appium Inspector',
      'Page Object Model',
      'Hybrid Framework',
      'Mobile APK Testing',
      'API Testing',
      'SQL Database Testing',
      'Functional Testing',
      'Regression Testing',
      'Performance / Latency Testing',
      'Allure',
      'Grafana',
      'Postman',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    caption: 'Services & data',
    items: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Python',
      'MySQL',
      'MongoDB',
      'RESTful APIs',
      'WebSockets (Socket.io)',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    caption: 'Interfaces',
    items: [
      'React.js',
      'React Native',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'UI/UX Design (Figma)',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    caption: 'Ship & observe',
    items: ['CI/CD', 'GitHub Actions', 'AWS SNS', 'Git', 'Vercel', 'Render', 'Firebase'],
  },
];

export const experience = [
  {
    role: 'QA Automation Tester',
    company: 'Krishivaas',
    period: 'Dec 2024 — Present',
    duration: '1 yr 8 mos',
    current: true,
    highlights: [
      'Architected and developed end-to-end Python + Appium automation frameworks for four native Android applications, reducing manual regression effort by 60%.',
      'Designed a reusable Hybrid Automation Framework using Page Object Model (POM) and modular test components to improve scalability, maintainability and test execution efficiency.',
      'Developed web automation suites using Python and Playwright, automating critical browser workflows and validating application functionality across Chrome and other supported browsers.',
      'Engineered network-adaptive performance testing by simulating high latency and bandwidth fluctuations, validating APK stability and application behaviour across diverse connectivity conditions.',
      'Executed functional, regression, integration and end-to-end testing, identifying and documenting critical defects and performing fix validation to improve release quality.',
      'Leveraged Appium Inspector and Grafana for element debugging and real-time performance analysis, working with Git, pull requests and collaborative code reviews in a cross-functional team.',
    ],
  },
];

export const projects = [
  {
    id: 'devel',
    name: 'Online Learning Platform',
    subtitle: 'dev-el.co',
    url: 'https://dev-el.co',
    live: true,
    blurb:
      'A live full-stack learning platform offering free technology tracks in AI Engineering, Prompt Engineering, MERN/MEAN stack, Data Analytics, Android Automation Testing, DSA with Python, and frontend and backend development.',
    highlights: [
      'Built an AI-powered learning experience with an AI Tutor and AI Code Guide that give contextual guidance, code suggestions, issue identification, fixes and personalised assistance throughout lessons.',
      'Designed interactive learning features including visual embeds, quizzes, fill-in-the-blanks, interview questions and learner profiles that track enrolled tracks, progress, completed lessons and activity.',
      'Engineered with React/Vite, Node.js, Express.js, MongoDB and JWT authentication, deployed and hosted on Firebase.',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Firebase'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/Pramodpulicherla-279/devora_frontend' },
      { label: 'Backend', url: 'https://github.com/Pramodpulicherla-279/devora_backend' },
      { label: 'AI Tutor', url: 'https://github.com/Pramodpulicherla-279/ai_tutor' },
    ],
  },
  {
    id: 'shopperzzz',
    name: 'E-Commerce Platform',
    subtitle: 'shopperzzz.vercel.app',
    url: 'https://shopperzzz.vercel.app',
    live: true,
    blurb:
      'A multi-tenant SaaS e-commerce platform connecting customers, sellers, logistics and delivery agents across web and mobile applications.',
    highlights: [
      'Enforced strict Role-Based Access Control (RBAC), tenant isolation, user permissions and secure session management across all user roles and workflows.',
      'Built React.js and React Native applications on a scalable FastAPI backend, validating RESTful APIs, WebSockets and MySQL data integrity for real-time order and inventory management.',
      'Executed end-to-end functional, regression and API testing to ensure reliable marketplace operations across cloud environments (Vercel and Render).',
    ],
    tech: ['React.js', 'React Native', 'FastAPI', 'MySQL', 'WebSockets', 'Vercel', 'Render'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/Pramodpulicherla-279/shopperzz_frontend' },
      { label: 'Backend', url: 'https://github.com/Pramodpulicherla-279/ECOMMERCE_BACKEND' },
      {
        label: 'Cartsy — delivery agent app',
        url: 'https://github.com/Pramodpulicherla-279/cartsy_app',
      },
    ],
  },
  {
    id: 'automation-platform',
    name: 'Automation Testing Platform',
    subtitle: 'Native Android applications',
    url: null,
    live: false,
    blurb:
      'A web-based automation platform for centralised test creation, execution, monitoring and reporting across native Android applications.',
    highlights: [
      'Built a reusable Hybrid Automation Framework using Python, Appium and Page Object Model (POM) to support scalable and maintainable mobile test automation.',
      'Developed a React.js dashboard with FastAPI and MongoDB for managing test cases, applications, executions and test results.',
      'Integrated Allure Reports, Slack and Jira for detailed test analysis, automated notifications and defect tracking, streamlining the overall automation workflow.',
    ],
    tech: ['Appium', 'Python', 'FastAPI', 'React.js', 'MongoDB', 'Allure', 'Slack', 'Jira'],
    repos: [
      {
        label: 'Source',
        url: 'https://github.com/Pramodpulicherla-279/test-automation-platform',
      },
    ],
  },
];

export const education = [
  {
    degree: 'B.Tech — CSE (AI & ML)',
    school: 'Swami Vivekananda Institute of Technology',
    place: 'Hyderabad, Telangana',
    period: '2021 — 2024',
  },
  {
    degree: 'Diploma — Mechanical Engineering',
    school: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    place: 'Hyderabad, Telangana',
    period: '2018 — 2021',
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
