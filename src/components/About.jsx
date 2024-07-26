/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faTrophy } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <section id="About" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white tracking-wide">
              About Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Hi, I'm Rohail Iqbal. I am a CS undergrad at FAST NUCES, Peshawar
              Campus. I try to blend in creativity with technical skills to
              create visually appealing Websites. I'm passionate about Front-End
              Development that is why I'm learning React JS to improve my
              websites. Along with my technical skills, I am also very active
              with tech communities and host events for students to improve
              their skills and improve myself as well in the process.
            </p>
          </div>
          <div className="flex justify-center space-x-4 p-4">
            <div className="p-4 w-full max-w-xs">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-yellow-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-medium text-3xl text-white">
                  Education
                </h2>
                <p className="text-gray-400"> BS Computer Science <br></br> FAST NUCES Peshawar</p>
              </div>
            </div>
            <div className="p-4 w-full max-w-xs">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-yellow-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-medium text-3xl text-white">
                  Experience
                </h2>
                <p className="text-gray-400">2+ year Front-End <br></br> Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
