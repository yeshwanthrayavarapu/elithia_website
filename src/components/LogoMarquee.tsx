
import React from 'react';

const LOGOS = [
    "Opal Health", "Regis Aged Care", "Estia Health", "Bolton Clarke", "Japara",
    "BaptistCare", "Southern Cross", "BlueCross", "Uniting AgeWell", "Mercy Health"
];

export default function LogoMarquee() {
    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                {LOGOS.map((logo, index) => (
                    <li key={index} className="text-2xl font-serif font-bold text-mobile-navy-900/40 whitespace-nowrap">
                        {logo}
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
                {LOGOS.map((logo, index) => (
                    <li key={`duplicate-${index}`} className="text-2xl font-serif font-bold text-mobile-navy-900/40 whitespace-nowrap">
                        {logo}
                    </li>
                ))}
            </ul>
        </div>
    );
}
