import React, { useState } from 'react';
import { PublicNavbar } from '../components/PublicNavbar';
import { ViewState } from '../types';

interface PricingProps {
    onNavigate: (view: ViewState) => void;
    onLogin: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onNavigate, onLogin }) => {
    const [annual, setAnnual] = useState(true);

    return (
        <div className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-brand-primary selection:text-white">
            <PublicNavbar currentView={ViewState.PRICING} onNavigate={onNavigate} onLogin={onLogin} />

            <header className="pt-24 pb-16 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Simple, transparent pricing.</h1>
                <p className="text-xl text-slate-400 mb-10">Start for free, scale as you grow.</p>
                
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-sm font-bold ${!annual ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
                    <button 
                        onClick={() => setAnnual(!annual)}
                        className="w-14 h-8 bg-brand-surface border border-brand-border rounded-full relative transition-colors"
                    >
                        <div className={`absolute top-1 w-6 h-6 bg-brand-primary rounded-full transition-all ${annual ? 'left-7' : 'left-1'}`}></div>
                    </button>
                    <span className={`text-sm font-bold ${annual ? 'text-white' : 'text-slate-500'}`}>Yearly <span className="text-green-400 text-xs ml-1">(Save 20%)</span></span>
                </div>
            </header>

            <section className="px-6 max-w-7xl mx-auto pb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col hover:border-brand-border/80 transition-all">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-400 mb-2">Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">$0</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">Perfect for trying out NoviraX.</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> 1,000 Messages/mo
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> 1 AI Agent
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> WhatsApp Integration
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> 14-Day History
                            </li>
                        </ul>
                        <button onClick={onLogin} className="w-full py-3 rounded-lg border border-white/20 font-bold hover:bg-white/5 transition-colors">Start Free Trial</button>
                    </div>

                    {/* Pro */}
                    <div className="bg-brand-primary/10 border border-brand-primary/50 rounded-2xl p-8 flex flex-col relative">
                        <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-widest">Most Popular</div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-brand-primary mb-2">Pro</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">${annual ? '39' : '49'}</span>
                                <span className="text-slate-500">/mo</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">For growing teams and operations.</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-white">
                                <span className="material-icons text-brand-primary text-sm">check</span> 50,000 Messages/mo
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white">
                                <span className="material-icons text-brand-primary text-sm">check</span> 5 AI Agents
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white">
                                <span className="material-icons text-brand-primary text-sm">check</span> WhatsApp & Telegram
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white">
                                <span className="material-icons text-brand-primary text-sm">check</span> Advanced Analytics
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white">
                                <span className="material-icons text-brand-primary text-sm">check</span> 30-Day History
                            </li>
                        </ul>
                        <button onClick={onLogin} className="w-full py-3 rounded-lg bg-brand-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">Get Started</button>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-brand-card border border-brand-border rounded-2xl p-8 flex flex-col hover:border-brand-border/80 transition-all">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-400 mb-2">Enterprise</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">Custom</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">For large scale automation.</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> Unlimited Messages
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> Unlimited Agents
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> Custom Integrations
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> Dedicated Success Manager
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="material-icons text-white text-sm">check</span> SSO & Audit Logs
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-lg border border-white/20 font-bold hover:bg-white/5 transition-colors">Contact Sales</button>
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