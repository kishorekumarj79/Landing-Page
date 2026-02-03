import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
    CheckCircle, ArrowRight, Copy, ExternalLink, Shield,
    Smartphone, Download, Globe, HelpCircle, X, ChevronRight,
    Award, RefreshCw, AlertTriangle, ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const StepCard = React.memo(({ step, index, onCopy, markComplete }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { margin: "-20% 0px -20% 0px", amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            markComplete(index);
        }
    }, [isInView, index, markComplete]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
        >
            {/* Connector Line */}
            {index !== 9 && (
                <div className="absolute left-[28px] top-16 bottom-[-48px] w-0.5 bg-gradient-to-b from-blue-200 to-transparent md:block hidden" />
            )}

            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-blue-200 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] ring-1 ring-blue-100 overflow-hidden transition-all duration-300">
                <div className="p-6 md:p-8 flex gap-6">
                    {/* Icon Bubble */}
                    <div className="hidden md:flex flex-col items-center">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${step.color}`}>
                            {step.icon}
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-slate-400">0{index + 1}</div>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 md:hidden">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md bg-gradient-to-br ${step.color}`}>
                                {step.icon}
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {index + 1}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>

                        <div className="bg-slate-50/50 rounded-2xl border border-slate-100/50 p-1">
                            {step.content(onCopy)}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

