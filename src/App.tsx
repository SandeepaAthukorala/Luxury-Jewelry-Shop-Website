import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Collection />
      <Services />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;