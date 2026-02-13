import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Oct 1', messages: 4000 },
    { name: 'Oct 5', messages: 3000 },
    { name: 'Oct 10', messages: 5000 },
    { name: 'Oct 15', messages: 7500 },
    { name: 'Oct 20', messages: 6000 },
    { name: 'Oct 25', messages: 9000 },
    { name: 'Oct 31', messages: 11000 },
];

export const Dashboard: React.FC = () => {
    return (
        <div className="p-8 space-y-8 h-full overflow-y-auto bg-brand-bg text-white">
            <header className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex gap-3">
                    <div className="flex items-center gap-2 bg-brand-card px-3 py-1.5 rounded-lg border border-brand-border">
                        <span className="material-icons text-sm text-slate-400">calendar_today</span>
                        <span className="text-sm text-slate-300">Today</span>
                    </div>
                </div>
            </header>

            {/* KPI Cards aligned with PRD: Messages Today, Active Agents, Summaries Generated, Integration Status */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { title: 'Messages Today', value: '1,284', change: '+12%', icon: 'message', color: 'text-blue-500', bg: 'bg-blue-500/10' },
                    { title: 'Active Agents', value: '8', change: 'Running', icon: 'smart_toy', color: 'text-purple-500', bg: 'bg-purple-500/10' },
                    { title: 'Summaries Generated', value: '452', change: '+24%', icon: 'auto_awesome', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                    { title: 'Integration Status', value: 'Healthy', change: '100%', icon: 'hub', color: 'text-emerald-500', bg: 'bg-emerald-500/10' }
                ].map((stat, i) => (
                    <div key={i} className="bg-brand-card p-6 rounded-xl border border-brand-border shadow-lg">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color} border border-current border-opacity-20`}>
                                <span className="material-icons">{stat.icon}</span>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                stat.value === 'Healthy' ? 'bg-emerald-500/10 text-emerald-400' :
                                stat.change === 'Running' ? 'bg-purple-500/10 text-purple-400' :
                                stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'
                            }`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-brand-card rounded-xl border border-brand-border shadow-lg overflow-hidden flex flex-col min-h-[400px]">
                    <div className="p-6 border-b border-brand-border flex justify-between items-center">
                        <h4 className="font-bold">Message Volume</h4>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-xs font-semibold bg-brand-primary text-white rounded">Messages</button>
                            <button className="px-3 py-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors">Sessions</button>
                        </div>
                    </div>
                    <div className="flex-1 p-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#22262D" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748B" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748B" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#16191E', borderColor: '#22262D', color: '#fff' }}
                                    itemStyle={{ color: '#3B82F6' }}
                                />
                                <Area type="monotone" dataKey="messages" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorMessages)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Activity Feed as per PRD */}
                <div className="bg-brand-card rounded-xl border border-brand-border shadow-lg p-0 flex flex-col">
                    <div className="p-6 border-b border-brand-border">
                        <h4 className="font-bold">Activity Feed</h4>
                        <p className="text-xs text-slate-500 mt-1">Recent AI actions and system events.</p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {[
                            { text: 'Customer Support Bot replied to +1 (555) 0123', time: '2m ago', icon: 'smart_toy', color: 'text-brand-primary', bg: 'bg-brand-primary/10' },
                            { text: 'New WhatsApp integration connected', time: '15m ago', icon: 'link', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                            { text: 'Weekly Summary generated for "Sales Team"', time: '1h ago', icon: 'description', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                            { text: 'Telegram webhook latency spike detected', time: '3h ago', icon: 'warning', color: 'text-amber-400', bg: 'bg-amber-500/10' },
                            { text: 'Agent "Lead Qualifier" paused by Admin', time: '5h ago', icon: 'pause_circle', color: 'text-slate-400', bg: 'bg-slate-500/10' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                                    <span className={`material-icons text-sm ${item.color}`}>{item.icon}</span>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-300 leading-tight">{item.text}</p>
                                    <p className="text-[10px] text-slate-500 mt-1">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-brand-border">
                        <button className="w-full py-2 text-xs font-bold text-slate-500 hover:text-white uppercase tracking-wider">View Full Logs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
