import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import experienceImage from '../images/experience.jpg';

const Experience = () => {
  const experience = useSelector((state) => state.portfolio.experience);

  return (
    <section
      id="experience"
      className="relative section-container bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${experienceImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gray-50/95 dark:bg-gray-900/95"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Professional Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card dark:bg-gray-800/90 glass-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {exp.period}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {exp.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <motion.span 
                      className="text-primary-600 dark:text-primary-400 mr-3 mt-1 text-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      ▸
                    </motion.span>
                    <span className="flex-1">{achievement}</span>
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

export default Experience;

