"use client";

import Image from "next/image";
import { ExternalLink, Users } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Our Top Hits - SA Studios",
  description: "Here are some of our top games featured on My Website.",
};

const games = [
  {
    icon: "/game-fish.jpg",
    title: "Fisch 🐟 [ LOST BONES🌿",
    visits: "3.3B+",
    cardHeight: "h-[280px] md:h-[280px]",
    imageSize: "w-[140px] h-[140px] md:w-[100px] md:h-[100px]",
    link: "/games/fisch",
  },
  {
    icon: "/game-fish.jpg",
    title: "Blade Ball",
    visits: "5.6B+",
    cardHeight: "h-[280px] md:h-[320px]",
    imageSize: "w-[140px] h-[140px]",
    link: "/games/blade-ball",
  },
  {
    icon: "/game-fish.jpg",
    title: "🌱 Grow a Garden 🌶️",
    visits: "31.9B+",
    cardHeight: "h-[280px] md:h-[360px]",
    imageSize: "w-[140px] h-[140px] md:w-[180px] md:h-[180px]",
    link: "/games/grow-a-garden",
  },
  {
    icon: "/game-fish.jpg",
    title: "[🟣] Steal a Brainrot",
    visits: "28.4B+",
    cardHeight: "h-[280px] md:h-[320px]",
    imageSize: "w-[140px] h-[140px]",
    link: "/games/steal-a-brainrot",
  },
  {
    icon: "/game-fish.jpg",
    title: "a dusty trip [🚗CAR QUEST]",
    visits: "1.9B+",
    cardHeight: "h-[280px] md:h-[280px]",
    imageSize: "w-[140px] h-[140px] md:w-[100px] md:h-[100px]",
    link: "/games/dusty-trip",
  },
];

export default function GameList() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-2"
        >
          Our Top Hits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg text-gray-300 mb-10"
        >
          Here are some of our top games
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {games.map((game, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center justify-between bg-gradient-to-b from-black/80 via-blue-900/80 to-black/80 rounded-2xl shadow-lg p-4 md:p-6 w-[90%] sm:w-[240px] transition-transform duration-300 ${game.cardHeight}`}
            >
              <div
                className={`rounded-xl overflow-hidden mb-4 flex justify-center items-center ${game.imageSize}`}
              >
                <Image
                  src={game.icon}
                  alt={game.title}
                  width={180}
                  height={180}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-white mb-2 truncate whitespace-nowrap overflow-hidden w-full">
                {game.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="flex items-center px-2 py-1 rounded-full border border-transparent relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 rounded-full"></span>
                  <span className="relative flex items-center space-x-1 z-10">
                    <Users
                      className="w-3 h-3"
                      style={{
                        fill: "url(#gradient-visits)",
                        stroke: "url(#gradient-visits)",
                      }}
                    />
                    <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                      {game.visits} Visits
                    </span>
                  </span>
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient
                        id="gradient-visits"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={game.link}
                className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm md:text-lg font-bold px-4 md:px-6 py-2 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all mt-auto"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Game
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: games.length * 0.1 }}
          className="flex justify-center mt-20"
        >
          <a
            href="/games"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg hover:from-indigo-500 hover:to-blue-500 transition-all"
          >
            View All Games
          </a>
        </motion.div>
      </div>
    </section>
  );
}
