"use client";

import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";

export const metadata = {
  title: "About Us - SA Studios",
  description:
    "We are a team of passionate creators dedicated to crafting exceptional gaming experiences that inspire, entertain, and connect players worldwide!",
};
//hellossss
const cards = [
  {
    icon: "🎮",
    title: "Innovation",
    color: "bg-sky-500",
    description:
      "We redefine gaming experiences by blending advanced technology with captivating storytelling, creating worlds players love to explore.",
  },
  {
    icon: "🌟",
    title: "Excellence",
    color: "bg-pink-400",
    description:
      "Every game we craft is built to exceed industry standards, delivering seamless gameplay and unforgettable moments.",
  },
  {
    icon: "🚀",
    title: "Global Impact",
    color: "bg-indigo-500",
    description:
      "Our titles reach millions worldwide, shaping the future of gaming with engaging experiences that resonate across cultures.",
  },
];

export default function AboutUs() {
  return (
    <motion.section
      id="about"
      className="py-24 md:py-16 lg:py-20 xl:py-30 bg-muted/30 text-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={slideIn("up", "tween", 0.2, 1)}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed">
            We are a team of passionate creators dedicated to crafting
            exceptional gaming experiences that inspire, entertain, and connect
            players worldwide.
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
            With billions of plays across our games and hundreds of millions of
            monthly active users, we've contributed to some of the most
            successful titles on ROBLOX, gaining invaluable insights and driving
            innovation in the gaming industry.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={slideIn("up", "tween", 0.4, 1)}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-b from-blue-900/30 via-black/80 to-blue-900/80  duration-300 `}
              variants={slideIn("up", "tween", 0.3, 1)}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${card.color} mb-4 text-2xl`}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
