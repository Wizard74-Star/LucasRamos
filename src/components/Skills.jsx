import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import skillsImage from '../images/skills.jpg';

const Skills = () => {
  const skills = useSelector((state) => state.portfolio.skills);

  const skillCategories = [
    { title: 'Frontend Development', items: skills.frontend, icon: '🎨' },
    { title: 'Backend Development', items: skills.backend, icon: '⚙️' },
    { title: 'Database & Data Management', items: skills.database, icon: '🗄️' },
    { title: 'Cloud & Deployment', items: skills.cloud, icon: '☁️' },
    { title: 'Development Tools', items: skills.tools, icon: '🛠️' },
  ];

  return (
    <section
      id="skills"
      className="relative section-container bg-white dark:bg-gray-800 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${skillsImage})`,
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
          <span className="gradient-text">Skills & Technologies</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card dark:bg-gray-700/90 glass-card"
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                <motion.span 
                  className="text-3xl mr-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </motion.div>
              <ul className="space-y-2">
                {category.items.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-primary-600 rounded-full mr-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: index * 0.1 + idx * 0.05 }}
                    />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

