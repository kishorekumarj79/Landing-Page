import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Shield, Wallet, Users, X, Linkedin, ExternalLink, QrCode } from 'lucide-react';
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
            name: "Suresh Jagannathan",
            role: "Chief Strategic and Revenue Officer",
            linkedin: "https://www.linkedin.com/in/sureshjagannathan/",
            photo: "https://s3.ap-south-1.amazonaws.com/io.vlinder.photos/SureshJ.jpeg",
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

                    {/* Connect Team Button - Innovative Floating Style */}
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-60 md:pt-40 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: isMobile ? 0 : 0.8 }}
                        className="text-left"
                    >

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white mb-6">
                            Powering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-highlight to-secondary px-1">
                                Next Generation
                            </span> <br className="hidden sm:block" />
                            of Digital Identity
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Discover how Vlinder enables real-world digital identity and social welfare use cases using MOSIP, Inji Wallet, Klefki Wallet, and interoperable verifiable credentials.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => {
                                    document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group relative px-8 py-4 bg-accent text-primary font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(45,226,230,0.4)]"
                            >
                                <span className="relative z-10 flex items-center">
                                    Explore Use Cases
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[650px] hidden lg:block flex items-center justify-center transform-gpu"
                    >
                        {/* Central Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full border border-secondary/50 backdrop-blur-xl flex items-center justify-center z-20 shadow-[0_0_50px_rgba(108,92,231,0.3)] transform-gpu">
                            <Globe className="w-16 h-16 text-secondary" />
                        </div>

                        {/* Orbit Container - Reduced Radius (180px) to prevent going outside */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite] transform-gpu">
                            {/* Orbiting Elements */}
                            {[
                                { icon: Shield, label: "Trust", subtitle: "Root of Trust", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30", angle: 0 },
                                { icon: Wallet, label: "Wallet", subtitle: "Secure Custody", color: "text-highlight", bg: "bg-highlight/10", border: "border-highlight/30", angle: 120 },
                                { icon: Globe, label: "Identity", subtitle: "Global Standard", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30", angle: 240 },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 w-44 -ml-22 -mt-10 transform-gpu"
                                    style={{
                                        transform: `rotate(${item.angle}deg) translate(200px) rotate(-${item.angle}deg)`
                                    }}
                                >
                                    <div className="p-4 rounded-xl bg-minight/90 backdrop-blur-md border border-white/10 shadow-2xl animate-[spin_40s_linear_infinite_reverse] transform-gpu">
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
                            className={`absolute inset-0 bg-primary/60 ${isMobile ? '' : 'backdrop-blur-lg'} transition-opacity duration-300`}
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
                            className={`relative w-full h-[100dvh] md:h-auto md:max-h-[90vh] md:max-w-7xl md:rounded-[3rem] bg-minight/95 md:bg-minight/60 border-white/10 shadow-2xl overflow-hidden flex flex-col transform-gpu will-change-transform ${isMobile ? '' : 'backdrop-blur-xl'}`}
                        >
                            {/* Modal Header */}
                            <div className={`sticky top-0 z-30 p-6 md:p-8 flex justify-between items-center bg-minight md:bg-gradient-to-b md:from-minight/95 md:to-transparent ${isMobile ? '' : 'backdrop-blur-md'}`}>
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
                                            className="group relative transform-gpu"
                                        >
                                            <div className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 lg:p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-accent/30 overflow-hidden transform-gpu">
                                                {/* Decorative background number - Hidden on mobile for performance */}
                                                {!isMobile && (
                                                    <div className="absolute -top-10 -right-10 text-[12rem] font-bold text-white/[0.02] pointer-events-none select-none">
                                                        0{idx + 1}
                                                    </div>
                                                )}

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
        </section>
    );
};

export default Hero;
