'use client';

import { usePathname } from 'next/navigation';
import BottomNav from './BottomNav';

export default function BottomNavWrapper() {
    const pathname = usePathname();

    // Hide bottom nav on login and onboarding pages
    const hideNav = pathname === '/' || pathname === '/login' || pathname === '/onboarding' || pathname === '/register' || pathname === '/splash';

    if (hideNav) {
        return null;
    }

    return <BottomNav />;
}
