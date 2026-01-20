import { MapPin, Clock, CreditCard } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Area</h3>
            <p className="text-gray-600 mb-4">
              Proudly serving Fort Worth and surrounding areas. Local, reliable electrical service
              when you need it.
            </p>
            <div className="text-lg font-semibold text-amber-600">Fort Worth, TX</div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Monday:</span>
                <span className="font-semibold">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-sm italic text-gray-500">Additional hours available by appointment</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h3>
            <p className="text-gray-600 mb-4">
              Flexible payment options for your convenience:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Apple Pay</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Cash</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Zelle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
