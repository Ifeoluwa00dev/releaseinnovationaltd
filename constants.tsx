
import React from 'react';
import { Service, Testimonial, Metric } from './types';
import {BarChart3, TrendingUp, Globe2, Sparkles} from "lucide-react"
export const BRAND_NAME = "Release Innovations LTD";

export const C = {
  navy:      '#0a192f',
  forest:    '#1a392a',
  ivory:     '#fdfaf6',
  champagne: '#f0e6c8',
  gold:      '#c5a059',
  goldLight: '#dcc18d',
  white: '#ffff',
};

export const PAIN_POINTS = [
  "⁠Influencer Partnerships Wahala Many beauty brands collaborate with influencers or MUAs based on popularity rather than conversion power. They rarely track which collaborations actually generate revenue, and performance is often measured only by likes, views, or comments.As a result, the investment spent on influencing becomes guesswork.",
  "Untracked Products & Sales Too many brands are flying blind, with no real way to track which products are actually moving or which stalls are performing.Without this data, they can’t tell: •	Which products are true best-sellers•	Which products are slow-movers•	Which stalls or locations are high-performing•	Why certain items aren’t selling Stock often sits on shelves,sometimes literally gathering dust ,while capital remains locked in unsold inventory.",
  "Depending on Social Media Alone: Many brands are vulnerable to algorithm changes and unpredictable reach. If an account gets flagged or the algorithm shifts, sales can vanish overnight. Relying only on “DM to order” puts your business at the mercy of platforms you don’t own, making growth unpredictable and risky.",
  
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
  quote: 'After Onyi broke down how much I was missing out and what I could realistically be making, I was shocked! I even said, I didn\'t know money was in cosmetics like this. I’ve been playing all this time',
  author: "Annette Umeh",
  role: "Founder, Beauty by Zikky"
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
    quote: "Onyi’s team builds the best websites. The interface is beautiful and effortless to  navigate. It’s clear she understands both aesthetics and user experience. Since launching, my brand feels more structured and professional. I absolutely love my website.",
    author: "Ajie Joy",
    
  },
  
  


  
];

export const METRICS: Metric[] = [
  {
    id: 1,
     icon: <BarChart3 size={28} style={{ color: C.gold }} />,
    label: "--",
    value: "Influencer Pairing & Revenue Tracking",
    description: "We identify MUAs and influencers with real purchasing authority in your target market.Each product is paired intentionally, not randomly, and every collaboration is tracked using performance codes and real sales data. No guesswork. No assumptions. Only measurable, real results."
  },
  {
    id: 2,
     icon: <TrendingUp size={28} style={{ color: C.gold }} />,
    label: "--",
    value: "Product & Profit Optimization",
    description: "We guide you to focus on high-profit products, reduce slow-moving stock, and manage inventory with better control and clarity."
  },
  {
    id: 3,
     icon: <Globe2     size={28} style={{ color: C.gold }} />,
    label: "--",
    value: "Business Growth Planning",
    description: "We structure practical expansion plans that help you grow into stronger locations, new markets, and profitable opportunities."
  },
  {
    id: 4,
    label: "--",
    icon: <Sparkles  size={28} style={{ color: C.gold }} />,
    value: "Market Expansion Strategy",
    description: "We design rollout strategies for retail placement, trade fairs, and market activations to increase your brand’s physical visibility and distribution reach."
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