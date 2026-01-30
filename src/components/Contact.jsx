import React, { useState } from 'react';
import { Linkedin, Mail, Twitter, Github, Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSend = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setIsError(false);
        setIsSent(false);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                    reply_to: formData.email
                },
                PUBLIC_KEY
            );

            setIsSent(true);
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setIsError(true);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <footer id="contact" className="bg-surface pt-24 pb-12 border-t border-slate-200 relative overflow-hidden">
            {/* Trust Web Background Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full">
                    <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" className="text-primary fill-current" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Floating Nodes - Only on Desktop */}
                {!isMobile && [...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-accent"
                        initial={{
                            x: Math.random() * 1000,
                            y: Math.random() * 500,
                            opacity: 0
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [1, 2, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-primary mb-6">Connect with Vlinder</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-md">
                            Build, integrate, and scale digital identity solutions with us.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:scale-110">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all transform hover:scale-110">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>
                        <form className="space-y-4" onSubmit={handleSend}>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all focus:-translate-y-1"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all focus:-translate-y-1"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all focus:-translate-y-1"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="4"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all focus:-translate-y-1"
                            />

                            {isError && (
                                <p className="text-red-500 text-sm font-medium">Failed to send message. Please try again later.</p>
                            )}

                            <button
                                disabled={isSending || isSent}
                                className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center relative overflow-hidden ${isSent ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-slate-800'}`}
                            >
                                {isSending ? (
                                    <motion.div
                                        animate={{ x: 100, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Send className="mr-2" /> Sending...
                                    </motion.div>
                                ) : isSent ? (
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                    >
                                        <span className="flex items-center"><Check className="mr-2" /> Message Sent</span>
                                    </motion.div>
                                ) : (
                                    <span className="flex items-center">Send Message</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; 2026 Vlinder. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Empowering trust through digital identity.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
