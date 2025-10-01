import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Let's Work Together
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" size={24} />
              <a href="mailto:your@email.com" className="hover:text-primary transition">
                your@email.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary" size={24} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" size={24} />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              © 2025 Your Name. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;