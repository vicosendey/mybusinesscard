import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            About Me
          </h2>
          
          <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              I'm a passionate developer with 5+ years of experience building
              web applications that solve real-world problems. I specialize in
              creating seamless user experiences with modern technologies.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;