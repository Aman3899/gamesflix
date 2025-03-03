"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaPaperPlane,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaCheckCircle
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const ContactUs = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.03, transition: { duration: 0.2 } },
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

    const buttonVariants = {
        hover: { scale: 1.05, boxShadow: "0 0 15px rgba(79, 70, 229, 0.8)", transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear error on change
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "A valid email is required.";
        if (!form.message.trim()) newErrors.message = "Message cannot be empty.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setForm({ name: "", email: "", message: "" });
            }, 3000); // Reset after 3 seconds
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <Navbar heading="Contact Nexus" />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-16 relative overflow-hidden pt-28">
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

                <div className="max-w-4xl w-full text-center text-white space-y-8 relative z-10">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text-glow"
                    >
                        Transmit Your Signal
                    </motion.h1>
                    {/* Intro Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide"
                    >
                        Sync with us across the digital ether—queries, feedback, or salutations, we’re primed to receive your transmission.
                    </motion.p>
                </div>

                {/* Contact Options */}
                <motion.div
                    className="max-w-4xl w-full mt-12 space-y-8 sm:space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Email Contact */}
                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        className="flex flex-col md:flex-row items-center text-white text-center md:text-left bg-gray-800/90 backdrop-blur-xl p-6 rounded-lg shadow-2xl border border-indigo-500/50 space-y-6 md:space-y-0 md:space-x-8"
                    >
                        <div className="text-3xl sm:text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold animate-pulse-slow">
                            ✉️
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-indigo-300">Email Nexus</h2>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                                Send a data burst to{" "}
                                <span className="text-indigo-400 font-medium">support@gamesflex.com</span> or{" "}
                                <span className="text-indigo-400 font-medium">m.amanullah0830@gmail.com</span>. Response ETA: 24-48 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Phone Contact */}
                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        className="flex flex-col md:flex-row items-center text-white text-center md:text-left bg-gray-800/90 backdrop-blur-xl p-6 rounded-lg shadow-2xl border border-indigo-500/50 space-y-6 md:space-y-0 md:space-x-8"
                    >
                        <div className="text-3xl sm:text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold animate-pulse-slow">
                            📞
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-indigo-300">Voice Channel</h2>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                                Direct line: <span className="text-indigo-400 font-medium">+92 309 1297936</span>. Operative Monday-Friday, 09:00-18:00 Galactic Standard Time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Address Contact */}
                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        className="flex flex-col md:flex-row items-center text-white text-center md:text-left bg-gray-800/90 backdrop-blur-xl p-6 rounded-lg shadow-2xl border border-indigo-500/50 space-y-6 md:space-y-0 md:space-x-8"
                    >
                        <div className="text-3xl sm:text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold animate-pulse-slow">
                            📍
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-indigo-300">Physical Node</h2>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                                Coordinates: <span className="text-indigo-400 font-medium">Moh Insariyan, Chiniot, Pakistan</span>. Portal open for in-person syncs.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="max-w-4xl w-full mt-12 sm:mt-16 bg-gray-800/90 backdrop-blur-xl p-6 sm:p-8 rounded-lg shadow-2xl border border-indigo-500/50"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-text-glow">
                        Initiate Data Transmission
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="name" className="block text-gray-300 text-sm sm:text-base mb-2">
                                Designation
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-gray-900/50 border ${errors.name ? "border-red-500" : "border-indigo-500/50"
                                    } rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base`}
                                placeholder="Enter your identifier"
                            />
                            {errors.name && (
                                <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name}</p>
                            )}
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="email" className="block text-gray-300 text-sm sm:text-base mb-2">
                                Digital Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-gray-900/50 border ${errors.email ? "border-red-500" : "border-indigo-500/50"
                                    } rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base`}
                                placeholder="Your email coordinates"
                            />
                            {errors.email && (
                                <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email}</p>
                            )}
                        </motion.div>

                        {/* Message */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="message" className="block text-gray-300 text-sm sm:text-base mb-2">
                                Transmission Payload
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 bg-gray-900/50 border ${errors.message ? "border-red-500" : "border-indigo-500/50"
                                    } rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base`}
                                placeholder="Encode your message here..."
                                rows="5"
                            />
                            {errors.message && (
                                <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.message}</p>
                            )}
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={itemVariants}>
                            <motion.button
                                type="submit"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className={`w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm sm:text-lg rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitted ? "bg-green-500" : ""
                                    }`}
                                disabled={isSubmitted}
                            >
                                {isSubmitted ? (
                                    <>
                                        <FaCheckCircle /> Signal Sent
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane /> Send Transmission
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="max-w-4xl w-full mt-12 flex justify-center space-x-6 sm:space-x-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        { icon: FaGithub, url: "https://github.com/aman3899" },
                        { icon: FaLinkedin, url: "https://linkedin.com/in/amanullah0" },
                        { icon: FaTwitter, url: "https://twitter.com" },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ scale: 1.2, rotate: 10, color: "#a5b4fc" }}
                            className="text-indigo-400 text-2xl sm:text-3xl md:text-4xl transition-colors duration-300"
                        >
                            <social.icon />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default ContactUs;