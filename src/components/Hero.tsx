
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center galaxy-bg overflow-hidden">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-star-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-shadow">
            Get Your Reps Without the Hassle
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            DieHearts — Premium Rep Clothing, Watches, and Cologne
          </p>
          
          <div className="flex justify-center">
            <Link to="/shop">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 group px-6 py-6 text-lg"
              >
                Start Shopping Reps 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
