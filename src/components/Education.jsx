import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import educationImage from '../images/education.png';

const Education = () => {
  const education = useSelector((state) => state.portfolio.education);

  return (
    <section
      id="education"
      className="relative section-container bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${educationImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gray-50/95 dark:bg-gray-900/95"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <motion.div 
          className="card dark:bg-gray-800/90 glass-card"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ y: -5, scale: 1.01 }}
        >
          <motion.div 
            className="flex flex-col md:flex-row md:items-start md:justify-between mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                {education.university}
              </h4>
            </div>
            <motion.div 
              className="text-right mt-2 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {education.period}
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                {education.location}
              </p>
            </motion.div>
          </motion.div>
          <motion.p 
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {education.description}
          </motion.p>
          <motion.div 
            className="mt-4 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Key Focus Areas:</span> Software Engineering, Data Structures, Algorithms, Databases, Web Technologies
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Experience Gained:</span> Full-stack web development, API-based systems, scalable application architecture
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;

