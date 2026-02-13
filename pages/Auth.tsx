import React, { useState } from 'react';
import { ViewState } from '../types';

interface AuthProps {
    view: ViewState;
    onChangeView: (view: ViewState) => void;
    onAuthSuccess: () => void;
}

export const Auth: React.FC<AuthProps> = ({ view, onChangeView, onAuthSuccess }) => {
    const [tier, setTier] = useState<'Individual' | 'Team' | 'Enterprise'>('Team');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        onChangeView(ViewState.OTP);
    };

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate verification success
        onAuthSuccess();
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        
        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    return (
        <div className="min-h-screen flex bg-brand-bg text-white relative">
            {/* Back to Home Button */}
            <button 
                onClick={() => onChangeView(ViewState.LANDING)}
                className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium z-50"
            >
                <span className="material-icons text-base">arrow_back</span>
                Back to Home
            </button>

            {/* Left Panel - Marketing */}
            <div className="hidden lg:flex w-1/2 bg-brand-surface relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-brand-primary/5"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]"></div>
                <div className="relative z-10 max-w-lg">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-8 shadow-xl shadow-blue-900/30">
                        <span className="material-icons text-3xl">bolt</span>
                    </div>
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">Automate your <span className="text-brand-primary">Conversations.</span></h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-8">Join 10,000+ businesses using NoviraX to turn WhatsApp and Telegram into intelligent revenue channels.</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <span className="material-icons text-sm">check</span>
                            </span>
                            <span className="text-slate-300">Multi-tenant workspace isolation</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <span className="material-icons text-sm">check</span>
                            </span>
                            <span className="text-slate-300">Enterprise-grade security</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <span className="material-icons text-sm">check</span>
                            </span>
                            <span className="text-slate-300">Advanced AI Agent builder</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {view === ViewState.LOGIN ? 'Welcome back' : view === ViewState.OTP ? 'Verify your email' : 'Create your account'}
                        </h2>
                        <p className="mt-2 text-sm text-slate-400">
                            {view === ViewState.LOGIN 
                                ? 'Enter your credentials to access your workspace.' 
                                : view === ViewState.OTP
                                ? `We sent a code to ${email || 'your email'}`
                                : 'Start your 14-day free trial. No credit card required.'}
                        </p>
                    </div>

                    {/* View: Login */}
                    {view === ViewState.LOGIN && (
                        <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onAuthSuccess(); }}> {/* Direct login for demo */}
                            
                            <div className="grid grid-cols-2 gap-4">
                                <button type="button" className="flex items-center justify-center gap-2 bg-brand-surface border border-brand-border rounded-lg py-2.5 hover:bg-white/5 transition-colors">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                    <span className="text-sm font-semibold">Google</span>
                                </button>
                                <button type="button" className="flex items-center justify-center gap-2 bg-brand-surface border border-brand-border rounded-lg py-2.5 hover:bg-white/5 transition-colors">
                                    <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 h-5 invert" alt="GitHub" />
                                    <span className="text-sm font-semibold">GitHub</span>
                                </button>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-brand-border"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-brand-bg text-slate-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Email address</label>
                                    <input type="email" required className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="block text-sm font-bold text-slate-300">Password</label>
                                        <a href="#" className="text-xs font-semibold text-brand-primary hover:text-blue-400">Forgot password?</a>
                                    </div>
                                    <input type="password" required className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="••••••••" />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3.5 rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                                Sign in
                            </button>
                            <p className="text-center text-sm text-slate-400">
                                Don't have an account? <button type="button" onClick={() => onChangeView(ViewState.SIGNUP)} className="text-brand-primary font-bold hover:underline">Sign up</button>
                            </p>
                        </form>
                    )}

                    {/* View: Signup */}
                    {view === ViewState.SIGNUP && (
                        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                            
                            {/* Account Tier Selection */}
                            <div className="grid grid-cols-3 gap-3">
                                {['Individual', 'Team', 'Enterprise'].map((t) => (
                                    <div 
                                        key={t}
                                        onClick={() => setTier(t as any)}
                                        className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${
                                            tier === t 
                                                ? 'bg-brand-primary/10 border-brand-primary text-brand-primary' 
                                                : 'bg-brand-surface border-brand-border text-slate-400 hover:border-brand-border/80'
                                        }`}
                                    >
                                        <p className="text-xs font-bold uppercase tracking-wider mb-1">{t}</p>
                                        <div className={`w-3 h-3 rounded-full mx-auto ${tier === t ? 'bg-brand-primary' : 'bg-brand-border'}`}></div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button type="button" className="flex items-center justify-center gap-2 bg-brand-surface border border-brand-border rounded-lg py-2.5 hover:bg-white/5 transition-colors">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                    <span className="text-sm font-semibold">Google</span>
                                </button>
                                <button type="button" className="flex items-center justify-center gap-2 bg-brand-surface border border-brand-border rounded-lg py-2.5 hover:bg-white/5 transition-colors">
                                    <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 h-5 invert" alt="GitHub" />
                                    <span className="text-sm font-semibold">GitHub</span>
                                </button>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-brand-border"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-brand-bg text-slate-500">Or sign up with email</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Full Name</label>
                                    <input type="text" required className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="Alex Rivera" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Work Email</label>
                                    <input 
                                        type="email" 
                                        required 
                                        className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" 
                                        placeholder="name@company.com" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Password</label>
                                    <input type="password" required className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="Create a strong password" />
                                </div>

                                {/* Team Specific Fields */}
                                {tier === 'Team' && (
                                    <div className="animate-fade-in transition-all">
                                        <label className="block text-sm font-bold text-slate-300 mb-2">Team Name</label>
                                        <input type="text" required className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="e.g. Customer Success Alpha" />
                                    </div>
                                )}

                                {/* Enterprise Specific Fields */}
                                {tier === 'Enterprise' && (
                                    <div className="space-y-4 animate-fade-in transition-all">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-300 mb-2">Company Name</label>
                                            <input type="text" required className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="Acme Global Inc." />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-300 mb-2">Job Title</label>
                                                <input type="text" className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="CTO / VP" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-300 mb-2">Team Size</label>
                                                <select className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all">
                                                    <option>10-50</option>
                                                    <option>51-200</option>
                                                    <option>201-1000</option>
                                                    <option>1000+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-300 mb-2">Use Case</label>
                                            <select className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all">
                                                <option>Customer Support Automation</option>
                                                <option>Sales & Lead Qualification</option>
                                                <option>Internal Team Operations</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Workspace URL</label>
                                    <div className="flex">
                                        <input type="text" required className="flex-1 bg-brand-surface border border-brand-border rounded-l-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="acme-corp" />
                                        <div className="bg-brand-border px-4 py-3 rounded-r-lg text-slate-400 text-sm font-mono flex items-center border border-l-0 border-brand-border">
                                            .novirax.ai
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3.5 rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                                {tier === 'Enterprise' ? 'Create Enterprise Account' : 'Create Account'}
                            </button>
                            <p className="text-center text-sm text-slate-400">
                                Already have an account? <button type="button" onClick={() => onChangeView(ViewState.LOGIN)} className="text-brand-primary font-bold hover:underline">Log in</button>
                            </p>
                        </form>
                    )}

                    {/* View: OTP */}
                    {view === ViewState.OTP && (
                        <form className="mt-8 space-y-6" onSubmit={handleVerify}>
                            <div className="flex justify-center gap-2">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        className="w-12 h-14 bg-brand-surface border border-brand-border rounded-lg text-center text-xl font-bold text-white focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                                    />
                                ))}
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-slate-400">
                                    Didn't receive code? <button type="button" className="text-brand-primary font-bold hover:underline">Resend</button>
                                </p>
                            </div>
                            <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3.5 rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                                Verify Email
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};