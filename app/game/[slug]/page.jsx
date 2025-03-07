"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBackspace, FaGlobe, FaCalendarAlt, FaGamepad, FaStar, FaUsers, FaTag,
    FaStore, FaCode, FaReddit, FaTwitch, FaYoutube, FaTrophy, FaWindows,
    FaTruck, FaCheckCircle, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaDownload,
} from "react-icons/fa";

// Component for rendering system requirements
const SystemRequirementsSection = ({ title, requirements }) => (
    <motion.div
        className="p-4 sm:p-6 rounded-xl bg-gray-800/80 backdrop-blur-md shadow-md border border-gray-700/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 tracking-wide">{title}</h4>
        <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-medium">
            {requirements || "Not Available"}
        </p>
    </motion.div>
);

// Truncatable Link Component
const TruncatedLink = ({ url, maxLength = 25 }) => {
    const [expanded, setExpanded] = useState(false);

    if (!url) return <span className="text-gray-500 italic">N/A</span>;

    const displayUrl = expanded
        ? url
        : url.length > maxLength
            ? `${url.substring(0, maxLength)}...`
            : url;

    return (
        <div className="flex items-center space-x-2 group">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 truncate max-w-[180px] sm:max-w-[250px] md:max-w-[300px]"
            >
                {displayUrl}
            </a>
            {url.length > maxLength && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:outline-none"
                >
                    {expanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                </button>
            )}
            <FaExternalLinkAlt className="text-indigo-400 text-xs flex-shrink-0" />
        </div>
    );
};

// Loading Skeleton Component
const LoadingSkeleton = () => (
    <div className="animate-pulse space-y-6">
        <div className="h-48 sm:h-64 bg-gray-700 rounded-2xl"></div>
        <div className="space-y-4">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        </div>
    </div>
);

