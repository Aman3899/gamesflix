"use client";
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Show loading and start progress when navigation starts
        const handleStart = () => {
            setIsVisible(true);
            setProgress(0);

            // Simulate progress
            const progressInterval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return 90;
                    }
                    return prev + 10;
                });
            }, 200);

            // Cleanup interval
            return () => clearInterval(progressInterval);
        };

        // Complete loading when navigation finishes
        const handleComplete = () => {
            setProgress(100);

            // Add a small delay before hiding for smooth transition
            const timeout = setTimeout(() => {
                setIsVisible(false);
                setProgress(0);
            }, 500);

            return () => clearTimeout(timeout);
        };

        handleStart();
        handleComplete();

    }, [pathname, searchParams]); // Trigger effect when route changes

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 backdrop-blur-sm transition-opacity duration-300">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-800">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    style={{
                        width: `${progress}%`,
                        transition: 'width 0.5s ease-out'
                    }}
                />
            </div>

            {/* Loading Animation */}
            <div className="relative w-24 h-24">
                {/* Outer Circle */}
                <div className="absolute inset-0 border-4 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin" />

                {/* Inner Circle */}
                <div className="absolute inset-2 border-4 border-t-transparent border-r-pink-500 border-b-transparent border-l-blue-500 rounded-full animate-spin-slow" />

                {/* Center Dot */}
                <div className="absolute inset-[42%] bg-white rounded-full animate-pulse" />
            </div>

            {/* Loading Text */}
            <div className="mt-8 text-white font-medium">
                <span className="inline-block animate-bounce">L</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>o</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>a</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>d</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>i</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>n</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>g</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>.</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>.</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>.</span>
            </div>

            {/* Progress Percentage */}
            <div className="mt-4 text-white font-mono">
                {progress.toFixed(0)}%
            </div>
        </div>
    );
};

export default LoadingScreen;