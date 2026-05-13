'use client';

import Link from 'next/link';

export default function EwaCardOnboarding() {
    return (
        <div className="w-full min-h-screen flex flex-col relative bg-background">
            {/* Header */}
            <header className="pt-4 pb-4 px-6 flex flex-col items-center gap-4 z-10 sticky top-0 bg-background/95 backdrop-blur-md border-b border-border">
                <div className="w-full flex justify-between items-center relative">
                    <Link
                        href="/wallet"
                        className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors z-10"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-xl font-semibold tracking-tight text-text-primary absolute w-full text-center left-0 pointer-events-none">eWa Card</h1>
                    <div className="w-10 h-10 -mr-2"></div> {/* Spacer for centering */}
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-4 py-8 pb-32 flex flex-col max-w-[350px] mx-auto w-full">
                <div className="mb-8 w-full max-w-[350px] mx-auto h-[200px] rounded-3xl bg-gradient-to-br from-accent/10 to-surface p-4 flex flex-col justify-center items-center shadow-2xl border border-accent/30 relative overflow-hidden">
                    {/* Decorative circle */}
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-accent/20 blur-xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-accent/20 blur-xl pointer-events-none"></div>
                    <h3 className="text-text-primary font-bold text-2xl leading-tight tracking-tight mt-1 relative z-10">eWa card</h3>
                    <p className="text-text-secondary text-xs uppercase tracking-widest mt-1.5 font-medium relative z-10">prepaid virtual bank card</p>
                </div>

                <div className="space-y-6 text-center">
                    <h2 className="text-2xl font-bold text-text-primary">Pay easily - with eWa card!</h2>
                    
                    <ul className="text-left space-y-4 text-text-secondary text-sm bg-surface p-6 rounded-2xl border border-border shadow-sm">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-accent text-xl shrink-0 mt-0.5">contactless</span>
                            <span>Use it for contactless mobile payments.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-accent text-xl shrink-0 mt-0.5">app_shortcut</span>
                            <span>Within the app: e-Vignette, insurance, and more...</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-accent text-xl shrink-0 mt-0.5">account_balance</span>
                            <span>The card can be topped up via any bank account.</span>
                        </li>
                    </ul>

                    <p className="text-text-primary font-medium px-4">
                        Just a few details and a quick top-up, and you're ready to go!
                    </p>
                </div>

                <div className="mt-12 w-full">
                    <Link
                        href="/wallet/ewa-card/form"
                        className="w-full py-4 rounded-xl bg-accent text-white font-bold shadow-[0_4px_14px_0_rgba(110,0,255,0.39)] hover:bg-accent-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2 group block text-center"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span>Next</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
