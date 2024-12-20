"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBackspace } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


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

    if (loading) return <div className="text-white text-center">Loading...</div>;
    if (error) return <div className="text-white text-center">{error}</div>;

    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center mb-8 max-sm:mb-3 py-4 max-sm:py-1">
                    <FaBackspace className="w-10 text-white text-4xl cursor-pointer max-sm:text-2xl" onClick={() => window.history.back()} />
                    <div className="flex justify-center flex-1">
                        <h1 className="text-4xl text-white text-center py-4 font-bold max-sm:text-xl">{game.name}</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Column - Image and Video */}
                    <div className="flex justify-center">
                        <Image
                            width={1920}
                            height={1080}
                            src={game.background_image}
                            alt={game.name}
                            className="rounded-lg shadow-lg w-full max-w-lg"
                        />
                    </div>

                    {/* Right Column - Game Details */}
                    <div className="text-white">
                        <h2 className="text-2xl font-semibold mb-4">Game Details</h2>
                        <p><strong>Genres: </strong>{game.genres.map((genre) => genre.name).join(", ")}</p>
                        <p><strong>Developers/Company: </strong>{game.developers.map((developer) => developer.name).join(", ")}</p>
                        <p><strong>Original Size: </strong>{game.size || "N/A"}</p>
                        <p><strong>Repack Size: </strong>{game.repack_size || "N/A"}</p>


                        {/* Download Links Section */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2">Download Links:</h3>
                            <div className="flex gap-4">
                                <Link
                                    href={`https://fitgirl-repacks.site/${game.name}`.replace(/ /g, "-").toLowerCase() || "/"}
                                    className="px-6 py-3 max-sm:px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                    target="_blank"
                                >
                                    Fitgirl-Repacks
                                </Link>
                                <Link
                                    href={`https://dodi-repacks.site/${game.name}`.replace(/ /g, "-").toLowerCase() || "/"}
                                    className="px-6 py-3 max-sm:px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                                    target="_blank"
                                >
                                    DODI-Repacks
                                </Link>
                            </div>
                        </div>

                        {/* Trailer Section */}
                        {game.clip && (
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold mb-2">Game Trailer</h3>
                                <video
                                    controls
                                    className="rounded-lg shadow-lg w-full"
                                    src={game.clip.clip}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-6">
                    <h2 className="text-white text-2xl font-semibold mb-4">Description</h2>
                    <p className="text-white max-sm:text-sm max-sm:text-justify">{game.description_raw || "No description available."}</p>
                </div>

                {/* Additional Details Section */}
                <div className="mt-10 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Additional Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Release Date</h3>
                            <p>{game.released || "N/A"}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Platforms</h3>
                            <p>{game.platforms.map((platform) => platform.platform.name).join(", ")}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Metacritic Score</h3>
                            <p>{game.metacritic ? game.metacritic : "No score available"}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">User Rating</h3>
                            <p>{game.rating ? game.rating : "No rating available"}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">System Requirements</h3>
                    {game.system_requirements ? (
                        <div>
                            <h4 className="font-semibold text-lg">Minimum Requirements:</h4>
                            <ul className="list-disc pl-5">
                                <li><strong>OS:</strong> {game.system_requirements.minimum.os}</li>
                                <li><strong>Processor:</strong> {game.system_requirements.minimum.processor}</li>
                                <li><strong>Memory:</strong> {game.system_requirements.minimum.memory}</li>
                                <li><strong>Graphics:</strong> {game.system_requirements.minimum.graphics}</li>
                                <li><strong>Storage:</strong> {game.system_requirements.minimum.storage}</li>
                            </ul>

                            <h4 className="font-semibold text-lg mt-4">Recommended Requirements:</h4>
                            <ul className="list-disc pl-5">
                                <li><strong>OS:</strong> {game.system_requirements.recommended.os}</li>
                                <li><strong>Processor:</strong> {game.system_requirements.recommended.processor}</li>
                                <li><strong>Memory:</strong> {game.system_requirements.recommended.memory}</li>
                                <li><strong>Graphics:</strong> {game.system_requirements.recommended.graphics}</li>
                                <li><strong>Storage:</strong> {game.system_requirements.recommended.storage}</li>
                            </ul>
                        </div>
                    ) : (
                        <p>No system requirements available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameDetailPage;