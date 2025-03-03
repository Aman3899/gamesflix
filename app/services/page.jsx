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
  const [showAlert, setShowAlert] = useState(true);
  const [activeTab, setActiveTab] = useState("installation");

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const serviceVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeInOut" } },
    hover: { scale: 1.03, boxShadow: "0 0 15px rgba(124, 58, 237, 0.6)", transition: { duration: 0.2 } }, // Simplified single shadow
    exit: { opacity: 0, y: 50, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const tabVariants = {
    inactive: { opacity: 0.7, y: 0 },
    active: { opacity: 1, y: -5, color: "#c084fc", borderColor: "#a78bfa", transition: { duration: 0.3 } }, // Lavender
    hover: { y: -2, transition: { duration: 0.2 } },
  };

  const alertVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const glowVariants = {
    animate: {
      textShadow: [
        "0 0 5px rgba(124, 58, 237, 0.5)",
        "0 0 15px rgba(124, 58, 237, 0.8)",
        "0 0 5px rgba(124, 58, 237, 0.5)",
      ], // Deep Purple
      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(124, 58, 237, 0.8)", transition: { duration: 0.3 } }, // Consistent shadow format
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar heading="Services Nexus" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden text-white pt-28"
      >
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-cover bg-center opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-black/80 pointer-events-none"></div>
        <motion.div
          className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Service Under Progress Alert */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              variants={alertVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 sm:p-4 rounded-xl shadow-2xl z-50 flex items-center space-x-2 sm:space-x-3 backdrop-blur-xl border border-yellow-400/50"
            >
              <FaTools className="text-xl sm:text-2xl animate-spin" />
              <p className="font-medium text-sm sm:text-base">
                Services being upgraded—expect enhanced capabilities soon!
              </p>
              <button
                onClick={() => setShowAlert(false)}
                className="ml-auto p-1 rounded-full hover:bg-black/20 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7 } }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white bg-clip-text bg-gradient-to-br from-purple-400 to-pink-500 mb-4 animate-text-glow"
          >
            Gaming Service Grid
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.7 } }}
            className="text-center mb-8 text-gray-300 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            Enhance your gaming with our exclusive services—designed to optimize your setup and elevate your digital experience.
          </motion.p>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-indigo-500/50 pb-3 sm:pb-4">
            {["installation", "details", "faq"].map((tab) => (
              <motion.button
                key={tab}
                variants={tabVariants}
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-3 sm:px-4 py-2 rounded-t-lg font-semibold mx-1 sm:mx-2 transition-all text-sm sm:text-base ${
                  activeTab === tab ? "text-indigo-300 border-b-2 border-indigo-300" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab === "installation" && <FaHouseUser className="mr-2" />}
                {tab === "details" && <FaGamepad className="mr-2" />}
                {tab === "faq" && <FaQuestionCircle className="mr-2" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "installation" && (
              <motion.div
                key="installation"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  variants={serviceVariants}
                  className="bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-lg p-4 sm:p-6 mb-6 border border-indigo-500/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                    <div className="bg-indigo-900/30 p-3 rounded-2xl mb-3 sm:mb-0 sm:mr-4">
                      <FaHouseUser className="text-3xl sm:text-4xl text-indigo-300 animate-pulse-slow" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white bg-clip-text bg-gradient-to-br from-purple-300 to-pink-400">
                      In-Home Gaming Setup & Calibration
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                    Our experts will setup your gaming rig, calibrate settings for peak performance, and conduct tests to ensure a seamless experience.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                    {[
                      { icon: FaCheckCircle, title: "Full Setup", desc: "Detailed setup of hardware and software." },
                      { icon: FaCheckCircle, title: "Calibration", desc: "Optimal visual and performance settings." },
                      { icon: FaCheckCircle, title: "Testing", desc: "Thorough testing for a seamless experience." },
                      { icon: FaCheckCircle, title: "Troubleshooting", desc: "Immediate troubleshooting and resolution." },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={serviceVariants}
                        className="bg-gray-900/50 p-3 rounded-xl backdrop-blur-sm hover:bg-gray-900/70 transition-colors"
                      >
                        <div className="flex items-center">
                          <item.icon className="text-xl mr-2 text-green-400" />
                          <div>
                            <h3 className="font-semibold text-sm text-white">{item.title}</h3>
                            <p className="text-gray-400 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-900/50 p-3 sm:p-4 rounded-2xl border border-indigo-500/50 backdrop-blur-sm">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <div className="bg-yellow-900/30 p-2 rounded-full mr-2">
                        <FaClock className="text-xl text-yellow-400 animate-pulse-slow" />
                      </div>
                      <span className="text-gray-300 text-sm">
                        Setup Time: <span className="font-semibold">2-4 hours</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-900/30 p-2 rounded-full mr-2">
                        <FaMoneyBillWave className="text-xl text-green-400" />
                      </div>
                      <span className="text-xl font-bold text-white bg-clip-text bg-gradient-to-br from-green-400 to-teal-300">
                        Starting at Rs: 1000/-
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-all shadow-lg text-sm"
                    >
                      Book a Setup
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  variants={serviceVariants}
                  className="bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-lg p-4 sm:p-6 mb-6 border border-indigo-500/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                    <div className="bg-yellow-900/30 p-3 rounded-2xl mb-3 sm:mb-0 sm:mr-4">
                      <FaShieldAlt className="text-3xl sm:text-4xl text-yellow-400 animate-pulse-slow" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-400">
                        Nexus Satisfaction Guarantee
                      </h2>
                      <div className="flex mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="text-yellow-400 mr-1" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    We ensure uncompromised quality. If your system isn’t perfect, we’ll recalibrate until you’re satisfied.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "details" && (
              <motion.div
                key="details"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  variants={serviceVariants}
                  className="bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-lg p-4 sm:p-6 mb-6 border border-indigo-500/50"
                >
                  <h2 className="text-2xl font-bold mb-6 text-center text-white bg-clip-text bg-gradient-to-br from-green-300 to-indigo-300 animate-text-glow">
                    Premium Service Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-300">
                    {[
                      { icon: FaTools, color: "blue", title: "Hardware Setup", desc: "Full spectrum hardware setup with compatibility checks." },
                      { icon: FaGamepad, color: "green", title: "Software Setup", desc: "Detailed software installation and configuration." },
                      { icon: FaCheckCircle, color: "purple", title: "Performance Tuning", desc: "Optimization for graphics, frame rates, and performance." },
                      { icon: FaTools, color: "red", title: "Troubleshooting", desc: "Real-time diagnostics and issue resolution." },
                      { icon: FaShieldAlt, color: "yellow", title: "Hardware Recommendations", desc: "Expert hardware upgrade recommendations." },
                      { icon: FaQuestionCircle, color: "indigo", title: "Extended Support", desc: "Ongoing support for updates and maintenance." },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={serviceVariants}
                        className="bg-gray-900/50 p-3 sm:p-4 rounded-2xl border border-indigo-500/50 backdrop-blur-sm hover:bg-gray-900/70 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <div className={`bg-${item.color}-900/30 p-2 rounded-xl mr-2`}>
                            <item.icon className={`text-${item.color}-400 text-xl sm:text-2xl animate-pulse-slow`} />
                          </div>
                          <h3 className={`text-lg sm:text-xl font-semibold text-${item.color}-300`}>{item.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "faq" && (
              <motion.div
                key="faq"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  variants={serviceVariants}
                  className="bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-lg p-4 sm:p-6 mb-6 border border-indigo-500/50"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="bg-indigo-900/30 p-3 rounded-2xl">
                      <FaQuestionCircle className="text-3xl sm:text-4xl text-indigo-300 animate-pulse-slow" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-white bg-clip-text bg-gradient-to-br from-purple-300 to-teal-300 animate-text-glow">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { q: "What games do you support?", a: "We support most legally owned games, digital or physical." },
                      { q: "What areas do you serve?", a: "Our services are available in select cities. Contact us for availability." },
                      { q: "How do I book a service?", a: "Contact us via phone or email to schedule a setup." },
                      { q: "What if I'm not satisfied?", a: "We offer recalibration until you're satisfied. Contact support for issues." },
                      { q: "Do you handle multi-platform setups?", a: "Yes, we support PC, consoles, and VR setups." },
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        variants={serviceVariants}
                        className="bg-gray-900/50 p-3 sm:p-4 rounded-2xl border border-indigo-500/50 backdrop-blur-sm hover:bg-gray-900/70 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-indigo-300 mb-1">{faq.q}</h3>
                        <p className="text-gray-300 text-sm">{faq.a}</p>
                      </motion.div>
                    ))}
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
            className="bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-lg p-4 sm:p-6 text-center border border-indigo-500/50"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white bg-clip-text bg-gradient-to-br from-purple-300 to-teal-300 animate-text-glow">
              Ready to Level Up?
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Contact us to schedule your personalized gaming setup!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <motion.a
                href="mailto:m.amanullah0830@gmail.com"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-gray-900/50 hover:bg-gray-900/70 rounded-xl transition-all text-white font-medium backdrop-blur-sm text-sm"
              >
                <FaEnvelope className="mr-2" /> Email Us
              </motion.a>
              <motion.a
                href="tel:+923091297936"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-indigo-600/90 hover:bg-indigo-700/90 rounded-xl transition-all text-white font-medium backdrop-blur-sm text-sm"
              >
                <FaPhone className="mr-2" /> Call +92 309 1297936
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ServicesPage;