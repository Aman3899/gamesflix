"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaBell, FaClock, FaArrowRight, FaCalendarAlt, FaGamepad, FaUsers } from "react-icons/fa";

const News = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" }, // Initial Box shadow
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        hover: {
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.6)",
            transition: { duration: 0.2 },
        },
    };

    const glowVariants = {
        animate: {
            textShadow: [
                "0 0 5px rgba(99, 102, 241, 0.5)",
                "0 0 15px rgba(99, 102, 241, 0.8)",
                "0 0 5px rgba(99, 102, 241, 0.5)",
            ],
            transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
        },
    };

    return (
        <>
            <Navbar heading="News Nexus" />
            <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 pb-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
                {/* Futuristic Background Effects */}
                <div className="absolute inset-0 bg-grid-pattern bg-cover bg-center opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-black/80 pointer-events-none"></div>
                <motion.div
                    className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                    className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block mb-4 bg-indigo-900/40 p-3 rounded-full backdrop-blur-sm">
                            <FaBell className="text-indigo-400 text-2xl sm:text-3xl animate-pulse-slow" />
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4 animate-text-glow">
                            Gaming Newsfeed
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto tracking-wide">
                            Plug into the pulse of the gaming universe—latest announcements, releases, and community transmissions await.
                        </p>
                    </motion.div>

                    {/* Main Content Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* News Articles Column */}
                        <motion.div
                            className="lg:col-span-2"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="space-y-8">
                                {/* Feature Article */}
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    onClick={() => setSelectedArticle("feature")}
                                    className="relative overflow-hidden bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl cursor-pointer border border-indigo-500/50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 opacity-30"></div>
                                    <div className="p-6 sm:p-8 relative z-10">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="bg-indigo-600/80 text-white px-3 py-1 rounded-full text-sm sm:text-base font-medium flex items-center">
                                                <FaGamepad className="mr-2" /> Featured Transmission
                                            </span>
                                            <span className="text-gray-400 text-sm sm:text-base flex items-center">
                                                <FaCalendarAlt className="mr-2" /> 20th December 2024
                                            </span>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-4">
                                            GameVault Unveils AI Nexus
                                        </h2>
                                        <p className="text-gray-300 text-sm sm:text-lg mb-6 leading-relaxed">
                                            GamesFlex ignites a new era with an AI-driven recommendation system, syncing with your gaming soul to deliver bespoke adventures.
                                        </p>
                                        <div className="flex flex-wrap justify-between items-center gap-4">
                                            <span className="text-gray-400 text-sm sm:text-base flex items-center">
                                                <FaClock className="mr-2" /> 5 min read
                                            </span>
                                            <button className="text-indigo-400 hover:text-indigo-300 flex items-center transition-colors text-sm sm:text-base">
                                                Decode More <FaArrowRight className="ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Regular Articles */}
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    onClick={() => setSelectedArticle("titles")}
                                    className="bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 cursor-pointer border border-indigo-500/50"
                                >
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm sm:text-base font-medium flex items-center">
                                            <FaGamepad className="mr-2" /> New Releases
                                        </span>
                                        <span className="text-gray-400 text-sm sm:text-base flex items-center">
                                            <FaCalendarAlt className="mr-2" /> 18th December 2024
                                        </span>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4">Incoming Titles: Winter Drop</h2>
                                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                                        Prepare for a cosmic wave of gaming bliss—exclusive indie treasures and blockbuster hits land soon.
                                    </p>
                                    <div className="flex flex-wrap justify-between items-center gap-4">
                                        <span className="text-gray-400 text-sm sm:text-base flex items-center">
                                            <FaClock className="mr-2" /> 3 min read
                                        </span>
                                        <button className="text-blue-400 hover:text-blue-300 flex items-center transition-colors text-sm sm:text-base">
                                            Explore Now <FaArrowRight className="ml-2" />
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    onClick={() => setSelectedArticle("community")}
                                    className="bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 cursor-pointer border border-indigo-500/50"
                                >
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="bg-green-600/80 text-white px-3 py-1 rounded-full text-sm sm:text-base font-medium flex items-center">
                                            <FaUsers className="mr-2" /> Community
                                        </span>
                                        <span className="text-gray-400 text-sm sm:text-base flex items-center">
                                            <FaCalendarAlt className="mr-2" /> 15th December 2024
                                        </span>
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-green-300 mb-4">Community Convergence Event</h2>
                                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                                        Join the digital gathering—connect with creators, engage in live Q&A, and claim stellar rewards.
                                    </p>
                                    <div className="flex flex-wrap justify-between items-center gap-4">
                                        <span className="text-gray-400 text-sm sm:text-base flex items-center">
                                            <FaClock className="mr-2" /> 4 min read
                                        </span>
                                        <button className="text-green-400 hover:text-green-300 flex items-center transition-colors text-sm sm:text-base">
                                            Join Now <FaArrowRight className="ml-2" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Under Development Notice */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                className="bg-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-indigo-500/50"
                            >
                                <div className="inline-block mb-4 bg-indigo-900/40 p-3 rounded-full">
                                    <FaGamepad className="text-indigo-400 text-2xl sm:text-3xl animate-pulse-slow" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4 animate-text-glow">
                                    System Upgrade in Progress
                                </h2>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    The newsfeed is undergoing a quantum leap—expect real-time alerts and tailored streams soon.
                                </p>
                                <div className="w-full h-2 bg-gray-900 rounded-full mt-4 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "75%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                </div>
                                <p className="text-sm text-gray-400 mt-2">75% Synced</p>
                            </motion.div>

                            {/* Coming Soon Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                className="bg-gray-800/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-indigo-500/50"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 flex items-center animate-text-glow">
                                    <FaBell className="mr-2 animate-pulse-slow" /> Incoming Signals
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Game Reviews", desc: "Deep dives into the latest releases" },
                                        { title: "Developer Logs", desc: "Exclusive transmissions from creators" },
                                        { title: "Skill Codex", desc: "Master your gaming prowess" },
                                        { title: "Tech Beacons", desc: "Spotlight on cutting-edge gear" },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="bg-gray-900/50 p-4 rounded-xl hover:bg-gray-900/70 transition-colors"
                                            whileHover={{ scale: 1.03 }}
                                        >
                                            <h4 className="font-medium text-white text-sm sm:text-base">{item.title}</h4>
                                            <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(79, 70, 229, 0.8)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <FaBell /> Link to Updates
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 }}
                        className="mt-12 bg-gray-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-indigo-500/50 text-center"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4 animate-text-glow">
                            Stay Wired to the Grid
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
                            Subscribe to our neural net for instant updates on games, features, and exclusive drops. Stay synced, stay ahead.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Your digital ID"
                                className="flex-grow bg-gray-900/50 border border-indigo-500/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(79, 70, 229, 0.8)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 text-sm sm:text-base"
                            >
                                Connect
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default News;