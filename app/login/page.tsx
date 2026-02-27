'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailFocus = () => {
        if (!email) {
            setEmail('laszlo@example.com');
        }
    };

    const handlePasswordFocus = () => {
        if (!password) {
            setPassword('demo123');
        }
    };

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        // For demo, auto-navigate to onboarding
        router.push('/dashboard');
    };

    return (
        <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-background">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
                <svg width="100%" height="100%" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                    <path d="M-100 600C200 550 400 700 800 500C1200 300 1400 400 1600 500" stroke="#06f9f9" strokeOpacity="0.1" strokeWidth="100" />
                    <path d="M-100 800C100 750 300 900 700 700C1100 500 1300 600 1500 700" stroke="#06f9f9" strokeOpacity="0.05" strokeWidth="80" />
                </svg>
            </div>

            {/* Main Content Container */}
            <main className="flex-1 flex flex-col w-full max-w-md mx-auto px-6 relative z-10 pt-[100px] pb-8 justify-start sm:justify-center overflow-y-auto no-scrollbar overscroll-none">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center pb-8">
                    {/* Logo Icon */}
                    <div className="w-[120px] h-[120px] rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_20px_rgba(6,249,249,0.1)]">
                        <img src="/ewa-icon.svg" alt="eWa Logo" className="w-[80px] h-[80px]" />
                    </div>
                    <h1 className="text-primary/80 tracking-tight text-lg font-semibold leading-tight text-center">Electronic Wallet</h1>
                    <p className="text-text-secondary text-sm font-medium mt-2">Welcome back to the future of finance</p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSignIn} className="w-full space-y-5">
                    {/* Email Input */}
                    <div className="relative group">
                        <label className="block text-sm font-medium text-text-primary mb-1.5 ml-1" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors duration-300">
                                    mail
                                </span>
                            </div>
                            <input
                                className="block w-full rounded-xl border-border bg-surface/50 text-text-primary placeholder-text-secondary focus:border-primary focus:ring-1 focus:ring-primary pl-11 pr-4 py-4 sm:text-sm transition-all duration-200 ease-in-out border outline-none"
                                id="email"
                                placeholder="you@example.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={handleEmailFocus}
                                onClick={handleEmailFocus}
                                autoComplete="email"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="relative group">
                        <div className="flex justify-between items-center mb-1.5 ml-1">
                            <label className="block text-sm font-medium text-text-primary" htmlFor="password">
                                Password
                            </label>
                            <Link className="text-xs text-primary hover:text-primary-dark transition-colors font-medium" href="#">
                                Forgot?
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors duration-300">
                                    lock
                                </span>
                            </div>
                            <input
                                className="block w-full rounded-xl border-border bg-surface/50 text-text-primary placeholder-text-secondary focus:border-primary focus:ring-1 focus:ring-primary pl-11 pr-12 py-4 sm:text-sm transition-all duration-200 ease-in-out border outline-none"
                                id="password"
                                placeholder="••••••••"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={handlePasswordFocus}
                                onClick={handlePasswordFocus}
                                autoComplete="current-password"
                            />
                            <button
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-text-primary focus:outline-none"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <span className="material-symbols-outlined">
                                    {showPassword ? 'visibility' : 'visibility_off'}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button
                        className="w-full h-14 flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-background bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 mt-4"
                        type="submit"
                    >
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-background text-text-secondary font-medium">Or continue with</span>
                        </div>
                    </div>

                    {/* Google Button */}
                    <button
                        className="w-full h-[50px] flex justify-center items-center gap-3 py-3.5 px-4 border border-border rounded-xl shadow-sm bg-surface text-text-primary hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-200 font-semibold text-sm"
                        type="button"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Sign in with Google
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-auto pt-8 pb-4 text-center">
                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-text-secondary">
                        Don't have an account?{' '}
                        <Link href="/register" className="font-semibold text-primary hover:underline">
                            Sign Up
                        </Link>
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="h-1 w-1/3 bg-slate-800 dark:bg-slate-800 bg-black/20 rounded-full"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
