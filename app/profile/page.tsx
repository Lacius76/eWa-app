'use client';

import { useRouter } from 'next/navigation';

export default function Profile() {
    const router = useRouter();

    const handleLogout = () => {
        // For demo, navigate back to login
        router.push('/login');
    };

    return (
        <div className="w-full min-h-screen flex flex-col relative bg-background-dark">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0"></div>

            {/* Header */}
            <header className="pt-12 pb-8 px-6 flex flex-col items-center gap-4 z-10 sticky top-0 bg-background-dark/95 backdrop-blur-md border-b border-white/5">
                <div className="w-full flex justify-between items-center mb-2">
                    <h1 className="text-xl font-semibold tracking-tight text-white">Profile</h1>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 active:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-white">more_vert</span>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-3">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-surface-dark flex items-center justify-center border-2 border-primary/30 shadow-[0_0_20px_rgba(6,249,249,0.15)] overflow-hidden">
                            <img
                                src="/img/laszlo.jpg"
                                alt="Laszlo Földvary"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background-dark shadow-lg border-2 border-background-dark hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-sm font-bold">edit</span>
                        </button>
                    </div>
                    {/* User Info */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white">Laszlo Földvary</h2>
                        <p className="text-white/50 text-sm">laszlo@example.com</p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col w-full z-0 overflow-y-auto pb-32">
                {/* Account Section */}
                <div className="px-6 py-6">
                    <h3 className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-4 pl-1">Account</h3>
                    <div className="flex flex-col gap-2">
                        {/* Personal Info */}
                        <button className="flex items-center justify-between group w-full bg-surface-dark/50 hover:bg-surface-dark p-4 rounded-xl transition-all border border-transparent hover:border-primary/10">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">badge</span>
                                <span className="text-white font-medium text-base">Personal Info</span>
                            </div>
                            <span className="material-symbols-outlined text-white/30 text-xl group-hover:text-primary/70 transition-colors">chevron_right</span>
                        </button>

                        {/* Payment Methods */}
                        <button className="flex items-center justify-between group w-full bg-surface-dark/50 hover:bg-surface-dark p-4 rounded-xl transition-all border border-transparent hover:border-primary/10">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">credit_card</span>
                                <span className="text-white font-medium text-base">Payment Methods</span>
                            </div>
                            <span className="material-symbols-outlined text-white/30 text-xl group-hover:text-primary/70 transition-colors">chevron_right</span>
                        </button>

                        {/* Security */}
                        <button className="flex items-center justify-between group w-full bg-surface-dark/50 hover:bg-surface-dark p-4 rounded-xl transition-all border border-transparent hover:border-primary/10">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">lock</span>
                                <span className="text-white font-medium text-base">Security</span>
                            </div>
                            <span className="material-symbols-outlined text-white/30 text-xl group-hover:text-primary/70 transition-colors">chevron_right</span>
                        </button>
                    </div>
                </div>

                {/* App Settings Section */}
                <div className="px-6 pb-6">
                    <h3 className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-4 pl-1">App Settings</h3>
                    <div className="flex flex-col gap-2">
                        {/* Notifications */}
                        <button className="flex items-center justify-between group w-full bg-surface-dark/50 hover:bg-surface-dark p-4 rounded-xl transition-all border border-transparent hover:border-primary/10">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">notifications</span>
                                <span className="text-white font-medium text-base">Notifications</span>
                            </div>
                            <span className="material-symbols-outlined text-white/30 text-xl group-hover:text-primary/70 transition-colors">chevron_right</span>
                        </button>

                        {/* Appearance */}
                        <div className="flex items-center justify-between group w-full bg-surface-dark/50 hover:bg-surface-dark p-4 rounded-xl transition-all border border-transparent hover:border-primary/10 cursor-pointer">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">dark_mode</span>
                                <span className="text-white font-medium text-base">Appearance</span>
                            </div>
                            <div className="text-white/50 text-sm">Dark</div>
                        </div>

                        {/* Language */}
                        <button className="flex items-center justify-between group w-full bg-surface-dark/50 hover:bg-surface-dark p-4 rounded-xl transition-all border border-transparent hover:border-primary/10">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">language</span>
                                <span className="text-white font-medium text-base">Language</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-white/50 text-sm">English</span>
                                <span className="material-symbols-outlined text-white/30 text-xl group-hover:text-primary/70 transition-colors">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Logout Button */}
                <div className="px-6 py-2 mt-auto">
                    <button
                        onClick={handleLogout}
                        className="w-full py-4 rounded-xl bg-surface-dark border border-white/10 hover:bg-surface-dark/80 active:bg-surface-dark/60 transition-all flex items-center justify-center gap-2 group"
                    >
                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">logout</span>
                        <span className="text-primary font-bold text-base">Log Out</span>
                    </button>
                    <p className="text-center text-white/20 text-xs mt-6 pb-4">Version 2.4.0 (Build 302)</p>
                </div>
            </main>
        </div>
    );
}
