import React, { useState } from 'react';

export const Developer: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'api' | 'webhooks'>('api');

    return (
        <div className="p-8 h-full overflow-y-auto bg-brand-bg text-white">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Developer Settings</h1>
                    <p className="text-slate-400">Manage API keys and configure webhooks for real-time events.</p>
                </div>
                <div className="flex bg-brand-surface p-1 rounded-lg border border-brand-border">
                    <button 
                        onClick={() => setActiveTab('api')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'api' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        API Keys
                    </button>
                    <button 
                        onClick={() => setActiveTab('webhooks')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'webhooks' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                        Webhooks
                    </button>
                </div>
            </header>

            {activeTab === 'api' && (
                <div className="space-y-6">
                    <div className="bg-brand-card border border-brand-border rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold">Active API Keys</h3>
                            <button className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                                <span className="material-icons text-sm">add</span>
                                Create New Key
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-brand-surface text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4 rounded-l-lg">Name</th>
                                        <th className="px-6 py-4">Key Token</th>
                                        <th className="px-6 py-4">Created</th>
                                        <th className="px-6 py-4">Last Used</th>
                                        <th className="px-6 py-4 rounded-r-lg text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-brand-border">
                                    <tr className="group">
                                        <td className="px-6 py-4 text-sm font-medium">Production Server</td>
                                        <td className="px-6 py-4 font-mono text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                                            pk_live_...9382
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">Oct 12, 2023</td>
                                        <td className="px-6 py-4 text-sm text-green-400">Just now</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-500 hover:text-red-400 transition-colors text-sm font-medium">Revoke</button>
                                        </td>
                                    </tr>
                                    <tr className="group">
                                        <td className="px-6 py-4 text-sm font-medium">Test Environment</td>
                                        <td className="px-6 py-4 font-mono text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                                            pk_test_...8821
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">Sep 04, 2023</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">2 days ago</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-500 hover:text-red-400 transition-colors text-sm font-medium">Revoke</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-brand-surface/30 border border-brand-border rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary">
                                <span className="material-icons">menu_book</span>
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">API Documentation</h3>
                                <p className="text-sm text-slate-400 mb-4">Explore our comprehensive guides and references to get the most out of the NoviraX API.</p>
                                <a href="#" className="text-brand-primary text-sm font-bold hover:underline flex items-center gap-1">
                                    View Documentation
                                    <span className="material-icons text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'webhooks' && (
                <div className="space-y-6">
                    <div className="bg-brand-card border border-brand-border rounded-xl p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-lg font-bold">Webhook Configuration</h3>
                                <p className="text-sm text-slate-400 mt-1">We'll send HTTP POST requests to this URL when events occur.</p>
                            </div>
                            <button className="text-brand-primary text-sm font-bold hover:text-blue-400 transition-colors">Send Test Request</button>
                        </div>
                        
                        <div className="space-y-6 max-w-2xl">
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2">Payload URL</label>
                                <div className="flex gap-2">
                                    <input 
                                        type="text" 
                                        className="flex-1 bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-sm text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none font-mono"
                                        defaultValue="https://api.yourcompany.com/webhooks/novirax" 
                                    />
                                    <button className="bg-brand-surface border border-brand-border px-4 rounded-lg hover:bg-white/5 transition-colors font-bold text-sm text-slate-300">Update</button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-3">Active Events</label>
                                <div className="space-y-3">
                                    {[
                                        { id: 'msg', label: 'message.received', desc: 'Triggered when a new message arrives from any channel.' },
                                        { id: 'insight', label: 'insight.generated', desc: 'Triggered when AI successfully analyzes a conversation thread.' },
                                        { id: 'alert', label: 'agent.alert', desc: 'Triggered when an agent requires human intervention.' }
                                    ].map(event => (
                                        <label key={event.id} className="flex items-start gap-3 p-3 rounded-lg border border-brand-border bg-brand-bg/50 cursor-pointer hover:border-brand-primary/50 transition-all">
                                            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-brand-border bg-brand-surface text-brand-primary focus:ring-offset-0 focus:ring-brand-primary" defaultChecked />
                                            <div>
                                                <div className="font-mono text-xs font-bold text-brand-primary mb-0.5">{event.label}</div>
                                                <div className="text-xs text-slate-400">{event.desc}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};