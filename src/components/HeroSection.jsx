"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Mail, Play } from "lucide-react";

export const metadata = {
  title: "Home - SA Studios",
  description:
    "Discover cutting-edge Roblox games crafted by SA Studios. Join millions of players enjoying our creations worldwide.",
};

const HeroSection = () => {
  const stats = [
    { value: 1992535, label: "Players playing our games" },
    { value: 739800757, label: "Total play sessions" },
    { value: 53, label: "Games in our portfolio" },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={"/gaming-hero-bg.jpg"}
          alt="Gaming Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Salman Ali Studios
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`/games`}
              className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105  hover:from-indigo-500 hover:to-blue-500 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore our games
            </a>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_TALK_TO_US_EMAIL} `}
              className="flex items-center border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Talk to us
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />+
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
