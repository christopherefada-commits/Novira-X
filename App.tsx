import React, { useState } from 'react';
import { ViewState } from './types';
import { Sidebar } from './components/Sidebar';
import { Landing } from './pages/Landing';
import { Pricing } from './pages/Pricing';
import { Dashboard } from './pages/Dashboard';
import { Agents } from './pages/Agents';
import { Playground } from './pages/Playground';
import { ThreadView } from './pages/ThreadView';
import { Integrations } from './pages/Integrations';
import { Developer } from './pages/Developer';
import { Team } from './pages/Team';
import { Billing } from './pages/Billing';
import { Auth } from './pages/Auth';
import { Onboarding } from './pages/Onboarding';
import { Settings } from './pages/Settings';

const App: React.FC = () => {
    const [view, setView] = useState<ViewState>(ViewState.LANDING);
    // In a real app, this would be determined by an auth provider
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasOnboarded, setHasOnboarded] = useState(false);

    // Navigation handler
    const handleAuthSuccess = () => {
        setIsAuthenticated(true);
        // If not onboarded, go to onboarding, else dashboard
        if (!hasOnboarded) {
            setView(ViewState.ONBOARDING);
        } else {
            setView(ViewState.DASHBOARD);
        }
    };

    const handleOnboardingComplete = () => {
        setHasOnboarded(true);
        setView(ViewState.DASHBOARD);
    };

    const handlePublicNavigate = (newView: ViewState) => {
        setView(newView);
    };

    const handleLoginClick = () => {
        setView(ViewState.LOGIN);
    };

    // Public Routes
    if (view === ViewState.LANDING) {
        return <Landing onNavigate={handlePublicNavigate} onLogin={handleLoginClick} />;
    }
    // Product and HowItWorks are now part of Landing
    if (view === ViewState.PRICING) {
        return <Pricing onNavigate={handlePublicNavigate} onLogin={handleLoginClick} />;
    }

    // Auth Routes
    if (view === ViewState.LOGIN || view === ViewState.SIGNUP || view === ViewState.OTP) {
        return (
            <Auth 
                view={view} 
                onChangeView={setView} 
                onAuthSuccess={handleAuthSuccess} 
            />
        );
    }

    // Onboarding Route (Protected)
    if (view === ViewState.ONBOARDING && isAuthenticated) {
        return <Onboarding onComplete={handleOnboardingComplete} />;
    }

    // Main App (Protected)
    if (isAuthenticated) {
        return (
            <div className="flex h-screen overflow-hidden bg-brand-bg text-white font-sans">
                <Sidebar currentView={view} onChangeView={setView} />
                <main className="flex-1 overflow-hidden">
                    {view === ViewState.DASHBOARD && <Dashboard />}
                    {view === ViewState.AGENTS && <Agents />}
                    {view === ViewState.PLAYGROUND && <Playground />}
                    {view === ViewState.THREAD_VIEW && <ThreadView onBack={() => setView(ViewState.DASHBOARD)} />}
                    {view === ViewState.INTEGRATIONS && <Integrations />}
                    {view === ViewState.DEVELOPER && <Developer />}
                    {view === ViewState.TEAM && <Team />}
                    {view === ViewState.BILLING && <Billing />}
                    {view === ViewState.SETTINGS && <Settings />}
                </main>
            </div>
        );
    }

    // Fallback
    return <Landing onNavigate={handlePublicNavigate} onLogin={handleLoginClick} />;
};

export default App;