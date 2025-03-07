import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Child item animation
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Example data demonstrating cognitive performance changes
const cognitiveData = [
  { stage: "Day 0", performance: 100 },
  { stage: "Day 30", performance: 95 },
  { stage: "Day 60", performance: 90 },
  { stage: "Day 90", performance: 88 },
  { stage: "Day 120", performance: 85 },
];

const CognitiveChallengesSection = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 py-12 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        variants={itemVariants}
      >
        Cognitive Challenges and Decision-Making
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p className="leading-relaxed mb-6" variants={itemVariants}>
        Mars missions will demand exceptional cognitive performance, requiring
        astronauts to consistently manage complex tasks under stressful and
        unpredictable conditions. Research indicates cognitive performance
        declines by approximately <strong>10–15%</strong> during prolonged exposure
        to isolated and confined environments. Crucially, decision-making capabilities
        can deteriorate under high stress, potentially jeopardizing critical
        mission operations.
      </motion.p>

      <motion.p className="leading-relaxed mb-8" variants={itemVariants}>
        Analyses of astronaut performance during ISS missions indicate that
        maintaining cognitive sharpness through structured training and
        regular assessments significantly mitigates performance decline. Thus,
        integrating cognitive enhancement techniques into daily mission routines
        is crucial for successful Mars colonization.
      </motion.p>

      {/* Snug White Container for the Chart + Explanation */}
      <motion.div
        className="bg-white rounded-md p-3 shadow-md w-fit mx-auto text-center"
        variants={itemVariants}
      >
        {/* Responsive Chart Container */}
        <div className="w-full max-w-md">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={cognitiveData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#aaaaaa" />
              <XAxis dataKey="stage" stroke="#000" />
              <YAxis stroke="#000" domain={[80, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
                labelStyle={{ color: "#333" }}
                itemStyle={{ color: "#333" }}
              />
              <Line
                type="monotone"
                dataKey="performance"
                stroke="#8884d8"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Specific Explanation for the Chart */}
        <p className="mt-2 text-sm text-gray-900 max-w-90 mx-auto">
          A visualization of the gradual decline in astronaut cognitive
          performance over mission days.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default CognitiveChallengesSection;
