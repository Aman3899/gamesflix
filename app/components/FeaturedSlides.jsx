"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
            imageUrl: "/world_of_warcraft.jpg",
            buttonText: "Start Adventure",
            bgColor: "from-blue-700 to-green-600"
        },
        {
            id: 21,
            title: "Genshin Impact",
            description: "Embark on a journey across Teyvat in this vast open-world action RPG.",
            imageUrl: "/genshin_impact.jpg",
            buttonText: "Start Journey",
            bgColor: "from-blue-400 to-green-400"
        },
        {
            id: 22,
            title: "Roblox",
            description: "Join millions of players in this massive platform of user-created gaming experiences.",
            imageUrl: "/roblox.jpg",
            buttonText: "Play Now",
            bgColor: "from-red-500 to-blue-500"
        },
        {
            id: 23,
            title: "Rainbow Six Siege",
            description: "Engage in tactical team-based combat with destructible environments.",
            imageUrl: "/rainbow_six_siege.jpg",
            buttonText: "Deploy",
            bgColor: "from-blue-800 to-gray-900"
        },
        {
            id: 24,
            title: "Monster Hunter: World",
            description: "Hunt massive creatures and craft epic gear in this action RPG phenomenon.",
            imageUrl: "/monster_hunter_world.jpg",
            buttonText: "Start Hunt",
            bgColor: "from-yellow-600 to-red-700"
        },
        {
            id: 25,
            title: "Final Fantasy XIV",
            description: "Experience an epic MMORPG saga with millions of players worldwide.",
            imageUrl: "/final_fantasy_16.jpg",
            buttonText: "Begin Adventure",
            bgColor: "from-blue-600 to-purple-700"
        },
        // Continuing with more popular games...
        {
            id: 26,
            title: "Far Cry 5",
            description: "Fight to free Hope County from a doomsday cult in this open-world FPS.",
            imageUrl: "/far_cry_5.jpeg",
            buttonText: "Liberate Now",
            bgColor: "from-blue-600 to-green-400"
        },
        {
            id: 27,
            title: "Far Cry 6",
            description: "Lead a revolution to free the island of Yara in this thrilling adventure.",
            imageUrl: "/far_cry_6.jpg",
            buttonText: "Start Revolution",
            bgColor: "from-red-600 to-orange-400"
        },
        {
            id: 28,
            title: "Watch Dogs 2",
            description: "Hack your way through the vibrant streets of San Francisco.",
            imageUrl: "/watch_dogs_2.jpg",
            buttonText: "Hack the City",
            bgColor: "from-gray-800 to-blue-500"
        },
        {
            id: 29,
            title: "Watch Dogs: Legion",
            description: "Build your resistance and reclaim a dystopian London.",
            imageUrl: "/watch_dogs_legion.jpg",
            buttonText: "Join Resistance",
            bgColor: "from-yellow-400 to-red-500"
        },
        {
            id: 30,
            title: "Tekken 7",
            description: "Fight your way to glory in this iconic fighting game.",
            imageUrl: "/tekken_7.jpg",
            buttonText: "Fight Now",
            bgColor: "from-red-600 to-black"
        },
        {
            id: 31,
            title: "Tekken 8",
            description: "Experience the next generation of epic fights and stories.",
            imageUrl: "/tekken_8.jpg",
            buttonText: "Enter the Battle",
            bgColor: "from-blue-600 to-gray-800"
        },
        {
            id: 32,
            title: "Hogwarts Legacy",
            description: "Live your wizarding dreams in this open-world action RPG.",
            imageUrl: "/hogwarts_legacy.jpg",
            buttonText: "Cast Spells",
            bgColor: "from-purple-800 to-yellow-700"
        },
        {
            id: 33,
            title: "Detroit: Become Human",
            description: "Shape humanity's future in this gripping interactive drama.",
            imageUrl: "/detroit_become_human.jpg",
            buttonText: "Decide Fate",
            bgColor: "from-gray-900 to-blue-500"
        },
        {
            id: 34,
            title: "Uncharted 4: A Thief's End",
            description: "Embark on Nathan Drake's final adventure in this action-packed story.",
            imageUrl: "/uncharted_4.jpg",
            buttonText: "Start Adventure",
            bgColor: "from-blue-700 to-gray-700"
        },
        {
            id: 35,
            title: "Battlefield 2042",
            description: "Join the epic battles in this futuristic warfare experience.",
            imageUrl: "/battlefield_2042.jpg",
            buttonText: "Start Combat",
            bgColor: "from-gray-800 to-blue-600"
        },
        {
            id: 36,
            title: "Resident Evil Village",
            description: "Survive the horrors of a mysterious village in this survival horror game.",
            imageUrl: "/resident_evil_village.jpg",
            buttonText: "Survive Now",
            bgColor: "from-gray-900 to-purple-900"
        },
        {
            id: 37,
            title: "Resident Evil 4 Remake",
            description: "Experience the reimagined classic survival horror adventure.",
            imageUrl: "/resident_evil_4_remake.jpg",
            buttonText: "Face the Horror",
            bgColor: "from-red-900 to-black"
        },
        {
            id: 38,
            title: "Sniper Elite 5",
            description: "Take out targets with precision in this tactical shooter.",
            imageUrl: "/sniper_elite_5.jpg",
            buttonText: "Take the Shot",
            bgColor: "from-gray-800 to-green-700"
        },
        {
            id: 39,
            title: "GTA San Andreas",
            description: "Explore and conquer the streets of Los Santos.",
            imageUrl: "/gta_san_andreas.jpg",
            buttonText: "Start Chaos",
            bgColor: "from-yellow-500 to-orange-500"
        },
        {
            id: 40,
            title: "GTA Vice City",
            description: "Relive the neon-soaked streets of the '80s in Vice City.",
            imageUrl: "/gta_vice_city.jpg",
            buttonText: "Take Control",
            bgColor: "from-pink-600 to-purple-700"
        },
        {
            id: 41,
            title: "GTA IV",
            description: "Climb to the top of Liberty City's underworld.",
            imageUrl: "/gta_iv.jpg",
            buttonText: "Explore Now",
            bgColor: "from-gray-700 to-blue-800"
        },
        {
            id: 42,
            title: "Red Dead Redemption",
            description: "Ride into the Old West and experience the story of John Marston.",
            imageUrl: "/red_dead_redemption.jpg",
            buttonText: "Ride Now",
            bgColor: "from-brown-600 to-orange-700"
        },
        {
            id: 43,
            title: "Mafia III",
            description: "Rebuild your criminal empire in 1968 New Bordeaux.",
            imageUrl: "/mafia_iii.jpg",
            buttonText: "Start Empire",
            bgColor: "from-red-700 to-black"
        },
        {
            id: 44,
            title: "Max Payne 3",
            description: "Dive into this gripping, action-packed third-person shooter.",
            imageUrl: "/max_payne_3.jpg",
            buttonText: "Start Revenge",
            bgColor: "from-gray-700 to-blue-700"
        },
        {
            id: 45,
            title: "Hitman 3",
            description: "Become the ultimate assassin in this stealth action game.",
            imageUrl: "/hitman_3.jpg",
            buttonText: "Assassinate Now",
            bgColor: "from-gray-900 to-black"
        },
        {
            id: 46,
            title: "Assassin's Creed Origins",
            description: "Uncover the origins of the Brotherhood in ancient Egypt.",
            imageUrl: "/assassins_creed_origins.jpg",
            buttonText: "Start Quest",
            bgColor: "from-yellow-700 to-orange-600"
        },
        {
            id: 47,
            title: "Assassin's Creed Odyssey",
            description: "Embark on an epic journey through ancient Greece.",
            imageUrl: "/assassins_creed_odyssey.jpg",
            buttonText: "Conquer Greece",
            bgColor: "from-blue-700 to-green-600"
        },
        {
            id: 48,
            title: "WWE 2K23",
            description: "Step into the ring and dominate in the world of WWE.",
            imageUrl: "/wwe_2k23.jpg",
            buttonText: "Enter Ring",
            bgColor: "from-red-700 to-blue-700"
        },
        {
            id: 49,
            title: "PES 2023",
            description: "Experience football like never before in this realistic simulation.",
            imageUrl: "/pes_2023.jpg",
            buttonText: "Play Now",
            bgColor: "from-green-500 to-blue-500"
        }
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

    let router = useRouter();


    const getGameName = (game) => {
        if (!game) return '';
        if ( game == "PES 2023") { return "327269"; }
        if ( game == "Assassin's Creed Odyssey" ) { return "58616"; }
        if ( game == "Assassin's Creed Origins" ) { return "28153"; }
        if ( game == "GTA IV" ) { return "4459"; }
        return game
            .replace(/\s+/g, '-')  // Replace spaces with hyphens
            .replace(/:/g, '')     // Remove colons
            .toLowerCase();        // Convert to lowercase
    }


    return (
        <div className="relative w-full h-[600px] max-sm:h-[250px] overflow-hidden bg-gray-900 mb-16 max-sm:mb-8">
            {/* Main Slide */}
            <div className="relative h-full">
                <Image
                    width={1920}
                    height={1080}
                    src={slides[activeIndex].imageUrl}
                    alt={slides[activeIndex].title}
                    className={`w-full h-full object-fit transform transition-transform duration-1000 ease-in-out ${isTransitioning ? 'scale-105 opacity-90' : 'scale-100'
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
                        <button onClick={() => { router.push(`/game/${getGameName(slides[activeIndex].title)}`) }} className="mt-4 px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold 
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