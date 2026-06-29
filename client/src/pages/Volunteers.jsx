import { useState, useEffect } from 'react';
import axios from 'axios';
import { Mail, X, ChevronLeft, ChevronRight } from 'lucide-react';

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Volunteers() {
    const [volunteers, setVolunteers] = useState([]);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const volunteersPerPage = 10;

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/volunteers`)
            .then(res => setVolunteers(res.data))
            .catch(err => console.error(err));
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedVolunteer) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedVolunteer]);

    // Pagination logic
    const totalPages = Math.ceil(volunteers.length / volunteersPerPage);
    const indexOfLast = currentPage * volunteersPerPage;
    const indexOfFirst = indexOfLast - volunteersPerPage;
    const currentVolunteers = volunteers.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)', padding: '6rem 0 3rem', color: 'white', textAlign: 'center'}}>
                <div className="container">
                    <h1 style={{fontSize: '3rem', fontWeight: '800', marginBottom: '1rem'}}>Our Volunteers</h1>
                    <p style={{fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto'}}>Meet the dedicated individuals who make our mission possible.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="volunteers-grid">
                        {currentVolunteers.map(vol => (
                            <div 
                                key={vol.id} 
                                className="volunteer-card" 
                                style={{cursor: 'pointer'}}
                                onClick={() => setSelectedVolunteer(vol)}
                            >
                                <div className="volunteer-image">
                                    <img src={vol.image || 'https://via.placeholder.com/300'} alt={vol.name} />
                                    <div className="volunteer-socials">
                                        {vol.linkedin && <a href={vol.linkedin} onClick={e => e.stopPropagation()} target="_blank" rel="noreferrer"><LinkedinIcon size={18} /></a>}
                                        {vol.email && <a href={`mailto:${vol.email}`} onClick={e => e.stopPropagation()}><Mail size={18} /></a>}
                                    </div>
                                </div>
                                <div className="volunteer-info">
                                    <h4>{vol.name}</h4>
                                    <p>{vol.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="pagination">
                            <button 
                                className="pagination-btn" 
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            
                            {[...Array(totalPages)].map((_, i) => (
                                <button 
                                    key={i} 
                                    className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button 
                                className="pagination-btn" 
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal */}
            {selectedVolunteer && (
                <div className="modal-overlay" onClick={() => setSelectedVolunteer(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedVolunteer(null)}>
                            <X size={28} />
                        </button>
                        
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start', marginTop: '1rem'}}>
                            {/* Left Column - Image & Contact */}
                            <div>
                                <div style={{borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '1.5rem'}}>
                                    <img src={selectedVolunteer.image || 'https://via.placeholder.com/400'} alt={selectedVolunteer.name} style={{width: '100%', height: 'auto', display: 'block'}} />
                                </div>
                                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                                    {selectedVolunteer.linkedin && (
                                        <a href={selectedVolunteer.linkedin} target="_blank" rel="noreferrer" style={{width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <LinkedinIcon size={20} />
                                        </a>
                                    )}
                                    {selectedVolunteer.email && (
                                        <a href={`mailto:${selectedVolunteer.email}`} style={{width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <Mail size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            {/* Right Column - Details */}
                            <div>
                                <h2 className="section-title" style={{marginBottom: '0.5rem', textAlign: 'left'}}>{selectedVolunteer.name}</h2>
                                <h5 style={{color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '600'}}>{selectedVolunteer.role}</h5>
                                
                                {selectedVolunteer.biography && (
                                    <div style={{marginBottom: '2rem'}}>
                                        <h3 style={{fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: '700'}}>About</h3>
                                        <p style={{color: 'var(--secondary)', lineHeight: '1.7', fontSize: '0.95rem'}}>{selectedVolunteer.biography}</p>
                                    </div>
                                )}
                                
                                {selectedVolunteer.skills && selectedVolunteer.skills.length > 0 && (
                                    <div>
                                        <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700'}}>Skills</h3>
                                        {selectedVolunteer.skills.map((skill, index) => (
                                            <div key={index} style={{marginBottom: '0.8rem'}}>
                                                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontWeight: '600', fontSize: '0.9rem'}}>
                                                    <span>{skill.name}</span>
                                                    <span>{skill.value}%</span>
                                                </div>
                                                <div style={{height: '6px', background: '#eee', borderRadius: '3px', overflow: 'hidden'}}>
                                                    <div style={{height: '100%', width: `${skill.value}%`, background: 'var(--primary)', borderRadius: '3px'}}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
