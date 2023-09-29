import { star, darkPurpleStar, lightPurpleStar, privacy } from "../constant";

const PrivacySection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row gap-8 py-12 md:py-20 lg:py-28 px-8 md:px-12 lg:px-24 ">
      <div className="relative lg:w-2/4">
        <h2 className="flex flex-col text-xl text-center lg:text-left md:text-2xl lg:text-3xl font-bold">
          Privacy Policy and
          <span className="text-color-light"> Terms</span>
        </h2>
        <p className="text-xs lg:text-sm font-normal text-center lg:text-left">
          Last updated on September 12, 2023
        </p>
        <p className="text-xs lg:text-sm font-normal text-center lg:text-left mt-6">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="border border-purple-700 px-4 py-12 md:px-6 lg:p-16 bg-gray-800 bg-opacity-5 rounded-md mt-8">
          <p className="text-xs lg:text-sm font-normal text-center">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div>
            <h3 className="text-sm font-bold text-color-light mt-4">
              Licensing Policy
            </h3>
            <p className="text-xs lg:text-sm font-normal">
              Here are terms of our Standard License:
            </p>
          </div>
          <div className="flex gap-2 mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
              <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
            </svg>
            <p className="text-xs lg:text-sm font-normal">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className="flex gap-2 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
              <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
            </svg>
            <p className="text-xs md:text-sm font-normal">
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>

          <div className="flex items-center justify-center mt-10">
            <button className="primary-color rounded px-8  md:px-10 lg:px-12 md:py-3 py-2 text-base">
              Read More
            </button>
          </div>
        </div>
        <img
          src={star}
          alt="star"
          className="absolute -top-6 right-14 lg:right-48 w-2 lg:w-4 h-auto grayscale"
        />
        <img
          src={lightPurpleStar}
          alt="star"
          className="absolute bottom-32 -left-6 lg:-left-12 w-4 lg:w-6 h-auto"
        />
        <img
          src={darkPurpleStar}
          alt="star"
          className="absolute top-36 xs:top-32 lg:top-16 lg:-right-24 right-2 w-4 lg:w-6 h-auto"
        />
      </div>
      <div className="relative w-full lg:w-2/4">
        <img
          src={privacy}
          alt="man with lock and key"
          className="absolute -bottom-8 s:right-2 xs:right-6 md:right-32 md:-bottom-14 lg:bottom-64 lg:right-0 w-80 md:w-96 lg:w-146 h-auto"
        />
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="249"
          height="311"
          viewBox="0 0 249 311"
          fill="none"
        >
          <path
            d="M249 141.364C249 219.82 195.88 293.188 124.5 311C53.12 293.188 0 219.82 0 141.364V56.5455L124.5 0L249 56.5455V141.364ZM124.5 282.727C176.375 268.591 221.333 205.543 221.333 144.474V74.9227L124.5 30.8173L27.6667 74.9227V144.474C27.6667 205.543 72.625 268.591 124.5 282.727ZM163.233 141.364V120.159C163.233 100.368 143.867 84.8182 124.5 84.8182C105.133 84.8182 85.7667 100.368 85.7667 120.159V141.364C77.4667 141.364 69.1667 149.845 69.1667 158.327V207.805C69.1667 217.7 77.4667 226.182 85.7667 226.182H161.85C171.533 226.182 179.833 217.7 179.833 209.218V159.741C179.833 149.845 171.533 141.364 163.233 141.364ZM145.25 141.364H103.75V120.159C103.75 108.85 113.433 101.782 124.5 101.782C135.567 101.782 145.25 108.85 145.25 120.159V141.364Z"
            fill="url(#paint0_linear_114_900)"
            fill-opacity="0.14"
          />
          <defs>
            <linearGradient
              id="paint0_linear_114_900"
              x1="124.5"
              y1="0"
              x2="124.5"
              y2="311"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#903AFF" />
              <stop offset="1" stop-color="#FF26B9" />
            </linearGradient>
          </defs>
        </svg>
        <img
          src={star}
          alt="star"
          className="absolute top-24 right-14 w-2 lg:w-3 h-auto"
        />
        <img
          src={star}
          alt="star"
          className="absolute bottom-0 left-20 lg:bottom-96 lg:left-40 w-2 lg:w-3 h-auto"
        />
        <img
          src={lightPurpleStar}
          alt="star"
          className="absolute top-16 -left-4 lg:top-72 lg:left-44 w-2 lg:w-3 h-auto"
        />
        <img
          src={star}
          alt="star"
          className="absolute bottom-0 right-5 lg:bottom-80 lg:right-24 w-4 lg:w-4 h-auto grayscale"
        />
      </div>
      <div className="absolute top-60 -left-4  md:top-56 md:-left-12 h-28 w-44 md:h-44 md:w-56 bg-violet-900 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-4 right-6 hidden md:block md:-bottom-12 md:-right-16 h-32 w-28 md:h-64 md:w-64 bg-violet-900 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default PrivacySection;
