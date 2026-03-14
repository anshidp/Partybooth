import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css';
import { assetPath } from '../utils/assetPath';

const features = [
     { icon: '⚡', title: 'Instant Prints', desc: 'Photo prints in under 5 seconds with lab-quality results every time.' },
     { icon: '🎨', title: 'Custom Branding', desc: 'Fully branded booths and templates for corporate events and launches.' },
     { icon: '🌹', title: 'Premium Backdrops', desc: 'Exquisite backdrops, props, and templates for any theme or occasion.' },
     { icon: '🗣️', title: 'Arabic & English', desc: 'Full bilingual support for all guests at your event.' },
     { icon: '👩‍👩‍👧', title: 'Lady Staff', desc: 'Professional event staff in traditional & modern uniforms for extra privacy.' },
     { icon: '📱', title: 'Digital Sharing', desc: 'Instantly share memories via WhatsApp, email, or QR code scan.' },
];

export default function About() {
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

     return (
          <section id="about" className="about" ref={ref}>
               <div className="container">
                    <div className="about-grid">
                         {/* Left: image */}
                         <motion.div
                              className="about-visual"
                              initial={{ opacity: 0, x: -60 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                         >
                              <div className="viz-main">
                                   <img src={assetPath('images/hero.png')} alt="Wedding photo booth" />
                                   <div className="viz-overlay">
                                        <span className="viz-tag">✨ Premium Experience</span>
                                   </div>
                              </div>
                              <div className="viz-secondary">
                                   <img src={assetPath('images/corporate.png')} alt="Corporate event" />
                              </div>
                              <div className="viz-badge">
                                   <span className="viz-badge-num primary-text">500+</span>
                                   <span className="viz-badge-txt">Events</span>
                              </div>
                         </motion.div>

                         {/* Right: text */}
                         <motion.div
                              className="about-text"
                              initial={{ opacity: 0, x: 60 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                         >
                              <div className="section-badge">About Us</div>
                              <h2 className="section-title">
                                   Abu Dhabi's Premier<br />
                                   <span className="primary-text">Photo Booth Experience</span>
                              </h2>
                              <p className="section-subtitle" style={{ marginTop: 16, marginBottom: 32 }}>
                                   Experience the ultimate photobooth rental service tailored for Abu Dhabi's top events —
                                   from grand weddings at Emirates Palace and corporate launches at ADNEC to birthdays at
                                   Saadiyat Beach Club.
                              </p>

                              <div className="features-grid">
                                   {features.map((f, i) => (
                                        <motion.div
                                             key={i}
                                             className="feature-card"
                                             initial={{ opacity: 0, y: 30 }}
                                             animate={inView ? { opacity: 1, y: 0 } : {}}
                                             transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                        >
                                             <span className="feature-icon">{f.icon}</span>
                                             <div>
                                                  <h4 className="feature-title">{f.title}</h4>
                                                  <p className="feature-desc">{f.desc}</p>
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>

                              <motion.a
                                   href="#contact"
                                   className="btn-primary"
                                   style={{ marginTop: 32, display: 'inline-flex' }}
                                   initial={{ opacity: 0 }}
                                   animate={inView ? { opacity: 1 } : {}}
                                   transition={{ delay: 0.9, duration: 0.5 }}
                                   onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                              >
                                   📞 Get In Touch
                              </motion.a>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
