import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Building2, Wallet, ShieldCheck, Cpu, Globe, Lock, Zap } from 'lucide-react';

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
            role: "Authority Portal",
            desc: "Create a W3C-compliant credential anchored to Blockchain.",
            icon: Building2,
            color: "text-emerald-600",
            accent: "from-emerald-500 to-emerald-600",
            bg: "bg-emerald-50",
            bgDark: "bg-emerald-500/10",
            border: "border-emerald-200",
            badge: "SIGNED",
            dot: "bg-emerald-500",
            version: "V1",
            encType: "Lock the credential securely.",
            gradientBg: "from-emerald-500/5 to-emerald-600/5"
        },
        {
            id: 'holder',
            title: "Citizen Wallet",
            role: "Citizen Wallet",
            desc: "Securely hold and present your verifiable credentials.",
            icon: Wallet,
            color: "text-blue-600",
            accent: "from-blue-500 to-blue-600",
            bg: "bg-blue-50",
            bgDark: "bg-blue-500/10",
            border: "border-blue-200",
            badge: "SECURED",
            dot: "bg-blue-500",
            version: "VH",
            encType: "End-to-End Encrypted",
            gradientBg: "from-blue-500/5 to-blue-600/5"
        },
        {
            id: 'verifier',
            title: "Service Provider",
            role: "Service Provider",
            desc: "Request and verify credentials with selective disclosure.",
            icon: ShieldCheck,
            color: "text-purple-600",
            accent: "from-purple-500 to-purple-600",
            bg: "bg-purple-50",
            bgDark: "bg-purple-500/10",
            border: "border-purple-200",
            badge: "VERIFIED",
            dot: "bg-purple-500",
            version: "VV",
            encType: "Instant Verification",
            gradientBg: "from-purple-500/5 to-purple-600/5"
        }
    ];

    const currentStep = steps.find(s => s.id === activeTab);

    return (
        <section id="playground" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ 
                    backgroundImage: 'radial-gradient(circle, #1A1F2E 1px, transparent 1px)', 
                    backgroundSize: '32px 32px' 
                }} 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold tracking-[0.15em] uppercase mb-6 shadow-sm">
                                <Cpu size={13} className="mr-2 text-blue-600" />
                                Trust Framework
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                The Klefki <br />
                                Trust Playground
                            </h2>

                            <p className="text-slate-600 text-lg mb-6 max-w-lg leading-[1.7] tracking-tight font-medium">
                                Issue, hold, and verify verifiable credentials using open standards and chain-agnostic blockchain anchoring.
                            </p>

                            <p className="text-slate-500 text-sm mb-12 max-w-lg leading-relaxed font-medium tracking-wide italic">
                                Explore the playground to issue sample certificates and experience instant verification.
                            </p>

                            <div className="flex flex-col gap-10">
                                <a
                                    href="https://klefki-trust-stage.lovable.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-fit px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:scale-[1.02] transition-all text-sm flex items-center group shadow-[0_8px_30px_rgb(37,99,235,0.25)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.35)] active:scale-95"
                                >
                                    Explore Live Playground
                                    <ArrowUpRight size={18} className="ml-2 group-hover:rotate-45 transition-transform" />
                                </a>

                                {/* Standards Pillars */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                                    {[
                                        { label: "W3C Standards", icon: Globe, color: "text-emerald-600" },
                                        { label: "Privacy by Design", icon: Lock, color: "text-blue-600" },
                                        { label: "Chain Agnostic", icon: Zap, color: "text-purple-600" }
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 group/pillar">
                                            <div className={`p-2.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 ${p.color} group-hover/pillar:scale-110 transition-all shadow-sm`}>
                                                <p.icon size={16} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-[11px] md:text-xs font-semibold text-slate-600 group-hover/pillar:text-slate-900 transition-colors tracking-wide">
                                                {p.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Interactive Hub */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-[2.5rem] p-6 md:p-10 shadow-2xl">
                            {/* Segmented Controller */}
                            <div className="flex p-1.5 bg-slate-800/50 rounded-2xl border border-slate-700/50 mb-10 overflow-hidden backdrop-blur-sm">
                                {steps.map((step) => (
                                    <button
                                        key={step.id}
                                        onClick={() => setActiveTab(step.id)}
                                        className={`flex-1 py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2.5 relative ${
                                            activeTab === step.id ? 'text-white' : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        {activeTab === step.id && (
                                            <motion.div 
                                                layoutId="tab-bg" 
                                                className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl border border-slate-500/30 shadow-lg" 
                                            />
                                        )}
                                        <step.icon size={18} className={`relative z-10 ${activeTab === step.id ? 'text-white' : 'text-gray-300'}`} strokeWidth={2.5} />
                                        <span className="relative z-10">{step.title}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Hub Display */}
                            <div className="relative flex flex-col items-center justify-center min-h-[320px]">
                                {/* Animated Background Glow */}
                                <motion.div
                                    animate={!isMobile ? {
                                        scale: [1, 1.15, 1],
                                        opacity: [0.15, 0.25, 0.15]
                                    } : { opacity: 0.2 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className={`absolute inset-0 rounded-full blur-[80px] ${currentStep.bgDark} transform-gpu`}
                                />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 0.92, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.92, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full text-center transform-gpu"
                                    >
                                        {/* Premium Card UI */}
                                        <div className="max-w-[340px] mx-auto bg-gradient-to-br from-white via-slate-50 to-white border-2 border-slate-200 rounded-3xl p-7 shadow-2xl overflow-hidden group">
                                            {/* Card Top */}
                                            <div className="flex justify-between items-start mb-8">
                                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentStep.bg} ${currentStep.color} border ${currentStep.border} shadow-md`}>
                                                    <currentStep.icon size={24} strokeWidth={2.5} />
                                                </div>
                                                <div className={`px-3 py-1.5 rounded-xl text-[9px] font-mono font-bold uppercase ${currentStep.bg} ${currentStep.color} border-2 ${currentStep.border} shadow-sm`}>
                                                    {currentStep.badge}
                                                </div>
                                            </div>

                                            {/* Card Body - Progress Bars */}
                                            <div className="space-y-3.5 mb-10">
                                                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: '100%' }}
                                                        transition={{ duration: 1, ease: "easeOut" }}
                                                        className={`h-full bg-gradient-to-r ${currentStep.accent} shadow-sm`}
                                                    />
                                                </div>
                                                <div className="h-2 w-4/5 bg-slate-100 rounded-full border border-slate-200" />
                                                <div className="h-2 w-3/5 bg-slate-100 rounded-full border border-slate-200" />
                                            </div>

                                            {/* Card Footer */}
                                            <div className="pt-6 border-t-2 border-slate-200 flex items-center justify-between">
                                                <div className="flex -space-x-2.5">
                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 border-2 border-white shadow-md" />
                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 border-2 border-white shadow-md" />
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-xs ${currentStep.color} font-bold leading-tight`}>
                                                        {currentStep.encType}
                                                    </div>
                                                    <div className="text-[9px] text-slate-400 font-mono tracking-[0.2em] uppercase mt-1">
                                                        Security Stage {currentStep.version}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Scan Beam Effect */}
                                            {!isMobile && (
                                                <motion.div
                                                    animate={{ top: ['-10%', '110%'] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className={`absolute left-0 right-0 h-[2px] bg-gradient-to-r ${currentStep.accent} z-10 shadow-lg opacity-30 transform-gpu`}
                                                />
                                            )}
                                        </div>

                                        {/* Description Below Card */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="mt-10 max-w-[300px] mx-auto text-center"
                                        >
                                            <h4 className={`font-bold text-sm mb-3 uppercase tracking-widest ${currentStep.color}`}>
                                                {currentStep.title}
                                            </h4>
                                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                                {currentStep.desc}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decorative floating orbs */}
                        <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full ${isMobile ? 'blur-[40px]' : 'blur-[60px]'} pointer-events-none`} />
                        <div className={`absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full ${isMobile ? 'blur-[40px]' : 'blur-[60px]'} pointer-events-none`} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Playground;