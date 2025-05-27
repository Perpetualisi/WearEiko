import React from 'react';
import emailjs from '@emailjs/browser';
import './MakeAnOrder.css';

const MakeAnOrder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c4ssxdp',      // Your EmailJS Service ID
      'template_50ofd27',     // Replace with your Template ID
      e.target,
      'Q-wqqOPJmv_v2YNEC'       // Replace with your Public Key
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Order submitted successfully!');
        e.target.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Something went wrong. Please try again.');
      }
    );
  };

  return (
    <div className="order-container">
      <h2>Place an Order</h2>
      <p className="subtitle">Fill out the form below to start your dream outfit.</p>

      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group">
          <label>Type of Outfit:</label>
          <select name="outfitType" required>
            <option value="">Select an outfit</option>
            <option value="bridal">Bridal</option>
            <option value="non-bridal">Non-Bridal</option>
            <option value="custom">Custom Design</option>
            <option value="event">Event Outfit</option>
            <option value="casual">Casual Wear</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Delivery Date:</label>
          <input type="date" name="deliveryDate" required />
        </div>

        <div className="form-group">
          <label>Budget Range (₦):</label>
          <input type="text" name="budget" placeholder="E.g. 50,000 - 150,000" />
        </div>

        <div className="form-group">
          <label>Upload Sample Image (optional):</label>
          <input type="file" name="image" accept="image/*" />
        </div>

        <div className="form-group">
          <label>Additional Details:</label>
          <textarea name="details" placeholder="Measurements, colors, fabric ideas..." rows="5"></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit Order</button>
      </form>
    </div>
  );
};

export default MakeAnOrder;
