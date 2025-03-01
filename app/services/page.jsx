"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaCheckCircle,
    FaClock,
    FaHouseUser,
    FaMoneyBillWave,
    FaTools,
    FaGamepad,
    FaShieldAlt,
    FaQuestionCircle,
    FaEnvelope,
    FaPhone,
    FaStar,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const ServicesPage = () => {
    const [showFAQ, setShowFAQ] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const [activeTab, setActiveTab] = useState("installation");

    const serviceVariants = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: "easeInOut" },
        },
        hover: { scale: 1.03, transition: { duration: 0.2 } },
    };

    const faqVariants = {
        hidden: { opacity: 0, height: 0, overflow: "hidden" },
        visible: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const alertVariants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    };

    const tabVariants = {
        inactive: { opacity: 0.7, y: 0 },
        active: {
            opacity: 1,
            y: -5,
            transition: { duration: 0.3 }
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="bg-gradient-to-b from-gray-900 to-black min-h-screen py-12 text-white relative"
            >
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                    <div className="absolute bottom-40 right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
                    <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
                </div>

                {/* Service Under Progress Alert */}
                <AnimatePresence>
                    {showAlert && (
                        <motion.div
                            variants={alertVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-4 rounded-xl shadow-lg z-50 flex items-center space-x-3 backdrop-blur-sm bg-opacity-90"
                        >
                            <FaTools className="text-2xl animate-spin" />
                            <p className="font-medium">This service is currently under development and will be available soon. Stay tuned!</p>
                            <button
                                onClick={() => setShowAlert(false)}
                                className="ml-3 p-1 rounded-full hover:bg-black/20 transition-colors"
                            >
                                ✕
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="max-w-5xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } }}
                        className="text-6xl pb-2 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
                    >
                        Our Gaming Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.7 } }}
                        className="text-center mb-12 text-gray-300 max-w-2xl mx-auto"
                    >
                        Elevate your gaming experience with our professional services designed to optimize performance and maximize enjoyment.
                    </motion.p>

                    {/* Service Tabs */}
                    <div className="flex justify-center mb-12 border-b border-gray-700 pb-4">
                        <motion.button
                            variants={tabVariants}
                            animate={activeTab === "installation" ? "active" : "inactive"}
                            onClick={() => setActiveTab("installation")}
                            className={`flex items-center px-6 py-3 rounded-t-lg font-semibold mr-2 transition-all ${activeTab === "installation"
                                    ? "text-blue-400 border-b-2 border-blue-400"
                                    : "text-gray-400 hover:text-gray-200"
                                }`}
                        >
                            <FaHouseUser className="mr-2" /> Installation
                        </motion.button>
                        <motion.button
                            variants={tabVariants}
                            animate={activeTab === "details" ? "active" : "inactive"}
                            onClick={() => setActiveTab("details")}
                            className={`flex items-center px-6 py-3 rounded-t-lg font-semibold mr-2 transition-all ${activeTab === "details"
                                    ? "text-green-400 border-b-2 border-green-400"
                                    : "text-gray-400 hover:text-gray-200"
                                }`}
                        >
                            <FaGamepad className="mr-2" /> Service Details
                        </motion.button>
                        <motion.button
                            variants={tabVariants}
                            animate={activeTab === "faq" ? "active" : "inactive"}
                            onClick={() => { setActiveTab("faq"); setShowFAQ(true); }}
                            className={`flex items-center px-6 py-3 rounded-t-lg font-semibold transition-all ${activeTab === "faq"
                                    ? "text-purple-400 border-b-2 border-purple-400"
                                    : "text-gray-400 hover:text-gray-200"
                                }`}
                        >
                            <FaQuestionCircle className="mr-2" /> FAQ
                        </motion.button>
                    </div>

                    {/* Installation Service */}
                    <AnimatePresence mode="wait">
                        {activeTab === "installation" && (
                            <motion.div
                                key="installation"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <motion.div
                                    variants={serviceVariants}
                                    initial="initial"
                                    animate="animate"
                                    whileHover="hover"
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 mb-8 border border-gray-700 backdrop-blur-sm"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                                        <div className="bg-blue-900/30 p-4 rounded-2xl mb-4 md:mb-0 md:mr-6">
                                            <FaHouseUser className="text-5xl text-blue-400" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                            In-Home Gaming Installation & Testing
                                        </h2>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        Let our expert team take the hassle out of setting up your gaming
                                        rig! We&apos;ll come to your home, install your games, configure
                                        the settings for optimal performance, and thoroughly test
                                        everything to ensure a seamless gaming experience.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-800/80 transition-colors">
                                            <div className="flex items-start">
                                                <FaCheckCircle className="text-2xl mr-3 text-green-400 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-lg text-white">Professional Installation</h3>
                                                    <p className="text-gray-400">Expert setup of your games and necessary software</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-800/80 transition-colors">
                                            <div className="flex items-start">
                                                <FaCheckCircle className="text-2xl mr-3 text-green-400 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-lg text-white">Optimal Configuration</h3>
                                                    <p className="text-gray-400">Personalized settings for maximum performance</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-800/80 transition-colors">
                                            <div className="flex items-start">
                                                <FaCheckCircle className="text-2xl mr-3 text-green-400 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-lg text-white">Performance Testing</h3>
                                                    <p className="text-gray-400">Comprehensive testing to ensure smooth gameplay</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-800/80 transition-colors">
                                            <div className="flex items-start">
                                                <FaCheckCircle className="text-2xl mr-3 text-green-400 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-lg text-white">Troubleshooting</h3>
                                                    <p className="text-gray-400">On-the-spot problem solving and optimization</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                                        <div className="flex items-center mb-4 sm:mb-0">
                                            <div className="bg-yellow-900/30 p-3 rounded-full mr-3">
                                                <FaClock className="text-xl text-yellow-400" />
                                            </div>
                                            <span className="text-gray-300">
                                                Typical Install Time: <span className="font-semibold">2-4 hours</span>
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="bg-green-900/30 p-3 rounded-full mr-3">
                                                <FaMoneyBillWave className="text-xl text-green-400" />
                                            </div>
                                            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                                                Starting at Rs: 1000/-
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center">
                                        <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                                            Book Installation Service
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Our Guarantee */}
                                <motion.div
                                    variants={serviceVariants}
                                    initial="initial"
                                    animate="animate"
                                    whileHover="hover"
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 mb-8 border border-gray-700"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                                        <div className="bg-yellow-900/30 p-4 rounded-2xl mb-4 md:mb-0 md:mr-6">
                                            <FaShieldAlt className="text-5xl text-yellow-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                                                Our Satisfaction Guarantee
                                            </h2>
                                            <div className="flex mt-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <FaStar key={star} className="text-yellow-400 mr-1" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        We&apos;re committed to providing top-quality service and
                                        ensuring your complete satisfaction. If you&apos;re not completely happy
                                        with our work, we&apos;ll do everything we can to make it right.
                                        Our goal is to get you gaming smoothly and confidently so you can focus
                                        on what matters most—enjoying your games to the fullest.
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Service Details */}
                        {activeTab === "details" && (
                            <motion.div
                                key="details"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 mb-8 border border-gray-700"
                            >
                                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                    What You Get With Our Premium Service
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                        className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="bg-blue-900/30 p-2 rounded-xl mr-3">
                                                <FaTools className="text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-blue-300">
                                                Professional Installation
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Our team will install your games correctly, ensuring all
                                            necessary drivers and software are up-to-date. We handle
                                            everything from initial setup to potential compatibility
                                            issues with meticulous attention to detail.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="bg-green-900/30 p-2 rounded-xl mr-3">
                                                <FaGamepad className="text-green-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-green-300">
                                                Optimal Configuration
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            We&apos;ll configure your game settings to maximize
                                            performance and visual quality based on your hardware.
                                            We&apos;ll fine-tune graphics settings, resolution, and other
                                            options for the best possible gaming experience.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="bg-purple-900/30 p-2 rounded-xl mr-3">
                                                <FaCheckCircle className="text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-purple-300">
                                                Performance Testing
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            We&apos;ll run thorough tests to ensure your games run
                                            smoothly and stably. We monitor frame rates, check for
                                            graphical glitches, and identify any potential issues that
                                            might impact your gaming session.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="bg-red-900/30 p-2 rounded-xl mr-3">
                                                <FaTools className="text-red-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-red-300">
                                                Troubleshooting
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            If we encounter any problems during installation or testing,
                                            we&apos;ll troubleshoot them on the spot. We&apos;ll diagnose
                                            issues, research solutions, and implement fixes to get you up
                                            and running as quickly as possible.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="bg-yellow-900/30 p-2 rounded-xl mr-3">
                                                <FaShieldAlt className="text-yellow-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-yellow-300">
                                                Hardware Advice (Optional)
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            If you&apos;re experiencing performance issues, our team can
                                            offer advice on upgrading your hardware. We can recommend
                                            components that will improve your gaming experience without
                                            breaking the bank.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="bg-indigo-900/30 p-2 rounded-xl mr-3">
                                                <FaQuestionCircle className="text-indigo-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-indigo-300">
                                                Ongoing Support (Optional)
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            We offer extended support plans to help you with any
                                            gaming-related issues that might arise in the future. Whether
                                            it&apos;s driver updates, game patches, or troubleshooting
                                            problems, we&apos;re here to help.
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {/* FAQ Section */}
                        {activeTab === "faq" && (
                            <motion.div
                                key="faq"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 mb-8 border border-gray-700"
                            >
                                <div className="flex flex-col items-center mb-8">
                                    <div className="bg-purple-900/30 p-4 rounded-2xl mb-4">
                                        <FaQuestionCircle className="text-5xl text-purple-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                                        Frequently Asked Questions
                                    </h2>
                                </div>

                                <motion.div
                                    variants={faqVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <div className="space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1, duration: 0.5 }}
                                            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                        >
                                            <h3 className="text-xl font-semibold text-purple-300 mb-2">
                                                What games do you install?
                                            </h3>
                                            <p className="text-gray-300">
                                                We can install any games you own, whether they are digital
                                                downloads or physical copies. We do not provide or
                                                distribute game licenses.
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                        >
                                            <h3 className="text-xl font-semibold text-purple-300 mb-2">
                                                What areas do you service?
                                            </h3>
                                            <p className="text-gray-300">
                                                We currently serve [list of areas/cities]. Please contact us
                                                to confirm service availability in your region.
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                        >
                                            <h3 className="text-xl font-semibold text-purple-300 mb-2">
                                                How do I schedule an appointment?
                                            </h3>
                                            <p className="text-gray-300">
                                                You can schedule an appointment by contacting us through
                                                [phone, email, or booking system link].
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                                        >
                                            <h3 className="text-xl font-semibold text-purple-300 mb-2">
                                                Do you offer refunds?
                                            </h3>
                                            <p className="text-gray-300">
                                                Our goal is to provide you with an exceptional service that
                                                meets your needs effectively and reliably. Consequently, our
                                                policy doesn&apos;t typically offer refunds. However, if
                                                you&apos;re not completely satisfied with the quality or
                                                outcome of the service delivered, we&apos;re here to help
                                                and find the best way to resolve your concerns. Please
                                                reach out to our team for support, as we prioritize
                                                customer satisfaction and aim to address any issues to
                                                ensure you&apos;re happy with your overall experience.
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl shadow-xl p-8 text-center backdrop-blur-sm border border-gray-700/50"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">Ready to Level Up Your Gaming Experience?</h3>
                        <p className="text-gray-300 mb-6">Contact us today to schedule your professional gaming installation!</p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="mailto:m.amanullah0830@gmail.com" className="inline-flex items-center justify-center px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-all text-white font-medium backdrop-blur-sm">
                                <FaEnvelope className="mr-2" /> Email Us
                            </a>
                            <a href="tel:+923091297936" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600/90 hover:bg-blue-500/90 rounded-xl transition-all text-white font-medium backdrop-blur-sm">
                                <FaPhone className="mr-2" /> +92 309 1297936
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default ServicesPage;