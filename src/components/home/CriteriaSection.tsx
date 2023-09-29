import { crateriaImg, star, darkPurpleStar } from "../constant";
import { PiStarFourFill } from "react-icons/pi";

function CriteriaSection() {
  return (
    <section className="relative flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 py-16 md:py-24 px-8 md:px-12 lg:px-24 border-b border-gray-700">
      <div className="relative md:w-2/4">
        <img
          src={crateriaImg}
          className="relative z-50 w-80 h-auto md:w-146"
          alt="man and woman"
        />
        <img
          src={star}
          alt="star"
          className="absolute -bottom-16 right-6 h-auto w-2 md:w-4 lg:w-6"
        />
        <div className="absolute -top-5 left-20 w-28 h-28 rounded-full bg-gradient z-0 hidden md:block"></div>
        <img
          src={darkPurpleStar}
          alt="star"
          className="absolute -top-8 left-28 md:-top-24 md:left-32 h-auto w-2 md:w-4 lg::w-6"
        />
        <PiStarFourFill className="absolute right-28 bottom-24 md:bottom-52 md:right-56 text-xs md:text-2xl text-gray-700" />
      </div>
      <div className="md:w-2/4 md:px-5">
        <h2 className="flex flex-col text-xl text-center md:text-left md:text-2xl lg:text-3xl font-bold mb-6">
          Judging Criteria
          <span className="text-color-light"> Key attributes</span>
        </h2>
        <p className="text-xs font-normal mb-6 text-center md:text-left">
          <span className="text-base text-customPurple font-bold">
            Innovation and Creativity
          </span>
          : Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="text-xs font-normal mb-6 text-center md:text-left">
          <span className="text-base text-customPurple font-bold">
            Functionality
          </span>
          : Assess how well the solution works. Does it perform its intended
          functions effectively and without major issues? Judges would consider
          the completeness and robustness of the solution.
        </p>
        <p className="text-xs font-normal mb-6 text-center md:text-left">
          <span className="text-base text-customPurple font-bold">
            Impact and Relevance
          </span>
          : Determine the potential impact of the solution in the real world.
          Does it address a significant problem, and is it relevant to the
          target audience? Judges would assess the potential social, economic,
          or environmental benefits.
        </p>
        <p className="text-xs font-normal mb-6 text-center md:text-left">
          <span className="text-base text-customPurple font-bold">
            Technical Complexity
          </span>
          : Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p className="text-xs font-normal mb-8 text-center md:text-left">
          <span className="text-base text-customPurple font-bold">
            Adherence to Hackathon Rules
          </span>
          : Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <button className="primary-color rounded px-8  md:px-10 lg:px-12 md:py-3 py-2 text-base">
            Read More
          </button>
        </div>
      </div>
      <div className="absolute md:bottom-20 md:left-28 h-28 w-44 md:h-44 md:w-56 bg-violet-900 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-4 md:-bottom-12 md:-right-16 h-32 w-28 md:h-64 md:w-64 bg-violet-950 rounded-full blur-3xl "></div>
    </section>
  );
}

export default CriteriaSection;
