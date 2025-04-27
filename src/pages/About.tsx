
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen galaxy-bg">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">About DieHearts</h1>
          
          <div className="bg-glass rounded-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              DieHearts was created with a simple mission: to make high-quality replicas accessible without the confusion, 
              risk, and hassle that typically comes with buying reps.
            </p>
            <p className="text-gray-300">
              We believe everyone should be able to enjoy premium fashion, watches, and fragrances without navigating complex agent systems 
              or worrying about customs issues.
            </p>
          </div>
          
          <div className="bg-glass rounded-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The DieHearts Difference</h2>
            <p className="text-gray-300 mb-6">
              What sets us apart is our commitment to transparency, quality, and simplicity:
            </p>
            
            <div className="space-y-4">
              <div className="border border-white border-opacity-10 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">No Agent System</h3>
                <p className="text-gray-300">
                  We eliminate the complex agent services like Pandabuy or Wegobuy. You deal directly with us for a streamlined experience.
                </p>
              </div>
              
              <div className="border border-white border-opacity-10 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Quality Assurance</h3>
                <p className="text-gray-300">
                  Every item is thoroughly inspected before shipping to ensure you receive only the highest quality replicas.
                </p>
              </div>
              
              <div className="border border-white border-opacity-10 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Transparency</h3>
                <p className="text-gray-300">
                  We're always clear about what you're buying. All products are explicitly marked as replicas, with no deception.
                </p>
              </div>
              
              <div className="border border-white border-opacity-10 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Customer Support</h3>
                <p className="text-gray-300">
                  Our team is here to guide you through every step of the process, from selection to delivery.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-glass rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="text-gray-300">
              At DieHearts, we're committed to providing a premium experience from start to finish. We source only the highest quality replicas, 
              handle all the complex logistics, and ensure your items arrive safely at your door.
            </p>
            <p className="text-gray-300 mt-4">
              We believe in the rep community and are dedicated to making it more accessible to everyone who appreciates quality fashion without the luxury price tag.
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-12 p-4 bg-glass rounded-lg text-center">
            <p className="text-gray-300 text-sm">
              Disclaimer: All products sold by DieHearts are high-quality replicas and are not original brand products.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
