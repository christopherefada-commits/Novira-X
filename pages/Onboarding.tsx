import React, { useState } from 'react';

interface OnboardingProps {
    onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [integration, setIntegration] = useState<'whatsapp' | 'telegram' | null>(null);

    return (
        <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 text-white">
            <div className="w-full max-w-3xl">
                {/* Progress */}
                <div className="mb-12">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                        <span className={step >= 1 ? 'text-brand-primary' : ''}>1. Workspace Setup</span>
                        <span className={step >= 2 ? 'text-brand-primary' : ''}>2. Connect Channel</span>
                        <span className={step >= 3 ? 'text-brand-primary' : ''}>3. Ready</span>
                    </div>
                    <div className="h-1 w-full bg-brand-surface rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-brand-primary transition-all duration-500 ease-out" 
                            style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Step 1: Welcome & Validation */}
                {step === 1 && (
                    <div className="bg-brand-card border border-brand-border rounded-2xl p-8 shadow-2xl animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4">Setting up your workspace</h2>
                        <p className="text-slate-400 mb-8">We are configuring your dedicated database shard and encryption keys.</p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-green-400">
                                <span className="material-icons">check_circle</span>
                                <span className="font-medium text-white">Validating account details</span>
                            </div>
                            <div className="flex items-center gap-4 text-green-400">
                                <span className="material-icons">check_circle</span>
                                <span className="font-medium text-white">Provisioning PostgreSQL schema</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400 animate-pulse">
                                <span className="material-icons">radio_button_unchecked</span>
                                <span className="font-medium text-white">Generating API keys</span>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-brand-border flex justify-end">
                            <button 
                                onClick={() => setStep(2)}
                                className="bg-brand-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-600 transition-colors"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Integration */}
                {step === 2 && (
                    <div className="bg-brand-card border border-brand-border rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-bold mb-2">Connect your first channel</h2>
                        <p className="text-slate-400 mb-8">Choose a messaging platform to start monitoring conversations.</p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <button 
                                onClick={() => setIntegration('whatsapp')}
                                className={`p-6 rounded-xl border-2 text-left transition-all group ${
                                    integration === 'whatsapp' 
                                        ? 'border-brand-primary bg-brand-primary/5' 
                                        : 'border-brand-border bg-brand-surface hover:border-brand-primary/50'
                                }`}
                            >
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                                    <span className="material-icons text-3xl">chat</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-brand-primary transition-colors">WhatsApp Business</h3>
                                <p className="text-sm text-slate-400">Scan QR code to connect.</p>
                            </button>

                            <button 
                                onClick={() => setIntegration('telegram')}
                                className={`p-6 rounded-xl border-2 text-left transition-all group ${
                                    integration === 'telegram' 
                                        ? 'border-brand-primary bg-brand-primary/5' 
                                        : 'border-brand-border bg-brand-surface hover:border-brand-primary/50'
                                }`}
                            >
                                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                                    <span className="material-icons text-3xl">send</span>
                                </div>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-brand-primary transition-colors">Telegram Bot</h3>
                                <p className="text-sm text-slate-400">Enter your Bot Token.</p>
                            </button>
                        </div>

                        {integration === 'whatsapp' && (
                            <div className="bg-white p-6 rounded-xl flex items-center justify-center mb-8">
                                <div className="w-48 h-48 bg-slate-900 rounded-lg flex items-center justify-center text-slate-500">
                                    <span className="text-xs">QR Code Simulation</span>
                                </div>
                            </div>
                        )}

                        {integration === 'telegram' && (
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-slate-300 mb-2">Bot Token</label>
                                <input type="text" className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none font-mono" placeholder="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11" />
                            </div>
                        )}

                        <div className="pt-6 border-t border-brand-border flex justify-between items-center">
                            <button onClick={() => setStep(3)} className="text-slate-400 hover:text-white font-medium text-sm">Skip for now</button>
                            <button 
                                onClick={() => setStep(3)}
                                disabled={!integration}
                                className="bg-brand-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Connect & Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                    <div className="text-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-2xl shadow-green-900/50 animate-bounce">
                            <span className="material-icons text-4xl">check</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">You're all set!</h2>
                        <p className="text-slate-400 max-w-md mx-auto mb-10">Your workspace is live. You can now start building agents and analyzing conversations.</p>
                        <button 
                            onClick={onComplete}
                            className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/30 hover:bg-blue-600 transition-transform hover:-translate-y-1"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
