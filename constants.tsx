
import React from 'react';
import { Service, Testimonial, Metric } from './types';

export const BRAND_NAME = "Release Innovations LTD";

export const PAIN_POINTS = [
  "Inconsistent Pricing Structures",
  "Lack of SKU Clarity & Inventory Intelligence",
  "Weak Retail & Physical Market Penetration",
  "Over-reliance on Volatile Instagram Algorithms",
  "Undefined Distributor & Reseller Strategies",
  "No Scalable Growth Roadmap"
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Distribution Intelligence",
    description: "Moving your brand from DMs to the shelves of major retailers and national distributors.",
    points: [
      "Retail-ready pricing & margins architecture",
      "Distributor tiering and incentive modeling",
      "National tradefair & market rollout strategy"
    ]
  },
  {
    id: 2,
    title: "Market Architecture",
    description: "Engineering the systems that separate the founder's hustle from the brand's machine.",
    points: [
      "SKU optimization and portfolio management",
      "Digital-to-Retail conversion funnels",
      "Operational oversight for beauty founders"
    ]
  },
  {
    id: 3,
    title: "Growth Strategy Oversight",
    description: "High-level advisory for brands ready to dominate the Nigerian and West African market.",
    points: [
      "Brand equity and premium positioning",
      "Revenue protection and leak auditing",
      "Influencer-to-Retail impact measurement"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Onyinye didn't just give us a plan; she gave us a machine. We moved from 100% Instagram sales to a structured network of 12 regional distributors in 4 months.",
    author: "Founder, Skincare Brand",
    role: "Growth Client"
  },
  {
    id: 2,
    quote: "The SKU clarity alone saved us millions in wasted inventory. If you are serious about moving from hustle to legacy, this is the only call you need to make.",
    author: "CEO, Cosmetic House",
    role: "Strategy Client"
  }
];

export const METRICS: Metric[] = [
  {
    id: 1,
    label: "Sales Shift",
    value: "80%",
    description: "Migration from manual DM sales to automated distribution"
  },
  {
    id: 2,
    label: "SKU Efficiency",
    value: "100%",
    description: "Precision inventory tracking and high-margin focus"
  },
  {
    id: 3,
    label: "Market Depth",
    value: "National",
    description: "Retail presence across key Nigerian beauty hubs"
  },
  {
    id: 4,
    label: "Client Value",
    value: "High-Tier",
    description: "Reserved for founders focused on scalable legacy"
  }
];