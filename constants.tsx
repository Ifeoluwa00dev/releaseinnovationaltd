
import React from 'react';
import { Service, Testimonial, Metric } from './types';

export const BRAND_NAME = "Release Innovations LTD";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Tradefair & Market Expansion Strategy",
    description: "Aligning physical markets with strategic growth trajectories.",
    points: [
      "Distributor, reseller, and stall alignment",
      "Market entry planning and state-level rollout",
      "Incentive structures that drive repeat orders"
    ]
  },
  {
    id: 2,
    title: "Brand Positioning & Clarity",
    description: "Elevating your brand perception in the digital and physical space.",
    points: [
      "Instagram and digital architecture for premium brand perception",
      "Separation of founder, product, and other brand channels",
      "Content strategy that converts and builds trust"
    ]
  },
  {
    id: 3,
    title: "Revenue Protection & Growth Oversight",
    description: "Systems designed to ensure every visibility translates to revenue.",
    points: [
      "Aligning digital campaigns with physical market activity",
      "KPIs, ROI tracking, and impact measurement",
      "Execution oversight without micromanaging teams"
    ]
  },
  {
    id: 4,
    title: "E-commerce & Digital Architecture",
    description: "Seamless user experiences built for conversion and retention.",
    points: [
      "Custom website and UX design for conversions",
      "Influencer & customer integration for engagement",
      "Mobile-first optimization and seamless checkout experience"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Onyi’s Tradefair strategies transformed our distribution. Within months, our product visibility increased, reseller adoption grew, and revenue became predictable across multiple states.",
    author: "Brand Founder",
    role: "Confidential Client"
  },
  {
    id: 2,
    quote: "She helped us align our digital campaigns with physical sales. Our online conversions improved significantly while our brand maintained a premium perception.",
    author: "Beauty Brand",
    role: "Confidential Client"
  }
];

export const METRICS: Metric[] = [
  {
    id: 1,
    label: "Distributor Growth",
    value: "50–200%",
    description: "Increase in product movement after structured strategy"
  },
  {
    id: 2,
    label: "Brand Authority",
    value: "Premium",
    description: "Unified messaging created elite market perception"
  },
  {
    id: 3,
    label: "Market Reach",
    value: "National",
    description: "Successful rollout across multiple states & beauty fairs"
  },
  {
    id: 4,
    label: "Engagement",
    value: "High-ROI",
    description: "Optimized e-commerce & influencer integration"
  }
];
