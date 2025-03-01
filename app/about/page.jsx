"use client";
import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import {
    FaUsers, FaCode, FaLightbulb, FaHeart, FaRocket, FaBookOpen,
    FaGithub, FaLinkedin, FaEnvelope
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" }
        }
    };

    return (
        <>
            <Navbar />
            <motion.div
                className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-16 px-6 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
            >
                {/* Background circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-1/4 right-0 w-52 h-52 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <motion.div
                    className="max-w-5xl mx-auto relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Introduction */}
                    <motion.div className="text-center mb-12" variants={itemVariants}>
                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                            About Us
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We are a team of passionate gamers and developers dedicated to creating amazing experiences.
                            Learn more about our mission, values, and the people behind the magic.
                        </p>
                    </motion.div>

                    {/* Our Mission */}
                    <motion.div className="bg-gradient-to-br from-gray-800/80 to-black/80 rounded-2xl shadow-2xl p-8 mb-8 backdrop-blur-sm border border-gray-700/50" variants={itemVariants}>
                        <div className="flex items-center mb-4">
                            <FaRocket className="text-3xl mr-3 text-pink-400" />
                            <h2 className="text-3xl font-semibold text-pink-300">Our Mission</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Our mission is to connect gamers around the world and provide them with the ultimate platform for discovery,
                            community, and unforgettable gaming moments.
                        </p>
                    </motion.div>

                    {/* Our Values */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" variants={containerVariants}>
                        <motion.div className="bg-gradient-to-br from-gray-800/80 to-black/80 rounded-xl shadow-xl p-6 backdrop-blur-sm border border-gray-700/50" variants={itemVariants}>
                            <FaUsers className="text-2xl mb-3 text-purple-400" />
                            <h3 className="text-xl font-semibold text-purple-300 mb-2">Community</h3>
                            <p className="text-gray-300">We believe in the power of community and strive to create a welcoming and inclusive environment for all gamers.</p>
                        </motion.div>
                        <motion.div className="bg-gradient-to-br from-gray-800/80 to-black/80 rounded-xl shadow-xl p-6 backdrop-blur-sm border border-gray-700/50" variants={itemVariants}>
                            <FaCode className="text-2xl mb-3 text-blue-400" />
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">Innovation</h3>
                            <p className="text-gray-300">We are constantly exploring new technologies and ideas to push the boundaries of what&apos;s possible in gaming.</p>
                        </motion.div>
                        <motion.div className="bg-gradient-to-br from-gray-800/80 to-black/80 rounded-xl shadow-xl p-6 backdrop-blur-sm border border-gray-700/50" variants={itemVariants}>
                            <FaLightbulb className="text-2xl mb-3 text-yellow-400" />
                            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Creativity</h3>
                            <p className="text-gray-300">We celebrate creativity in all its forms, from game development to content creation and beyond.</p>
                        </motion.div>
                    </motion.div>

                    {/* Our Team */}
                    <motion.div className="mb-12" variants={itemVariants}>
                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-center mb-6">
                            Meet The Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <motion.div className="text-center" variants={itemVariants}>
                                <Image src="/mypics/MyImage.webp" alt="Team Member" width={100} height={100} className="w-36 h-36 rounded-full mx-auto mb-4 shadow-lg" />
                                <h3 className="text-xl font-semibold text-white">AmanUllah</h3>
                                <p className="text-gray-400">CEO & Founder</p>
                            </motion.div>
                            {/* Team Member 2 */}
                            <motion.div className="text-center" variants={itemVariants}><Image src="/mypics/MyImage.webp" alt="Team Member" width={100} height={100} className="w-36 h-36 rounded-full mx-auto mb-4 shadow-lg" />
                                <h3 className="text-xl font-semibold text-white">AmanUllah</h3>
                                <p className="text-gray-400">Lead Developer</p>
                            </motion.div>
                            {/* Team Member 3 */}
                            <motion.div className="text-center" variants={itemVariants}><Image src="/mypics/MyImage.webp" alt="Team Member" width={100} height={100} className="w-36 h-36 rounded-full mx-auto mb-4 shadow-lg" />
                                <h3 className="text-xl font-semibold text-white">AmanUllah</h3>
                                <p className="text-gray-400">Community Manager</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Our Story */}
                    <motion.div className="bg-gradient-to-br from-gray-800/80 to-black/80 rounded-2xl shadow-2xl p-8 mb-8 backdrop-blur-sm border border-gray-700/50" variants={itemVariants}>
                        <div className="flex items-center mb-4">
                            <FaBookOpen className="text-3xl mr-3 text-blue-400" />
                            <h2 className="text-3xl font-semibold text-blue-300">Our Story</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Founded in 2024 by a group of friends with a shared love for gaming, we set out to create a platform that would
                            bring gamers together and provide them with the tools they need to connect, compete, and create unforgettable
                            moments.
                        </p>
                    </motion.div>

                    {/* Connect With Us */}
                    <motion.div className="text-center" variants={itemVariants}>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                            Connect With Us
                        </h2>
                        <div className="flex justify-center space-x-6">
                            <Link href="https://github.com/aman3899" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub className="text-3xl" />
                            </Link>
                            <Link href="https://linkedin.com/in/amanullah0" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin className="text-3xl" />
                            </Link>
                            <Link href="mailto:m.amanullah0830@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                <FaEnvelope className="text-3xl" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default AboutPage;