
import { ReactNode } from 'react';

interface ContentLayoutProps {
  children: ReactNode;
  className?: string;
}

export const ContentLayout = ({ children, className = "" }: ContentLayoutProps) => {
  return (
    <div className={`min-h-screen bg-charcoal pt-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>
    </div>
  );
};
