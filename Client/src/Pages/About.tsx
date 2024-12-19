import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        About Our Platform
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
        <p className="text-xl text-gray-700 mb-4">
          Welcome to our lesson platform! We are here to make your lesson planning and scheduling
          process simple, convenient, and focused. Our goal is to help you find the perfect lesson,
          without the hassle. With our platform, you can choose lessons by topics, add new lessons,
          and explore expert instructors from various fields, all in one place!
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Various Topics, Numerous Lessons</h2>
        <p className="text-xl text-gray-700 mb-4">
          On our platform, everyone can add lessons based on their area of expertise or the topic
          they are interested in. Each lesson is tagged by category, making it easy to find exactly
          what you're looking for, whether it's math, technology, art, or any other subject.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Experienced and Focused Instructors</h2>
        <p className="text-xl text-gray-700 mb-4">
          In addition to various lessons, you will also find expert instructors in every field, so you
          can select the perfect teacher for your needs. Each instructor has a detailed profile that
          includes their field of expertise, lesson details, and student recommendations. We also display
          the instructors' locations on an interactive map, allowing you to choose the one closest to you or
          based on your preferences.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">How It Works?</h2>
        <ul className="list-disc pl-6 text-xl text-gray-700 mb-6">
          <li>Choose a topic: Start by searching for a lesson that interests you.</li>
          <li>Pick an instructor: Once you've selected a lesson, you can view the instructors available for that topic and choose the one that fits you best.</li>
          <li>Book your session: Select a time that works for you and schedule your lesson with the instructor.</li>
          <li>Get ready to learn: Prepare for a focused, enjoyable learning experience!</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Who Are We?</h2>
        <p className="text-xl text-gray-700 mb-4">
          Our platform was created as part of the **Lohamim Le-Tech** hackathon, a tech accelerator
          course designed for individuals with a military background who wish to transition into the tech industry.
          The platform creators are Yaniv Ridel, Maor Shmueli, Tal Calderon, and Sasha T. During the hackathon,
          we searched for a simple and efficient solution to help people learn in a focused, convenient way without
          the headaches of traditional learning methods.
        </p>
        <p className="text-xl text-gray-700">
          Our vision is to create a direct and efficient connection between students and instructors, enabling people to
          learn in an engaging, personalized, and convenient manner.
        </p>
      </div>
    </div>
  );
};

export default About;
