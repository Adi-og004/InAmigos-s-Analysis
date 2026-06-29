import { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/blog`)
            .then(res => setBlogs(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <section className="page-header" style={{background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)', padding: '6rem 0 3rem', color: 'white', textAlign: 'center'}}>
                <div className="container">
                    <h1 style={{fontSize: '3rem', fontWeight: '800', marginBottom: '1rem'}}>Our Blog</h1>
                    <p style={{fontSize: '1.1rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto'}}>Read our latest stories, insights, and updates from the field.</p>
                </div>
            </section>

            <section className="section section-padding" style={{background: 'var(--light)'}}>
                <div className="container">
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
                        {blogs.map((blog, idx) => (
                            <div key={idx} style={{background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', transition: 'var(--transition)'}} className="event-card-hover">
                                <div style={{position: 'relative'}}>
                                    <a href={blog.link} target="_blank" rel="noreferrer">
                                        <img src={blog.image} alt={blog.title} style={{width: '100%', height: '240px', objectFit: 'cover'}} />
                                    </a>
                                </div>
                                <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1}}>
                                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '600'}}>
                                        <Calendar size={18} />
                                        <span>{blog.date}</span>
                                    </div>
                                    <h4 style={{fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', lineHeight: '1.4'}}>
                                        <a href={blog.link} target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>{blog.title}</a>
                                    </h4>
                                    <p style={{color: 'var(--secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem'}}>
                                        {blog.excerpt}
                                    </p>
                                    <a href={blog.link} target="_blank" rel="noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', textTransform: 'uppercase', fontSize: '0.9rem'}}>
                                        Read More <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
