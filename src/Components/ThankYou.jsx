import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Optional: Automatically redirect to home after 8 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 8000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        
        {/* Animated Checkmark Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center animate-bounce-subtle">
            <svg 
              className="w-10 h-10 text-pink-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif text-zinc-900 tracking-tight">
            Thank You, Gorgeous.
          </h1>
          <p className="text-zinc-600 leading-relaxed font-sans">
            Your request has been received. Our lead designer is reviewing your details and will reach out shortly to discuss your vision.
          </p>
        </div>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-block bg-black text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-[10px] text-zinc-400 uppercase tracking-widest pt-12">
          Redirecting to home in a few seconds...
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default ThankYou;