
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Beaker, Zap, Award, Shield, Terminal } from 'lucide-react';

const Playground = () => {
    // Typewriter effect state
    const [codeText, setCodeText] = useState('');
    const fullCode = JSON.stringify({
        "credential": {
            "type": ["VerifiableCredential", "UniversityDegree"],
            "issuer": "did:web:vlinder.io",
            "issuanceDate": "2026-05-20T14:30:00Z",
            "credentialSubject": {
                "id": "did:key:z6MkhaXgBZDvot...",
                "degree": {
                    "type": "Bachelor of Science",
                    "name": "Computer Science"
                }
            }
        }
    }, null, 2);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCodeText(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) {
                i = 0; // Loop interactions
            }
        }, 50);
        return () => clearInterval(interval);
    }, [fullCode]);

    return (
        <section id="playground" className="py-24 bg-black relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-[100px] animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono mb-6">
                            <Terminal size={14} className="mr-2" />
                            Live Sandbox Environment
                        </div>
                        <h2 className="text-5xl font-display font-bold text-white mb-6">
                            Klefki Playground
                        </h2>
                        <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-bold mb-6">
                            Experiment. Innovate. Scale.
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            A safe environment to test next-generation identity solutions. Explore real-world credential use cases beyond national identity.
                        </p>

                        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                            Explore Playground
                            <ArrowUpRight className="ml-2 w-5 h-5" />
                        </button>
                    </motion.div>

                    <div className="relative">
                        {/* Terminal Window */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute -top-10 -right-10 w-full h-full bg-black/80 border border-green-500/30 rounded-lg p-4 font-mono text-xs text-green-500 overflow-hidden shadow-2xl z-0 backdrop-blur-md hidden lg:block"
                        >
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <pre className="whitespace-pre-wrap opacity-60">
                                {codeText}
                                <span className="animate-pulse">_</span>
                            </pre>
                        </motion.div>

                        <div className="grid gap-6 relative z-10">
                            {[
                                { title: "Vaccination Certificates", desc: "Global health standards compliant", icon: Beaker },
                                { title: "University Degrees", desc: "Verifiable education credentials", icon: Award },
                                { title: "Skill Accreditations", desc: "Portable professional proofs", icon: Zap },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="group p-6 rounded-2xl bg-black/80 border border-white/10 hover:border-green-500/50 transition-all cursor-pointer backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                                <item.icon className="text-white group-hover:text-green-400 transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">{item.title}</h4>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="text-gray-500 group-hover:text-green-400 transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Playground;
