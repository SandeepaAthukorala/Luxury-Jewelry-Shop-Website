// Utility to load images from the public/images directory structure

interface ImageData {
  [category: string]: {
    [subcategory: string]: string[];
  };
}

// Map directory names to display names
const categoryDisplayNames: Record<string, string> = {
  'Gem & Gold Jewellery': 'Gem & Gold Jewellery',
  'Gem & Silver Jewellery': 'Gem & Silver Jewellery',
  'Gold-Plated Jewellery': 'Gold-Plated Jewellery',
  'Sunglasses': 'Sunglasses',
  'Watches & Clocks': 'Watches & Clocks'
};

const subcategoryDisplayNames: Record<string, string> = {
  'Chains Bracelets': 'Chains & Bracelets',
  'Chains Bracelet Silver': 'Chains & Bracelets',
  'Earrings': 'Earrings',
  'Necklaces': 'Necklaces',
  'Pendants': 'Pendants',
  'Rings': 'Rings',
  'Loose Gemstones': 'Loose Gemstones',
  'All': 'All',
  'Gents Watches': 'Gents Watches',
  'Ladies Watches': 'Ladies Watches',
  'Table Clocks': 'Table Clocks',
  'Wall Clocks': 'Wall Clocks'
};

// Function to get all image files from a directory
function getImagesFromDirectory(basePath: string, files: string[]): string[] {
  return files
    .filter(file => file.match(/\.(webp|jpg|jpeg|png)$/i))
    .map(file => `${basePath}/${file}`);
}

