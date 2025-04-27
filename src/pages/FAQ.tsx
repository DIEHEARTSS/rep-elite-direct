
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
const faqData = [
  {
    question: "How do I know I'm getting a good quality replica?",
    answer: "All our products go through a rigorous quality check process before shipping. We source from trusted manufacturers who are known for their high-quality replicas, and we personally inspect every item to ensure it meets our standards before sending it to you."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and cryptocurrency payments. All transactions are secure and encrypted for your protection."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 10-15 business days, depending on your location. After we process your order and complete our quality checks, we ship using discreet packaging via reliable courier services."
  },
  {
    question: "Is it legal to buy replicas?",
    answer: "The legality of purchasing replicas varies by country. It's generally legal to purchase replicas for personal use in most countries, but we recommend checking your local laws. DieHearts clearly labels all products as replicas and never claims them to be authentic."
  },
  {
    question: "What happens if my package gets seized by customs?",
    answer: "We take precautions with our shipping methods to minimize the risk of customs issues. In the rare case that a package is seized, we offer a one-time replacement or refund, depending on the circumstances."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 7 days of delivery if there are quality issues that weren't disclosed in the product description. Please contact our customer service team with images of the issue to initiate a return or exchange."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also log into your account on our website to check the status of your order at any time."
  },
  {
    question: "Do you offer custom sourcing for specific replicas?",
    answer: "Yes! If you're looking for a specific item that isn't in our catalog, please contact us through our Custom Sourcing form on the Contact page. We have extensive networks and can often find hard-to-source replicas."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen galaxy-bg">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h1>
          
          <div className="bg-glass rounded-lg p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-white border-opacity-10 rounded-lg overflow-hidden">
                  <AccordionTrigger className="text-white font-semibold px-4 py-4 hover:no-underline hover:bg-white hover:bg-opacity-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 bg-glass rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Please reach out to our customer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="mailto:support@diehearts.com" 
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Email Support
              </a>
            </div>
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

export default FAQ;
