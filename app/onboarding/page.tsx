'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const onboardingScreens = [
    {
        icon: 'account_balance_wallet',
        title: 'All-in-One',
        titleHighlight: 'Super App',
        description: 'Manage your finances, parking, vignettes, and more in a single beautiful app.',
    },
    {
        icon: 'fast_forward',
        title: 'Lightning',
        titleHighlight: 'Fast',
        description: 'Complete transactions in seconds with our optimized payment processing.',
    },
    {
        icon: 'shield_lock',
        title: 'Bank-Grade',
        titleHighlight: 'Security',
        description: 'Your transactions and data are protected with the latest encryption technology.',
    },
];

export default function Onboarding() {
    const router = useRouter();
    const [currentScreen, setCurrentScreen] = useState(0);

    const handleNext = () => {
        if (currentScreen < onboardingScreens.length - 1) {
            setCurrentScreen(currentScreen + 1);
        } else {
            router.push('/');
        }
    };

    const handleSkip = () => {
        router.push('/');
    };

    const screen = onboardingScreens[currentScreen];

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark">
            {/* Top Bar */}
            <header className="flex items-center justify-end px-6 pt-8 pb-2 w-full z-10">
                <button
                    onClick={handleSkip}
                    className="text-primary/80 hover:text-primary text-sm font-semibold tracking-wide transition-colors duration-200"
                >
                    Skip
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto relative">
                {/* Illustration Container */}
                <div className="relative w-full flex items-center justify-center py-8">
                    {/* Background Pulse Circles */}
                    <div className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>

                    {/* Icon Container */}
                    <div className="relative z-10 flex items-center justify-center w-40 h-40 bg-gradient-to-br from-surface-dark to-background-dark rounded-3xl border border-primary/20 shadow-neon">
                        <span
                            className="material-symbols-outlined text-primary text-[64px] filled"
                            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
                        >
                            {screen.icon}
                        </span>
                        {/* Decorative Element */}
                        <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(6,249,249,0.8)]"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center mt-8 space-y-4 max-w-xs mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
                        {screen.title} <br />
                        <span className="text-primary">{screen.titleHighlight}</span>
                    </h1>
                    <p className="text-slate-400 text-base leading-relaxed font-normal">
                        {screen.description}
                    </p>
                </div>
            </main>

            {/* Bottom Action Area */}
            <footer className="w-full px-6 pb-10 pt-4 max-w-md mx-auto">
                {/* Pagination Dots */}
                <div className="flex w-full flex-row items-center justify-center gap-3 mb-8">
                    {onboardingScreens.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentScreen
                                    ? 'w-8 bg-primary shadow-[0_0_10px_rgba(6,249,249,0.4)]'
                                    : 'w-2 bg-surface-dark ring-1 ring-inset ring-slate-700/50'
                                }`}
                        ></div>
                    ))}
                </div>

                {/* Primary Button */}
                <button
                    onClick={handleNext}
                    className="w-full bg-primary hover:bg-primary-dark active:bg-primary-dark text-background-dark text-lg font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary/30 flex items-center justify-center gap-2 group"
                >
                    {currentScreen < onboardingScreens.length - 1 ? 'Next' : 'Get Started'}
                    <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                        arrow_forward
                    </span>
                </button>
            </footer>
        </div>
    );
}
