'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Tab = 'my-tickets' | 'buy';

const ticketOptions = [
    {
        id: 'single',
        label: 'Single Trip',
        description: 'Valid for one trip',
        validity: '1:00 AM following day',
        price: 2.40,
        popular: false,
    },
    {
        id: 'day',
        label: 'Day Ticket',
        description: 'Unlimited trips for 24h',
        validity: 'Until midnight',
        price: 5.80,
        popular: false,
    },
    {
        id: 'weekly',
        label: 'Weekly Pass',
        description: '7 days unlimited',
        validity: '7 days from activation',
        price: 17.10,
        popular: false,
    },
    {
        id: 'monthly',
        label: 'Monthly Pass',
        description: '30 days unlimited',
        validity: '30 days from activation',
        price: 51.10,
        popular: true,
    },
];

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

export default function Tickets() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<Tab>('my-tickets');
    const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link
                        href="/"
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-base font-semibold text-text-primary tracking-wide">Mobile Ticket</h1>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors">
                        <span className="material-symbols-outlined !text-[24px]">more_vert</span>
                    </button>
                </div>

                {/* Tab Bar */}
                <div className="flex px-4 pb-0 gap-0">
                    {(['my-tickets', 'buy'] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 text-sm font-semibold transition-all border-b-2 ${activeTab === tab
                                ? 'text-primary border-primary'
                                : 'text-text-secondary border-transparent hover:text-text-primary'
                                }`}
                        >
                            {tab === 'my-tickets' ? 'My Tickets' : 'Buy Ticket'}
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-28">
                {/* ── MY TICKETS TAB ── */}
                {activeTab === 'my-tickets' && (
                    <div className="px-4 pt-6 flex flex-col items-center">
                        {/* Ticket Card */}
                        <div className="w-full max-w-sm bg-surface rounded-3xl border border-border overflow-hidden shadow-xl">
                            {/* Ticket Header */}
                            <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-5 pt-5 pb-4 border-b border-border">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-text-primary font-bold text-lg leading-tight">Vienna City Zone</p>
                                        <p className="text-text-secondary text-xs mt-1">Full Price · 2nd Class</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                        </span>
                                        <span className="text-emerald-400 text-xs font-semibold">Active</span>
                                    </div>
                                </div>
                            </div>

                            {/* QR Code */}
                            <div className="flex flex-col items-center py-6 px-5 bg-black/[0.02] dark:bg-white/[0.02]">
                                <div className="p-3 bg-white rounded-2xl shadow-lg">
                                    <QRCode />
                                </div>
                                <p className="text-text-secondary text-[11px] mt-4 text-center tracking-wide uppercase font-medium">
                                    Show this code to the inspector
                                </p>
                            </div>

                            {/* Dashed divider */}
                            <div className="flex items-center px-4">
                                <div className="w-5 h-5 rounded-full bg-background border border-border -ml-5 shrink-0" />
                                <div className="flex-1 border-t border-dashed border-border mx-1" />
                                <div className="w-5 h-5 rounded-full bg-background border border-border -mr-5 shrink-0" />
                            </div>

                            {/* Validity Info */}
                            <div className="px-5 pt-4 pb-5 space-y-3">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-text-secondary text-[10px] uppercase tracking-wider font-medium">Valid From</p>
                                        <p className="text-text-primary text-sm font-semibold mt-0.5">22 Feb 2026 · 21:45</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-text-secondary text-[10px] uppercase tracking-wider font-medium">Valid Until</p>
                                        <p className="text-text-primary text-sm font-semibold mt-0.5">23 Feb 2026 · 01:00</p>
                                    </div>
                                    <span className="material-symbols-outlined text-text-secondary text-lg">event</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-text-secondary text-[10px] uppercase tracking-wider font-medium">Passenger</p>
                                        <p className="text-text-primary text-sm font-semibold mt-0.5">Laszlo Földvary</p>
                                    </div>
                                    <span className="material-symbols-outlined text-text-secondary text-lg">person</span>
                                </div>
                            </div>
                        </div>

                        {/* Empty state hint */}
                        <p className="text-text-secondary text-xs mt-6 text-center">
                            Ticket automatically validated upon boarding
                        </p>
                    </div>
                )}

                {/* ── BUY TICKET TAB ── */}
                {activeTab === 'buy' && (
                    <div className="px-4 pt-6 space-y-3">
                        <h2 className="text-xl font-bold text-text-primary mb-4">Select Ticket Type</h2>

                        {ticketOptions.map((ticket) => (
                            <button
                                key={ticket.id}
                                onClick={() => setSelectedTicket(ticket.id)}
                                className={`w-full relative flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${selectedTicket === ticket.id
                                    ? 'bg-surface-highlight border-primary/40 shadow-neon'
                                    : 'bg-surface border-border hover:border-black/20 dark:hover:border-white/20'
                                    }`}
                            >
                                {/* Popular badge */}
                                {ticket.popular && (
                                    <span className="absolute -top-2.5 left-4 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent text-white shadow-md">
                                        Popular
                                    </span>
                                )}

                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${selectedTicket === ticket.id ? 'bg-primary/20' : 'bg-black/5 dark:bg-white/5'
                                        }`}>
                                        <span className={`material-symbols-outlined text-xl ${selectedTicket === ticket.id ? 'text-primary' : 'text-text-secondary'
                                            }`}>
                                            {ticket.id === 'single' ? 'confirmation_number'
                                                : ticket.id === 'day' ? 'today'
                                                    : ticket.id === 'weekly' ? 'date_range'
                                                        : 'calendar_month'}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-text-primary font-semibold text-sm">{ticket.label}</p>
                                        <p className="text-text-secondary text-xs mt-0.5">{ticket.validity}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 shrink-0">
                                    <span className="text-primary font-bold text-base">€{ticket.price.toFixed(2)}</span>
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${selectedTicket === ticket.id
                                        ? 'bg-primary shadow-neon'
                                        : 'border-2 border-text-secondary'
                                        }`}>
                                        {selectedTicket === ticket.id && (
                                            <span className="material-symbols-outlined text-background" style={{ fontSize: '12px' }}>check</span>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </main>

            {/* Bottom Action Bar – only on Buy tab */}
            {activeTab === 'buy' && (
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-border z-[100]">
                    <div className="max-w-md mx-auto w-full flex flex-col gap-3">
                        {selectedTicket && (
                            <div className="flex justify-between items-end px-1 mb-1">
                                <span className="text-sm text-text-secondary">
                                    {ticketOptions.find(t => t.id === selectedTicket)?.label}
                                </span>
                                <span className="text-2xl font-bold text-text-primary tracking-tight">
                                    €{ticketOptions.find(t => t.id === selectedTicket)?.price.toFixed(2)}
                                </span>
                            </div>
                        )}
                        <button
                            onClick={() => selectedTicket && router.push('/success')}
                            disabled={!selectedTicket}
                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold transition-all ${selectedTicket
                                ? 'bg-primary text-background shadow-neon active:scale-[0.98]'
                                : 'bg-surface text-text-secondary cursor-not-allowed'
                                }`}
                        >
                            {selectedTicket ? 'Buy Now' : 'Select a ticket'}
                            {selectedTicket && (
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
