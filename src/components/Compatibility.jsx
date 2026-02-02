
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Fingerprint, Server, Shuffle, Cpu, Layers } from 'lucide-react';

const Compatibility = () => {
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

    const innovations = [
        {
            title: "Secure Key Management",
            subtitle: "Hardware-backed, KMS & HSM compatible",
            icon: Cpu,
            detail: "Robust protection for your most sensitive identity keys."
        },
        {
            title: "Multi-Issuer, Multi-Verifier",
            subtitle: "Government, enterprise & Web3 ready",
            icon: Server,
            detail: "Universal connectivity for any verification scenario."
        },
        {
            title: "Interoperable by Design",
            subtitle: "EBSI · eIDAS · Enterprise IAM · Wallet ecosystems",
            icon: Shuffle,
            detail: "Built to work everywhere standards-based identity lives."
        }
    ];

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="compatibility" className="py-24 bg-surface text-center overflow-hidden relative">
            {/* Tech Mesh Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-22 transform-gpu"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono mb-4">
                        <Zap size={14} className="mr-2" />
                        Universal Interoperability
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">
                        One Wallet. <br />Every Credential Standard.
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Built on global identity standards - W3C, SD-JWT, mDoc, OpenID4VC, and DID for seamless cross-platform credential storage and presentation.
                    </p>
                </motion.div>

                {/* DESKTOP: Static Circular Layout (md+) */}
                {!isMobile && (
                    <div className="hidden md:flex relative h-[500px] w-full max-w-5xl mx-auto items-center justify-center transform-gpu">
                        {/* Animated Rings Background */}
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-secondary/20 animate-[spin_40s_linear_infinite] will-change-transform" />
                        <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-gray-200 animate-[spin_60s_linear_infinite_reverse] will-change-transform" />

                        {/* Connection Lines Layer */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {standards.map((_, index) => {
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
                                                path={`M ${500 / 2} ${650 / 2} L ${(500 / 2) + (Math.cos(angle) * 200)} ${(650 / 2) + (Math.sin(angle) * 200)}`}
                                            />
                                        </circle>
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Central Hub */}
                        <div className="relative z-20">
                            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse" />
                            <div className="w-44 h-44 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-secondary/10 relative z-20">
                                <div className="text-4xl font-bold font-display text-secondary tracking-tighter">Klefki</div>
                                <div className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-1">Interoperable</div>
                            </div>
                        </div>

                        {/* Orbiting Standards Cards */}
                        {standards.map((item, index) => {
                            const angle = (index * 72 * Math.PI) / 180 - (Math.PI / 2);
                            const radius = 240;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute z-10 transform-gpu"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    whileInView={{ x: x, y: y, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                                >
                                    <div className={`w-40 h-40 ${item.bg} ${item.border} border-2 rounded-[2rem] shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group bg-white/90 p-4 transform-gpu text-center will-change-transform`}>
                                        <item.icon className={`w-10 h-10 ${item.color} mb-3 group-hover:rotate-12 transition-transform duration-300`} />
                                        <h4 className="text-[13px] font-bold text-slate-800 leading-tight mb-1">{item.name}</h4>
                                        <p className="text-[10px] text-slate-500 font-medium leading-tight">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* MOBILE: Innovative Bento Grid (below md) */}
                <div className="md:hidden space-y-8">
                    {/* Mobile Central Hub */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative mx-auto w-32 h-32 bg-white rounded-full shadow-[0_0_50px_rgba(108,92,231,0.2)] flex flex-col items-center justify-center border-4 border-secondary/10 z-20"
                    >
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse" />
                        <div className="text-xl font-bold font-display text-secondary">Klefki</div>
                        <div className="text-[8px] text-slate-400 font-medium uppercase tracking-[0.2em]">Universal</div>
                    </motion.div>

                    {/* Staggered Grid for Standards */}
                    <div className="grid grid-cols-1 gap-4 pt-4">
                        {standards.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.08, ease: "easeOut" }}
                                className={`relative p-6 rounded-3xl ${item.bg} border ${item.border} flex items-center gap-5 transform-gpu bg-white/90`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-white shadow-inner flex items-center justify-center flex-shrink-0`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-sm font-bold text-slate-800 mb-1 leading-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 font-medium leading-snug">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* NEW: Innovative High-End Feature Section */}
                <div className="mt-16 pt-12 border-t border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {innovations.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-secondary/20 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-primary mb-2 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-secondary font-mono text-[10px] uppercase tracking-widest mb-4 font-bold">
                                    {item.subtitle}
                                </p>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final Interoperability Footer Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-16 text-center max-w-2xl mx-auto"
                    >
                        <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
                            Designed for interoperability across eIDAS 2.0, EBSI, enterprise IAM, and decentralized identity ecosystems.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Compatibility;
