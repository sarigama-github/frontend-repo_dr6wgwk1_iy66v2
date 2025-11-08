import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#07071A] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient veil to improve text contrast without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07071A]/40 via-[#07071A]/30 to-[#07071A]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-wide backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          Crafting next‑gen digital experiences
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-4xl font-bold leading-tight md:text-6xl"
        >
          AAnshjot Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-center text-base text-white/80 md:text-lg"
        >
          Builder, technologist, and design‑driven engineer. I blend 3D, motion, and robust
          engineering to ship beautiful, performant products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-transform hover:scale-[1.02]"
          >
            Let’s work together
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
