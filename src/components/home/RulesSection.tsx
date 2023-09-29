import { womanImg, star } from "../constant";
import { PiStarFourFill } from "react-icons/pi";

const RulesSection = () => {
  return (
    <section className="relative flex flex-col-reverse md:gap-8 md:flex-row md:justify-between md:items-center  pb-8 px-8 md:p-12 lg:px-24 lg:py-12 border-b border-gray-700">
      <div className="relative md:w-2/4">
        <h2 className="flex flex-col text-lg text-center md:text-left md:text-3xl font-bold mb-6">
          <span>Rules and </span>
          <span className="text-color-dark">Guidelines</span>
        </h2>
        <p className=" text-xs md:text-base text-center md:text-left z-30">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
        <img
          src={star}
          alt="star"
          className="absolute -top-40 left-8 h-auto w-2 md:-bottom-8 md:-right-10 md:w-6"
        />
        <img
          src={star}
          alt="star"
          className="absolute -bottom-5 left-16 h-3 w-2 md:hidden"
        />
        <PiStarFourFill className="absolute top-14 -right-3 md:-top-4 md:left-52 text-xs md:text-2xl text-gray-700" />
      </div>
      <div className="relative md:w-2/4">
        <img
          src={womanImg}
          alt="woman reading"
          className="w-72 h-auto md:w-152 "
        />
        <img
          src={star}
          alt="star"
          className="absolute bottom-40 left-0 h-8 md:inline-block hidden w-6"
        />
      </div>
      <div className="absolute top-10 left-0 md:-top-14 md:left-32 h-28 w-44 md:h-72 md:w-72 bg-violet-900 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-4 md:-bottom-12 md:-right-16 h-32 w-28 md:h-64 md:w-64 bg-violet-950 rounded-full blur-3xl "></div>
    </section>
  );
};

export default RulesSection;
