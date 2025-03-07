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
          Horneck, G. (2008). <em>Astrobiological aspects of Mars and human presence: Pros and cons</em>. Hippokratia, 12(Suppl 1), 48–51.
        </li>
        <li>
          Seedhouse, E. (2008). <em>Martian outpost: The challenges of establishing a human settlement on Mars</em>. Springer.
        </li>
        <li>
          Kanas, N. (2015). <em>Crew selection and training for long-duration space missions</em>. In <em>Psychological, biomedical and behavioral issues</em> (pp. 113–138). Springer.
        </li>
        <li>
          Wall, M. (2016). <em>Destination Mars: A timeline of Red Planet landings</em>. Space.com. https://www.space.com
        </li>
        <li>
          Renstrom, J. (2016, September 6). <em>How we settle Mars is more important than when</em>. The Space Review. https://www.thespacereview.com
        </li>
        <li>
          Salotti, J.-M., Labache, L., Pellet, E., Riffaud, P., & Chator, O. (2015, July). <em>Human factors issues for a sustainable settlement of Mars</em>. In <em>Proceedings of the 9th IAA Symposium on the Future of Space Exploration: Towards New Global Programmes, Torino, Italy</em>. https://www.researchgate.net/publication/281451950
        </li>
        <li>
          Musk, E. (2017). <em>Making humans a multiplanetary species</em>. New Space, 5(2), 46–61. https://doi.org/10.1089/space.2017.29009.emu
        </li>
        <li>
          Basner, M., Dinges, D. F., Mollicone, D. J., Savelev, I., Ecker, A., Di Antonio, A., Jones, C. W., Hyder, E. C., Kan, K., Morukov, B. V., & Sutton, J. P. (2013). <em>Mars 520-d mission simulation reveals protracted crew hypokinesis and alterations of sleep duration and timing</em>. <em>Proceedings of the National Academy of Sciences</em>, 110(7), 2635–2640. https://doi.org/10.1073/pnas.1212646110
        </li>
        <li>
          Axpe, E., Chan, D., Abegaz, M. F., Schreurs, A.-S., Alwood, J. S., Globus, R. K., & Appel, E. A. (2020). <em>A human mission to Mars: Predicting the bone mineral density loss of astronauts</em>. <em>PLOS ONE</em>, 15(1), e0226434. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0226434
        </li>
      </motion.ul>
    </motion.section>
  );
};

export default ReferencesSection;