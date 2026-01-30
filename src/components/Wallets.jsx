
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Globe, CreditCard, CheckCircle, ArrowRight, Wallet, Menu, ChevronDown, User, Search, Bell } from 'lucide-react';

const Wallets = () => {
    return (
        <section id="demos" className="py-24 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
                    >
                        Social Grant Credential
                    </motion.h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Experience seamless verifiable credentials across government and private ecosystems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 relative">
                    {/* Divider Gradient (Desktop) */}
                    <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent -translate-x-1/2 z-10" />

                    {/* Inji Wallet Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4 shadow-lg shadow-blue-600/20">
                                <ShieldCheck className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Inji Wallet</h3>
                                <p className="text-blue-600 font-medium">MOSIP Compliant</p>
                            </div>
                        </div>

                        <div className="relative mx-auto w-64 h-[500px] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden mb-8">
                            {/* Inji Screen */}
                            <div className="absolute inset-0 bg-white overflow-y-auto no-scrollbar font-sans text-slate-800">
                                {/* Top Bar */}
                                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                                    <div className="flex items-center gap-1">
                                        <Menu className="w-5 h-5 text-slate-800" />
                                        <div className="flex items-center text-slate-900 font-bold text-sm tracking-tight">
                                            Inji <span className="text-orange-500 ml-1">Wallet</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 border border-gray-200 rounded-md px-2 py-1 text-[10px] font-medium text-slate-500">
                                        <Globe className="w-3 h-3 text-orange-500" />
                                        English
                                        <ChevronDown className="w-3 h-3" />
                                    </div>
                                </div>

                                <div className="p-5 text-center">
                                    <h4 className="text-xl font-extrabold text-[#111827] leading-tight mb-2">
                                        Access your Verifiable Credentials <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">with ease!</span>
                                    </h4>
                                    <p className="text-[10px] text-slate-500 leading-normal mb-6">
                                        Securely download and share your card instantly.
                                    </p>

                                    {/* Search Bar */}
                                    <div className="relative mb-6">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Search issuer by name"
                                            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-[10px] focus:outline-none shadow-sm"
                                        />
                                    </div>

                                    <div className="text-left mb-4">
                                        <h5 className="font-bold text-sm text-[#111827]">List of Issuers</h5>
                                        <p className="text-[9px] text-slate-400">Search for your trusted issuer and choose a card type in the next step.</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3">
                                        {/* Issuer Card 1 */}
                                        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center text-center transition-all hover:bg-gray-50">
                                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-2">
                                                <ShieldCheck className="w-6 h-6 text-red-500/80" />
                                            </div>
                                            <div className="text-[10px] font-bold text-[#111827] leading-tight">
                                                Veridonia National<br />ID Department
                                            </div>
                                        </div>

                                        {/* Issuer Card 2 */}
                                        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center text-center transition-all hover:bg-gray-50">
                                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-2">
                                                <Globe className="w-6 h-6 text-green-600/80" />
                                            </div>
                                            <div className="text-[10px] font-bold text-[#111827] leading-tight">
                                                Government of Invia National<br />ID Program
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                                <Globe className="w-2 h-2 text-white" />
                                            </div>
                                            <span className="text-[8px] font-bold text-slate-400">A MOSIP Product</span>
                                        </div>
                                        <p className="text-[7px] text-slate-400">© 2024 MOSIP. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            {['Official MOSIP Trust', 'National ID Based', 'Offline Verification'].map((feat, i) => (
                                <div key={i} className="flex items-center text-slate-600">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                    {feat}
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors flex items-center justify-center group">
                            Watch Inji Demo
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Klefki Wallet Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform perspective-1000"
                    >
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 shadow-lg shadow-purple-600/20">
                                <Wallet className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Klefki Wallet</h3>
                                <p className="text-purple-600 font-medium">Enterprise & Interoperable</p>
                            </div>
                        </div>

                        <div className="relative mx-auto w-64 h-[500px] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-2xl overflow-hidden mb-8">
                            {/* Klefki Screen */}
                            <div className="absolute inset-0 bg-[#F8F9FB] overflow-y-auto no-scrollbar font-sans text-slate-800">
                                {/* Header */}
                                <div className="p-5 pb-0">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden border border-orange-200">
                                                <div className="w-full h-full bg-[#E5BA73] flex items-center justify-center">
                                                    <User className="text-white w-6 h-6" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900">Hi, Kishore</h4>
                                                <p className="text-[10px] text-slate-500">Good to see you again</p>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                                                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}>
                                                    <Globe className="w-4 h-4 text-slate-400" />
                                                </motion.div>
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-[8px] text-white">
                                                ↺
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                                <CreditCard className="w-4 h-4 text-blue-500" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold">1</div>
                                                <div className="text-[8px] text-slate-400 leading-tight">Credentials</div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
                                                <ShieldCheck className="w-4 h-4 text-pink-500" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold">1</div>
                                                <div className="text-[8px] text-slate-400 leading-tight">Issuers</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section Title */}
                                    <div className="flex justify-between items-center mb-3">
                                        <h5 className="text-sm font-extrabold text-[#111827]">Business</h5>
                                        <span className="text-[10px] font-bold text-blue-600">View All</span>
                                    </div>

                                    {/* Credential Card */}
                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden shadow-sm">
                                                <div className="bg-blue-600 w-full h-full flex items-center justify-center text-white text-[10px] font-bold p-1 text-center leading-none">
                                                    SG
                                                </div>
                                            </div>
                                            <div className="bg-green-500 text-white text-[9px] px-3 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                                                <CheckCircle className="w-2.5 h-2.5" />
                                                Active
                                            </div>
                                        </div>

                                        <h6 className="text-sm font-extrabold text-slate-900 leading-snug mb-1">
                                            Social Grant
                                        </h6>
                                        <p className="text-[10px] text-slate-500 mb-6">
                                            Issued By <span className="text-blue-600 font-bold">Social Welfare Department</span>
                                        </p>

                                        <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between items-center">
                                            <div className="flex gap-6">
                                                <div>
                                                    <div className="text-[8px] text-slate-400 uppercase font-bold tracking-wider mb-1">Valid From</div>
                                                    <div className="text-xs font-black text-slate-800">27/01/25</div>
                                                </div>
                                                <div>
                                                    <div className="text-[8px] text-slate-400 uppercase font-bold tracking-wider mb-1">Valid Thru</div>
                                                    <div className="text-xs font-black text-slate-800">31/01/30</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center w-10 h-10 border border-gray-100 rounded-full text-xs font-black bg-slate-50 text-slate-400 shadow-inner">
                                                VA
                                            </div>
                                        </div>

                                        {/* Watermark-like circle */}
                                        <div className="absolute top-1/2 left-2/3 w-32 h-32 border border-gray-50 rounded-full pointer-events-none -translate-y-1/2" />
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="mt-8 bg-white p-3 flex justify-around items-center border-t border-gray-100 sticky bottom-0">
                                    <div className="p-2 bg-blue-900 rounded-lg text-white">
                                        <Wallet className="w-4 h-4" />
                                    </div>
                                    <Bell className="w-4 h-4 text-slate-300" />
                                    <User className="w-4 h-4 text-slate-300" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 mb-8">
                            {['Cross-Ecosystem Support', 'Enterprise Ready', 'Privacy-First Ownership'].map((feat, i) => (
                                <div key={i} className="flex items-center text-slate-600">
                                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                                    {feat}
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-colors flex items-center justify-center group">
                            Watch Klefki Demo
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Wallets;
