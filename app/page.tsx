import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      {/* Header Section */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 pt-4 pb-4 bg-background-dark/90 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-400">Welcome back</span>
          <h1 className="text-2xl font-bold tracking-tight text-white">Hello, Laszlo</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark shadow-sm ring-1 ring-white/10 transition-colors hover:bg-surface-highlight">
            <span className="material-symbols-outlined text-gray-300" style={{ fontSize: '24px' }}>
              search
            </span>
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark shadow-sm ring-1 ring-white/10 transition-colors hover:bg-surface-highlight">
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-surface-dark" />
            <span className="material-symbols-outlined text-gray-300" style={{ fontSize: '24px' }}>
              notifications
            </span>
          </button>
          <Link href="/profile" className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-surface-dark shadow-sm hover:ring-primary/30 transition-all cursor-pointer">
            <img
              src="/img/laszlo.jpg"
              alt="Laszlo Foldvary"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24">
        {/* Balance Card */}
        <div className="relative mt-0 overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-primary-dark p-6 shadow-xl shadow-primary/20">
          {/* Abstract Background Shapes */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-black/10 blur-2xl" />
          <div className="relative z-10 flex flex-col justify-between h-full gap-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-100 text-sm font-medium mb-1 opacity-90">Total Balance</p>
                <h2 className="text-4xl font-bold text-white tracking-tight">€12,450.00</h2>
                <div className="mt-2 flex items-center gap-1 text-emerald-300 bg-emerald-900/30 w-fit px-2 py-0.5 rounded-full text-xs font-semibold">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                    trending_up
                  </span>
                  <span>+2.5%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/20 backdrop-blur-sm py-3 text-sm font-semibold text-white transition hover:bg-white/30 active:scale-[0.98]">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  add
                </span>
                Top Up
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm py-3 text-sm font-semibold text-white transition hover:bg-white/20 active:scale-[0.98]">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  send
                </span>
                Send
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white transition hover:bg-white/20 active:scale-[0.98]">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  more_horiz
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Section Header */}
        <div className="mt-8 flex items-center justify-between px-2">
          <h3 className="text-lg font-bold text-white">Services</h3>
          <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
            See All
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-4 grid grid-cols-2 gap-2 auto-rows-auto">
          {/* Primary Large Tile: Parking */}
          <Link
            href="/parking"
            className="col-span-2 relative overflow-hidden rounded-3xl bg-surface-dark p-5 shadow-sm ring-1 ring-white/10 group transition-transform active:scale-[0.98]"
          >
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />
            <div className="relative z-10 flex flex-row items-center justify-between h-full">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined filled" style={{ fontSize: '28px' }}>
                    local_parking
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">Smart Parking</h4>
                  <p className="text-xs text-gray-400 mt-1">Find spots nearby</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <p className="text-xs font-medium text-emerald-400">2h 15m remaining</p>
                  </div>
                </div>
              </div>
              <div className="h-28 w-28 rounded-2xl overflow-hidden shadow-inner border border-white/10 rotate-3 translate-x-2 bg-surface-highlight" />
            </div>
          </Link>

          {/* Tile: e-Vignette */}
          <Link
            href="/payment"
            className="col-span-1 relative overflow-hidden rounded-3xl bg-surface-dark p-5 shadow-sm ring-1 ring-white/10 flex flex-col justify-between group h-44 transition-transform active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  confirmation_number
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-600" style={{ fontSize: '20px' }}>
                arrow_outward
              </span>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">e-Vignette</h4>
              <p className="text-xs text-gray-400 mt-1 line-clamp-1">Valid until Dec 2024</p>
            </div>
          </Link>

          {/* Tile: Mobile Ticket */}
          <Link
            href="/tickets"
            className="col-span-1 relative overflow-hidden rounded-3xl bg-surface-dark p-5 shadow-sm ring-1 ring-white/10 flex flex-col justify-between group h-44 transition-transform active:scale-[0.98] cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  qr_code_2
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-600" style={{ fontSize: '20px' }}>
                add_circle
              </span>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Mobile Ticket</h4>
              <p className="text-xs text-gray-400 mt-1">Bus &amp; Train</p>
            </div>
          </Link>

          {/* Wide Tile: Insurance */}
          <Link
            href="/insurance"
            className="col-span-2 relative overflow-hidden rounded-3xl bg-surface-dark p-5 shadow-sm ring-1 ring-white/10 flex flex-row items-center justify-between group h-24 transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  health_and_safety
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-white">Insurance</h4>
                <p className="text-xs text-gray-400">Auto &amp; Home coverage</p>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400" style={{ fontSize: '20px' }}>
                chevron_right
              </span>
            </div>
          </Link>

          {/* Wide Tile: Wallet */}
          <Link
            href="/wallet"
            className="col-span-2 relative overflow-hidden rounded-3xl bg-surface-dark p-5 shadow-sm ring-1 ring-white/10 flex flex-row items-center justify-between group h-24 transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  account_balance_wallet
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-white">My Wallet</h4>
                <p className="text-xs text-gray-400">Cards &amp; Transactions</p>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400" style={{ fontSize: '20px' }}>
                chevron_right
              </span>
            </div>
          </Link>

          {/* Wide Tile: Tickets */}
          <Link
            href="/tickets"
            className="col-span-2 relative overflow-hidden rounded-3xl bg-surface-dark p-5 shadow-sm ring-1 ring-white/10 flex flex-row items-center justify-between group h-24 transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  local_activity
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-white">Tickets</h4>
                <p className="text-xs text-gray-400">Cinema, Concerts &amp; Theater</p>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400" style={{ fontSize: '20px' }}>
                chevron_right
              </span>
            </div>
          </Link>
        </div>
        <div className="h-10" />
      </main>
    </>
  );
}
