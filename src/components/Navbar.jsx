import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-primary/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <span className="text-3xl font-display font-bold text-white tracking-tighter">
                            Vlinder
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-gray-300 hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#demos" className="text-gray-300 hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Use Cases</a>
                            <a href="#lifecycle" className="text-gray-300 hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Lifecycle</a>
                            <a href="#playground" className="text-gray-300 hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Playground</a>
                            <a href="#contact" className="bg-secondary/20 hover:bg-secondary/40 text-secondary border border-secondary/50 px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(108,92,231,0.3)]">
                                Connect
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-accent">Home</a>
                            <a href="#demos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent">Use Cases</a>
                            <a href="#lifecycle" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent">Lifecycle</a>
                            <a href="#playground" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent">Playground</a>
                            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-secondary">Connect</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
