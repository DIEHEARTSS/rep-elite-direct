
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

// Mock product data
const allProducts = [
  {
    id: '1',
    name: 'Balenciaga Hoodie',
    image: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&q=80&w=687&h=786',
    price: 129.99,
    category: 'Clothing'
  },
  {
    id: '2',
    name: 'Rolex Submariner Watch',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1059&h=786',
    price: 299.99,
    category: 'Watches'
  },
  {
    id: '3',
    name: 'Dior Sauvage Cologne',
    image: 'https://images.unsplash.com/photo-1557170334-a9086d09eb4b?auto=format&fit=crop&q=80&w=809&h=786',
    price: 79.99,
    category: 'Cologne'
  },
  {
    id: '4',
    name: 'Louis Vuitton Shirt',
    image: 'https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?auto=format&fit=crop&q=80&w=749&h=786',
    price: 89.99,
    category: 'Clothing'
  },
  {
    id: '5',
    name: 'Off-White T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=880&h=786',
    price: 69.99,
    category: 'Clothing'
  },
  {
    id: '6',
    name: 'Audemars Piguet Watch',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1974&h=786',
    price: 349.99,
    category: 'Watches'
  },
  {
    id: '7',
    name: 'Tom Ford Cologne',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=880&h=786',
    price: 89.99,
    category: 'Cologne'
  },
  {
    id: '8',
    name: 'Supreme Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=687&h=786',
    price: 109.99,
    category: 'Clothing'
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredProducts = activeCategory 
    ? allProducts.filter(product => product.category === activeCategory) 
    : allProducts;

  return (
    <div className="min-h-screen galaxy-bg">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Shop Premium Replicas</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button 
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            className={activeCategory === null ? "bg-white text-black" : "text-white border-white"}
          >
            All Products
          </Button>
          <Button 
            variant={activeCategory === 'Clothing' ? "default" : "outline"}
            onClick={() => setActiveCategory('Clothing')}
            className={activeCategory === 'Clothing' ? "bg-white text-black" : "text-white border-white"}
          >
            Clothing
          </Button>
          <Button 
            variant={activeCategory === 'Watches' ? "default" : "outline"}
            onClick={() => setActiveCategory('Watches')}
            className={activeCategory === 'Watches' ? "bg-white text-black" : "text-white border-white"}
          >
            Watches
          </Button>
          <Button 
            variant={activeCategory === 'Cologne' ? "default" : "outline"}
            onClick={() => setActiveCategory('Cologne')}
            className={activeCategory === 'Cologne' ? "bg-white text-black" : "text-white border-white"}
          >
            Cologne
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No products found in this category.</p>
          </div>
        )}
        
        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-glass rounded-lg text-center">
          <p className="text-gray-300 text-sm">
            Disclaimer: All products on this page are high-quality replicas and are not original brand products.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
