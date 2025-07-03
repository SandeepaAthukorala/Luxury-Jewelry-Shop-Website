import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import BackToTop from './components/BackToTop';
import LazySection from './components/LazySection';
import { initPerformanceOptimizations } from './utils/performance';

// Lazy load non-critical components
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Initialize performance optimizations
    initPerformanceOptimizations();
  }, []);

  return (
    <div className="min-h-screen bg-luxury-gradient text-dark-100">
      <Navbar />
      <Hero />
      <Collection />
      
      {/* Lazy loaded sections for better performance */}
      <LazySection>
        <Services />
      </LazySection>
      
      <LazySection>
        <About />
      </LazySection>
      
      <LazySection>
        <Footer />
      </LazySection>
      
      <BackToTop />
    </div>
  );
}

export default App;