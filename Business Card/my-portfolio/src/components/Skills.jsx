import { motion } from 'framer-motion';
import { Code2, Palette, Database, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code2 size={40} />,
      title: 'Frontend Development',
      description: 'React, Vue, Next.js, Tailwind CSS'
    },
    {
      icon: <Database size={40} />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design'
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Optimization, SEO, Best Practices'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
          What I Do
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;