import React, { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle the form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

        <p className="text-lg mb-4">
          Thank you for reaching out! Please use the form below to send me a message. I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md min-w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md min-w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md min-w-full		"
            ></textarea>
          </div>

          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">Submit</button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg">
            Email: <a href="mailto:your.email@example.com" className="underline">degroote.jonas@student.arteveldehs.be</a>
          </p>
          <p className="text-lg">
            LinkedIn: <a href="https://www.linkedin.com/in/jonas-de-groote-3792b0194/" className=" underline" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>
          </p>
          <p className="text-lg">
            GitHub: <a href="https://github.com/Jonasdegroote1" className=" underline" target="_blank" rel="noopener noreferrer">My GitHub Profile</a>
          </p>
        </div>
      </div>
    </>
  );
}
