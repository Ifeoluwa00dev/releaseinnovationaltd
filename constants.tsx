
import React from 'react';
import { Service, Testimonial, Metric } from './types';

export const BRAND_NAME = "Release Innovations LTD";

export const PAIN_POINTS = [
  "Inconsistent pricing : Many brands struggle to set the right prices for products and offers.",
  "Unclear product tracking — Limited visibility on which products sell best and which stall.",
  "Weak market presence — Low reach in retail stores and physical markets",
  "Over-reliance on social platforms — Vulnerable to algorithm changes and unpredictable reach.",
  "Undefined sales network — No clear strategy for distributors and resellers.",
  "No growth roadmap — No structured plan for scaling the business effectively."
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
    quote: " Onyi has a unique ability to organize complex sales processes and make them easy to implement. Her guidance gave us clarity we didn’t have before.",
    author: "Business Peer",
    role: "Process & Execution Recognition"
  },
  {
  id: 2,
  quote: 'After Onyi broke down how much I was missing out and what I could realistically be making, I was shocked! I even said, I didn\'t know money was in cosmetics like this — I’ve been playing all this time',
  author: "Client",
  role: "Strategy Client"
},

  {
    id: 3,
    quote: "I didn’t realize I needed an expert in digital marketing until Onyi opened my eyes. I thought selling on Instagram was enough, but she showed me there’s so much more to growth. I was completely amazed!",
    author: "Beauty Brand Founder",
    role: "Digital Impact Client"
  },
  {
  id: 4,
  quote: 'The frameworks Onyi introduced for market expansion and sales systems were intelligent, especially in how she plans to execute them. I\'m really impressed!',
  author: "CEO, Cosmetic House",
  role: "Digital Impact Client"
},

{
    id: 5,
    role: "Design & User Experience",
    quote: "Onyi’s team builds the best websites. The interface is beautiful and effortless. It’s clear she understands both aesthetics and user experience. I was genuinely impressed!",
    author: "Client",
    
  },
  
  


  
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

export const TEAM_MEMBERS = [
  {
    name: "Olalekan Olohunloba",
    role: "Senior Digital Marketer",
    image: "https://res.cloudinary.com/drkksaa3i/image/upload/v1771337787/gyg025_qopq4x.jpg",
    description: "Driving digital strategies and campaigns that elevate brand presence and growth."
  },
  {
    name: "Ifeoluwa Joshua",
    role: "Web Designer",
    image: "https://res.cloudinary.com/drkksaa3i/image/upload/v1771333812/Ifeoluwa_img_ahkwst.png",
    description: "Crafting seamless, visually striking websites that align with business goals"
  }
];