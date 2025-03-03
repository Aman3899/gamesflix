"use client";
import React from 'react';
import Navbar from '../components/Navbar';

const CookiePolicy = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4">
                <div className="max-w-4xl w-full text-center text-white space-y-8">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Cookie Policy
                    </h1>

                    {/* Content */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                        At GamesFlex, we use cookies to enhance your experience, improve website performance, and analyze user behavior. By continuing to use our website, you agree to the use of cookies as outlined below.
                    </p>
                    <ul className="text-left mx-auto space-y-4 max-w-3xl max-sm:text-sm">
                        <li>
                            <strong>What Are Cookies?</strong> Cookies are small data files stored on your device that help us recognize you and provide personalized services.
                        </li>
                        <li>
                            <strong>Types of Cookies:</strong> We use both session and persistent cookies to remember your preferences and improve your browsing experience.
                        </li>
                        <li>
                            <strong>Third-Party Cookies:</strong> Some cookies are set by third-party services (e.g., analytics, social media) to provide additional functionality.
                        </li>
                        <li>
                            <strong>Managing Cookies:</strong> You can adjust your browser settings to block or delete cookies, but some website features may not function properly.
                        </li>
                    </ul>

                    {/* Footer Note */}
                    <p className="text-sm text-gray-400">
                        For more details, contact us at{' '}
                        <span className="text-purple-300">cookies@gamesflex.com</span>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CookiePolicy;