import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import emailjs from '@emailjs/browser';
import Button from './Button'; // Assuming you have a Button component defined
import styles from '../style'; // Assuming you have your styles imported
import { BackgroundCircles } from './design/Hero'; // Corrected the import
import Section from './Section';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    company: '', // Added company to form state
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_t17uxfo', // Your service ID
        'template_2pywqwf', // Your template ID
        {
          from_name: form.name,
          to_name: 'Start With Us',
          from_email: form.email,
          company: form.company,
          message: form.message,
          to_email: 'contact-us@start-with-us.infinityfreeapp.com',
        },
        'GRGGKJVol8fltcfvB' // Your user ID
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
            company: '', // Reset company field
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <Section className="-mt-[5.25rem] relative bg-gradient-to-tr from-n-8 via-n-14/20 to-n-14/300 -top-35">
      <div className="flex flex-col md:flex-row z-2 relative">
        <motion.div
          variants={slideIn('left', 'tween', 0.5, 0.2)}
          initial="initial"
          animate="animate"
          className="w-full md:w-1/2 rounded-2xl md:ml-10 mb-2 md:mb-0 "
        >
          <h3 id="title" className="font-poppins text-white font-semibold h3 mb-2 pl-10">
            Contact Us
          </h3>
          <div className="text-n-2 italic mb-2 pl-10">
            Ready to elevate your business? Contact Start With Us today!
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-2 md:gap-8 z-10 pl-10 pr-10"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 md:mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-transparent neon-border py-2 px-4 md:px-6 placeholder:text-secondary placeholder:text-gray-300 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 md:mb-4">Company's Name</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="What's your company's name?"
                className="bg-transparent neon-border py-2 px-4 md:px-6 placeholder:text-secondary placeholder:text-gray-300 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 md:mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-transparent neon-border py-2 px-4 md:px-6 placeholder:text-secondary placeholder:text-gray-300 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 md:mb-4">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-transparent neon-border py-2 px-4 md:px-6 placeholder:text-secondary placeholder:text-gray-300 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <Button
              type="submit"
              className="bg-transparent py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary self-start md:self-auto"
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </motion.div>
        <div className="w-full md:w-1/2 hidden md:flex justify-center items-center">
          <img src="src/assets/contact.png" alt="Contact Us" className="w-2/3" />
        </div>
      </div>
      <BackgroundCircles />
    </Section>
  );
};

export default Contact;