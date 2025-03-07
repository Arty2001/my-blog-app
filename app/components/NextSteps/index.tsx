import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaUsers, FaHandsHelping, FaGlobe } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const nextSteps = [
  {
    icon: <FaRocket className="text-purple-600 w-6 h-6" />,
    heading: "Advanced Psychological Monitoring",
    details: "Deploy sophisticated technologies for real-time monitoring and early interventions."
  },
  {
    icon: <FaBrain className="text-purple-600 w-6 h-6" />,
    heading: "Enhanced Crew Training Programs",
    details: "Implement extensive interpersonal and cultural training programs to foster strong, resilient team dynamics."
  },
  {
    icon: <FaUsers className="text-purple-600 w-6 h-6" />,
    heading: "Continuous Cognitive Training",
    details: "Introduce cognitive exercises and simulations into daily routines to maintain high-level performance."
  },
  {
    icon: <FaHandsHelping className="text-purple-600 w-6 h-6" />,
    heading: "Adaptive Leadership Development",
    details: "Cultivate adaptive, empathetic leaders capable of managing conflicts and stress effectively."
  },
  {
    icon: <FaGlobe className="text-purple-600 w-6 h-6" />,
    heading: "Cross-disciplinary Collaboration",
    details: "Encourage cooperation among experts in engineering, psychology, sociology, and ethics to design holistic mission plans."
  },
];

const NextStepsSection = () => {
  return (
    <motion.section
      className="mb-12 p-8 max-w-5xl mx-auto rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-white-800 mb-8"
        variants={itemVariants}
      >
        Next Steps: Toward a Resilient Human Presence in Space
      </motion.h2>

      {/* Intro Text */}
      <motion.div className="mb-8 text-white-700 leading-relaxed" variants={itemVariants}>
        <p>
          Ensuring human resilience in space exploration requires an integrative approach:
        </p>
      </motion.div>

      {/* Next Steps List */}
      <motion.div className="space-y-6" variants={itemVariants}>
        {nextSteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center p-4 border-l-4 border-purple-600 bg-gray-50 rounded-md shadow-sm"
            variants={itemVariants}
          >
            <div className="mr-4">
              {step.icon}
            </div>
            <div>
              {/* Larger heading text */}
              <h3 className="text-xl font-bold text-gray-800">
                {step.heading}
              </h3>
              {/* Smaller details text on a new line */}
              <p className="text-sm text-gray-600 mt-1">
                {step.details}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Conclusion Text */}
      <motion.div className="mt-8 text-white-700 leading-relaxed" variants={itemVariants}>
        <p>
          By addressing these intricate human challenges, Mars missions can achieve 
          unprecedented success, not only technically but also in sustaining the well-being 
          of the brave pioneers leading humanity’s next great adventure.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default NextStepsSection;