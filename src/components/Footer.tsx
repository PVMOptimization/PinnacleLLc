import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="font-bold text-lg">Pinnacle Electric, LLC</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Licensed journeyman electrician providing reliable electrical services throughout Fort Worth, TX.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Residential Electrical</li>
              <li>Commercial Electrical</li>
              <li>Panel Upgrades</li>
              <li>Troubleshooting</li>
              <li>New Construction</li>
              <li>Code Compliance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Business Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Fort Worth, TX</li>
              <li>Licensed & Insured</li>
              <li>Owner-Operated</li>
              <li>Background Checked</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pinnacle Electric, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
