import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MakeAnOrder.css';

const MakeAnOrder = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/www.weareiko@gmail.com", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log("FormSubmit response:", data); 

        if (data.success || data.message === "Form submitted successfully") {
          form.reset();
          navigate('/thank-you'); 
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(error => {
        console.error("Submission error:", error);
        alert("There was an error. Please try again.");
      });
  };

  return (
    <div className="order-container">
      <h2>Place an Order</h2>
      <p className="subtitle">Fill out the form below to start your dream outfit.</p>

      <form
        className="order-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" required />
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
          <input type="text" name="budget" />
        </div>

        <div className="form-group">
          <label>Upload Sample Image (optional):</label>
          <input type="file" name="attachment" accept="image/*" />
        </div>

        <div className="form-group">
          <label>Additional Details:</label>
          <textarea name="details" rows="5"></textarea>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Order from WearEiko" />

        <button type="submit" className="submit-btn">Submit Order</button>
      </form>
    </div>
  );
};

export default MakeAnOrder;
