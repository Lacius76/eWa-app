'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';

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
    const touchStartX = useRef<number | null>(null);

    const handleNext = () => {
        if (currentScreen < onboardingScreens.length - 1) {
            setCurrentScreen(currentScreen + 1);
        } else {
            router.push('/login');
        }
    };

    const handlePrev = () => {
        if (currentScreen > 0) {
            setCurrentScreen(currentScreen - 1);
        }
    };

    const handleSkip = () => {
        router.push('/login');
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        // Minimum 50px swipe threshold
        if (Math.abs(deltaX) < 50) return;
        if (deltaX < 0) {
            // Swipe left → next
            handleNext();
        } else {
            // Swipe right → previous
            handlePrev();
        }
        touchStartX.current = null;
    };

    const screen = onboardingScreens[currentScreen];

    return (
        <div
            className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-background overscroll-none touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Top Bar */}
            <header className="flex items-center justify-end px-6 pt-4 pb-2 w-full z-10">
                <button
                    onClick={handleSkip}
                    className="text-primary/80 hover:text-primary text-sm font-semibold tracking-wide transition-colors duration-200"
                >
                    Skip
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto relative pb-32">
                {/* Illustration Container */}
                <div className="relative w-full flex items-center justify-center pt-4 pb-4">
                    {/* Icon Container */}
                    <div className="relative z-10 flex items-center justify-center w-[160px] h-[160px] bg-gradient-to-br from-surface to-background rounded-[32px] border border-primary/20 shadow-[0_0_30px_rgba(6,249,249,0.1)]">
                        {currentScreen === 0 ? (
                            <img
                                src="/ewa-icon.svg"
                                alt="eWa logo"
                                className="w-[100px] h-[100px] object-contain"
                            />
                        ) : (
                            <span
                                className="material-symbols-outlined text-primary filled"
                                style={{ fontSize: '64px', fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
                            >
                                {screen.icon}
                            </span>
                        )}
                        {/* Decorative Element */}
                        <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(6,249,249,0.8)]"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center mt-6 space-y-4 max-w-xs mx-auto">
                    <h1 className="text-[28px] font-bold tracking-tight text-text-primary leading-[1.2]">
                        {screen.title} <br />
                        <span className="text-accent">{screen.titleHighlight}</span>
                    </h1>
                    <p className="text-text-secondary text-base leading-relaxed font-normal mt-4">
                        {screen.description}
                    </p>
                </div>
            </main>

            {/* Bottom Action Area */}
            <footer className="absolute bottom-[60px] left-0 right-0 w-full px-6 z-20">
                <div className="max-w-md mx-auto">
                    {/* Pagination Dots */}
                    <div className="flex w-full flex-row items-center justify-center gap-2 mb-6">
                        {onboardingScreens.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentScreen
                                    ? 'w-8 bg-primary shadow-[0_0_10px_rgba(6,249,249,0.4)]'
                                    : 'w-2 bg-transparent border border-border'
                                    }`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="group flex w-full h-14 items-center justify-center gap-2 rounded-2xl bg-accent text-[18px] font-semibold text-background shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent/90 active:scale-[0.98]"
                    >
                        {currentScreen < onboardingScreens.length - 1 ? 'Next' : 'Get Started'}
                        <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </footer>
        </div>
    );
}
