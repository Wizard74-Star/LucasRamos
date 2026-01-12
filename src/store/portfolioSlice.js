import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Lucas Ramos',
    title: 'Senior AI Full-Stack Developer',
    location: 'Jurong Town, Singapore',
    description: "I'm a Senior AI Full-Stack Developer with over 10 years of experience building scalable, high-performance applications. I excel in full-stack development with expertise in Python (Django, FastAPI, Flask), Golang, Node.js for backend systems, and modern frontend technologies including Next.js, React.js, Vue.js, and Svelte. I design robust RESTful and GraphQL APIs, implement microservices architectures, and optimize databases (PostgreSQL, MySQL, MongoDB, Redis) for high-traffic environments. My cloud expertise spans AWS, GCP, and Azure, with advanced skills in Docker, Kubernetes, CI/CD pipelines, and DevOps automation. I follow Agile methodologies, practice TDD/BDD, and deliver clean, maintainable code that drives business growth.",
  },
  experience: [
    {
      id: 1,
      title: 'Senior AI Full-Stack Developer',
      company: 'Goal AI',
      period: '2023 – 2025',
      location: 'New York, USA',
      description: 'Designed and implemented scalable backend systems using Python (FastAPI, Django) and Golang to support machine learning models and AI-driven solutions for enterprise clients.',
      achievements: [
        'Led a team of backend engineers to develop an AI-powered platform, ensuring high concurrency and performance by optimizing database queries and server responses',
        'Deployed applications on AWS, managing infrastructure using EC2, RDS, Lambda, and S3, ensuring cost-efficient and reliable cloud solutions',
        'Integrated advanced containerization techniques using Docker and Kubernetes for seamless application deployment and scaling',
        'Mentored junior developers, ensuring adherence to best practices in coding standards, security, and agile methodologies',
      ],
    },
    {
      id: 2,
      title: 'Senior Backend Developer',
      company: 'Tap in Global',
      period: '2020 – 2023',
      location: 'New York, USA',
      description: 'Spearheaded the design and implementation of microservice-based backend architecture for a SaaS product, leveraging FastAPI, Node.js, and AWS cloud services.',
      achievements: [
        'Developed secure RESTful and GraphQL APIs for integration with third-party services, ensuring high performance and data security (JWT, OAuth)',
        'Led a team of developers in migrating legacy monolithic systems to microservices, improving system maintainability and scalability',
        'Integrated CI/CD pipelines using GitHub Actions, Jenkins, and Docker, reducing deployment times and minimizing errors in production environments',
        'Collaborated with cross-functional teams to align backend solutions with business goals and user requirements, contributing to the product\'s successful launch',
      ],
    },
    {
      id: 3,
      title: 'Full-Stack Developer',
      company: 'Transformr',
      period: '2016 – 2020',
      location: 'Melbourne, Australia',
      description: 'Designed, implemented, and deployed high-performance backend systems using Python (Django, Flask) and Node.js, contributing to scalable enterprise applications for clients across multiple industries.',
      achievements: [
        'Led the development of robust APIs and microservices to enable seamless integration with third-party platforms and services',
        'Optimized database architectures (PostgreSQL, MySQL) and implemented caching solutions (Redis) to ensure fast, reliable data retrieval',
        'Worked closely with frontend teams to enhance user experience by supporting full-stack development using modern frontend technologies like React.js and Next.js',
        'Played a key role in the DevOps transformation, automating testing and deployment processes using Docker and Kubernetes',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    university: 'Singapore Institute of Technology',
    period: '2012 – 2016',
    location: 'Singapore',
    description: 'Focused on software engineering, algorithms, data structures, and cloud computing. Completed coursework in backend development, database systems, and distributed systems. Capstone project: Designed and implemented a cloud-based application for real-time data analytics.',
  },
  skills: {
    frontend: [
      'Next.js – SEO-optimized SSR and performance optimization',
      'React.js (Redux) – component-based UIs and interactive user experiences',
      'Vue.js (Flux) – progressive framework for building user interfaces',
      'Svelte – modern JavaScript framework',
      'Tailwind CSS, Bootstrap, Material UI – CSS frameworks',
      'Redux, Context API (React), Vuex (Vue.js) – state management',
      'Webpack, Babel, Vite – build tools',
      'Jest, Mocha, Cypress, React Testing Library – testing frameworks',
    ],
    backend: [
      'Python (Django, FastAPI, Flask) – backend development',
      'Golang – high-performance backend systems',
      'Node.js, JavaScript – server-side development',
      'Django, FastAPI, Flask, Express.js, Nest.js – frameworks',
      'RESTful APIs, GraphQL, WebSockets, gRPC – API development',
      'Microservices Architecture – scalable system design',
      'PostgreSQL, MySQL, MongoDB, Redis, SQLAlchemy – databases',
      'Redis, Memcached – caching systems',
      'JWT, OAuth 2.0, API key security – authentication & authorization',
    ],
    database: [
      'PostgreSQL – relational database management',
      'MySQL – relational database systems',
      'MongoDB – NoSQL database',
      'Redis – in-memory data structure store',
      'SQLAlchemy – Python SQL toolkit',
      'Database Schema Design & Query Optimization',
      'Data Management & Performance Tuning',
    ],
    cloud: [
      'AWS (EC2, S3, Lambda, RDS) – cloud deployment',
      'GCP, Azure – cloud platforms',
      'Docker, Kubernetes – containerization and orchestration',
      'CI/CD Pipelines (Jenkins, GitHub Actions) – automation',
      'Linux (Ubuntu, CentOS), Nginx, Apache – server management',
      'Performance Optimization & Load Balancing',
    ],
    tools: [
      'Agile Methodologies: Scrum, Kanban, JIRA, Trello',
      'Code Quality: TDD, BDD, Unit Testing, Integration Testing',
      'Collaboration: Slack, Jira, Confluence, GitHub, GitLab',
      'CI/CD: Jenkins, GitHub Actions, Docker, Kubernetes',
      'Git – version control and collaboration',
      'Performance Optimization: Query optimization, load balancing, CDN',
    ],
  },
  projects: [
    {
      id: 1,
      title: 'SprintIQ',
      description: 'AI-powered sprint planning platform that helps startups turn chaos into clarity. Developed with React.js and Next.js for the frontend, providing SEO-optimized server-side rendering and state management with Redux. Built scalable backend services using Python (FastAPI) and Node.js (Express.js) with microservices architecture. Integrated AI algorithms for automated product roadmap generation and sprint planning. Features include automated prioritization based on market impact data, real-time progress tracking via WebSockets, and patent-pending algorithms to prevent planning debt. Deployed on AWS with Docker and Kubernetes for high availability.',
      url: 'https://sprintiq.ai',
      image: '',
      imageName: 'sprintiq.png',
      role: 'Developed the frontend using React.js and Next.js with Redux for state management, ensuring optimal SEO and performance. Built RESTful and GraphQL APIs using Python FastAPI and Node.js Express.js. Integrated AI services for automated sprint planning and roadmap generation. Implemented real-time analytics dashboards using WebSockets and Redis caching. Deployed on AWS (EC2, S3, Lambda) with Docker containerization and Kubernetes orchestration.',
      technologies: ['React.js', 'Next.js', 'Redux', 'Python', 'FastAPI', 'Node.js', 'Express.js', 'GraphQL', 'WebSockets', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'],
    },
    {
      id: 2,
      title: 'LoyalAI',
      description: 'Mobile and web application for relationship tracking and emotional connection. Built with React.js and Vue.js for the web platform, providing responsive user interfaces with Tailwind CSS. Developed scalable backend services using Python (Django, FastAPI) and Golang for high-performance real-time relationship scoring. Features include daily love tracker slider, smart relationship score visualization with real-time updates via WebSockets, AI-powered relationship companion, and home screen widgets for iOS and Android. Uses MongoDB for flexible data storage and Redis for real-time caching.',
      url: 'https://www.loyal-app.com/',
      image: '',
      imageName: 'loyalai.png',
      role: 'Developed responsive web application using React.js and Vue.js with Tailwind CSS and Material UI for modern UI/UX. Built RESTful and GraphQL APIs using Python (Django, FastAPI) and Golang for backend services. Implemented real-time features using WebSockets for live relationship scoring updates. Integrated AI services for personalized relationship insights and analytics. Used MongoDB for flexible schema design and Redis for caching and session management. Deployed on AWS with Docker containers.',
      technologies: ['React.js', 'Vue.js', 'Tailwind CSS', 'Material UI', 'Python', 'Django', 'FastAPI', 'Golang', 'GraphQL', 'WebSockets', 'MongoDB', 'Redis', 'AWS', 'Docker', 'TypeScript'],
    },
    {
      id: 3,
      title: 'iTechDev',
      description: 'Enterprise software factory website showcasing custom development services. Built with Next.js and React.js for modern frontend experiences with server-side rendering and SEO optimization. Developed backend services using Python (FastAPI) and Node.js (Nest.js) with microservices architecture. Integrated multilingual support for Spanish and English with internationalization. Features include responsive design with Tailwind CSS, service portfolio displays, client testimonials, real-time contact forms, and comprehensive technology stack presentations. Uses PostgreSQL for data storage and Redis for caching.',
      url: 'https://itechdev.com.mx/',
      image: '',
      imageName: 'ITechdev.png',
      role: 'Developed the enterprise website using Next.js and React.js with Redux for state management, ensuring optimal SEO and performance. Built RESTful APIs using Python FastAPI and Node.js Nest.js following microservices architecture. Created responsive layouts with Tailwind CSS optimized for enterprise clients with multilingual support. Implemented PostgreSQL database design and Redis caching for improved performance. Deployed on AWS with CI/CD pipelines using GitHub Actions.',
      technologies: ['Next.js', 'React.js', 'Redux', 'Tailwind CSS', 'Python', 'FastAPI', 'Node.js', 'Nest.js', 'PostgreSQL', 'Redis', 'AWS', 'GitHub Actions', 'TypeScript'],
    },
    {
      id: 4,
      title: 'CleverTap',
      description: 'All-in-one customer engagement platform that helps businesses unlock limitless customer lifetime value. Built with React.js and Next.js to deliver personalized experiences, real-time analytics, and AI-powered customer insights. Backend services built with Python (Django, FastAPI) and Golang for high-performance data processing. Features include customer data analytics with PostgreSQL and MongoDB, campaign orchestration, personalization engine, experimentation tools, and multi-channel messaging capabilities across push notifications, email, WhatsApp, SMS, and in-app messages. Uses Redis for real-time caching and WebSockets for live updates. Deployed on AWS with Kubernetes for scalability.',
      url: 'https://clevertap.com/',
      image: '',
      imageName: 'cleverTap.png',
      role: 'Developed responsive frontend components using React.js and Next.js with Redux for state management, ensuring optimal performance and SEO. Built interactive dashboards and analytics visualizations. Implemented real-time data processing using Python (Django, FastAPI) and Golang with microservices architecture. Integrated AI services for customer segmentation and personalization. Created multi-channel messaging interfaces and campaign management tools. Used PostgreSQL and MongoDB for data storage, Redis for caching, and WebSockets for real-time updates. Deployed on AWS with Docker and Kubernetes.',
      technologies: ['React.js', 'Next.js', 'Redux', 'Python', 'Django', 'FastAPI', 'Golang', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets', 'GraphQL', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'],
    },
    {
      id: 5,
      title: 'Grand Canyon University',
      description: 'Comprehensive university website for Grand Canyon University, a private Christian university in Phoenix, Arizona. Built with Next.js and React.js to showcase degree programs, admissions information, campus life, and student resources. Backend services developed with Python (Django) and Node.js (Express.js) with RESTful API architecture. Features include responsive design with Tailwind CSS, program finder with advanced search, online application system, virtual campus tours, and integrated student portal access. Uses PostgreSQL for data management and Redis for session caching. Deployed on AWS with CI/CD automation.',
      url: 'https://www.gcu.edu/',
      image: '',
      imageName: 'gcu.png',
      role: 'Developed the university website using React.js and Next.js with Redux for state management, ensuring server-side rendering and optimal SEO. Built responsive layouts with Tailwind CSS optimized for desktop and mobile devices. Implemented program search and filtering functionality using PostgreSQL full-text search. Created interactive campus tour features with WebSocket integration. Built RESTful APIs using Python Django and Node.js Express.js. Integrated student portal access with JWT authentication. Deployed on AWS with GitHub Actions CI/CD pipelines.',
      technologies: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Python', 'Django', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'JWT', 'AWS', 'GitHub Actions', 'TypeScript'],
    },
    {
      id: 6,
      title: 'nopCommerce',
      description: 'Scalable e-commerce platform providing a flexible solution for online stores. Built with Python (Django, FastAPI) and Golang for high-performance backend services with microservices architecture. Frontend developed with React.js, Vue.js, and Next.js for modern user experiences. Features include PCI DSS compliance, unlimited customization capabilities, multi-store support, and comprehensive product management. Uses PostgreSQL and MySQL for transactional data, MongoDB for product catalogs, and Redis for caching and session management. Includes RESTful and GraphQL APIs, real-time inventory updates via WebSockets, and comprehensive admin dashboard. Deployed on AWS with Docker and Kubernetes for scalability.',
      url: 'https://www.nopcommerce.com/en',
      image: '',
      imageName: 'nopcommerce.png',
      role: 'Developed e-commerce platform using Python (Django, FastAPI) and Golang for robust, scalable backend services with microservices architecture. Built responsive frontend components with React.js, Vue.js, and Next.js using Tailwind CSS. Implemented PCI DSS compliant payment processing with secure API integrations. Created plugin architecture for unlimited customization. Developed multi-store management system with PostgreSQL and MySQL databases. Implemented RESTful and GraphQL APIs, WebSocket connections for real-time updates, and Redis caching. Built comprehensive admin dashboard with real-time analytics. Deployed on AWS (EC2, RDS, S3) with Docker containerization and Kubernetes orchestration.',
      technologies: ['React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Python', 'Django', 'FastAPI', 'Golang', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'GraphQL', 'WebSockets', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'],
    },
  ],
  theme: {
    darkMode: false,
  },
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme.darkMode = !state.theme.darkMode;
    },
  },
});

export const { toggleDarkMode } = portfolioSlice.actions;
export default portfolioSlice.reducer;

