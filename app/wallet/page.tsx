'use client';

import { useRef, useState, MouseEvent } from 'react';
import Link from 'next/link';

export default function Wallet() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <main className="flex-1 flex flex-col relative overflow-hidden h-screen">
            {/* Header */}
            <header className="pt-4 pb-4 px-6 flex justify-between items-center z-10 bg-background/80 backdrop-blur-md sticky top-0">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-accent/20 ring-2 ring-primary/30">
                        <img
                            src="/img/laszlo.jpg"
                            alt="Laszlo Foldvary"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-sm font-medium text-text-secondary">Welcome back,</h1>
                        <h2 className="text-lg font-bold text-text-primary leading-tight">Laszlo Foldvary</h2>
                    </div>
                </div>
                <Link href="/notifications" className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/20 hover:bg-accent/30 text-accent transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                        notifications
                    </span>
                </Link>
            </header>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
                {/* Balance Section */}
                <div className="px-6 pt-4 pb-2 text-center">
                    <p className="text-sm text-text-secondary font-medium tracking-wide uppercase">Total Balance</p>
                    <h2 className="text-4xl font-bold text-text-primary mt-1 tracking-tight">€14,230.50</h2>
                </div>

                {/* Cards Carousel - Swipeable */}
                <div className="mt-6 pb-2">
                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onScroll={() => {
                            if (scrollRef.current) {
                                const scrollPosition = scrollRef.current.scrollLeft;
                                const cardWidth = 280 + 16; // width + gap
                                const newIndex = Math.round(scrollPosition / cardWidth);
                                setActiveCardIndex(newIndex);
                            }
                        }}
                        className={`overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-pl-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    >
                        <div className="flex gap-4 pb-4 px-6 w-max">
                            {/* Card 1 - Visa Debit */}
                            <div className="snap-start shrink-0 w-[280px] h-[178px] rounded-2xl bg-gradient-to-br from-accent/20 to-surface p-6 flex flex-col justify-between shadow-lg backdrop-blur-md border border-border transform transition-transform hover:scale-[1.02] cursor-pointer group">
                                <div className="flex justify-between items-start">
                                    <span className="text-text-secondary font-medium text-sm tracking-widest">Debit</span>
                                    <span className="material-symbols-outlined text-text-primary" style={{ fontSize: '28px' }}>
                                        contactless
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-mono text-text-primary tracking-widest">••••</span>
                                        <span className="text-2xl font-mono text-text-primary tracking-widest">••••</span>
                                        <span className="text-2xl font-mono text-text-primary tracking-widest">4242</span>
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

                            {/* Card 2 - Request eWa Card */}
                            <div className="snap-start shrink-0 w-[280px] h-[178px] rounded-2xl bg-gradient-to-br from-primary/10 to-surface p-4 flex flex-col justify-center items-center shadow-lg backdrop-blur-md border border-primary/30 transform transition-transform hover:scale-[1.02] group text-center relative overflow-hidden">
                                {/* Decorative circle */}
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-primary/20 blur-xl pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-accent/20 blur-xl pointer-events-none"></div>

                                <div className="flex flex-col items-center flex-1 justify-center relative z-10 w-full">
                                    <h3 className="text-text-primary font-bold text-lg leading-tight tracking-tight mt-1">Request a eWa card</h3>
                                    <p className="text-text-secondary text-xs uppercase tracking-widest mt-1.5 font-medium">prepaid virtual bank card</p>
                                </div>

                                <button className="mt-3 w-full py-3 bg-accent hover:bg-accent-dark text-background text-sm font-bold rounded-xl shadow-[0_4px_14px_0_rgba(6,249,249,0.39)] transition-colors active:scale-[0.98] relative z-10">
                                    Submit card request
                                </button>
                            </div>

                            {/* Card 3 - Add New Card */}
                            <div className="snap-start shrink-0 w-[280px] h-[178px] rounded-2xl border-2 border-dashed border-border hover:border-accent/70 flex flex-col items-center justify-center text-text-secondary hover:text-accent transition-all cursor-pointer bg-surface/30 hover:bg-surface/50 group relative p-4">
                                <div className="flex flex-col items-center gap-3 mb-4">
                                    <div className="h-14 w-14 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all">
                                        <span className="material-symbols-outlined text-4xl text-accent group-hover:scale-110 transition-transform">add</span>
                                    </div>
                                    <span className="text-sm font-semibold text-center text-text-primary px-2">Add New Card</span>
                                </div>
                                <div className="absolute bottom-4 flex gap-2 w-full justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                                    <div className="h-6 w-8 bg-surface rounded flex items-center justify-center p-1 border border-border bg-white">
                                        <img src="/cards/master.svg" alt="Mastercard" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="h-6 w-8 bg-surface rounded flex items-center justify-center p-1 border border-border bg-white">
                                        <img src="/cards/visa.svg" alt="Visa" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="h-6 w-8 bg-surface rounded flex items-center justify-center p-1 border border-border bg-white">
                                        <img src="/cards/american.svg" alt="American Express" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="h-6 w-8 bg-surface rounded flex items-center justify-center p-1 border border-border bg-white">
                                        <img src="/cards/maestro.svg" alt="Maestro" className="h-full w-full object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4 mb-4">
                        {[0, 1, 2].map((index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${activeCardIndex === index ? 'w-6 bg-primary' : 'w-2 bg-black/20 dark:bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="px-6 grid grid-cols-4 gap-4 mb-8">
                    <button className="flex flex-col items-center gap-2 group">
                        <div className="h-14 w-14 rounded-full bg-surface group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300">
                            <span className="material-symbols-outlined text-text-primary group-hover:text-primary transition-colors">
                                send
                            </span>
                        </div>
                        <span className="text-xs font-medium text-text-secondary">Send</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group">
                        <div className="h-14 w-14 rounded-full bg-surface group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300">
                            <span className="material-symbols-outlined text-text-primary group-hover:text-primary transition-colors">
                                request_quote
                            </span>
                        </div>
                        <span className="text-xs font-medium text-text-secondary">Request</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group">
                        <div className="h-14 w-14 rounded-full bg-surface group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300">
                            <span className="material-symbols-outlined text-text-primary group-hover:text-primary transition-colors">
                                payments
                            </span>
                        </div>
                        <span className="text-xs font-medium text-text-secondary">Bill Pay</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group">
                        <div className="h-14 w-14 rounded-full bg-surface group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300">
                            <span className="material-symbols-outlined text-text-primary group-hover:text-primary transition-colors">
                                qr_code_scanner
                            </span>
                        </div>
                        <span className="text-xs font-medium text-text-secondary">Scan</span>
                    </button>
                </div>

                {/* Recent Transactions */}
                <div className="bg-surface/50 rounded-t-3xl min-h-[400px] border-t border-border backdrop-blur-sm">
                    <div className="px-6 pt-6 pb-4 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-text-primary">Recent Transactions</h3>
                        <button className="text-sm text-accent font-medium hover:text-accent-dark transition-colors">
                            See All
                        </button>
                    </div>
                    <div className="px-4 space-y-2">
                        {[
                            { icon: 'movie', name: 'Netflix Subscription', time: 'Today, 09:41 AM', amount: '- €15.99', color: 'text-accent' },
                            { icon: 'directions_car', name: 'Uber Ride', time: 'Yesterday, 8:30 PM', amount: '- €24.50', color: 'text-accent' },
                            { icon: 'account_balance_wallet', name: 'Salary Deposit', time: 'Oct 24, 10:00 AM', amount: '+ €3,200.00', color: 'text-emerald-600 dark:text-emerald-400' },
                            { icon: 'coffee', name: 'Starbucks Coffee', time: 'Oct 23, 08:15 AM', amount: '- €5.40', color: 'text-accent' },
                        ].map((tx, i) => (
                            <div
                                key={i}
                                className="group flex items-center justify-between p-3 rounded-xl hover:bg-surface/50 transition-colors cursor-pointer min-h-[72px]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`h-12 w-12 rounded-xl bg-surface flex items-center justify-center ${tx.color} group-hover:scale-105 transition-transform`}>
                                        <span className="material-symbols-outlined">{tx.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium text-text-primary">{tx.name}</span>
                                        <span className="text-sm text-text-secondary">{tx.time}</span>
                                    </div>
                                </div>
                                <span className={`text-base font-semibold font-mono ${tx.amount.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-text-primary'}`}>
                                    {tx.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </main>
    );
}
