import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-block bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 font-semibold text-sm">Top Pro on Thumbtack</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert Electrical Services
            <span className="block text-amber-400">You Can Trust</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Licensed journeyman electrician with over 10 years of experience serving Fort Worth.
            From troubleshooting to complete installations, we deliver safe, code-compliant work that lasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Request a Quote
            </button>
            <a
              href="tel:+1234567890"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-700">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">10+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">19+</div>
              <div className="text-sm text-gray-400">Times Hired</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">6</div>
              <div className="text-sm text-gray-400">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
