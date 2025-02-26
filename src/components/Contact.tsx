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
      const response = await axios.post('https://karyde.com/send-message', {
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
        className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block w-full mt-4"
        type="submit"
        disabled={status === 'loading'}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2 px-4 ring-1 ring-white/10 justify-center">
          <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
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
