import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
      <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>
        Introduction
      </motion.h2>

      <motion.p className="leading-relaxed mb-6" variants={itemVariants}>
        As significant strides have been made into the potential of sustaining life on Mars, there has been great emphasis placed on the{" "}
        <strong>technical and physiological challenges</strong> faced within this field of research. Such barriers include increased exposure to radiation, calcium metabolism and bone resorption leading to decreased bone density and formation, and agricultural complications (Axpe et al., 2020).
      </motion.p>

      <motion.p className="leading-relaxed mb-6" variants={itemVariants}>
        However, an equally important area to consider—often overlooked—are the <strong>multifaceted experiences of humans</strong> embarking on space travel, and the psychological, sociological, and cognitive dimensions that comprise their experiences. In this post, we aim to question whether humans can navigate and thrive both socially and psychologically despite the harsh realities and living conditions exhibited on Mars. These human factors play an extremely critical role when considering the grander scheme of building a sustainable colony on the red planet.
      </motion.p>

      <motion.div className="relative bg-white text-gray-800 rounded-lg shadow-lg p-6 my-8" variants={itemVariants}>
        {/* Decorative Large Quotation Mark */}
        <div className="absolute -top-8 -left-3 text-[10rem] text-gray-200 leading-none select-none pointer-events-none">
          &ldquo;
        </div>
        <p className="relative text-lg italic leading-relaxed">
          “During my time in orbit, I lost bone mass, my muscles atrophied, and my blood redistributed itself in my body, which strained my heart. Every day, I was exposed to 10 times the radiation of a person on Earth, which will increase my risk of a fatal cancer for the rest of my life. Not to mention the psychological stress, which is harder to quantify and perhaps as damaging.”
        </p>
        <p className="relative mt-4 text-right font-semibold">
          — Scott Kelly, former NASA astronaut
        </p>
      </motion.div>
    </motion.section>
  );
}
