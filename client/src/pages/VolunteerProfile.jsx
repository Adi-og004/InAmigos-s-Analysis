
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Mail, ArrowLeft } from 'lucide-react';

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function VolunteerProfile() {
    const { id } = useParams();
    const [volunteer, setVolunteer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/volunteers/${id}`)
            .then(res => {
                setVolunteer(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="section container" style={{textAlign: 'center'}}>Loading profile...</div>;
    if (!volunteer) return <div className="section container" style={{textAlign: 'center'}}><h2>Volunteer Not Found</h2><Link to="/volunteers" className="btn btn-primary" style={{marginTop: '1rem'}}>Back to Volunteers</Link></div>;

    return (
        <section className="section" style={{paddingTop: '6rem'}}>
            <div className="container">
                <Link to="/volunteers" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none'}}>
                    <ArrowLeft size={20} /> Back to Volunteers
                </Link>
                
                <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start'}}>
                    {/* Left Column - Image & Contact */}
                    <div>
                        <div style={{borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '2rem'}}>
                            <img src={volunteer.image || 'https://via.placeholder.com/400'} alt={volunteer.name} style={{width: '100%', height: 'auto', display: 'block'}} />
                        </div>
                        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                            {volunteer.linkedin && (
                                <a href={volunteer.linkedin} target="_blank" rel="noreferrer" style={{width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <LinkedinIcon size={20} />
                                </a>
                            )}
                            {volunteer.email && (
                                <a href={`mailto:${volunteer.email}`} style={{width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Mail size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                    
                    {/* Right Column - Details */}
                    <div>
                        <h2 className="section-title" style={{marginBottom: '0.5rem'}}>{volunteer.name}</h2>
                        <h5 style={{color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '2rem', fontWeight: '600'}}>{volunteer.role}</h5>
                        
                        {volunteer.biography && (
                            <div style={{marginBottom: '3rem'}}>
                                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700'}}>About</h3>
                                <p style={{color: 'var(--secondary)', lineHeight: '1.8'}}>{volunteer.biography}</p>
                            </div>
                        )}
                        
                        {volunteer.skills && volunteer.skills.length > 0 && (
                            <div>
                                <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700'}}>Skills</h3>
                                {volunteer.skills.map((skill, index) => (
                                    <div key={index} style={{marginBottom: '1rem'}}>
                                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: '600'}}>
                                            <span>{skill.name}</span>
                                            <span>{skill.value}%</span>
                                        </div>
                                        <div style={{height: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden'}}>
                                            <div style={{height: '100%', width: `${skill.value}%`, background: 'var(--primary)', borderRadius: '4px'}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
