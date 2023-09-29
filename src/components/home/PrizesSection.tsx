import {
  trophy,
  goldMedal,
  silverMedal,
  bronzeMedal,
  star,
  darkPurpleStar,
} from "../constant";
import { PiStarFourFill } from "react-icons/pi";

const PrizesSection = () => {
  return (
    <section className="relative py-12 px-8 md:px-12 lg:px-24">
      <div>
        <h2 className="text-xl md:text-3xl text-center font-normal">
          Prizes and <span className="block text-color-light">Rewards</span>
        </h2>
        <p className="text-xs md:text-sm text-center m-1">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <img
        src={darkPurpleStar}
        alt="star"
        className="absolute w-2 h-3 md:top-14 md:left-72 md:w-5 md:h-7"
      />
      <div className="flex flex-col gap-16 lg:gap-10 lg:flex-row lg:mt-44">
        <div className="relative z-10 lg:w-2/4">
          <img src={trophy} alt="trophy" className="trophy" />
          <img
            src={star}
            alt="star"
            className="absolute bottom-6 left-16 md:-bottom-4 md:left-36 w-2 h-3 md:w-4 md:h-5"
          />
        </div>
        <div className="relative flex justify-center gap-2 xs:gap-4 md:gap-6 lg:gap-8 lg:w-2/4">
          <img
            src={star}
            alt="star"
            className="absolute -top-16 right-4 md:-top-4 md:-right-4 w-2 h-3 md:w-4 md:h-5"
          />
          <img
            src={star}
            alt="star"
            className="absolute bottom-0 hidden md:inline-block left-16 md:-top-24 md:left-12 w-2 h-3 md:w-4 md:h-5"
          />
          <div className=" bg-violet-500 bg-opacity-10 border border-purple-500 rounded-lg p-1 md:p-2 lg:p-4 w-28 h-32 md:w-52 md:h-72">
            <img
              src={silverMedal}
              alt="silver medal"
              className="absolute -top-10 -left-3 s:left-1.5 xs:left-4 md:-top-20 md:-left-9 w-20 h-auto md:w-44"
            />
            <div className="flex flex-col justify-center items-center h-full mt-5 md:mt-8">
              <p className="text-xs md:text-3xl text-center font-bold">2nd</p>
              <p className="text-xs md:text-2xl text-center font-semibold">
                Runner
              </p>
              <p className="text-sm text-color-light text-center md:text-3xl font-bold md:mt-2">
                N300,000
              </p>
            </div>
          </div>
          <div className=" bg-violet-700 bg-opacity-10 border border-purple-700 rounded-lg p-1 md:p-4 w-28 h-36 md:w-52 md:h-80">
            <img
              src={goldMedal}
              alt="gold medal"
              className="absolute -top-20 left-16 s:left-20 xs:left-24 md:left-48 md:-top-32 lg:left-28 w-30 s:w-36 xs:w-40 h-auto  md:w-72"
            />
            <div className="flex flex-col justify-center items-center h-full mt-6 md:mt-8">
              <p className="text-xs md:text-4xl text-center font-bold">1st</p>
              <p className="text-xs md:text-2xl text-center font-semibold">
                Runner
              </p>
              <p className="text-sm text-color-dark text-center md:text-3xl font-bold md:mt-6">
                N400,000
              </p>
            </div>
          </div>
          <div className="bg-violet-500 bg-opacity-5 border border-purple-500 rounded-lg p-1 lg:p-4 w-28 h-32 md:w-52 md:h-72 z-10">
            <img
              src={bronzeMedal}
              alt="bronze medal"
              className="absolute -top-10 -right-4 s:right-1.5 xs:right-3 md:-top-20 md:right-4 lg:-right-11 w-20 h-auto md:w-44"
            />
            <div className="flex flex-col justify-center items-center h-full mt-5 md:mt-8">
              <p className="text-xs md:text-3xl text-center font-bold">3rd</p>
              <p className="text-xs md:text-2xl text-center font-semibold">
                Runner
              </p>
              <p className="text-sm text-color-light md:text-3xl text-center font-bold md:mt-2">
                N150,000
              </p>
            </div>
          </div>
          <PiStarFourFill className="absolute right-24 -bottom-8 md:-bottom-2 md:right-52 text-xs md:text-2xl text-gray-700" />
        </div>
      </div>
      <div className="absolute top-24 left-0  md:bottom-56 md:left-64 h-28 w-44 md:h-44 md:w-56 bg-violet-800 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-4 right-6 md:-bottom-12 md:-right-16 h-32 w-28 md:h-64 md:w-64 bg-violet-800 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default PrizesSection;
