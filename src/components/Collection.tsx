import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';
import ScrollReveal from './ScrollReveal';
import OptimizedImage from './OptimizedImage';
import { Search, Sparkles, Filter } from 'lucide-react';
import { 
  getCategories, 
  getSubcategories, 
  getImages, 
  getCategoryDisplayName, 
  getSubcategoryDisplayName 
} from '../utils/imageLoader';

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

  // Generate categories and subcategories from image loader
  const categories = getCategories().reduce((acc, categoryKey) => {
    const subcategories = getSubcategories(categoryKey);
    acc[categoryKey] = {
      name: getCategoryDisplayName(categoryKey),
      subcategories: ['all', ...subcategories]
    };
    return acc;
  }, {} as Record<string, { name: string; subcategories: string[] }>);
  
  // Get images based on selected category and subcategory
  const filteredImages = getImages(selectedCategory, selectedSubcategory);

  const openModal = (imageUrl: string, index: number) => {
    const categoryName = getCategoryDisplayName(selectedCategory);
    const subcategoryName = selectedSubcategory !== 'all' ? getSubcategoryDisplayName(selectedSubcategory) : '';
    const altText = `${categoryName}${subcategoryName ? ` - ${subcategoryName}` : ''} - Custom jewellery piece ${index + 1} from Western Jewellers Hiripitiya Sri Lanka`;
    
    setModalImage({
      isOpen: true,
      src: imageUrl,
      alt: altText,
      name: `${categoryName} Item ${index + 1}`
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
    return getSubcategoryDisplayName(subcategory);
  };

  return (
    <section id="collection" className="py-16 lg:py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
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
              <Sparkles className="w-8 h-8 text-luxury-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Custom Jewellery <span className="bg-royal-gradient bg-clip-text text-transparent">Gallery Hiripitiya</span>
              </h2>
              <Sparkles className="w-8 h-8 text-luxury-primary" />
            </div>
            <div className="w-24 h-1 bg-royal-gradient mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Browse our handcrafted jewellery collection featuring engagement rings, gold necklaces, and luxury timepieces designed in our Hiripitiya workshop, Sri Lanka.
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
              <Filter className="w-5 h-5 text-luxury-primary" />
              <span className="text-white font-medium">Filter by Category:</span>
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
                      ? 'bg-royal-gradient text-white shadow-xl shadow-luxury-primary/20'
                      : 'glass-luxury text-white hover:bg-luxury-primary/10 border border-luxury-primary/20'
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
              {categories[selectedCategory]?.subcategories.length > 2 && (
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
                          ? 'bg-white text-luxury-primary shadow-lg'
                          : 'glass-luxury-light text-white hover:bg-white/20 border border-white/30'
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
                  className="group relative glass-luxury rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-luxury-primary/20 cursor-pointer"
                  onClick={() => openModal(imageUrl, index)}
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
                    <OptimizedImage
                      src={imageUrl}
                      alt={`${getCategoryDisplayName(selectedCategory)}${selectedSubcategory !== 'all' ? ` - ${getSubcategoryDisplayName(selectedSubcategory)}` : ''} - Custom jewellery piece ${index + 1} from Western Jewellers Hiripitiya Sri Lanka`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 6}
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-luxury-primary/0 group-hover:bg-luxury-primary/10 transition-all duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="glass-luxury rounded-full p-3 border border-luxury-primary/30">
                  <Search className="w-6 h-6 text-luxury-primary" />
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Luxury Border Effect */}
                  <div className="absolute inset-0 rounded-xl border border-luxury-primary/20 group-hover:border-luxury-primary/40 transition-colors duration-300"></div>
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
                <div className="glass-luxury rounded-2xl p-8 max-w-md mx-auto border border-luxury-primary/20">
          <Sparkles className="w-12 h-12 text-luxury-primary mx-auto mb-4" />
          <p className="text-white text-lg mb-2">No items found in this category</p>
          <p className="text-luxury-accent text-sm">Try selecting a different category or subcategory</p>
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