
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Shield, Award, Users, Zap } from 'lucide-react';

const Compatibility = () => {
    const ecosystems = [
        { name: "INJI Wallet", icon: Globe, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { name: "DigiLocker", icon: Shield, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
        { name: "EU Digital Identity Wallet", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { name: "UAE PASS", icon: Heart, color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
        { name: "Microsoft Entra Verified ID", icon: Award, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    ];

    return (
        <section className="py-24 bg-surface text-center overflow-hidden relative">
            {/* Tech Mesh Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono mb-4">
                        <Zap size={14} className="mr-2" />
                        Universal Interoperability
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">One Wallet. <br />Unlimited Credentials.</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Klefki breaks silos by supporting global standards and diverse credential ecosystems.
                    </p>
                </motion.div>

                {/* DESKTOP: Static Circular Layout (md+) */}
                <div className="hidden md:flex relative h-[600px] w-full max-w-5xl mx-auto items-center justify-center">
                    {/* Animated Rings Background */}
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-secondary/20 animate-[spin_40s_linear_infinite]" />
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-gray-200 animate-[spin_60s_linear_infinite_reverse]" />

                    {/* Connection Lines Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {ecosystems.map((_, index) => {
                            const angle = (index * 72 * Math.PI) / 180 - (Math.PI / 2);
                            const x2 = 50 + (Math.cos(angle) * 40);
                            const y2 = 50 + (Math.sin(angle) * 40);

                            return (
                                <g key={index}>
                                    <line
                                        x1="50%" y1="50%"
                                        x2={`${x2}%`} y2={`${y2}%`}
                                        stroke="rgba(108, 92, 231, 0.2)"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />
                                    <circle r="3" fill="#6C5CE7">
                                        <animateMotion
                                            dur="3s"
                                            repeatCount="indefinite"
                                            path={`M ${500 / 2} ${600 / 2} L ${(500 / 2) + (Math.cos(angle) * 200)} ${(600 / 2) + (Math.sin(angle) * 200)}`}
                                        />
                                    </circle>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Central Hub */}
                    <div className="relative z-20">
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse" />
                        <div className="w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-secondary/10 relative z-20">
                            <div className="text-3xl font-bold font-display text-secondary tracking-tighter">Klefki</div>
                            <div className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-1">Universal</div>
                        </div>
                    </div>

                    {/* Orbiting Planets */}
                    {ecosystems.map((item, index) => {
                        const angle = (index * 72 * Math.PI) / 180 - (Math.PI / 2);
                        const radius = 220;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.div
                                key={index}
                                className="absolute z-10 transform-gpu"
                                initial={{ x: 0, y: 0, opacity: 0 }}
                                whileInView={{ x: x, y: y, opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className={`w-28 h-28 ${item.bg} ${item.border} border rounded-2xl shadow-lg flex flex-col items-center justify-center backdrop-blur-md hover:scale-110 transition-transform cursor-pointer group bg-white/80 transform-gpu`}>
                                    <item.icon className={`w-8 h-8 ${item.color} mb-2 group-hover:rotate-12 transition-transform`} />
                                    <span className={`text-[10px] font-bold ${item.color} px-2`}>{item.name}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* MOBILE: Innovative Bento Grid (below md) */}
                <div className="md:hidden space-y-8">
                    {/* Mobile Central Hub - Reimagined as a Header */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative mx-auto w-32 h-32 bg-white rounded-full shadow-[0_0_50px_rgba(108,92,231,0.2)] flex flex-col items-center justify-center border-4 border-secondary/10 z-20"
                    >
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse" />
                        <div className="text-xl font-bold font-display text-secondary">Klefki</div>
                        <div className="text-[8px] text-slate-400 font-medium uppercase tracking-[0.2em]">Hub</div>
                    </motion.div>

                    {/* Staggered Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                        {ecosystems.map((eco, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-5 rounded-3xl ${eco.bg} border ${eco.border} flex flex-col items-center justify-center gap-3 backdrop-blur-md transform-gpu ${i === 0 ? 'col-span-2 py-8' : 'col-span-1'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-white/80 shadow-inner flex items-center justify-center`}>
                                    <eco.icon className={`w-6 h-6 ${eco.color}`} />
                                </div>
                                <div className="text-[11px] font-bold text-slate-800 tracking-tight leading-tight px-1 uppercase">
                                    {eco.name}
                                </div>

                                {/* Decorative Connector Node */}
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-secondary/20 shadow-sm" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Tagline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-medium"
                    >
                        Universal Access Protocol
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Compatibility;
