import React from 'react';

export const Playground: React.FC = () => {
    return (
        <div className="flex h-full overflow-hidden bg-brand-bg text-slate-200">
            {/* Left Panel */}
            <section className="w-1/3 min-w-[320px] border-r border-brand-border flex flex-col bg-brand-surface/30">
                <div className="p-4 border-b border-brand-border flex items-center justify-between">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">System Instructions</h2>
                    <span className="material-icons text-sm text-slate-500 hover:text-white cursor-pointer">fullscreen</span>
                </div>
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="p-4 flex-1">
                        <textarea className="w-full h-full bg-brand-bg border border-brand-border rounded-lg p-4 focus:ring-1 focus:ring-brand-primary outline-none text-sm font-mono leading-relaxed text-slate-300 resize-none" defaultValue={`You are a highly efficient customer support AI for NoviraX.

- Tone: Professional, helpful.
- User: {{user_name}}
- Tier: {{tier}}

Refer to docs.novirax.ai for tech questions.`}></textarea>
                    </div>
                    <div className="p-6 border-t border-brand-border space-y-6">
                        <div>
                            <label className="text-xs font-medium text-slate-400 mb-2 block uppercase">Model Select</label>
                            <select className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-sm focus:border-brand-primary outline-none">
                                <option>GPT-4o (Recommended)</option>
                                <option>Claude 3.5 Sonnet</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs font-medium text-slate-400 uppercase">Temperature</label>
                                    <span className="text-xs font-mono text-brand-primary">0.7</span>
                                </div>
                                <input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Middle Panel: Chat */}
            <section className="flex-1 flex flex-col bg-brand-bg">
                <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-surface/20">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-2 text-sm font-semibold">
                            <span className="material-icons text-green-500 text-base">chat</span>
                            Preview
                        </span>
                        <div className="flex bg-brand-border/50 p-1 rounded-lg">
                            <button className="px-3 py-1 text-xs font-medium bg-brand-bg rounded shadow-sm text-white">WhatsApp</button>
                            <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white">Telegram</button>
                        </div>
                    </div>
                    <button className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                        <span className="material-icons text-sm">delete_outline</span>
                        Clear
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="flex flex-col items-end space-y-1">
                        <div className="max-w-[80%] bg-brand-primary/20 border border-brand-primary/30 text-slate-200 px-4 py-2 rounded-xl rounded-tr-none text-sm">
                            How do I integrate the API?
                        </div>
                        <span className="text-[10px] text-slate-500 px-1">10:42 AM</span>
                    </div>

                    <div className="flex flex-col items-start space-y-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center">
                                <span className="text-[10px] text-white">AI</span>
                            </div>
                            <span className="text-xs font-semibold">NoviraX Agent</span>
                        </div>
                        <div className="max-w-[80%] bg-brand-surface border border-brand-border text-slate-300 px-4 py-2 rounded-xl rounded-tl-none text-sm leading-relaxed">
                            Hello Alex! Check **Settings &gt; Integrations** to get your API Key. Then add it to your CRM webhook settings.
                        </div>
                        <span className="text-[10px] text-slate-500 px-1">10:42 AM</span>
                    </div>
                </div>

                <div className="p-6 border-t border-brand-border bg-brand-surface/10">
                    <div className="relative">
                        <input type="text" className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none placeholder:text-slate-600" placeholder="Type a message..." />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-brand-primary hover:bg-brand-primary/10 rounded-lg">
                            <span className="material-icons">send</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Right Panel: Context */}
            <section className="w-[280px] border-l border-brand-border flex flex-col bg-brand-surface/30">
                <div className="p-4 border-b border-brand-border">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Mock Data</h2>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="group p-3 rounded-lg bg-brand-bg border border-brand-border">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-[11px] font-mono text-brand-primary/80">user_name</span>
                        </div>
                        <input type="text" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-slate-300" defaultValue="Alex Johnson" />
                    </div>
                    <div className="group p-3 rounded-lg bg-brand-bg border border-brand-border">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-[11px] font-mono text-brand-primary/80">tier</span>
                        </div>
                        <input type="text" className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 text-slate-300" defaultValue="Pro Plus" />
                    </div>
                    
                    <div className="mt-8 p-3 bg-brand-primary/5 border border-brand-primary/20 rounded-xl space-y-3">
                         <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-400">Tokens</span>
                            <span className="text-xs font-mono text-white">428 / 4k</span>
                        </div>
                        <div className="w-full bg-brand-border rounded-full h-1">
                            <div className="bg-brand-primary h-1 rounded-full w-[15%]"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};