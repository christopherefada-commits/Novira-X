import React from 'react';

export const ThreadView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    return (
        <div className="flex flex-col h-full bg-brand-bg text-slate-300">
            <header className="h-16 border-b border-brand-border bg-brand-surface flex items-center justify-between px-8 shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="flex items-center gap-1 text-slate-400 hover:text-brand-primary transition-colors text-sm font-medium group">
                        <span className="material-icons text-lg leading-none group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Dashboard
                    </button>
                    <div className="h-4 w-px bg-brand-border"></div>
                    <h1 className="font-semibold text-slate-100">Project Alpha Logistics Thread</h1>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border border-green-900/30 text-green-400 rounded-full text-xs font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Live Syncing
                    </div>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Chat Column */}
                <section className="w-1/2 flex flex-col border-r border-brand-border bg-[#0C0E12]">
                    <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-surface/80 backdrop-blur-md">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Original Log: WhatsApp</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        <div className="flex justify-center">
                            <span className="text-[10px] font-bold text-slate-500 bg-brand-border/50 px-3 py-1 rounded-full uppercase tracking-widest border border-brand-border">Today</span>
                        </div>
                        
                        {[
                            { name: 'Marcus Chen', time: '10:42 AM', text: "Hey team, just wanted to touch base on the logistics for Project Alpha. We're looking at a 15% increase in shipping costs from the Hamburg hub starting next month.", img: 'https://picsum.photos/40/40?random=1' },
                            { name: 'Sarah Jenkins', time: '10:45 AM', text: "That's significant. Did they provide a breakdown? We need to update the client quote by Friday EOD.", img: 'https://picsum.photos/40/40?random=2' },
                            { name: 'Marcus Chen', time: '10:48 AM', text: "Fuel surcharges mostly. I'll send over the PDF now. We might want to explore the alternative route through Rotterdam if this persists.", img: 'https://picsum.photos/40/40?random=1' }
                        ].map((msg, i) => (
                            <div key={i} className="flex gap-4">
                                <img src={msg.img} className="w-9 h-9 rounded-full ring-2 ring-brand-border object-cover flex-shrink-0" alt={msg.name} />
                                <div className="max-w-[85%]">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-xs font-bold text-slate-200">{msg.name}</span>
                                        <span className="text-[10px] text-slate-500">{msg.time}</span>
                                    </div>
                                    <div className="bg-[#1E2229] p-4 rounded-2xl rounded-tl-none border border-brand-border shadow-md">
                                        <p className="text-[13px] leading-relaxed text-slate-300">{msg.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Analysis Column */}
                <section className="w-1/2 flex flex-col bg-brand-bg">
                    <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-surface/40 backdrop-blur-md">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-brand-primary text-xl">psychology</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">AI Intelligence Analysis</span>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-8">
                        <div className="mb-10">
                            <h3 className="text-[10px] font-bold text-slate-500 mb-4 flex items-center gap-2 tracking-[0.1em]">
                                <span className="w-1 h-3 bg-brand-primary rounded-full"></span>
                                EXECUTIVE SUMMARY
                            </h3>
                            <div className="bg-brand-primary/5 border border-brand-primary/20 p-6 rounded-2xl relative">
                                <p className="text-slate-200 text-sm leading-[1.7] font-normal">
                                    The discussion centers on a <span className="text-brand-primary font-bold">15% increase in shipping costs</span> at the Hamburg hub for Project Alpha, attributed primarily to fuel surcharges. Sarah Jenkins emphasized the need to update client quotes by Friday EOD. David Smith is currently analyzing an alternative shipping route via <span className="text-brand-primary font-bold">Rotterdam</span>.
                                </p>
                                <div className="mt-5 pt-4 border-t border-brand-primary/10 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">98% Confidence</span>
                                    </div>
                                    <button className="text-[10px] font-bold text-brand-primary uppercase tracking-widest hover:brightness-125">Copy Text</button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-bold text-slate-500 flex items-center gap-2 tracking-[0.1em]">
                                    <span className="w-1 h-3 bg-brand-primary rounded-full"></span>
                                    KEY INSIGHTS
                                </h3>
                                <div className="bg-brand-surface border border-brand-border p-5 rounded-2xl h-full shadow-lg">
                                    <ul className="space-y-4">
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                                                <span className="material-icons text-red-500 text-[14px]">trending_up</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-slate-200 uppercase tracking-tight">Cost Alert</span>
                                                <p className="text-[13px] text-slate-400">+15% Hamburg hub shipping.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-bold text-slate-500 flex items-center gap-2 tracking-[0.1em]">
                                    <span className="w-1 h-3 bg-brand-primary rounded-full"></span>
                                    SENTIMENT
                                </h3>
                                <div className="bg-brand-surface border border-brand-border p-5 rounded-2xl flex flex-col items-center justify-center text-center h-full shadow-lg">
                                    <div className="text-xl font-bold text-white mb-1">70</div>
                                    <span className="text-[10px] font-bold text-brand-primary px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-2 uppercase tracking-widest">Urgent</span>
                                    <p className="text-[11px] text-slate-500 italic">Professional tone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
