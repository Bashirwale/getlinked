import { Link } from "react-router-dom";
import { PiStarFourFill } from "react-icons/pi";
import {
  manImage,
  fire,
  star,
  bulb,
  virtualReality,
  chainImage,
} from "../constant";

const HeroSection = () => {
  return (
    <section className="relative sm:px-6 pt-2 md:pt-3 md:px-12 lg:px-24 lg:pt-5 border-b border-gray-700">
      <h2 className=" relative text-base text-center md:text-4xl md:text-right italic font-bold">
        gniting a Revolution in HR Innovation
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-3 md:-bottom-5  right-7 xs:right-20 md:right-2 h-2 w-28 md:h-3 md:w-64"
          width="255"
          height="17"
          viewBox="0 0 255 17"
          fill="none"
        >
          <path
            d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
            stroke="#FF26B9"
            stroke-width="5"
          />
        </svg>
      </h2>
      <img
        src={star}
        alt="star"
        className="absolute top-16 left-28 md:top-16 md:left-36 w-2 h-3 md:w-3 md:h-auto lg:w-6 lg:h-8"
      />
      <div className="md:flex items-center mt-12 md:mt-24">
        <div className="relative flex flex-col items-center justify-center md:block md:w-2/4">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold px-6 md:p-0 break-words mb-4 text-center md:text-left">
            getlinked Tech Hackathon
            <span className="text-color-dark">1.0</span>
            <img
              src={chainImage}
              alt="chain"
              className="inline h-8 w-8 md:w-12 md:h-auto lg:h-20 lg:w-20"
            />
            <img
              src={bulb}
              alt="bulb"
              className="absolute -top-5 right-20 xs:right-32 md:-top-12 md:right-28 w-4 h-7 md:w-8 md:h-12 lg:w-12 lg:h-16"
            />
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-center md:text-left px-8 md:p-0 mb-6 md:mb-10">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link
            to="/register"
            className="primary-color rounded px-10 md:px-16 md:py-4 py-2 text-base"
          >
            Register
          </Link>
          <p className="text-5xl font-normal mt-6 md:mt-8 lg:mt-16 py-1">
            00 00 00
          </p>
          <PiStarFourFill className=" absolute text-xs bottom-20 right-16 md:bottom-20 md:right-28 md:text-xl text-gray-700" />
        </div>
        <div className="relative mt-6 md:m-0 md:w-2/4 ">
          <img
            src={virtualReality}
            alt="vitual reality"
            className="absolute -top-7 z-20 w-full"
          />
          <img
            src={manImage}
            alt="man wearing smart glasses"
            className="grayscale xl:w-164"
          />
          <img
            src={fire}
            alt="fire img"
            className="absolute top-0 md:top-32 md:left-12 hidden md:inline-block md:h-14 md:w-14"
          />
          <PiStarFourFill className=" absolute top-0 left-16 text-xl text-gray-700" />
          <div className="absolute -top-10 right-3 md:top-8 md:left-64 h-32 w-44 md:h-32 md:w-64 bg-purple-950 rounded-full blur-3xl z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
