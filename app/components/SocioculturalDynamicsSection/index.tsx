import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Child (card) animation
const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const SocioculturalDynamicsSection = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 py-12 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        variants={cardVariants}
      >
        Sociocultural Dynamics in Space
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        className="leading-relaxed mb-10"
        variants={cardVariants}
      >
        Moreover, the sociocultural dynamics among diverse, multicultural crews are essential factors influencing mission outcomes (Kanas,2015). Crews on Mars will comprise individuals from various cultural, linguistic, and professional backgrounds, necessitating extraordinary cohesion and communication skills. International Space Station (ISS) missions illustrate the benefits of intensive team-building exercises that foster mutual respect, empathy, and cooperative problem-solving among astronauts from different cultures (Salotti et al., 2015). 
      </motion.p>

      {/* Card Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={containerVariants}
      >
        {/* Card 1 */}
        <motion.div
          className="rounded-lg p-6 border border-gray-200 bg-white text-gray-900"
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold mb-3">
            Cultural & Linguistic Harmony
          </h3>
          <p className="text-sm leading-relaxed">
            Mars crews will bring together individuals with unique cultural
            identities, necessitating empathy and understanding to maintain a
            united mission vision.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="rounded-lg p-6 border border-gray-200 bg-white text-gray-900"
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold mb-3">
            Cohesion & Communication
          </h3>
          <p className="text-sm leading-relaxed">
            Working across language barriers and professional specialties
            demands open communication channels and consistent teamwork drills.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="rounded-lg p-6 border border-gray-200 bg-white text-gray-900"
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold mb-3">
            Benefits from the ISS
          </h3>
          <p className="text-sm leading-relaxed">
            Decades of ISS missions show how well-orchestrated
            cross-cultural collaboration enhances problem-solving and crew
            morale in space.
          </p>
        </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default SocioculturalDynamicsSection;

