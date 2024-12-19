import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Contact Us
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
        <p className="text-xl text-gray-700 mb-4">
          We would love to hear from you! If you have any questions, feedback, or inquiries about our platform,
          feel free to get in touch with us. You can contact our team members directly via email. We are happy to
          assist you in any way we can.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Team Contacts</h2>
        <ul className="list-none text-xl text-gray-700">
          <li className="mb-4">
            <strong>Tal Calderon</strong>:{" "}
            <a href="mailto:talkal153@gmail.com" className="text-blue-500 hover:text-blue-700">
              talkal153@gmail.com
            </a>
          </li>
          <li className="mb-4">
            <strong>Sasha T</strong>:{" "}
            <a href="mailto:sasha.meduza24@gmail.com" className="text-blue-500 hover:text-blue-700">
              sasha.meduza24@gmail.com
            </a>
          </li>
          <li className="mb-4">
            <strong>Yaniv Ridel</strong>:{" "}
            <a href="mailto:yanivridel@gmail.com" className="text-blue-500 hover:text-blue-700">
              yanivridel@gmail.com
            </a>
          </li>
          <li className="mb-4">
            <strong>Maor Shmueli</strong>:{" "}
            <a href="mailto:maorshmueli5@gmail.com" className="text-blue-500 hover:text-blue-700">
              maorshmueli5@gmail.com
            </a>
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-700 mb-4">
          If you need any assistance or would like to share your thoughts, don’t hesitate to reach out to us. We’re here
          to help and always happy to hear from our users!
        </p>
        <p className="text-xl text-gray-700">
          Feel free to email us anytime, and we’ll get back to you as soon as possible. We appreciate your feedback and look
          forward to connecting with you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
