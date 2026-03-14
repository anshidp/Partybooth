import './Footer.css';

export default function Footer() {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="footer">
               <div className="container">
                    <div className="footer-grid">
                         <div className="footer-brand">
                              <a href="#home" className="logo">
                                   <span className="logo-icon">📸</span>
                                   <span className="logo-text">
                                        Party<span className="primary-text">Booth</span>
                                   </span>
                              </a>
                              <p className="footer-desc">
                                   Abu Dhabi's premier photobooth rental service. Elevating events with instant prints, premium setups, and unforgettable memories.
                              </p>
                              <div className="social-links">
                                   <a href="#" aria-label="Instagram">IG</a>
                                   <a href="#" aria-label="TikTok">TK</a>
                                   <a href="#" aria-label="Facebook">FB</a>
                                   <a href="#" aria-label="WhatsApp">WA</a>
                              </div>
                         </div>

                         <div className="footer-links">
                              <h4>Quick Links</h4>
                              <ul>
                                   <li><a href="#home">Home</a></li>
                                   <li><a href="#about">About Us</a></li>
                                   <li><a href="#services">Our Services</a></li>
                                   <li><a href="#gallery">Gallery</a></li>
                                   <li><a href="#testimonials">Testimonials</a></li>
                              </ul>
                         </div>

                         <div className="footer-contact">
                              <h4>Contact Info</h4>
                              <ul>
                                   <li>📍 Abu Dhabi, UAE</li>
                                   <li>📞 +971 5 6446 2121</li>
                                   <li>✉️ info@partybooth.ae</li>
                                   <li>🕒 Available 24/7</li>
                              </ul>
                         </div>
                    </div>

                    <div className="footer-bottom">
                         <p>&copy; {currentYear} PartyBooth.ae. All rights reserved.</p>
                         <div className="footer-legal">
                              <a href="#">Privacy Policy</a>
                              <a href="#">Terms of Service</a>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
