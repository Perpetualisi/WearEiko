import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [headingIndex, setHeadingIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const headings = [
    "Let's Design Your Dream Look",
    "Crafting Bridal Perfection",
    "Dresses for Unforgettable Moments",
    "Fashioned for Your Big Day",
    "Luxury Looks for Every Occasion",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out
      setTimeout(() => {
        setHeadingIndex((prev) => (prev + 1) % headings.length);
        setFade(true); // Trigger fade in
      }, 500); // Half a second for the fade transition
    }, 4000);
    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <section className="py-20 px-6 bg-[#fffcfb] text-[#2e2e2e] font-sans" id="contact">
      <div className="max-w-6xl mx-auto">
        
        {/* Animated heading with smooth cross-fade */}
        <div className="h-20 mb-12 flex items-center justify-center">
          <h2 className={`text-2xl md:text-4xl font-serif text-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {headings[headingIndex]}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Form Side */}
          <form
            className="w-full lg:flex-1 flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-xl shadow-pink-100/30 animate-fade-slide"
            action="https://formsubmit.co/f1079b24dd4aed33709642b3e40c01df"
            method="POST"
          >
            {/* Anti-Spam Honeypot */}
            <input type="text" name="_honey" className="hidden" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone (Optional)"
                className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
              <input
                type="text"
                name="event_type"
                placeholder="Event (e.g. Wedding)"
                required
                className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <select
                name="service"
                className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none appearance-none"
              >
                <option value="">Service Type</option>
                <option>Custom Dress</option>
                <option>Bridal Consultation</option>
                <option>Fabric Styling</option>
              </select>
              <input
                type="text"
                name="budget"
                placeholder="Budget Range (Optional)"
                className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us more about your dream look..."
              required
              rows="4"
              className="p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none resize-none transition-all"
            ></textarea>

            {/* FormSubmit Configurations */}
            <input type="hidden" name="_next" value="https://wear-eiko-perpetuals-projects-36af2065.vercel.app/thank-you" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <button
              type="submit"
              className="bg-black text-white py-4 rounded-xl font-bold tracking-[0.2em] hover:bg-pink-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-pink-200 uppercase text-xs"
            >
              Get Styled
            </button>
          </form>

          {/* Info Side */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6 animate-fade-slide">
            <div className="bg-[#fff0ec] p-8 rounded-3xl border border-pink-100 shadow-sm">
              <h3 className="text-xl font-serif mb-6 text-pink-900">Visit Our Studio</h3>
              
              <div className="space-y-5 text-sm md:text-base">
                <div className="flex items-start gap-4">
                  <span className="text-lg">📍</span>
                  <p>Benin City, Edo State, Nigeria</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-lg">📧</span>
                  <a href="mailto:www.weareiko@gmail.com" className="hover:text-pink-600 transition-colors">
                    weareiko@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-lg">📞</span>
                  <a href="tel:+2349050252476" className="hover:text-pink-600 transition-colors">
                    +234 905 025 2476
                  </a>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://instagram.com/weareiko"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-white rounded-full text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all border border-pink-200"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://goo.gl/maps/2F5HTX4EY2bcrEEU6"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-pink-600 text-white rounded-full text-xs font-bold tracking-widest hover:bg-pink-700 transition-all shadow-md"
                >
                  FIND US
                </a>
              </div>
            </div>

            {/* Map Preview */}
            <div className="rounded-3xl overflow-hidden h-48 md:h-64 border border-pink-50 shadow-inner">
              <iframe
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                title="WearEiko Studio Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.83515436662!2d5.53232147775538!3d6.33129482834612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3667554807b%3A0xc3c945145780a4b7!2sBenin%20City!5e0!3m2!1sen!2sng!4v1690000000000"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide { animation: fadeSlide 0.8s ease-out forwards; }
      `}} />
    </section>
  );
};

export default Contact;