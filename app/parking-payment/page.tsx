'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ParkingPayment() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState<'30min' | '1h' | '1h30' | '2h'>('1h');

    const durationOptions = {
        '30min': { label: '30 min', sublabel: 'Short Stop', price: 3, icon: '30', unit: 'min' },
        '1h': { label: '1 hr', sublabel: 'Standard', price: 5, icon: '1', unit: 'hr' },
        '1h30': { label: '1.5 hr', sublabel: 'Extended', price: 8, icon: '1.5', unit: 'hr' },
        '2h': { label: '2 hr', sublabel: 'Long Stay', price: 12, icon: '2', unit: 'hr' },
    } as const;

    const handlePayment = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        router.push('/success');
    };

    const selected = durationOptions[selectedDuration];

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link
                        href="/parking"
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-base font-semibold text-text-primary tracking-wide">Start Parking</h1>
                    <div className="w-10" />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col px-4 pt-6 pb-24 overflow-y-auto no-scrollbar max-w-md mx-auto w-full">
                {/* Title */}
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-2xl font-bold text-text-primary tracking-tight">Parking Summary</h2>
                    <span className="material-symbols-outlined text-primary filled">local_parking</span>
                </div>

                {/* Main Card */}
                <Card withGlow className="space-y-6">
                    {/* Location Info */}
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-surface-highlight flex items-center justify-center shrink-0 border border-border shadow-inner">
                            <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-text-secondary mb-1">Location</p>
                            <p className="text-lg font-semibold text-accent">
                                Zone A – Mariahilf
                            </p>
                            <p className="text-xs text-text-secondary/80 mt-0.5">Mariahilfer Str. 1, 1060 Wien</p>
                        </div>
                    </div>

                    {/* License Plate */}
                    <div className="bg-surface rounded-xl p-4 border border-border flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs text-text-secondary/80 uppercase tracking-wider mb-1">License Plate</span>
                            <div className="font-mono text-xl tracking-widest text-text-primary flex items-center gap-2">
                                <span className="inline-block w-4 h-4 rounded-full border-2 border-black/20 dark:border-white/20 relative overflow-hidden bg-blue-900 flex items-center justify-center">
                                    <span className="text-[6px] leading-none text-white font-sans font-bold">EU</span>
                                </span>
                                ABC-123
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-text-secondary">badge</span>
                    </div>

                    {/* Duration Selector */}
                    <div>
                        <h3 className="text-sm font-semibold text-text-primary mb-3">Select Duration</h3>
                        <div className="bg-surface rounded-2xl p-1 border border-border space-y-1">
                            {(Object.entries(durationOptions) as [keyof typeof durationOptions, typeof durationOptions[keyof typeof durationOptions]][]).map(([key, opt]) => (
                                <label
                                    key={key}
                                    className={`relative flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${selectedDuration === key
                                        ? 'bg-surface-highlight border border-primary/30 shadow-neon'
                                        : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-70 hover:opacity-100'
                                        }`}
                                    onClick={() => setSelectedDuration(key)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col items-center justify-center w-12 h-12 bg-surface-highlight rounded-lg border border-border">
                                            <span className="text-primary font-bold" style={{ fontSize: opt.icon.length > 1 ? '14px' : '20px' }}>{opt.icon}</span>
                                            <span className="text-[7px] text-text-secondary uppercase">{opt.unit}</span>
                                        </div>
                                        <div>
                                            <p className="text-text-primary font-medium text-sm">{opt.label}</p>
                                            <p className="text-text-secondary text-xs">{opt.sublabel}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg font-bold text-primary">€{opt.price}</span>
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${selectedDuration === key ? 'bg-primary shadow-neon' : 'border-2 border-text-secondary/50'
                                            }`}>
                                            {selectedDuration === key && (
                                                <span className="material-symbols-outlined text-background text-sm font-bold">check</span>
                                            )}
                                        </div>
                                    </div>
                                    <input className="sr-only" type="radio" name="duration" checked={selectedDuration === key} readOnly />
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                            <p className="text-xs text-text-secondary mb-1">Duration</p>
                            <div className="flex items-center gap-2 text-text-primary font-medium">
                                <span className="material-symbols-outlined text-accent text-lg">schedule</span>
                                {selected.label}
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-text-secondary mb-1">Total Cost</p>
                            <p className="text-xl font-bold text-primary">€{selected.price}</p>
                        </div>
                        <div className="col-span-2 flex justify-between text-xs text-text-secondary/80 pt-2">
                            <span>Zone: <span className="text-text-secondary">A – Mariahilf</span></span>
                            <span>Rate: <span className="text-text-secondary">€{selected.price}/{selected.label}</span></span>
                        </div>
                    </div>
                </Card>

                {/* Payment Method */}
                <h3 className="text-lg font-semibold text-text-primary mt-8 mb-4 px-1">Payment Method</h3>
                <div className="bg-surface rounded-2xl p-1 border border-border space-y-1">
                    <label className="relative flex items-center gap-4 p-4 rounded-xl cursor-pointer bg-surface-highlight border border-primary/30 shadow-neon transition-all">
                        <div className="w-12 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded border border-white/10 flex items-center justify-center relative overflow-hidden shadow-sm">
                            <div className="absolute top-2 left-2 w-1.5 h-1 bg-yellow-500/80 rounded-[1px]" />
                            <span className="relative z-10 font-bold italic text-xs text-white/90 tracking-tighter">VISA</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-text-primary font-medium text-sm">Super App Virtual Card</p>
                            <p className="text-text-secondary text-xs">•••• 4589 • Exp 12/26</p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-neon">
                            <span className="material-symbols-outlined text-background text-sm font-bold">check</span>
                        </div>
                        <input checked className="sr-only" name="payment_method" type="radio" readOnly />
                    </label>
                    <label className="relative flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-all opacity-60 hover:opacity-100">
                        <div className="w-12 h-8 bg-white rounded border border-slate-200 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-orange-600">MC</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-text-primary font-medium text-sm">Personal Debit</p>
                            <p className="text-text-secondary text-xs">•••• 8821</p>
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-text-secondary/50" />
                        <input className="sr-only" name="payment_method" type="radio" />
                    </label>
                    <button className="w-full py-3 text-center text-primary text-sm font-medium hover:text-primary-dark transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                        Add New Method
                    </button>
                </div>
            </main>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-border z-[100]">
                <div className="max-w-md mx-auto w-full flex flex-col gap-3">
                    <div className="flex justify-between items-end px-1 mb-1">
                        <span className="text-sm text-text-secondary">Total amount</span>
                        <span className="text-2xl font-bold text-text-primary tracking-tight">€{selected.price}</span>
                    </div>
                    <Button
                        onClick={handlePayment}
                        loading={isLoading}
                        icon="arrow_forward"
                        className="w-full group"
                    >
                        Confirm and Pay
                    </Button>
                    <p className="text-center text-[10px] text-text-secondary/80 mt-1">
                        By confirming, you agree to the{' '}
                        <a className="underline hover:text-text-primary" href="#">T&Cs</a>
                    </p>
                </div>
            </div>
        </>
    );
}
