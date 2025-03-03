"use client";
import React from 'react';
import Navbar from '../components/Navbar';


const TermsAndConditions = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4">
                <div className="max-w-4xl w-full text-center text-white space-y-8">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Terms & Conditions
                    </h1>

                    {/* Content */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Welcome to GameVault! By accessing or using our services, you agree to comply
                        with the following terms and conditions. Please read them carefully.
                    </p>
                    <ul className="text-left mx-auto space-y-4 max-w-3xl max-sm:text-sm">
                        <li>
                            <strong>Use of Services:</strong> You agree to use our platform responsibly
                            and not engage in any unlawful activities.
                        </li>
                        <li>
                            <strong>Intellectual Property:</strong> All content on GameVault is owned by
                            us or our licensors. You may not use or distribute it without permission.
                        </li>
                        <li>
                            <strong>User Accounts:</strong> You are responsible for maintaining the
                            confidentiality of your account credentials.
                        </li>
                        <li>
                            <strong>Disclaimer:</strong> We are not liable for any damages arising from
                            the use of our platform.
                        </li>
                    </ul>

                    {/* Footer Note */}
                    <p className="text-sm text-gray-400">
                        For questions, contact us at{' '}
                        <span className="text-purple-300">support@gamesflex.com</span>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;