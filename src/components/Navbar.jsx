import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
     { label: 'Home', href: '#home' },
     { label: 'About', href: '#about' },
     { label: 'Services', href: '#services' },
     { label: 'Gallery', href: '#gallery' },
     { label: 'Testimonials', href: '#testimonials' },
     { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
     const [scrolled, setScrolled] = useState(false);
     const [menuOpen, setMenuOpen] = useState(false);

     useEffect(() => {
          const onScroll = () => setScrolled(window.scrollY > 60);
          window.addEventListener('scroll', onScroll);
          return () => window.removeEventListener('scroll', onScroll);
     }, []);

     const handleNavClick = (href) => {
          setMenuOpen(false);
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
     };

     return (
          <motion.nav
               className={`navbar ${scrolled ? 'scrolled' : ''}`}
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
          >
               <div className="nav-inner container">
                    <a href="#home" className="logo" onClick={() => handleNavClick('#home')}>
                         <span className="logo-icon">📸</span>
                         <span className="logo-text">
                              Party<span className="primary-text">Booth</span>
                         </span>
                    </a>

                    <ul className="nav-links desktop-links">
                         {navLinks.map((link) => (
                              <li key={link.label}>
                                   <a
                                        href={link.href}
                                        className="nav-link"
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                   >
                                        {link.label}
                                   </a>
                              </li>
                         ))}
                    </ul>

                    <a href="#contact" className="btn-primary nav-cta" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
                         Book Now
                    </a>

                    <button
                         className={`hamburger ${menuOpen ? 'open' : ''}`}
                         onClick={() => setMenuOpen(!menuOpen)}
                         aria-label="Toggle menu"
                         id="mobile-menu-btn"
                    >
                         <span /><span /><span />
                    </button>
               </div>

               <AnimatePresence>
                    {menuOpen && (
                         <motion.div
                              className="mobile-menu"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                         >
                              {navLinks.map((link, i) => (
                                   <motion.a
                                        key={link.label}
                                        href={link.href}
                                        className="mobile-link"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                   >
                                        {link.label}
                                   </motion.a>
                              ))}
                              <a href="#contact" className="btn-primary mobile-cta" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
                                   Book Now
                              </a>
                         </motion.div>
                    )}
               </AnimatePresence>
          </motion.nav>
     );
}
