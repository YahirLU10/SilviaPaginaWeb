
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] ${className}`}
    >
      {children}
    </div>
  );
};
