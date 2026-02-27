'use client';

import Link from 'next/link';

interface NotificationItem {
    id: string;
    title: string;
    description: string;
    dateText: string;
    monthText: string;
    icon: string;
    color: string;
    bgColor: string;
    actionText: string;
}

const notificationsList: NotificationItem[] = [
    {
        id: 'n1',
        title: 'Food Delivery',
        description: 'Your order is on the way. Arriving soon.',
        dateText: '15',
        monthText: 'MIN',
        icon: 'local_pizza',
        color: 'text-amber-500',
        bgColor: 'bg-amber-500/10',
        actionText: 'Track',
    },
    {
        id: 'n2',
        title: 'Highway Vignette',
        description: 'Your annual e-Vignette is expiring soon.',
        dateText: '25',
        monthText: 'FEB',
        icon: 'directions_car',
        color: 'text-rose-500',
        bgColor: 'bg-rose-500/10',
        actionText: 'Renew',
    },
    {
        id: 'n3',
        title: 'Insurance Offer',
        description: 'Exclusive 20% discount on auto insurance.',
        dateText: 'NEW',
        monthText: 'OFFER',
        icon: 'health_and_safety',
        color: 'text-primary',
        bgColor: 'bg-primary/10',
        actionText: 'View',
    },
];

export default function Notifications() {
    return (
        <div className="flex flex-col h-[100dvh] bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
                <div className="flex items-center justify-between px-4 h-14">
                    <Link
                        href="/dashboard"
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-base font-semibold text-text-primary tracking-wide">Notifications</h1>
                    <div className="w-10" />
                </div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar px-4 pt-6 pb-28">
                {/* Header Title */}
                <div className="flex items-center justify-between mb-6 px-1">
                    <h2 className="text-2xl font-bold text-text-primary tracking-tight">Recent Alerts</h2>
                    <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors active:scale-95">Mark all read</button>
                </div>

                {/* Notifications List */}
                <div className="space-y-4">
                    {notificationsList.map((notif) => (
                        <div key={notif.id} className="bg-surface rounded-3xl border border-border p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group cursor-pointer active:scale-[0.98]">

                            {/* Date / Icon Box */}
                            <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-border transition-colors ${notif.bgColor}`}>
                                {notif.dateText === 'NEW' ? (
                                    <>
                                        <span className={`material-symbols-outlined ${notif.color} mb-0.5`} style={{ fontSize: '24px' }}>{notif.icon}</span>
                                        <span className={`text-[9px] uppercase font-bold tracking-wider ${notif.color}`}>{notif.monthText}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className={`text-[10px] uppercase font-bold tracking-wider ${notif.color}`}>{notif.monthText}</span>
                                        <span className={`font-black text-xl leading-none mt-0.5 ${notif.color}`}>{notif.dateText}</span>
                                    </>
                                )}
                            </div>

                            {/* Details */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-text-primary font-bold text-base truncate pr-2">{notif.title}</h3>
                                <div className="flex items-center gap-1.5 mt-1.5 opacity-80">
                                    <p className="text-text-secondary text-xs font-medium leading-snug line-clamp-2">{notif.description}</p>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="flex flex-col items-end shrink-0">
                                <button className={`mt-1 px-4 py-2 ${notif.bgColor} rounded-xl border border-transparent text-xs font-bold transition-all active:scale-95 ${notif.color}`}>
                                    {notif.actionText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
