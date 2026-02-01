import Navbar from '@/components/layout/Navbar';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-2">
                <div className="particles">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>
                <div className="variq-container">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-2xl text-white/90">
                            Let's discuss how we can help you win more federal contracts.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="variq-container">
                    <div className="max-w-2xl mx-auto">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Company</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="Your company"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="Tell us about your needs..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
