
export interface Service {
  id: number;
  title: string;
  description: string;
  points: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface Metric {
  id: number;
  label: string;
  icon: React.ReactNode;
  value: string;
  description: string;
}
