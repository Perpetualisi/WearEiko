import React from 'react';
import './Collection.css';
import { Link } from 'react-router-dom';

const bridalCollection = [
  ['/design/brides1a - Copy.JPG', '/design/brides1b - Copy.JPG', '/design/brides1c - Copy.JPG'],
  ['/design/brides2a - Copy.JPG', '/design/brides2b - Copy.JPG', '/design/brides2c - Copy.JPG'],
  ['/design/brides3a - Copy.JPG', '/design/brides3b - Copy.JPG', '/design/brides3c - Copy.JPG'],
  ['/design/brides4a.jpg', '/design/brides4b.jpg', '/design/brides4c.jpg'],
  ['/design/brides5a.jpg', '/design/brides5b.jpg', '/design/brides5c.jpg', '/design/brides5d.jpg'],
];

const bespokeDresses = [
  ['/design/beskpoke1a.jpg', '/design/beskpoke1b.jpg', '/design/beskpoke1c.jpg'],
  ['/design/beskpoke2a.jpg', '/design/beskpoke2b.jpg', '/design/beskpoke2c.jpg'],
  ['/design/beskpoke3a.jpg', '/design/beskpoke3b.jpg', '/design/beskpoke3c.jpg'],
  ['/design/beskpoke4a.jpg', '/design/beskpoke4b.jpg', '/design/beskpoke4c.jpg'],
  ['/design/beskpoke5a.jpg', '/design/beskpoke5b.jpg', '/design/beskpoke5c.jpg'],
  ['/design/beskpoke6a.jpg', '/design/beskpoke6b.jpg', '/design/beskpoke6c.jpg'],
  ['/design/beskpoke7a.jpg', '/design/beskpoke7b.jpg', '/design/beskpoke7c.jpg'],
  ['/design/beskpoke8a.jpg', '/design/beskpoke8b.jpg', '/design/beskpoke8a - Copy.jpg'],
  ['/design/beskpoke9a.jpeg', '/design/beskpoke9b.jpeg', '/design/beskpoke9a.jpeg'],
  ['/design/beskpoke10a.jpg', '/design/beskpoke10b.jpg', '/design/beskpoke10c.jpg'],
  ['/design/beskpoke11a.jpg', '/design/beskpoke11b.jpg', '/design/beskpoke11c.jpg'],
];

const Collection = () => {
  return (
    <section className="collection-section">
      <div className="top-static-image"></div>

      <div className="category-section">
        <h2 className="category-heading">Bridal Collection</h2>
        <div className="blinking-grid">
          {bridalCollection.map((set, index) => (
            <BlinkingCard key={`bridal-${index}`} images={set} />
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2 className="category-heading">Bespoke Dresses</h2>
        <div className="blinking-grid">
          {bespokeDresses.map((set, index) => (
            <BlinkingCard key={`bespoke-${index}`} images={set} />
          ))}
        </div>
      </div>

      <div className="inquiry-container">
        <Link to="/contact">
          <button className="inquiry-button">MAKE INQUIRY</button>
        </Link>
      </div>
    </section>
  );
};

const BlinkingCard = ({ images }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="blinking-card">
      <img src={images[current]} alt="Design Sample" />
    </div>
  );
};

export default Collection;
