import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
     {
          icon: '💍',
          title: 'Wedding Celebrations',
          desc: 'Make your special day unforgettable with our luxury wedding photo booth experience. Custom templates, premium backdrops, and instant keepsakes.',
          img: '/images/hero.png',
          tag: 'Most Popular',
          color: '#e8547a',
     },
     {
          icon: '🏢',
          title: 'Corporate Events',
          desc: 'Elevate your brand activation, product launch, or company gala with fully branded, professional booth experiences.',
          img: '/images/corporate.png',
          tag: 'Branded',
          color: '#0891b2',
     },
     {
          icon: '🎂',
          title: 'Birthday Parties',
          desc: "Celebrate life's milestones with vibrant, fun-filled photobooth experiences the whole family will love.",
          img: '/images/birthday.png',
          tag: 'Fun!',
          color: '#f59e0b',
     },
     {
          icon: '🎓',
          title: 'Graduation Events',
          desc: 'Capture those proud graduation moments with a setup that matches the magnitude of the achievement.',
          img: '/images/graduation.png',
          tag: 'Celebratory',
          color: '#7c3aed',
     },
     {
          icon: '💑',
          title: 'Engagements',
          desc: 'Romance and elegance combined. Create dreamy, beautiful memories for your engagement celebration.',
          img: '/images/engagement.png',
          tag: 'Romantic',
          color: '#ec4899',
     },
     {
          icon: '🎊',
          title: 'Cultural Festivities',
          desc: 'From Eid celebrations to cultural galas, our booth supports Arabic & English and adapts to any cultural event.',
          img: '/images/hero.png',
          tag: 'Bilingual',
          color: '#22c55e',
     },
];

export default function Services() {
     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

     return (
          <section id="services" className="services" ref={ref}>
               <div className="container">
                    <motion.div
                         className="section-header"
                         initial={{ opacity: 0, y: 30 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.7 }}
                    >
                         <div className="section-badge">Our Services</div>
                         <h2 className="section-title">
                              Every Event, <span className="primary-text">Perfectly Captured</span>
                         </h2>
                         <p className="section-subtitle">
                              From intimate gatherings to grand celebrations, we bring the perfect photobooth experience to every occasion.
                         </p>
                    </motion.div>

                    <div className="services-grid">
                         {services.map((s, i) => (
                              <motion.div
                                   key={i}
                                   className="service-card"
                                   initial={{ opacity: 0, y: 50 }}
                                   animate={inView ? { opacity: 1, y: 0 } : {}}
                                   transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                              >
                                   <div className="card-img-wrap">
                                        <img src={s.img} alt={s.title} className="card-img" />
                                        <div className="card-tag" style={{ background: s.color }}>{s.tag}</div>
                                        <div className="card-icon-wrap">
                                             <span className="card-icon">{s.icon}</span>
                                        </div>
                                   </div>
                                   <div className="card-body">
                                        <h3 className="card-title">{s.title}</h3>
                                        <p className="card-desc">{s.desc}</p>
                                        <div className="card-action">
                                             <span className="card-link" style={{ color: s.color }}>Learn More →</span>
                                        </div>
                                   </div>
                                   <div className="card-glow" style={{ background: s.color }} />
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
