import React, { useState } from 'react';
import { TeamMember } from '../types';

const mockTeam: TeamMember[] = [
    { id: '1', name: 'Alex Rivera', email: 'alex@company.com', role: 'Owner', status: 'Active', avatar: 'https://picsum.photos/100/100' },
    { id: '2', name: 'Sarah Jenkins', email: 'sarah.j@company.com', role: 'Admin', status: 'Active', avatar: 'https://picsum.photos/100/100?random=2' },
    { id: '3', name: 'Mike Ross', email: 'm.ross@company.com', role: 'Member', status: 'Pending', avatar: 'https://picsum.photos/100/100?random=3' },
];

export const Team: React.FC = () => {
    const [inviteModalOpen, setInviteModalOpen] = useState(false);

    return (
        <div className="p-8 h-full overflow-y-auto bg-brand-bg text-white relative">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Team Management</h1>
                    <p className="text-slate-400">Manage access and roles for your workspace.</p>
                </div>
                <button 
                    onClick={() => setInviteModalOpen(true)}
                    className="bg-brand-primary text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-600 transition-all"
                >
                    <span className="material-icons text-lg">person_add</span>
                    Invite Member
                </button>
            </header>

            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden shadow-xl">
                <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-brand-border">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border">
                        {mockTeam.map((member) => (
                            <tr key={member.id} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={member.avatar} alt={member.name} className="w-9 h-9 rounded-full ring-2 ring-brand-border" />
                                        <div>
                                            <p className="text-sm font-semibold text-white">{member.name}</p>
                                            <p className="text-xs text-slate-500">{member.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-surface border border-brand-border text-slate-300">
                                        {member.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {member.status === 'Active' ? (
                                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Active
                                        </span>
                                    ) : (
                                        <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            Pending
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-500 hover:text-white transition-colors">
                                        <span className="material-icons">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {inviteModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-brand-card w-full max-w-md rounded-xl border border-brand-border shadow-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Invite to Workspace</h2>
                            <button onClick={() => setInviteModalOpen(false)} className="text-slate-500 hover:text-white">
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-2">Email Address</label>
                                <input type="email" placeholder="colleague@company.com" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-2">Role</label>
                                <select className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none">
                                    <option>Member</option>
                                    <option>Admin</option>
                                    <option>Viewer</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setInviteModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">Cancel</button>
                            <button className="bg-brand-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors">Send Invite</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
