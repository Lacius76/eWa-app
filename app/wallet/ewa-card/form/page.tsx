'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function EwaCardForm() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect back to wallet after the demo flow is complete
        router.push('/wallet');
    };

    return (
        <div className="w-full min-h-screen flex flex-col relative bg-background">
            {/* Header */}
            <header className="pt-4 pb-4 px-6 flex flex-col items-center gap-4 z-10 sticky top-0 bg-background/95 backdrop-blur-md border-b border-border">
                <div className="w-full flex justify-between items-center relative">
                    <Link
                        href="/wallet/ewa-card"
                        className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 text-text-primary transition-colors z-10"
                    >
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <h1 className="text-xl font-semibold tracking-tight text-text-primary absolute w-full text-center left-0 pointer-events-none">Card Request</h1>
                    <div className="w-10 h-10 -mr-2"></div> {/* Spacer for centering */}
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">
                <div className="mb-6 max-w-sm mx-auto w-full">
                    <h2 className="text-xl font-bold text-text-primary mb-2">Your Details</h2>
                    <p className="text-text-secondary text-sm">Please provide your details to request an eWa prepaid card.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-sm mx-auto w-full">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-sm font-semibold text-text-primary ml-1">
                            Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="John Doe"
                            required
                            className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-text-primary ml-1">
                            Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="+43 600 1234567"
                            required
                            className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="dob" className="text-sm font-semibold text-text-primary ml-1">
                            Date of Birth <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="dob"
                            required
                            className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="address" className="text-sm font-semibold text-text-primary ml-1">
                            Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Street, City, Postal Code"
                            required
                            className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-text-primary ml-1">
                            E-mail <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                            required
                            className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                    </div>

                    <div className="mt-8 w-full">
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-accent text-white font-bold shadow-[0_4px_14px_0_rgba(110,0,255,0.39)] hover:bg-accent-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>Next</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
