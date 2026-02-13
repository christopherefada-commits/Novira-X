import React, { useState } from 'react';

export const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'profile' | 'workspace' | 'security'>('profile');

    return (
        <div className="p-8 h-full overflow-y-auto bg-brand-bg text-white">
            <header className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Settings</h1>
                <p className="text-slate-400">Manage your personal profile and workspace preferences.</p>
            </header>

            <div className="flex gap-8">
                {/* Settings Sidebar */}
                <div className="w-64 shrink-0">
                    <div className="space-y-1">
                        <button 
                            onClick={() => setActiveTab('profile')}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-brand-surface text-brand-primary border border-brand-border' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className="material-icons text-[20px]">person</span>
                            My Profile
                        </button>
                        <button 
                            onClick={() => setActiveTab('workspace')}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'workspace' ? 'bg-brand-surface text-brand-primary border border-brand-border' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className="material-icons text-[20px]">business</span>
                            Workspace
                        </button>
                        <button 
                            onClick={() => setActiveTab('security')}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'security' ? 'bg-brand-surface text-brand-primary border border-brand-border' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className="material-icons text-[20px]">security</span>
                            Security
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 max-w-2xl space-y-8">
                    {activeTab === 'profile' && (
                        <div className="bg-brand-card border border-brand-border rounded-xl p-8 space-y-8">
                            <div className="flex items-center gap-6">
                                <img src="https://picsum.photos/100/100" alt="Profile" className="w-20 h-20 rounded-full ring-4 ring-brand-surface" />
                                <div>
                                    <button className="bg-brand-surface border border-brand-border text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/5 transition-colors mb-2">Change Avatar</button>
                                    <p className="text-xs text-slate-500">JPG or PNG. Max 1MB.</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">First Name</label>
                                    <input type="text" defaultValue="Alex" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Last Name</label>
                                    <input type="text" defaultValue="Rivera" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
                                <input type="email" defaultValue="alex@company.com" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none" />
                            </div>
                            <div className="pt-4 border-t border-brand-border flex justify-end">
                                <button className="bg-brand-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-600 transition-colors">Save Changes</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'workspace' && (
                        <div className="space-y-6">
                            <div className="bg-brand-card border border-brand-border rounded-xl p-8 space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Workspace Name</label>
                                    <input type="text" defaultValue="Acme Corp" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Workspace ID</label>
                                    <div className="flex items-center gap-2">
                                        <input type="text" readOnly defaultValue="ws_829103" className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 text-slate-400 font-mono" />
                                        <button className="p-2.5 bg-brand-surface border border-brand-border rounded-lg text-slate-400 hover:text-white">
                                            <span className="material-icons text-sm">content_copy</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-brand-border flex justify-end">
                                    <button className="bg-brand-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-600 transition-colors">Update Workspace</button>
                                </div>
                            </div>

                            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                                <h3 className="text-red-500 font-bold mb-2">Danger Zone</h3>
                                <p className="text-sm text-slate-400 mb-4">Deleting your workspace is irreversible. All data, agents, and integrations will be lost.</p>
                                <button className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-500 hover:text-white transition-colors">Delete Workspace</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="bg-brand-card border border-brand-border rounded-xl p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Two-Factor Authentication</h3>
                                <div className="flex items-center justify-between p-4 bg-brand-surface rounded-lg border border-brand-border">
                                    <div>
                                        <p className="font-bold text-white text-sm">Authenticator App</p>
                                        <p className="text-xs text-slate-500 mt-1">Secure your account with TOTP.</p>
                                    </div>
                                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-brand-border cursor-pointer"></label>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-bold mb-4">Password</h3>
                                <div className="space-y-4">
                                    <input type="password" placeholder="Current Password" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none" />
                                    <input type="password" placeholder="New Password" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-2.5 text-white focus:border-brand-primary outline-none" />
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button className="bg-brand-surface border border-brand-border text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-white/5 transition-colors">Update Password</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
