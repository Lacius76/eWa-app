'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = 'cinema' | 'concerts' | 'theater';

interface EventItem {
    id: string;
    title: string;
    date: string;
    price: string;
}

const eventsData: Record<Tab, { venue: string; icon: string; color: string; bgColor: string; events: EventItem[] }> = {
    cinema: {
        venue: 'Cineplexx',
        icon: 'movie',
        color: 'text-rose-400',
        bgColor: 'bg-rose-500/10',
        events: [
            { id: 'c1', title: '2001: A Space Odyssey', date: 'Oct 24 • 19:30', price: '€ 14.50' },
            { id: 'c2', title: 'The Book of Eli', date: 'Oct 25 • 21:00', price: '€ 13.00' },
            { id: 'c3', title: 'Dredd', date: 'Oct 26 • 20:15', price: '€ 15.00' },
        ],
    },
    concerts: {
        venue: 'Gasometer',
        icon: 'music_note',
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        events: [
            { id: 'm1', title: 'Pink Floyd (Tribute)', date: 'Nov 12 • 20:00', price: '€ 45.00' },
            { id: 'm2', title: 'Metallica', date: 'Nov 18 • 19:00', price: '€ 120.00' },
            { id: 'm3', title: 'King Buffalo', date: 'Nov 22 • 21:30', price: '€ 28.00' },
        ],
    },
    theater: {
        venue: 'Burgtheater',
        icon: 'theater_comedy',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        events: [
            { id: 't1', title: 'Die zwölf Geschworenen', date: 'Dec 05 • 19:30', price: '€ 35.00' },
            { id: 't2', title: 'Das Phantom der Oper', date: 'Dec 12 • 18:00', price: '€ 85.00' },
            { id: 't3', title: 'Die Zauberflöte', date: 'Dec 20 • 19:00', price: '€ 65.00' },
        ],
    },
};

export default function EntertainmentTickets() {
    const [activeTab, setActiveTab] = useState<Tab>('cinema');
    const currentCategory = eventsData[activeTab];

    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link
                        href="/dashboard"
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-base font-semibold text-text-primary tracking-wide">Tickets</h1>
                    <div className="w-10" />
                </div>

                {/* Tab Bar */}
                <div className="flex px-4 pb-0 gap-0">
                    {(['cinema', 'concerts', 'theater'] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 text-sm font-semibold transition-all border-b-2 capitalize ${activeTab === tab
                                ? 'text-accent border-accent'
                                : 'text-text-secondary border-transparent hover:text-text-primary'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar px-4 pt-6 pb-28">

                {/* Venue Header */}
                <div className="flex items-center gap-4 mb-6 px-1">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${currentCategory.bgColor}`}>
                        <span className={`material-symbols-outlined text-2xl filled ${currentCategory.color}`}>
                            {currentCategory.icon}
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary tracking-tight">{currentCategory.venue}</h2>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                    {currentCategory.events.map((event) => {
                        const [month, day] = event.date.split(' • ')[0].split(' ');
                        const time = event.date.split(' • ')[1];

                        return (
                            <div key={event.id} className="bg-surface rounded-3xl border border-border p-5 flex items-center gap-4 hover:border-text-secondary/50 transition-colors group cursor-pointer active:scale-[0.98]">

                                {/* Date Box */}
                                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex flex-col items-center justify-center shrink-0 border border-border group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                                    <span className="text-primary text-[10px] uppercase font-bold tracking-wider">{month}</span>
                                    <span className="text-text-primary font-black text-xl leading-none mt-0.5">{day}</span>
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-text-primary font-bold text-base truncate pr-2">{event.title}</h3>
                                    <div className="flex items-center gap-1.5 mt-1.5 opacity-60">
                                        <span className="material-symbols-outlined text-[14px] text-text-secondary">schedule</span>
                                        <span className="text-text-secondary text-xs font-medium">{time}</span>
                                    </div>
                                </div>

                                {/* Price / Action */}
                                <div className="flex flex-col items-end shrink-0">
                                    <span className="text-primary font-bold text-base">{event.price}</span>
                                    <button className="mt-2 px-3 py-1.5 bg-accent/10 rounded-lg border border-accent/20 text-accent text-xs font-bold hover:bg-accent/20 transition-colors active:bg-accent/30">
                                        Get
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}
