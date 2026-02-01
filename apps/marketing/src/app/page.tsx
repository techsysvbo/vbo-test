import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Cloud Solutions */}
      <section className="variq-section bg-light">
        <div className="variq-container">
          <div className="max-w-4xl">
            <h1 className="variq-h1 mb-6">
              Cloud Solutions.
            </h1>
            <h2 className="variq-h2 mb-2">
              IT Modernization.
            </h2>
            <Link href="/services" className="variq-link">
              Cloud Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section className="variq-section bg-white">
        <div className="variq-container">
          <div className="max-w-4xl">
            <h1 className="variq-h1 mb-6">
              Building Cybersecurity.
            </h1>
            <h2 className="variq-h2 mb-2">
              Increasing Defensibility.
            </h2>
            <Link href="/services" className="variq-link">
              Cyber Security →
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="variq-section bg-light">
        <div className="variq-container">
          <div className="max-w-4xl">
            <h1 className="variq-h1 mb-6">
              Modernizing Infrastructure.
            </h1>
            <h2 className="variq-h2 mb-2">
              Empowering End Users.
            </h2>
            <Link href="/services" className="variq-link">
              Software Development →
            </Link>
          </div>
        </div>
      </section>

      {/* Excellence */}
      <section className="variq-section bg-white">
        <div className="variq-container">
          <div className="max-w-4xl">
            <h1 className="variq-h1 mb-6">
              Technological Excellence.
            </h1>
            <h2 className="variq-h2 mb-2">
              World-Class Solutions.
            </h2>
            <Link href="/about" className="variq-link">
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
