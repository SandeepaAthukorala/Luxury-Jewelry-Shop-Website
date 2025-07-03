import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultFallback = () => (
  <div className="flex items-center justify-center py-20">
    <motion.div
      className="w-12 h-12 border-4 border-luxury-primary border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <DefaultFallback />, 
  className = '' 
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

// Higher-order component for lazy loading components
export const withLazyLoading = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <LazySection>
      <LazyComponent {...props} />
    </LazySection>
  );
};

export default LazySection;