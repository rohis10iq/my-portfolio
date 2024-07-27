/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

const scrollToContact = () => {
  window.location.hash = '#Contact';
};

const linkToResume = () => {
  window.location.href = 'https://www.linkedin.com/in/rohis10iq';
};

function Hero() {
  return (
    <div>
      <section id="Hero" className="text-gray-400 bg-gray-900 body-font ">
        <div className="container mx-auto flex px-40 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="font-sans text-xl text-center">Hi, This is</p>
            <h1 className="title-font sm:text-4xl text-6xl font-semibold text-white tracking-wide">
              Rohail Iqbal
            </h1>
            <p className="font-sans text-2xl tracking-widest font-semibold">
              Front-End Developer
            </p>
            <br></br>
            <div className="flex justify-center">
              <button onClick={scrollToContact} className="inline-flex text-white bg-yellow-500  py-2 px-6 focus:outline-none hover:text-yellow-200 hover:bg-gray-700 border-2 border-transparent rounded-full hover:border-yellow-200 text-lg">
               Contact Info 
              </button>
              <button onClick = {linkToResume} className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white text-lg rounded-full">
                Resume
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="rounded-full"
              alt="rohail iqbal"
              src="/assets/rohail-iqbal.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
