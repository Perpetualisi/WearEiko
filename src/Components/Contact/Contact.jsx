import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [headingIndex, setHeadingIndex] = useState(0);

  const headings = [
    "Let's Design Your Dream Look",
    "Crafting Bridal Perfection",
    "Dresses for Unforgettable Moments",
    "Fashioned for Your Big Day",
    "Luxury Looks for Every Occasion",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="v-contact" id="contact">
      <div className="v-container">
        <h2 className="v-heading animate-fade-slide">{headings[headingIndex]}</h2>
        <div className="v-grid">
          <form
            className="v-form"
            action="https://formsubmit.co/www.weareiko@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone (Optional)"
            />
            <input
              type="text"
              name="subject"
              placeholder="Event Type (e.g. Wedding, Party)"
              required
            />
            <select name="projectType">
              <option value="">Service Type</option>
              <option>Custom Dress</option>
              <option>Bridal Consultation</option>
              <option>Fabric Styling</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              name="budget"
              placeholder="Budget Range (Optional)"
            />
            <textarea
              name="message"
              placeholder="Tell us more about your event or desired look"
              required
            ></textarea>

            <input type="hidden" name="_next" value="https://wear-eiko-perpetuals-projects-36af2065.vercel.app/thank-you" />
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="v-btn">Get Styled</button>
          </form>

          <div className="v-info">
            <p><strong>📍 Location:</strong> Edo State, Benin City</p>
            <p><strong>🗺️ Studio Visit:</strong>{' '}
              <a href="https://goo.gl/maps/2F5HTX4EY2bcrEEU6" target="_blank" rel="noreferrer">
                Find Us
              </a>
            </p>
            <p><strong>📧 Email:</strong>{' '}
              <a href="mailto:www.weareiko@gmail.com">www.weareiko@gmail.com</a>
            </p>
            <p><strong>📞 Phone:</strong>{' '}
              <a href="tel:+2349050252476">09050252476</a>
            </p>
            <div className="v-social-wrapper">
              <div className="v-social">
                <a href="https://instagram.com/weareiko" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
            <iframe
              className="v-map"
              title="WearEiko Studio Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.113840107389!2d5.60425557442152!3d6.338112725388237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3fd6c0f4a43%3A0x26092b0d6fc7b857!2sBenin%20City%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1716300000001"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
