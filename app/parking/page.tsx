'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Parking() {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden">
            {/* Map Background Layer - Real Google Maps */}
            <div className="absolute inset-0 z-0 bg-gray-900">
                <div className="relative w-full h-full overflow-hidden">
                    {/* Google Maps Iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42646.35658126753!2d16.35485625820312!3d48.20817079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sVienna%2C%20Austria!5e0!3m2!1sen!2sat!4v1708198765432!5m2!1sen!2sat"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale-[30%] brightness-75 contrast-110"
                    />

                    {/* Dark Overlay Gradient for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-transparent to-background-dark/70 pointer-events-none" />

                    {/* Floating Zone Labels */}
                    <div className="absolute top-[35%] left-[20%] flex flex-col items-center gap-1 opacity-80">
                        <div className="px-3 py-1 bg-surface-dark border border-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white/80 shadow-lg">
                            Zone B
                        </div>
                    </div>
                    <div className="absolute top-[25%] right-[25%] flex flex-col items-center gap-1 opacity-80">
                        <div className="px-3 py-1 bg-surface-dark border border-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white/80 shadow-lg">
                            Zone C
                        </div>
                    </div>

                    {/* Active Zone A - Highlighted */}
                    <div className="absolute top-[45%] left-[55%] flex flex-col items-center gap-1 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="px-4 py-1.5 bg-primary text-background-dark rounded-full text-sm font-bold shadow-neon flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">local_parking</span>
                            Zone A
                        </div>
                        <div className="w-0.5 h-4 bg-primary" />
                        <div className="w-3 h-3 bg-primary rounded-full relative">
                            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Navigation Bar (Floating) */}
            <div className="absolute top-0 left-0 right-0 z-10 pt-14 px-4 flex justify-between items-start pointer-events-none">
                <Link
                    href="/"
                    className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-surface-dark/80 backdrop-blur-md border border-white/10 text-white hover:bg-surface-dark transition-colors shadow-lg"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <div className="flex gap-3 pointer-events-auto">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-dark/80 backdrop-blur-md border border-white/10 text-white hover:bg-surface-dark transition-colors shadow-lg">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-dark/80 backdrop-blur-md border border-white/10 text-white hover:bg-surface-dark transition-colors shadow-lg">
                        <span className="material-symbols-outlined">layers</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area - Bottom Sheet Modal */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end pb-20 transition-transform duration-300 ease-out ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-200px)]'
                    }`}
            >
                {/* Location Button (Floating above sheet) */}
                <div className={`flex justify-end px-4 mb-4 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-background-dark shadow-neon hover:bg-primary-dark transition-all active:scale-95">
                        <span className="material-symbols-outlined">my_location</span>
                    </button>
                </div>

                {/* Bottom Sheet Container */}
                <div className="w-full bg-surface-dark rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/5 pb-8 relative overflow-hidden">
                    {/* Drag Handle - Clickable to toggle */}
                    <div
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full flex justify-center pt-3 pb-1 cursor-pointer active:bg-white/5 transition-colors"
                    >
                        <div className="w-12 h-1.5 rounded-full bg-white/20" />
                    </div>

                    <div className={`px-6 pt-4 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-60'}`}>
                        {/* Header Section */}
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/30">
                                        Open Now
                                    </span>
                                    <span className="text-xs text-white/50 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">directions_car</span> 50 spots
                                    </span>
                                </div>
                                <h1 className="text-2xl font-bold text-white tracking-tight">Zone A - Downtown</h1>
                                <p className="text-primary/80 text-sm font-medium mt-0.5">123 Main St, Financial District</p>
                            </div>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-white/10 my-4" />

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-background-dark/50 rounded-xl p-3 border border-white/5 flex flex-col justify-center">
                                <span className="text-xs text-white/50 mb-1">Rate</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-white">$2.50</span>
                                    <span className="text-sm text-white/50">/ hr</span>
                                </div>
                                <span className="text-[10px] text-primary mt-1">Daily max $20.00</span>
                            </div>
                            <div className="bg-background-dark/50 rounded-xl p-3 border border-white/5 flex flex-col justify-center">
                                <span className="text-xs text-white/50 mb-1">Distance</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-white">0.4</span>
                                    <span className="text-sm text-white/50">mi</span>
                                </div>
                                <span className="text-[10px] text-white/40 mt-1">~3 min walk</span>
                            </div>
                        </div>

                        {/* Amenities/Features Row */}
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mb-4">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/80 whitespace-nowrap">
                                <span className="material-symbols-outlined text-[16px] text-primary">roofing</span>
                                Covered
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/80 whitespace-nowrap">
                                <span className="material-symbols-outlined text-[16px] text-primary">videocam</span>
                                CCTV
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/80 whitespace-nowrap">
                                <span className="material-symbols-outlined text-[16px] text-primary">ev_station</span>
                                EV Charging
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/80 whitespace-nowrap">
                                <span className="material-symbols-outlined text-[16px] text-primary">accessible</span>
                                Accessible
                            </div>
                        </div>

                        {/* Payment Method Selector */}
                        <div className="flex items-center justify-between py-3 px-1 mb-4 cursor-pointer active:opacity-70 group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-5 bg-white rounded flex items-center justify-center">
                                    <div className="text-[8px] font-bold text-blue-800 tracking-tighter">VISA</div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                                        Visa ending in 4242
                                    </span>
                                    <span className="text-[10px] text-white/40">Default payment method</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-white/40 group-hover:text-white transition-colors">
                                chevron_right
                            </span>
                        </div>

                        {/* Main CTA */}
                        <button className="w-full h-14 bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all rounded-xl flex items-center justify-center gap-2 shadow-neon group relative overflow-hidden">
                            <span className="material-symbols-outlined text-background-dark font-bold group-hover:rotate-12 transition-transform">
                                local_parking
                            </span>
                            <span className="text-background-dark text-lg font-bold tracking-tight">Start Parking</span>
                        </button>
                        <div className="h-6 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
