import { Briefcase, CheckCircle2, Clock, MessageSquare, ThumbsUp, UserCheck, Zap } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Licensed & Experienced',
    description: 'Journeyman electrician with over 10 years of hands-on experience in residential and commercial work.',
  },
  {
    icon: CheckCircle2,
    title: 'Code Compliant Work',
    description: 'Every installation and repair meets or exceeds current electrical codes for your safety.',
  },
  {
    icon: Clock,
    title: 'Reliable & On Time',
    description: 'I show up when promised and respect your time. No surprises, no excuses.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Honest recommendations and transparent explanations of what needs to be done and why.',
  },
  {
    icon: Zap,
    title: 'Efficient Service',
    description: 'Get the job done right the first time with minimal disruption to your home or business.',
  },
  {
    icon: ThumbsUp,
    title: 'Detail-Oriented',
    description: 'Clean, organized workmanship that reflects pride in every project, large or small.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Pinnacle Electric?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trustworthy electrical service backed by experience, quality, and integrity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">Top Pro</div>
              <div className="text-gray-400">Current Thumbtack Status</div>
            </div>
            <div>
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">19+</div>
              <div className="text-gray-400">Times Hired</div>
            </div>
            <div>
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">Verified</div>
              <div className="text-gray-400">Background Checked</div>
            </div>
            <div>
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">6 Years</div>
              <div className="text-gray-400">In Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
