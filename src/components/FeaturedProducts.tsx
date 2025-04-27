
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data for featured products
const featuredProducts = [
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
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Products</h2>
          <Link to="/shop">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
