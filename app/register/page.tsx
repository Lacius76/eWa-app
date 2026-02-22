'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [agreePrivacy, setAgreePrivacy] = useState(false);

    const handleFullNameFocus = () => {
        if (!fullName) {
            setFullName('Laszlo Földvary');
        }
    };

    const handleEmailFocus = () => {
        if (!email) {
            setEmail('laszlo@example.com');
        }
    };

    const handlePasswordFocus = () => {
        if (!password) {
            setPassword('demo123456');
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // For demo, navigate to onboarding
        router.push('/onboarding');
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-dark px-6">
            {/* Wave Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" fill="none">
                    <path
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        fill="url(#wave-gradient)"
                        fillOpacity="0.15"
                    />
                    <defs>
                        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#06f9f9" />
                            <stop offset="100%" stopColor="#06f9f9" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Back Button */}
            <Link
                href="/login"
                className="absolute left-6 top-12 flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark/50 backdrop-blur-sm ring-1 ring-white/10 transition-colors hover:bg-surface-dark"
            >
                <span className="material-symbols-outlined text-white">arrow_back</span>
            </Link>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-md space-y-8">
                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-[0_0_30px_rgba(6,249,249,0.2)]">
                        <span className="material-symbols-outlined text-primary filled" style={{ fontSize: '72px' }}>account_circle</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
                    <p className="mt-2 text-sm text-gray-400">Join eWa and manage everything in one place</p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Full Name Input */}
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <span className="material-symbols-outlined text-xl text-gray-500">person</span>
                            </div>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                onFocus={handleFullNameFocus}
                                onClick={handleFullNameFocus}
                                placeholder="Enter your full name"
                                className="w-full rounded-xl border border-white/10 bg-surface-dark py-3.5 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <span className="material-symbols-outlined text-xl text-gray-500">mail</span>
                            </div>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={handleEmailFocus}
                                onClick={handleEmailFocus}
                                placeholder="your.email@example.com"
                                className="w-full rounded-xl border border-white/10 bg-surface-dark py-3.5 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                <span className="material-symbols-outlined text-xl text-gray-500">lock</span>
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={handlePasswordFocus}
                                onClick={handlePasswordFocus}
                                placeholder="Create a strong password"
                                className="w-full rounded-xl border border-white/10 bg-surface-dark py-3.5 pl-12 pr-12 text-white placeholder-gray-500 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Terms and Privacy Checkboxes */}
                    <div className="space-y-3 rounded-xl bg-surface-dark/50 p-4 ring-1 ring-white/5">
                        <label className="flex cursor-pointer items-start gap-3">
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="mt-0.5 h-5 w-5 cursor-pointer rounded border-gray-600 bg-surface-dark text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0"
                                required
                            />
                            <span className="text-sm text-gray-300">
                                I agree to the{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Terms and Conditions
                                </a>
                            </span>
                        </label>
                        <label className="flex cursor-pointer items-start gap-3">
                            <input
                                type="checkbox"
                                checked={agreePrivacy}
                                onChange={(e) => setAgreePrivacy(e.target.checked)}
                                className="mt-0.5 h-5 w-5 cursor-pointer rounded border-gray-600 bg-surface-dark text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0"
                                required
                            />
                            <span className="text-sm text-gray-300">
                                I agree to the{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Privacy Policy
                                </a>
                            </span>
                        </label>
                    </div>

                    {/* Create Account Button */}
                    <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-xl bg-primary py-3.5 font-semibold text-background-dark shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98]"
                    >
                        <span className="relative z-10">Create Account</span>
                        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-background-dark px-4 text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    {/* Google Sign Up */}
                    <button
                        type="button"
                        className="w-full flex justify-center items-center gap-3 py-3.5 px-4 border border-slate-700 rounded-lg shadow-sm bg-white text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors duration-200 font-medium text-sm"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Sign up with Google
                    </button>
                </form>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="font-semibold text-primary hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
