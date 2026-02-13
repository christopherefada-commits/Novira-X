import React, { useState } from 'react';
import { ViewState } from '../types';
import { PublicNavbar } from '../components/PublicNavbar';

interface LandingProps {
    onNavigate: (view: ViewState) => void;
    onLogin: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onNavigate, onLogin }) => {
    // FAQ Data
    const faqs = [
        { q: "How does NoviraX connect to WhatsApp?", a: "We use the official WhatsApp Business API (Cloud API). You can scan a QR code or provide your Meta Business token for secure, reliable messaging." },
        { q: "Can I use my own OpenAI key?", a: "Yes. On the Pro and Enterprise plans, you can bring your own API keys for GPT-4 or Claude 3.5 Sonnet to maintain data privacy boundaries and control costs." },
        { q: "Is the data encrypted?", a: "Absolutely. All messages are encrypted at rest using AES-256 and in transit via TLS 1.3. Enterprise workspaces are isolated in their own database shards." },
        { q: "Do you support custom AI agents?", a: "Yes. Our Agent Builder allows you to define system prompts, knowledge bases, and function calling capabilities for your specific use cases without writing code." }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#0F1115] text-white font-sans selection:bg-brand-primary selection:text-white">
            <PublicNavbar currentView={ViewState.LANDING} onNavigate={onNavigate} onLogin={onLogin} />

            {/* Hero Section */}
            <header className="relative pt-32 pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
                
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-semibold mb-8 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                        Introducing NoviraX 1.0
                    </div>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        The Enterprise OS <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500">for Conversational AI.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
                        Transform WhatsApp and Telegram into structured operational data. 
                        Deploy AI agents to monitor, summarize, and automate conversations at scale.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <button onClick={() => onNavigate(ViewState.SIGNUP)} className="group bg-brand-primary text-white text-lg font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
                            Get Started
                            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                    
                    {/* Dashboard Preview */}
                    <div className="relative mx-auto max-w-6xl group perspective-1000">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-[#0C0E12] rounded-2xl border border-white/10 p-2 shadow-2xl">
                             <img 
                                src="https://picsum.photos/1600/900" 
                                alt="NoviraX Dashboard" 
                                className="w-full h-auto rounded-xl opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Social Proof */}
            <section className="py-12 border-y border-white/5 bg-[#0C0E12]">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                         <div className="text-xl font-bold font-mono text-white">ACME Corp</div>
                         <div className="text-xl font-bold font-mono text-white">Globex</div>
                         <div className="text-xl font-bold font-mono text-white">Soylent</div>
                         <div className="text-xl font-bold font-mono text-white">Initech</div>
                         <div className="text-xl font-bold font-mono text-white">Umbrella</div>
                    </div>
                </div>
            </section>

            {/* Product Content: Features */}
            <div id="product">
                {/* Feature 1: Unified Data */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
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

                {/* Detailed Feature Grid */}
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
            </div>

            {/* How It Works Content */}
            <div id="how-it-works" className="py-24 bg-[#0C0E12] border-t border-white/5">
                <header className="px-6 text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">From Chaos to <span className="text-brand-primary">Structured Intelligence.</span></h2>
                    <p className="text-xl text-slate-400">
                        NoviraX sits between your messaging channels and your business logic, acting as an intelligent middleware layer.
                    </p>
                </header>

                <section className="max-w-5xl mx-auto px-6 relative">
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
            </div>

             {/* FAQ Section */}
             <section className="py-24 bg-[#0F1115] border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-brand-border rounded-xl bg-brand-surface/30 overflow-hidden">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-lg">{faq.q}</span>
                                    <span className={`material-icons transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <div className={`px-6 text-slate-400 leading-relaxed overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to automate your operations?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Join the platform powering the next generation of messaging-first businesses.
                        Start your 14-day free trial today.
                    </p>
                    <button onClick={() => onNavigate(ViewState.SIGNUP)} className="bg-white text-black text-lg font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transition-transform hover:-translate-y-1 shadow-xl">
                        Get Started Now
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 bg-[#0C0E12]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
                            <span className="text-white font-bold text-lg">N</span>
                        </div>
                        <span className="font-bold text-xl text-white">NoviraX</span>
                    </div>
                    <div className="flex gap-8 text-sm text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Status</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <div className="text-slate-600 text-sm">
                        &copy; 2026 NoviraX Inc.
                    </div>
                </div>
            </footer>
        </div>
    );
}