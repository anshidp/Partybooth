import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const floatingImages = [
     { src: '/images/hero.png', className: 'fi fi-1', delay: 0 },
     { src: '/images/corporate.png', className: 'fi fi-2', delay: 0.3 },
     // { src: '/images/birthday.png', className: 'fi fi-3', delay: 0.6 },
     { src: '/images/graduation.png', className: 'fi fi-4', delay: 0.9 },
];

const stats = [
     { value: '500+', label: 'Events Covered' },
     { value: '15K+', label: 'Happy Guests' },
     { value: '5★', label: 'Avg. Rating' },
     { value: '48hr', label: 'Lead Time' },
];

export default function Hero() {
     const particlesRef = useRef(null);

     useEffect(() => {
          const container = particlesRef.current;
          if (!container) return;
          for (let i = 0; i < 30; i++) {
               const p = document.createElement('div');
               p.className = 'particle';
               p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 4}s;
        animation-duration: ${3 + Math.random() * 4}s;
        width: ${2 + Math.random() * 4}px;
        height: ${2 + Math.random() * 4}px;
        opacity: ${0.2 + Math.random() * 0.5};
      `;
               container.appendChild(p);
          }
     }, []);

     return (
          <section id="home" className="hero">
               <div className="hero-bg" />
               <div className="particles" ref={particlesRef} />

               {/* Floating images */}
               <div className="floating-images">
                    {floatingImages.map((img, i) => (
                         <motion.div
                              key={i}
                              className={img.className}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: img.delay + 0.5, duration: 0.8, ease: 'easeOut' }}
                         >
                              <img src={img.src} alt="Event" />
                         </motion.div>
                    ))}
               </div>

               <div className="hero-content container">
                    <motion.div
                         className="hero-badge"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2, duration: 0.6 }}
                    >
                         <span className="badge-dot" />
                         Abu Dhabi's #1 Photo Booth Service
                    </motion.div>

                    <motion.h1
                         className="hero-title"
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                    >
                         Create <span className="primary-text">Picture Perfect</span>
                         <br />
                         <span className="script-text">Memories</span>
                    </motion.h1>

                    <motion.p
                         className="hero-desc"
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.6, duration: 0.8 }}
                    >
                         Premium photo booth rentals for weddings, corporate events, birthdays & more.
                         Instant prints, branded booths, and unforgettable experiences.
                    </motion.p>

                    <motion.div
                         className="hero-actions"
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.8, duration: 0.8 }}
                    >
                         <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                              📸 Book Your Booth
                         </a>
                         <a href="#gallery" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>
                              View Gallery
                         </a>
                    </motion.div>

                    <motion.div
                         className="hero-stats"
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 1.0, duration: 0.8 }}
                    >
                         {stats.map((s, i) => (
                              <div className="stat" key={i}>
                                   <div className="stat-value primary-text">{s.value}</div>
                                   <div className="stat-label">{s.label}</div>
                              </div>
                         ))}
                    </motion.div>
               </div>

               <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
               >
                    <div className="scroll-line" />
                    <span>Scroll</span>
               </motion.div>
          </section>
     );
}
