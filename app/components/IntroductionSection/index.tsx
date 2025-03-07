import { motion } from "framer-motion";

// Motion variants for the parent container
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Motion variants for individual items
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function IntroductionSection() {
  return (
    <motion.section
      className="mb-12 rounded-lg p-8 backdrop-blur-sm"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2 
        className="text-3xl font-bold mb-6"
        variants={itemVariants}
      >
        Introduction
      </motion.h2>

      {/* Paragraph 1 */}
      <motion.p 
        className="leading-relaxed mb-6"
        variants={itemVariants}
      >
        As significant strides are made toward sustaining life on Mars, emphasis
        often focuses predominantly on overcoming <strong>technical and physiological</strong> barriers,
        such as radiation exposure, calcium metabolism disruptions leading to
        bone loss, and complex agricultural hurdles (Axpe et al., 2020).
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p 
        className="leading-relaxed mb-6"
        variants={itemVariants}
      >
        However, another critical yet frequently overlooked dimension involves
        the psychological, sociological, and cognitive experiences humans face
        when venturing beyond Earth. In this blog, we critically examine whether
        humans can thrive socially, mentally, and cognitively under the harsh
        conditions of Mars and the vital importance these factors hold for
        building a sustainable colony on the Red Planet.
      </motion.p>

      {/* Quotation Box */}
      <motion.div
        className="relative bg-white text-gray-800 rounded-lg shadow-lg p-6 my-8"
        variants={itemVariants}
      >
        {/* Decorative Large Quotation Mark */}
        <div className="absolute -top-8 -left-3 text-[10rem] text-gray-200 leading-none select-none pointer-events-none">
          &ldquo;
        </div>

        {/* Quotation Text */}
        <p className="relative text-lg italic leading-relaxed">
          “During my time in orbit, I lost bone mass, my muscles atrophied, and
          my blood redistributed itself in my body, which strained my heart.
          Every day, I was exposed to 10 times the radiation of a person on
          Earth, which will increase my risk of a fatal cancer for the rest of
          my life. Not to mention the psychological stress, which is harder to
          quantify and perhaps as damaging.”
        </p>

        <p className="relative mt-4 text-right font-semibold">
          — Scott Kelly, former NASA astronaut
        </p>
      </motion.div>
    </motion.section>
  );
}