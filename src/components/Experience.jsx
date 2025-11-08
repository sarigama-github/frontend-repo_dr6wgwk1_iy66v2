import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const roles = [
  {
    company: 'NovaStack Labs',
    role: 'Founder & Lead Engineer',
    period: '2023 — Present',
    points: [
      'Built and scaled full‑stack platforms with 3D and realtime features.',
      'Led product strategy, design systems, and engineering execution.',
      'Mentored teams on performance, DX, and accessibility best practices.',
    ],
  },
  {
    company: 'Quantum Apps',
    role: 'Senior Frontend Engineer',
    period: '2021 — 2023',
    points: [
      'Shipped high‑fidelity, motion‑rich interfaces in production.',
      'Introduced design tokens and automated visual testing.',
      'Reduced bundle size by 35% with smart code‑splitting.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-[#08081B] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold md:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="mt-10 space-y-6">
          {roles.map((r, idx) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20">
                    <Briefcase className="h-5 w-5 text-fuchsia-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{r.role}</h3>
                    <p className="text-sm text-white/70">{r.company}</p>
                  </div>
                </div>
                <span className="text-sm text-white/60">{r.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-white/85">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
