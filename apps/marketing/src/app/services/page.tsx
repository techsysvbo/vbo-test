import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { Code, Shield, Cloud, Cpu, Database, Zap } from 'lucide-react';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24">
                <div className="variq-container">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl lg:text-7xl font-black mb-8 tracking-tight">
                            Our Services
                        </h1>
                        <p className="text-2xl text-gray-600 font-light leading-relaxed">
                            Comprehensive IT solutions for government contractors and federal agencies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-32">
                <div className="variq-container">
                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
                        <ServiceCard
                            icon={<Code className="w-8 h-8" />}
                            title="DevSecOps"
                            description="Continuous compliance and automated security gates integrated directly into your CI/CD pipelines."
                            features={[
                                "Agile Development",
                                "CI/CD Pipeline Security",
                                "Automated Compliance",
                                "Container Security"
                            ]}
                        />

                        <ServiceCard
                            icon={<Cloud className="w-8 h-8" />}
                            title="Cloud Modernization"
                            description="Secure cloud landing zones and mission-oriented migrations for DoD and civilian agencies."
                            features={[
                                "FedRAMP Authorization",
                                "Cloud Migration",
                                "Multi-Cloud Strategy",
                                "Cloud Security"
                            ]}
                        />

                        <ServiceCard
                            icon={<Shield className="w-8 h-8" />}
                            title="Cybersecurity"
                            description="Zero-trust architecture, SIEM/SOAR implementation, and continuous ATO support."
                            features={[
                                "CMMC Level 3 Prep",
                                "NIST 800-53 Controls",
                                "Zero-Trust Architecture",
                                "Threat Intelligence"
                            ]}
                        />

                        <ServiceCard
                            icon={<Cpu className="w-8 h-8" />}
                            title="AI & Automation"
                            description="Purpose-built AI solutions for government workflows, from RAG to predictive analytics."
                            features={[
                                "RAG Systems",
                                "Predictive Analytics",
                                "Process Automation",
                                "ML Operations"
                            ]}
                        />

                        <ServiceCard
                            icon={<Database className="w-8 h-8" />}
                            title="Data Strategy"
                            description="Enterprise data management and analytics that turn complex datasets into actionable intelligence."
                            features={[
                                "Data Governance",
                                "Analytics Platforms",
                                "Data Lake Architecture",
                                "Business Intelligence"
                            ]}
                        />

                        <ServiceCard
                            icon={<Zap className="w-8 h-8" />}
                            title="Platform Engineering"
                            description="Standardized internal developer platforms that reduce friction and accelerate delivery."
                            features={[
                                "GitOps Workflows",
                                "Infrastructure as Code",
                                "Developer Portals",
                                "Platform Automation"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-black text-white">
                <div className="variq-container text-center">
                    <h2 className="text-5xl font-black mb-6 tracking-tight">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Let's discuss how our services can help you win more contracts and deliver mission-critical solutions.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black rounded-none font-bold hover:bg-gray-100 transition-colors text-lg">
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}

function ServiceCard({ icon, title, description, features }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
}) {
    return (
        <div className="group">
            <div className="mb-6 text-black">
                {icon}
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">{title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">{description}</p>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
