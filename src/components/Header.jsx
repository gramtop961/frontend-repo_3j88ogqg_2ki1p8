import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Docs', href: '#' },
    { label: 'GitHub', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg tracking-tight">Flames.Blue</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
