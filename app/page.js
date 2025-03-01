"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "./components/Navbar";
import FeaturedSlider from "./components/FeaturedSlides";
import Image from "next/image";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from 'next/navigation';
import { FiSearch, FiX, FiClock, FiTrendingUp, FiStar } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

const API_KEY = "bb957792ca944879b0eb28b31ed414ef";
const API_URL = "https://api.rawg.io/api/games";

// Enhanced loading screen component
const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh]">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full border-8 border-purple-500 border-opacity-20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
      <IoGameControllerOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-purple-500" />
    </div>
    <p className="mt-6 text-lg font-medium text-purple-400">Loading amazing games...</p>
    <div className="mt-4 flex space-x-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-full bg-purple-600 animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  </div>
);

// Game card component for reusability
const GameCard = ({ game, isRecent = false }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    <Link href={`/game/${game.id}`} className="block h-full">
      <div className="relative h-48 overflow-hidden">
        {game.background_image ? (
          <Image
            width={1920}
            height={1080}
            src={game.background_image}
            alt={game.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <IoGameControllerOutline className="text-4xl text-gray-400" />
          </div>
        )}

        {isRecent && (
          <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <FiClock className="mr-1" /> Recent
          </div>
        )}

        {game.metacritic && (
          <div className={`absolute top-2 right-2 ${
            game.metacritic >= 80 ? 'bg-green-600' :
              game.metacritic >= 60 ? 'bg-yellow-600' :
                'bg-red-600'
          } text-white text-xs font-bold px-2 py-1 rounded-full`}>
            {game.metacritic}
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-800 h-28">
        <h2 className="text-white text-lg font-bold line-clamp-1 group-hover:text-purple-400 transition-colors duration-300">
          {game.name}
        </h2>
        <p className="text-gray-400 text-sm mt-1 line-clamp-1">
          {game.genres?.map((genre) => genre.name).join(", ") || "No genres available"}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center text-gray-400 text-xs">
            <FiStar className="mr-1 text-yellow-400" />
            {game.rating || 0}/5
          </div>
          <div className="text-xs text-gray-400">
            {game.released ? new Date(game.released).getFullYear() : "N/A"}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <span className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg transform transition-transform duration-300 group-hover:scale-110">
          View Details
        </span>
      </div>
    </Link>
  </motion.div>
);

const GamingPage = () => {
  const [games, setGames] = useState([]);
  const [recentGames, setRecentGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingRecent, setLoadingRecent] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // 'all' or 'recent'
  const [searchHistory, setSearchHistory] = useState([]);
  const searchInputRef = useRef(null);


  const searchParams = useSearchParams();

  // Function to fetch games with debouncing
  const fetchGames = useCallback(async (isRecent = false) => {
    const loadingState = isRecent ? setLoadingRecent : setLoading;
    loadingState(true);

    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          page: isRecent ? 1 : currentPage,
          page_size: isRecent ? 6 : 21,
          search: searchQuery || undefined,
          ordering: isRecent ? "-released" : "-rating",
          dates: isRecent ? "2023-01-01,2025-12-31" : undefined,
        },
      });

      if (isRecent) {
        setRecentGames(response.data.results);
      } else {
        setGames(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 21));
      }

      loadingState(false);
    } catch (error) {
      console.error(`Error fetching ${isRecent ? "recent" : ""} games:`, error);
      loadingState(false);
    }
  }, [currentPage, searchQuery]);

  useEffect(() => {
    fetchGames(false);
  }, [fetchGames, currentPage, searchQuery]);

  useEffect(() => {
    fetchGames(true);
  }, [fetchGames, searchQuery]);

  const handleSearch = () => {
    if (tempSearch && !searchHistory.includes(tempSearch)) {
      setSearchHistory(prev => [tempSearch, ...prev].slice(0, 5));
    }
    setSearchQuery(tempSearch);
    setCurrentPage(1);
    setActiveTab("all");
    if (searchInputRef.current) {
      searchInputRef.current.blur(); // Hide keyboard on mobile
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearSearch = () => {
    setTempSearch("");
    setSearchQuery("");
  };

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const endPage = totalPages;

    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(currentPage + 2, endPage);

    if (end - start < maxPagesToShow - 1) {
      if (currentPage < endPage / 2) {
        end = Math.min(start + maxPagesToShow - 1, endPage);
      } else {
        start = Math.max(end - maxPagesToShow + 1, 1);
      }
    }

    // First page
    if (start > 1) {
      pages.push(
        <button
          key="start"
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 mx-1 rounded-lg text-white bg-gray-700 hover:bg-gray-600 transition duration-300"
        >
          1
        </button>
      );
      if (start > 2) {
        pages.push(<span key="start-dots" className="text-white">...</span>);
      }
    }

    // Page numbers
    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded-lg text-white ${
            currentPage === i ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-700 hover:bg-gray-600"
          } transition duration-300`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (end < endPage) {
      if (end < endPage - 1) {
        pages.push(<span key="end-dots" className="text-white">...</span>);
      }
      pages.push(
        <button
          key="end"
          onClick={() => handlePageChange(endPage)}
          className="px-4 py-2 mx-1 rounded-lg text-white bg-gray-700 hover:bg-gray-600 transition duration-300"
        >
          {endPage}
        </button>
      );
    }

    return pages;
  };

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen pb-10">
        <Navbar />
        <FeaturedSlider />

        {/* Enhanced Search Bar */}
        <div className="relative w-full max-w-4xl mx-auto mb-10 px-4">

          <div
            className="bg-gray-800 p-4 rounded-2xl shadow-2xl"
          >
            <div className="relative flex items-center">
              <FiSearch className="absolute left-4 text-gray-400 text-xl" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for games..."
                value={tempSearch}
                onChange={(e) => setTempSearch(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                className="w-full pl-12 pr-12 py-3 text-lg text-white bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              />
              {tempSearch && (
                <button
                  onClick={clearSearch}
                  className="absolute right-16 p-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FiX className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={handleSearch}
                className="absolute right-4 p-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300"
              >
                <FiSearch className="h-5 w-5" />
              </button>
            </div>

            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Recent searches:</p>
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setTempSearch(term);
                        setSearchQuery(term);
                        setCurrentPage(1);
                      }}
                      className="px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded-full transition duration-300"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>


        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-1 rounded-xl inline-flex">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center ${
                  activeTab === "all"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiTrendingUp className="mr-2" /> All Games
              </button>
              <button
                onClick={() => setActiveTab("recent")}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center ${
                  activeTab === "recent"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiClock className="mr-2" /> Recent Games
              </button>
            </div>
          </div>

          {/* Search Results Message */}
          {searchQuery && (
            <div className="mb-8 text-center">
              <p className="text-white text-xl">
                {activeTab === "all" ? (games.length ? `Showing results for "${searchQuery}"` : `No results found for "${searchQuery}"`) :
                  (recentGames.length ? `Recent games matching "${searchQuery}"` : `No recent games match "${searchQuery}"`)}
              </p>
              <button
                onClick={clearSearch}
                className="mt-2 text-purple-400 hover:text-purple-300 text-sm transition-colors duration-300"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Display area */}
          <AnimatePresence mode="wait">
            {activeTab === "all" ? (
              <motion.div
                key="all-games"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {loading ? (
                  <LoadingScreen />
                ) : (
                  <>
                    <motion.div
                      layout
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                    >
                      {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                      ))}
                    </motion.div>

                    {games.length > 0 && (
                      <div className="flex justify-center mt-10 overflow-x-auto py-4">
                        {renderPagination()}
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="recent-games"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {loadingRecent ? (
                  <LoadingScreen />
                ) : (
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                  >
                    {recentGames.map((game) => (
                      <GameCard key={game.id} game={game} isRecent={true} />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default GamingPage;