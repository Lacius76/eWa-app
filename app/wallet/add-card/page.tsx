'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddCard() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect back to wallet after "adding"
        router.push('/wallet');
    };

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
                    <h1 className="text-xl font-semibold tracking-tight text-text-primary absolute w-full text-center left-0 pointer-events-none">Add New Card</h1>
                    <div className="w-10 h-10 -mr-2"></div> {/* Spacer for centering */}
                </div>
            </header>

            <main className="flex-1 overflow-y-auto px-6 py-8 pb-32">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-sm mx-auto w-full">
                    {/* Bank card number* */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cardNumber" className="text-sm font-semibold text-text-primary ml-1">
                            Bank card number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="cardNumber"
                                placeholder="0000 0000 0000 0000"
                                required
                                className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-mono"
                            />
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">credit_card</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Date of expiracy* */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="expiry" className="text-sm font-semibold text-text-primary ml-1">
                                Date of expiracy <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="expiry"
                                placeholder="MM/YY"
                                required
                                className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-mono"
                            />
                        </div>

                        {/* CVC/CVV code */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cvc" className="text-sm font-semibold text-text-primary ml-1 flex items-center gap-1">
                                CVC/CVV code
                                <span className="material-symbols-outlined text-[14px] text-text-secondary cursor-help" title="3 or 4 digits on the back of your card">help</span>
                            </label>
                            <input
                                type="text"
                                id="cvc"
                                placeholder="123"
                                className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-mono"
                            />
                        </div>
                    </div>

                    {/* Name on card* */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nameOnCard" className="text-sm font-semibold text-text-primary ml-1">
                            Name on card <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="nameOnCard"
                            placeholder="John Doe"
                            required
                            className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                    </div>

                    {/* Card name* */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cardName" className="text-sm font-semibold text-text-primary ml-1 flex flex-col">
                            <span>Card name <span className="text-rose-500">*</span></span>
                        </label>
                        <input
                            type="text"
                            id="cardName"
                            placeholder="e.g. My Personal Visa"
                            required
                            className="w-full bg-surface border border-border rounded-xl px-4 py-4 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        />
                    </div>

                    {/* Bottom Action Area */}
                    <div className="mt-8 w-full">
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-surface border border-border hover:bg-surface/80 active:bg-surface/60 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span className="material-symbols-outlined text-accent group-hover:scale-110 transition-transform">save</span>
                            <span className="text-accent font-bold text-base">Saving your bank card</span>
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
