import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const phrases = [
    "Defining Fashion Identity",
    "Elevating Style with Purpose",
    "Crafting Timeless Elegance",
    "Empowering Style with Confidence",
    "Embracing Fashion with Passion",
    "Daring to Stand Out",
    "Expressing Individuality",
    "Embodying Style",
    "Unleashing Inner Style",
    "Creating a Personal Statement",
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
          <strong>WearEiko</strong> is more than just a fashion brand, it's a movement that celebrates the power of self-expression through style.
          Born from a vision to merge rich African heritage with contemporary design, WearEiko represents a new wave of fashion that dares to be bold, artistic, and unapologetically authentic.
        </p>

        <p className="fade-in delay-2">
          From vibrant Ankara, to minimalist neutrals, to exotic designs for your special celebrations, to opulent bridal ensembles, our collections are curated to suit your unique taste and personality.
        </p>

        <p className="fade-in delay-3">
          Every thread in our garments is carefully selected and stitched with purpose. From vibrant Ankara prints to minimalist neutrals, our collections are curated for individuals who dress with meaning. 
          We create for the trendsetter, the dreamer, the professional, and the creative — those who know that what you wear is a reflection of who you are and what you stand for.
        </p>

        <p className="fade-in delay-4">
          At WearEiko, craftsmanship meets culture. Our pieces are locally inspired and globally admired, designed to transcend occasions. Whether you’re stepping out for a business meeting, attending a celebration, or simply owning the streets, our fashion adapts to your rhythm without compromising identity.
        </p>

        <p className="fade-in delay-5">
          We are rooted in values of sustainability, inclusion, and innovation. Our goal is to empower communities, collaborate with artisans, and redefine fashion with purpose. Each release tells a story. Each fabric carries legacy. Each look empowers confidence.
        </p>

        <p className="fade-in delay-6">
          Welcome to WearEiko, where every piece is worn with pride, every outfit is a statement, and every design is a legacy in motion.
        </p>

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
