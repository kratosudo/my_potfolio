import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const response = await fetch('http://127.0.0.1:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, recaptchaToken }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <section id="contact" className="p-8 bg-gray-200">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
        
        <ReCAPTCHA sitekey="6LfOx9gqAAAAAKSkPI5cz5M__JDDtL8kIF-iYlGE" onChange={(token) => setRecaptchaToken(token)} />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
}

export default Contact;

