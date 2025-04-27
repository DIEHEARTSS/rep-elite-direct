
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen galaxy-bg">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-glass rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-white bg-opacity-10 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">support@diehearts.com</p>
              <p className="text-gray-300">info@diehearts.com</p>
            </div>
            
            <div className="bg-glass rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-white bg-opacity-10 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">Mon-Fri, 9am-5pm EST</p>
            </div>
            
            <div className="bg-glass rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-white bg-opacity-10 p-4 rounded-full mb-4">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Social</h3>
              <p className="text-gray-300">@diehearts_official</p>
              <p className="text-gray-300">DM us for quick responses</p>
            </div>
          </div>
          
          <div className="bg-glass rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="custom">Custom Sourcing Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-white text-black hover:bg-gray-200 px-8 py-2">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          {/* Custom Sourcing Section */}
          <div className="mt-12 bg-glass rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Custom Sourcing</h2>
            <p className="text-gray-300 mb-6">
              Looking for a specific replica that's not in our catalog? We specialize in sourcing hard-to-find replicas.
              Fill out our contact form with details about what you're looking for, and our team will work to find it for you.
            </p>
            <Button asChild>
              <a href="#custom-request" onClick={() => {
                setFormData(prev => ({...prev, subject: 'custom'}));
                document.getElementById('subject')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Request Custom Item
              </a>
            </Button>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-12 p-4 bg-glass rounded-lg text-center">
            <p className="text-gray-300 text-sm">
              Disclaimer: All products sourced by DieHearts are high-quality replicas and are not original brand products.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
