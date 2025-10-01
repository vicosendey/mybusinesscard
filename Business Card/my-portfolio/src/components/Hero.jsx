import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Your Name
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          
          <div className="flex gap-6 justify-center mb-8">
            <a href="https://github.com" className="hover:text-primary transition">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="hover:text-primary transition">
              <Linkedin size={28} />
            </a>
            <a href="https://twitter.com" className="hover:text-primary transition">
              <Twitter size={28} />
            </a>
            <a href="mailto:your@email.com" className="hover:text-primary transition">
              <Mail size={28} />
            </a>
          </div>
          
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition transform hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;