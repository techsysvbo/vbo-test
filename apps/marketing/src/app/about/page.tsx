import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-1">
                <div className="particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <div className="variq-container">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                            About GovTechCapture
                        </h1>
                        <p className="text-2xl text-white/90">
                            Empowering government contractors with world-class IT services and capture management solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="variq-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            We deliver mission-critical IT services and sophisticated capture management platforms
                            built specifically for government contractors. Our goal is to help you find, track, and
                            win high-value federal contracts with precision and confidence.
                        </p>

                        <h2 className="text-4xl font-bold mb-8 mt-16">Why Choose Us</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our team brings deep expertise in DevSecOps, cloud modernization, cybersecurity,
                                    and AI/ML solutions tailored for government requirements.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Compliance First</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We understand FedRAMP, CMMC, NIST 800-53, and other federal compliance frameworks
                                    inside and out.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our clients achieve an average 42% win rate on federal opportunities, significantly
                                    above industry standards.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">End-to-End Support</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    From opportunity identification to proposal submission and contract execution,
                                    we're with you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="variq-container text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Capture Process?</h2>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
