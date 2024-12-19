"use client";
import React, { useState, useEffect } from 'react';

const FeaturedSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);


    const slides = [
        {
            id: 1,
            title: "Grand Theft Auto V",
            description: "Experience the best-selling open world masterpiece that redefined gaming. Explore Los Santos and Blaine County in this epic crime saga.",
            imageUrl: "/gta_5.jpg",
            buttonText: "Play Now",
            bgColor: "from-purple-600 to-blue-500"
        },
        {
            id: 2,
            title: "Minecraft",
            description: "Build, explore, and create in this boundless sandbox phenomenon. Let your imagination run wild in endless procedurally generated worlds.",
            imageUrl: "/minecraft.jpg",
            buttonText: "Start Creating",
            bgColor: "from-green-500 to-blue-500"
        },
        {
            id: 3,
            title: "Red Dead Redemption 2",
            description: "Live the epic tale of Arthur Morgan in this groundbreaking open-world western adventure.",
            imageUrl: "/rdr_2.jpg",
            buttonText: "Begin Journey",
            bgColor: "from-red-800 to-yellow-700"
        },
        {
            id: 4,
            title: "The Witcher 3: Wild Hunt",
            description: "Embark on an epic journey in a war-ravaged world in this award-winning open-world RPG.",
            imageUrl: "/witcher_3.jpg",
            buttonText: "Start Hunt",
            bgColor: "from-gray-800 to-red-700"
        },
        {
            id: 5,
            title: "Fortnite",
            description: "Join the phenomenon that revolutionized battle royale gaming with constant updates and exciting crossovers.",
            imageUrl: "/fortnite.jpg",
            buttonText: "Drop In",
            bgColor: "from-blue-500 to-purple-500"
        },
        {
            id: 6,
            title: "Call of Duty: Warzone",
            description: "Drop into massive combat arenas with hundreds of players in this free-to-play battle royale experience.",
            imageUrl: "/call_of_duty_warzone.jpg",
            buttonText: "Deploy Now",
            bgColor: "from-gray-700 to-green-700"
        },
        {
            id: 7,
            title: "League of Legends",
            description: "Compete in this legendary MOBA that defined esports and online competitive gaming.",
            imageUrl: "/legend_of_league.jpg",
            buttonText: "Enter Battle",
            bgColor: "from-blue-600 to-purple-600"
        },
        {
            id: 8,
            title: "FIFA 24",
            description: "Experience the beautiful game with unrivaled authenticity and realism.",
            imageUrl: "/fifa_2024.jpg",
            buttonText: "Play Now",
            bgColor: "from-green-600 to-blue-600"
        },
        {
            id: 9,
            title: "The Elder Scrolls V: Skyrim",
            description: "Explore the vast realm of Skyrim in this legendary open-world RPG that defined a generation.",
            imageUrl: "/skyrim_5.jpg",
            buttonText: "Start Adventure",
            bgColor: "from-gray-600 to-blue-800"
        },
        {
            id: 10,
            title: "God of War Ragnarök",
            description: "Continue Kratos and Atreus's epic journey through the nine realms of Norse mythology.",
            imageUrl: "/god_of_war_ragnarok.jpg",
            buttonText: "Begin Saga",
            bgColor: "from-blue-800 to-gray-900"
        },
        {
            id: 11,
            title: "Cyberpunk 2077",
            description: "Live the mercenary life in Night City, a megalopolis obsessed with power and body modification.",
            imageUrl: "/cyberpunk.jpg",
            buttonText: "Enter Night City",
            bgColor: "from-yellow-500 to-red-600"
        },
        {
            id: 12,
            title: "Elden Ring",
            description: "Explore the Lands Between in this collaborative masterpiece from FromSoftware and George R.R. Martin.",
            imageUrl: "/elden_ring.jpg",
            buttonText: "Begin Journey",
            bgColor: "from-yellow-700 to-red-800"
        },
        {
            id: 13,
            title: "Counter-Strike 2",
            description: "Experience the next evolution of the world's most popular tactical shooter.",
            imageUrl: "/counter_strike_2.jpg",
            buttonText: "Join Match",
            bgColor: "from-orange-500 to-red-700"
        },
        {
            id: 14,
            title: "DOTA 2",
            description: "Master the complexity of this legendary MOBA with over a hundred unique heroes.",
            imageUrl: "/dota_2.jpg",
            buttonText: "Enter Battle",
            bgColor: "from-red-700 to-gray-900"
        },
        {
            id: 15,
            title: "Valorant",
            description: "Compete in this tactical shooter where precise gunplay meets unique agent abilities.",
            imageUrl: "/valorant.jpg",
            buttonText: "Play Free",
            bgColor: "from-red-500 to-pink-500"
        },
        {
            id: 16,
            title: "Apex Legends",
            description: "Choose your legend and join forces in this revolutionary team-based battle royale shooter.",
            imageUrl: "/apex_legends.jpg",
            buttonText: "Join the Hunt",
            bgColor: "from-red-600 to-orange-500"
        },
        {
            id: 17,
            title: "Spider-Man 2",
            description: "Swing through Marvel's New York as both Peter Parker and Miles Morales.",
            imageUrl: "/spider_man_2.jpg",
            buttonText: "Start Swinging",
            bgColor: "from-red-600 to-blue-600"
        },
        {
            id: 18,
            title: "The Last of Us Part I & II",
            description: "Experience the emotional journey of Joel and Ellie in this acclaimed narrative masterpiece.",
            imageUrl: "/last_of_us_1_and_2.jpg",
            buttonText: "Begin Story",
            bgColor: "from-green-900 to-gray-800"
        },
        {
            id: 19,
            title: "Baldur's Gate 3",
            description: "Create your own adventure in this critically acclaimed RPG set in the Forgotten Realms.",
            imageUrl: "/baldurs_gate_3.jpg",
            buttonText: "Start Quest",
            bgColor: "from-purple-600 to-red-600"
        },
        {
            id: 20,
            title: "World of Warcraft",
            description: "Enter Azeroth and join millions of players in this legendary MMORPG.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Adventure",
            bgColor: "from-blue-700 to-green-600"
        },
        {
            id: 21,
            title: "Genshin Impact",
            description: "Embark on a journey across Teyvat in this vast open-world action RPG.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Journey",
            bgColor: "from-blue-400 to-green-400"
        },
        {
            id: 22,
            title: "Roblox",
            description: "Join millions of players in this massive platform of user-created gaming experiences.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Play Now",
            bgColor: "from-red-500 to-blue-500"
        },
        {
            id: 23,
            title: "Rainbow Six Siege",
            description: "Engage in tactical team-based combat with destructible environments.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Deploy",
            bgColor: "from-blue-800 to-gray-900"
        },
        {
            id: 24,
            title: "Monster Hunter: World",
            description: "Hunt massive creatures and craft epic gear in this action RPG phenomenon.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Hunt",
            bgColor: "from-yellow-600 to-red-700"
        },
        {
            id: 25,
            title: "Final Fantasy XIV",
            description: "Experience an epic MMORPG saga with millions of players worldwide.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Begin Adventure",
            bgColor: "from-blue-600 to-purple-700"
        },
        // Continuing with more popular games...
        {
            id: 26,
            title: "Pokemon Scarlet & Violet",
            description: "Catch, train, and battle Pokemon in the open world of Paldea.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Journey",
            bgColor: "from-red-500 to-purple-500"
        },
        {
            id: 27,
            title: "Overwatch 2",
            description: "Join the fight for the future in this team-based action game.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Play Free",
            bgColor: "from-orange-400 to-blue-500"
        },
        {
            id: 28,
            title: "Dead by Daylight",
            description: "Survive or hunt in this multiplayer horror game phenomenon.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Join Hunt",
            bgColor: "from-gray-900 to-red-900"
        },
        {
            id: 29,
            title: "Among Us",
            description: "Find the impostor in this social deduction game that took the world by storm.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Join Crew",
            bgColor: "from-blue-500 to-red-500"
        },
        {
            id: 30,
            title: "Fall Guys",
            description: "Stumble towards victory in this colorful battle royale party game.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Running",
            bgColor: "from-pink-500 to-yellow-500"
        },
        {
            id: 31,
            title: "The Sims 4",
            description: "Create and control people in a virtual world in this life simulation phenomenon.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Living",
            bgColor: "from-green-400 to-blue-400"
        },
        {
            id: 32,
            title: "Rocket League",
            description: "Play soccer with rocket-powered cars in this unique sports game.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Match",
            bgColor: "from-blue-500 to-orange-500"
        },
        {
            id: 33,
            title: "ARK: Survival Evolved",
            description: "Survive in a world of dinosaurs and prehistoric creatures.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Surviving",
            bgColor: "from-green-700 to-blue-700"
        },
        {
            id: 34,
            title: "Terraria",
            description: "Dig, fight, explore, build in this beloved 2D adventure game.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Digging",
            bgColor: "from-green-500 to-blue-500"
        },
        {
            id: 35,
            title: "Sea of Thieves",
            description: "Become a pirate legend in this shared-world adventure game.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Set Sail",
            bgColor: "from-blue-600 to-green-500"
        },
        // Adding more games to reach 50...
        {
            id: 36,
            title: "Destiny 2",
            description: "Become a Guardian and protect humanity in this epic shared-world shooter.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Become Legend",
            bgColor: "from-blue-900 to-purple-700"
        },
        {
            id: 37,
            title: "Starfield",
            description: "Explore the stars in Bethesda's epic space RPG adventure.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Launch",
            bgColor: "from-gray-800 to-blue-900"
        },
        {
            id: 38,
            title: "No Man's Sky",
            description: "Explore an infinite procedurally generated universe.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Explore Space",
            bgColor: "from-purple-500 to-pink-500"
        },
        {
            id: 39,
            title: "Diablo IV",
            description: "Fight through hell in this dark action RPG.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Fight Evil",
            bgColor: "from-red-900 to-gray-900"
        },
        {
            id: 40,
            title: "Assassin's Creed Valhalla",
            description: "Become a Viking warrior in this epic historical action RPG.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Raid",
            bgColor: "from-blue-700 to-gray-700"
        },
        {
            id: 41,
            title: "Stardew Valley",
            description: "Build your dream farm in this charming country-life RPG.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Farming",
            bgColor: "from-green-400 to-yellow-400"
        },
        {
            id: 42,
            title: "Persona 5 Royal",
            description: "Live a double life as a high school student and phantom thief.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Start Story",
            bgColor: "from-red-600 to-black"
        },
        {
            id: 43,
            title: "Dark Souls III",
            description: "Face brutal challenges in this legendary action RPG.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Prepare to Die",
            bgColor: "from-gray-800 to-red-900"
        },
        {
            id: 44,
            title: "Street Fighter 6",
            description: "Fight your way to the top in this legendary fighting game series.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Fight Now",
            bgColor: "from-blue-600 to-yellow-500"
        },
        {
            id: 45,
            title: "Hogwarts Legacy",
            description: "Live your wizarding world dreams in this open-world action RPG.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Cast Spells",
            bgColor: "from-purple-800 to-yellow-700"
        },
        {
            id: 46,
            title: "Resident Evil 4 Remake",
            description: "Survive horror in this reimagined survival classic.",
            imageUrl: "/api/placeholder/1200/600",
            buttonText: "Face Fear",
            bgColor: "from-gray-900 to-red-900"
        },
    ];


    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Match with progress bar duration

        return () => clearInterval(timer); // Cleanup on unmount
    }, [activeIndex]);

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % slides.length);
                setIsTransitioning(false);
            }, 1000); // Match this with transition duration
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
                setIsTransitioning(false);
            }, 1000); // Match this with transition duration
        }
    };

    return (
        <div className="relative w-full h-[600px] max-sm:h-[250px] overflow-hidden bg-gray-900 mb-16 max-sm:mb-8">
            {/* Main Slide */}
            <div className="relative h-full">
                <img
                    src={slides[activeIndex].imageUrl}
                    alt={slides[activeIndex].title}
                    className={`w-full h-full object-cover transform transition-transform duration-1000 ease-in-out ${isTransitioning ? 'scale-105 opacity-90' : 'scale-100'
                        }`}
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slides[activeIndex].bgColor} opacity-40 
                    transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-60' : 'opacity-40'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
                    <div className={`space-y-4 transform transition-all duration-1000 ease-in-out ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                        }`}>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight max-sm:text-xl">
                            {slides[activeIndex].title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl max-sm:text-xs">
                            {slides[activeIndex].description}
                        </p>
                        <button className="mt-4 px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold 
                            transform transition hover:scale-105 hover:bg-gray-100 active:scale-95 max-sm:px-5 max-sm:py-2
                                max-sm:text-xs">
                            {slides[activeIndex].buttonText}
                        </button>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white
                    hover:bg-black/70 transition-all transform hover:scale-110 max-sm:p-1 max-sm:left-1"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white
                    hover:bg-black/70 transition-all transform hover:scale-110 max-sm:p-1 max-sm:right-1"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
                    <div
                        className="h-full bg-white transition-all ease-linear"
                        style={{
                            width: `${isTransitioning ? '0%' : '100%'}`,
                            animation: `${isTransitioning ? '' : 'progressBar 5000ms linear infinite'}`
                        }}
                    />
                </div>
            </div>

            <style jsx>{`
                @keyframes progressBar {
                    0% {
                        width: 0%;
                    }
                    100% {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default FeaturedSlider;