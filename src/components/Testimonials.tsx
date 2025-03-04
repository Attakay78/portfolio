"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

type Testimonial = {
  name: string;
  email?: string; // Optional
  testimonial: string;
};

const defaultFormState = {
  name: "",
  email: "",
  testimonial: "",
};

export const Testimonials = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('https://karyde.com/testimonials');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await axios.post('https://karyde.com/submit-testimonial', {
        name: formData.name,
        email: formData.email,
        testimonial: formData.testimonial
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Message sent:', response.data);
      setStatus('success');
      setFormData(defaultFormState);
      fetchTestimonials();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Your Email (optional)"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          placeholder="Your Testimonial"
          value={formData.testimonial}
          onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
          required
          rows={4}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-full py-2 px-4 transition duration-300 hover:bg-gray-800 mb-6"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Submit Testimonial'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md bg-gray-100">
              <p className="text-gray-800 italic">&quot;{testimonial.testimonial}&quot;</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No testimonials available.</p>
        )}
      </div>
    </div>
  );
};

export default Testimonials; 