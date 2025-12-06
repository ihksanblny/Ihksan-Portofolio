import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Wait a bit before finishing
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-bg text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Counter */}
            <div className="relative">
                <motion.h1
                    className="text-6xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {count}%
                </motion.h1>

                {/* Thin Gold Line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            {/* Quote or Subtext */}
            <motion.p
                className="mt-8 text-text-muted text-sm tracking-[0.3em] uppercase font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Crafting Digital Experiences
            </motion.p>
        </motion.div>
    );
}
