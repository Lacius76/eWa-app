import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: string;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    icon,
    iconPosition = 'right',
    loading = false,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles =
        'flex items-center justify-center gap-2 font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
        primary:
            'bg-primary hover:bg-primary-dark text-background-dark py-4 rounded-xl shadow-neon',
        secondary: 'bg-surface-highlight hover:bg-surface-dark text-white py-3 rounded-xl',
        ghost: 'text-primary hover:text-primary-dark py-2',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    <span>Processing...</span>
                </>
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <span className="material-symbols-outlined">{icon}</span>
                    )}
                    <span>{children}</span>
                    {icon && iconPosition === 'right' && (
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            {icon}
                        </span>
                    )}
                </>
            )}
        </button>
    );
}
