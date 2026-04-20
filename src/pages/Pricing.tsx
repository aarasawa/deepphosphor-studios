import { motion } from 'motion/react';
import { Check, Info, Heart, Zap, Shield } from 'lucide-react';

const tiers = [
  {
    name: "Consultation",
    price: "$150",
    period: "per session",
    description: "Strategic guidance for your digital infrastructure and roadmap planning.",
    features: [
      "90-minute deep dive",
      "Infrastructure audit",
      "Security assessment",
      "Actionable roadmap report"
    ],
    icon: Info,
    highlight: false
  },
  {
    name: "Digital Presence",
    price: "$2,500",
    period: "starting at",
    description: "High-end web development for organizations ready to elevate their brand.",
    features: [
      "Custom React/Next.js site",
      "SEO & Performance optimization",
      "Accessibility compliance",
      "Content Management System"
    ],
    icon: Zap,
    highlight: true
  },
  {
    name: "Retainer",
    price: "$800",
    period: "per month",
    description: "Ongoing support and maintenance for peace of mind and continuous growth.",
    features: [
      "Priority support",
      "Monthly performance audits",
      "Security updates",
      "10 hours of development"
    ],
    icon: Shield,
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 font-mono text-amber-mid text-glow uppercase tracking-tighter">Investment.</h1>
        <p className="text-amber-mid/60 max-w-2xl mx-auto text-lg">
          Quality craftsmanship requires investment. We offer flexible pricing models 
          tailored to the unique needs of nonprofits and small businesses.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass-panel p-8 flex flex-col ${tier.highlight ? 'border-amber-mid/50 ring-1 ring-amber-mid/20' : ''}`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-sm ${tier.highlight ? 'bg-amber-mid text-marine' : 'bg-amber-mid/5 text-amber-mid'}`}>
                <tier.icon size={24} />
              </div>
              {tier.highlight && (
                <span className="text-[10px] font-sans font-bold text-amber-bright uppercase tracking-widest px-2 py-1 border border-amber-mid/30 rounded-full">
                  Most Popular
                </span>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-amber-bright">{tier.name}</h3>
            <div className="flex items-baseline space-x-1 mb-4">
              <span className="text-4xl font-bold text-amber-mid">{tier.price}</span>
              <span className="text-amber-mid/40 text-sm">{tier.period}</span>
            </div>
            <p className="text-amber-mid/60 mb-8 text-sm leading-relaxed">
              {tier.description}
            </p>
            
            <div className="space-y-4 mb-10 flex-grow">
              {tier.features.map(feature => (
                <div key={feature} className="flex items-start space-x-3">
                  <Check className="text-amber-mid w-5 h-5 shrink-0" />
                  <span className="text-sm text-amber-mid/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full py-4 font-bold rounded-sm transition-all ${
              tier.highlight 
                ? 'bg-amber-mid text-marine hover:bg-amber-bright border-glow' 
                : 'border border-amber-mid/30 text-amber-mid hover:bg-amber-mid/10'
            }`}>
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>

      {/* Nonprofit Section */}
      <section className="glass-panel p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Heart size={200} className="text-amber-mid" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="text-amber-mid" />
              <h2 className="text-3xl font-bold text-amber-bright">The Nonprofit Commitment</h2>
            </div>
            <p className="text-amber-mid/70 mb-6 leading-relaxed">
              We believe that organizations doing good in the world deserve the same 
              high-end technology as Fortune 500 companies. 
            </p>
            <div className="space-y-4">
              <div className="bg-amber-mid/5 p-4 rounded-sm border-l-2 border-amber-mid">
                <h4 className="font-bold text-amber-mid mb-1">Sliding Scale Rates</h4>
                <p className="text-sm text-amber-mid/60">We offer a 20-40% discount on all services for registered 501(c)(3) organizations in the Los Angeles area.</p>
              </div>
              <div className="bg-amber-mid/5 p-4 rounded-sm border-l-2 border-amber-mid">
                <h4 className="font-bold text-amber-mid mb-1">Pro-Bono Hours</h4>
                <p className="text-sm text-amber-mid/60">Each quarter, we dedicate 40 hours of development time to a selected community project.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-marine/50 p-8 rounded-sm border border-amber-mid/20">
            <h3 className="text-xl font-bold mb-4 font-sans text-amber-mid tracking-widest uppercase">// FREELANCE ADVICE: LA MARKET</h3>
            <div className="space-y-4 text-sm text-amber-mid/60">
              <p>
                In Los Angeles, standard freelance rates for senior web development range from <span className="text-amber-bright font-bold">$120 - $180/hr</span>.
              </p>
              <p>
                However, when working with nonprofits, a "Social Impact Rate" is common. We recommend:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="text-amber-bright">Junior/Mid:</span> $65 - $85/hr</li>
                <li><span className="text-amber-bright">Senior/Lead:</span> $95 - $125/hr</li>
                <li><span className="text-amber-bright">Project Based:</span> Usually 15-20% below commercial market value.</li>
              </ul>
              <p className="pt-4">
                "Value-based pricing is often better for nonprofits than hourly billing, as it provides budget certainty for their boards."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
