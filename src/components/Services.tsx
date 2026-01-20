import { Home, Wrench, Search, Building2, Lightbulb, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential & Commercial Electrical Work',
    description: 'Complete electrical services for homes and businesses, from minor repairs to major installations.',
  },
  {
    icon: Wrench,
    title: 'Panel Upgrades & Circuit Installation',
    description: 'Modernize your electrical system with panel upgrades and new circuit installations to meet your power needs.',
  },
  {
    icon: Search,
    title: 'Troubleshooting & Diagnostics',
    description: 'Expert problem-solving to identify and resolve electrical issues quickly and efficiently.',
  },
  {
    icon: Building2,
    title: 'New Construction & Remodel Wiring',
    description: 'Professional wiring for new builds and renovation projects, done right the first time.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting, Outlets & Smart Home Devices',
    description: 'Installation and setup of lighting fixtures, outlets, switches, and modern smart home technology.',
  },
  {
    icon: ShieldCheck,
    title: 'Code Compliance & Safety Inspections',
    description: 'Thorough inspections and corrections to ensure your electrical system meets all safety codes.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive electrical solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
