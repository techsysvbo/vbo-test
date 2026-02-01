"use client";

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="variq-section bg-white">
            <div className="variq-container">
                <div className="max-w-4xl">
                    <h1 className="variq-h1 mb-6">
                        Harnessing Technology.
                    </h1>
                    <h2 className="variq-h2 mb-2">
                        Engineering Solutions.
                    </h2>
                    <Link href="/services" className="variq-link">
                        Our Services →
                    </Link>
                </div>
            </div>
        </section>
    );
}
