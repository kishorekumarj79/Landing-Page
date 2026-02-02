import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Building2, Wallet, ShieldCheck, Cpu, CheckCircle2, QrCode, Smartphone, Shield, Lock, Globe, Zap } from 'lucide-react';

const Playground = () => {
    const [activeTab, setActiveTab] = useState('issuer');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const steps = [
        {
            id: 'issuer',
            title: "Authority Portal",
            role: "Issuer",
            desc: "Create a W3C-compliant credential anchored to Blockchain.",
            icon: Building2,
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/30",
            badge: "Signed",
            dot: "bg-green-400",
            version: "v1",
            encType: "Lock the credential securely."
        },
        {
            id: 'holder',
            title: "Citizen Wallet",
            role: "Holder",
            desc: "Securely hold and present your verifiable credentials.",
            icon: Wallet,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/30",
            badge: "Secured",
            dot: "bg-blue-400",
            version: "vh",
            encType: "Lock and label the credential."
        },
        {
            id: 'verifier',
            title: "Service Provider",
            role: "Verifier",
            desc: "Request and verify credentials with selective disclosure.",
            icon: ShieldCheck,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/30",
            badge: "Verified",
            dot: "bg-purple-400",
            version: "vv",
            encType: "Lock, label, and verify authenticity."
        }
    ];

    const currentStep = steps.find(s => s.id === activeTab);

    return (
        <section id="playground" className="py-20 bg-black relative overflow-hidden">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Compact Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono tracking-widest uppercase mb-6">
                                <Cpu size={12} className="mr-2" />
                                Trust Framework
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                                The Klefki <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                    Trust Playground
                                </span>
                            </h2>

                            <p className="text-gray-400 text-base md:text-lg mb-4 max-w-lg leading-relaxed">
                                Issue, hold, and verify verifiable credentials using open standards and chain-agnostic blockchain anchoring.
                            </p>

                            <p className="text-gray-500 text-sm md:text-base mb-10 max-w-lg leading-relaxed italic">
                                Explore the playground to issue sample certificates and experience instant verification.
                            </p>

                            <div className="flex flex-col gap-10">
                                <a
                                    href="https://klefki-trust-stage.lovable.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all text-sm flex items-center group shadow-xl"
                                >
                                    Explore Playground
                                    <ArrowUpRight size={18} className="ml-2 group-hover:rotate-45 transition-transform" />
                                </a>

                                {/* Standards Pillars */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                                    {[
                                        { label: "W3C Standards", icon: Globe },
                                        { label: "Privacy by Design", icon: Lock },
                                        { label: "Chain Agnostic", icon: Zap }
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 group/pillar">
                                            <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover/pillar:text-white transition-colors">
                                                <p.icon size={14} />
                                            </div>
                                            <span className="text-[10px] md:text-xs font-medium text-gray-500 group-hover/pillar:text-gray-300 transition-colors tracking-wide">
                                                {p.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: High-Innovation Compact Hub */}
                    <div className="relative">
                        <div className={`bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-4 md:p-8 ${isMobile ? 'backdrop-blur-md' : 'backdrop-blur-xl'}`}>
                            {/* Segmented Controller (Apple-style) */}
                            <div className="flex p-1 bg-black/50 rounded-2xl border border-white/5 mb-8 overflow-hidden">
                                {steps.map((step) => (
                                    <button
                                        key={step.id}
                                        onClick={() => setActiveTab(step.id)}
                                        className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 relative ${activeTab === step.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                    >
                                        {activeTab === step.id && (
                                            <motion.div layoutId="tab-bg" className="absolute inset-0 bg-white/5 rounded-xl border border-white/10" />
                                        )}
                                        <step.icon size={14} className={activeTab === step.id ? step.color : 'text-gray-600'} />
                                        <span className="relative z-10">{step.title}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Hub Display */}
                            <div className="relative flex flex-col items-center justify-center min-h-[300px]">
                                {/* Animated Background Glow */}
                                <motion.div
                                    animate={!isMobile ? {
                                        scale: [1, 1.1, 1],
                                        opacity: [0.1, 0.2, 0.1]
                                    } : { opacity: 0.15 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className={`absolute inset-0 rounded-full blur-[60px] ${currentStep.bg} transform-gpu`}
                                />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                        className="relative w-full text-center transform-gpu"
                                    >
                                        {/* Minimal Card UI */}
                                        <div className="max-w-[320px] mx-auto bg-black/40 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden group">
                                            {/* Card Top */}
                                            <div className="flex justify-between items-start mb-10">
                                                <div className={`p-2 rounded-xl ${currentStep.bg} ${currentStep.color}`}>
                                                    <currentStep.icon size={20} />
                                                </div>
                                                <div className={`px-2 py-1 rounded-md text-[8px] font-mono font-bold uppercase ${currentStep.bg} ${currentStep.color} border ${currentStep.border}`}>
                                                    {currentStep.badge}
                                                </div>
                                            </div>

                                            {/* Card Body */}
                                            <div className="space-y-3 mb-8">
                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: '100%' }}
                                                        transition={{ duration: 1 }}
                                                        className={`h-full bg-gradient-to-r ${currentStep.id === 'issuer' ? 'from-green-500 to-emerald-400' : currentStep.id === 'holder' ? 'from-blue-500 to-indigo-400' : 'from-purple-500 to-fuchsia-400'}`}
                                                    />
                                                </div>
                                                <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                                                <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                                            </div>

                                            {/* Card Footer */}
                                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex -space-x-2">
                                                    <div className="w-5 h-5 rounded-full bg-zinc-800 border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                                    <div className="w-5 h-5 rounded-full bg-zinc-700 border-2 border-black shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-[10px] ${currentStep.color} font-bold leading-tight`}>
                                                        {currentStep.encType}
                                                    </div>
                                                    <div className="text-[9px] text-white/30 font-mono tracking-[0.2em] uppercase mt-0.5">
                                                        Security Stage {currentStep.version}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Scan Beam Effect */}
                                            <motion.div
                                                animate={{ top: ['-10%', '110%'] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className={`absolute left-0 right-0 h-px bg-white/20 z-10 shadow-[0_0_10px_white] opacity-20 transform-gpu ${isMobile ? 'hidden' : ''}`}
                                            />
                                        </div>

                                        {/* Description Below Card */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="mt-8 max-w-[280px] mx-auto text-center"
                                        >
                                            <h4 className={`font-bold text-sm mb-2 uppercase tracking-widest ${currentStep.color}`}>{currentStep.title}</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                                {currentStep.desc}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decorative floating bits */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full ${isMobile ? 'blur-[30px]' : 'blur-[50px]'} pointer-events-none`} />
                        <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full ${isMobile ? 'blur-[30px]' : 'blur-[50px]'} pointer-events-none`} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Playground;
