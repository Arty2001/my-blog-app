import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaUsers, FaHandsHelping } from "react-icons/fa";

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
    text: "Integrate cutting-edge technology with robust psychological support.",
  },
  {
    icon: <FaBrain className="text-purple-600 w-6 h-6" />,
    text: "Implement continuous cognitive training and stress management strategies.",
  },
  {
    icon: <FaUsers className="text-purple-600 w-6 h-6" />,
    text: "Foster effective team dynamics and cross-disciplinary collaboration.",
  },
  {
    icon: <FaHandsHelping className="text-purple-600 w-6 h-6" />,
    text: "Develop adaptive leadership and conflict-resolution protocols.",
  },
];

const NextStepsSection = () => {
  return (
    <motion.section
      className="mb-12 p-8  max-w-5xl mx-auto rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2 
        className="text-3xl font-bold  text-white-800 mb-8"
        variants={itemVariants}
      >
        Next Steps: Toward a Resilient Human Presence in Space
      </motion.h2>
      
      {/* Next Steps Description */}
      <motion.div className="mb-8  text-white-700 leading-relaxed" variants={itemVariants}>
        <p>
          To secure a sustainable human presence in space, we must blend technological innovation with comprehensive support systems that nurture mental resilience, social cohesion, and cognitive agility.
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
            <p className="text-gray-800 text-lg">
              {step.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Conclusion Text */}
      <motion.div className="mt-8 text-white-700 leading-relaxed" variants={itemVariants}>
        <p>
          By embracing these strategies, space missions can not only reach for the stars but also ensure the well-being and resilience of the crews that make these journeys possible.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default NextStepsSection;
