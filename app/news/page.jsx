"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '../components/Navbar';
import { FaBell, FaClock, FaArrowRight, FaCalendarAlt, FaGamepad, FaUsers } from 'react-icons/fa';

const News = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.6)",
            transition: { duration: 0.2 }
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black pt-8 pb-16 px-4">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
                    <div className="absolute bottom-40 right-10 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
                    <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12 relative z-10"
                    >
                        <div className="inline-block mb-3 bg-purple-900/40 p-2 rounded-full backdrop-blur-sm">
                            <FaBell className="text-purple-400 text-2xl animate-pulse" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-200 mb-4">
                            Latest Gaming News
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Stay updated with the latest news and announcements in the gaming world.
                            Discover upcoming features, game releases, and community events.
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
                                    whileHover="hover"
                                    onClick={() => setSelectedArticle('feature')}
                                    className="relative overflow-hidden bg-gradient-to-br from-purple-900/80 to-black/90 rounded-2xl shadow-xl cursor-pointer backdrop-blur-sm border border-purple-800/50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 opacity-30"></div>
                                    <div className="p-8 relative z-10">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-purple-500/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                                <FaGamepad className="mr-1" /> Featured News
                                            </span>
                                            <span className="ml-3 text-gray-400 text-sm flex items-center">
                                                <FaCalendarAlt className="mr-1" /> 20th December 2024
                                            </span>
                                        </div>

                                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-3">
                                            GameVault Announces New Feature
                                        </h2>

                                        <p className="text-gray-300 text-lg mb-6">
                                            GamesFlex is excited to announce an upcoming feature that will revolutionize
                                            the way you interact with our platform. Our new AI-powered game recommendation
                                            system will learn your preferences and suggest games tailored to your unique
                                            gaming style and interests.
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400 text-sm flex items-center">
                                                <FaClock className="mr-1" /> 5 min read
                                            </span>
                                            <button className="text-purple-400 hover:text-purple-300 flex items-center transition-colors">
                                                Read more <FaArrowRight className="ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Regular Articles */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover="hover"
                                    onClick={() => setSelectedArticle('titles')}
                                    className="bg-gradient-to-br from-gray-800/90 to-black/90 rounded-2xl shadow-xl p-6 cursor-pointer backdrop-blur-sm border border-gray-700/50"
                                >
                                    <div className="flex items-center mb-3">
                                        <span className="bg-blue-600/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                            <FaGamepad className="mr-1" /> New Releases
                                        </span>
                                        <span className="ml-3 text-gray-400 text-sm flex items-center">
                                            <FaCalendarAlt className="mr-1" /> 18th December 2024
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-blue-300 mb-3">
                                        New Gaming Titles Coming Soon
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Get ready for some new and exciting game releases this winter. We will be adding
                                        a list of highly anticipated titles to GameVault in the next few days, including
                                        several exclusive indie gems you won&apos;t find anywhere else.
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 text-sm flex items-center">
                                            <FaClock className="mr-1" /> 3 min read
                                        </span>
                                        <button className="text-blue-400 hover:text-blue-300 flex items-center transition-colors">
                                            Read more <FaArrowRight className="ml-1" />
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    whileHover="hover"
                                    onClick={() => setSelectedArticle('community')}
                                    className="bg-gradient-to-br from-gray-800/90 to-black/90 rounded-2xl shadow-xl p-6 cursor-pointer backdrop-blur-sm border border-gray-700/50"
                                >
                                    <div className="flex items-center mb-3">
                                        <span className="bg-green-600/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                            <FaUsers className="mr-1" /> Community
                                        </span>
                                        <span className="ml-3 text-gray-400 text-sm flex items-center">
                                            <FaCalendarAlt className="mr-1" /> 15th December 2024
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-green-300 mb-3">
                                        GamesFlex Community Event
                                    </h2>

                                    <p className="text-gray-300 mb-4">
                                        Join us for a virtual community event where you can meet developers, participate in
                                        live Q&A, and win amazing prizes. Our team will showcase upcoming features and
                                        gather valuable feedback from our passionate community.
                                    </p>

                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 text-sm flex items-center">
                                            <FaClock className="mr-1" /> 4 min read
                                        </span>
                                        <button className="text-green-400 hover:text-green-300 flex items-center transition-colors">
                                            Read more <FaArrowRight className="ml-1" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-1">
                            {/* Under Development Notice */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                className="bg-gradient-to-br from-black/60 to-purple-900/40 p-6 rounded-2xl text-center backdrop-blur-sm border border-purple-800/30 mb-8 shadow-xl"
                            >
                                <div className="inline-block mb-3 bg-purple-900/40 p-3 rounded-full">
                                    <FaGamepad className="text-purple-400 text-2xl" />
                                </div>
                                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                                    Feature Under Development
                                </h2>
                                <p className="text-gray-300">
                                    This news section is currently being enhanced with new features and a better user experience.
                                    Stay tuned for real-time notifications, personalized content, and more!
                                </p>
                                <div className="w-full h-2 bg-gray-800 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                                </div>
                                <p className="text-sm text-gray-400 mt-2">75% Complete</p>
                            </motion.div>

                            {/* Coming Soon Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                className="bg-gradient-to-br from-black/60 to-purple-900/40 p-6 rounded-2xl backdrop-blur-sm border border-purple-800/30 shadow-xl"
                            >
                                <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                                    <FaBell className="mr-2" /> Coming Soon
                                </h3>

                                <ul className="space-y-4">
                                    <li className="bg-black/30 p-4 rounded-xl hover:bg-black/50 transition-colors">
                                        <h4 className="font-medium text-white">Game Reviews</h4>
                                        <p className="text-gray-400 text-sm">In-depth reviews of the latest games</p>
                                    </li>
                                    <li className="bg-black/30 p-4 rounded-xl hover:bg-black/50 transition-colors">
                                        <h4 className="font-medium text-white">Developer Interviews</h4>
                                        <p className="text-gray-400 text-sm">Exclusive insights from game creators</p>
                                    </li>
                                    <li className="bg-black/30 p-4 rounded-xl hover:bg-black/50 transition-colors">
                                        <h4 className="font-medium text-white">Gaming Tips & Tricks</h4>
                                        <p className="text-gray-400 text-sm">Level up your gaming skills</p>
                                    </li>
                                    <li className="bg-black/30 p-4 rounded-xl hover:bg-black/50 transition-colors">
                                        <h4 className="font-medium text-white">Hardware Spotlights</h4>
                                        <p className="text-gray-400 text-sm">Featured gaming setups and gear</p>
                                    </li>
                                </ul>

                                <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center">
                                    Subscribe for Updates <FaBell className="ml-2" />
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 }}
                        className="mt-12 bg-gradient-to-br from-black/80 to-purple-900/30 p-8 rounded-2xl text-center border border-purple-800/30 backdrop-blur-sm shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-3">Never Miss a Gaming Update</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and be the first to know about new games, features,
                            and exclusive content. Stay ahead of the game!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow bg-black/50 border border-purple-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-6 rounded-xl transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default News;