"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants for desktop links
    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        hover: { scale: 1.1, color: '#a5b4fc', transition: { duration: 0.2 } },
    };

    // Animation variants for mobile drawer
    const drawerVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 text-white px-4 sm:px-6 py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo/Name */}
                <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            width={60}
                            height={60}
                            src="/logo.png"
                            alt="Logo"
                            className="rounded-full shadow-md"
                        />
                    </motion.div>
                    <motion.span
                        className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        GameFlex
                    </motion.span>
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex space-x-8">
                    {[
                        { href: "/about", text: "About" },
                        { href: "/news", text: "News" },
                        { href: "/popular", text: "Popular" },
                        { href: "https://amanullah-portfolio.vercel.app/", text: "Developer" },
                        { href: "/services", text: "Services" },
                        { href: "/contact", text: "Contact" },
                    ].map((link) => (
                        <motion.div
                            key={link.href}
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <Link href={link.href} className="text-lg font-medium hover:text-indigo-300 transition-colors duration-200">
                                {link.text}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden focus:outline-none p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </motion.button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-gradient-to-b from-gray-700 to-gray-900 text-white shadow-md"
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <nav className="flex flex-col space-y-4 p-6">
                            {[
                                { href: "/about", text: "About" },
                                { href: "/news", text: "News" },
                                { href: "/popular", text: "Popular" },
                                { href: "https://amanullah-portfolio.vercel.app/", text: "Developer" },
                                { href: "/services", text: "Services" },
                                { href: "/contact", text: "Contact" },
                            ].map((link) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * link.href.length }}
                                    whileHover={{ x: 10, color: '#a5b4fc' }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium hover:text-indigo-300 transition-colors duration-200"
                                        onClick={() => setIsOpen(false)} // Close menu on click
                                    >
                                        {link.text}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;