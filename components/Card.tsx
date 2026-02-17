import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    withGlow?: boolean;
}

export default function Card({ children, className = '', withGlow = false }: CardProps) {
    return (
        <div
            className={`bg-surface-dark rounded-2xl p-5 shadow-lg border border-white/5 relative overflow-hidden group ${className}`}
        >
            {/* Decorative Glow */}
            {withGlow && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/30 transition-all duration-500" />
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
