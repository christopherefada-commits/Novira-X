export enum ViewState {
    LANDING = 'LANDING',
    PRODUCT = 'PRODUCT',
    HOW_IT_WORKS = 'HOW_IT_WORKS',
    PRICING = 'PRICING',
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    OTP = 'OTP',
    ONBOARDING = 'ONBOARDING',
    DASHBOARD = 'DASHBOARD',
    AGENTS = 'AGENTS',
    INTEGRATIONS = 'INTEGRATIONS',
    TEAM = 'TEAM',
    DEVELOPER = 'DEVELOPER',
    BILLING = 'BILLING',
    PLAYGROUND = 'PLAYGROUND',
    THREAD_VIEW = 'THREAD_VIEW',
    SETTINGS = 'SETTINGS'
}

export interface Agent {
    id: string;
    name: string;
    platform: 'whatsapp' | 'telegram';
    status: 'active' | 'idle' | 'offline';
    lastActivity: string;
    avatar?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: 'Owner' | 'Admin' | 'Member' | 'Viewer';
    status: 'Active' | 'Pending';
    avatar: string;
}

export interface Invoice {
    id: string;
    date: string;
    amount: string;
    status: 'Paid' | 'Pending' | 'Trial';
}