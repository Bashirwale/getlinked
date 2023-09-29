import {
  bigIdea,
  wireLine,
  lightPurpleStar,
  darkPurpleStar,
} from "../constant";

const IntroSection = () => {
  return (
    <section className="flex items-center flex-col md:flex-row px-8 py-8  md:px-12 lg:px-24 border-b border-gray-700">
      <div className="relative md:px-10 py-3 md:w-2/4">
        <img src={bigIdea} alt="idea logo" className="h-auto md:w-116" />
        <img
          src={wireLine}
          alt="wired line"
          className="absolute left-28 xs:left-40 md:-bottom-5 md:left-36 lg:left-44 xl:left-64 rotate-[-70deg] w-5 xs:w-6 sm:w-7 md:w-8 lg:w-12 h-auto"
        />
        <img
          src={lightPurpleStar}
          alt="star"
          className="absolute top-24 -left-2 md:top-48 md:left-4 w-2 h-auto md:w-3 lg:w-5"
        />
      </div>
      <div className="relative md:p-10 md:w-2/4 mt-10 md:m-0 text-center md:text-left">
        <h2 className="flex flex-col text-xl md:text-3xl font-bold">
          Introduction to getlinked{" "}
          <span className="text-color-dark">tech Hackathon 1.0</span>
        </h2>
        <p className="text-sm mt-4">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
        <img
          src={darkPurpleStar}
          alt="star"
          className="absolute top-5 -right-2 md:right-24 md:top-16 w-2 h-auto md:w-3 lg:w-5"
        />
      </div>
    </section>
  );
};

export default IntroSection;
