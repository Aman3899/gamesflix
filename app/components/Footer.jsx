"use client";
import React from 'react';
import {
    FaDiscord,
    FaGithub,
    FaTwitter,
    FaTwitch,
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaChevronRight,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from 'react-icons/fa';
import {
    SiEpicgames,
    SiSteam,
    SiXbox,
    SiPlaystation,
    SiNintendoswitch,
    SiRiotgames
} from 'react-icons/si';
import Link from 'next/link';


const Footer = () => {

    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-4">GamesFlex</h3>
                        <p className="text-gray-400">
                            Your ultimate destination for gaming information, reviews, and community. Stay updated with the latest in gaming.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <Link href="#" className="hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <FaDiscord size={20} />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <FaTwitch size={20} />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <FaYoutube size={20} />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Games', 'News', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="flex items-center group"
                                    >
                                        <FaChevronRight className="h-3 w-3 text-purple-500 group-hover:text-purple-400 mr-2 transition-colors" />
                                        <span className="hover:text-purple-400 transition-colors">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gaming Platforms */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Gaming Platforms</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <Link href="#" className="flex flex-col items-center group">
                                <SiSteam className="h-6 w-6 group-hover:text-purple-400 transition-colors" />
                                <span className="text-sm mt-1">Steam</span>
                            </Link>
                            <Link href="#" className="flex flex-col items-center group">
                                <SiEpicgames className="h-6 w-6 group-hover:text-purple-400 transition-colors" />
                                <span className="text-sm mt-1">Epic</span>
                            </Link>
                            <Link href="#" className="flex flex-col items-center group">
                                <SiXbox className="h-6 w-6 group-hover:text-purple-400 transition-colors" />
                                <span className="text-sm mt-1">Xbox</span>
                            </Link>
                            <Link href="#" className="flex flex-col items-center group">
                                <SiPlaystation className="h-6 w-6 group-hover:text-purple-400 transition-colors" />
                                <span className="text-sm mt-1">PS5</span>
                            </Link>
                            <Link href="#" className="flex flex-col items-center group">
                                <SiNintendoswitch className="h-6 w-6 group-hover:text-purple-400 transition-colors" />
                                <span className="text-sm mt-1">Switch</span>
                            </Link>
                            <Link href="#" className="flex flex-col items-center group">
                                <SiRiotgames className="h-6 w-6 group-hover:text-purple-400 transition-colors" />
                                <span className="text-sm mt-1">Riot</span>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="h-5 w-5 text-purple-500" />
                                <span>123 Gaming Street, Chiniot, Pakistan</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="h-5 w-5 text-purple-500" />
                                <span>+92 309 1297936</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="h-5 w-5 text-purple-500" />
                                <span>contact@gamevault.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm">
                            © 2024 GamesFlex. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
                            <Link href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;