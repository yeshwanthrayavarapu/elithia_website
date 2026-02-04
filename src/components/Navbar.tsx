"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from './Button';
import Logo from '@/components/ui/logo';
import { cn } from '@/lib/design-system-utils';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        return pathname === path;
    };

    const navLinks = [
        { href: '/', label: 'Platform' },
        { href: '/compliance', label: 'Compliance' },
        { href: '/trust', label: 'Trust' },
        { href: '/mobile', label: 'Mobile Operations' },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed w-full z-50 top-0 left-0 transition-all duration-300",
                    scrolled
                        ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200"
                        : "bg-white/90 backdrop-blur-md border-b border-gray-100"
                )}
            >
                <div className="max-w-[1400px] mx-auto px-6 h-20 lg:h-24 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group py-2 z-50">
                        <Logo className="h-10 lg:h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg transition-all duration-200",
                                    isActive(link.href)
                                        ? "text-mobile-navy-900 font-bold bg-mobile-teal-50 shadow-sm"
                                        : "text-slate-600 hover:text-mobile-navy-900 hover:bg-slate-50"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button variant="ghost" size="sm">Log In</Button>
                        <Button variant="vibrant" size="sm">Request Demo</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden z-50 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={cn(
                                    "block h-0.5 w-full bg-mobile-navy-900 transition-all duration-300",
                                    mobileMenuOpen && "rotate-45 translate-y-2"
                                )}
                            />
                            <span
                                className={cn(
                                    "block h-0.5 w-full bg-mobile-navy-900 transition-all duration-300",
                                    mobileMenuOpen && "opacity-0"
                                )}
                            />
                            <span
                                className={cn(
                                    "block h-0.5 w-full bg-mobile-navy-900 transition-all duration-300",
                                    mobileMenuOpen && "-rotate-45 -translate-y-2"
                                )}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-mobile-navy-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
                    mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Panel */}
            <div
                className={cn(
                    "fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden",
                    "transform transition-transform duration-300 ease-out shadow-2xl",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="p-6 space-y-6">
                    {/* Mobile Navigation Links */}
                    <nav className="space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "block px-4 py-3 rounded-xl font-medium transition-all duration-200",
                                    isActive(link.href)
                                        ? "bg-mobile-teal-50 text-mobile-navy-900 font-bold shadow-sm"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-mobile-navy-900"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Actions */}
                    <div className="pt-6 border-t border-gray-100 space-y-3">
                        <Button variant="outline" fullWidth>Log In</Button>
                        <Button variant="vibrant" fullWidth>Request Demo</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
