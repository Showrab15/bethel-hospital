import { useState } from 'react';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Call the emailJS service to send the email
    emailjs
      .send(
        'service_3mx1yef',  // Replace with your emailJS service ID
        'your_template_id',  // Replace with your emailJS template ID
        { email },
        'your_user_id'       // Replace with your emailJS user ID
      )
      .then(
        (response) => {
          setMessage('Thanks for subscribing!');
          setEmail('');
          setIsSubmitting(false);
        },
        (error) => {
          setMessage('Oops! Something went wrong. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div>
      <h2 className="text-[#BFD2F8] text-[18px] font-semibold font-poppins mt-2">
        Newsletter
      </h2>
      <div className="flex items-center bg-purple-200 text-purple-900 rounded-md px-3 py-2 w-full max-w-md mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="bg-transparent focus:outline-none w-full placeholder-purple-600 text-sm"
        />
        <button
          className="ml-2"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-5 h-5 text-purple-800"
          >
            <path d="M15.854 1.146a.5.5 0 0 0-.565-.062l-14 8a.5.5 0 0 0 .02.87l4.812 2.406 2.405 4.812a.5.5 0 0 0 .87.02l8-14a.5.5 0 0 0-.062-.566zM6.961 11.04l-3.517-1.759 9.582-5.46L6.961 11.04z" />
          </svg>
        </button>
      </div>
      {message && <p className="mt-4 text-[#8F3E97]">{message}</p>}
    </div>
  );
};

export default Newsletter;
