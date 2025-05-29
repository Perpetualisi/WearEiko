import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const images = [
  '/hero/hero1 - Copy.JPG',
  '/hero/hero2.jpg',
  '/hero/hero3.jpg',
  '/hero/hero4.jpg',
  '/hero/hero6 - Copy.jpg',
  '/hero/hero5 - Copy.JPG'
];

const galleryImages = [
  '/hero/hero1 - Copy.JPG',
  '/hero/hero2.jpg',
  '/hero/hero3.jpg',
  '/hero/hero4.jpg',
  '/hero/hero6 - Copy.jpg',
  '/hero/hero5 - Copy.JPG',
  '/hero/hero4 - Copy.jpg',
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id='home' className="hero-section">
        <div className="hero-left">
          <h1 className="brand-title">WearEiko</h1>
          <p className="subtitle">
            Step into a world of bold fashion,<br />
            timeless elegance,<br />
            and unforgettable style that defines confidence.
          </p>
          <button
            className="hero-btn"
            onClick={() => {
              const section = document.getElementById('collections');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            VIEW COLLECTION
          </button>
        </div>

        <div className="hero-right">
          <div className="image-overlay fade-in">
            <img
              src={images[index]}
              alt="WearEiko model"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="inquiry-section">
        <div className="inquiry-overlay">
          <button className="inquiry-btn" onClick={() => navigate('/contact')}>
            MAKE AN INQUIRY
          </button>
        </div>
      </section>

      <section className="gallery-section" id="collections">
        <h2 className="gallery-heading">Our Designs</h2>

        <div className="gallery-marquee">
          <div className="marquee-track">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <div key={i} className="marquee-item">
                <img src={src} alt={`Design ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
