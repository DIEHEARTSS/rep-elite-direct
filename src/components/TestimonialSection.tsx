
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    text: "DieHearts makes getting high-quality reps so easy. No more dealing with agents or learning how to navigate foreign websites.",
    author: "Alex K."
  },
  {
    id: 2,
    text: "I've been buying reps for years and this is by far the easiest experience I've had. Quality is on point too.",
    author: "Jordan M."
  },
  {
    id: 3,
    text: "Customer service is excellent and the shipping was faster than I expected. Will definitely be ordering again.",
    author: "Taylor S."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <Card key={item.id} className="bg-glass p-6 border-opacity-20 h-full">
              <div className="flex flex-col h-full">
                <blockquote className="text-gray-300 flex-grow">"{item.text}"</blockquote>
                <footer className="mt-4 text-right">
                  <p className="text-white font-medium">— {item.author}</p>
                </footer>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
