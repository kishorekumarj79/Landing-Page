
import React, { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { FileText, Download, QrCode, ArrowDown, Wallet, Check, ScanLine } from 'lucide-react';

const Lifecycle = () => {
    const containerRef = useRef(null);
    useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- Step 1: Form Animation ---
    const FormAnimation = () => (
        <div className="w-64 bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
            <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-3 space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="p-4 space-y-3">
                <div className="space-y-1">
                    <div className="h-2 w-16 bg-slate-200 rounded" />
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-8 bg-slate-100 rounded border border-slate-200"
                    />
                </div>
                <div className="space-y-1">
                    <div className="h-2 w-12 bg-slate-200 rounded" />
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-8 bg-slate-100 rounded border border-slate-200"
                    />
                </div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                    className="flex justify-center pt-2"
                >
                    <div className="px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-full flex items-center shadow-lg shadow-green-500/30">
                        <Check size={12} className="mr-1" /> Verified
                    </div>
                </motion.div>
            </div>
        </div>
    );

    // --- Step 2: Download Animation ---
    const DownloadAnimation = () => (
        <div className="relative w-64 h-40 flex items-center justify-center gap-4">
            {/* Inji */}
            <motion.div
                whileHover={{ y: -5 }}
                className="w-24 h-32 bg-blue-600 rounded-xl shadow-xl shadow-blue-600/20 flex flex-col items-center justify-center text-white border-2 border-blue-400"
            >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Download size={16} />
                </div>
                <span className="font-bold text-sm">Inji</span>
                <span className="text-[10px] opacity-75">MOSIP</span>
            </motion.div>

            {/* Klefki */}
            <motion.div
                whileHover={{ y: -5 }}
                className="w-24 h-32 bg-purple-600 rounded-xl shadow-xl shadow-purple-600/20 flex flex-col items-center justify-center text-white border-2 border-purple-400"
            >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <Download size={16} />
                </div>
                <span className="font-bold text-sm">Klefki</span>
                <span className="text-[10px] opacity-75">Enterprise</span>
            </motion.div>
        </div>
    );

    // --- Step 3: Scan Animation ---
    const ScanAnimation = () => (
        <div className="w-64 h-40 bg-black rounded-xl border-4 border-slate-800 relative overflow-hidden flex items-center justify-center shadow-2xl">
            <ScanLine className="absolute text-accent w-full h-full opacity-50 animate-pulse" strokeWidth={1} />
            <motion.div
                animate={{ y: [-60, 60, -60] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-1 bg-green-400 shadow-[0_0_10px_#4ade80]"
            />
            <div className="w-24 h-24 bg-white p-2 rounded-lg">
                <QrCode className="w-full h-full text-slate-900" />
            </div>
        </div>
    );

    // --- Step 4: Balance Logic (Existing) ---
    const BalanceCard = () => {
        const ref = useRef(null);
        const isInView = useInView(ref, { margin: "-100px" });

        return (
            <motion.div
                ref={ref}
                className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-2xl border border-white/10 shadow-2xl max-w-sm w-full mt-4"
            >
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                        <Wallet className="text-cyan-400" size={20} />
                        <span className="text-gray-300">Grant Wallet</span>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Active</span>
                </div>

                <div className="mb-6 text-center">
                    <div className="text-sm text-gray-400 mb-1">Current Balance</div>
                    <div className="text-4xl font-mono font-bold text-white tabular-nums flex justify-center items-center">
                        <span className="mr-1">$</span>
                        {isInView ? (
                            <motion.span
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ repeat: 1, repeatType: "reverse", duration: 0.5 }}
                            >
                                <Counter from={400} to={325} />
                            </motion.span>
                        ) : "400"}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.5 }}
                    className="flex justify-between text-sm p-3 bg-white/5 rounded-lg border border-white/5"
                >
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                            <ArrowDown size={14} className="text-red-400" />
                        </div>
                        <div className="text-left">
                            <div className="text-white">Grocery Store</div>
                            <div className="text-xs text-gray-500">Just Now</div>
                        </div>
                    </div>
                    <span className="text-red-400 font-bold">-$75.00</span>
                </motion.div>
            </motion.div>
        );
    };

    const steps = [
        { icon: FileText, title: "1. Form Filing", desc: "User fills form. National ID automatically verifies eligibility.", custom: <FormAnimation /> },
        { icon: Download, title: "2. Download to Wallet", desc: "User chooses Inji (MOSIP) or Klefki (Enterprise) to download credential.", custom: <DownloadAnimation /> },
        { icon: QrCode, title: "3. Scan & Spend", desc: "User scans merchant QR code at the shop.", custom: <ScanAnimation /> },
        { icon: ArrowDown, title: "4. Deduction", desc: "Grant amount automatically deducted from verifying credential.", custom: <BalanceCard /> },
    ];

    return (
        <section id="lifecycle" className="py-24 bg-minight text-white relative overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">Seamless Flow</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Social Grant Credential Life Cycle</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Watch how a grant moves from a government form to a real-world transaction in seconds.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`flex flex-col md:flex-row items-center justify-between gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} transform-gpu will-change-transform`}
                            >
                                {/* Text Side */}
                                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} order-2 md:order-none`}>
                                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0 inline-block">{step.desc}</p>
                                </div>

                                {/* Icon Center Node */}
                                <div className="relative z-10 flex-shrink-0 order-1 md:order-none">
                                    <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-secondary flex items-center justify-center shadow-[0_0_30px_rgba(108,92,231,0.5)]">
                                        <step.icon className="w-8 h-8 text-accent" />
                                    </div>
                                </div>

                                {/* Visual Side */}
                                <div className={`flex-1 flex justify-center order-3 md:order-none ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-accent/10 blur-xl rounded-full opacity-10 group-hover:opacity-30 transition-opacity" />
                                        {step.custom}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Counter Helper
function Counter({ from, to }) {
    const nodeRef = useRef();
    React.useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        const controls = { value: from, stop: false };
        let startTimestamp = null;
        const duration = 2000;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(from + (to - from) * ease);
            node.textContent = current;
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
        return () => { controls.stop = true; };
    }, [from, to]);
    return <span ref={nodeRef} />;
}

export default Lifecycle;
