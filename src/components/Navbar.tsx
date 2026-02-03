
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="size-6 bg-mobile-teal-500 rounded-lg"></div>
                    <span className="font-serif font-bold text-2xl tracking-tight text-mobile-navy-900">
                        Elithia
                    </span>
                </Link>
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
                    <Link href="/" className="hover:text-mobile-navy-900 transition-colors">Platform</Link>
                    <Link href="/compliance" className="hover:text-mobile-navy-900 transition-colors">Compliance</Link>
                    <Link href="/trust" className="hover:text-mobile-navy-900 transition-colors">Trust</Link>
                    <Link href="/mobile" className="hover:text-mobile-navy-900 transition-colors">Mobile Operations</Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-mobile-navy-900 hover:text-mobile-teal-600 transition-colors">Log In</button>
                    <button className="px-5 py-2.5 rounded bg-mobile-navy-900 text-white text-sm font-bold shadow-lg hover:bg-mobile-navy-800 transition-colors">
                        Request Demo
                    </button>
                </div>
            </div>
        </nav>
    );
}
