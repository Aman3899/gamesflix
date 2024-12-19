"use client"
import React, { useState } from 'react';

const FeaturedSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const slides = [
        {
            id: 1,
            title: "LEGO Fortnite Brick Life",
            description: "Make new friends, explore the sights, land your dream job, and move into your new home in LEGO Fortnite Brick Life!",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Play For Free",
            bgColor: "from-purple-600 to-pink-500"
        },
        {
            id: 2,
            title: "God of War Ragnarök",
            description: "Embark on an epic journey through the nine realms in this action-packed adventure",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Play Now",
            bgColor: "from-blue-600 to-cyan-500"
        },
        {
            id: 3,
            title: "EA SPORTS FC™ 24",
            description: "Experience the beautiful game like never before",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Playing",
            bgColor: "from-green-600 to-emerald-500"
        },
        {
            id: 4,
            title: "Cyberpunk 2077",
            description: "Enter the vast open world of Night City, a megalopolis obsessed with power, glamour, and body modification",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Begin Journey",
            bgColor: "from-yellow-500 to-red-500"
        },
        {
            id: 5,
            title: "The Legend of Zelda: Tears of the Kingdom",
            description: "Explore the vast land and skies of Hyrule in this epic adventure",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Adventure",
            bgColor: "from-green-500 to-yellow-400"
        },
        {
            id: 6,
            title: "Call of Duty: Modern Warfare III",
            description: "Experience the next generation of strategic combat and intense multiplayer action",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Deploy Now",
            bgColor: "from-gray-700 to-gray-900"
        },
        {
            id: 7,
            title: "Spider-Man 2",
            description: "Swing through Marvel's New York as Peter Parker and Miles Morales in this thrilling sequel",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Swinging",
            bgColor: "from-red-600 to-blue-600"
        },
        {
            id: 8,
            title: "Assassin's Creed Mirage",
            description: "Experience the story of Basim in a coming-of-age narrative driven action-adventure",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Begin Story",
            bgColor: "from-amber-500 to-yellow-600"
        },
        {
            id: 9,
            title: "Starfield",
            description: "Embark on an epic journey through the stars in this new space RPG",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Launch Game",
            bgColor: "from-blue-900 to-purple-800"
        },
        {
            id: 10,
            title: "Resident Evil 4 Remake",
            description: "Survive the horror in this completely reimagined survival classic",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Enter If You Dare",
            bgColor: "from-red-900 to-gray-900"
        },
        {
            id: 11,
            title: "Final Fantasy XVI",
            description: "Enter a dark fantasy world where fate and destiny collide",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Begin Saga",
            bgColor: "from-purple-800 to-red-700"
        },
        {
            id: 12,
            title: "Baldur's Gate 3",
            description: "Forge your path through a tale of fellowship and betrayal in this award-winning RPG",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Quest",
            bgColor: "from-purple-600 to-red-600"
        },
        {
            id: 13,
            title: "Horizon Forbidden West",
            description: "Explore distant lands and face new machines in this breathtaking adventure",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Begin Expedition",
            bgColor: "from-green-500 to-blue-500"
        },
        {
            id: 14,
            title: "Red Dead Redemption 2",
            description: "Experience an epic tale of life in America's unforgiving heartland",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Saddle Up",
            bgColor: "from-red-800 to-yellow-700"
        },
        {
            id: 15,
            title: "Elden Ring",
            description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Begin Journey",
            bgColor: "from-yellow-600 to-red-800"
        },
        {
            id: 16,
            title: "Diablo IV",
            description: "Face the darkness and save Sanctuary in this legendary action RPG",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Join Battle",
            bgColor: "from-red-900 to-black"
        },
        {
            id: 17,
            title: "Mortal Kombat 1",
            description: "Experience a reborn Mortal Kombat Universe created by the Fire God Liu Kang",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Fight Now",
            bgColor: "from-red-600 to-yellow-500"
        },
        {
            id: 18,
            title: "Street Fighter 6",
            description: "Rise up and leave your legacy with the next evolution of fighting games",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Fighting",
            bgColor: "from-blue-600 to-yellow-500"
        },
        {
            id: 19,
            title: "Hogwarts Legacy",
            description: "Live the unwritten in this open-world action RPG set in the wizarding world",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Cast Spells",
            bgColor: "from-yellow-800 to-purple-900"
        },
        {
            id: 20,
            title: "The Last of Us Part I",
            description: "Experience the emotional masterpiece that set a new bar for storytelling in games",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Story",
            bgColor: "from-green-900 to-gray-800"
        },
        {
            id: 21,
            title: "Dead Space Remake",
            description: "Experience the classic sci-fi survival horror game rebuilt from the ground up",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Face Fear",
            bgColor: "from-gray-800 to-red-900"
        },
        {
            id: 22,
            title: "Alan Wake 2",
            description: "Dive into the dark depths of this survival horror story from Remedy Entertainment",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Enter Darkness",
            bgColor: "from-gray-900 to-green-900"
        },
        {
            id: 23,
            title: "Star Wars Jedi: Survivor",
            description: "Continue Cal Kestis's journey in this action-adventure saga",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Use The Force",
            bgColor: "from-blue-500 to-red-500"
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
            {/* Main Slide */}
            <div className="relative h-full">
                <img
                    src={slides[activeIndex].imageUrl}
                    alt={slides[activeIndex].title}
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slides[activeIndex].bgColor} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            {slides[activeIndex].title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                            {slides[activeIndex].description}
                        </p>
                        <button className="mt-4 px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold 
                            transform transition hover:scale-105 hover:bg-gray-100 active:scale-95">
                            {slides[activeIndex].buttonText}
                        </button>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white
                hover:bg-black/70 transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white
                hover:bg-black/70 transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots Navigation
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default FeaturedSlider;