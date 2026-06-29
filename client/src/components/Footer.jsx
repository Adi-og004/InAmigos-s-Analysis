import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#1a1b21', color: '#d1d5db', borderTop: 'none', paddingTop: '4rem' }}>
        <div className="container footer-container" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1.5fr', gap: '2rem' }}>
            {/* Column 1 */}
            <div className="footer-col">
                <div style={{ backgroundColor: 'white', padding: '10px', display: 'inline-block', marginBottom: '2rem', borderRadius: '4px' }}>
                    <img src="https://inamigosfoundation.org.in/public/storage/settings/174421468011.jpg" alt="Logo" style={{height: '50px'}} />
                </div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '1.2rem', fontWeight: '500' }}>Follow us</h4>
                <div style={{ display: 'flex', gap: '1rem', color: 'white' }}>
                    <a href="https://www.facebook.com/inamigos.inamigos" target="_blank" rel="noreferrer" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>f</a>
                    <a href="#" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>𝕏</a>
                    <a href="#" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>G+</a>
                    <a href="#" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>℗</a>
                    <a href="https://www.instagram.com/inamigos/" target="_blank" rel="noreferrer" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>IG</a>
                </div>
            </div>

            {/* Column 2 */}
            <div className="footer-col">
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '500' }}>Useful Links</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li><a href="/#events" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Events</a></li>
                    <li><Link to="/volunteers" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Volunteers</Link></li>
                    <li><Link to="/gallery" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Gallery</Link></li>
                    <li><Link to="/blog" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Blog</Link></li>
                    <li><a href="#" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Categories</a></li>
                </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '500' }}>pages</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <li><Link to="/about" style={{ color: '#e5e7eb', textDecoration: 'none' }}>About Us</Link></li>
                    <li><a href="https://inamigosfoundation.org.in/contact" target="_blank" rel="noreferrer" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Contact</a></li>
                </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-col">
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '500' }}>Contact Us</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    <p style={{ margin: 0 }}>Ward No. 5, Gram Post,</p>
                    <p style={{ margin: 0 }}>Sipat Ujwal Nagar,</p>
                    <p style={{ margin: 0 }}>Bilaspur. Chhattisgarh</p>
                    <p style={{ margin: 0 }}>Pin-Code: 495555</p>
                    <p style={{ margin: 0, marginTop: '0.5rem' }}>inamigosfoundation@gmail.com</p>
                    <p style={{ margin: 0 }}>+91 626 730 9902</p>
                </div>
            </div>
        </div>
        
        {/* Footer Bottom */}
        <div style={{ backgroundColor: '#23252d', padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <p style={{ margin: 0, color: '#d1d5db', fontSize: '1rem', lineHeight: '1.8' }}>
                    © {new Date().getFullYear()} InAmigos Foundation. All Rights Reserved. Developed by <br/>
                    <a href="#" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}>Aditya Shah</a>
                </p>
            </div>
        </div>
    </footer>
  );
}
