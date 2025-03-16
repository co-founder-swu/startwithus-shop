import React from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

const RequestAQuoteSmallScreen = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const templateParams = {};
    formData.forEach((value, key) => {
      if (templateParams[key]) {
        templateParams[key] += `, ${value}`;
      } else {
        templateParams[key] = value;
      }
    });

    emailjs
      .send('service_3j2tb9q', 'template_98g9apo', templateParams, 'GRGGKJVol8fltcfvB')
      .then(
        (result) => {
          alert('Thank you. I will get back to you as soon as possible.');
          form.reset(); // Clear the form after successful submission
        },
        (error) => {
          alert('Ahh, something went wrong. Please try again.');
          // Handle error (e.g., show error message to user)
        }
      );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="modal-content bg-black  p-4 rounded-lg w-full max-w-lg overflow-y-auto max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-black focus:text-black bg-transparent border-none cursor-pointer focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h4 className="font-bold text-2xl text-center mb-4 text-white">Request A Quote</h4>

        <form onSubmit={handleSubmit} className="font-grotesk text-left text-md text-bold p-3 space-y-4">
          <div className="grid grid-cols-1 text-left gap-5">
            <div>
              <label htmlFor="name" className="block text-white mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="input-field bg-transparent neon-border py-1 px-9 placeholder:text-gray-500 placeholder:text-sm placeholder:italic placeholder:text-left"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input-field bg-transparent neon-border py-1 px-9 placeholder:text-gray-500 placeholder:text-sm placeholder:italic placeholder:text-left"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-1">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="input-field bg-transparent neon-border py-1 px-9 placeholder:text-gray-500 placeholder:text-sm placeholder:italic placeholder:text-left"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-white mb-1">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                className="input-field bg-transparent neon-border py-1 px-9 placeholder:text-gray-500 placeholder:text-sm placeholder:italic placeholder:text-left"
                required
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-white mb-1">Industry:</label>
              <input
                type="text"
                id="industry"
                name="industry"
                placeholder="Enter your industry"
                className="input-field bg-transparent neon-border py-1 px-9 placeholder:text-gray-500 placeholder:text-sm placeholder:italic placeholder:text-left"
                required
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-white mb-1">Budget:</label>
              <input
                type="number"
                id="budget"
                name="budget"
                placeholder="Enter your Budget"
                className="input-field bg-transparent neon-border py-1 px-9 placeholder:text-gray-500 placeholder:text-sm placeholder:italic placeholder:text-left"
                required
              />
              <span className="text-gray-500 text-xs">min. $500</span>
            </div>

            <div>
              <label className="block text-white mb-1">Service Type:</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <label className="flex items-center">
                  <input
                    id="service1"
                    type="checkbox"
                    name="serviceType"
                    value="Web Design"
                    className="form-checkbox text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-white">Web Design</span>
                </label>
                <label className="flex items-center">
                  <input
                    id="service2"
                    type="checkbox"
                    name="serviceType"
                    value="Web Development"
                    className="form-checkbox text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-white">Web Development</span>
                </label>
                <label className="flex items-center">
                  <input
                    id="service3"
                    type="checkbox"
                    name="serviceType"
                    value="Branding"
                    className="form-checkbox text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-white">Branding</span>
                </label>
                <label className="flex items-center">
                  <input
                    id="service4"
                    type="checkbox"
                    name="serviceType"
                    value="Marketing"
                    className="form-checkbox text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-white">Marketing</span>
                </label>
                <label className="flex items-center">
                  <input
                    id="service5"
                    type="checkbox"
                    name="serviceType"
                    value="Content Writing"
                    className="form-checkbox text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-white">Content Writing</span>
                </label>
                <label className="flex items-center">
                  <input
                    id="service6"
                    type="checkbox"
                    name="serviceType"
                    value="SEO & Hosting"
                    className="form-checkbox text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-white">SEO & Hosting</span>
                </label>
              </div>
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your project details"
                rows="3"
                className="input-field bg-transparent neon-border py-1 px-9 placeholder:text-gray-500 placeholder:text-sm placeholder:italic placeholder:text-left"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" className="bg-transparent hover:bg-transparent text-white px-3 py-2 rounded">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestAQuoteSmallScreen;
