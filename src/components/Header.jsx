/* eslint-disable no-unused-vars */
import React from "react";

function Header() {
  return (
    <div>
      <header className="text-gray-400 bg-gray-800 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              viewBox="0 0 1024 1024"
              className="icon bg-yellow-400 rounded-full w-10 h-10" 
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff5f5"
              stroke="#fff5f5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512.5 648.1m-214 0a214 214 0 1 0 428 0 214 214 0 1 0-428 0Z"
                  fill="#000000"
                ></path>
                <path d="M512.5 569.4l-70.4-122h140.8z" fill="#FFFFFF"></path>
                <path
                  d="M512.5 437.1c19 0 37.5 2.6 55.1 7.3H457.5c17.5-4.8 36-7.3 55-7.3z m22.5 87.3l-22.5 38.9-22.5-38.9h45z m-54.7-16.9l-33-57.2h66l-33 57.2z m34.3-57.1h63.2l-31.6 54.7-31.6-54.7z m-2.1 408.8c-116.4 0-211-94.7-211-211 0-90.9 57.8-168.6 138.6-198.2l36.7 63.6-6.3 10.9h12.6l29.4 50.9 29.4-50.9h15.4l-7.7-13.3 35.3-61.2c80.8 29.6 138.6 107.3 138.6 198.2 0 116.3-94.6 211-211 211zM666 494.6c-22.5-22.5-49-39.4-77.9-50.1l0.1-0.2h-0.5c-23.7-8.7-49.1-13.3-75.1-13.3-26 0-51.4 4.6-75.1 13.3h-0.5l0.1 0.2c-28.9 10.7-55.5 27.6-77.9 50.1-41 41-63.6 95.5-63.6 153.5s22.6 112.5 63.6 153.5 95.5 63.6 153.5 63.6 112.5-22.6 153.5-63.6 63.6-95.5 63.6-153.5S707 535.6 666 494.6z"
                  fill="#000000"
                ></path>
                <path
                  d="M370.9 174.6v193.7c0 43.5 35.6 79.1 79.1 79.1h127.8c43.5 0 79.1-35.6 79.1-79.1V174.6h-286z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M577.8 450.4H450c-45.3 0-82.1-36.8-82.1-82.1V174.6h6v193.7c0 42 34.1 76.1 76.1 76.1h127.8c42 0 76.1-34.1 76.1-76.1V174.6h6v193.7c0 45.2-36.8 82.1-82.1 82.1z"
                  fill="#000000"
                ></path>
                <path
                  d="M433.3 256.7m-67.9 0a67.9 67.9 0 1 0 135.8 0 67.9 67.9 0 1 0-135.8 0Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M433.3 327.6c-39.1 0-70.9-31.8-70.9-70.9 0-39.1 31.8-70.9 70.9-70.9 39.1 0 70.9 31.8 70.9 70.9 0 39.1-31.8 70.9-70.9 70.9z m0-135.8c-35.8 0-64.9 29.1-64.9 64.9s29.1 64.9 64.9 64.9 64.9-29.1 64.9-64.9-29.1-64.9-64.9-64.9z"
                  fill="#000000"
                ></path>
                <path
                  d="M593.9 256.7m-67.9 0a67.9 67.9 0 1 0 135.8 0 67.9 67.9 0 1 0-135.8 0Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M593.9 327.6c-39.1 0-70.9-31.8-70.9-70.9 0-39.1 31.8-70.9 70.9-70.9 39.1 0 70.9 31.8 70.9 70.9 0.1 39.1-31.8 70.9-70.9 70.9z m0-135.8c-35.8 0-64.9 29.1-64.9 64.9s29.1 64.9 64.9 64.9 64.9-29.1 64.9-64.9-29.1-64.9-64.9-64.9z"
                  fill="#000000"
                ></path>
                <path
                  d="M533.3 271.4h-6c0-7.4-6-13.4-13.4-13.4s-13.4 6-13.4 13.4h-6c0-10.7 8.7-19.4 19.4-19.4s19.4 8.7 19.4 19.4zM513.7 403.4c-23.1 0-46.5-5.6-46.5-16.3h6c0 3.5 14.3 10.3 40.5 10.3s40.5-6.8 40.5-10.3h6c0 10.7-23.4 16.3-46.5 16.3zM667.2 144c-0.8-2.1-2.3-3.6-4.2-4.4-1.3-0.5-2.3-2.3-3.7-4.6-5.6-9.2-14.9-24.6-67.4-19.1-6.8-6.3-44.7-38.8-84.5-27.4-5.8-0.7-45.2-4.6-70.1 16.2-3.7 1.3-28.1 9.2-42.4 0-6.2-4-9.8-10.8-10.5-20.4L384 80l-3.9 1.8c-1 0.5-24.4 11.4-29.9 34.9-3.7 16.2 2 34 17.1 53-0.6 1.5-0.8 3.4 0.1 5.5 2.1 4.6 9.1 7.4 22 8.9 16.3 1.9 41.6 1.5 75.3-1.2 3.7 0.8 27.5 5.6 54.7 5.6 7.1 0 14.5-0.3 21.8-1.2 4.9 0.4 67.3 4.9 116.5-9.1l1.3-0.4 0.6-1.2c1.1-2.4 11.1-23.4 7.6-32.6z"
                  fill="#000000"
                ></path>
                <path
                  d="M750.1 914.4H275.6c-6.6 0-12-5.4-12-12V526.9c0-6.6 5.4-12 12-12h474.5c6.6 0 12 5.4 12 12v375.6c0 6.5-5.4 11.9-12 11.9z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M750.1 917.4H275.6c-8.3 0-15-6.7-15-15V526.9c0-8.3 6.7-15 15-15h474.5c8.3 0 15 6.7 15 15v375.6c0 8.2-6.7 14.9-15 14.9zM275.6 517.9c-5 0-9 4-9 9v375.6c0 5 4 9 9 9h474.5c5 0 9-4 9-9V526.9c0-5-4-9-9-9H275.6z"
                  fill="#000000"
                ></path>
                <path
                  d="M287.8 741.2c-12.9 18-33.9 18-46.8 0-12.9-18-12.9-47.1 0-65 12.9-18 33.9-18 46.8 0 12.9 17.9 12.9 47 0 65z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M264.4 757.7c-9.8 0-19-5.2-25.8-14.7-13.6-18.9-13.6-49.7 0-68.6 6.8-9.5 16-14.7 25.8-14.7s19 5.2 25.8 14.7c13.6 18.9 13.6 49.7 0 68.6-6.8 9.5-16 14.7-25.8 14.7z m0-92c-7.8 0-15.3 4.3-21 12.2-12.2 17-12.2 44.6 0 61.5 5.7 7.9 13.1 12.2 21 12.2 7.8 0 15.3-4.3 21-12.2 12.2-17 12.2-44.6 0-61.5-5.7-7.9-13.1-12.2-21-12.2z"
                  fill="#000000"
                ></path>
                <path
                  d="M786 741.2c-12.9 18-33.9 18-46.8 0-12.9-18-12.9-47.1 0-65 12.9-18 33.9-18 46.8 0 12.9 17.9 12.9 47 0 65z"
                  fill="#ffffff"
                ></path>
                <path
                  d="M762.6 757.7c-9.8 0-19-5.2-25.8-14.7-13.6-18.9-13.6-49.7 0-68.6 6.8-9.5 16-14.7 25.8-14.7s19 5.2 25.8 14.7c13.6 18.9 13.6 49.7 0 68.6-6.8 9.5-16 14.7-25.8 14.7z m0-92c-7.8 0-15.3 4.3-21 12.2-12.2 17-12.2 44.6 0 61.5 5.7 7.9 13.1 12.2 21 12.2 7.8 0 15.3-4.3 21-12.2 12.2-17 12.2-44.6 0-61.5-5.7-7.9-13.2-12.2-21-12.2z"
                  fill="#000000"
                ></path>
                <path
                  d="M513.1 540.8c-95.4 0-173.1 77.6-173.1 173.1 0 95.4 77.6 173.1 173.1 173.1 95.4 0 173.1-77.6 173.1-173.1s-77.6-173.1-173.1-173.1z"
                  fill="#000000"
                ></path>
                <path
                  d="M487.9 745.4c0-8.9 3.9-14 10-14s10 5 10 14-3.9 14.1-10 14.1c-6.2 0-10-5.1-10-14.1z m16.1 0c0-7.2-2.5-10.8-6.2-10.8-3.6 0-6.2 3.6-6.2 10.8 0 7.2 2.6 10.9 6.2 10.9 3.7 0 6.2-3.7 6.2-10.9z m19.7-14h3.5l-24.7 46.1H499l24.7-46.1z m-5.1 32.1c0-8.9 3.9-14 10-14 6 0 10 5 10 14s-3.9 14.1-10 14.1-10-5.1-10-14.1z m16.1 0c0-7.2-2.4-10.8-6.1-10.8-3.7 0-6.2 3.6-6.2 10.8 0 7.2 2.5 10.9 6.2 10.9s6.1-3.7 6.1-10.9zM378.8 651.9h16.4l33.5 53.3 33.5-53.3h16.4l-33.5 51.9h22.6v13h-30.8v13h30.8v13h-30.8v26h-15.7v-26h-30.8v-13h30.8v-13h-30.8v-13h21.9l-33.5-51.9zM592.1 775.1v-12.7c-6.3-0.8-11.5-2.2-15.5-4.3s-7.4-5.3-10.3-9.9c-2.9-4.6-4.6-10.1-5-16.7l12.8-2.4c1 6.8 2.7 11.8 5.2 15 3.6 4.5 7.8 7 12.8 7.5v-40.4c-5.2-1-10.5-3-16-6.1-4-2.3-7.2-5.4-9.3-9.4-2.2-4-3.3-8.5-3.3-13.6 0-9 3.2-16.3 9.6-21.9 4.3-3.8 10.6-6.1 19-6.9v-6.1h7.5v6.1c7.4 0.7 13.2 2.9 17.5 6.5 5.5 4.6 8.9 10.9 10 19l-13.1 2c-0.8-5-2.3-8.8-4.7-11.5-2.4-2.7-5.6-4.4-9.8-5.3v36.6c6.4 1.6 10.6 2.8 12.7 3.7 3.9 1.7 7.2 3.9 9.7 6.3 2.5 2.5 4.4 5.5 5.7 8.9 1.3 3.4 2 7.1 2 11.1 0 8.8-2.8 16.1-8.4 22-5.6 5.9-12.8 9-21.7 9.4v12.8h-7.4z m0-111c-4.9 0.8-8.8 2.7-11.7 5.9-2.8 3.2-4.3 7-4.3 11.3 0 4.3 1.2 7.9 3.6 10.9 2.4 2.9 6.5 5.2 12.3 7v-35.1z m7.5 87.6c4.9-0.6 9-2.7 12.2-6.4 3.2-3.7 4.8-8.2 4.8-13.6 0-4.6-1.1-8.3-3.4-11.1-2.3-2.8-6.8-5.3-13.6-7.5v38.6z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
            <span className="ml-3 text-xl selection:text-yellow-400">
              <a
                className="hover:text-yellow-400"
                href="https://linktr.ee/rohis10iq"
              >
                {" "}
                Rohail Iqbal
              </a>
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#Hero" className="mr-5 hover:text-white selection:text-yellow-400">
              Home
            </a>
            <a href="#About" className="mr-5 hover:text-white selection:text-yellow-400">
              About
            </a>
            <a href="#Experience" className="mr-5 hover:text-white selection:text-yellow-400">
              Experience
            </a>
            <a href="#Contact" className="mr-5 hover:text-white selection:text-yellow-400">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
