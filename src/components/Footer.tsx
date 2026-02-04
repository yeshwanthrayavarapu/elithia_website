import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { cn } from '@/lib/design-system-utils';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-sm text-slate-500">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                <div className="col-span-2">
                    <Link href="/" className="inline-block mb-6 group">
                        <Logo className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
                    </Link>
                    <p className="max-w-sm">The infrastructure for the future of new Australian Electronic Health records.</p>
                    <div className="flex gap-4 mt-6">
                        <span className="size-8 bg-gray-100 rounded flex items-center justify-center text-slate-400 cursor-pointer hover:bg-gray-200"><span className="material-symbols-outlined text-sm">link</span></span>
                        <span className="size-8 bg-gray-100 rounded flex items-center justify-center text-slate-400 cursor-pointer hover:bg-gray-200"><span className="material-symbols-outlined text-sm">alternate_email</span></span>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-mobile-navy-900 mb-4 uppercase text-xs tracking-wider">Platform</h4>
                    <ul className="space-y-2">
                        <li><Link href="/compliance" className="hover:text-mobile-teal-600">Compliance</Link></li>
                        <li><Link href="/mobile" className="hover:text-mobile-teal-600">Mobile Operations</Link></li>
                        <li><Link href="/trust" className="hover:text-mobile-teal-600">Trust & Safety</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-mobile-navy-900 mb-4 uppercase text-xs tracking-wider">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-mobile-teal-600">About Us</a></li>
                        <li><a href="#" className="hover:text-mobile-teal-600">Careers</a></li>
                        <li><a href="#" className="hover:text-mobile-teal-600">Contact</a></li>
                        <li><a href="#" className="hover:text-mobile-teal-600">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-mobile-navy-900 mb-4 uppercase text-xs tracking-wider">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-mobile-teal-600">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-mobile-teal-600">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-mobile-teal-600">Security</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto px-6 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                <p>© 2024 Elithia Pty Ltd. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-mobile-navy-900">Privacy Policy</a>
                    <a href="#" className="hover:text-mobile-navy-900">Terms of Service</a>
                    <a href="#" className="hover:text-mobile-navy-900">Status Check</a>
                </div>
            </div>
        </footer>
    );
}