const LiveDemo = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [showToast, setShowToast] = useState({ visible: false, message: '' });
    const [demoId, setDemoId] = useState(() => {
        const ids = [
            "8267411596", "7483926150", "9264837512", "5837192648", "8142957360",
            "4683029157", "6974283159", "7316584092", "9051746283", "2897465318"
        ];
        return ids[Math.floor(Math.random() * ids.length)];
    });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleCopy = React.useCallback((text, label) => {
        navigator.clipboard.writeText(text);
        setShowToast({ visible: true, message: `${label} Copied!` });
        setTimeout(() => setShowToast({ visible: false, message: '' }), 2000);
    }, []);

    const handleGenerateId = React.useCallback(() => {
        const ids = [
            "8267411596", "7483926150", "9264837512", "5837192648", "8142957360",
            "4683029157", "6974283159", "7316584092", "9051746283", "2897465318"
        ];
        const randomId = ids[Math.floor(Math.random() * ids.length)];
        setDemoId(randomId);
        handleCopy(randomId, "New Demo ID");
    }, [handleCopy]);

    const triggerConfetti = React.useCallback(() => {
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#2563EB', '#F43F5E', '#10B981', '#F59E0B']
        });
    }, []);

    const steps = React.useMemo(() => [
        {
            title: "Download INJI Wallet",
            description: "Get the latest reliable build for the best experience. Use the APK link below.",
            color: "from-blue-500 to-blue-600",
            icon: <Download className="w-6 h-6" />,
            content: () => (
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                    <div className="flex-1 bg-white rounded-xl border border-blue-100 p-4 shadow-sm flex items-center justify-between group cursor-pointer hover:border-blue-300 transition-all"
                        onClick={() => window.open("https://drive.google.com/file/d/1jSgAPOQWSJQR4Hv9fgoVb7MHF_QxGj5y/view?usp=drive_link", "_blank")}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Download size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 text-sm">Download APK</div>
                                <div className="text-[10px] text-slate-400">v1.2.0 • Google Drive</div>
                            </div>
                        </div>
                        <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500" />
                    </div>
                </div>
            )
        },
        {
            title: "Open e-Governance Portal",
            description: "Access the demo portal to start your journey.",
            color: "from-purple-500 to-purple-600",
            icon: <Globe className="w-6 h-6" />,
            content: (onCopy) => (
                <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-2 pl-3">
                        <Globe size={16} className="text-slate-400" />
                        <input
                            readOnly
                            value="https://e-governance.klefki.io/"
                            className="flex-1 text-sm text-slate-600 bg-transparent outline-none font-mono"
                        />
                        <button onClick={() => onCopy("https://e-governance.klefki.io/", "URL")} className="p-2 hover:bg-slate-100 rounded-md text-slate-500">
                            <Copy size={16} />
                        </button>
                    </div>
                    <a href="https://e-governance.klefki.io/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20">
                        Open Portal Now <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            )
        },
        {
            title: "Login with eSignet",
            description: "On the login page, choose 'Sign in with eSignet' then select 'Login with OTP'.",
            color: "from-green-500 to-emerald-600",
            icon: <Shield className="w-6 h-6" />,
            content: () => (
                <div className="p-4 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-xs text-slate-400 mb-1">Click This</div>
                        <div className="font-bold text-slate-800 text-sm">Sign in with eSignet</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-[8px] px-2 py-0.5 rounded-bl">Step 2</div>
                        <div className="text-xs text-green-600 mb-1">Then Select</div>
                        <div className="font-bold text-green-800 text-sm">Login with OTP</div>
                    </div>
                </div>
            )
        },
        {
            title: "Enter National ID",
            description: "Use one of our test identities. Click to copy.",
            color: "from-orange-500 to-amber-600",
            icon: <Smartphone className="w-6 h-6" />,
            content: (onCopy) => (
                <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl flex flex-col items-center">
                    <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">Available Demo ID</div>
                    <div
                        onClick={() => onCopy(demoId, "National ID")}
                        className="text-4xl font-mono font-black text-slate-800 tracking-wider cursor-pointer hover:scale-105 transition-transform flex items-center gap-3"
                    >
                        {demoId}
                        <Copy size={20} className="text-orange-400 opacity-50" />
                    </div>
                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={handleGenerateId}
                            className="flex items-center gap-1 px-3 py-1.5 bg-white border border-orange-100 rounded-full text-xs font-bold text-orange-600 hover:bg-orange-50 transition-colors shadow-sm"
                        >
                            <RefreshCw size={10} /> Generate Random
                        </button>
                    </div>
                </div>
            )
        },
        {
            title: "Authenticate",
            description: "Enter the universal demo OTP code.",
            color: "from-indigo-500 to-violet-600",
            icon: <CheckCircle className="w-6 h-6" />,
            content: (onCopy) => (
                <div className="p-6 bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50 transition-colors"
                    onClick={() => onCopy("111111", "OTP")}>
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">One Time Password</div>
                    <div className="text-5xl font-mono font-black text-indigo-600 tracking-[0.2em]">111111</div>
                    <div className="mt-2 text-[10px] text-indigo-400 flex items-center gap-1">
                        <Copy size={10} /> Click box to copy
                    </div>
                </div>
            )
        },
        {
            title: "Grant Access",
            description: "Allow claims to auto-fill the form.",
            color: "from-teal-500 to-teal-600",
            icon: <Shield className="w-6 h-6" />,
            content: () => (
                <div className="p-4">
                    <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">Important Confirmation</h4>
                            <p className="text-xs text-slate-500 mt-1">You will see a consent screen. Click <strong className="text-teal-600">Allow</strong> to auto-fill your data, then click <strong className="text-blue-600">Submit</strong> to proceed.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Configure App Registry",
            description: "Point your wallet to the demo registry environment.",
            color: "from-pink-500 to-rose-600",
            icon: <Smartphone className="w-6 h-6" />,
            content: (onCopy) => (
                <div className="p-4 space-y-3">
                    <p className="text-sm text-slate-600 px-1">
                        Open Inji Wallet → <strong>Settings</strong> → <strong>Credential Registry</strong>
                    </p>
                    <p className="text-sm text-slate-600 px-1">
                        Edit Both → <strong>Credential Registry</strong> and <strong>Esignet Host </strong>
                        with below link.
                    </p>
                    <div className="bg-slate-900 rounded-xl p-4 flex items-center justify-between group">
                        <div className="font-mono text-green-400 text-xs truncate mr-4">
                            https://mosip-dev.klefki.io
                        </div>
                        <button
                            onClick={() => onCopy("https://mosip-dev.klefki.io/", "Registry URL")}
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>
            )
        },
        {
            title: "Download Credential",
            description: "Get your verifiable credential.",
            color: "from-blue-600 to-sky-600",
            icon: <Award className="w-6 h-6" />,
            content: () => (
                <div className="p-4 text-center">
                    <p className="text-sm text-slate-600">
                        Go to Home, tap <strong>(+)</strong>, select <strong>Government of India</strong>, and login again with the same ID & OTP.
                    </p>
                </div>
            )
        },
        {
            title: "Verify & Purchase",
            description: "Use your credential to make a real-time purchase verification.",
            color: "from-purple-600 to-indigo-600",
            icon: <CheckCircle className="w-6 h-6" />,
            content: () => (
                <div className="p-4 space-y-4">
                    <p className="text-sm text-slate-600">
                        Visit the verification portal, select any product, and scan the QR code with Inji Wallet or upload the QR Code to confirm the order.
                    </p>
                    <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                <Globe size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 text-sm">Open Verification Portal</div>
                                <div className="text-[10px] text-slate-400">mosip-verify.klefki.io</div>
                            </div>
                        </div>
                        <a
                            href="https://mosip-verify.klefki.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>
                    <button
                        onClick={triggerConfetti}
                        className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                    >
                        <Award size={20} />
                        Complete Demo
                    </button>
                </div>
            )
        }
    ], [demoId, handleCopy, handleGenerateId, triggerConfetti]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100">
            {/* Top Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-50 origin-left" style={{ scaleX }} />

            {/* Floating Navigation Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-8 left-6 z-40 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 hover:scale-105 transition-all group"
                onClick={() => navigate('/')}
            >
                <ChevronRight className="w-5 h-5 text-slate-600 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </motion.button>

            {/* Header Section */}
            <div className="relative pt-12 pb-8 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                        <AlertTriangle size={12} /> Demo Environment
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Live Demo</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Follow this interactive guide to download the wallet, issue a verifiable credential that holds an balance amount, and verify it by making a product purchase.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 pb-32 flex flex-col md:flex-row gap-12 relative">
                {/* Desktop Sticky Sidebar */}
                <div className="hidden md:block w-64 shrink-0">
                    <div className="sticky top-32 space-y-1">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 pl-3">Table of Contents</div>
                        {steps.map((step, i) => (
                            <a
                                key={i}
                                href={`#step-${i}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(`step-${i}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }}
                                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeStep === i
                                    ? 'bg-white shadow-md text-blue-600 scale-105'
                                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                            >
                                {step.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Main Content Timeline */}
                <div className="flex-1 max-w-2xl mx-auto w-full flex flex-col gap-12">
                    {steps.map((step, index) => (
                        <div key={index} id={`step-${index}`}>
                            {index === 6 && (
                                <div className="py-12 flex items-center justify-center opacity-50">
                                    <div className="h-px bg-slate-300 w-12 mr-4"></div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Smartphone size={14} /> Switch to Inji Wallet App
                                    </div>
                                    <div className="h-px bg-slate-300 w-12 ml-4"></div>
                                </div>
                            )}
                            <StepCard
                                step={step}
                                index={index}
                                onCopy={handleCopy}
                                markComplete={setActiveStep}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Toast Notification */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                {showToast.visible && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="px-6 py-3 bg-slate-900/90 backdrop-blur-xl text-white rounded-full shadow-2xl flex items-center gap-3"
                    >
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium">{showToast.message}</span>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default LiveDemo;
