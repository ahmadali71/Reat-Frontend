import heroKitchenware from '../assets/hero_kitchenware.jpg';
import heroHomeDecor from '../assets/hero_home_decor.jpg';
import heroSale from '../assets/hero_sale.jpg';

import cookwareSet from '../assets/product_cookware_set.jpg';
import cutlerySet from '../assets/product_cutlery_set.jpg';
import spiceJars from '../assets/product_spice_jars.jpg';
import foodChopper from '../assets/product_food_chopper.jpg';
import diningMats from '../assets/product_dining_mats.jpg';
import utensilsSet from '../assets/product_utensils_set.jpg';
import wallPlanters from '../assets/product_wall_planters.jpg';
import oilDispenser from '../assets/product_oil_dispenser.jpg';

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Non-Stick Cookware Set (12 Pcs) - Matte Black & Gold',
    vendor: 'Zahra Luxe',
    price: 14999,
    comparePrice: 19999,
    image: cookwareSet,
    hoverImage: heroKitchenware,
    isSale: true,
    isNew: false,
    category: 'kitchenware',
    rating: 4.9,
    reviewsCount: 48,
    description: 'Elevate your culinary adventures with our flagship 12-piece non-stick cookware set. Features ultra-durable multi-layer stone coating, ergonomic heat-resistant gold handles, and tempered glass lids with steam vents.',
    features: [
      'Multi-layer non-stick coating (100% PFOA Free)',
      'Stay-cool gold electroplated handles',
      'Compatible with induction, gas, electric & ceramic stovetops',
      'Includes 3 casseroles, 1 saucepan, 2 frying pans & silicone utensils'
    ]
  },
  {
    id: 2,
    name: 'Royal Mirror Stainless Steel Cutlery Set (24 Pcs)',
    vendor: 'Zahra Home',
    price: 3499,
    comparePrice: 4299,
    image: cutlerySet,
    hoverImage: heroSale,
    isSale: true,
    isNew: true,
    category: 'kitchenware',
    rating: 4.8,
    reviewsCount: 32,
    description: 'Precision forged from food-grade 18/10 stainless steel with mirror polish finish. Perfectly balanced weight for an exceptional dining experience.',
    features: [
      '18/10 High-grade stainless steel',
      'Mirror finish with rust & corrosion resistance',
      'Service for 6: dinner forks, dinner knives, soup spoons & tea spoons',
      'Dishwasher safe & gift boxed'
    ]
  },
  {
    id: 3,
    name: 'Nordic Ceramic Spice Jar Set with Oak Wood Tier Stand',
    vendor: 'Zahra Decor',
    price: 2499,
    comparePrice: 3199,
    image: spiceJars,
    hoverImage: heroHomeDecor,
    isSale: true,
    isNew: false,
    category: 'home-decor',
    rating: 5.0,
    reviewsCount: 64,
    description: 'Organize your spices with elegance. Set of 9 matte ceramic jars with airtight wooden lids, engraved spice labels, and a 2-tier natural solid oak stand.',
    features: [
      'Lead-free food-safe ceramic jars',
      'Airtight silicone seal wooden lids',
      'Solid oak two-tier spice carousel stand',
      'Moisture-proof & dust-proof design'
    ]
  },
  {
    id: 4,
    name: 'Electric Quick-Pulse Food Chopper & Processor 2.0L',
    vendor: 'Zahra Tech',
    price: 4999,
    comparePrice: 6500,
    image: foodChopper,
    hoverImage: heroKitchenware,
    isSale: true,
    isNew: true,
    category: 'kitchenware',
    rating: 4.9,
    reviewsCount: 89,
    description: 'Heavy-duty 500W pure copper motor with 4 bi-level stainless steel blades. Chops meat, vegetables, nuts and sauces in under 6 seconds.',
    features: [
      '500W Pure Copper High-Torque Motor',
      '2.0L Extra thick BPA-free glass bowl',
      'Dual-speed one-touch pulse control',
      'Overheat protection safety brake system'
    ]
  },
  {
    id: 5,
    name: 'Carrara Marble & Gold Placemat & Coaster Set (6 Pcs)',
    vendor: 'Zahra Decor',
    price: 1499,
    comparePrice: 1999,
    image: diningMats,
    hoverImage: heroHomeDecor,
    isSale: false,
    isNew: false,
    category: 'home-decor',
    rating: 4.7,
    reviewsCount: 27,
    description: 'Add instant luxury to your dining table. Heat-insulated water-resistant table mats with intricate gold geometric inlay on fine marble textures.',
    features: [
      'Thermal insulation up to 100°C',
      'Waterproof, oil-proof & wipe clean in seconds',
      'Non-slip textured backing prevents table scratches',
      'Includes 6 luxury placemats & 6 matching drink coasters'
    ]
  },
  {
    id: 6,
    name: 'Silicone Cooking Utensils Set with Acacia Wood (11 Pcs)',
    vendor: 'Zahra Luxe',
    price: 2999,
    comparePrice: 3800,
    image: utensilsSet,
    hoverImage: heroKitchenware,
    isSale: true,
    isNew: false,
    category: 'kitchenware',
    rating: 4.9,
    reviewsCount: 53,
    description: 'Food-grade heat resistant silicone heads that protect your non-stick pans. Paired with ergonomic natural acacia wood handles that stay cool.',
    features: [
      'BPA-free food grade silicone rated up to 230°C / 446°F',
      'Smooth antibacterial acacia wood handles',
      'Non-scratch protection for luxury cookware',
      'Includes ceramic countertop storage crock'
    ]
  },
  {
    id: 7,
    name: 'Geometric Ceramic Wall Hanging Planters (Pair)',
    vendor: 'Zahra Decor',
    price: 1899,
    comparePrice: 2499,
    image: wallPlanters,
    hoverImage: heroHomeDecor,
    isSale: false,
    isNew: true,
    category: 'home-decor',
    rating: 4.8,
    reviewsCount: 19,
    description: 'Minimalist geometric wall vessels crafted from unglazed matte ceramic. Perfect for indoor succulents, trailing vines, or dried botanical arrangements.',
    features: [
      'High-fired matte finish ceramic',
      'Easy wall-mount hardware included',
      'Ideal for succulents, ivy, herbs & florals',
      'Set of 2 complementary geometric designs'
    ]
  },
  {
    id: 8,
    name: 'Smart Gravity Auto-Flip Olive Oil & Vinegar Dispenser',
    vendor: 'Zahra Luxe',
    price: 1199,
    comparePrice: 1699,
    image: oilDispenser,
    hoverImage: heroSale,
    isSale: true,
    isNew: false,
    category: 'kitchenware',
    rating: 4.9,
    reviewsCount: 71,
    description: 'Ingenious gravity lid automatically opens when tilted and seals shut when upright. Dripless stainless steel spout prevents messy countertops.',
    features: [
      'Automatic gravity-tilting cap design',
      '100% Non-drip stainless steel precision spout',
      'Measurement markings on lead-free borosilicate glass',
      '500ml capacity with wide refill opening'
    ]
  }
];

export {
  heroKitchenware,
  heroHomeDecor,
  heroSale,
  cookwareSet,
  cutlerySet,
  spiceJars,
  foodChopper,
  diningMats,
  utensilsSet,
  wallPlanters,
  oilDispenser
};
