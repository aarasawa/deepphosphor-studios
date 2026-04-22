import { Zap, Shield, Layout, ShoppingCart, Wrench, ArrowRightLeft, Info, Computer } from 'lucide-react';

export const platformTiers = [
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
      "Up to 15 products or 3 donation tiers",
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

export const customTiers = [
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
    name: "IT Assistance Retainer",
    price: "$500",
    period: "per month",
    description: "A technical partner who can assist ",
    features: [
      "Troubleshooting & support",
      "Plugin & security updates",
      "Monthly performance audits",
      "8 hours of "
    ],
    icon: Computer,
    highlight: true
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
    name: "Website Maintenance Retainer",
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

export const addons = [
  {
    icon: Wrench,
    name: "Maintenance",
    price: "$200 – $350 / mo",
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
    price: "From $500",
    description: "Stripe, Square, or PayPal integration for e-commerce or donation flows. Includes testing and a handoff walkthrough."
  }
];