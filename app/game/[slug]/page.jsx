"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBackspace, FaCheckCircle, FaExclamationTriangle, FaGlobe, FaCalendarAlt, FaGamepad, FaStar } from "react-icons/fa"; // More Icons
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
                            key: "bb957792ca944879b0eb28b31ed414ef", // RAWG API key
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

    if (loading) return <div className="text-white text-center text-2xl py-20">Loading...</div>;
    if (error) return <div className="text-red-500 text-center text-2xl py-20">{error}</div>;

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeInOut" } },
    };

    const SystemRequirementItem = ({ icon, children }) => (
        <li className="flex items-center space-x-2">
            {icon}
            <span>{children}</span>
        </li>
    );

    return (
        <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="bg-gray-900 min-h-screen py-12 text-white"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Back Button and Title */}
                <div className="flex items-center mb-10 max-sm:mb-5 py-4 max-sm:py-2">
                    <FaBackspace
                        className="w-12 text-white text-4xl cursor-pointer hover:text-gray-400 transition-colors duration-200 max-sm:text-3xl"
                        onClick={() => window.history.back()}
                    />
                    <div className="flex justify-center flex-1">
                        <h1 className="text-5xl text-center font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-4 max-sm:text-3xl">
                            {game.name}
                        </h1>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column - Image */}
                    <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            width={1920}
                            height={1080}
                            src={game.background_image}
                            alt={game.name}
                            className="rounded-3xl shadow-2xl object-cover w-full max-w-lg"
                        />
                    </motion.div>

                    {/* Right Column - Game Details */}
                    <div>
                        <div className="bg-gray-800 rounded-3xl shadow-xl p-8">
                            <h2 className="text-3xl font-semibold mb-6 text-blue-300">Game Details</h2>
                            <div className="space-y-3">
                                <p>
                                    <strong className="text-gray-300">Genres: </strong>
                                    {game.genres.map((genre) => genre.name).join(", ") || "N/A"}
                                </p>
                                <p>
                                    <strong className="text-gray-300">Developers/Company: </strong>
                                    {game.developers.map((developer) => developer.name).join(", ") || "N/A"}
                                </p>
                                <p>
                                    <strong className="text-gray-300">Original Size: </strong>
                                    {game.size || "N/A"}
                                </p>
                                <p>
                                    <strong className="text-gray-300">Repack Size: </strong>
                                    {game.repack_size || "N/A"}
                                </p>

                                {/* Download Links Section */}
                                <div className="mt-8">
                                    <h3 className="text-2xl font-semibold mb-4 text-green-300">Download Links:</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            href={`https://fitgirl-repacks.site/${game.name}`.replace(/ /g, "-").toLowerCase() || "/"}
                                            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-md transition duration-300"
                                            target="_blank"
                                        >
                                            Fitgirl-Repacks
                                        </Link>
                                        <Link
                                            href={`https://dodi-repacks.site/${game.name}`.replace(/ /g, "-").toLowerCase() || "/"}
                                            className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-md transition duration-300"
                                            target="_blank"
                                        >
                                            DODI-Repacks
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Game Trailer (conditionally rendered) */}
                {game.clip && (
                    <div className="mt-12">
                        <h3 className="text-3xl font-semibold mb-6 text-yellow-300">Game Trailer</h3>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <video controls className="w-full" src={game.clip.clip} />
                        </motion.div>
                    </div>
                )}

                {/* Description Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold mb-6 text-purple-300">Description</h2>
                    <div className="bg-gray-800 rounded-3xl shadow-xl p-8">
                        <p className="text-lg text-gray-300 leading-relaxed max-sm:text-xs max-sm:text-justify">{game.description_raw || "No description available."}</p>
                    </div>
                </div>

                {/* Detailed Game Information Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-300">More About {game.name}</h2>
                    <div className="bg-gray-800 rounded-3xl shadow-xl p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-xl font-semibold mb-4">General Information</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center space-x-2">
                                        <FaGlobe /> <span>Website: {game.website ? <a href={game.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{game.website}</a> : "N/A"}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <FaCalendarAlt /> <span>Release Date: {game.released || "N/A"}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <FaGamepad /> <span>Playtime: {game.playtime || "N/A"} hours</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-4">User Ratings</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center space-x-2">
                                        <FaStar className="text-yellow-400" /> <span>Metacritic: {game.metacritic ? `${game.metacritic}/100` : "N/A"}</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span>RAWG Rating: {game.rating ? `${game.rating.toFixed(2)} / 5` : "N/A"} (from {game.ratings_count} votes)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Requirements Section */}
                {game.system_requirements && (
                    <div className="mt-12">
                        <h3 className="text-3xl font-semibold mb-6 text-orange-300">System Requirements</h3>
                        <div className="bg-gray-800 rounded-3xl shadow-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6">
                                    <h4 className="font-semibold text-2xl mb-4 text-orange-200">Minimum Requirements</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>OS:</strong> {game.system_requirements.minimum.os || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Processor:</strong> {game.system_requirements.minimum.processor || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Memory:</strong> {game.system_requirements.minimum.memory || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Graphics:</strong> {game.system_requirements.minimum.graphics || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Storage:</strong> {game.system_requirements.minimum.storage || "N/A"}
                                        </SystemRequirementItem>
                                    </ul>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-semibold text-2xl mb-4 text-orange-200">Recommended Requirements</h4>
                                    <ul className="space-y-2 text-gray-300">
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>OS:</strong> {game.system_requirements.recommended.os || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Processor:</strong> {game.system_requirements.recommended.processor || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Memory:</strong> {game.system_requirements.recommended.memory || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Graphics:</strong> {game.system_requirements.recommended.graphics || "N/A"}
                                        </SystemRequirementItem>
                                        <SystemRequirementItem icon={<FaCheckCircle className="text-green-500" />}>
                                            <strong>Storage:</strong> {game.system_requirements.recommended.storage || "N/A"}
                                        </SystemRequirementItem>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Additional Details Section - Restructured */}
                <div className="mt-12">
                    <h2 className="text-3xl font-semibold mb-6 text-red-300">Additional Information</h2>
                    <div className="bg-gray-800 rounded-3xl shadow-xl p-8">
                        {/* Example - More detailed information can be added here, based on available API data */}
                        <p className="text-lg text-gray-300">
                            This section could include more details about the game&apos;s plot, characters, gameplay mechanics,
                            or any awards it has received.  The RAWG API might provide more specific data points to populate this section.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default GameDetailPage;