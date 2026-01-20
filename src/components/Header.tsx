import { Phone, Zap } from 'lucide-react';

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Pinnacle Electric, LLC</h1>
              <p className="text-xs text-gray-600">Licensed Journeyman Electrician</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call Now</span>
            </a>
            <button
              onClick={scrollToContact}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
