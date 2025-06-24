import React, { useState } from 'react';
import itemsData from '../items.json';
import ImageModal from './ImageModal';
import ScrollReveal from './ScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ItemImage {
  url: string;
  index: number;
}

const Collection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Gem & Gold Jewellery');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
  }>({
    isOpen: false,
    src: '',
    alt: ''
  });

  const categories = {
    'Gem & Gold Jewellery': {
      name: '💎 Gem & Gold Jewellery',
      subcategories: ['all', 'Chains Bracelets_gold', 'Earrings_gold', 'Necklaces_gold', 'Pendants_gold', 'Rings_gold']
    },
    'Gem & Silver Jewellery': {
      name: '🥈 Gem & Silver Jewellery', 
      subcategories: ['all', 'Chains Bracelet silver', 'Loose Gemstones_silver', 'Pendants_silver', 'Rings_silver']
    },
    'Gold-Plated Jewellery': {
      name: '✨ Gold-Plated Jewellery',
      subcategories: ['all']
    },
    'Sunglasses': {
      name: '🕶️ Sunglasses',
      subcategories: ['all']
    },
    'Watches & Clocks': {
      name: '⌚ Watches & Clocks',
      subcategories: ['all', 'Gents Watches', 'Ladies Watches']
    }
  };
  
  const getFilteredImages = (): ItemImage[] => {
    const categoryData = itemsData[selectedCategory as keyof typeof itemsData];
    if (!categoryData) return [];

    let images: string[] = [];
    
    if (selectedSubcategory === 'all') {
      // Get all images from all subcategories in the selected category
      if (Array.isArray(categoryData)) {
        images = categoryData;
      } else {
        images = Object.values(categoryData).flat();
      }
    } else {
      // Get images from specific subcategory
      if (Array.isArray(categoryData)) {
        images = categoryData;
      } else {
        images = categoryData[selectedSubcategory as keyof typeof categoryData] || [];
      }
    }
    
    return images.map((url, index) => ({ url, index }));
  };

  const filteredImages = getFilteredImages();

  const openModal = (imageItem: ItemImage) => {
    setModalImage({
      isOpen: true,
      src: imageItem.url,
      alt: `Item ${imageItem.index + 1}`
    });
  };

  const closeModal = () => {
    setModalImage({
      isOpen: false,
      src: '',
      alt: ''
    });
  };

  const formatSubcategoryName = (subcategory: string) => {
    if (subcategory === 'all') return 'All';
    return subcategory.replace(/_/g, ' ');
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

        {/* Images Grid */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
            {filteredImages.map((imageItem: ItemImage, index) => (
              <div
                key={`${selectedCategory}-${selectedSubcategory}-${index}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openModal(imageItem)}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={imageItem.url}
                    alt={`Item ${index + 1}`}
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
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* No images message */}
        {filteredImages.length === 0 && (
          <ScrollReveal delay={400}>
            <div className="text-center py-12">
              <p className="text-blue-grey text-lg">No items found in this category.</p>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
    </section>
  );
};

export default Collection;