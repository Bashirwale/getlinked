import { PiStarFourFill } from "react-icons/pi";
import { faqImg, darkPurpleStar, lightPurpleStar, star } from "../constant";

const FaqsSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-20 md:gap-8 py-12 md:py-16 lg:py-24 px-8 md:px-12 lg:px-24 border-b border-gray-700">
      <div className=" relative md:w-2/4 lg:w-2/5">
        <h2 className="md:text-2xl text-center md:text-left font-bold">
          Frequently Ask{" "}
          <span className="block text-color-light">Question</span>
        </h2>
        <p className="text-sm text-center md:text-left font-normal mt-4">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className="mt-6 md:mt-8 lg:mt-12">
          <p className="flex items-center justify-between p-1 md:py-2 lg:py-3 font-normal border-b border-violet-900">
            Can I work on a project I started before the hackathon?{" "}
            <span className="text-color-light text-xl font-normal">+</span>
          </p>
          <p className="flex items-center justify-between p-1 md:py-3 text-sm font-normal border-b border-violet-900">
            What happens if I need help during the hackathon{" "}
            <span className="text-color-light text-xl font-normal">+</span>
          </p>
          <p className="flex items-center justify-between p-1 md:py-3 font-normal border-b border-violet-900">
            What happens if I don't have an idea for a project?{" "}
            <span className="text-color-light text-xl font-normal">+</span>
          </p>
          <p className="flex items-center justify-between p-1 md:py-3 text-sm md:text-left font-normal border-b border-violet-900">
            Can I join a team or do I have to come with one?{" "}
            <span className="text-color-light text-xl font-normal">+</span>
          </p>
          <p className="flex items-center justify-between p-1 md:py-3 text-sm  font-normal border-b border-violet-900">
            What happens after the hackathon ends
            <span className="text-color-light text-xl font-normal">+</span>
          </p>
          <p className="flex items-center justify-between py-3 text-sm font-normal border-b border-violet-900">
            Can I work on a project I started before the hackathon?{" "}
            <span className="text-color-light text-xl font-normal">+</span>
          </p>
        </div>
        <img
          src={darkPurpleStar}
          alt="star"
          className="absolute -top-2 left-10 md:-top-14 md:-left-6 w-3 h-3 md:h-9 md:w-7"
        />
      </div>
      <div className="relative md:w-2/4 lg:w-3/5">
        <img src={faqImg} alt="faqs img" />
        <span className="absolute tommy-font -top-10 left-20 xs:left-28 xs:-top-16 md:-top-24 xl:left-56 text-6xl md:text-7xl lg:text-9xl font-medium text-color-dark">
          ?
        </span>
        <span className="absolute -top-5 left-8 xs:left-10 tommy-font md:-top-10 md:left-14 lg:left-20 text-5xl md:text-6xl lg:text-8xl font-medium text-color-dark">
          ?
        </span>
        <span className="absolute -top-5 right-24 xs:right-28 tommy-font md:-top-10 md:right-24 lg:right-60 text-5xl md:text-6xl lg:text-8xl font-medium text-color-dark">
          ?
        </span>
        <img
          src={star}
          alt="star"
          className="absolute -bottom-2 right-14 md:bottom-0 md:right-32 w-4 h-5 md:w-5 md:h-6"
        />
        <img
          src={lightPurpleStar}
          alt="star"
          className="absolute -top-4 left-32 md:-top-8 md:left-80 w-2 h-3 md:w-5 md:h-6"
        />
        <img
          src={lightPurpleStar}
          alt="star"
          className="absolute top-24 left-14 md:top-28 md:left-36 w-2 h-3 md:w-5 md:h-6"
        />
        <PiStarFourFill className="absolute bottom-36 left-3 md:bottom-80 md:left-16 text-gray-700 text-xs md:text-2xl" />
      </div>
    </section>
  );
};

export default FaqsSection;
