
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

// Mock product data
const products = [
  {
    id: '1',
    name: 'Balenciaga Hoodie',
    image: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&q=80&w=687&h=786',
    price: 129.99,
    category: 'Clothing',
    description: 'High-quality replica of the iconic Balenciaga hoodie featuring premium materials and accurate detailing. This 1:1 replica captures the essence of the original design.',
    features: [
      'Premium cotton blend material',
      'Accurate embroidery and logo placement',
      'Oversized fit as per original design',
      'Available in sizes S-XXL'
    ]
  },
  {
    id: '2',
    name: 'Rolex Submariner Watch',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1059&h=786',
    price: 299.99,
    category: 'Watches',
    description: 'This high-quality Rolex Submariner replica features meticulous attention to detail and premium materials. Nearly indistinguishable from the original to the untrained eye.',
    features: [
      'Premium stainless steel construction',
      'Sapphire crystal glass',
      'Automatic movement',
      'Water resistant design'
    ]
  },
  {
    id: '3',
    name: 'Dior Sauvage Cologne',
    image: 'https://images.unsplash.com/photo-1557170334-a9086d09eb4b?auto=format&fit=crop&q=80&w=809&h=786',
    price: 79.99,
    category: 'Cologne',
    description: 'This Dior Sauvage replica cologne offers the signature scent profile at a fraction of the price. Enjoy the long-lasting fragrance with premium ingredients.',
    features: [
      'Similar scent profile to the original',
      'Long-lasting fragrance',
      'Premium glass bottle',
      '100ml size'
    ]
  },
  {
    id: '4',
    name: 'Louis Vuitton Shirt',
    image: 'https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?auto=format&fit=crop&q=80&w=749&h=786',
    price: 89.99,
    category: 'Clothing',
    description: 'This Louis Vuitton replica shirt features accurate patterns and premium materials for a luxury look and feel. The attention to detail is remarkable.',
    features: [
      'Premium cotton material',
      'Accurate pattern placement',
      'Detailed stitching',
      'Regular fit'
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams<{id: string}>();
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen galaxy-bg">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-300 mb-8">The product you are looking for does not exist or has been removed.</p>
          <Button asChild>
            <a href="/shop">Return to Shop</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen galaxy-bg">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-glass rounded-lg overflow-hidden product-glow">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-sm bg-white bg-opacity-10 text-white px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {product.name} <span className="text-gray-400">(Replica)</span>
            </h1>
            <p className="text-2xl font-bold text-white mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <p className="text-gray-300">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Features:</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto flex flex-col space-y-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Buy Now
              </Button>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-white bg-opacity-5 rounded-lg">
              <p className="text-gray-400 text-sm">
                Disclaimer: This product is a high-quality replica and is not an original brand product.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
