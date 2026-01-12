import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const About = () => {
  const profile = useSelector((state) => state.portfolio.profile);

  const paragraphs = [
    profile.description,
    '🔹 Frontend Excellence: Building modern, responsive user interfaces with Next.js, React.js (Redux), Vue.js, and Svelte. Expert in state management (Redux, Context API, Vuex), CSS frameworks (Tailwind CSS, Bootstrap, Material UI), and build tools (Webpack, Babel, Vite). Implementing comprehensive testing with Jest, Mocha, Cypress, and React Testing Library.',
    '🔹 Backend Mastery: Developing high-performance backend systems using Python (Django, FastAPI, Flask), Golang, and Node.js. Crafting robust APIs with RESTful, GraphQL, WebSockets, and gRPC protocols. Designing scalable microservices architectures with secure authentication (JWT, OAuth 2.0) and efficient data handling.',
    '🔹 Database & Data Management: Expertise in PostgreSQL, MySQL, MongoDB, and Redis for optimal data storage and retrieval. Implementing SQLAlchemy for Python applications, designing efficient database schemas, and optimizing queries for performance. Utilizing caching strategies with Redis and Memcached.',
    '🔹 Cloud & DevOps: Deploying scalable applications on AWS (EC2, S3, Lambda, RDS), GCP, and Azure. Implementing containerization with Docker and Kubernetes for seamless deployment and scaling. Automating CI/CD pipelines with Jenkins and GitHub Actions. Managing servers with Linux (Ubuntu, CentOS), Nginx, and Apache.',
    '🔹 Development Practices: Following Agile methodologies (Scrum, Kanban) with JIRA and Trello. Ensuring code quality through TDD, BDD, unit testing, and integration testing. Collaborating effectively using Slack, Confluence, GitHub, and GitLab. Optimizing performance through query optimization, load balancing, and CDN integration.',
    '🚀 I work with startups and enterprises to build systems that are fast, clean, and highly maintainable. My comprehensive full-stack expertise, combined with cloud deployment, DevOps automation, and modern development practices, makes me an ideal fit for fast-growing projects requiring scalable, production-ready solutions.',
  ];

  return (
    <section
      id="about"
      className="section-container bg-white dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ${index !== paragraphs.length - 1 ? 'mb-6' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

