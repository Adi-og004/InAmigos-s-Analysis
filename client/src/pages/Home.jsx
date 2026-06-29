import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HeartHandshake, Users, UserPlus, MapPin, Heart, Gift, Calendar, ArrowRight, Maximize2 } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
    const [events, setEvents] = useState([]);
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/events`)
            .then(res => setEvents(res.data))
            .catch(err => console.error(err));
            
        axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/gallery`)
            .then(res => setGallery(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <HeroSlider />

            <div style={{ position: 'relative', zIndex: 10, backgroundColor: 'var(--light)', boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
            {/* Features Section */}
            <section className="features">
                <div className="container features-container">
                    <a href="https://rzp.io/l/kWQ87HP" target="_blank" rel="noreferrer" className="feature-card">
                        <div className="feature-icon-wrapper">
                            <HeartHandshake />
                        </div>
                        <h3>Donate Now</h3>
                        <p>Make a Difference with Your Donation Today</p>
                    </a>
                    
                    <a href="https://forms.gle/AB4c1hLaDDmtrKGU7" target="_blank" rel="noreferrer" className="feature-card">
                        <div className="feature-icon-wrapper">
                            <Users />
                        </div>
                        <h3>Become A Volunteer</h3>
                        <p>Join Us and Be the Change You Wish to See</p>
                    </a>
                    
                    <Link to="/volunteers" className="feature-card">
                        <div className="feature-icon-wrapper">
                            <UserPlus />
                        </div>
                        <h3>Join Us</h3>
                        <p>Step in, stand out, and create impact</p>
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="about section-padding" id="about">
                <div className="container about-container">
                    <div className="about-content">
                        <h2 className="section-title">Get to Know Us Better</h2>
                        <div className="about-text">
                            <p><strong>InAmigos Foundation</strong>, founded in 2020 by Mr. Govind Shukla, is a Section 8 non-profit based in Chhattisgarh. We hold <strong>80G, 12A, CSR-1, NITI Aayog</strong> registrations and <strong>ISO 9001:2015</strong> certification — ensuring full transparency and accountability.</p>
                            
                            <ul className="about-initiatives">
                                <li><strong>Seva</strong> – Food & clothing for the underprivileged</li>
                                <li><strong>Bachpanshala</strong> – Quality education for children</li>
                                <li><strong>Jeev</strong> – Animal welfare & rescue</li>
                                <li><strong>Udaan</strong> – Women empowerment</li>
                                <li><strong>Prakriti</strong> – Environmental conservation</li>
                                <li><strong>Vikas</strong> – Skill development & employability</li>
                            </ul>

                            <p>Every contribution fuels our mission — food, education, empowerment, and sustainability across India. <strong>Together, we create a more inclusive and compassionate society.</strong></p>
                        </div>
                        <Link to="/about" className="btn btn-primary">Let's Know More</Link>
                    </div>
                    <div className="about-image">
                        <div className="image-wrapper">
                            <img src="https://inamigosfoundation.org.in/public/storage/settings/1738236437.jpg" alt="About InAmigos Foundation" />
                        </div>
                        <div className="about-image-accent">
                            <img src="https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg" alt="InAmigos Volunteers" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Causes Section */}
            <section className="causes bg-light" id="causes">
                <div className="container text-center section-padding" style={{paddingBottom: '4rem'}}>
                    <h2 className="section-title text-center">Our Causes</h2>
                    <p className="section-subtitle" style={{marginBottom: 0}}>Support the initiatives that resonate with you</p>
                </div>

                <div className="achievements" style={{backgroundImage: "url('https://inamigosfoundation.org.in/public/storage/settings/169090863311.jpg')"}}>
                    <div className="achievements-overlay"></div>
                    <div className="container achievements-container">
                        <div className="counter-box">
                            <div className="counter-icon"><Users /></div>
                            <AnimatedCounter target={200} suffix="+" />
                            <h6 className="counter-label">Our Volunteers</h6>
                        </div>
                        <div className="counter-box">
                            <div className="counter-icon"><MapPin /></div>
                            <AnimatedCounter target={28} />
                            <h6 className="counter-label">States</h6>
                        </div>
                        <div className="counter-box">
                            <div className="counter-icon"><Heart /></div>
                            <AnimatedCounter target={6} />
                            <h6 className="counter-label">Our Causes</h6>
                        </div>
                        <div className="counter-box">
                            <div className="counter-icon"><Gift /></div>
                            <AnimatedCounter target={50000} suffix="+" />
                            <h6 className="counter-label">Beneficiaries</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="events section-padding" id="events">
                <div className="container">
                    <h2 className="section-title text-center">Our Events</h2>
                    <p className="section-subtitle text-center" style={{color: 'var(--secondary)', marginBottom: '3rem'}}>Join us in our upcoming events and activities</p>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                        {events.map((evt, idx) => (
                            <div key={idx} style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', transition: 'var(--transition)'}} className="event-card-hover">
                                <div style={{position: 'relative'}}>
                                    <img src={evt.image} alt={evt.title} style={{width: '100%', height: '250px', objectFit: 'cover'}} />
                                    <span style={{position: 'absolute', top: '1rem', left: '1rem', background: 'var(--primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: '600'}}>{evt.category}</span>
                                </div>
                                <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '600'}}>
                                        <Calendar size={18} />
                                        <span>{evt.date}</span>
                                    </div>
                                    <h4 style={{fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', lineHeight: '1.4'}}>
                                        <a href={evt.link} target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>{evt.title}</a>
                                    </h4>
                                    <p style={{color: 'var(--secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem'}}>{evt.description}</p>
                                    <a href={evt.link} target="_blank" rel="noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', textTransform: 'uppercase', fontSize: '0.9rem'}}>
                                        Read More <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery section-padding" id="gallery">
                <div className="container">
                    <h2 className="section-title text-center">Our Gallery</h2>
                    <p className="section-subtitle text-center" style={{marginBottom: '3rem'}}>Glimpses of our impact and activities</p>
                    
                    <div className="gallery-grid">
                        {gallery.slice(0, 5).map((img, idx) => (
                            <Link to="/gallery" key={idx} className={`gallery-item ${idx === 0 ? 'large' : (idx === 4 ? 'wide' : '')}`}>
                                <img src={img.src} alt={img.title} />
                                <div className="gallery-overlay"><Maximize2 /></div>
                            </Link>
                        ))}
                    </div>
                    
                    <div className="view-all-wrapper" style={{marginTop: '3rem', textAlign: 'center'}}>
                        <Link to="/gallery" className="btn btn-outline">View Complete Gallery</Link>
                    </div>
                </div>
            </section>
            </div>
        </>
    );
}
