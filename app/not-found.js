"use client";
import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';


const Custom404 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Glitch Effect */}
                <div className="relative mb-8">
                    <h1 className="text-9xl font-extrabold text-white opacity-20 animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-bounce">
                            404
                        </h1>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Oops! Game Page Not Found
                    </h2>
                    <p className="text-gray-300 text-lg max-w-lg mx-auto">
                        The page you&apos;re looking for seems to have vanished into the digital void.
                        Let&apos;s get you back on track!
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/" className="flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-black rounded-full hover:text-black hover:bg-white transition-colors duration-300 group">
                        <Home className="w-5 h-5 group-hover:animate-bounce" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-8 py-3 text-lg font-medium text-purple-300 border-2 border-white rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:animate-horizontal" />
                        Go Back
                    </button>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white/5 w-2 h-2 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${5 + Math.random() * 10}s linear infinite`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Custom404;