
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

                {/* VISUAL FIX: Static Circular Layout with Animated Lines */}
                <div className="relative h-[600px] w-full max-w-5xl mx-auto flex items-center justify-center">

                    {/* Animated Rings Background */}
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-secondary/20 animate-[spin_40s_linear_infinite]" />
                    <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-gray-200 animate-[spin_60s_linear_infinite_reverse]" />

                    {/* Connection Lines Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {ecosystems.map((_, index) => {
                            const angle = (index * 72 * Math.PI) / 180 - (Math.PI / 2); // Start from top (-90deg)
                            const x2 = 50 + (Math.cos(angle) * 40); // 40% radius (approx 200px / 500px)
                            const y2 = 50 + (Math.sin(angle) * 40);

                            return (
                                <g key={index}>
                                    {/* Base Line */}
                                    <line
                                        x1="50%" y1="50%"
                                        x2={`${x2}%`} y2={`${y2}%`}
                                        stroke="rgba(108, 92, 231, 0.2)"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />
                                    {/* Pulsing Data Packet */}
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
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="relative z-20"
                    >
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse" />
                        <div className="w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-secondary/10 relative z-20">
                            <div className="text-3xl font-bold font-display text-secondary tracking-tighter">Klefki</div>
                            <div className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-1">Universal</div>
                        </div>
                    </motion.div>

                    {/* Orbiting Planets (Positioned Absolutely) */}
                    {ecosystems.map((item, index) => {
                        const angle = (index * 72 * Math.PI) / 180 - (Math.PI / 2);
                        const radius = 220; // px
                        // Since we are inside a flex-center container, we can use simple trigonometry from center
                        // We need to translate from center 0,0
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.div
                                key={index}
                                className="absolute z-10"
                                initial={{ x: 0, y: 0, opacity: 0 }}
                                whileInView={{ x: x, y: y, opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className={`w-28 h-28 ${item.bg} ${item.border} border rounded-2xl shadow-lg flex flex-col items-center justify-center backdrop-blur-md hover:scale-110 transition-transform cursor-pointer group bg-white/80`}>
                                    <item.icon className={`w-8 h-8 ${item.color} mb-2 group-hover:rotate-12 transition-transform`} />
                                    <span className={`text-sm font-bold ${item.color}`}>{item.name}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Compatibility;
