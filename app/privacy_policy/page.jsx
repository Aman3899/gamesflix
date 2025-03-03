"use client";
import React from 'react';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4">
                <div className="max-w-4xl w-full text-center text-white space-y-8">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                        Privacy Policy
                    </h1>

                    {/* Content */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                        At GamesFlex, we are committed to protecting your privacy. This policy outlines
                        how we collect, use, and safeguard your information when you interact with our
                        platform. By using our services, you agree to the practices outlined here.
                    </p>
                    <ul className="text-left mx-auto space-y-4 max-w-3xl max-sm:text-sm">
                        <li>
                            <strong>Information Collection:</strong> We may collect your name, email,
                            and other details for personalization and analytics.
                        </li>
                        <li>
                            <strong>Usage of Data:</strong> Your data helps us provide better services,
                            enhance user experience, and ensure security.
                        </li>
                        <li>
                            <strong>Third-Party Sharing:</strong> We do not sell or share your data
                            without consent, except when required by law.
                        </li>
                        <li>
                            <strong>Cookies:</strong> We use cookies for analytics and improving our
                            site functionality.
                        </li>
                    </ul>

                    {/* Footer Note */}
                    <p className="text-sm text-gray-400">
                        For more details, please contact us at{' '}
                        <span className="text-purple-300">privacy@gamesflex.com</span>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;