import { motion } from 'motion/react';
import { Check, Heart, Zap, Shield, Layout, ShoppingCart, Wrench, ArrowRightLeft, Info } from 'lucide-react';
import { HomeProps } from '../types';

const platformTiers = [
  {
    name: "Starter Presence",
    price: "$800",
    priceTo: "$1,200",
    period: "one-time",
    description: "A clean, professional web presence on Squarespace or WordPress. Ideal for nonprofits and small businesses that need to get online fast.",
    features: [
      "Squarespace or WordPress",
      "Up to 5 pages",
      "Mobile-responsive layout",
      "Contact form & basic SEO",
      "1 round of revisions",
      "2-week delivery"
    ],
    icon: Layout,
    highlight: false,
    tag: null
  },
  {
    name: "Platform Plus",
    price: "$1,800",
    priceTo: "$2,500",
    period: "one-time",
    description: "E-commerce and donation-ready builds on Shopify, Square, or WooCommerce. Everything a growing org needs to transact online.",
    features: [
      "Shopify, Square, or WooCommerce",
      "Up to 15 products or donation tiers",
      "Payment & donation integration",
      "Custom theme adjustments",
      "Inventory & order setup",
      "Staff training session included"
    ],
    icon: ShoppingCart,
    highlight: true,
    tag: "Most Requested"
  }
];

const customTiers = [
  {
    name: "Consultation",
    price: "$275",
    period: "per session",
    description: "A focused 90-minute strategy session with a written infrastructure audit and actionable roadmap delivered afterward.",
    features: [
      "90-minute deep dive",
      "Infrastructure & security audit",
      "Written roadmap report",
      "Priority recommendations"
    ],
    icon: Info,
    highlight: false
  },
  {
    name: "Custom Build",
    price: "$2,500",
    period: "starting at",
    description: "Fully custom React/Next.js development. No templates — built from the ground up for your brand, your users, and your scale.",
    features: [
      "React / Next.js, custom-designed",
      "Headless CMS integration",
      "SEO & performance optimization",
      "Accessibility compliance (WCAG)",
      "Excludes: copywriting, custom illustration"
    ],
    icon: Zap,
    highlight: true
  },
  {
    name: "Retainer",
    price: "$800",
    period: "per month",
    description: "A technical partner who already knows your systems. No scrambling when something breaks — just one message.",
    features: [
      "Priority response & support",
      "Plugin & security updates",
      "Monthly performance audits",
      "10 hours of development time"
    ],
    icon: Shield,
    highlight: false
  }
];

const addons = [
  {
    icon: Wrench,
    name: "Maintenance",
    price: "$150 – $200 / mo",
    description: "Plugin updates, backups, uptime monitoring, and 'something broke' support. Designed for platform-site clients who don't need full retainer hours."
  },
  {
    icon: ArrowRightLeft,
    name: "Site Migration",
    price: "From $500",
    description: "Move your existing site to a modern platform — content, SEO, redirects, and all. Common for nonprofits stuck on aging infrastructure."
  },
  {
    icon: ShoppingCart,
    name: "Payment & Donation Setup",
    price: "From $350",
    description: "Stripe, Square, or PayPal integration for e-commerce or donation flows. Includes testing and a handoff walkthrough."
  }
];