// Generate image data from the directory structure
export function generateImageData(): ImageData {
  const imageData: ImageData = {};

  // Define the structure based on the actual directory structure
  const directoryStructure = {
    'Gem & Gold Jewellery': {
      'Chains Bracelets': [
        'image_10_2.webp', 'image_11_1.webp', 'image_12_2.webp', 'image_14_2.webp',
        'image_1_2.webp', 'image_3_2.webp', 'image_4_2.webp', 'image_5_1.webp',
        'image_6_2.webp', 'image_7_2.webp', 'image_8_2.webp', 'image_9_2.webp'
      ],
      'Earrings': [
        'image_10_2.webp', 'image_11_2.webp', 'image_13_1.webp', 'image_14_1.webp',
        'image_15_1.webp', 'image_1_2.webp', 'image_2_2.webp', 'image_3_2.webp',
        'image_4_2.webp', 'image_5_2.webp', 'image_8_2.webp', 'image_9_2.webp'
      ],
      'Necklaces': [
        'image_10_1.webp', 'image_12_2.webp', 'image_13_2.webp', 'image_14_2.webp',
        'image_15_1.webp', 'image_1_2.webp', 'image_2_1.webp', 'image_3_1.webp',
        'image_4_2.webp', 'image_6_1.webp', 'image_7_2.webp', 'image_9_2.webp'
      ],
      'Pendants': [
        'image_10_1.webp', 'image_11_1.webp', 'image_12_2.webp', 'image_13_2.webp',
        'image_14_2.webp', 'image_15_2.webp', 'image_1_2.webp', 'image_2_1.webp',
        'image_3_1.webp', 'image_4_2.webp', 'image_5_2.webp', 'image_6_2.webp',
        'image_7_2.webp', 'image_8_1.webp', 'image_9_1.webp'
      ],
      'Rings': [
        'image_10_1.webp', 'image_11_1.webp', 'image_12_2.webp', 'image_13_2.webp',
        'image_1_1.webp', 'image_1_2.webp', 'image_2_1.webp', 'image_3_2.webp',
        'image_4_1.webp', 'image_5_1.webp', 'image_6_1.webp', 'image_6_2.webp',
        'image_7_1.webp', 'image_8_1.webp', 'image_9_2.webp'
      ]
    },
    'Gem & Silver Jewellery': {
      'Chains Bracelet Silver': [
        'image_10_2.webp', 'image_11_2.webp', 'image_12_1.webp', 'image_14_2.webp',
        'image_15_2.webp', 'image_1_2.webp', 'image_3_1.webp', 'image_3_2.webp',
        'image_5_2.webp', 'image_7_1.webp', 'image_8_2.webp', 'image_9_2.webp'
      ],
      'Loose Gemstones': [
        'image_10_2.webp', 'image_11_2.webp', 'image_12_2.webp', 'image_13_1.webp',
        'image_14_2.webp', 'image_15_2.webp', 'image_1_2.webp', 'image_2_2.webp',
        'image_3_2.webp', 'image_4_2.webp', 'image_5_2.webp', 'image_6_2.webp',
        'image_7_2.webp', 'image_8_2.webp', 'image_9_2.webp'
      ],
      'Pendants': [
        'image_10_2.webp', 'image_11_1.webp', 'image_12_1.webp', 'image_13_2.webp',
        'image_14_1.webp', 'image_15_1.webp', 'image_1_2.webp', 'image_2_2.webp',
        'image_3_1.webp', 'image_3_2.webp', 'image_4_1.webp', 'image_5_2.webp',
        'image_7_2.webp', 'image_8_2.webp', 'image_9_1.webp'
      ],
      'Rings': [
        'image_10_2.webp', 'image_12_2.webp', 'image_13_2.webp', 'image_15_2.webp',
        'image_1_1.webp', 'image_2_1.webp', 'image_3_1.webp', 'image_3_2.webp',
        'image_6_2.webp', 'image_7_2.webp', 'image_8_1.webp', 'image_9_2.webp'
      ]
    },
    'Gold-Plated Jewellery': {
      'All': [
        'image_12_1.webp', 'image_13_1.webp', 'image_14_1.webp', 'image_14_2.webp',
        'image_15_2.webp', 'image_1_2.webp', 'image_2_2.webp', 'image_3_1.webp',
        'image_4_1.webp', 'image_5_2.webp', 'image_6_2.webp', 'image_8_2.webp'
      ]
    },
    'Sunglasses': {
      'All': [
        'image_10_2.webp', 'image_11_1.webp', 'image_12_2.webp', 'image_13_1.webp',
        'image_14_2.webp', 'image_1_2.webp', 'image_2_2.webp', 'image_3_2.webp',
        'image_5_2.webp', 'image_6_2.webp', 'image_7_1.webp', 'image_9_2.webp'
      ]
    },
    'Watches & Clocks': {
      'Gents Watches': [
        'image_10_2.webp', 'image_12_1.webp', 'image_13_1.webp', 'image_15_1.webp',
        'image_1_1.webp', 'image_3_1.webp', 'image_5_1.webp', 'image_8_2.webp', 'image_9_2.webp'
      ],
      'Ladies Watches': [
        'image_10_2.webp', 'image_11_1.webp', 'image_12_2.webp', 'image_13_1.webp',
        'image_14_1.webp', 'image_15_2.webp', 'image_1_2.webp', 'image_2_2.webp',
        'image_3_2.webp', 'image_4_1.webp', 'image_7_2.webp', 'image_8_2.webp'
      ],
      'Table Clocks': [
        'image_10_1.webp', 'image_10_2.webp', 'image_11_2.webp', 'image_12_1.webp',
        'image_14_1.webp', 'image_15_1.webp', 'image_1_2.webp', 'image_3_2.webp',
        'image_4_2.webp', 'image_5_1.webp', 'image_5_2.webp', 'image_9_2.webp'
      ],
      'Wall Clocks': [
        'image_11_2.webp', 'image_13_1.webp', 'image_14_2.webp', 'image_2_2.webp',
        'image_3_2.webp', 'image_4_1.webp', 'image_7_1.webp', 'image_7_2.webp', 'image_9_1.webp'
      ]
    }
  };

  // Convert directory structure to image paths
  Object.entries(directoryStructure).forEach(([category, subcategories]) => {
    imageData[category] = {};
    Object.entries(subcategories).forEach(([subcategory, files]) => {
      const basePath = `/images/${category}/${subcategory}`;
      imageData[category][subcategory] = getImagesFromDirectory(basePath, files);
    });
  });

  return imageData;
}

// Get display name for category
export function getCategoryDisplayName(category: string): string {
  return categoryDisplayNames[category] || category;
}

// Get display name for subcategory
export function getSubcategoryDisplayName(subcategory: string): string {
  return subcategoryDisplayNames[subcategory] || subcategory;
}

// Get all categories
export function getCategories(): string[] {
  return Object.keys(categoryDisplayNames);
}

// Get subcategories for a category
export function getSubcategories(category: string): string[] {
  const imageData = generateImageData();
  return imageData[category] ? Object.keys(imageData[category]) : [];
}

// Get images for a category and subcategory
export function getImages(category: string, subcategory?: string): string[] {
  const imageData = generateImageData();
  
  if (!imageData[category]) return [];
  
  if (!subcategory || subcategory === 'all') {
    // Return all images from all subcategories
    return Object.values(imageData[category]).flat();
  }
  
  return imageData[category][subcategory] || [];
}