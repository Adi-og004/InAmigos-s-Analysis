import { ShieldCheck, Award, HeartHandshake, MapPin, Users, Activity, BookOpen, Heart, Leaf, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)', padding: '6rem 0 3rem', color: 'white', textAlign: 'center'}}>
                <div className="container">
                    <h1 style={{fontSize: '3rem', fontWeight: '800', marginBottom: '1rem'}}>About Us</h1>
                    <p style={{fontSize: '1.1rem', opacity: '0.9', maxWidth: '700px', margin: '0 auto'}}>
                        Committed to creating lasting social impact across India.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section section-padding">
                <div className="container">
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
                        <div>
                            <h2 className="section-title" style={{marginBottom: '1.5rem', textAlign: 'left'}}>Who We Are</h2>
                            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)', marginBottom: '1.5rem'}}>
                                <strong>InAmigos Foundation</strong>, founded on September 23, 2020, by Mr. Govind Shukla (Founder & CEO), is a Section 8 registered non-profit organization committed to creating lasting social impact.
                            </p>
                            <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)', marginBottom: '2rem'}}>
                                With its base in Chhattisgarh, the foundation operates across India, addressing critical societal issues through a network of dedicated professionals and volunteers. We believe in the power of collective action, and our transparent operations enable us to bring real, measurable change to society.
                            </p>
                            <Link to="/volunteers" className="btn btn-primary">Meet Our Team</Link>
                        </div>
                        <div style={{position: 'relative'}}>
                            <img src="https://inamigosfoundation.org.in/public/storage/settings/1738236437.jpg" alt="Our Team" style={{width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)'}} />
                            <div style={{position: 'absolute', bottom: '-20px', left: '-20px', background: 'white', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{margin: 0, fontSize: '1.2rem', fontWeight: '700'}}>Based in</h4>
                                    <p style={{margin: 0, color: 'var(--secondary)'}}>Chhattisgarh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="section bg-light" style={{padding: '5rem 0'}}>
                <div className="container">
                    <h2 className="section-title text-center" style={{marginBottom: '3rem'}}>Our Credentials & Recognitions</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
                        <div className="feature-card" style={{textAlign: 'left', padding: '2rem'}}>
                            <ShieldCheck size={32} color="var(--primary)" style={{marginBottom: '1rem'}} />
                            <h4 style={{marginBottom: '0.5rem', fontWeight: '700'}}>Section 8 Registered</h4>
                            <p style={{fontSize: '0.95rem', color: 'var(--secondary)'}}>Licensed by the Central Government</p>
                        </div>
                        <div className="feature-card" style={{textAlign: 'left', padding: '2rem'}}>
                            <HeartHandshake size={32} color="var(--primary)" style={{marginBottom: '1rem'}} />
                            <h4 style={{marginBottom: '0.5rem', fontWeight: '700'}}>80G & 12A Certified</h4>
                            <p style={{fontSize: '0.95rem', color: 'var(--secondary)'}}>Ensuring transparency, accountability, and tax exemptions for donors</p>
                        </div>
                        <div className="feature-card" style={{textAlign: 'left', padding: '2rem'}}>
                            <Users size={32} color="var(--primary)" style={{marginBottom: '1rem'}} />
                            <h4 style={{marginBottom: '0.5rem', fontWeight: '700'}}>CSR-1 Registered</h4>
                            <p style={{fontSize: '0.95rem', color: 'var(--secondary)'}}>Eligible for corporate CSR partnerships</p>
                        </div>
                        <div className="feature-card" style={{textAlign: 'left', padding: '2rem'}}>
                            <Activity size={32} color="var(--primary)" style={{marginBottom: '1rem'}} />
                            <h4 style={{marginBottom: '0.5rem', fontWeight: '700'}}>NITI Aayog Registered</h4>
                            <p style={{fontSize: '0.95rem', color: 'var(--secondary)'}}>Aligning with national development goals</p>
                        </div>
                        <div className="feature-card" style={{textAlign: 'left', padding: '2rem'}}>
                            <Award size={32} color="var(--primary)" style={{marginBottom: '1rem'}} />
                            <h4 style={{marginBottom: '0.5rem', fontWeight: '700'}}>ISO 9001:2015</h4>
                            <p style={{fontSize: '0.95rem', color: 'var(--secondary)'}}>Committed to maintaining high-quality standards</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Initiatives Section */}
            <section className="section" style={{padding: '5rem 0'}}>
                <div className="container">
                    <h2 className="section-title text-center" style={{marginBottom: '1rem'}}>Our Key Initiatives & Impact</h2>
                    <p className="text-center" style={{color: 'var(--secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem'}}>
                        Through our transparent operations and strong partnerships, we aim to bring real, measurable change.
                    </p>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                        
                        <div style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)'}}>
                            <div style={{padding: '2rem'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <Heart size={28} color="var(--primary)" />
                                    <h3 style={{margin: 0, fontWeight: '700'}}>Project SEVA</h3>
                                </div>
                                <p style={{color: 'var(--text-color)', lineHeight: '1.6'}}>Over <strong>50,000+ meals and clothing</strong> distributed to the underprivileged.</p>
                            </div>
                        </div>

                        <div style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)'}}>
                            <div style={{padding: '2rem'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <BookOpen size={28} color="var(--primary)" />
                                    <h3 style={{margin: 0, fontWeight: '700'}}>Project BACHPANSHALA</h3>
                                </div>
                                <p style={{color: 'var(--text-color)', lineHeight: '1.6'}}>Bridging educational gaps by training underprivileged children in basic digital literacy, life skills, and school education support.</p>
                            </div>
                        </div>

                        <div style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)'}}>
                            <div style={{padding: '2rem'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <HeartHandshake size={28} color="var(--primary)" />
                                    <h3 style={{margin: 0, fontWeight: '700'}}>Project JEEV</h3>
                                </div>
                                <p style={{color: 'var(--text-color)', lineHeight: '1.6'}}>Dedicated to animal welfare, feeding <strong>50+ stray animals daily</strong> through our extensive volunteer network.</p>
                            </div>
                        </div>

                        <div style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)'}}>
                            <div style={{padding: '2rem'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <Users size={28} color="var(--primary)" />
                                    <h3 style={{margin: 0, fontWeight: '700'}}>Project UDAAN</h3>
                                </div>
                                <p style={{color: 'var(--text-color)', lineHeight: '1.6'}}>Empowering women by collaborating with self-help groups in rural areas, promoting financial independence, skill development, and menstrual hygiene awareness.</p>
                            </div>
                        </div>

                        <div style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)'}}>
                            <div style={{padding: '2rem'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <Leaf size={28} color="var(--primary)" />
                                    <h3 style={{margin: 0, fontWeight: '700'}}>Project PRAKRITI</h3>
                                </div>
                                <p style={{color: 'var(--text-color)', lineHeight: '1.6'}}>Advocating for sustainability and environmental conservation by planting <strong>20,000+ saplings</strong> and supporting eco-friendly agriculture.</p>
                            </div>
                        </div>

                        <div style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)'}}>
                            <div style={{padding: '2rem'}}>
                                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                                    <Briefcase size={28} color="var(--primary)" />
                                    <h3 style={{margin: 0, fontWeight: '700'}}>Project VIKAS</h3>
                                </div>
                                <p style={{color: 'var(--text-color)', lineHeight: '1.6'}}>Facilitating employment and skill development through internships. We have trained <strong>30,000+ interns</strong> in the last four years in data operations, finance, research, and more.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{background: 'var(--primary)', color: 'white', padding: '5rem 0', textAlign: 'center'}}>
                <div className="container">
                    <h2 style={{fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem'}}>Join Us in Making a Difference</h2>
                    <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2.5rem', opacity: '0.9', lineHeight: '1.8'}}>
                        Whether through volunteering, partnerships, or donations, every contribution strengthens our cause and enables us to expand our reach and impact. Together, we can build a more inclusive, compassionate, and empowered society.
                    </p>
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                        <a href="https://rzp.io/l/kWQ87HP" target="_blank" rel="noreferrer" className="btn" style={{background: 'white', color: 'var(--primary)'}}>Donate Today</a>
                        <Link to="/volunteers" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Become a Volunteer</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
