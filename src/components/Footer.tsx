
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-md border-t border-white border-opacity-10 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DIE<span className="text-red-500">HEARTS</span></h3>
            <p className="text-sm text-gray-400">
              Premium replica clothing, watches, and cologne without the hassle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/clothing" className="text-sm text-gray-400 hover:text-white transition-colors">Clothing</Link></li>
              <li><Link to="/shop/watches" className="text-sm text-gray-400 hover:text-white transition-colors">Watches</Link></li>
              <li><Link to="/shop/colognes" className="text-sm text-gray-400 hover:text-white transition-colors">Colognes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DieHearts. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center">
            Disclaimer: All products on this website are high-quality replicas and are not original brand products.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
