import React, { useState } from 'react';
import productsData from '../data/products.json';
import ImageModal from './ImageModal';
import ScrollReveal from './ScrollReveal';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  featured: boolean;
}

const Collection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    name: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    name: ''
  });

  const categories = ['all', 'rings', 'necklaces', 'bracelets', 'pendants', 'chain', 'bangles'];
  
  const filteredProducts = productsData.filter((product: Product) => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const openModal = (product: Product) => {
    setModalImage({
      isOpen: true,
      src: product.image,
      alt: product.name,
      name: product.name
    });
  };

  const closeModal = () => {
    setModalImage({
      isOpen: false,
      src: '',
      alt: '',
      name: ''
    });
  };

  return (
    <section id="collection" className="py-20 px-4 bg-[#FDF6F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-[#1E1E1E]/70 max-w-2xl mx-auto">
            Handpicked pieces that embody luxury and sophistication
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={200} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 hover:scale-105 active:scale-95 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white shadow-lg scale-105'
                  : 'bg-white text-[#1E1E1E] hover:bg-[#FFF4CC] hover:shadow-md shadow-sm'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {category === 'all' ? 'All Items' : category}
            </button>
          ))}
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
              <div
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(product)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Image
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#1E1E1E] group-hover:text-[#D4AF37] transition-colors duration-300 text-center">
                    {product.name}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        imageSrc={modalImage.src}
        imageAlt={modalImage.alt}
        productName={modalImage.name}
      />
    </section>
  );
};

export default Collection;