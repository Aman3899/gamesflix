"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    FaTruck,
    FaCheckCircle,
    FaExternalLinkAlt,
    FaChevronDown,
    FaChevronUp,
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

// Truncatable Link Component
const TruncatedLink = ({ url, maxLength = 25 }) => {
    const [expanded, setExpanded] = useState(false);

    if (!url) return <span>N/A</span>;

    const displayUrl = expanded
        ? url
        : url.length > maxLength
            ? `${url.substring(0, maxLength)}...`
            : url;

    return (
        <div className="flex items-center space-x-1 group">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline truncate max-w-xs sm:max-w-sm"
            >
                {displayUrl}
            </a>
            {url.length > maxLength && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    {expanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                </button>
            )}
            <FaExternalLinkAlt className="text-indigo-400 text-xs" />
        </div>
    );
};

const GameDetailPage = ({ params }) => {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = params.slug;
    const [showModal, setShowModal] = useState(false);
    const [requestSent, setRequestSent] = useState(false);
    const [userDetails, setUserDetails] = useState({ name: "", address: "", phone: "" });
    const [activeTab, setActiveTab] = useState("details");

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

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [showModal]);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeInOut" } },
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

    const modalVariants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.03, transition: { duration: 0.3 } },
        loading: { scale: 0.95, opacity: 0.7, transition: { duration: 0.3 } },
        success: {
            scale: 1.1,
            opacity: 1,
            backgroundColor: "#4ade80",
            color: "#1e293b",
            transition: { duration: 0.5, ease: "easeOut" },
        },
        disabled: { opacity: 0.5, cursor: "not-allowed" },
    };

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
            transition: { duration: 0.3 },
        },
    };

    const tabVariants = {
        inactive: { opacity: 0.7, y: 0 },
        active: {
            opacity: 1,
            y: 0,
            color: "#a5b4fc",
            borderColor: "#818cf8",
            transition: { duration: 0.3 },
        },
        hover: { y: -2, transition: { duration: 0.2 } },
    };

    const handleRequestGame = () => {
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmitRequest = () => {
        if (!userDetails.name || !userDetails.address || !userDetails.phone) {
            alert("Please fill in all details.");
            return;
        }
        setTimeout(() => {
            setShowModal(false);
            setRequestSent(true);
            setUserDetails({ name: "", address: "", phone: "" });
        }, 1500);
    };

    const renderTabSelector = () => (
        <div className="flex overflow-x-auto py-2 mb-6 scrollbar-hide border-b border-gray-700 sticky top-0 bg-gray-900/90 backdrop-blur-md z-10">
            {["details", "description", "ratings", "stores", "community", "requirements", "stats"].map(
                (tab) => (
                    <motion.button
                        key={tab}
                        variants={tabVariants}
                        initial="inactive"
                        animate={activeTab === tab ? "active" : "inactive"}
                        whileHover="hover"
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 whitespace-nowrap capitalize font-medium border-b-2 ${activeTab === tab ? "border-indigo-400" : "border-transparent"
                            }`}
                    >
                        {tab}
                    </motion.button>
                )
            )}
        </div>
    );

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
                            boxShadow: [
                                "0 0 10px rgba(99, 102, 241, 0.5)",
                                "0 0 25px rgba(99, 102, 241, 0.8)",
                                "0 0 10px rgba(99, 102, 241, 0.5)",
                            ],
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
            <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
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
        <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white pt-8"
        >
            {/* Sticky header */}
            <div className="sticky top-0 z-20 bg-gray-900/80 backdrop-blur-md shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center py-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-3xl text-indigo-400 cursor-pointer hover:text-indigo-500 transition-colors duration-200"
                            onClick={() => window.history.back()}
                        >
                            <FaBackspace />
                        </motion.button>
                        <h1 className="flex-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 truncate px-2">
                            {game.name}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column - Image and Quick Info */}
                    <div className="lg:col-span-1">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video"
                        >
                            <Image
                                width={1920}
                                height={1080}
                                src={game.background_image}
                                alt={game.name}
                                className="object-cover w-full h-full"
                                quality={85}
                            />
                            {game.rating > 0 && (
                                <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg flex items-center">
                                    <FaStar className="text-yellow-400 mr-1" /> {game.rating}/5
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="mt-6 bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50"
                        >
                            <h3 className="text-2xl font-semibold text-indigo-400 mb-4 flex items-center">
                                <span className="mr-2">Quick Info</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center space-x-3">
                                    <div className="bg-indigo-600/30 p-2 rounded-lg">
                                        <FaCalendarAlt className="text-indigo-400" />
                                    </div>
                                    <span>Released: {game.released || "N/A"}</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="bg-yellow-600/30 p-2 rounded-lg">
                                        <FaStar className="text-yellow-400" />
                                    </div>
                                    <span>
                                        Rating: {game.rating}/5 ({game.ratings_count} votes)
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="bg-green-600/30 p-2 rounded-lg">
                                        <FaGamepad className="text-green-400" />
                                    </div>
                                    <span>Playtime: {game.playtime} hours</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="bg-blue-600/30 p-2 rounded-lg mt-1">
                                        <FaGlobe className="text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <span>Website: </span>
                                        {game.website ? <TruncatedLink url={game.website} /> : "N/A"}
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <div className="mt-6 lg:hidden">
                            <motion.button
                                variants={buttonVariants}
                                initial="initial"
                                animate={requestSent ? "success" : "initial"}
                                whileHover="hover"
                                disabled={requestSent}
                                onClick={handleRequestGame}
                                className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-xl shadow-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                {requestSent ? (
                                    <>
                                        <FaCheckCircle className="text-xl" />
                                        <span>Request Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaTruck className="text-xl" />
                                        <span>Request Game Delivery</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>

                    {/* Right column with tabs */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="block lg:hidden">{renderTabSelector()}</div>

                        {/* Game Details */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-indigo-400 mb-4 flex items-center">
                                <span className="mr-2">Game Details</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
                            </h2>
                            <div className="space-y-3 text-gray-300">
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="inline-block min-w-20">Genres:</strong>
                                    <span className="flex-1">{game.genres.map((g) => g.name).join(", ") || "N/A"}</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="inline-block min-w-20">Developers:</strong>
                                    <span className="flex-1">
                                        {game.developers.map((d) => d.name).join(", ") || "N/A"}
                                    </span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="inline-block min-w-20">Publishers:</strong>
                                    <span className="flex-1">
                                        {game.publishers.map((p) => p.name).join(", ") || "N/A"}
                                    </span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="inline-block min-w-20">Platforms:</strong>
                                    <span className="flex-1">
                                        {game.platforms.map((p) => p.platform.name).join(", ") || "N/A"}
                                    </span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="inline-block min-w-20">ESRB Rating:</strong>
                                    <span className="flex-1">{game.esrb_rating?.name || "N/A"}</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <strong className="inline-block min-w-20">Metacritic:</strong>
                                    <span className="flex-1">
                                        {game.metacritic ? `${game.metacritic}/100` : "N/A"}
                                    </span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "description" && activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-purple-400 mb-4 flex items-center">
                                <span className="mr-2">Description</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
                            </h2>
                            <div
                                className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: game.description }}
                            />
                        </motion.div>

                        {/* Ratings */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "ratings" && activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-teal-400 mb-4 flex items-center">
                                <span className="mr-2">Ratings Breakdown</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-teal-500 to-transparent"></div>
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {game.ratings.map((r) => (
                                    <motion.div
                                        key={r.id}
                                        className="bg-gray-700/50 p-4 rounded-lg"
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.7)" }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium capitalize">{r.title}</span>
                                            <span className="text-yellow-400 flex items-center">
                                                <FaStar className="mr-1" /> {r.percent.toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-600 rounded-full h-2.5">
                                            <div
                                                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2.5 rounded-full"
                                                style={{ width: `${r.percent}%` }}
                                            ></div>
                                        </div>
                                        <div className="mt-1 text-xs text-gray-400 text-right">{r.count} votes</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Metacritic Scores */}
                        {game.metacritic_platforms && game.metacritic_platforms.length > 0 && (
                            <motion.div
                                variants={cardVariants}
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                                className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "ratings" && activeTab !== "details" && "hidden lg:block"
                                    }`}
                            >
                                <h2 className="text-3xl font-semibold text-blue-400 mb-4 flex items-center">
                                    <span className="mr-2">Metacritic Scores</span>
                                    <div className="flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {game.metacritic_platforms.map((mp) => (
                                        <motion.div
                                            key={mp.platform.platform}
                                            className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between"
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.7)" }}
                                        >
                                            <span className="font-medium">{mp.platform.name}</span>
                                            <a
                                                href={mp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center bg-yellow-600/20 px-3 py-1 rounded-full text-yellow-400"
                                            >
                                                <FaTrophy className="mr-1" /> {mp.metascore}/100
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Stores */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "stores" && activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-green-400 mb-4 flex items-center">
                                <span className="mr-2">Available Stores</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-green-500 to-transparent"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {game.stores.map((s) => (
                                    <motion.div
                                        key={s.id}
                                        className="bg-gray-700/50 p-4 rounded-lg flex items-center space-x-3"
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(75, 85, 99, 0.7)" }}
                                    >
                                        <div className="p-2 bg-green-600/30 rounded-lg">
                                            <FaStore className="text-green-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium">{s.store.name}</div>
                                            <div className="text-xs text-gray-400">{s.store.domain}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tags */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "stores" && activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-orange-400 mb-4 flex items-center">
                                <span className="mr-2">Tags</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {game.tags.map((t) => (
                                    <motion.span
                                        key={t.id}
                                        className="px-3 py-1 bg-indigo-600/80 text-white rounded-full text-sm shadow-md hover:bg-indigo-700 transition duration-200 flex items-center"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.9)" }}
                                    >
                                        <FaTag className="mr-1 text-xs" /> {t.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Community & Social */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "community" && activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-red-400 mb-4 flex items-center">
                                <span className="mr-2">Community & Social</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-red-500 to-transparent"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <motion.div
                                    className="bg-red-900/20 p-4 rounded-lg flex items-center space-x-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="p-2 bg-red-600/30 rounded-lg">
                                        <FaReddit className="text-red-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Reddit</div>
                                        <div className="text-gray-300">{game.reddit_count || 0} posts</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-purple-900/20 p-4 rounded-lg flex items-center space-x-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="p-2 bg-purple-600/30 rounded-lg">
                                        <FaTwitch className="text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Twitch</div>
                                        <div className="text-gray-300">{game.twitch_count || 0} streams</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-red-900/20 p-4 rounded-lg flex items-center space-x-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="p-2 bg-red-600/30 rounded-lg">
                                        <FaYoutube className="text-red-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">YouTube</div>
                                        <div className="text-gray-300">{game.youtube_count || 0} videos</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* System Requirements */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "requirements" && activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-yellow-400 mb-4 flex items-center">
                                <span className="mr-2">System Requirements</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-yellow-500 to-transparent"></div>
                            </h2>
                            <div className="space-y-6">
                                {game.platforms.map((p) =>
                                    p.requirements.minimum || p.requirements.recommended ? (
                                        <div key={p.platform.id}>
                                            <div className="flex items-center mb-3">
                                                <FaWindows className="text-blue-400 mr-2" />
                                                <h3 className="text-xl font-medium text-gray-200">{p.platform.name}</h3>
                                            </div>
                                            {p.requirements.minimum && (
                                                <SystemRequirementsSection
                                                    title="Minimum Requirements"
                                                    requirements={p.requirements.minimum}
                                                />
                                            )}
                                            {p.requirements.recommended && (
                                                <SystemRequirementsSection
                                                    title="Recommended Requirements"
                                                    requirements={p.requirements.recommended}
                                                />
                                            )}
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className={`bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50 ${activeTab !== "stats" && activeTab !== "details" && "hidden lg:block"
                                }`}
                        >
                            <h2 className="text-3xl font-semibold text-pink-400 mb-4 flex items-center">
                                <span className="mr-2">Game Stats</span>
                                <div className="flex-grow h-px bg-gradient-to-r from-pink-500 to-transparent"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <motion.div
                                    className="bg-gray-700/50 p-4 rounded-lg flex items-center space-x-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="p-2 bg-pink-600/30 rounded-lg">
                                        <FaUsers className="text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Added By</div>
                                        <div className="text-gray-300">{game.added_by_status?.owned || 0} users</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="bg-gray-700/50 p-4 rounded-lg flex items-center space-x-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="p-2 bg-pink-600/30 rounded-lg">
                                        <FaTrophy className="text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Achievements</div>
                                        <div className="text-gray-300">{game.achievements_count || 0}</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="bg-gray-700/50 p-4 rounded-lg flex items-center space-x-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="p-2 bg-pink-600/30 rounded-lg">
                                        <FaCode className="text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Developers</div>
                                        <div className="text-gray-300">{game.developers.length || 0}</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Request Game Button for Desktop */}
                        <div className="hidden lg:block mt-6">
                            <motion.button
                                variants={buttonVariants}
                                initial="initial"
                                animate={requestSent ? "success" : "initial"}
                                whileHover="hover"
                                disabled={requestSent}
                                onClick={handleRequestGame}
                                className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-xl shadow-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                {requestSent ? (
                                    <>
                                        <FaCheckCircle className="text-xl" />
                                        <span>Request Sent!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaTruck className="text-xl" />
                                        <span>Request Game Delivery</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Request Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl border border-gray-700/50"
                        >
                            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Request Game Delivery</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={userDetails.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-1">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={userDetails.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        placeholder="Delivery Address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={userDetails.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSubmitRequest}
                                        className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
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