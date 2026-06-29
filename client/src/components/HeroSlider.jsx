import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    { bg: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg', subtitle: 'BachpanSala', title: 'Nurturing Young Minds,<br>Building Bright Futures' },
    { bg: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg', subtitle: 'Udaan', title: 'Soaring Towards<br>a Brighter Future' },
    { bg: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg', subtitle: 'Jeev', title: 'Empowering Lives,<br>Spreading Compassion' },
    { bg: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg', subtitle: 'Sewa', title: 'Serving Humanity<br>with Compassion' },
    { bg: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg', subtitle: 'Prakriti', title: 'Plant for a<br>Better Tomorrow' },
    { bg: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg', subtitle: 'Vikas', title: 'Enhancing Employability,<br>Empowering Communities' }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

    return (
        <section className="hero-slider" id="home">
            <div className="slides-wrapper">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === current ? 'active' : ''}`} style={{ backgroundImage: `url('${slide.bg}')` }}>
                        <div className="slide-overlay"></div>
                        <div className="container slide-content">
                            <h5 className="hero-subtitle">{slide.subtitle}</h5>
                            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="slider-btn slider-prev" onClick={prevSlide} aria-label="Previous Slide"><ChevronLeft /></button>
            <button className="slider-btn slider-next" onClick={nextSlide} aria-label="Next Slide"><ChevronRight /></button>
            
            <div className="slider-dots">
                {slides.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`dot ${idx === current ? 'active' : ''}`} 
                        onClick={() => setCurrent(idx)}
                    ></div>
                ))}
            </div>
        </section>
    );
}
