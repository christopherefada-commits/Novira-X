import React from 'react';
import { PublicNavbar } from '../components/PublicNavbar';
import { ViewState } from '../types';

interface HowItWorksProps {
    onNavigate: (view: ViewState) => void;
    onLogin: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate, onLogin }) => {
    return (
        <div className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-brand-primary selection:text-white">
            <PublicNavbar currentView={ViewState.HOW_IT_WORKS} onNavigate={onNavigate} onLogin={onLogin} />

            <header className="pt-24 pb-20 px-6 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">From Chaos to <span className="text-brand-primary">Structured Intelligence.</span></h1>
                <p className="text-xl text-slate-400">
                    NoviraX sits between your messaging channels and your business logic, acting as an intelligent middleware layer.
                </p>
            </header>

            <section className="py-10 max-w-5xl mx-auto px-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary/0 via-brand-primary/50 to-brand-primary/0 md:-translate-x-1/2"></div>

                {[
                    {
                        step: '01',
                        title: 'Connect Channels',
                        desc: 'Link your WhatsApp Business API, Telegram Bots, or Email inboxes via our secure OAuth integrations. No code required for initial setup.',
                        icon: 'link'
                    },
                    {
                        step: '02',
                        title: 'Ingest & Normalize',
                        desc: 'NoviraX receives webhooks in real-time. We strip metadata, redact PII (Personal Identifiable Information), and normalize the message schema into a unified JSON format.',
                        icon: 'DataObject'
                    },
                    {
                        step: '03',
                        title: 'AI Processing',
                        desc: 'The normalized data is passed through your configured Agent pipeline. The LLM analyzes intent, sentiment, and extracts key entities (dates, locations, order IDs).',
                        icon: 'psychology'
                    },
                    {
                        step: '04',
                        title: 'Execute & Respond',
                        desc: 'Based on the analysis, NoviraX can draft a reply, trigger an external webhook to your CRM (Salesforce/HubSpot), or escalate to a human agent.',
                        icon: 'rocket_launch'
                    }
                ].map((item, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-8 mb-24 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Center Node */}
                        <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-[#0F1115] border-2 border-brand-primary rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 -translate-x-1/2">
                            <span className="text-xs font-bold text-brand-primary">{item.step}</span>
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                            <div className={`bg-brand-card border border-brand-border p-8 rounded-2xl shadow-xl hover:border-brand-primary/50 transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className={`w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-white mb-4 ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                                    <span className="material-icons">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>

                        {/* Empty side for layout balance */}
                        <div className="w-full md:w-1/2"></div>
                    </div>
                ))}
            </section>

            <section className="py-24 bg-brand-surface/50 border-t border-brand-border">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to architect your workflow?</h2>
                    <button onClick={onLogin} className="bg-brand-primary text-white text-lg font-bold px-10 py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-600 transition-colors">
                        Start Building
                    </button>
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