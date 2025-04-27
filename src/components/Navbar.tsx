
import { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50 border-b border-white border-opacity-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white text-xl font-bold tracking-wider">DIE<span className="text-red-500">HEARTS</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/shop" className="text-white hover:text-gray-300 transition-colors">Shop</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">About</Link>
            <Link to="/faq" className="text-white hover:text-gray-300 transition-colors">FAQ</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/shop" className="text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/faq" className="text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/account" className="text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsOpen(false)}>Account</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
