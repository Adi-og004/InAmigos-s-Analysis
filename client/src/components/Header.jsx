import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
        <div className="container header-container">
            <Link to="/" className="logo">
                <img src="https://inamigosfoundation.org.in/public/storage/settings/174421468011.jpg" alt="InAmigos Foundation" />
            </Link>
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/volunteers" className={location.pathname.startsWith('/volunteer') ? 'active' : ''} onClick={closeMenu}>Volunteers</Link></li>
                    <li><a href="/#causes" onClick={closeMenu}>Causes</a></li>
                    <li><a href="/#events" onClick={closeMenu}>Events</a></li>
                    <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={closeMenu}>Gallery</Link></li>
                    <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMenu}>Blog</Link></li>
                    <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About Us</Link></li>
                    <li><a href="https://inamigosfoundation.org.in/contact" target="_blank" rel="noreferrer" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
    </header>
  );
}
