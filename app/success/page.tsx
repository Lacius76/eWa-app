import Link from 'next/link';

export default function Success() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
            {/* Success Animation Container */}
            <div className="relative mb-8">
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl" />

                {/* Check Icon */}
                <div className="relative w-32 h-32 rounded-full bg-accent flex items-center justify-center shadow-neon">
                    <span className="material-symbols-outlined text-background" style={{ fontSize: '64px', fontWeight: 'bold' }}>
                        check
                    </span>
                </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-text-primary text-center mb-3">Payment Successful!</h1>
            <p className="text-text-secondary text-center mb-8 max-w-sm">
                Your e-vignette has been purchased successfully. You can view it in your dashboard.
            </p>

            {/* Details Card */}
            <div className="w-full max-w-sm bg-surface rounded-2xl p-6 border border-border mb-8 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-sm text-text-secondary">Transaction ID</span>
                    <span className="text-sm font-mono text-text-primary">#EV-2024-0847</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-sm text-text-secondary">Service</span>
                    <span className="text-sm font-medium text-text-primary">E-Vignette (30 Days)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-sm text-text-secondary">Vehicle</span>
                    <span className="text-sm font-medium text-text-primary">ABC-123</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Amount Paid</span>
                    <span className="text-xl font-bold text-primary">€35.00</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full max-w-sm space-y-3">
                <Link
                    href="/dashboard"
                    className="w-full bg-accent hover:bg-accent-dark text-background font-bold py-4 rounded-xl shadow-neon transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                    <span>Back to Home</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </Link>
                <button className="w-full bg-surface-highlight hover:bg-border text-text-primary font-medium py-4 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">download</span>
                    <span>Download Receipt</span>
                </button>
            </div>
        </div>
    );
}
