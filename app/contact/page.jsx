"use client";
"use client";
import React from 'react';
import Navbar from '../components/Navbar';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center px-4 py-16">
                <div className="max-w-4xl w-full text-center text-white space-y-8">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Contact Us
                    </h1>

                    {/* Intro Text */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the options below.
                    </p>
                </div>

                {/* Contact Options */}
                <div className="max-w-4xl w-full mt-12 space-y-12">
                    {/* Email Contact */}
                    <div className="flex flex-col md:flex-row items-center text-white text-center md:text-left bg-black/30 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-8">
                        <div className="text-4xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-bold">
                            ✉️
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Email Us</h2>
                            <p className="text-gray-300">
                                Drop us a message at{' '}
                                <span className="text-purple-300">support@gamesflex.com <span className='text-white'>OR</span> M.Amanullah0830@gmail.com</span>. Our team will get back to you within 24-48 hours.
                            </p>
                        </div>
                    </div>

                    {/* Phone Contact */}
                    <div className="flex flex-col md:flex-row items-center text-white text-center md:text-left bg-black/30 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-8">
                        <div className="text-4xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-bold">
                            📞
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Call Us</h2>
                            <p className="text-gray-300">
                                Speak directly with our team at{' '}
                                <span className="text-purple-300">+92 309 1297936</span>. We&apos;re available Monday to Friday, 9 AM - 6 PM.
                            </p>
                        </div>
                    </div>

                    {/* Address Contact */}
                    <div className="flex flex-col md:flex-row items-center text-white text-center md:text-left bg-black/30 p-6 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-8">
                        <div className="text-4xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-bold">
                            📍
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Visit Us</h2>
                            <p className="text-gray-300">
                                Drop by our headquarters at{' '}
                                <span className="text-purple-300">Moh Insariyan, Chiniot, Pakistan</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-4xl w-full mt-16 bg-black/30 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                    <form className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-purple-500 focus:outline-none"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-purple-500 focus:outline-none"
                                placeholder="johndoe@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-gray-300 placeholder-gray-500 focus:ring-purple-500 focus:outline-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:opacity-90 transition-opacity duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;