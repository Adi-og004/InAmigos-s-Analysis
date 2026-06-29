import { useState, useEffect } from 'react';
import axios from 'axios';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
    const [gallery, setGallery] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/gallery`)
            .then(res => setGallery(res.data))
            .catch(err => console.error(err));
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    return (
        <>
            <section className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)', padding: '6rem 0 3rem', color: 'white', textAlign: 'center'}}>
                <div className="container">
                    <h1 style={{fontSize: '3rem', fontWeight: '800', marginBottom: '1rem'}}>Photo Gallery</h1>
                    <p style={{fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto'}}>Glimpses of our impact and activities across various initiatives.</p>
                </div>
            </section>

            <section className="section section-padding">
                <div className="container">
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem'}}>
                        {gallery.map((img, idx) => (
                            <div 
                                key={idx} 
                                className="gallery-item"
                                style={{height: '250px', cursor: 'pointer', borderRadius: 'var(--radius)', overflow: 'hidden'}}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img.src} alt={img.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                <div className="gallery-overlay"><Maximize2 /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)} style={{zIndex: 2000}}>
                    <div 
                        className="modal-content" 
                        onClick={e => e.stopPropagation()} 
                        style={{background: 'transparent', boxShadow: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', maxWidth: '1200px', padding: 0}}
                    >
                        <button 
                            className="modal-close" 
                            onClick={() => setSelectedImage(null)}
                            style={{color: 'white', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', top: '1rem', right: '1rem'}}
                        >
                            <X size={24} />
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.title} style={{maxHeight: '90vh', maxWidth: '100%', objectFit: 'contain', borderRadius: 'var(--radius)'}} />
                    </div>
                </div>
            )}
        </>
    );
}
