'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Insurance() {
    const [autoExpanded, setAutoExpanded] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link
                        href="/"
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-white/10 text-white transition-colors"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-base font-semibold text-white tracking-wide">Insurance</h1>
                    <div className="w-10" />
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar px-4 pt-6 pb-28 space-y-4">

                {/* Register Banner */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/20 p-5">
                    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary text-2xl filled">shield_lock</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-white font-bold text-sm leading-snug">
                                Link your insurance to your eWa account
                            </p>
                            <p className="text-slate-400 text-xs mt-1">
                                Manage all your policies in one place
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2.5 rounded-xl bg-primary text-background-dark text-sm font-bold flex items-center justify-center gap-2 shadow-neon active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                        Register Insurance
                    </button>
                </div>

                {/* Section Title */}
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold px-1 pt-2">
                    Insurance types
                </p>

                {/* Auto Insurance – expandable */}
                <div className="bg-surface-dark rounded-2xl border border-white/10 overflow-hidden">
                    <button
                        onClick={() => setAutoExpanded(!autoExpanded)}
                        className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-blue-400 text-xl filled">directions_car</span>
                            </div>
                            <div className="text-left">
                                <p className="text-white font-semibold text-sm">Car Insurance</p>
                                <p className="text-slate-500 text-xs mt-0.5">Liability & Comprehensive</p>
                            </div>
                        </div>
                        <span className={`material-symbols-outlined text-slate-400 transition-transform duration-200 ${autoExpanded ? 'rotate-180' : ''}`}>
                            expand_more
                        </span>
                    </button>

                    {autoExpanded && (
                        <div className="border-t border-white/5">
                            {/* Liability */}
                            <button className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/5 active:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-emerald-400" style={{ fontSize: '18px' }}>verified_user</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white text-sm font-medium">Third-Party Liability</p>
                                        <p className="text-slate-500 text-xs">Mandatory coverage</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-slate-600 text-lg">chevron_right</span>
                            </button>
                            <div className="h-px bg-white/5 mx-4" />
                            {/* Comprehensive / Casco */}
                            <button className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/5 active:bg-white/5 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-amber-400" style={{ fontSize: '18px' }}>car_crash</span>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white text-sm font-medium">Comprehensive (Casco)</p>
                                        <p className="text-slate-500 text-xs">Full or partial coverage</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-slate-600 text-lg">chevron_right</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Home / Property */}
                <button className="w-full bg-surface-dark rounded-2xl border border-white/10 flex items-center justify-between p-4 hover:border-white/20 active:bg-white/5 transition-all">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-rose-400 text-xl filled">home</span>
                        </div>
                        <div className="text-left">
                            <p className="text-white font-semibold text-sm">Home & Property Insurance</p>
                            <p className="text-slate-500 text-xs mt-0.5">Apartment, house, holiday home</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-600 text-lg">chevron_right</span>
                </button>

                {/* Device / Contents */}
                <button className="w-full bg-surface-dark rounded-2xl border border-white/10 flex items-center justify-between p-4 hover:border-white/20 active:bg-white/5 transition-all">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-violet-400 text-xl">devices</span>
                        </div>
                        <div className="text-left">
                            <p className="text-white font-semibold text-sm">Device & Contents Insurance</p>
                            <p className="text-slate-500 text-xs mt-0.5">Phone, laptop & other valuables</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-600 text-lg">chevron_right</span>
                </button>

                {/* Divider */}
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold px-1 pt-2">
                    My Policies
                </p>

                {/* My Insurances – empty state */}
                <div className="bg-surface-dark rounded-2xl border border-white/10 p-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-slate-500 text-3xl">folder_open</span>
                    </div>
                    <p className="text-white font-semibold text-sm">My Insurances</p>
                    <p className="text-slate-500 text-xs mt-1 max-w-[200px]">
                        No policies linked yet. Add one above to get started.
                    </p>
                    <button className="mt-4 px-5 py-2 rounded-xl border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors">
                        + Add Insurance
                    </button>
                </div>

            </main>
        </>
    );
}
