"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

export const metadata = {
  title: "Game Acquisition - SA Studios",
  description:
    "Unlock the full potential of your Roblox creation with Salman Ali Studios. We specialize in acquiring, scaling, and managing Roblox experiences for creators worldwide.",
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      staggerChildren: 0.25,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};
export default function GameAcquisition() {
  const cards = [
    {
      title: "Complete Game Acquisition",
      desc: "Sell your Roblox game outright with a competitive upfront offer. We ensure creators receive fair value for their vision and dedication.",
    },
    {
      title: "Professional Development & Marketing",
      desc: "Our expert team enhances your game with innovative updates, high-quality branding, and strategic growth campaigns.",
    },
    {
      title: "Revenue Sharing Models",
      desc: "Enjoy ongoing benefits through transparent revenue-sharing agreements, rewarding your creativity as your game grows.",
    },
    {
      title: "Seamless Transition",
      desc: "We handle the entire process—from acquisition to operations—allowing you to focus on your next groundbreaking idea.",
    },
  ];

  return (
    <motion.section
      id="game-acquisition"
      className="py-30 md:py-16 lg:py-20 xl:py-30 bg-muted/30 text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center mb-12"
          variants={cardVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Game Acquisition
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Unlock the full potential of your Roblox creation with{" "}
            <span className="font-semibold text-[#915EFF]">
              Salman Ali Studios
            </span>
            . We specialize in acquiring, scaling, and managing Roblox
            experiences, providing creators with seamless transitions and
            long-term growth opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gradient-to-b from-blue-900/30 via-black/80 to-blue-900/80 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300"
              
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" variants={cardVariants}>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-bold rounded-full shadow-lg hover:from-indigo-500 hover:to-blue-500 transition-all"
          >
            Let’s Discuss Your Game
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
