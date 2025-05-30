import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="thank-you-page" style={{ textAlign: 'center', padding: '4rem 1rem', marginTop: '6rem' }}>
      <h2>🎉 Thank You!</h2>
      <p>Your request has been submitted. We’ll get back to you shortly.</p>
      <Link
        to="/"
        style={{
          marginTop: '2rem',
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
