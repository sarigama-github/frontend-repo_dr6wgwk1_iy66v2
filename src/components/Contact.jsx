import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0C0C22] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold md:text-4xl"
        >
          Let’s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-3xl text-white/80"
        >
          Ready to collaborate or just want to say hi? Drop a message or find me on the platforms below.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="mailto:hello@aanshjot.dev"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20">
              <Mail className="h-5 w-5 text-fuchsia-300" />
            </div>
            <div>
              <p className="text-sm text-white/70">Email</p>
              <p className="text-sm font-medium">hello@aanshjot.dev</p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20">
              <Linkedin className="h-5 w-5 text-fuchsia-300" />
            </div>
            <div>
              <p className="text-sm text-white/70">LinkedIn</p>
              <p className="text-sm font-medium">@aanshjot</p>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20">
              <Github className="h-5 w-5 text-fuchsia-300" />
            </div>
            <div>
              <p className="text-sm text-white/70">GitHub</p>
              <p className="text-sm font-medium">aanshjot</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
