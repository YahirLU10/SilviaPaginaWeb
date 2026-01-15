
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  asLink = false,
  href,
  ...props
}) => {
  const baseClasses =
    'px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center';

  const variantClasses =
    variant === 'primary'
      ? 'bg-cyan-500 text-slate-900 neon-glow-cyan hover:bg-cyan-400'
      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 neon-glow-cyan';

  if (asLink) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};