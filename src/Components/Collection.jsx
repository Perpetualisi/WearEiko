import React from 'react';
import './Collection.css';
import { Link } from 'react-router-dom';


const imageSets = [
  ['/design/brides1a.JPG', '/design/brides1b.JPG', '/design/brides1b.JPG'],
  ['/design/brides2a.JPG', '/design/brides2b.JPG', '/design/brides2c.JPG'],
  ['/design/brides3a.jpg', '/design/brides3b.jpg', '/design/brides3c.jpg'],
  ['/design/brides4a.JPG', '/design/brides4b.JPG', '/design/brides4c.JPG'],
  ['/design/brides5a.jpg', '/design/brides5b.jpg', '/design/brides5c.jpg'],
  ['/design/brides6a.jpg', '/design/brides6b.jpg', '/design/brides6a.jpg'],
  ['/design/brides7a.jpg', '/design/brides7b.jpg', '/design/brides7c.jpg'],
  ['/design/brides8a.jpg', '/design/brides8b.jpg', '/design/brides8c.jpg'],
  ['/design/brides9a.jpg', '/design/brides9b.jpg', '/design/brides9c.jpg'],
  ['/design/brides10a.jpg', '/design/brides10b.jpg', '/design/brides10c.jpg'],
];

const Collection = () => {
  return (
    <section className="collection-section">
      <div className="top-static-image">
      </div>

      <div className="blinking-grid">
        {imageSets.map((set, index) => (
          <BlinkingCard key={index} images={set} />
        ))}
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
      <img src={images[current]} alt="Bride Design" />
    </div>
  );
};

export default Collection;
