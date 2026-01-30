import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const bridalCollection = [
  ['/design/brides0a.jpg', '/design/brides0b.jpg', '/design/brides0c.jpg'],
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
    <div className="bg-white min-h-screen">
      <section id="collection" className="max-w-7xl mx-auto px-5 md:px-10 py-8 md:py-16 flex flex-col gap-12 md:gap-20 font-sans">
        
        {/* Bridal Section - Single Column on Mobile for Impact */}
        <section>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-lg md:text-2xl font-light uppercase tracking-[0.25em] text-zinc-900 whitespace-nowrap">Bridal</h2>
            <div className="h-px w-full bg-zinc-100"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {bridalCollection.map((images, i) => (
              <BlinkingCard key={`bridal-${i}`} images={images} />
            ))}
          </div>
        </section>

        {/* Bespoke Section - 2 Columns on Mobile for Scannability */}
        <section>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-lg md:text-2xl font-light uppercase tracking-[0.25em] text-zinc-900 whitespace-nowrap">Bespoke</h2>
            <div className="h-px w-full bg-zinc-100"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
            {bespokeDresses.map((images, i) => (
              <BlinkingCard key={`bespoke-${i}`} images={images} />
            ))}
          </div>
        </section>

        {/* Responsive Footer */}
        <footer className="flex justify-center pt-10 pb-24 md:pb-20">
          <Link to="/contact" className="w-full max-w-[300px] md:w-auto">
            <button className="w-full bg-zinc-900 text-white px-10 py-5 rounded-none text-[9px] md:text-[10px] tracking-[0.3em] font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-xl uppercase">
              Start a Commission
            </button>
          </Link>
        </footer>
      </section>
    </div>
  );
};

const BlinkingCard = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);

  useEffect(() => {
    if (images.length < 2) return;

    const interval = setInterval(() => {
      setNextIndex((index + 1) % images.length);
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setNextIndex(null);
      }, 1000); 
    }, 5000);

    return () => clearInterval(interval);
  }, [index, images]);

  return (
    <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-50 border border-zinc-50 transition-all duration-500 hover:shadow-lg">
      
      {/* Current Image */}
      <img
        src={images[index]}
        alt="Design view"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
      />

      {/* Next Image (Overlay) */}
      {nextIndex !== null && (
        <img
          src={images[nextIndex]}
          alt="Next design view"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInSmall {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeInSmall 1000ms ease-in-out forwards;
          will-change: opacity;
        }
      `}} />
    </div>
  );
};

export default Collection;