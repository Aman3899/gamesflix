"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaBackspace,
    FaGlobe,
    FaCalendarAlt,
    FaGamepad,
    FaStar,
    FaUsers,
    FaTag,
    FaStore,
    FaCode,
    FaReddit,
    FaTwitch,
    FaYoutube,
    FaTrophy,
    FaWindows,
    FaMicrochip,
    FaMemory,
    FaDesktop,
    FaHdd,
} from "react-icons/fa";

// Component for rendering system requirements in raw form
const SystemRequirementsSection = ({ title, requirements }) => {
    return (
        <motion.div
            className="p-6 rounded-xl shadow-lg bg-gray-800/70 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h4 className="text-xl font-semibold text-yellow-300 mb-3">{title}</h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                {requirements || "N/A"}
            </p>
        </motion.div>
    );
};

const GameDetailPage = ({ params }) => {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = params.slug;

    useEffect(() => {
        if (id) {
            const fetchGameDetails = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
                        params: {
                            key: "bb957792ca944879b0eb28b31ed414ef",
                        },
                    });
                    setGame(response.data);
                    setLoading(false);
                } catch (error) {
                    setError("Error fetching game details.");
                    setLoading(false);
                }
            };
            fetchGameDetails();
        }
    }, [id]);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeInOut" } },
    };

    const glowVariants = {
        animate: {
            textShadow: ["0 0 5px rgba(99, 102, 241, 0.5)", "0 0 15px rgba(99, 102, 241, 0.8)", "0 0 5px rgba(99, 102, 241, 0.5)"],
            transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
        },
    };

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
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"
                        animate={{
                            scale: [1, 1.15, 1],
                            boxShadow: ["0 0 10px rgba(99, 102, 241, 0.5)", "0 0 25px rgba(99, 102, 241, 0.8)", "0 0 10px rgba(99, 102, 241, 0.5)"],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaGamepad className="text-white text-3xl" />
                    </motion.div>
                    <motion.h2 className="mt-6 text-2xl font-semibold text-indigo-400" animate={glowVariants.animate}>
                        Loading Game Details...
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
        <motion.div variants={fadeIn} initial="initial" animate="animate" className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-12 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-10 py-4">
                    <FaBackspace
                        className="text-4xl text-indigo-400 cursor-pointer hover:text-indigo-500 transition-colors duration-200"
                        onClick={() => window.history.back()}
                    />
                    <h1 className="flex-1 text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                        {game.name}
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                            <Image
                                width={1920}
                                height={1080}
                                src={game.background_image}
                                alt={game.name}
                                className="rounded-3xl shadow-2xl object-cover w-full h-64 sm:h-96"
                                quality={85}
                            />
                        </motion.div>
                        <div className="mt-6 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Quick Info</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center space-x-2">
                                    <FaCalendarAlt /> <span>Released: {game.released || "N/A"}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaStar className="text-yellow-400" /> <span>Rating: {game.rating}/5 ({game.ratings_count} votes)</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGamepad /> <span>Playtime: {game.playtime} hours</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGlobe />
                                    <span>
                                        Website: {game.website ? <a href={game.website} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">{game.website}</a> : "N/A"}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Game Details</h2>
                            <div className="space-y-3 text-gray-300">
                                <p>
                                    <strong>Genres:</strong> {game.genres.map((g) => g.name).join(", ") || "N/A"}
                                </p>
                                <p>
                                    <strong>Developers:</strong> {game.developers.map((d) => d.name).join(", ") || "N/A"}
                                </p>
                                <p>
                                    <strong>Publishers:</strong> {game.publishers.map((p) => p.name).join(", ") || "N/A"}
                                </p>
                                <p>
                                    <strong>Platforms:</strong> {game.platforms.map((p) => p.platform.name).join(", ") || "N/A"}
                                </p>
                                <p>
                                    <strong>ESRB Rating:</strong> {game.esrb_rating?.name || "N/A"}
                                </p>
                                <p>
                                    <strong>Metacritic Score:</strong> {game.metacritic ? `${game.metacritic}/100` : "N/A"}
                                </p>
                                <p>
                                    <strong>Alternative Names:</strong> {game.alternative_names?.join(", ") || "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-purple-400 mb-4">Description</h2>
                            <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: game.description }} />
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-teal-400 mb-4">Ratings Breakdown</h2>
                            <ul className="space-y-2 text-gray-300">
                                {game.ratings.map((r) => (
                                    <li key={r.id} className="flex items-center space-x-2">
                                        <FaStar className="text-yellow-400" />
                                        <span>
                                            {r.title.charAt(0).toUpperCase() + r.title.slice(1)}: {r.count} votes ({r.percent.toFixed(1)}%)
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-blue-400 mb-4">Metacritic Scores by Platform</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                                {game.metacritic_platforms.map((mp) => (
                                    <li key={mp.platform.platform} className="flex items-center space-x-2">
                                        <FaTrophy className="text-yellow-400" />
                                        <span>
                                            {mp.platform.name}:{" "}
                                            <a href={mp.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
                                                {mp.metascore}/100
                                            </a>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-green-400 mb-4">Available Stores</h2>
                            <ul className="space-y-2 text-gray-300">
                                {game.stores.map((s) => (
                                    <li key={s.id} className="flex items-center space-x-2">
                                        <FaStore />
                                        <span>
                                            {s.store.name} ({s.store.domain})
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-orange-400 mb-4">Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {game.tags.map((t) => (
                                    <span
                                        key={t.id}
                                        className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm shadow-md hover:bg-indigo-700 transition duration-200"
                                    >
                                        <FaTag className="inline mr-1" /> {t.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-red-400 mb-4">Community & Social Media</h2>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center space-x-2">
                                    <FaReddit /> <span>Reddit: {game.reddit_count} posts</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaTwitch /> <span>Twitch Streams: {game.twitch_count}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaYoutube /> <span>YouTube Videos: {game.youtube_count.toLocaleString()}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaUsers /> <span>Added by: {game.added.toLocaleString()} users</span>
                                </li>
                            </ul>
                        </div>

                        {/* System Requirements */}
                        {game.platforms[0].requirements.minimum || game.platforms[0].requirements.recommended ? (
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">System Requirements (PC)</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {game.platforms[0].requirements.minimum && (
                                        <SystemRequirementsSection title="Minimum" requirements={game.platforms[0].requirements.minimum} />
                                    )}
                                    {game.platforms[0].requirements.recommended && (
                                        <SystemRequirementsSection title="Recommended" requirements={game.platforms[0].requirements.recommended} />
                                    )}
                                </div>
                            </div>
                        ) : null}

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-pink-400 mb-4">Additional Stats</h2>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center space-x-2">
                                    <FaCode /> <span>Achievements: {game.achievements_count}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGamepad /> <span>Screenshots: {game.screenshots_count}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGamepad /> <span>Movies/Clips: {game.movies_count}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaUsers /> <span>Creators: {game.creators_count}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGamepad /> <span>Series Count: {game.game_series_count}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <h2 className="text-3xl font-semibold text-green-400 mb-4">Download Links</h2>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={`https://fitgirl-repacks.site/${game.slug}` || "/"}
                                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md transition duration-300"
                                    target="_blank"
                                >
                                    FitGirl Repacks
                                </Link>
                                <Link
                                    href={`https://dodi-repacks.site/${game.slug}` || "/"}
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition duration-300"
                                    target="_blank"
                                >
                                    DODI Repacks
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default GameDetailPage;