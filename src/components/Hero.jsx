import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Shield, Wallet, Users, X, Linkedin, ExternalLink, QrCode, Cpu, Server, Shuffle, Zap, Fingerprint, Layers, Mail } from 'lucide-react';
import mosipLogo from '../../src/assets/mosip.png';
import vlinderLogo from '../../src/assets/vlinder-title.png'
import qrcode1 from '../../src/assets/qrcodeS.png'
import qrcode2 from '../../src/assets/qrcodeD.png'
import React from 'react';
import darssini from '../../src/assets/darssini.jpg'
import mahendra from '../../src/assets/mahendra.png'
import ajay from '../../src/assets/Ajay.jpeg'
import shree from '../../src/assets/shree.jpg'
import subashree from '../../src/assets/subashree.jpeg'
import kishore from '../../src/assets/Kishore.jpeg'
import asir from '../../src/assets/asir.jpg'
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

const standards = [
    {
        name: "W3C VC",
        description: "JSON-LD · JWT-VC",
        icon: Shield,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        name: "mDoc (ISO 18013-5)",
        description: "Mobile ID · Offline ready",
        icon: Globe,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    },
    {
        name: "SD-JWT VC",
        description: "Privacy-preserving credentials",
        icon: Fingerprint,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        name: "OpenID4VC",
        description: "Issuance & Presentation",
        icon: Zap,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        name: "DIDs & DIF",
        description: "did:key · did:web · did:ebsi",
        icon: Layers,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
];

const Hero = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [isTeamModalOpen, setIsTeamModalOpen] = React.useState(false);

    const teamMembers = [
        {
            name: "Malini Srinivasan",
            role: "Founder, CEO",
            linkedin: "https://www.linkedin.com/in/malini-srinivasan-b70300153",
            photo: "https://s3.ap-south-1.amazonaws.com/io.vlinder.photos/Malini_Srinivasan.jpeg",
            qr: qrcode1
        },
        {
            name: "Darssini Ramesh",
            role: "Product Market Consultant",
            linkedin: "https://in.linkedin.com/in/darssini-ramesh-952220218",
            photo: darssini,
            qr: qrcode2
        },
        {
            name: "Madhusudhan Srinivasan",
            role: "Engineering and Operations",
            linkedin: "https://www.linkedin.com/in/sudhansrini/",
            photo: "https://s3.ap-south-1.amazonaws.com/io.vlinder.photos/madhu.png",
        },
        {
            name: "Mahendra C",
            role: "Senior Staff Software Engineer",
            linkedin: "https://in.linkedin.com/in/mahendra-c-5609a376",
            photo: mahendra,
        },
        {
            name: "Ajay Raja Pandiyan R",
            role: "Software Engineer",
            linkedin: "https://in.linkedin.com/in/ajay-raja-pandiyan-290a3a275",
            photo: ajay,
        },
        {
            name: "Shree Murugan M",
            role: "Software Engineer - Blockchain/Backend",
            linkedin: "https://in.linkedin.com/in/sri-murugan-m-4581b2200",
            photo: shree,
        },
        {
            name: "Subashree K",
            role: "UI/UX Designer",
            linkedin: "https://in.linkedin.com/in/subashree28",
            photo: subashree,
        },
        {
            name: "Kishore Kumar J",
            role: "Software Developer Engineer",
            linkedin: "https://in.linkedin.com/in/kishore-kumar-j-78d",
            photo: kishore,
        },
        {
            name: "Asir Praveen A",
            role: "Software Developer Engineer",
            linkedin: "https://in.linkedin.com/in/asirpraveen",
            photo: asir,
        }
    ];

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (isTeamModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isTeamModalOpen]);

    return (
        <section className="relative min-h-[100vh] flex items-center bg-primary overflow-hidden">
            {/* Integrated Top Banner */}
            <div className="absolute top-0 left-0 w-full z-20 p-4 md:p-10 pointer-events-none">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pointer-events-auto">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <img
                                    src={vlinderLogo}
                                    alt="MOSIP Logo"
                                    className="h-8 md:h-10 object-contain brightness-110"
                                />
                            </div>
                            <div className="hidden md:block h-8 w-px bg-white/20"></div>
                            <div className="flex items-center">
                                <img
                                    src={mosipLogo}
                                    alt="MOSIP Logo"
                                    className="h-8 md:h-10 object-contain brightness-110"
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center px-4 py-1 rounded-full bg-accent/5 border border-accent/20 backdrop-blur-sm w-fit"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
                            <span className="text-accent font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">MOSIP Connect 2026</span>
                        </motion.div>
                    </div>

                    {/* Innovative Navigation Dock - Integrated into Header */}
                    <nav className="flex items-center gap-2 p-1.5 bg-slate-900/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-xl group hover:border-accent/40 transition-all duration-500">
                        {[
                            { name: 'Ecosystem', id: 'demos', icon: Wallet },
                            { name: 'Life Cycle', id: 'lifecycle', icon: Shuffle },
                            { name: 'Contact', id: 'contact', icon: Mail }
                        ].map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group/btn relative"
                            >
                                <link.icon size={16} className="group-hover/btn:text-accent group-hover/btn:scale-110 transition-all" />
                                <span className="text-[11px] font-bold tracking-tight hidden xl:block">{link.name}</span>

                                {/* Tooltip for Mobile/Laptop */}
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-accent text-primary text-[10px] font-bold rounded shadow-lg opacity-0 group-hover/btn:opacity-100 xl:hidden transition-opacity">
                                    {link.name}
                                </span>
                            </button>
                        ))}
                    </nav>

                    {/* Connect Team Button - Restored Standalone Style */}
                    <motion.button
                        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={isMobile ? {} : { scale: 1.05, boxShadow: "0 0 30px rgba(45,226,230,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsTeamModalOpen(true)}
                        className="group relative px-6 py-3 bg-white/[0.03] hover:bg-white/[0.08] text-white rounded-full border border-white/10 backdrop-blur-2xl transition-all flex items-center gap-3 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <Users className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform" />
                        <span className="font-bold tracking-tight text-sm md:text-base">Connect With Our Team</span>
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </motion.button>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary" />

                {/* Simplified Blurs for performance - reduced blur on mobile */}
                <div className={`absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full ${isMobile ? 'blur-xl' : 'blur-2xl md:blur-3xl'}`} />

                {/* Network Grid Overlay - Simplified on Mobile */}
                <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] ${isMobile ? 'bg-[size:100px_100px]' : 'bg-[size:50px_50px]'} [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]`} />

                {/* Innovative Data Flow - Hidden on small mobile and when modal is open */}
                {!isMobile && !isTeamModalOpen && <DataFlow />}

                {/* Floating Tech Symbols - Only on Desktop for performance, hidden when modal is open */}
                {!isMobile && !isTeamModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-40 right-[10%] blur-[2px] transform-gpu"
                        >
                            <Shield className="w-24 h-24 text-accent" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.05 }}
                            viewport={{ once: true, margin: "-100px" }}
                            animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [0, -15, 0] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                            className="absolute top-[20%] right-[25%] blur-[4px] transform-gpu"
                        >
                            <Globe className="w-40 h-40 text-secondary" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-60 right-[5%] blur-[1px] transform-gpu"
                        >
                            <Wallet className="w-16 h-16 text-highlight" />
                        </motion.div>
                    </>
                )}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-60 md:pt-48 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: isMobile ? 0 : 0.8 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-6">
                            <Zap size={14} className="mr-2" />
                            Universal Interoperability
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-white mb-8 tracking-tight">
                            One Wallet. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-accent to-blue-500">
                                Every Credential
                            </span> <br />
                            Standard.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-medium">
                            Powering the next generation of secure, interoperable digital identity - built on open standards. </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => {
                                    document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group relative px-8 py-4 bg-accent text-primary font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(45,226,230,0.4)]"
                            >
                                <span className="relative z-10 flex items-center">
                                    Explore Playground
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Circular Orbit for Standards (Replacement for Grid) */}
                    <div className="relative h-[550px] hidden lg:flex items-center justify-center transform-gpu">
                        {/* Animated Rings */}
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-accent/20 animate-[spin_40s_linear_infinite]" />
                        <div className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-white/5 animate-[spin_60s_linear_infinite_reverse]" />

                        {/* Connection Lines (Static SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {standards.map((_, index) => {
                                const angle = (index * 72 * Math.PI) / 180 - (Math.PI / 2);
                                const x2 = 50 + (Math.cos(angle) * 35);
                                const y2 = 50 + (Math.sin(angle) * 35);
                                return (
                                    <line
                                        key={index}
                                        x1="50%" y1="50%"
                                        x2={`${x2}%`} y2={`${y2}%`}
                                        stroke="rgba(45, 226, 230, 0.1)"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                    />
                                );
                            })}
                        </svg>

                        {/* Central Hub */}
                        <div className="relative z-20">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse" />
                            <div className="w-28 h-28 bg-primary/80 backdrop-blur-xl rounded-full border border-accent/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(45,226,230,0.2)]">
                                <div className="text-2xl font-bold font-display text-accent tracking-tighter">Klefki</div>
                            </div>
                        </div>

                        {/* Orbiting Standards Cards */}
                        {standards.map((item, index) => {
                            const angle = (index * 72 * Math.PI) / 180 - (Math.PI / 2);
                            const radius = 220;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute z-10 transform-gpu"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{ x: x, y: y, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                >
                                    <div className={`p-5 rounded-[2.5rem] bg-white/[0.03] border ${item.border} backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-all duration-500 transform-gpu group cursor-pointer text-center w-40 h-40 flex flex-col items-center justify-center border-white/10`}>
                                        <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500 shadow-inner overflow-hidden relative`}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <item.icon className="w-6 h-6 text-accent relative z-10" />
                                        </div>
                                        <h4 className="text-xs font-bold text-white mb-1.5 leading-tight tracking-tight uppercase">{item.name}</h4>
                                        <p className="text-[10px] text-gray-400 font-medium leading-tight max-w-[80px]">{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile Standards Grid */}
                    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {standards.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className={`relative p-6 rounded-3xl bg-white/[0.03] border ${item.border} flex items-center gap-5 backdrop-blur-sm`}
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-accent" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                                    <p className="text-[10px] text-gray-400 font-medium">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Team Modal - Innovative Fullscreen Glass Version */}

            <AnimatePresence>
                {isTeamModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center"
                    >
                        <div
                            className={`absolute inset-0 bg-primary transition-opacity duration-300`}
                            onClick={() => setIsTeamModalOpen(false)}
                        />

                        <motion.div
                            initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={isMobile ? { opacity: 0 } : { scale: 0.9, opacity: 0, y: 20 }}
                            transition={isMobile ? { duration: 0 } : {
                                type: "spring",
                                damping: 25,
                                stiffness: 300
                            }}
                            className={`relative w-full h-[100dvh] md:h-auto md:max-h-[90vh] md:max-w-7xl md:rounded-[3rem] bg-minight shadow-2xl overflow-hidden flex flex-col transform-gpu will-change-transform`}
                        >
                            {/* Modal Header */}
                            <div className={`sticky top-0 z-30 p-6 md:p-8 flex justify-between items-center bg-minight`}>
                                <div className="text-left">
                                    <h2 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">The Innovation Team</h2>
                                    <div className="h-1 w-20 bg-accent mt-2 rounded-full shadow-[0_0_10px_rgba(45,226,230,0.5)]" />
                                </div>
                                <button
                                    onClick={() => setIsTeamModalOpen(false)}
                                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:rotate-90 active:scale-90"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>

                            {/* Scrollable Content - Scrollbar Hidden */}
                            <div className="flex-grow overflow-y-auto px-4 sm:px-8 md:px-12 pb-20 pt-4 no-scrollbar">
                                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8 max-w-[1440px] mx-auto">
                                    {teamMembers.map((member, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={isMobile ? { duration: 0 } : {
                                                delay: 0.1 + idx * 0.05,
                                                duration: 0.4,
                                                ease: "easeOut"
                                            }}
                                            className={`group relative transform-gpu ${idx === teamMembers.length - 1 ? 'lg:col-span-2 lg:mx-auto lg:w-[calc(50%-1rem)] 2xl:col-span-1 2xl:w-full' : ''}`}
                                        >
                                            <div className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 lg:p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-accent/30 overflow-hidden transform-gpu">

                                                <div className="relative z-10 w-full">
                                                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start">
                                                        {/* Compact Profile Photo */}
                                                        <div className="relative flex-shrink-0">
                                                            <div className="absolute inset-0 bg-accent rounded-[2rem] rotate-6 opacity-10 group-hover:rotate-12 transition-transform duration-500 transform-gpu" />
                                                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-xl transform-gpu">
                                                                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                                                    <Users size={32} className="text-white/10" />
                                                                </div>
                                                                <img
                                                                    src={member.photo}
                                                                    alt={member.name}
                                                                    className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover object-top rounded-[1.8rem] group-hover:scale-110 transition-transform duration-700 transform-gpu"
                                                                    onError={(e) => e.target.style.display = 'none'}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="text-center sm:text-left flex-grow">
                                                            <div className="mb-4 md:mb-6">
                                                                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 leading-tight">{member.name}</h3>
                                                                <p className="text-accent font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                                                                    {member.role}
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-col gap-3">
                                                                {/* LinkedIn Action */}
                                                                <a
                                                                    href={member.linkedin}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-full flex items-center justify-center gap-4 p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-white/70 hover:text-white transition-all group/link"
                                                                >
                                                                    <Linkedin size={18} className="group-hover/link:text-accent transition-all" />
                                                                    <span className="font-bold text-xs md:text-sm">Profile</span>
                                                                    <ExternalLink size={12} className="opacity-40" />
                                                                </a>

                                                                {/* Direct QR Display - Conditional */}
                                                                {member.qr && (
                                                                    <div className="p-3 md:p-4 bg-white/[0.05] rounded-2xl border border-white/10 flex items-center justify-center gap-4">
                                                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-1.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                                                            <img
                                                                                src={member.qr}
                                                                                alt="LinkedIn QR"
                                                                                className="w-full h-full object-contain"
                                                                                onError={(e) => {
                                                                                    e.target.style.display = 'none';
                                                                                    e.target.nextSibling.style.display = 'flex';
                                                                                }}
                                                                            />
                                                                            <div className="hidden w-full h-full flex flex-col items-center justify-center text-gray-300">
                                                                                <QrCode size={24} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-left">
                                                                            <div className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">Scan Connect</div>
                                                                            <div className="text-[9px] md:text-[10px] text-white/40 leading-tight">Fast direct access to<br />LinkedIn Profile</div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-gray-500 text-sm text-center mt-12 mb-4">Empowering the world through verifiable trust.</p>
                            </div>

                            {/* Decorative Elements */}
                            {/* Decorative Elements - Reduced blur on mobile */}
                            <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full ${isMobile ? 'blur-[60px]' : 'blur-[100px]'} pointer-events-none`} />
                            <div className={`absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full ${isMobile ? 'blur-[60px]' : 'blur-[100px]'} pointer-events-none`} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};

export default Hero;
