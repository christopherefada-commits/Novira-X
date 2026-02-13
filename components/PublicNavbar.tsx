import React from 'react';
import { ViewState } from '../types';

interface PublicNavbarProps {
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
    onLogin: () => void;
}

export const PublicNavbar: React.FC<PublicNavbarProps> = ({ currentView, onNavigate, onLogin }) => {
    return (
        <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0F1115]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div 
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => onNavigate(ViewState.LANDING)}
                >
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                        <span className="material-icons text-white text-xl">bolt</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">NoviraX</span>
                </div>
                
                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
                    <button 
                        onClick={() => onNavigate(ViewState.LANDING)} 
                        className={`hover:text-white transition-colors ${currentView === ViewState.LANDING ? 'text-white' : ''}`}
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => onNavigate(ViewState.PRICING)} 
                        className={`hover:text-white transition-colors ${currentView === ViewState.PRICING ? 'text-white' : ''}`}
                    >
                        Pricing
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => onNavigate(ViewState.LOGIN)} 
                        className="text-sm font-medium px-4 py-2 text-slate-400 hover:text-white transition-colors"
                    >
                        Log in
                    </button>
                    <button 
                        onClick={() => onNavigate(ViewState.SIGNUP)} 
                        className="bg-white text-black text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-slate-200 transition-colors shadow-lg"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};