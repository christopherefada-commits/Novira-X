import React from 'react';
import { ViewState } from '../types';

interface SidebarProps {
    currentView: ViewState;
    onChangeView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
    const navItems = [
        { id: ViewState.DASHBOARD, label: 'Dashboard', icon: 'dashboard' },
        { id: ViewState.THREAD_VIEW, label: 'Messages', icon: 'chat_bubble_outline' }, // Mapping ThreadView as Messages demo
        { id: ViewState.AGENTS, label: 'Agents', icon: 'smart_toy' },
        { id: ViewState.PLAYGROUND, label: 'Playground', icon: 'science' },
        { id: ViewState.INTEGRATIONS, label: 'Integrations', icon: 'hub' },
        { id: ViewState.DEVELOPER, label: 'API & Keys', icon: 'code' },
    ];

    const configItems = [
        { id: ViewState.TEAM, label: 'Team', icon: 'people' },
        { id: ViewState.BILLING, label: 'Billing', icon: 'credit_card' },
    ];

    return (
        <aside className="w-64 border-r border-brand-border bg-brand-card flex flex-col h-screen sticky top-0">
            <div className="p-6 flex items-center gap-3 cursor-pointer" onClick={() => onChangeView(ViewState.LANDING)}>
                <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                    <span className="material-icons text-xl">bolt</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">NoviraX</span>
            </div>

            <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onChangeView(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                            currentView === item.id
                                ? 'bg-brand-primary/10 text-brand-primary'
                                : 'text-brand-muted hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        <span className="material-icons-outlined text-[20px]">{item.icon}</span>
                        {item.label}
                    </button>
                ))}

                <div className="pt-6 pb-2">
                    <div className="px-3 mb-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">Configuration</div>
                    {configItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onChangeView(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                                currentView === item.id
                                    ? 'bg-brand-primary/10 text-brand-primary'
                                    : 'text-brand-muted hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            <span className="material-icons-outlined text-[20px]">{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="p-4 border-t border-brand-border mt-auto">
                <div className="flex items-center gap-3 px-2">
                    <img 
                        src="https://picsum.photos/100/100" 
                        alt="User" 
                        className="w-8 h-8 rounded-full ring-2 ring-brand-border"
                    />
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate text-white">Alex Rivera</p>
                        <p className="text-[10px] text-slate-500">Pro Plan</p>
                    </div>
                    <button 
                        onClick={() => onChangeView(ViewState.SETTINGS)}
                        className="material-icons text-slate-500 text-sm hover:text-white cursor-pointer transition-colors"
                    >
                        settings
                    </button>
                </div>
            </div>
        </aside>
    );
};