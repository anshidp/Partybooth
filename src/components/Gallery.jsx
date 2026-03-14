import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import { assetPath } from '../utils/assetPath';

const galleryItems = [
     { src: assetPath('images/hero.png'), title: 'Wedding Celebration', loc: 'Yas Island', size: 'large' },
     { src: assetPath('images/corporate.png'), title: 'Corporate Gala', loc: 'Etihad Towers', size: 'small' },
     { src: assetPath('images/birthday.png'), title: 'Birthday Bash', loc: 'Saadiyat Beach Club', size: 'small' },
     { src: assetPath('images/engagement.png'), title: 'Engagement Party', loc: 'Al Raha Beach', size: 'medium' },
     { src: assetPath('images/graduation.png'), title: 'Graduation Event', loc: 'Khalifa University', size: 'medium' },
     { src: assetPath('images/gallery.png'), title: 'Photo Memories', loc: 'Abu Dhabi', size: 'large' },
];

export default function Gallery() {
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
     const [selected, setSelected] = useState(null);

     return (
          <section id="gallery" className="gallery" ref={ref}>
               <div className="container">
                    <motion.div
                         className="section-header"
                         initial={{ opacity: 0, y: 30 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.7 }}
                    >
                         <div className="section-badge">Gallery</div>
                         <h2 className="section-title">
                              Moments That <span className="primary-text">Last Forever</span>
                         </h2>
                         <p className="section-subtitle">
                              A glimpse into the unforgettable memories we've helped create across Abu Dhabi's finest venues.
                         </p>
                    </motion.div>

                    <div className="gallery-grid">
                         {galleryItems.map((item, i) => (
                              <motion.div
                                   key={i}
                                   className={`gallery-item g-${item.size}`}
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   animate={inView ? { opacity: 1, scale: 1 } : {}}
                                   transition={{ delay: i * 0.1, duration: 0.6 }}
                                   onClick={() => setSelected(item)}
                                   whileHover={{ scale: 1.02 }}
                              >
                                   <img src={item.src} alt={item.title} />
                                   <div className="gallery-overlay">
                                        <div className="gallery-info">
                                             <h4 className="gallery-title">{item.title}</h4>
                                             <p className="gallery-loc">📍 {item.loc}</p>
                                        </div>
                                        <div className="gallery-expand">🔍</div>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>

               {/* Lightbox */}
               <AnimatePresence>
                    {selected && (
                         <motion.div
                              className="lightbox"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setSelected(null)}
                         >
                              <motion.div
                                   className="lightbox-inner"
                                   initial={{ scale: 0.8, opacity: 0 }}
                                   animate={{ scale: 1, opacity: 1 }}
                                   exit={{ scale: 0.8, opacity: 0 }}
                                   onClick={(e) => e.stopPropagation()}
                              >
                                   <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
                                   <img src={selected.src} alt={selected.title} />
                                   <div className="lightbox-caption">
                                        <h3>{selected.title}</h3>
                                        <p>📍 {selected.loc}</p>
                                   </div>
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </section>
     );
}
