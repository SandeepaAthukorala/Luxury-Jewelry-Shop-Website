import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-luxury-gradient text-dark-100">
      <Navbar />
      <Hero />
      <Collection />
      <Services />
      <About />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;