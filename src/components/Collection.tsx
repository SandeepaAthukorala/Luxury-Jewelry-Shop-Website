import React, { useState } from 'react';
import productsData from '../data/products.json';
import ImageModal from './ImageModal';
import ScrollReveal from './ScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  image: string;
  category: string;
  subcategory: string;
}

const Collection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('gem-gold');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    src: string;
  }>({
    isOpen: false,
    src: ''
  });

  const categories = {
    'gem-gold': {
      name: '💎 Gem & Gold Jewellery',
      subcategories: ['all', 'rings', 'earrings', 'pendants', 'chains-bracelets', 'necklaces']
    },
    'gem-silver': {
      name: '🥈 Gem & Silver Jewellery', 
      subcategories: ['all', 'rings', 'chains-bracelets', 'pendants', 'loose-gemstones']
    },
    'gold-plated': {
      name: '✨ Gold-Plated Jewellery',
      subcategories: ['all']
    },
    'watches-clocks': {
      name: '⌚ Watches & Clocks',
      subcategories: ['all', 'gents', 'ladies', 'children', 'wall-clocks', 'table-clocks']
    },
    'sunglasses': {
      name: '🕶️ Sunglasses',
      subcategories: ['all']
    }
  };
  
  const filteredProducts = productsData.filter((product: Product) => {
    const categoryMatch = product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  const openModal = (product: Product) => {
    setModalImage({
      isOpen: true,
      src: product.image
    });
  };

  const closeModal = () => {
    setModalImage({
      isOpen: false,
      src: ''
    });
  };

  const formatSubcategoryName = (subcategory: string) => {
    return subcategory
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' & ');
  };

  return (
    <section id="collection" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-royal-blue mb-4">
              Our Collections
            </h2>
            <p className="text-lg text-blue-grey max-w-2xl mx-auto">
              Explore our carefully curated selection of jewelry, timepieces, and accessories
            </p>
          </div>
        </ScrollReveal>

        {/* Category Navigation */}
        <ScrollReveal delay={200}>
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    setSelectedSubcategory('all');
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-royal-blue text-white shadow-lg'
                      : 'bg-white text-blue-grey border border-blue-grey/30 hover:bg-royal-blue/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Subcategory Navigation */}
            {categories[selectedCategory as keyof typeof categories].subcategories.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2">
                {categories[selectedCategory as keyof typeof categories].subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedSubcategory === subcategory
                        ? 'bg-chili-red text-white'
                        : 'bg-gray-100 text-blue-grey hover:bg-chili-red/10'
                    }`}
                  >
                    {formatSubcategoryName(subcategory)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Special Label for Gold-Plated */}
        {selectedCategory === 'gold-plated' && (
          <ScrollReveal delay={300}>
            <div className="text-center mb-8">
              <span className="inline-block bg-chili-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                Limited Collection • Coming Soon
              </span>
            </div>
          </ScrollReveal>
        )}

        {/* Products Grid */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
            {filteredProducts.map((product: Product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openModal(product)}
              >
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-royal-blue/0 group-hover:bg-royal-blue/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* No product labels or featured badges */}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <ScrollReveal delay={400}>
            <div className="text-center py-12">
              <p className="text-blue-grey text-lg">No products found in this category.</p>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        src={modalImage.src}
        alt=""
        name=""
      />
    </section>
  );
};

export default Collection;