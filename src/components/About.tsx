import { Award, Briefcase, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Pinnacle Electric
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade in the electrical trade, Pinnacle Electric provides dependable
              residential and commercial electrical services throughout Fort Worth, TX. As a licensed
              journeyman electrician, I bring extensive hands-on experience in everything from new
              construction and remodels to panel upgrades and diagnostic troubleshooting.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My commitment is simple: show up on time, respect your property, communicate clearly,
              and deliver clean, efficient work that stands the test of time. Every job is done with
              a safety-first mindset and strict adherence to electrical codes.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Licensed</div>
                <div className="text-sm text-gray-600">Journeyman Electrician</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Briefcase className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="font-bold text-gray-900">10+ Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Shield className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="font-bold text-gray-900">Insured</div>
                <div className="text-sm text-gray-600">& Bonded</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Experience Matters</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="leading-relaxed">
                    Quickly diagnose complex electrical issues that others might miss
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="leading-relaxed">
                    Know the latest NEC codes and local requirements inside and out
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="leading-relaxed">
                    Complete installations efficiently without cutting corners
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="leading-relaxed">
                    Provide honest recommendations that save you money long-term
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
