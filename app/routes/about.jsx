/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/AboutBackground.webp')", backgroundSize: '120% 120%' }}
    >
      <div className="bg-gray-900 bg-opacity-30 min-h-screen flex flex-col items-center py-12 px-15 sm:px-6 lg:px-20">
        <div className="max-w-lg w-full space-y-8 pl-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white">Life Is a Journey, Not a Destination</h1>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-white">Our Founder: Brett Spenderson Senior</h2>
            <p className="mt-4 text-white">
              Life Journey Cruises was founded by Brett Spenderson Senior with a small loan of a million dollars. With a vision to revolutionize the cruise industry, Brett embarked on a journey that would forever change the way people experience the sea.
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Our History</h2>
            <p className="mt-4 text-white">
              Life Journey Cruises started with a single ship, the "Ocean Dream," which became an instant hit. By focusing on luxury and unparalleled customer service, the company quickly grew its fleet, known for exquisite dining experiences and breathtaking scenic routes.
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">A Party Cruise Like No Other</h2>
            <p className="mt-4 text-white">
              Today, Life Journey Cruises is renowned for its vibrant party cruises. With non-stop entertainment, live music, and themed parties, our cruises are the perfect getaway for those looking to have a good time. Whether you are dancing under the stars or enjoying a cocktail by the pool, every moment on a Life Journey Cruise is designed to be unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
