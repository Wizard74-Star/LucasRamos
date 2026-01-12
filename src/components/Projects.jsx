import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import sprintiqImg from '../images/sprintiq.png';
import loyalaiImg from '../images/loyalai.png';
import itechdevImg from '../images/ITechdev.png';
import cleverTapImg from '../images/cleverTap.png';
import gcuImg from '../images/gcu.png';
import nopcommerceImg from '../images/nopcommerce.png';
import projectsImage from '../images/projects.jpg';

const projectImages = {
  'sprintiq.png': sprintiqImg,
  'loyalai.png': loyalaiImg,
  'ITechdev.png': itechdevImg,
  'cleverTap.png': cleverTapImg,
  'gcu.png': gcuImg,
  'nopcommerce.png': nopcommerceImg,
};

const Projects = () => {
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <section
      id="projects"
      className="relative section-container bg-white dark:bg-gray-800 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${projectsImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/95 dark:bg-gray-800/95"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="card dark:bg-gray-700/90 overflow-hidden group cursor-pointer block glass-card"
            >
              {/* Project Image */}
              <motion.div 
                className="relative bg-gray-200 dark:bg-gray-600 overflow-hidden mb-4 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={projectImages[project.imageName] || project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-48 flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600 text-white text-2xl font-bold">' + project.title + '</div>';
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              {/* Project Description */}
              <motion.p 
                className="text-gray-600 dark:text-gray-300 text-center"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {project.description}
              </motion.p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

