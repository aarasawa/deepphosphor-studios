import { Code2, Cpu, Wrench, ArrowRightLeft } from 'lucide-react';
import { ServiceDetail } from '../types';

export const services: ServiceDetail[] = [
  {
    title: "Application Development",
    description: "Digital experiences built with modern frameworks. Specializing in accessible, performant websites for mission-driven organizations.",
    longDescription: "From a five-page Squarespace site to a fully custom application, we build for the full spectrum of what nonprofits and small businesses need. Every project starts with a scoping call to make sure the technology fits the problem.",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript", "Squarespace", "WordPress", "Shopify", "Accessibility", "SEO"],
    includes: [
      "Platform site builds (Squarespace, WordPress, Shopify, Square, WooCommerce)",
      "Custom coded applications with headless CMS",
      "Payment and donation flow integration (Stripe, Square, PayPal)",
      "Mobile-responsive, WCAG-accessible builds",
      "Staff handoff and training session on delivery",
      "Custom business or internal application development",
      "30 days of post-launch support"
    ],
    goodFit: [
      "You're a nonprofit that needs an online presence or donation system",
      "You have an existing site that's outdated or hard to maintain",
      "You need e-commerce website or online store setup",
      "You want a technical partner"
    ]
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance for small businesses and nonprofits. Infrastructure audits, cloud migrations, and security best practices.",
    longDescription: "Most small organizations are running on legacy systems and tools nobody fully understands. We audit what you have, identify the risks, and build a practical roadmap for you.",
    icon: Cpu,
    tags: ["Cloud", "Security", "SharePoint", "Microsoft 365", "Infrastructure", "Strategy", "Support"],
    includes: [
      "Infrastructure and security audit with written report",
      "Cloud platform setup and migration (Microsoft 365, Google Workspace)",
      "SharePoint and internal tooling configuration",
      "IT policy documentation and staff training",
      "Ongoing advisory retainer available post-engagement",
      "Microsoft Power Apps and low-code internal tooling"
    ],
    goodFit: [
      "You're not sure what technology you actually need",
      "Your team is using workarounds because your systems don't fit your workflow",
      "You've had a security incident or are worried about one",
      "You need to get board-approved IT spending onto a clear roadmap"
    ]
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical partnership for organizations that need reliability without a full-time IT hire.",
    longDescription: "Technology doesn't stop needing attention after launch. Plugins go out of date, integrations break, and staff turn over. Our maintenance plans keep your systems running and give you a single point of contact when something goes wrong.",
    icon: Wrench,
    tags: ["Monitoring", "Updates", "Backups", "Security", "WordPress", "Shopify", "Support"],
    includes: [
      "Monthly plugin, theme, and CMS updates",
      "Automated offsite backups with tested restore procedures",
      "Uptime and performance monitoring",
      "Priority response for break/fix issues",
      "Monthly summary report of changes and status",
      "Up to 10 development hours for small changes (retainer tier)"
    ],
    goodFit: [
      "You launched a site and need someone to keep it healthy",
      "You've been burned by a broken update or plugin conflict before",
      "You want a flat monthly cost instead of surprise invoices",
      "You don't have internal technical staff"
    ]
  },
  {
    title: "Migration Services",
    description: "Move your organization off legacy infrastructure onto modern, maintainable platforms — content, SEO, and redirects intact.",
    longDescription: "Migrations are high-stakes and easy to get wrong. We've moved nonprofits and small businesses from aging CMS platforms, deprecated tools, and tangled hosting setups onto clean, modern stacks.",
    icon: ArrowRightLeft,
    tags: ["WordPress", "Squarespace", "Shopify", "SEO", "DNS", "Redirects", "Data Migration"],
    includes: [
      "Full content audit and migration plan before any changes",
      "301 redirect mapping to preserve SEO value",
      "DNS cutover with zero-downtime strategy",
      "Post-migration QA across devices and browsers",
      "Handoff documentation for ongoing management"
    ],
    goodFit: [
      "Your current site is on a platform that's hard to update or maintain",
      "You're paying too much for legacy hosting or licensing",
      "You've outgrown your current CMS and need more flexibility",
    ]
  }
];