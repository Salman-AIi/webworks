"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ExternalLink, Users, Search } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fetchData } from "@/services/fetchData";

export default function GamesPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);
  const [totalGames, setTotalGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 20;

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const currentPage = parseInt(searchParams.get("page")) || 1;

    setSearchTerm(search);
    setFilterCategory(category);
    setPage(currentPage);
    setLoading(true);

    fetchData({ search, category, page: currentPage, limit })
      .then((res) => {
        setData(res.data.sort((a, b) => b.playing - a.playing));
        setTotalPages(res.totalPages);
        setTotalGames(res.totalGames);
      })

      .catch(console.error)
      .finally(() => setLoading(false));
  }, [searchParams]);

  const updateURL = (
    newPage = page,
    search = searchTerm,
    category = filterCategory
  ) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);
    if (newPage > 1) params.set("page", newPage);
    window.history.replaceState(null, "", `/games?${params.toString()}`);
    setPage(newPage);
  };

  const handleSearch = () => updateURL(1);
  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
    updateURL(1, searchTerm, e.target.value);
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxPagesToShow - 1);

    if (end - start < maxPagesToShow - 1) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg">Total Games:</span>
              <CountUp
                start={0}
                end={totalGames}
                duration={1.5}
                separator=","
                className="text-blue-400 text-xl font-bold"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none w-full sm:w-auto"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-blue-500 w-full sm:w-auto justify-center"
              >
                <Search className="w-4 h-4" /> Search
              </button>
              <select
                value={filterCategory}
                onChange={handleCategoryChange}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white w-full sm:w-auto"
              >
                <option value="">All Categories</option>
                <option value="best tycoons studio">Best Tycoons Studio</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="text-white text-center py-20">
              <svg
                className="animate-spin h-10 w-10 mx-auto text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <p className="mt-4">Loading games...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 ">
                {data?.length ? (
                  data?.map((game, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center max-w-[320px] m-auto w-full rounded-2xl shadow-lg p-4 sm:p-6 bg-gradient-to-b from-blue-900/30 via-black/80 to-blue-900/80 hover:from-black/80 hover:via-blue-900/80 hover:to-black/80"
                    >
                      <Image
                        src={game.icon || "/game-fish.jpg"}
                        alt={game.name}
                        width={180}
                        height={180}
                        className="rounded-lg shadow-md mb-6"
                        priority
                      />
                      <h2 className="text-2xl font-bold text-white mb-3 text-center line-clamp-1">
                        {game.name}
                      </h2>

                      <div className="flex justify-between items-center w-full text-primary font-semibold mb-3">
                        <span>Playing:</span>
                        <div className="flex items-center space-x-1">
                          <span>
                            <CountUp
                              start={0}
                              end={game.playing}
                              duration={1.5}
                              separator=","
                            />
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full text-primary font-semibold mb-3">
                        <span>Visits:</span>
                        <div className="flex items-center space-x-1">
                          <Users className="h-5 w-5" />

                          <span>
                            {" "}
                            <CountUp
                              start={0}
                              end={game.visits}
                              duration={1.5}
                              separator=","
                            />
                          </span>
                        </div>
                      </div>

                      <a
                        href={`https://www.roblox.com/games/${game.rootPlaceId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full justify-center flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600  text-white px-5 py-2 rounded-full shadow-lg hover:scale-102 transition-all"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" /> Play Now
                      </a>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-white col-span-full text-center mt-10">
                    No games found.
                  </p>
                )}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    disabled={page === 1}
                    onClick={() => updateURL(page - 1)}
                    className="px-3 py-1 rounded bg-gray-700 text-white"
                  >
                    ‹
                  </button>
                  {getPageNumbers().map((p) => (
                    <button
                      key={p}
                      onClick={() => updateURL(p)}
                      className={`px-3 py-1 rounded ${
                        p === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-white"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    disabled={page === totalPages}
                    onClick={() => updateURL(page + 1)}
                    className="px-3 py-1 rounded bg-gray-700 text-white"
                  >
                    ›
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
