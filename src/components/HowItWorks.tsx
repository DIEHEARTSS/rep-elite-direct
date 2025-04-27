
import { Package, CreditCard, ShoppingCart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'Shop Your Rep',
      description: 'Browse our extensive catalog of high-quality replica products.',
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Pay Securely',
      description: 'Fast, secure payment with multiple options available.',
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Delivered to Your Door',
      description: 'No agents, no drama. Just your order shipped directly to you.',
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item relative bg-glass rounded-lg p-6 text-center transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
