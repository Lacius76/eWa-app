import Link from 'next/link';

export default function Success() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
            {/* Success Animation Container */}
            <div className="relative mb-8">
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />

                {/* Check Icon */}
                <div className="relative w-32 h-32 rounded-full bg-primary flex items-center justify-center shadow-neon">
                    <span className="material-symbols-outlined text-background-dark" style={{ fontSize: '64px', fontWeight: 'bold' }}>
                        check
                    </span>
                </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-white text-center mb-3">Payment Successful!</h1>
            <p className="text-slate-400 text-center mb-8 max-w-sm">
                Your e-vignette has been purchased successfully. You can view it in your dashboard.
            </p>

            {/* Details Card */}
            <div className="w-full max-w-sm bg-surface-dark rounded-2xl p-6 border border-white/5 mb-8 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-sm text-slate-400">Transaction ID</span>
                    <span className="text-sm font-mono text-white">#EV-2024-0847</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-sm text-slate-400">Service</span>
                    <span className="text-sm font-medium text-white">E-Vignette (30 Days)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-sm text-slate-400">Vehicle</span>
                    <span className="text-sm font-medium text-white">ABC-123</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Amount Paid</span>
                    <span className="text-xl font-bold text-primary">€35.00</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full max-w-sm space-y-3">
                <Link
                    href="/"
                    className="w-full bg-primary hover:bg-primary-dark text-background-dark font-bold py-4 rounded-xl shadow-neon transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                    <span>Back to Home</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </Link>
                <button className="w-full bg-surface-highlight hover:bg-surface-dark text-white font-medium py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">download</span>
                    <span>Download Receipt</span>
                </button>
            </div>
        </div>
    );
}
