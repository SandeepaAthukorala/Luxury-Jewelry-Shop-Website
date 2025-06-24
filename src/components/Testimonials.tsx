import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = testimonialsData;

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating ? 'text-chili-red fill-current scale-110' : 'text-gray-300'
        }`}
        style={{ animationDelay: `${i * 100}ms` }}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-blue-grey/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-blue-grey max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who've experienced our craftsmanship
          </p>
        </ScrollReveal>

        {/* Testimonials Slider */}
        <ScrollReveal delay={200} className="relative">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Quote Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-royal-blue/10 rounded-full mb-8 hover:bg-royal-blue/20 transition-all duration-300 hover:scale-110">
                      <Quote className="w-8 h-8 text-royal-blue" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Comment */}
                    <blockquote className="text-xl md:text-2xl text-royal-blue font-medium leading-relaxed mb-8 italic">
                      "{testimonial.comment}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-chili-red/20 transition-transform duration-300 hover:scale-110"
                      />
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-royal-blue">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-grey">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, positioned outside on desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-royal-blue hover:bg-blue-grey/10 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-royal-blue hover:bg-blue-grey/10 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </ScrollReveal>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentIndex
                  ? 'bg-chili-red w-8'
                  : 'bg-chili-red/30 hover:bg-chili-red/50 w-3'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-royal-blue hover:bg-blue-grey/10 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-royal-blue hover:bg-blue-grey/10 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Stats */}
        <ScrollReveal delay={400} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '1,200+', label: 'Happy Customers' },
            { value: '99%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-chili-red mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-blue-grey">{stat.label}</div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;