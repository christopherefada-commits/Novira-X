import React from 'react';

const integrations = [
    { id: 1, name: 'WhatsApp Business', category: 'Messaging', icon: 'chat', color: 'bg-green-500', status: 'connected', description: 'Connect your business numbers for automated replies and analytics.' },
    { id: 2, name: 'Telegram Bot', category: 'Messaging', icon: 'send', color: 'bg-sky-500', status: 'connected', description: 'Integrate your Telegram bots to capture group and direct messages.' },
    { id: 3, name: 'Slack', category: 'Internal', icon: 'tag', color: 'bg-purple-500', status: 'disconnected', description: 'Route high-priority alerts to your team channels.' },
    { id: 4, name: 'Salesforce', category: 'CRM', icon: 'cloud', color: 'bg-blue-500', status: 'disconnected', description: 'Sync lead data and conversation logs directly to customer records.' },
    { id: 5, name: 'HubSpot', category: 'CRM', icon: 'hub', color: 'bg-orange-500', status: 'connected', description: 'Create deals and tickets automatically based on conversation intent.' },
    { id: 6, name: 'Zendesk', category: 'Support', icon: 'support_agent', color: 'bg-emerald-600', status: 'disconnected', description: 'Turn support queries into tickets for your human agents.' },
];

export const Integrations: React.FC = () => {
    return (
        <div className="p-8 h-full overflow-y-auto bg-brand-bg text-white">
            <header className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Integrations</h1>
                <p className="text-slate-400 max-w-2xl">Connect NoviraX with your existing stack to streamline workflows and unify data.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map((app) => (
                    <div key={app.id} className="bg-brand-card border border-brand-border rounded-xl p-6 flex flex-col hover:border-brand-primary/30 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-12 h-12 rounded-lg ${app.color} flex items-center justify-center text-white shadow-lg`}>
                                <span className="material-icons text-2xl">{app.icon}</span>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                                app.status === 'connected' 
                                    ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                                    : 'bg-slate-700/30 text-slate-400 border-slate-600/30'
                            }`}>
                                {app.status}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold mb-1">{app.name}</h3>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{app.category}</p>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{app.description}</p>
                        
                        <button className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                            app.status === 'connected'
                                ? 'bg-brand-surface border border-brand-border text-slate-300 hover:text-white hover:border-brand-primary/50'
                                : 'bg-brand-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-900/20'
                        }`}>
                            {app.status === 'connected' ? (
                                <>
                                    <span className="material-icons text-sm">settings</span>
                                    Configure
                                </>
                            ) : (
                                <>
                                    <span className="material-icons text-sm">add_link</span>
                                    Connect
                                </>
                            )}
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 p-6 bg-brand-surface border border-brand-border rounded-xl flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg mb-1">Missing an integration?</h3>
                    <p className="text-slate-400 text-sm">We're constantly adding new apps. Let us know what you need.</p>
                </div>
                <button className="px-5 py-2.5 text-sm font-medium text-white bg-brand-card border border-brand-border rounded-lg hover:bg-white/5 transition-colors">
                    Request Integration
                </button>
            </div>
        </div>
    );
};