import React from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#07071A] text-white">
      <Hero3D />
      <About />
      <Experience />
      <Contact />
      <footer className="border-t border-white/10 bg-[#0B0B1F] py-8 text-center text-white/60">
        © {new Date().getFullYear()} AAnshjot Singh — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
