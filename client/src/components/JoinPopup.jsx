import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export default function JoinPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        profession: ''
    });

    useEffect(() => {
        // Check if the user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem('hasSeenJoinPopup');
        
        if (!hasSeenPopup) {
            // Show popup shortly after page load
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenJoinPopup', 'true');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to the server
        console.log('Form Submitted:', formData);
        setIsOpen(false);
        alert('Thank you for your interest! We will contact you soon.');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" style={{ zIndex: 9999 }}>
            <div className="modal-content" style={{ maxWidth: '500px', padding: '2rem' }}>
                <button 
                    className="modal-close" 
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                >
                    <X />
                </button>
                
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Join Us Today!</h2>
                    <p style={{ color: 'var(--secondary)' }}>Become a part of the InAmigos Foundation and help us make a difference.</p>
                </div>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Full Name *" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div>
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="Phone Number *" 
                            required 
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email Address *" 
                            required 
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="address"
                            placeholder="Address" 
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="profession"
                            placeholder="Profession" 
                            value={formData.profession}
                            onChange={handleChange}
                            className="form-control"
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', width: '100%' }}>
                        Join Now <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
}
