import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      staggerChildren: 0.3,
    },
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

const DiversePerspectivesVersus = () => {
  return (
    <motion.section
      className="mb-12 p-8 backdrop-blur-sm rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
        Diverse Perspectives: Supporters vs. Opponents
      </motion.h2>
      
      <div className="flex flex-col md:flex-row md:justify-around gap-8">
        {/* Supporters Column */}
        <motion.div className="flex-1 bg-white rounded-lg p-6 shadow-lg" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-green-600 mb-4">Supporters</h3>
          <p className="text-gray-700 mb-4">
            Innovators like Elon Musk and advocates such as the Mars Society argue that establishing a human presence on Mars is essential for our species’ long-term survival. They see the Red Planet as a repository of untapped resources and a launchpad for new sustainable technologies.
          </p>
          <div className="relative bg-green-50 border-l-4 border-green-500 p-4">
            <p className="italic text-gray-800">
              “Mars offers us not only a new frontier for exploration but a chance to reinvent sustainable living.”
            </p>
            <p className="mt-2 text-right font-semibold text-green-700">— Proponent Quote</p>
          </div>
        </motion.div>

        {/* VS Divider */}
        <motion.div className="flex items-center justify-center" variants={itemVariants}>
          <div className="text-4xl font-bold text-white-600">VS</div>
        </motion.div>

        {/* Opponents Column */}
        <motion.div className="flex-1 bg-white rounded-lg p-6 shadow-lg" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-red-600 mb-4">Opponents</h3>
          <p className="text-gray-700 mb-4">
            Critics warn that colonizing Mars without addressing the psychological, social, and ethical impacts may lead to unsustainable settlements. They caution against replicating Earth’s exploitative models in a new environment.
          </p>
          <div className="relative bg-red-50 border-l-4 border-red-500 p-4">
            <p className="italic text-gray-800">
              “If we replicate Earth’s exploitative models on Mars, we risk creating a settlement that is unsustainable and prone to conflict.”
            </p>
            <p className="mt-2 text-right font-semibold text-red-700">— Professor Sarah Li</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DiversePerspectivesVersus;
