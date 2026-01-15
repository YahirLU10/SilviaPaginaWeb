
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const BrainCircuitIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M12 5a3 3 0 1 0-5.993.251M8.5 8.5a3 3 0 1 0 5.483.565M12 18a3 3 0 1 0 5.993-.251M15.5 15.5a3 3 0 1 0-5.483-.565M12 5a3 3 0 1 0-5.993.251M15.5 8.5a3 3 0 1 0-5.483.565" /><path d="M12 12v.5" /><path d="M17.5 14.5a3 3 0 1 0 .001-6.001" /><path d="M12 5a3 3 0 1 0-5.993.251" /><path d="M6.5 14.5a3 3 0 1 0 .001-6.001" /><path d="M12 18.5v-1" /><path d="M12 8.5v-1" />
  </IconWrapper>
);

export const CodeIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></IconWrapper>
);

export const ServerIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></IconWrapper>
);

export const SmartHomeIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><path d="M12 3L2 12h3v8h14v-8h3L12 3z" /><path d="M9 21V11h6v10" /></IconWrapper>
);

export const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></IconWrapper>
);

export const TargetIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></IconWrapper>
);

export const EyeIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></IconWrapper>
);

export const GemIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><path d="M6 3h12l4 6-10 12L2 9l4-6z" /><path d="M2 9h20" /></IconWrapper>
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></IconWrapper>
);
