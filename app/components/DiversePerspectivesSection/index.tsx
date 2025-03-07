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
            “I think there is a strong humanitarian argument for making life multi-planetary, in order to safeguard the existence of humanity in the event that something catastrophic were to happen. Mars is the only place we have a realistic shot at establishing a self-sustaining city."
            </p>
            <p className="mt-2 text-right font-semibold text-green-700">— Elon Musk, Founder of SpaceX</p>
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
            Conversely, critics express deep concerns that rapid colonization efforts lacking rigorous attention to psychological, social, and ethical considerations may replicate Earth's problematic societal structures, ultimately compromising colony sustainability.
          </p>
          <div className="relative bg-red-50 border-l-4 border-red-500 p-4">
            <p className="italic text-gray-800">
            "Desire to see humans thrive on Mars shouldn’t eclipse questions about contamination or ethics, nor should it dictate our treatment of the Martian ecosystem."
            </p>
            <p className="mt-2 text-right font-semibold text-red-700">— Joelle Renstrom, "How we settle Mars is more important than when," The Space Review​</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DiversePerspectivesVersus;
