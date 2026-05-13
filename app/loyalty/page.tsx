'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'my-cards' | 'add-card';

// Simple SVG QR code pattern (decorative, visually realistic)
function QRCode() {
    const size = 220;
    const modules = 21;
    const cellSize = size / modules;

    // Deterministic pseudo-random pattern for inner modules
    const seed = [
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    ];

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rounded-xl">
            <rect width={size} height={size} fill="white" />
            {seed.map((row, r) =>
                row.map((cell, c) =>
                    cell === 1 ? (
                        <rect
                            key={`${r}-${c}`}
                            x={c * cellSize}
                            y={r * cellSize}
                            width={cellSize}
                            height={cellSize}
                            fill="#0a0e17"
                        />
                    ) : null
                )
            )}
        </svg>
    );
}

export default function LoyaltyCards() {
    const [activeTab, setActiveTab] = useState<Tab>('my-cards');

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link
                        href="/dashboard"
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-base font-semibold text-text-primary tracking-wide">Loyalty Cards</h1>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors">
                        <span className="material-symbols-outlined !text-[24px]">more_vert</span>
                    </button>
                </div>

                {/* Tab Bar */}
                <div className="flex px-4 pb-0 gap-0">
                    {(['my-cards', 'add-card'] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 text-sm font-semibold transition-all border-b-2 ${activeTab === tab
                                ? 'text-accent border-accent'
                                : 'text-text-secondary border-transparent hover:text-text-primary'
                                }`}
                        >
                            {tab === 'my-cards' ? 'My Cards' : 'Add Card'}
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-28">
                {/* ── MY CARDS TAB ── */}
                {activeTab === 'my-cards' && (
                    <div className="px-4 pt-6 flex flex-col items-center">
                        {/* Loyalty Card */}
                        <div className="w-full max-w-sm bg-surface rounded-3xl border border-border overflow-hidden shadow-xl">
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-5 pt-5 pb-4 border-b border-border">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-text-primary font-bold text-lg leading-tight">Billa Jö-Card</p>
                                        <p className="text-text-secondary text-xs mt-1">Supermarket Rewards</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full px-3 py-1">
                                        <span className="text-amber-500 text-xs font-semibold">450 points</span>
                                    </div>
                                </div>
                            </div>

                            {/* QR Code */}
                            <div className="flex flex-col items-center py-6 px-5 bg-black/[0.02] dark:bg-white/[0.02]">
                                <div className="p-3 bg-white rounded-2xl shadow-lg">
                                    <QRCode />
                                </div>
                                <p className="text-text-secondary text-[11px] mt-4 text-center tracking-wide uppercase font-medium">
                                    Scan at checkout
                                </p>
                            </div>

                            {/* Dashed divider */}
                            <div className="flex items-center px-4">
                                <div className="w-5 h-5 rounded-full bg-background border border-border -ml-5 shrink-0" />
                                <div className="flex-1 border-t border-dashed border-border mx-1" />
                                <div className="w-5 h-5 rounded-full bg-background border border-border -mr-5 shrink-0" />
                            </div>

                            {/* Card Info */}
                            <div className="px-5 pt-4 pb-5 space-y-3">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-text-secondary text-[10px] uppercase tracking-wider font-medium">Card Number</p>
                                        <p className="text-text-primary text-sm font-semibold mt-0.5 font-mono">1234 5678 9012 3456</p>
                                    </div>
                                    <span className="material-symbols-outlined text-text-secondary text-lg">credit_card</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-text-secondary text-[10px] uppercase tracking-wider font-medium">Holder</p>
                                        <p className="text-text-primary text-sm font-semibold mt-0.5">Laszlo Földvary</p>
                                    </div>
                                    <span className="material-symbols-outlined text-text-secondary text-lg">person</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── ADD CARD TAB ── */}
                {activeTab === 'add-card' && (
                    <div className="px-4 pt-6 space-y-4 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mt-10">
                            <span className="material-symbols-outlined text-3xl text-text-secondary">add_circle</span>
                        </div>
                        <h2 className="text-xl font-bold text-text-primary">Add New Card</h2>
                        <p className="text-text-secondary text-sm max-w-[250px]">
                            Scan your physical loyalty cards to digitize them and keep them all in one place.
                        </p>
                        <button className="mt-4 px-6 py-3 bg-accent text-white rounded-xl font-bold shadow-neon active:scale-[0.98] transition-transform">
                            Scan Barcode
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}
