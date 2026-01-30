import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Wallet } from 'lucide-react';
import mosipLogo from '../../src/assets/mosip.png';

const DataFlow = () => (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {/* Base Paths */}
            <motion.path
                d="M -100 200 Q 250 150 500 300 T 1100 200"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 4, ease: "easeInOut" }}
            />
            {/* Moving Highlights (Data Packets) */}
            <motion.path
                d="M -100 200 Q 250 150 500 300 T 1100 200"
                fill="none"
                stroke="#2DE2E6"
                strokeWidth="3"
                strokeDasharray="50, 950"
                initial={{ strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <motion.path
                d="M -100 500 Q 300 600 600 450 T 1100 550"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
            />
            <motion.path
                d="M -100 500 Q 300 600 600 450 T 1100 550"
                fill="none"
                stroke="#6C5CE7"
                strokeWidth="3"
                strokeDasharray="40, 960"
                initial={{ strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
            />

            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2DE2E6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#2DE2E6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#2DE2E6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0" />
                    <stop offset="50%" stopColor="#6C5CE7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-minight overflow-hidden flex flex-col items-center justify-center py-20">
            {/* Integrated Top Banner */}
            <div className="absolute top-0 left-0 w-full z-20 p-6 md:p-10">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            {/* Vlinder Logo from User URL */}
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/io.vlinder.logos/vlinder-logo.png"
                                alt="Vlinder Logo"
                                className="w-12 h-12 object-contain"
                            />
                            <div className="text-3xl font-display font-bold text-white tracking-tighter">Vlinder</div>
                        </div>
                        <div className="h-10 w-px bg-white/20 hidden md:block"></div> {/* Vertical Divider */}
                        <div className="flex items-center gap-3">
                            <img
                                src={mosipLogo}
                                alt="MOSIP Logo"
                                className="h-12 object-contain"
                            />
                        </div>
                    </div>

                    {/* MOSIP Connect 2026 Badge on second line */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-md w-fit"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse" />
                        <span className="text-accent font-mono text-sm tracking-widest uppercase font-bold">MOSIP Connect 2026</span>
                    </motion.div>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Network Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

                {/* Innovative Data Flow */}
                <DataFlow />

                {/* Floating Innovative Elements */}
                <motion.div
                    animate={{
                        y: [-20, 20],
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-[15%] w-64 h-64 bg-accent/10 rounded-full blur-[100px] z-0"
                />

                {/* Floating Tech Symbols */}
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-40 right-[10%] opacity-10 blur-[2px]"
                >
                    <Shield className="w-24 h-24 text-accent" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [0, -15, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute top-[20%] right-[25%] opacity-5 blur-[4px]"
                >
                    <Globe className="w-40 h-40 text-secondary" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-60 right-[5%] opacity-10 blur-[1px]"
                >
                    <Wallet className="w-16 h-16 text-highlight" />
                </motion.div>

                <motion.div
                    animate={{
                        x: [-30, 30],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-40 left-[10%] w-80 h-80 bg-secondary/10 rounded-full blur-[120px] z-0"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >

                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white mb-6">
                            Powering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-secondary">
                                Next Generation
                            </span> <br />
                            of Digital Identity
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Discover how Vlinder enables real-world digital identity and social welfare use cases using MOSIP, Inji Wallet, Klefki Wallet, and interoperable verifiable credentials.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="group relative px-8 py-4 bg-accent text-primary font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(45,226,230,0.4)]">
                                <span className="relative z-10 flex items-center">
                                    Explore Use Cases
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>

                            <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 transition-all font-medium backdrop-blur-sm flex items-center">
                                Watch Demo
                            </button>
                        </div>
                    </motion.div>

                    {/* Visual Content - Floating Cards with NEAT ORBIT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[650px] hidden lg:block flex items-center justify-center"
                    >
                        {/* Central Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full border border-secondary/50 backdrop-blur-xl flex items-center justify-center z-20 shadow-[0_0_50px_rgba(108,92,231,0.3)]">
                            <Globe className="w-16 h-16 text-secondary" />
                        </div>

                        {/* Orbit Container - Reduced Radius (180px) to prevent going outside */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite]">
                            {/* Orbiting Elements */}
                            {[
                                { icon: Shield, label: "Trust", subtitle: "Root of Trust", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30", angle: 0 },
                                { icon: Wallet, label: "Wallet", subtitle: "Secure Custody", color: "text-highlight", bg: "bg-highlight/10", border: "border-highlight/30", angle: 120 },
                                { icon: Globe, label: "Identity", subtitle: "Global Standard", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30", angle: 240 },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 w-44 -ml-22 -mt-10"
                                    style={{
                                        transform: `rotate(${item.angle}deg) translate(200px) rotate(-${item.angle}deg)`
                                    }}
                                >
                                    <div className="p-4 rounded-xl bg-minight/90 backdrop-blur-md border border-white/10 shadow-2xl animate-[spin_40s_linear_infinite_reverse]">
                                        <div className="flex items-center gap-3">
                                            <item.icon className={`w-7 h-7 ${item.color}`} />
                                            <div>
                                                <div className={`font-bold text-sm ${item.color}`}>{item.label}</div>
                                                <div className="text-[10px] text-gray-400 uppercase tracking-tighter">{item.subtitle}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
