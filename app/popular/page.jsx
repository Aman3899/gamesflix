"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "bb957792ca944879b0eb28b31ed414ef"; // Replace with your actual API key

const PopularGames = () => {
    const [popularGames, setPopularGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [darkMode] = useState(true); // Fixed dark mode for futuristic theme

    useEffect(() => {
        const fetchPopularGames = async () => {
            setLoading(true);
            setError(null);
            try {
                const allGames = [];
                let currentPage = 1;
                const pageSize = 30;

                while (allGames.length < 150 && currentPage <= 5) {
                    const response = await axios.get(API_URL, {
                        params: {
                            key: API_KEY,
                            page: currentPage,
                            page_size: pageSize,
                            ordering: "-popularity",
                        },
                    });

                    if (response.data && response.data.results) {
                        allGames.push(...response.data.results);
                    } else {
                        console.warn("No results on page:", currentPage);
                        break;
                    }
                    currentPage++;
                }

                setPopularGames(allGames.slice(0, 150)); // Limit to 150 games
            } catch (err) {
                console.error("Error fetching popular games:", err);
                setError("Failed to load popular games. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPopularGames();
    }, []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, duration: 0.6 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.9)",
            transition: { duration: 0.3 },
        },
        tap: {
            scale: 0.98, // Slight shrink on click
            boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
            transition: { duration: 0.1 },
        },
    };

    const glowVariants = {
        animate: {
            textShadow: [
                "0 0 5px rgba(129, 140, 248, 0.5)",
                "0 0 15px rgba(129, 140, 248, 0.8)",
                "0 0 5px rgba(129, 140, 248, 0.5)",
            ],
            transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
        },
    };

    // Futuristic Loading Animation
    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col items-center"
                >
                    <motion.div
                        className="absolute w-40 h-40 rounded-full border-2 border-indigo-500 opacity-60"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-32 h-32 rounded-full border-2 border-purple-500 opacity-60"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"
                        animate={{
                            scale: [1, 1.15, 1],
                            boxShadow: [
                                "0 0 10px rgba(99, 102, 241, 0.5)",
                                "0 0 25px rgba(99, 102, 241, 0.8)",
                                "0 0 10px rgba(99, 102, 241, 0.5)",
                            ],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.span
                            className="text-white text-2xl font-bold"
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🎮
                        </motion.span>
                    </motion.div>
                    <motion.h2
                        className="mt-8 text-2xl font-semibold text-indigo-400"
                        animate={glowVariants.animate}
                    >
                        Loading Top Games...
                    </motion.h2>
                </motion.div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-red-400 text-center text-xl font-semibold p-6 bg-gray-800 rounded-lg shadow-lg border border-red-500/50"
                >
                    {error}
                </motion.div>
            </div>
        );
    }

    return (
        <>
            <Navbar darkMode={darkMode} />
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold text-white mb-12 text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Top 150 Popular Games
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence>
                            {popularGames.map((game) => (
                                <Link href={`/game/${game.id}`} key={game.id} className="block">
                                    <motion.div
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        whileTap="tap" // Added tap animation
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/20 shadow-xl transform-gpu cursor-pointer"
                                    >
                                        <div className="relative group">
                                            <Image
                                                src={game.background_image || "/placeholder-image.jpg"}
                                                alt={game.name}
                                                width={500}
                                                height={300}
                                                className="object-cover w-full h-48 sm:h-56 transition-transform duration-300 group-hover:scale-105"
                                                quality={75}
                                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 500px"
                                            />
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.div
                                                    className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full"
                                                    animate={glowVariants.animate}
                                                >
                                                    #{popularGames.indexOf(game) + 1}
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                        <div className="p-4 sm:p-5">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 truncate">
                                                {game.name}
                                            </h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-gray-300 text-sm">
                                                <motion.div
                                                    className="flex items-center mb-2 sm:mb-0"
                                                    animate={{ scale: [1, 1.05, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <span className="text-yellow-400 mr-1">★</span>
                                                    <span>{game.rating ? game.rating.toFixed(1) : "N/A"}</span>
                                                    <span className="ml-1 text-gray-400">({game.ratings_count} votes)</span>
                                                </motion.div>
                                                <motion.div
                                                    className="text-indigo-400 text-xs font-medium"
                                                    animate={glowVariants.animate}
                                                >
                                                    {game.released?.slice(0, 4) || "N/A"}
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            <Footer darkMode={darkMode} />
        </>
    );
};

export default PopularGames;