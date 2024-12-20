"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white px-2 max-sm:px-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo/Name */}
                <Link href="/" className="text-2xl font-bold">
                    <Image 
                        width={75} height={75} src={"/logo.png"} alt={"Logo"}>
                    </Image>
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-300">About</Link>
                    <Link href="/" className="hover:text-gray-300">Services</Link>
                    <Link href="https://amanullah-portfolio.vercel.app/" className="hover:text-gray-300">Developer</Link>
                    <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-gray-700 text-white">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <Link href="/" className="hover:text-gray-300">About</Link>
                        <Link href="https://amanullah-portfolio.vercel.app/" className="hover:text-gray-300">Developer</Link>
                        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;