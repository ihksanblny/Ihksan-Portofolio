import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Star = ({ delay, duration, x, y, size }) => (
    <motion.div
        className="absolute rounded-full bg-white"
        style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
        }}
        animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
        }}
    />
);

const Moon = ({ isLaunching }) => (
    <motion.div
        className="absolute top-[10%] z-0"
        initial={{ y: -100, opacity: 0 }}
        animate={{
            y: 0,
            opacity: 1,
            scale: isLaunching ? 1.1 : 1,
            filter: isLaunching ? "brightness(1.2)" : "brightness(1)"
        }}
        transition={{ duration: 1.5 }}
    >
        <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 shadow-[0_0_80px_rgba(255,255,255,0.15)] overflow-hidden">
            {/* Craters */}
            <div className="absolute top-6 left-8 w-8 h-8 rounded-full bg-gray-400/20 shadow-inner" />
            <div className="absolute bottom-10 right-12 w-16 h-16 rounded-full bg-gray-400/20 shadow-inner" />
            <div className="absolute top-1/2 left-6 w-5 h-5 rounded-full bg-gray-400/20 shadow-inner" />
            <div className="absolute top-12 right-8 w-10 h-10 rounded-full bg-gray-400/20 shadow-inner" />
            <div className="absolute bottom-6 left-16 w-6 h-6 rounded-full bg-gray-400/20 shadow-inner" />

            {/* Texture/Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
    </motion.div>
);

export default function LoadingScreen({ onComplete }) {
    const [count, setCount] = useState(0);
    const [stars, setStars] = useState([]);
    const [isLaunching, setIsLaunching] = useState(false);

    useEffect(() => {
        // Generate random stars
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 2,
            duration: Math.random() * 2 + 1,
        }));
        setStars(newStars);

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(interval);
                    setIsLaunching(true);
                    setTimeout(onComplete, 1500); // Wait for rocket to reach moon
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050510] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.5 }
            }}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-[#1a1a2e] via-[#050510] to-black opacity-80" />

            {/* Stars */}
            {stars.map((star) => (
                <Star key={star.id} {...star} />
            ))}

            {/* Moon Object */}
            <Moon isLaunching={isLaunching} />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center pt-40">
                {/* Rocket Container */}
                <motion.div
                    className="mb-8"
                    animate={isLaunching ? {
                        y: -300, // Fly up towards moon
                        scale: 0.1, // Shrink as it gets further away
                        opacity: 0, // Fade out eventually
                        transition: { duration: 1.5, ease: "easeInOut" }
                    } : {
                        y: [0, -10, 0],
                        rotate: [0, 1, -1, 0],
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                    }}
                >
                    {/* Simple SVG Rocket */}
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]"
                    >
                        <path
                            d="M12 2.5C12 2.5 15.5 6 16.5 11C17.5 16 16 19 16 19L12 17L8 19C8 19 6.5 16 7.5 11C8.5 6 12 2.5 12 2.5Z"
                            fill="#E0E0E0"
                            stroke="#FFFFFF"
                            strokeWidth="1"
                        />
                        <path
                            d="M12 17V21.5"
                            stroke="orange"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <motion.path
                            d="M12 21.5L10 23M12 21.5L14 23"
                            stroke="orange"
                            strokeWidth="2"
                            strokeLinecap="round"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity }}
                        />
                        {/* Extra fire when launching */}
                        {isLaunching && (
                            <motion.path
                                d="M12 21.5L8 28M12 21.5L16 28"
                                stroke="red"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
                                transition={{ duration: 0.1, repeat: Infinity }}
                            />
                        )}
                        <circle cx="12" cy="10" r="2" fill="#333" />
                    </svg>
                </motion.div>

                {/* Content wrapper to fade out together */}
                <motion.div
                    animate={isLaunching ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    {/* Counter */}
                    <div className="relative">
                        <h1 className="text-6xl md:text-8xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter">
                            {count}%
                        </h1>

                        {/* Glowing Ring */}
                        <motion.div
                            className="absolute -inset-4 border-2 border-primary/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute -inset-4 border-t-2 border-primary rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {/* Loading Bar */}
                    <div className="w-64 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-orange-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${count}%` }}
                            transition={{ ease: "linear" }}
                        />
                        {/* Shine effect on bar */}
                        <motion.div
                            className="absolute top-0 left-0 h-full w-20 bg-white/30 skew-x-12 blur-sm"
                            animate={{ x: [-100, 300] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <motion.p
                        className="mt-4 text-primary text-sm tracking-[0.5em] uppercase font-medium"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Initiating Launch Sequence...
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}
