import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const phrases = [
    "Defining Fashion Identity",
    "Elevating Style with Purpose",
    "Crafting Timeless Elegance",
    "Empowering Style with Confidence",
    "Daring to Stand Out",
    "Expressing Individuality",
    "Embodying Style",
    "Unleashing Inner Style",
    "Defining Style",
    "Embracing Fashion",
    "Expressing Your Unique Style",
    "Daring to Be You",
    "Unleashing Your Inner Fashionista",
    "Dressing with Confidence",
    "Bold Elegance by WearEiko",
    "Tradition Meets Modern Craft"
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(phrases[index].substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      if (charIndex === phrases[index].length) {
        setTimeout(() => {
          setCharIndex(0);
          setIndex(prev => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, index]);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="typing-heading">{text}<span className="cursor">|</span></h2>

        <p className="fade-in delay-1">
          <strong>WearEiko</strong> is a fashion movement that blends African heritage with bold, modern design empowering self-expression through style.
        </p>

        <p className="fade-in delay-2">
          From vibrant Ankara prints to chic neutrals and special-occasion looks, our pieces are curated to reflect your unique personality.
        </p>

        <p className="fade-in delay-3">
          Every garment is crafted with care and meaning for dreamers, professionals, and creatives who dress with purpose.
        </p>

        <p className="fade-in delay-4">
          Locally inspired, globally admired  our fashion transitions seamlessly from work to celebration, without compromising identity.
        </p>

        <p className="fade-in delay-5">
          Rooted in sustainability, inclusion, and innovation, WearEiko supports communities and tells stories through every stitch.
        </p>

        <p className="fade-in delay-6">
          Welcome to WearEiko — where fashion is culture, and every look makes a statement.
        </p>

        {/* Image Carousel */}
        <div className="image-carousel">
          <div className="carousel-track">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img key={n} src={`/images/about${n}.jpg`} alt={`WearEiko Fashion ${n}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
