"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "./components/Navbar";
import FeaturedSlider from "./components/FeaturedSlides";
import Image from "next/image";
import LoadingScreen from "./components/LoadingScreen";


const API_KEY = "bb957792ca944879b0eb28b31ed414ef";
const API_URL = "https://api.rawg.io/api/games";


const GamingPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [tempSearch, setTempSearch] = useState("");

  useEffect(() => {
    // Fetch data from RAWG API for the current page
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: {
            key: API_KEY,
            page: currentPage,
            page_size: 21, // Number of games per page
            search: searchQuery || undefined,
          },
        });
        setGames(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 20)); // Calculate total pages
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [currentPage, searchQuery]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getGameName = (game) => {
    return game ? game.replace(/\s+/g, '-') : "";
  }

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

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded-lg text-white ${currentPage === i ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
            } transition duration-300`}
        >
          {i}
        </button>
      );
    }

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
    <div className="bg-gray-900 min-h-screen pb-10">

      <Navbar />
      <FeaturedSlider />

      {/* <div className="flex justify-center w-full mb-16 max-sm:px-2 max-sm:mb-3">
        <input
          type="text"
          placeholder="Search for games..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to page 1 on search
          }}
          className="w-full max-w-lg px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
        />
      </div> */}


      <div className="relative w-full max-w-4xl mx-auto mb-16 px-4 max-sm:mb-3">
        <div className={`transition-all duration-300 ${showSearch ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for games..."
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setSearchQuery(tempSearch);
                  setCurrentPage(1);
                }
              }}
              className="w-full px-6 py-4 text-lg text-gray-900 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 pr-12"
            />
            <button
              onClick={() => {
                setSearchQuery(tempSearch);
                setCurrentPage(1);
              }}
              className="absolute right-4 p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Toggle Button */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className={`fixed top-4 right-4 z-50 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transform transition-all duration-300 ${showSearch ? 'rotate-45' : 'rotate-0'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={showSearch ? "M6 18L18 6M6 6l12 12" : "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}
            />
          </svg>
        </button>
      </div>


      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center text-white pb-10 max-sm:pb-4">Games</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
            {games.map((game) => (
              <Link href={`/game/${game.id}`} key={game.id}>
                <div
                  key={game.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  {game.background_image ? (
                    <Image
                      width={1920}
                      height={1080}
                      src={game.background_image}
                      alt={game.name}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                  ) : (
                    // Fallback image or placeholder when no background_image is available
                    <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500 flex-col">
                    <h2 className="text-white text-2xl font-bold">{game.name}</h2>
                    <p className="text-gray-300 mt-2">
                      {game.genres.map((genre) => genre.name).join(", ")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">{renderPagination()}</div>
        </>
      )}
    </div>
  );
};

export default GamingPage;