const PricingCard = ({ tier, index, isSmall = false }: { tier: any; index: number; isSmall?: boolean }) => (
  <motion.div
    key={tier.name}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`glass-panel p-8 flex flex-col ${tier.highlight ? 'border-amber-mid/50 ring-1 ring-amber-mid/20' : ''}`}
  >
    <div className="flex items-center justify-between mb-6">
      <div className={`p-3 rounded-sm ${tier.highlight ? 'bg-amber-mid text-marine' : 'bg-amber-mid/5 text-amber-mid'}`}>
        <tier.icon size={22} />
      </div>
      {tier.tag && (
        <span className="text-[10px] font-sans font-bold text-amber-bright uppercase tracking-widest px-2 py-1 border border-amber-mid/30 rounded-full">
          {tier.tag}
        </span>
      )}
      {tier.highlight && !tier.tag && (
        <span className="text-[10px] font-sans font-bold text-amber-bright uppercase tracking-widest px-2 py-1 border border-amber-mid/30 rounded-full">
          Most Popular
        </span>
      )}
    </div>

    <h3 className={`font-bold mb-2 text-amber-bright ${isSmall ? 'text-xl' : 'text-2xl'}`}>{tier.name}</h3>

    <div className="flex items-baseline space-x-1 mb-4">
      <span className="text-3xl font-bold text-amber-mid">{tier.price}</span>
      {tier.priceTo && <span className="text-amber-mid/60 text-sm">– {tier.priceTo}</span>}
      <span className="text-amber-mid/40 text-sm ml-1">{tier.period}</span>
    </div>

    <p className="text-amber-mid/60 mb-6 text-sm leading-relaxed">{tier.description}</p>

    <div className="space-y-3 mb-8 flex-grow">
      {tier.features.map((feature: string) => (
        <div key={feature} className="flex items-start space-x-3">
          <Check className="text-amber-mid w-4 h-4 shrink-0 mt-0.5" />
          <span className="text-sm text-amber-mid/80">{feature}</span>
        </div>
      ))}
    </div>

    <button className={`w-full py-3 font-bold rounded-sm transition-all text-sm ${
      tier.highlight
        ? 'bg-amber-mid text-marine hover:bg-amber-bright border-glow'
        : 'border border-amber-mid/30 text-amber-mid hover:bg-amber-mid/10'
    }`}>
      Get Started
    </button>
  </motion.div>
);

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 font-mono text-amber-mid text-glow uppercase tracking-tighter">Investment.</h1>
        <p className="text-amber-mid/60 max-w-2xl mx-auto text-lg">
          Transparent pricing for nonprofits and small businesses. High-quality work and
          direct engagement.
        </p>
      </header>

      {/* Platform Sites */}
      <section className="mb-20">
        <div className="flex items-center gap-6 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-amber-bright">Platform Sites</h2>
            <p className="text-amber-mid/50 text-sm mt-1">Squarespace · WordPress · Shopify · Square · WooCommerce</p>
          </div>
          <div className="h-px flex-grow bg-amber-mid/15" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platformTiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </section>

      {/* Custom & Consulting */}
      <section className="mb-20">
        <div className="flex items-center gap-6 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-amber-bright">Custom & Consulting</h2>
            <p className="text-amber-mid/50 text-sm mt-1">Quality builds · Strategy · Ongoing partnerships</p>
          </div>
          <div className="h-px flex-grow bg-amber-mid/15" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {customTiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} isSmall />
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="mb-20">
        <div className="flex items-center gap-6 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-amber-bright">Add-On Services</h2>
            <p className="text-amber-mid/50 text-sm mt-1">Standalone services that complement any engagement</p>
          </div>
          <div className="h-px flex-grow bg-amber-mid/15" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="glass-panel p-6 group hover:border-amber-mid/40 transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-amber-mid/5 rounded-sm border border-amber-mid/10">
                  <addon.icon className="text-amber-mid w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-mid text-sm">{addon.name}</h4>
                  <span className="text-amber-bright text-xs font-sans">{addon.price}</span>
                </div>
              </div>
              <p className="text-amber-mid/55 text-sm leading-relaxed">{addon.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nonprofit Commitment */}
      <section className="glass-panel p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Heart size={200} className="text-amber-mid" />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="text-amber-mid" />
              <h2 className="text-3xl font-bold text-amber-bright">The Nonprofit Commitment</h2>
            </div>
            <p className="text-amber-mid/70 mb-8 leading-relaxed">
              Organizations doing good in the world deserve the same high-end technology as Fortune 500 companies.
              Senior web development in Los Angeles runs $120–180/hr on the open market. We price below that
              because we work directly with you — what you pay goes to the work.
            </p>
            <div className="space-y-4">
              <div className="bg-amber-mid/5 p-4 rounded-sm border-l-2 border-amber-mid">
                <h4 className="font-bold text-amber-mid mb-1">Sliding Scale Rates</h4>
                <p className="text-sm text-amber-mid/60">20–40% discount on all services for registered 501(c)(3) organizations in the Los Angeles area.</p>
              </div>
              <div className="bg-amber-mid/5 p-4 rounded-sm border-l-2 border-amber-mid">
                <h4 className="font-bold text-amber-mid mb-1">Pro-Bono Hours</h4>
                <p className="text-sm text-amber-mid/60">Each quarter, 40 hours of development time are dedicated to a selected community project at no cost.</p>
              </div>
              <div className="bg-amber-mid/5 p-4 rounded-sm border-l-2 border-amber-mid">
                <h4 className="font-bold text-amber-mid mb-1">Value-Based Pricing Available</h4>
                <p className="text-sm text-amber-mid/60">Prefer a fixed project price over hourly? We offer value-based scoping for board-approved budgets and grant-funded projects.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-marine/50 p-8 rounded-sm border border-amber-mid/20">
              <h3 className="text-sm font-sans text-amber-mid tracking-widest uppercase mb-5">Past Work Includes</h3>
              <div className="space-y-4 text-sm text-amber-mid/70">
                <div className="flex items-start space-x-3">
                  <Check className="text-amber-mid w-4 h-4 shrink-0 mt-0.5" />
                  <span>Membership registration systems with Stripe & Airtable backends</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-amber-mid w-4 h-4 shrink-0 mt-0.5" />
                  <span>Donation and payment flow integrations for LA-area nonprofits</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-amber-mid w-4 h-4 shrink-0 mt-0.5" />
                  <span>Platform migrations from legacy CMS to modern managed stacks</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="text-amber-mid w-4 h-4 shrink-0 mt-0.5" />
                  <span>SharePoint and cloud infrastructure for small org IT needs</span>
                </div>
              </div>
            </div>

            <div className="bg-marine/50 p-6 rounded-sm border border-amber-mid/20 text-center">
              <p className="text-amber-mid/60 text-sm mb-4">Not sure which tier fits your project?</p>
              <a href="/contact" className="px-8 py-3 bg-amber-mid text-marine font-bold rounded-sm border-glow hover:bg-amber-bright transition-all text-sm">
                Book a Free 30-Min Call
              </a>
              <p className="text-amber-mid/30 text-xs mt-3">No commitment. We'll scope it together.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}