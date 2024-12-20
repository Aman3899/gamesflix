"use client";
"use client";
import React from 'react';
import Navbar from '../components/Navbar';

const News = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center px-4 py-16">
                <div className="max-w-4xl w-full text-center text-white space-y-8">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Latest News
                    </h1>

                    {/* Intro Text */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Stay updated with the latest news and announcements in the gaming world. Stay tuned for exciting updates and releases.
                    </p>
                </div>

                {/* Under Development Notice */}
                <div className="mt-12 bg-black/50 p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold text-purple-400">Feature Under Development</h2>
                    <p className="text-gray-300 mt-4">
                        Please note that this news section is currently under development. New features and a better user experience will be available soon. Thank you for your patience!
                    </p>
                </div>

                {/* Dummy News Articles */}
                <div className="max-w-4xl w-full mt-12 space-y-8">
                    <div className="bg-black/30 p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-2xl font-bold text-purple-400">GameVault Announces New Feature</h2>
                        <p className="text-gray-300">
                            GamesFlex is excited to announce an upcoming feature that will revolutionize the way you interact with our platform. Stay tuned for more updates in the coming weeks!
                        </p>
                        <span className="text-gray-500 text-sm">Posted on: 20th December 2024</span>
                    </div>

                    <div className="bg-black/30 p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-2xl font-bold text-purple-400">New Gaming Titles Coming Soon</h2>
                        <p className="text-gray-300">
                            Get ready for some new and exciting game releases this winter. We will be adding a list of highly anticipated titles to GameVault in the next few days.
                        </p>
                        <span className="text-gray-500 text-sm">Posted on: 18th December 2024</span>
                    </div>

                    <div className="bg-black/30 p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-2xl font-bold text-purple-400">GamesFlex Community Event</h2>
                        <p className="text-gray-300">
                            Join us for a virtual community event where you can meet developers, participate in live Q&A, and win amazing prizes. Date and time to be announced soon.
                        </p>
                        <span className="text-gray-500 text-sm">Posted on: 15th December 2024</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default News;