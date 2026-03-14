import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

     return (
          <section id="contact" className="contact" ref={ref}>
               <div className="container">
                    <div className="contact-box">
                         <div className="contact-bg" />

                         <div className="contact-grid">
                              {/* Left: Info */}
                              <motion.div
                                   className="contact-info"
                                   initial={{ opacity: 0, x: -40 }}
                                   animate={inView ? { opacity: 1, x: 0 } : {}}
                                   transition={{ duration: 0.6 }}
                              >
                                   <div className="section-badge">Book Now</div>
                                   <h2 className="section-title">
                                        Ready to Make Your Event <span className="primary-text">Unforgettable?</span>
                                   </h2>
                                   <p className="contact-desc">
                                        Let's discuss how we can elevate your upcoming event in Abu Dhabi with our premium photo booth experience.
                                   </p>

                                   <div className="contact-methods">
                                        <a href="tel:+971564462121" className="cm-item">
                                             <div className="cm-icon">📞</div>
                                             <div className="cm-text">
                                                  <span>Call Us</span>
                                                  <h4>+971 5 6446 2121</h4>
                                             </div>
                                        </a>

                                        <a href="https://wa.me/971564462121" target="_blank" rel="noreferrer" className="cm-item">
                                             <div className="cm-icon">💬</div>
                                             <div className="cm-text">
                                                  <span>WhatsApp</span>
                                                  <h4>Message Us</h4>
                                             </div>
                                        </a>

                                        <a href="mailto:info@partybooth.ae" className="cm-item">
                                             <div className="cm-icon">✉️</div>
                                             <div className="cm-text">
                                                  <span>Email Us</span>
                                                  <h4>info@partybooth.ae</h4>
                                             </div>
                                        </a>
                                   </div>
                              </motion.div>

                              {/* Right: Form */}
                              <motion.div
                                   className="contact-form-wrap"
                                   initial={{ opacity: 0, x: 40 }}
                                   animate={inView ? { opacity: 1, x: 0 } : {}}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                              >
                                   <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                        <h3>Send an Inquiry</h3>

                                        <div className="form-group">
                                             <label>Full Name</label>
                                             <input type="text" placeholder="John Doe" />
                                        </div>

                                        <div className="form-group">
                                             <label>Email / Phone</label>
                                             <input type="text" placeholder="example@email.com or +971..." />
                                        </div>

                                        <div className="form-row">
                                             <div className="form-group">
                                                  <label>Event Type</label>
                                                  <select>
                                                       <option>Wedding</option>
                                                       <option>Corporate</option>
                                                       <option>Birthday</option>
                                                       <option>Graduation</option>
                                                       <option>Other</option>
                                                  </select>
                                             </div>
                                             <div className="form-group">
                                                  <label>Event Date</label>
                                                  <input type="date" />
                                             </div>
                                        </div>

                                        <div className="form-group">
                                             <label>Event Location/Venue</label>
                                             <input type="text" placeholder="e.g. Emirates Palace" />
                                        </div>

                                        <button type="submit" className="btn-primary w-full" style={{ justifyContent: 'center', marginTop: 10 }}>
                                             Get a Free Quote ✨
                                        </button>
                                   </form>
                              </motion.div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
