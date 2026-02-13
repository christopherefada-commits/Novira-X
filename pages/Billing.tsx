import React from 'react';
import { Invoice } from '../types';

const invoices: Invoice[] = [
    { id: 'INV-2023-001', date: 'Oct 01, 2023', amount: '$49.00', status: 'Paid' },
    { id: 'INV-2023-002', date: 'Sep 01, 2023', amount: '$49.00', status: 'Paid' },
    { id: 'INV-2023-003', date: 'Aug 01, 2023', amount: '$49.00', status: 'Paid' },
];

export const Billing: React.FC = () => {
    return (
        <div className="p-8 h-full overflow-y-auto bg-brand-bg text-white">
            <header className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Billing & Plans</h1>
                <p className="text-slate-400">Manage your subscription and billing details.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Current Plan Card */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-brand-card border border-brand-border rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                            <span className="material-icons text-9xl">credit_card</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Current Plan</p>
                                    <h2 className="text-3xl font-bold text-white">Pro Plan</h2>
                                    <p className="text-slate-400 mt-2">$49/month • Billed monthly</p>
                                </div>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Active</span>
                            </div>
                            
                            <div className="space-y-6 max-w-xl">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-semibold text-slate-300">Monthly Messages</span>
                                        <span className="font-mono text-slate-400">128k / 200k</span>
                                    </div>
                                    <div className="w-full bg-brand-surface rounded-full h-2 overflow-hidden">
                                        <div className="bg-brand-primary h-full rounded-full" style={{ width: '64%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-semibold text-slate-300">Active Agents</span>
                                        <span className="font-mono text-slate-400">8 / 10</span>
                                    </div>
                                    <div className="w-full bg-brand-surface rounded-full h-2 overflow-hidden">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button className="bg-brand-surface border border-brand-border text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-white/5 transition-colors">Change Plan</button>
                                <button className="text-slate-400 hover:text-white px-5 py-2.5 text-sm font-semibold transition-colors">Cancel Subscription</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-card border border-brand-border rounded-xl p-6">
                        <h3 className="text-lg font-bold mb-6">Payment Method</h3>
                        <div className="flex items-center justify-between p-4 bg-brand-surface rounded-lg border border-brand-border">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                                    {/* Simple visual representation of Mastercard icon */}
                                    <div className="flex -space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-red-500 opacity-80"></div>
                                        <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80"></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Mastercard ending in 8824</p>
                                    <p className="text-xs text-slate-500">Expires 12/25</p>
                                </div>
                            </div>
                            <button className="text-sm font-semibold text-brand-primary hover:underline">Update</button>
                        </div>
                    </div>
                </div>

                {/* Invoices */}
                <div className="bg-brand-card border border-brand-border rounded-xl p-6 h-fit">
                    <h3 className="text-lg font-bold mb-6">Invoice History</h3>
                    <div className="space-y-4">
                        {invoices.map((inv) => (
                            <div key={inv.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer">
                                <div>
                                    <p className="text-sm font-bold text-slate-200">{inv.date}</p>
                                    <p className="text-xs text-slate-500 font-mono mt-0.5">{inv.id}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-white">{inv.amount}</p>
                                    <p className="text-[10px] font-bold text-green-400 uppercase tracking-wider">{inv.status}</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-icons text-slate-400 hover:text-white">download</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm font-semibold text-slate-500 hover:text-white transition-colors">View All Invoices</button>
                </div>
            </div>
        </div>
    );
};
