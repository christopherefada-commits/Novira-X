import React from 'react';
import { PublicNavbar } from '../components/PublicNavbar';
import { ViewState } from '../types';

interface ProductProps {
    onNavigate: (view: ViewState) => void;
    onLogin: () => void;
}

export const Product: React.FC<ProductProps> = ({ onNavigate, onLogin }) => {
    return (
        <div className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-brand-primary selection:text-white">
            <PublicNavbar currentView={ViewState.PRODUCT} onNavigate={onNavigate} onLogin={onLogin} />

            {/* Header */}
            <header className="pt-24 pb-16 px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    Built for the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI-Native Enterprise.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                    A complete suite of tools to manage, automate, and analyze conversational data at scale.
                </p>
            </header>

            {/* Feature 1: Unified Data */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="bg-brand-card border border-brand-border rounded-3xl p-12 overflow-hidden relative group">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                                <span className="material-icons text-2xl">hub</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Unified Conversation Lake</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Stop silo-ing your customer data. NoviraX ingests messages from WhatsApp, Telegram, and Email into a single, normalized schema. Query conversations like a database.
                            </p>
                            <ul className="space-y-4">
                                {['Real-time webhook ingestion', 'Automatic PII Redaction', 'Sentiment metadata tagging'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <span className="material-icons text-green-400 text-sm">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-purple-500/20 blur-[60px] rounded-full"></div>
                            <img src="https://picsum.photos/600/400?random=1" className="relative rounded-xl border border-white/10 shadow-2xl" alt="Dashboard Interface" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Agent Engine */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-blue-500/20 blur-[60px] rounded-full"></div>
                        <img src="https://picsum.photos/600/400?random=2" className="relative rounded-xl border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500" alt="Agent Builder" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                            <span className="material-icons text-2xl">smart_toy</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">No-Code Agent Builder</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Deploy autonomous agents in minutes. Define system prompts, attach knowledge bases, and let the AI handle tier-1 support, lead qualification, and scheduling.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <h4 className="font-bold mb-1">Function Calling</h4>
                                <p className="text-sm text-slate-400">Allow agents to trigger APIs.</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                <h4 className="font-bold mb-1">Human Handoff</h4>
                                <p className="text-sm text-slate-400">Seamless escalation logic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 bg-[#0C0E12] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
                        <p className="text-slate-400">Enterprise-grade features out of the box.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: 'lock', title: 'SOC2 Security', desc: 'Enterprise-grade encryption and access logs.' },
                            { icon: 'groups', title: 'Multi-Tenant', desc: 'Isolate data by team or client completely.' },
                            { icon: 'analytics', title: 'Deep Analytics', desc: 'Track response times, sentiment, and volume.' },
                            { icon: 'code', title: 'GraphQL API', desc: 'Flexible API for custom integrations.' },
                            { icon: 'webhook', title: 'Webhooks', desc: 'Real-time event streaming to your backend.' },
                            { icon: 'translate', title: 'Multi-lingual', desc: 'Auto-translate conversations on the fly.' },
                        ].map((feature, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/50 transition-colors">
                                <span className="material-icons text-brand-primary mb-4">{feature.icon}</span>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-slate-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <footer className="py-20 border-t border-white/5 bg-[#0C0E12]">
                <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
                    &copy; 2026 NoviraX Inc.
                </div>
            </footer>
        </div>
    );
};