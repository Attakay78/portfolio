"use client";
import React, { useState } from "react";
import axios from 'axios';

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('loading');

    // Validate form
    let hasError = false;
    const newFormData = { ...formData };

    if (!formData.email.value.trim()) {
      newFormData.email.error = "Email is required";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.value)) {
      newFormData.email.error = "Please enter a valid email address";
      hasError = true;
    }

    if (!formData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      hasError = true;
    }

    if (hasError) {
      setFormData(newFormData);
      setStatus('idle');
      return;
    }

    try {
      const response = await axios.post('http://18.117.71.58:5000/send-message', {
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST'
      });

      console.log('Message sent:', response.data);
      setStatus('success');
      setFormData(defaultFormState);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };
  return (
    <form className="form max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name (optional)"
          className="bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white px-4 py-3 rounded-lg text-sm text-neutral-700 w-full transition-all duration-200 border border-neutral-200"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address *"
            className={`bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white px-4 py-3 rounded-lg text-sm text-neutral-700 w-full transition-all duration-200 border border-neutral-200 ${
              formData.email.error ? 'border-red-500 bg-red-50' : ''
            }`}
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
            required
          />
          {formData.email.error && (
            <p className="text-red-500 text-xs mt-2 ml-1">{formData.email.error}</p>
          )}
        </div>
      </div>
      <div className="mt-5">
        <textarea
          placeholder="Your Message *"
          rows={8}
          className={`bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white px-4 py-3 rounded-lg text-sm text-neutral-700 w-full transition-all duration-200 border border-neutral-200 ${
            formData.message.error ? 'border-red-500 bg-red-50' : ''
          }`}
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
          required
        />
        {formData.message.error && (
          <p className="text-red-500 text-xs mt-2 ml-1">{formData.message.error}</p>
        )}
      </div>
      <button
        className={`w-full px-6 py-3 mt-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
          ${status === 'loading' 
            ? 'bg-neutral-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-sm hover:shadow'}`}
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center">
            Sending...
          </span>
        ) : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="mt-6 text-green-600 text-center bg-green-50 py-3 px-4 rounded-lg border border-green-100">
          Message sent successfully! ✨
        </p>
      )}
      {status === 'error' && (
        <p className="mt-6 text-red-600 text-center bg-red-50 py-3 px-4 rounded-lg border border-red-100">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
};
