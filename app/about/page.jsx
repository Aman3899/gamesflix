"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
    FaUsers,
    FaCode,
    FaLightbulb,
    FaRocket,
    FaBookOpen,
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
        },
    };

    const glowVariants = {
        hover: {
            boxShadow: "0 0 20px rgba(79, 70, 229, 0.7), 0 0 40px rgba(79, 70, 229, 0.3)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <>
            <Navbar heading="About Nexus" />
            <motion.div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden pt-28"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
            >
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

                <motion.div
                    className="max-w-5xl mx-auto relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Introduction */}
                    <motion.div className="text-center mb-12" variants={itemVariants}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text-glow">
                            About Us
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
                            We are a collective of visionary gamers and coders forging a digital realm where innovation meets passion.
                            Dive into our mission, ethos, and the minds driving this futuristic frontier.
                        </p>
                    </motion.div>

                    {/* Our Mission */}
                    <motion.div
                        className="bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-8 border border-indigo-500/50"
                        variants={itemVariants}
                    >
                        <div className="flex items-center mb-4">
                            <FaRocket className="text-3xl sm:text-4xl mr-3 text-pink-400 animate-pulse-slow" />
                            <h2 className="text-3xl sm:text-4xl font-semibold text-pink-300">Our Mission</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                            To unite the global gaming network, delivering a cutting-edge platform for exploration, connection, and epic digital experiences.
                        </p>
                    </motion.div>

                    {/* Our Values */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="bg-gray-800/90 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-indigo-500/50"
                            variants={itemVariants}
                            whileHover={glowVariants.hover}
                        >
                            <FaUsers className="text-2xl sm:text-3xl mb-3 text-purple-400 animate-pulse-slow" />
                            <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">Community</h3>
                            <p className="text-gray-300 text-sm sm:text-base">
                                We harness the energy of collective unity, crafting a vibrant, inclusive hub for all galactic gamers.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800/90 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-indigo-500/50"
                            variants={itemVariants}
                            whileHover={glowVariants.hover}
                        >
                            <FaCode className="text-2xl sm:text-3xl mb-3 text-blue-400 animate-pulse-slow" />
                            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-2">Innovation</h3>
                            <p className="text-gray-300 text-sm sm:text-base">
                                We pioneer the future, weaving advanced tech into the fabric of gaming evolution.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800/90 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-indigo-500/50"
                            variants={itemVariants}
                            whileHover={glowVariants.hover}
                        >
                            <FaLightbulb className="text-2xl sm:text-3xl mb-3 text-yellow-400 animate-pulse-slow" />
                            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-2">Creativity</h3>
                            <p className="text-gray-300 text-sm sm:text-base">
                                We ignite imagination, celebrating boundless creativity across code and cosmos.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Our Team */}
                    <motion.div className="mb-12" variants={itemVariants}>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6 bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text-glow">
                            Meet The Architects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <Image
                                    src="/mypics/MyImage.webp"
                                    alt="AmanUllah"
                                    width={144}
                                    height={144}
                                    className="w-36 h-36 rounded-full mx-auto mb-4 shadow-lg border-2 border-indigo-500/50"
                                />
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">AmanUllah</h3>
                                <p className="text-gray-400 text-sm sm:text-base">Core Commander & Visionary</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <Image
                                    src="/mypics/MyImage.webp"
                                    alt="AmanUllah"
                                    width={144}
                                    height={144}
                                    className="w-36 h-36 rounded-full mx-auto mb-4 shadow-lg border-2 border-indigo-500/50"
                                />
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">AmanUllah</h3>
                                <p className="text-gray-400 text-sm sm:text-base">Chief Code Weaver</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <Image
                                    src="/mypics/MyImage.webp"
                                    alt="AmanUllah"
                                    width={144}
                                    height={144}
                                    className="w-36 h-36 rounded-full mx-auto mb-4 shadow-lg border-2 border-indigo-500/50"
                                />
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">AmanUllah</h3>
                                <p className="text-gray-400 text-sm sm:text-base">Network Navigator</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Our Story */}
                    <motion.div
                        className="bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-8 border border-indigo-500/50"
                        variants={itemVariants}
                    >
                        <div className="flex items-center mb-4">
                            <FaBookOpen className="text-3xl sm:text-4xl mr-3 text-blue-400 animate-pulse-slow" />
                            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-300">Our Chronicle</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                            Initiated in 2024 by a cadre of gaming pioneers, we embarked on a quest to forge a digital nexus—bridging players across galaxies with tools to connect, challenge, and craft legendary tales.
                        </p>
                    </motion.div>

                    {/* Connect With Us */}
                    <motion.div className="text-center" variants={itemVariants}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text-glow">
                            Link to the Network
                        </h2>
                        <div className="flex justify-center space-x-6">
                            <motion.a
                                href="https://github.com/aman3899"
                                whileHover={{ scale: 1.2, rotate: 10, color: "#a5b4fc" }}
                                className="text-indigo-400 text-3xl sm:text-4xl transition-colors duration-300"
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/amanullah0"
                                whileHover={{ scale: 1.2, rotate: 10, color: "#a5b4fc" }}
                                className="text-indigo-400 text-3xl sm:text-4xl transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href="mailto:m.amanullah0830@gmail.com"
                                whileHover={{ scale: 1.2, rotate: 10, color: "#a5b4fc" }}
                                className="text-indigo-400 text-3xl sm:text-4xl transition-colors duration-300"
                            >
                                <FaEnvelope />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default AboutPage;