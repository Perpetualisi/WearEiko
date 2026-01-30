import React, { useEffect, useState, useMemo } from 'react';

const About = () => {
  const phrases = useMemo(() => [
    "Defining Fashion Identity",
    "Elevating Style with Purpose",
    "Crafting Timeless Elegance",
    "Empowering Style with Confidence",
    "Daring to Stand Out",
    "Bold Elegance by WearEiko",
    "Tradition Meets Modern Craft"
  ], []);

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Logic
  useEffect(() => {
    const currentPhrase = phrases[index];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(currentPhrase.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, phrases]);

  // Image data - doubled for seamless loop
  const carouselImages = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

  return (
    <section
      id="about"
      className="bg-[#fcfafa] py-20 px-6 text-center font-sans text-gray-800 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Typing heading with a fixed height to prevent layout shift */}
        <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-medium tracking-tight">
            {text}
            <span className="text-pink-600 animate-blink ml-1">|</span>
          </h2>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
          <p className="opacity-0 animate-fadeInUp delay-100">
            <span className="font-bold text-gray-900">WearEiko</span> is a fashion movement that blends African heritage with bold, modern design, empowering self-expression through style.
          </p>
          <p className="opacity-0 animate-fadeInUp delay-300">
            From vibrant Ankara prints to chic neutrals, our pieces are curated to reflect your unique personality and transitions seamlessly from work to celebration.
          </p>
          <p className="opacity-0 animate-fadeInUp delay-500 font-medium italic text-gray-800">
            Welcome to WearEiko — where fashion is culture, and every look makes a statement.
          </p>
        </div>

        {/* Infinite Image Carousel */}
        <div className="relative mt-16 w-full">
          <div className="flex animate-scrollCarousel gap-4 hover:[animation-play-state:paused] cursor-pointer">
            {carouselImages.map((n, i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={`/images/about${n}.jpg`}
                  alt={`WearEiko Fashion ${n}`}
                  className="w-48 md:w-64 h-72 md:h-80 rounded-2xl object-cover shadow-md transition-all duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.7s; }

        @keyframes scrollCarousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-256px * 6 - 1rem * 6)); } 
        }
        /* Mobile adjustment for carousel speed and width */
        .animate-scrollCarousel { 
          animation: scrollCarousel 30s linear infinite; 
          width: max-content;
        }
        @media (max-width: 768px) {
          @keyframes scrollCarousel {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-192px * 6 - 1rem * 6)); }
          }
        }
      `}} />
    </section>
  );
};

export default About;