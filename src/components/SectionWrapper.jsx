import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, title, subtitle }) => (
    <motion.section
        id={id}
        className="min-h-screen container mx-auto py-24 px-6 flex flex-col justify-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
    >
        <div className="mb-16 text-center">
            {subtitle && (
                <span className="text-primary text-sm tracking-[0.2em] uppercase mb-3 block font-sans">
                    {subtitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white relative inline-block">
                {title}
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-[1px] bg-primary/50"></span>
            </h2>
        </div>
        {children}
    </motion.section>
);

export default SectionWrapper;
