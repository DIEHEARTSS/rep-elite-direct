
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
}

const ProductCard = ({ id, name, image, price, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden bg-glass product-glow border-opacity-20 animate-float h-full">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 px-2 py-1 text-xs uppercase tracking-wider">
            {category}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-white">{name} <span className="text-gray-400">(Replica)</span></h3>
          <p className="mt-1 font-bold text-white">${price.toFixed(2)}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
