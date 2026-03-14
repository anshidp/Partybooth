import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import './Testimonials.css';

const testimonials = [
     {
          name: 'Sarah & Khaled',
          role: 'Wedding Clients',
          text: 'PartyBooth made our wedding reception unforgettable! The quality of the prints and the custom gold backdrop perfectly matched our theme. The lady staff was so professional and accommodating to all our guests.',
          rating: 5,
     },
     {
          name: 'Fatima Al Mansoori',
          role: 'Event Coordinator, Etihad',
          text: 'We hired them for our annual corporate gala and they delivered beyond expectations. The branded photo templates and digital sharing features were a huge hit with our executives.',
          rating: 5,
     },
     {
          name: 'Ahmed & Family',
          role: 'Birthday Celebration',
          text: 'Booked them for my daughter\'s 16th birthday. The kids loved the fun props and instant prints. Excellent service from start to finish, highly recommended in Abu Dhabi!',
          rating: 5,
     },
     {
          name: 'Zayed University',
          role: 'Graduation Committee',
          text: 'The best photo booth vendor we have worked with. Reliable, high-tech, and the photos looked like studio portraits. Thank you PartyBooth team!',
          rating: 5,
     }
];

export default function Testimonials() {
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

     return (
          <section id="testimonials" className="testimonials" ref={ref}>
               <div className="container">
                    <div className="testimonials-inner">
                         <motion.div
                              className="test-content"
                              initial={{ opacity: 0, x: -50 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.7 }}
                         >
                              <div className="section-badge">Testimonials</div>
                              <h2 className="section-title">
                                   Loved by <span className="primary-text">Hundreds</span>
                              </h2>
                              <p className="section-subtitle">
                                   Don't just take our word for it. Here's what our wonderful clients have to say about their PartyBooth experience.
                              </p>

                              <div className="test-stats">
                                   <div className="ts-item">
                                        <span className="ts-val primary-text">100%</span>
                                        <span className="ts-lbl">Satisfaction</span>
                                   </div>
                                   <div className="ts-item">
                                        <span className="ts-val primary-text">5/5</span>
                                        <span className="ts-lbl">Google Ratings</span>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              className="test-slider-wrap"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.7, delay: 0.2 }}
                         >
                              <Swiper
                                   effect={'cards'}
                                   grabCursor={true}
                                   modules={[EffectCards, Pagination, Autoplay]}
                                   pagination={{ clickable: true, dynamicBullets: true }}
                                   autoplay={{ delay: 4000, disableOnInteraction: false }}
                                   className="test-swiper"
                              >
                                   {testimonials.map((t, i) => (
                                        <SwiperSlide key={i} className="test-slide">
                                             <div className="quote-mark">"</div>
                                             <div className="stars">
                                                  {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                                             </div>
                                             <p className="test-text">{t.text}</p>
                                             <div className="test-author">
                                                  <div className="test-avatar">{t.name.charAt(0)}</div>
                                                  <div>
                                                       <h4>{t.name}</h4>
                                                       <span>{t.role}</span>
                                                  </div>
                                             </div>
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
}
