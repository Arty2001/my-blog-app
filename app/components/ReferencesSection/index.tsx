import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const ReferencesSection = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto p-4 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-xl font-bold text-gray-800 mb-4 text-white"
        variants={itemVariants}
      >
        References
      </motion.h2>
      <motion.ul 
        className="space-y-2 text-gray-700 text-sm text-white"
        variants={itemVariants}
      >
        <li>
          Horneck, G. (2008). <em>Astrobiological Aspects of Mars and Human Presence: Pros and Cons</em>. HIPPOKRATIA, 12(Suppl 1), 48–51.
        </li>
        <li>
          Biomedical and Behavioural Issues (2016). [PDF document].
        </li>
        <li>
          Crew Selection and Training (2016). [PDF document].
        </li>
        <li>
          Destination Mars: A Timeline of Red Planet Landings (2016). [PDF document].
        </li>
        <li>
          Renstrom, J. (2016). <em>How We Settle Mars is More Important Than When</em>. The Space Review.
        </li>
        <li>
          Salotti, J.-M., Labache, L., Pellet, E., Riffaud, P., & Chator, O. (2015). <em>Human Factors Issues for a Sustainable Settlement of Mars</em>. 9th IAA Symposium on the Future of Space Exploration.
        </li>
      </motion.ul>
    </motion.section>
  );
};

export default ReferencesSection;
