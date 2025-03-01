"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaHouseUser, FaMoneyBillWave, FaTools, FaGamepad, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ServicesPage = () => {
    const [showFAQ, setShowFAQ] = useState(false);

    const serviceVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeInOut" } },
        hover: { scale: 1.03, transition: { duration: 0.2 } },
    };

    const faqVariants = {
        hidden: { opacity: 0, height: 0, overflow: "hidden" },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeInOut" } },
    };

    return (
        <>
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="bg-gray-900 min-h-screen py-12 text-white"
            >
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl pb-8 font-extrabold text-center  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Our Gaming Services
                    </h1>

                    {/* Installation Service */}
                    <motion.div
                        variants={serviceVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
                    >
                        <div className="flex items-center mb-4">
                            <FaHouseUser className="text-4xl mr-4 text-blue-400" />
                            <h2 className="text-3xl font-semibold text-blue-300">In-Home Gaming Installation & Testing</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Let our expert team take the hassle out of setting up your gaming rig! We&apos;ll come to your home, install your games, configure the settings for optimal performance, and thoroughly test everything to ensure a seamless gaming experience.
                        </p>
                        <ul className="list-disc list-inside text-gray-300 mb-6">
                            <li><FaCheckCircle className="inline mr-2 text-green-400" />Professional Installation</li>
                            <li><FaCheckCircle className="inline mr-2 text-green-400" />Optimal Configuration</li>
                            <li><FaCheckCircle className="inline mr-2 text-green-400" />Performance Testing</li>
                            <li><FaCheckCircle className="inline mr-2 text-green-400" />Troubleshooting</li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <div>
                                <FaClock className="inline mr-2 text-yellow-400" />
                                <span className="text-gray-400">Typical Install Time: 2-4 hours</span>
                            </div>
                            <div className="text-right">
                                <FaMoneyBillWave className="inline mr-2 text-green-400" />
                                <span className="text-2xl font-bold text-green-300">Starting at Rs: 1000/-</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Detailed Service Explanation */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
                        <h2 className="text-3xl font-semibold text-green-300 mb-4">What You Get With Our Service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                                <p>Our team will install your games correctly, ensuring all necessary drivers and software are up-to-date. We handle everything from initial setup to potential compatibility issues.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Optimal Configuration</h3>
                                <p>We&apos;ll configure your game settings to maximize performance and visual quality based on your hardware. We&apos;ll fine-tune graphics settings, resolution, and other options for the best possible gaming experience.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Performance Testing</h3>
                                <p>We&apos;ll run thorough tests to ensure your games run smoothly and stably. We monitor frame rates, check for graphical glitches, and identify any potential issues that might impact your gaming session.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
                                <p>If we encounter any problems during installation or testing, we&apos;ll troubleshoot them on the spot. We&apos;ll diagnose issues, research solutions, and implement fixes to get you up and running as quickly as possible.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Hardware Advice (Optional)</h3>
                                <p>If you&apos;re experiencing performance issues, our team can offer advice on upgrading your hardware. We can recommend components that will improve your gaming experience without breaking the bank.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Ongoing Support (Optional)</h3>
                                <p>We offer extended support plans to help you with any gaming-related issues that might arise in the future. Whether it&apos;s driver updates, game patches, or troubleshooting problems, we&apos;re here to help.</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Guarantee */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
                        <div className="flex items-center mb-4">
                            <FaShieldAlt className="text-4xl mr-4 text-yellow-400" />
                            <h2 className="text-3xl font-semibold text-yellow-300">Our Guarantee</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            We&apos;re committed to providing top-quality service and ensuring your satisfaction. If you&apos;re not completely happy with our work, we&apos;ll do everything we can to make it right. Our goal is to get you gaming smoothly and confidently.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
                        <div className="flex items-center mb-4 cursor-pointer" onClick={() => setShowFAQ(!showFAQ)}>
                            <FaQuestionCircle className="text-4xl mr-4 text-purple-400" />
                            <h2 className="text-3xl font-semibold text-purple-300">Frequently Asked Questions</h2>
                        </div>

                        <motion.div variants={faqVariants} initial="hidden" animate={showFAQ ? "visible" : "hidden"}>
                            <div className="text-gray-300 space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold">What games do you install?</h3>
                                    <p>We can install any games you own, whether they are digital downloads or physical copies.  We do not provide or distribute game licenses.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">What areas do you service?</h3>
                                    <p>We currently serve [list of areas/cities]. Please contact us to confirm service availability in your region.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">How do I schedule an appointment?</h3>
                                    <p>You can schedule an appointment by contacting us through [phone, email, or booking system link].</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Do you offer refunds?</h3>
                                    <p>Our goal is to provide you with an exceptional service that meets your needs effectively and reliably. Consequently, our policy doesn&apos;t typically offer refunds. However, if you&apos;re not completely satisfied with the quality or outcome of the service delivered, we&apos;re here to help and find the best way to resolve your concerns. Please reach out to our team for support, as we prioritize customer satisfaction and aim to address any issues to ensure you&apos;re happy with your overall experience.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center text-gray-400">
                        <p>Contact us today to schedule your gaming installation!</p>
                        <p>Email:  | Phone: +92 309 1297936</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ServicesPage;