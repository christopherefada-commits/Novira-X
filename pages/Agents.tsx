import React, { useState } from 'react';
import { Agent } from '../types';

const mockAgents: Agent[] = [
    { id: 'NOV-8821', name: 'Customer Support Bot', platform: 'whatsapp', status: 'active', lastActivity: '2 minutes ago' },
    { id: 'NOV-3290', name: 'Lead Qualifier', platform: 'telegram', status: 'idle', lastActivity: '45 minutes ago' },
    { id: 'NOV-4412', name: 'Sales Assistant', platform: 'whatsapp', status: 'offline', lastActivity: 'Yesterday, 14:20' },
];

export const Agents: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="p-8 h-full overflow-y-auto bg-brand-bg relative">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white">Agents Management</h1>
                    <p className="text-slate-400 mt-1">Deploy and monitor your AI messaging intelligence agents.</p>
                </div>
                <button 
                    onClick={() => setShowModal(true)}
                    className="bg-brand-primary text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-600 transition-all"
                >
                    <span className="material-icons text-lg">add</span>
                    Create Agent
                </button>
            </header>

            <div className="grid grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Total Agents', value: '12', color: 'text-white' },
                    { label: 'Active Now', value: '8', sub: 'Running', color: 'text-green-400' },
                    { label: 'Total Messages (24h)', value: '4.2k', color: 'text-white' },
                    { label: 'Avg Response Time', value: '1.2s', color: 'text-blue-400' }
                ].map((stat, i) => (
                    <div key={i} className="bg-brand-card p-5 rounded-lg border border-brand-border">
                        <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
                        <div className="flex items-baseline gap-2">
                            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                            {stat.sub && <span className="text-[10px] text-green-500/80 uppercase font-bold tracking-widest">{stat.sub}</span>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-brand-card rounded-lg border border-brand-border overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-white/5 border-b border-brand-border">
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Agent Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Integration</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Activity</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border text-slate-200">
                        {mockAgents.map((agent) => (
                            <tr key={agent.id} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20">
                                            <span className="material-icons">smart_toy</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold group-hover:text-brand-primary transition-colors">{agent.name}</p>
                                            <p className="text-xs text-slate-500">ID: {agent.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`material-icons text-sm ${agent.platform === 'whatsapp' ? 'text-emerald-400' : 'text-sky-400'}`}>
                                            {agent.platform === 'whatsapp' ? 'chat' : 'send'}
                                        </span>
                                        <span className="text-sm font-medium capitalize">{agent.platform}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                                        agent.status === 'active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                        agent.status === 'idle' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                        'bg-slate-500/10 text-slate-400 border-slate-500/20'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                            agent.status === 'active' ? 'bg-green-500' :
                                            agent.status === 'idle' ? 'bg-amber-500' :
                                            'bg-slate-500'
                                        }`}></span>
                                        {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-400">{agent.lastActivity}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-2 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg"><span className="material-icons text-[20px]">insights</span></button>
                                        <button className="p-2 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg"><span className="material-icons text-[20px]">edit</span></button>
                                        <button className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg"><span className="material-icons text-[20px]">delete_outline</span></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Create Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-brand-card w-full max-w-xl rounded-xl shadow-2xl border border-brand-border flex flex-col max-h-[90vh]">
                        <div className="p-6 border-b border-brand-border flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-white">Create New Agent</h2>
                                <p className="text-sm text-slate-400">Configure your messaging AI assistant.</p>
                            </div>
                            <button onClick={() => setShowModal(false)} className="text-slate-500 hover:text-white transition-colors">
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="p-8 space-y-6 overflow-y-auto">
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Agent Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg text-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" placeholder="e.g. Sales Executive Bot" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-3">Select Platform</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="relative flex items-center p-4 border-2 border-brand-primary bg-brand-primary/5 rounded-xl cursor-pointer">
                                        <input type="radio" name="platform" value="whatsapp" className="hidden" defaultChecked />
                                        <span className="material-icons text-green-400 text-3xl mr-3">chat</span>
                                        <div>
                                            <p className="font-bold text-white">WhatsApp</p>
                                            <p className="text-xs text-slate-500">Business API</p>
                                        </div>
                                        <span className="material-icons text-brand-primary absolute top-3 right-3 text-sm">check_circle</span>
                                    </label>
                                    <label className="relative flex items-center p-4 border border-brand-border bg-brand-bg rounded-xl cursor-pointer hover:border-brand-primary/50 transition-all">
                                        <input type="radio" name="platform" value="telegram" className="hidden" />
                                        <span className="material-icons text-sky-400 text-3xl mr-3">send</span>
                                        <div>
                                            <p className="font-bold text-slate-300">Telegram</p>
                                            <p className="text-xs text-slate-500">Bot API</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Initial Instructions (Prompt)</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded-lg text-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-sm" placeholder="Describe how your agent should behave..."></textarea>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Model</label>
                                    <select className="w-full px-4 py-2.5 bg-brand-bg border border-brand-border rounded-lg text-sm text-slate-200 focus:ring-2 focus:ring-brand-primary outline-none">
                                        <option>GPT-4o (Recommended)</option>
                                        <option>Claude 3.5 Sonnet</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Language</label>
                                    <select className="w-full px-4 py-2.5 bg-brand-bg border border-brand-border rounded-lg text-sm text-slate-200 focus:ring-2 focus:ring-brand-primary outline-none">
                                        <option>English</option>
                                        <option>Spanish</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-brand-bg/50 flex items-center justify-end gap-3 border-t border-brand-border rounded-b-xl">
                            <button onClick={() => setShowModal(false)} className="px-5 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">Cancel</button>
                            <button className="bg-brand-primary text-white px-8 py-2.5 rounded-lg font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-600 transition-all">Create Agent</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
