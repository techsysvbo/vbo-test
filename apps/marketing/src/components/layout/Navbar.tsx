"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="variq-container">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="text-xl font-bold text-black">
                        GovTechCapture
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        <Link href="/services" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                            Services
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-black hover:opacity-60 transition-opacity">
                            Contact
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="variq-container py-4 space-y-4">
                        <Link href="/services" className="block text-base font-medium text-black">
                            Services
                        </Link>
                        <Link href="/about" className="block text-base font-medium text-black">
                            About
                        </Link>
                        <Link href="/contact" className="block text-base font-medium text-black">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