const GameDetailPage = ({ params }) => {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = params?.slug;
    const [showModal, setShowModal] = useState(false);
    const [requestSent, setRequestSent] = useState(false);
    const [userDetails, setUserDetails] = useState({ name: "", address: "", phone: "" });
    const [activeTab, setActiveTab] = useState("details");

    // Game Name Formatter Function
    const gameNameFormatter = (gameName) => {
        if (!gameName) return "";
        return gameName.toLowerCase().replace(/[:]/g, "").replace(/\s+/g, "-");
    };

    useEffect(() => {
        if (!id) {
            setError("Invalid game ID.");
            setLoading(false);
            return;
        }

        const fetchGameDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
                    params: { key: "bb957792ca944879b0eb28b31ed414ef" },
                });
                setGame(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch game details.");
                setLoading(false);
            }
        };
        fetchGameDetails();
    }, [id]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") setShowModal(false);
        };
        if (showModal) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [showModal]);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeInOut" } },
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

    const buttonVariants = {
        initial: { scale: 1, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" },
        hover: { scale: 1.05, boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
        tap: { scale: 0.95, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", transition: { duration: 0.1 } },
        success: { scale: 1.05, backgroundColor: "#4ade80", color: "#1e293b", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", transition: { duration: 0.5 } },
        disabled: { opacity: 0.5, cursor: "not-allowed" },
    };

    const cardVariants = {
        initial: { opacity: 0, y: 20, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" },
        animate: { opacity: 1, y: 0, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", transition: { duration: 0.5 } },
        hover: { y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
    };

    const handleRequestGame = () => setShowModal(true);
    const handleInputChange = (e) => setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    const handleSubmitRequest = () => {
        if (!userDetails.name || !userDetails.address || !userDetails.phone) {
            alert("Please fill in all fields to proceed.");
            return;
        }
        setTimeout(() => {
            setShowModal(false);
            setRequestSent(true);
            setUserDetails({ name: "", address: "", phone: "" });
        }, 1500);
    };

    const renderTabSelector = () => (
        <div className="flex overflow-x-auto py-3 mb-6 border-b border-gray-700 sticky top-0 bg-gray-900/95 backdrop-blur-md z-10 shadow-sm">
            {["details", "description", "ratings", "stores", "community", "requirements", "stats"].map((tab) => (
                <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base md:text-lg font-semibold capitalize border-b-2 transition-colors duration-200 ${activeTab === tab ? "border-indigo-500 text-indigo-400" : "border-transparent text-gray-300 hover:text-indigo-300"
                        }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {tab}
                </motion.button>
            ))}
        </div>
    );

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900/95 z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center space-y-6"
                >
                    <motion.div
                        className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg"
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaGamepad className="text-white text-3xl sm:text-4xl" />
                    </motion.div>
                    <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-300" animate={glowVariants.animate}>
                        Loading Game Details...
                    </motion.h2>
                </motion.div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-red-400 text-center text-lg sm:text-xl md:text-2xl font-semibold p-6 sm:p-8 bg-gray-800/90 rounded-2xl shadow-xl border border-red-500/40 max-w-md w-full"
                >
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Retry
                    </button>
                </motion.div>
            </div>
        );
    }

    const formattedGameName = gameNameFormatter(game?.name);

    return (
        <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white pt-6 sm:pt-8 pb-12 sm:pb-20"
        >
            {/* Sticky Header */}
            <header className="sticky top-0 z-20 bg-gray-900/90 backdrop-blur-md shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center py-4 sm:py-5">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-2xl sm:text-3xl text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                            onClick={() => window.history.back()}
                        >
                            <FaBackspace />
                        </motion.button>
                        <h1 className="flex-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 truncate px-2 sm:px-4">
                            {game?.name || "Game Title"}
                        </h1>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Column */}
                    <aside className="lg:col-span-1 space-y-6 sm:space-y-8">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-video border border-gray-700/50"
                        >
                            <Image
                                width={1920}
                                height={1080}
                                src={game?.background_image || "/placeholder.jpg"}
                                alt={game?.name || "Game Image"}
                                className="object-cover w-full h-full transition-transform duration-300"
                                quality={90}
                                priority
                            />
                            {game?.rating > 0 && (
                                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-indigo-600/90 backdrop-blur-sm text-white rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold shadow-md flex items-center">
                                    <FaStar className="text-yellow-400 mr-1" /> {game.rating.toFixed(1)}/5
                                </div>
                            )}
                        </motion.div>

                        <motion.section
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-indigo-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Quick Info</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
                            </h3>
                            <ul className="space-y-3 sm:space-y-4 text-gray-200 text-sm sm:text-base md:text-lg">
                                <li className="flex items-center space-x-3">
                                    <div className="bg-indigo-700/40 p-2 rounded-lg shadow-sm">
                                        <FaCalendarAlt className="text-indigo-400" />
                                    </div>
                                    <span>Released: {game?.released || "N/A"}</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="bg-yellow-700/40 p-2 rounded-lg shadow-sm">
                                        <FaStar className="text-yellow-400" />
                                    </div>
                                    <span>Rating: {game?.rating || 0}/5 ({game?.ratings_count || 0} votes)</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="bg-green-700/40 p-2 rounded-lg shadow-sm">
                                        <FaGamepad className="text-green-400" />
                                    </div>
                                    <span>Playtime: {game?.playtime || 0} hours</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="bg-blue-700/40 p-2 rounded-lg shadow-sm mt-1">
                                        <FaGlobe className="text-blue-400" />
                                    </div>
                                    <div className="flex-1">Website: <TruncatedLink url={game?.website} /></div>
                                </li>
                            </ul>
                        </motion.section>

                        {/* Download Buttons */}
                        <motion.section
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Downloads</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-green-500 to-transparent"></div>
                            </h3>
                            <div className="space-y-3 sm:space-y-4">
                                <motion.a
                                    href={`https://fitgirl-repacks.site/${formattedGameName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-md hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                                >
                                    <FaDownload className="text-lg sm:text-xl" />
                                    <span>Download from FitGirl</span>
                                </motion.a>
                                <motion.a
                                    href={`https://dodi-repacks.site/${formattedGameName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                                >
                                    <FaDownload className="text-lg sm:text-xl" />
                                    <span>Download from DODI</span>
                                </motion.a>
                            </div>
                        </motion.section>

                        <div className="lg:hidden">
                            <motion.button
                                variants={buttonVariants}
                                initial="initial"
                                animate={requestSent ? "success" : "initial"}
                                whileHover="hover"
                                whileTap="tap"
                                disabled={requestSent}
                                onClick={handleRequestGame}
                                className="w-full py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-md"
                            >
                                {requestSent ? (
                                    <>
                                        <FaCheckCircle className="text-lg sm:text-xl" />
                                        <span>Request Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaTruck className="text-lg sm:text-xl" />
                                        <span>Request Game Delivery</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </aside>

                    {/* Right Column */}
                    <section className="lg:col-span-2 space-y-6 sm:space-y-8">
                        <div className="block lg:hidden">{renderTabSelector()}</div>

                        {/* Game Details */}
                        <motion.article
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40 ${activeTab !== "details" && "hidden lg:block"}`}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Game Details</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
                            </h2>
                            <div className="space-y-3 sm:space-y-4 text-gray-200 text-sm sm:text-base md:text-lg">
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="min-w-[90px] sm:min-w-[110px] md:min-w-[120px] font-semibold text-gray-300">Genres:</strong>
                                    <span className="flex-1">{game?.genres?.map((g) => g.name).join(", ") || "N/A"}</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="min-w-[90px] sm:min-w-[110px] md:min-w-[120px] font-semibold text-gray-300">Developers:</strong>
                                    <span className="flex-1">{game?.developers?.map((d) => d.name).join(", ") || "N/A"}</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="min-w-[90px] sm:min-w-[110px] md:min-w-[120px] font-semibold text-gray-300">Publishers:</strong>
                                    <span className="flex-1">{game?.publishers?.map((p) => p.name).join(", ") || "N/A"}</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="min-w-[90px] sm:min-w-[110px] md:min-w-[120px] font-semibold text-gray-300">Platforms:</strong>
                                    <span className="flex-1">{game?.platforms?.map((p) => p.platform.name).join(", ") || "N/A"}</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="min-w-[90px] sm:min-w-[110px] md:min-w-[120px] font-semibold text-gray-300">ESRB Rating:</strong>
                                    <span className="flex-1">{game?.esrb_rating?.name || "N/A"}</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="min-w-[90px] sm:min-w-[110px] md:min-w-[120px] font-semibold text-gray-300">Metacritic:</strong>
                                    <span className="flex-1">{game?.metacritic ? `${game.metacritic}/100` : "N/A"}</span>
                                </p>
                            </div>
                        </motion.article>

                        {/* Description */}
                        <motion.article
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40 ${activeTab !== "description" && activeTab !== "details" && "hidden lg:block"}`}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Description</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
                            </h2>
                            <div
                                className="text-gray-200 text-sm max-sm:text-xs text-justify leading-relaxed prose prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: game?.description || "No description available." }}
                            />
                        </motion.article>

                        {/* Ratings */}
                        <motion.article
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40 ${activeTab !== "ratings" && activeTab !== "details" && "hidden lg:block"}`}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Ratings Breakdown</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-teal-500 to-transparent"></div>
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {game?.ratings?.map((r) => (
                                    <motion.div
                                        key={r.id}
                                        className="bg-gray-700/60 p-3 sm:p-4 rounded-lg shadow-sm"
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold capitalize text-gray-200">{r.title}</span>
                                            <span className="text-yellow-400 flex items-center text-sm sm:text-base">
                                                <FaStar className="mr-1" /> {r.percent.toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-600 rounded-full h-2 sm:h-3">
                                            <div
                                                className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 sm:h-3 rounded-full"
                                                style={{ width: `${r.percent}%` }}
                                            />
                                        </div>
                                        <div className="mt-2 text-xs sm:text-sm text-gray-400 text-right">{r.count} votes</div>
                                    </motion.div>
                                ))}
                            </div>
                            {game?.metacritic_platforms?.length > 0 && (
                                <div className="mt-6 sm:mt-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">Metacritic Scores</h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {game.metacritic_platforms.map((mp) => (
                                            <motion.div
                                                key={mp.platform.platform}
                                                className="bg-gray-700/60 p-3 sm:p-4 rounded-lg shadow-sm flex items-center justify-between"
                                                whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
                                            >
                                                <span className="font-semibold text-gray-200 text-sm sm:text-base">{mp.platform.name}</span>
                                                <a
                                                    href={mp.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center bg-blue-700/30 px-2 sm:px-3 py-1 rounded-full text-blue-300 text-xs sm:text-sm hover:bg-blue-700/50 transition-colors duration-200"
                                                >
                                                    <FaTrophy className="mr-1" /> {mp.metascore}/100
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.article>

                        {/* Stores */}
                        <motion.article
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40 ${activeTab !== "stores" && activeTab !== "details" && "hidden lg:block"}`}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Available Stores</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-green-500 to-transparent"></div>
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {game?.stores?.map((s) => (
                                    <motion.div
                                        key={s.id}
                                        className="bg-gray-700/60 p-3 sm:p-4 rounded-lg shadow-sm flex items-center space-x-3"
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
                                    >
                                        <div className="p-2 bg-green-700/40 rounded-lg shadow-sm">
                                            <FaStore className="text-green-400" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-200 text-sm sm:text-base">{s.store.name}</div>
                                            <div className="text-xs sm:text-sm text-gray-400">{s.store.domain}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mt-6 sm:mt-8 mb-3 sm:mb-4 flex items-center">
                                <span className="mr-2">Tags</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
                            </h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {game?.tags?.map((t) => (
                                    <motion.span
                                        key={t.id}
                                        className="px-2 sm:px-3 py-1 bg-indigo-700/80 text-white rounded-full text-xs sm:text-sm font-medium shadow-sm"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.9)" }}
                                    >
                                        <FaTag className="inline mr-1 text-xs" /> {t.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.article>

                        {/* Community & Social */}
                        <motion.article
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40 ${activeTab !== "community" && activeTab !== "details" && "hidden lg:block"}`}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Community & Social</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-red-500 to-transparent"></div>
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <motion.div
                                    className="bg-red-900/20 p-3 sm:p-4 rounded-lg shadow-sm flex items-center space-x-3"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(239, 68, 68, 0.15)" }}
                                >
                                    <div className="p-2 bg-red-700/40 rounded-lg shadow-sm">
                                        <FaReddit className="text-red-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-200 text-sm sm:text-base">Reddit</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">{game?.reddit_count || 0} posts</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="bg-purple-900/20 p-3 sm:p-4 rounded-lg shadow-sm flex items-center space-x-3"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(168, 85, 247, 0.15)" }}
                                >
                                    <div className="p-2 bg-purple-700/40 rounded-lg shadow-sm">
                                        <FaTwitch className="text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-200 text-sm sm:text-base">Twitch</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">{game?.twitch_count || 0} streams</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="bg-red-900/20 p-3 sm:p-4 rounded-lg shadow-sm flex items-center space-x-3"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(239, 68, 68, 0.15)" }}
                                >
                                    <div className="p-2 bg-red-700/40 rounded-lg shadow-sm">
                                        <FaYoutube className="text-red-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-200 text-sm sm:text-base">YouTube</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">{game?.youtube_count || 0} videos</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.article>

                        {/* System Requirements */}
                        <motion.article
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40 ${activeTab !== "requirements" && activeTab !== "details" && "hidden lg:block"}`}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">System Requirements</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-yellow-500 to-transparent"></div>
                            </h2>
                            <div className="space-y-6 sm:space-y-8">
                                {game?.platforms?.map((p) =>
                                    p.requirements.minimum || p.requirements.recommended ? (
                                        <div key={p.platform.id}>
                                            <div className="flex items-center mb-3 sm:mb-4">
                                                <FaWindows className="text-blue-400 mr-2 sm:mr-3 text-lg sm:text-xl" />
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200">{p.platform.name}</h3>
                                            </div>
                                            {p.requirements.minimum && (
                                                <SystemRequirementsSection title="Minimum Requirements" requirements={p.requirements.minimum} />
                                            )}
                                            {p.requirements.recommended && (
                                                <SystemRequirementsSection title="Recommended Requirements" requirements={p.requirements.recommended} />
                                            )}
                                        </div>
                                    ) : null
                                ) || <p className="text-gray-400 text-sm sm:text-base">No system requirements available.</p>}
                            </div>
                        </motion.article>

                        {/* Stats */}
                        <motion.article
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-md border border-gray-700/40 ${activeTab !== "stats" && activeTab !== "details" && "hidden lg:block"}`}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4 sm:mb-5 flex items-center">
                                <span className="mr-2">Game Stats</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-pink-500 to-transparent"></div>
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <motion.div
                                    className="bg-gray-700/60 p-3 sm:p-4 rounded-lg shadow-sm flex items-center space-x-3"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
                                >
                                    <div className="p-2 bg-pink-700/40 rounded-lg shadow-sm">
                                        <FaUsers className="text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-200 text-sm sm:text-base">Added By</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">{game?.added_by_status?.owned || 0} users</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="bg-gray-700/60 p-3 sm:p-4 rounded-lg shadow-sm flex items-center space-x-3"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
                                >
                                    <div className="p-2 bg-pink-700/40 rounded-lg shadow-sm">
                                        <FaTrophy className="text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-200 text-sm sm:text-base">Achievements</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">{game?.achievements_count || 0}</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="bg-gray-700/60 p-3 sm:p-4 rounded-lg shadow-sm flex items-center space-x-3"
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
                                >
                                    <div className="p-2 bg-pink-700/40 rounded-lg shadow-sm">
                                        <FaCode className="text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-200 text-sm sm:text-base">Developers</div>
                                        <div className="text-gray-300 text-xs sm:text-sm">{game?.developers?.length || 0}</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.article>

                        {/* Desktop Request Button */}
                        <div className="hidden lg:block">
                            <motion.button
                                variants={buttonVariants}
                                initial="initial"
                                animate={requestSent ? "success" : "initial"}
                                whileHover="hover"
                                whileTap="tap"
                                disabled={requestSent}
                                onClick={handleRequestGame}
                                className="w-full py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-md hover:from-teal-600 hover:to-cyan-600 transition-all duration-300"
                            >
                                {requestSent ? (
                                    <>
                                        <FaCheckCircle className="text-lg sm:text-xl" />
                                        <span>Request Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaTruck className="text-lg sm:text-xl" />
                                        <span>Request Game Delivery</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </section>
                </div>
            </main>

            {/* Request Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-800/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl border border-gray-700/50"
                        >
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-400 mb-4 sm:mb-6 flex items-center justify-between">
                                <span>Request Game Delivery</span>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                                >
                                    <FaBackspace className="text-lg sm:text-xl" />
                                </motion.button>
                            </h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <label className="block text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={userDetails.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/70 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base font-medium">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={userDetails.address}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/70 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                        placeholder="Enter delivery address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={userDetails.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/70 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                                <div className="flex gap-3 sm:gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 py-2 sm:py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm sm:text-base font-medium shadow-sm"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSubmitRequest}
                                        className="flex-1 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm sm:text-base font-medium shadow-sm"
                                    >
                                        Submit
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default GameDetailPage;