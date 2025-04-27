
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen galaxy-bg">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Oops! This page has vanished into the galaxy.
        </p>
        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
