
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-mobile-navy-900 font-bold bg-slate-50 px-3 py-1 rounded" : "text-slate-500 hover:text-mobile-navy-900 transition-colors px-3 py-1";
    };

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="size-6 bg-mobile-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="font-serif font-bold text-2xl tracking-tight text-mobile-navy-900 group-hover:text-mobile-teal-700 transition-colors">
                        Elithia
                    </span>
                </Link>
                <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
                    <Link href="/" className={isActive('/')}>Platform</Link>
                    <Link href="/compliance" className={isActive('/compliance')}>Compliance</Link>
                    <Link href="/trust" className={isActive('/trust')}>Trust</Link>
                    <Link href="/mobile" className={isActive('/mobile')}>Mobile Operations</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="!px-4">Log In</Button>
                    <Button>Request Demo</Button>
                </div>
            </div>
        </nav>
    );
}
