
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Fingerprint, Server, Shuffle, Cpu, Layers } from 'lucide-react';

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

const Compatibility = () => {
    return (
        <section id="standards" className="py-24 bg-midnight text-center overflow-hidden relative">
            {/* Dark Tech Mesh Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 transform-gpu"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-6">
                        <Zap size={14} className="mr-2" />
                        Next-Gen Features
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                        Built for the <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-accent to-blue-500">
                            Future
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                        Innovative identity infrastructure designed for security, scale, and universal interoperability.
                    </p>
                </motion.div>

                {/* Innovations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {innovations.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                            className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-500 transform-gpu will-change-transform shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500 relative z-10 shadow-inner">
                                <item.icon className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight relative z-10">
                                {item.title}
                            </h3>
                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-accent font-mono text-[10px] uppercase tracking-[0.2em] mb-4 font-bold relative z-10">
                                {item.subtitle}
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10 font-medium">
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Interoperability Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center max-w-2xl mx-auto"
                >
                    <div className="h-px w-20 bg-white/10 mx-auto mb-8" />
                    <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                        Designed for interoperability across eIDAS 2.0, EBSI, enterprise IAM, and decentralized identity ecosystems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Compatibility;
