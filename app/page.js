"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const API_KEY = "bb957792ca944879b0eb28b31ed414ef"; // Replace with your RAWG API key
const API_URL = "https://api.rawg.io/api/games";

const GamingPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch data from RAWG API for the current page
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: {
            key: API_KEY,
            page: currentPage,
            page_size: 20, // Number of games per page
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
    <div className="bg-gray-900 min-h-screen py-10">
      <h1 className="text-white text-4xl text-center mb-8">GamesFlex</h1>
      <div className="flex justify-center mb-6 px-6">
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
      </div>
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-2 gap-6 px-6">
            {games.map((game) => (
              <Link href={`/game/${game.id}`} key={game.id}>
                <div
                  key={game.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={game.background_image}
                    alt={game.name}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
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