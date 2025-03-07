import { motion } from "framer-motion";
import {
  FiMessageCircle,
  FiUserCheck,
  FiAlertCircle,
} from "react-icons/fi"; // Icons from react-icons

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger appearance of child elements
      staggerChildren: 0.2,
    },
  },
};

// Child item animation
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const HumanFactorSynthesisSection = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 py-12 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        variants={itemVariants}
      >
        Challenges of Isolation and Confinement
      </motion.h2>

      {/* Introductory Paragraph */}
      <motion.p className="leading-relaxed mb-8" variants={itemVariants}>
        Extended Mars missions involve <strong>long durations</strong> in cramped
        habitats, limited communication with Earth, and minimal real-time interaction
        with friends or family. This environment can lead to significant 
        psychological and emotional hurdles, demanding well-structured support 
        systems to safeguard crew well-being.
      </motion.p>

      {/* Bullet Points (Icons + Description) */}
      <motion.ul className="space-y-5 mb-8" variants={itemVariants}>
        {/* Communication Gaps */}
        <motion.li className="flex items-start gap-3" variants={itemVariants}>
          <FiMessageCircle className="text-2xl text-blue-400 mt-1" />
          <div>
            <strong className="block font-medium">
              Communication Gaps
            </strong>
            <span className="block text-sm">
              Astronauts often contend with delayed messages and sporadic
              contact with loved ones, heightening feelings of isolation and stress.
            </span>
          </div>
        </motion.li>

        {/* Psychological Strain */}
        <motion.li className="flex items-start gap-3" variants={itemVariants}>
          <FiAlertCircle className="text-2xl text-red-400 mt-1" />
          <div>
            <strong className="block font-medium">
              Psychological Strain
            </strong>
            <span className="block text-sm">
              Confinement, disrupted sleep, and prolonged monotony can lead to
              depression, irritability, and anxiety. Proactive mental health 
              support is critical.
            </span>
          </div>
        </motion.li>

        {/* Crew Dynamics */}
        <motion.li className="flex items-start gap-3" variants={itemVariants}>
          <FiUserCheck className="text-2xl text-green-400 mt-1" />
          <div>
            <strong className="block font-medium">
              Crew Dynamics
            </strong>
            <span className="block text-sm">
              Interpersonal tensions can escalate over extended periods in 
              close quarters, affecting group morale and mission outcomes.
            </span>
          </div>
        </motion.li>
      </motion.ul>

      {/* Mars-500 Study Section */}
      <motion.h3
        className="text-2xl md:text-3xl font-semibold mb-4"
        variants={itemVariants}
      >
        Insights from the Mars-500 Study
      </motion.h3>

      <motion.p className="leading-relaxed mb-6" variants={itemVariants}>
        NASA’s <strong>Mars-500 simulation</strong> offered invaluable data on 
        mental and emotional effects during a 520-day isolation experiment. 
        Participants reported irritability, sleep disruptions, and decreased 
        motivation, underscoring the need for robust psychological support 
        strategies on real Mars missions.
      </motion.p>

      {/* Single Mars-500 Image */}
      <motion.div
        className="border border-gray-700 rounded-md p-2 shadow-md"
        variants={itemVariants}
      >
        <img
          src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/1/7/1357584987063/Members-of-the-Mars500-cr-010.jpg?width=465&dpr=1&s=none&crop=none"
          alt="Mars-500 Simulation Study"
          className="rounded-md w-full h-auto"
        />
        <p className="text-xs mt-2 text-gray-300">
          Mars-500 isolation habitat
        </p>
      </motion.div>
    </motion.section>
  );
};

export default HumanFactorSynthesisSection;
