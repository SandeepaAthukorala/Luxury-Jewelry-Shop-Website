import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import itemsData from '../items.json';
import ImageModal from './ImageModal';
import ScrollReveal from './ScrollReveal';
import { Search, Sparkles, Filter } from 'lucide-react';

interface ItemsData {
  [category: string]: {
    [subcategory: string]: string[];
  } | string[];
}

const Collection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Gem & Gold Jewellery');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
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

  const typedItemsData = itemsData as ItemsData;

  // Generate categories and subcategories from items.json
  const categories = Object.keys(typedItemsData).reduce((acc, categoryKey) => {
    const categoryData = typedItemsData[categoryKey];
    
    if (Array.isArray(categoryData)) {
      // Simple array category (like Sunglasses, Gold-Plated Jewellery)
      acc[categoryKey] = {
        name: categoryKey,
        subcategories: ['all']
      };
    } else {
      // Object with subcategories
      acc[categoryKey] = {
        name: categoryKey,
        subcategories: ['all', ...Object.keys(categoryData)]
      };
    }
    
    return acc;
  }, {} as Record<string, { name: string; subcategories: string[] }>);
  
  // Get images based on selected category and subcategory
  const getFilteredImages = (): string[] => {
    const categoryData = typedItemsData[selectedCategory];
    
    if (Array.isArray(categoryData)) {
      // Simple array category (like Sunglasses, Gold-Plated Jewellery)
      return categoryData;
    } else {
      // Object with subcategories
      if (selectedSubcategory === 'all') {
        // Combine all subcategory images
        return Object.values(categoryData).flat();
      } else {
        // Return images from specific subcategory
        return categoryData[selectedSubcategory] || [];
      }
    }
  };

  const filteredImages = getFilteredImages();

  const openModal = (imageUrl: string) => {
    setModalImage({
      isOpen: true,
      src: imageUrl,
      alt: 'Jewelry item',
      name: ''
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

  const formatSubcategoryName = (subcategory: string) => {
    return subcategory
      .split('_')[0] // Remove the suffix like '_gold'
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <section id="collection" className="py-16 lg:py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-luxury-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-luxury-gold" />
              <h2 className="text-4xl lg:text-5xl font-bold text-dark-100">
                Our <span className="bg-gold-gradient bg-clip-text text-transparent">Collections</span>
              </h2>
              <Sparkles className="w-8 h-8 text-luxury-gold" />
            </div>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-dark-200 max-w-2xl mx-auto">
              Explore our carefully curated selection of luxury jewelry, timepieces, and premium accessories
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Category Navigation */}
        <ScrollReveal delay={200}>
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-luxury-gold" />
              <span className="text-dark-200 font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {Object.entries(categories).map(([key, category], index) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    setSelectedCategory(key);
                    setSelectedSubcategory('all');
                  }}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-gold-gradient text-dark-900 shadow-xl shadow-luxury-gold/20'
                      : 'glass-luxury text-dark-100 hover:bg-luxury-gold/10 border border-luxury-gold/20'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Subcategory Navigation */}
            <AnimatePresence>
              {categories[selectedCategory]?.subcategories.length > 1 && (
                <motion.div 
                  className="flex flex-wrap justify-center gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {categories[selectedCategory]?.subcategories.map((subcategory, index) => (
                    <motion.button
                      key={subcategory}
                      onClick={() => setSelectedSubcategory(subcategory)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                        selectedSubcategory === subcategory
                          ? 'bg-luxury-accent text-white shadow-lg'
                          : 'glass-luxury-light text-dark-200 hover:bg-luxury-accent/20 border border-luxury-accent/30'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {subcategory === 'all' ? 'All' : formatSubcategoryName(subcategory)}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>

        {/* Special Label for Gold-Plated */}
        <AnimatePresence>
          {selectedCategory === 'Gold-Plated Jewellery' && (
            <ScrollReveal delay={300}>
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-flex items-center gap-2 glass-luxury px-6 py-3 rounded-full text-sm font-semibold text-luxury-gold border border-luxury-gold/30">
                  <Sparkles className="w-4 h-4" />
                  Limited Collection • Coming Soon
                  <Sparkles className="w-4 h-4" />
                </span>
              </motion.div>
            </ScrollReveal>
          )}
        </AnimatePresence>

        {/* Images Grid */}
        <ScrollReveal delay={400}>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence>
              {filteredImages.map((imageUrl: string, index) => (
                <motion.div
                  key={`${selectedCategory}-${selectedSubcategory}-${index}`}
                  className="group relative glass-luxury rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-luxury-gold/20 cursor-pointer"
                  onClick={() => openModal(imageUrl)}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={imageUrl}
                      alt={`Item ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-luxury-gold/0 group-hover:bg-luxury-gold/10 transition-all duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="glass-luxury rounded-full p-3 border border-luxury-gold/30">
                        <Search className="w-6 h-6 text-luxury-gold" />
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Luxury Border Effect */}
                  <div className="absolute inset-0 rounded-xl border border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>

        {/* No images message */}
        <AnimatePresence>
          {filteredImages.length === 0 && (
            <ScrollReveal delay={400}>
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-luxury rounded-2xl p-8 max-w-md mx-auto border border-luxury-gold/20">
                  <Sparkles className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <p className="text-dark-200 text-lg mb-2">No items found in this category</p>
                  <p className="text-dark-300 text-sm">Try selecting a different category or subcategory</p>
                </div>
              </motion.div>
            </ScrollReveal>
          )}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
        name={modalImage.name}
      />
    </section>
  );
};

export default Collection;