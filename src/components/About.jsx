import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Globe } from 'lucide-react';

const facts = [
  {
    icon: User,
    title: 'Who I Am',
    desc:
      'I\'m AAnshjot Singh — a multidisciplinary developer focused on delightful products, systems thinking, and meaningful impact.',
  },
  {
    icon: Cpu,
    title: 'What I Do',
    desc:
      'I architect full‑stack applications, craft immersive interfaces, and lead product from idea to launch with a strong engineering backbone.',
  },
  {
    icon: Globe,
    title: 'Mission',
    desc:
      'Build technology that feels human — fast, accessible, and elegant. Design with intent, develop with rigor.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0B0B1F] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold md:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-3xl text-white/80"
        >
          I\'m passionate about blending engineering with aesthetic precision. I love exploring
          real‑time graphics, systems design, and scalable architectures.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {facts.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <f.icon className="h-6 w-6 text-fuchsia-400" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
