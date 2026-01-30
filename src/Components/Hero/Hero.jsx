import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  '/hero/hero0.jpg',
  '/hero/hero2.jpg',
  '/hero/hero3.jpg',
  '/hero/hero1 - Copy.JPG',
  '/hero/hero4.jpg',
  '/hero/hero6 - Copy.jpg',
  '/hero/hero5 - Copy.JPG'
];

const galleryImages = [
  '/hero/hero1 - Copy.JPG',
  '/hero/hero2.jpg',
  '/hero/hero3.jpg',
  '/hero/hero4.jpg',
  '/hero/hero0.jpg',
  '/hero/hero6 - Copy.jpg',
  '/hero/hero5 - Copy.JPG',
  '/hero/hero4 - Copy.jpg',
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 50); 
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImg ? 'hidden' : 'unset';
  }, [selectedImg]);

  const handleScrollToCollection = useCallback(() => {
    const section = document.getElementById('collections');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const doubledGallery = useMemo(() => [...galleryImages, ...galleryImages], []);

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <section
        id="home"
        /* SENIOR FIX: Added mt-[80px] on mobile to clear the fixed branding bar.
          Desktop remains md:mt-0 because the Navbar spacer handles it there.
        */
        className="relative flex flex-col md:flex-row w-full bg-black text-white mt-[80px] md:mt-0 min-h-[85vh] md:min-h-screen items-stretch"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center items-center md:items-start px-8 pt-10 pb-16 md:pb-32 md:pl-12 lg:pl-20 xl:pl-32 z-20">
          <div className="max-w-full -mt-4 md:-mt-24 lg:-mt-32">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4 md:mb-6 tracking-widest uppercase leading-tight text-center md:text-left">
              WearEiko
            </h1>
            <p className="text-sm md:text-lg lg:text-xl italic font-light leading-relaxed text-zinc-400 text-center md:text-left max-w-[320px] md:max-w-[450px]">
              Step into a world of bold fashion, <br className="hidden md:block"/>
              timeless elegance, and unforgettable <br className="hidden md:block"/>
              style that defines confidence.
            </p>
            <button
              onClick={handleScrollToCollection}
              className="bg-white text-black px-10 py-4 mt-8 md:mt-10 rounded-sm font-bold text-xs tracking-[0.3em] hover:bg-zinc-200 transition-all duration-300 uppercase shadow-xl block mx-auto md:mx-0"
            >
              View Collection
            </button>
          </div>
        </div>

        {/* IMAGE SLIDER AREA */}
        <div className="w-full md:w-1/2 h-[70vh] md:h-auto relative overflow-hidden bg-black order-first md:order-last">
          <img
            key={index}
            src={images[index]}
            alt="WearEiko fashion"
            onLoad={() => setIsLoaded(true)}
            className={`
              w-full h-full object-cover object-top
              transition-all duration-[6000ms] ease-out
              ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
            `}
          />
          {/* Enhanced Blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black md:hidden pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_transparent_30%,_black_100%)] md:hidden pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block pointer-events-none" />
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section className="relative h-[300px] md:h-[450px] w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/hero/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4">
          <h3 className="text-white text-2xl md:text-4xl font-serif tracking-widest mb-8 text-center uppercase">Elevate Your Style</h3>
          <button onClick={() => navigate('/contact')} className="bg-white text-black px-12 py-4 font-bold rounded-full text-xs tracking-[0.2em] hover:scale-105 transition-all shadow-2xl uppercase">Make an Inquiry</button>
        </div>
      </section>

      {/* MARQUEE GALLERY */}
      <section className="bg-white py-20 px-4 overflow-hidden" id="collections">
        <h2 className="text-center text-3xl md:text-5xl font-serif mb-16 text-black tracking-[0.3em] uppercase">Our Designs</h2>
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-marquee whitespace-nowrap">
            {doubledGallery.map((src, i) => (
              <div key={i} className="flex-none w-[70vw] md:w-[25vw] px-4 cursor-zoom-in group" onClick={() => setSelectedImg(src)}>
                <img src={src} alt="WearEiko Design" className="w-full aspect-[3/4] object-cover rounded-sm shadow-2xl group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-10 text-white text-5xl font-thin hover:rotate-90 transition-transform duration-300">&times;</button>
          <img src={selectedImg} alt="Enlarged design" className="max-w-full max-h-[90vh] object-contain shadow-2xl animate-in zoom-in-95 duration-300" />
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 40s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
        .animate-in { animation: fadeIn 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}} />
    </div>
  );
};

export default Hero;