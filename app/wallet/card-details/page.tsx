'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CardDetails() {
    const router = useRouter();

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
                    <h1 className="text-xl font-semibold tracking-tight text-text-primary absolute w-full text-center left-0 pointer-events-none">Card Details</h1>
                    <button className="w-10 h-10 -mr-2 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 transition-colors z-10">
                        <span className="material-symbols-outlined text-text-primary">more_vert</span>
                    </button>
                </div>
            </header>

            <main className="flex-1 flex flex-col w-full z-0 overflow-y-auto px-4 py-8 pb-32">
                {/* The Card */}
                <div className="w-full max-w-[350px] mx-auto h-[200px] rounded-3xl bg-gradient-to-br from-accent/20 to-surface p-7 flex flex-col justify-between shadow-2xl backdrop-blur-md border border-border">
                    <div className="flex justify-between items-start">
                        <span className="text-text-secondary font-medium text-base tracking-widest">Debit</span>
                        <span className="material-symbols-outlined text-text-primary" style={{ fontSize: '32px' }}>
                            contactless
                        </span>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-mono text-text-primary tracking-widest">••••</span>
                            <span className="text-3xl font-mono text-text-primary tracking-widest">••••</span>
                            <span className="text-3xl font-mono text-text-primary tracking-widest">1234</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs text-text-secondary uppercase font-medium">Card Holder</p>
                                <p className="text-sm text-text-primary font-medium tracking-wide">Laszlo Foldvary</p>
                            </div>
                            <div className="h-8 w-12 bg-white/90 rounded flex items-center justify-center">
                                <span className="text-[10px] font-bold text-blue-900">VISA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Panel */}
                <div className="mt-10 bg-surface rounded-2xl p-6 border border-border shadow-sm space-y-4 max-w-[350px] mx-auto w-full">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-sm text-text-secondary font-medium">Card name</span>
                        <span className="text-sm font-semibold text-text-primary">Visa</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-sm text-text-secondary font-medium">Type</span>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-text-primary italic tracking-tighter">VISA</span>
                            <span className="material-symbols-outlined text-text-primary" style={{ fontSize: '18px' }}>credit_card</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-sm text-text-secondary font-medium">Number</span>
                        <span className="text-sm font-mono text-text-primary tracking-wide">**** **** **** 1234</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-text-secondary font-medium">Security authentication</span>
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-semibold text-rose-500">Not authenticated</span>
                            <span className="material-symbols-outlined text-rose-500" style={{ fontSize: '16px' }}>error</span>
                        </div>
                    </div>
                </div>

                {/* Authentication Button */}
                <div className="mt-auto pt-8 max-w-[350px] mx-auto w-full">
                    <button
                        className="w-full py-4 rounded-xl bg-surface border border-border hover:bg-surface/80 active:bg-surface/60 transition-all flex items-center justify-center gap-2 group"
                    >
                        <span className="material-symbols-outlined text-accent group-hover:scale-110 transition-transform">lock</span>
                        <span className="text-accent font-bold text-base">Security Authentication</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
