import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MakeAnOrder = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get today's date in YYYY-MM-DD format to prevent past-date selection
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/f1079b24dd4aed33709642b3e40c01df", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();

      if (data.success || data.message === "Form submitted successfully") {
        form.reset();
        navigate('/thank-you');
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelStyle = "text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2";
  const inputStyle = "p-4 border border-zinc-200 rounded-none bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 w-full transition-all duration-300 placeholder:text-zinc-300";

  return (
    <div className="max-w-2xl w-full mx-auto mt-12 mb-20 px-6 py-12 bg-white shadow-2xl rounded-sm font-sans">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.2em] text-zinc-900 mb-4">
          Place an Order
        </h2>
        <div className="w-12 h-px bg-zinc-400 mx-auto mb-4"></div>
        <p className="text-zinc-500 italic font-serif">
          Let us bring your vision to life. Please provide your details below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
      >
        {/* Full Name */}
        <div className="flex flex-col md:col-span-2">
          <label className={labelStyle}>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g. Jane Doe"
            required
            className={inputStyle}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className={labelStyle}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="jane@example.com"
            required
            className={inputStyle}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className={labelStyle}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+234..."
            required
            className={inputStyle}
          />
        </div>

        {/* Outfit Type */}
        <div className="flex flex-col">
          <label className={labelStyle}>Type of Outfit</label>
          <select name="outfitType" required className={inputStyle}>
            <option value="">Select an outfit</option>
            <option value="bridal">Bridal</option>
            <option value="non-bridal">Non-Bridal</option>
            <option value="custom">Custom Design</option>
            <option value="event">Event Outfit</option>
            <option value="casual">Casual Wear</option>
          </select>
        </div>

        {/* Delivery Date */}
        <div className="flex flex-col">
          <label className={labelStyle}>Preferred Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            min={today}
            required
            className={inputStyle}
          />
        </div>

        {/* Budget */}
        <div className="flex flex-col md:col-span-2">
          <label className={labelStyle}>Budget Range (₦)</label>
          <input
            type="text"
            name="budget"
            placeholder="Estimate your budget"
            className={inputStyle}
          />
        </div>

        {/* File Upload */}
        <div className="flex flex-col md:col-span-2">
          <label className={labelStyle}>Inspiration Image (Optional)</label>
          <input
            type="file"
            name="attachment"
            accept="image/*"
            className="block w-full text-sm text-zinc-500
              file:mr-4 file:py-3 file:px-6
              file:rounded-none file:border-0
              file:text-xs file:font-semibold
              file:bg-zinc-900 file:text-white
              hover:file:bg-zinc-700 transition-all cursor-pointer border border-zinc-200"
          />
        </div>

        {/* Additional Details */}
        <div className="flex flex-col md:col-span-2">
          <label className={labelStyle}>Additional Details</label>
          <textarea
            name="details"
            rows="4"
            placeholder="Tell us more about your preferences, measurements, or specific requests..."
            className={`${inputStyle} resize-none`}
          />
        </div>

        {/* Hidden Inputs for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Bespoke Order - WearEiko" />
        <input type="hidden" name="_template" value="table" />

        {/* Submit Button */}
        <div className="md:col-span-2 mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-5 text-xs tracking-[0.3em] font-bold uppercase transition-all duration-500
              ${isSubmitting 
                ? 'bg-zinc-400 cursor-not-allowed' 
                : 'bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 ring-1 ring-zinc-900 shadow-xl'}
            `}
          >
            {isSubmitting ? 'Processing Order...' : 'Submit Order'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAnOrder;