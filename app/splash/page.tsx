'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Splash() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/onboarding');
        }, 3000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">

            {/* Glow background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full bg-primary/5 blur-2xl" />
            </div>

            {/* SVG wave lines (same as login) */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 600C200 550 400 700 800 500C1200 300 1400 400 1600 500" stroke="#06f9f9" strokeOpacity="0.15" strokeWidth="100" />
                    <path d="M-100 800C100 750 300 900 700 700C1100 500 1300 600 1500 700" stroke="#06f9f9" strokeOpacity="0.07" strokeWidth="80" />
                </svg>
            </div>

            {/* Logo + text */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Logo container */}
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-surface to-background border border-primary/25 shadow-neon flex items-center justify-center">
                    <img src="/ewa-icon.svg" alt="eWa" className="w-16 h-16 object-contain" />
                </div>

                {/* App name */}
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-primary tracking-tight leading-none">
                        eWa
                    </h1>
                    <p className="text-text-secondary text-base font-medium mt-2 tracking-wide">
                        Your Electronic Wallet
                    </p>
                </div>
            </div>

            {/* Loading dots */}
            <div className="absolute bottom-20 flex items-center gap-3">
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        className="block w-2 h-2 rounded-full bg-primary"
                        style={{
                            animation: 'bounce 1.2s infinite',
                            animationDelay: `${i * 0.2}s`,
                            boxShadow: '0 0 8px rgba(6,249,249,0.6)',
                        }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes bounce {
                    0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
                    40% { transform: translateY(-10px); opacity: 1; }
                }
            `}</style>
        </div>
    );
}
