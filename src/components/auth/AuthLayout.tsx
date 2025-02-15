
import { ReactNode } from 'react';

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl animate-fade-up">
        {children}
      </div>
    </div>
  );
};
