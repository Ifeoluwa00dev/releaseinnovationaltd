
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-xs font-bold uppercase tracking-[0.3em] gold-text mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
        {title}
      </h2>
      <div className={`w-20 h-1 gold-bg ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
