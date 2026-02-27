'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/dashboard', icon: 'home', label: 'Home' },
  { href: '/wallet', icon: 'account_balance_wallet', label: 'Wallet' },
  { href: '/parking', icon: 'local_parking', label: 'Parking' },
  { href: '/profile', icon: 'person', label: 'Profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur-lg pb-safe">
      <div className="mx-auto flex h-20 max-w-md items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center justify-center gap-1 w-16"
            >
              <div
                className={`flex h-8 w-16 items-center justify-center rounded-full transition-colors ${isActive ? 'bg-primary/20' : 'group-hover:bg-black/5 dark:group-hover:bg-white/5'
                  }`}
              >
                <span
                  className={`material-symbols-outlined text-[24px] ${isActive ? 'text-primary filled' : 'text-text-secondary'
                    }`}
                >
                  {item.icon}
                </span>
              </div>
              <span
                className={`text-[11px] font-medium ${isActive
                  ? 'text-primary font-semibold'
                  : 'text-text-secondary group-hover:text-text-primary'
                  }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* iOS Home Indicator Spacing */}
      <div className="h-6 w-full" />
    </nav>
  );
}
