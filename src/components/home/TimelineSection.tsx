import { star, darkPurpleStar } from "../constant";
import { PiStarFourFill } from "react-icons/pi";

const TimelineSection = () => {
  return (
    <section className="py-12 md:py-24 px-8 md:px-12 lg:px-24 ">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-bold">
        Timeline
      </h2>
      <div className="flex justify-center mt-1 sm:mt-2 md:mt-3 lg:mt-4">
        <p className="text-sm text-center font-normal max-w-xs">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="relative mt-4 sm:mt-8 md:mt-20 lg:mt-44">
        <img
          src={darkPurpleStar}
          alt="star"
          className="absolute -top-6 left-6 md:left-24 lg:-top-24 lg:left-32 w-2 sm:w-4 md:w-5 lg:w-6"
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between px-4 gap-2 sm:gap-14 xs:gap-4 md:gap-32 lg:gap-44">
          <div className="relative flex flex-col md:items-end md:w-2/4">
            <h3 className="text-xs md:text-2xl md:text-right text-color-light">
              Hackathon Announcement
            </h3>
            <p className="text-xs md:text-sm font-normal md:text-right max-w-sm mt-1 md:mt-2">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <div className="absolute -bottom-6 -left-7 md:left-72 lg:bottom-2 lg:left-104 xl:left-108">
              <div className="relative">
                <span className="absolute -top left-2 md:-top-32 lg:-top-36 lg:left-7 left-r md:left-5 block w-1 h-16 md:h-28 lg:h-32 bg-color-light"></span>
                <span className="flex items-center justify-center text-sm md:text-xl lg:text-2xl font-bold h-5 w-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full p-1 primary-color">
                  1
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs md:text-2xl text-color-light md:w-2/4">
            November 18, 2023
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between px-4 md:p-0 gap-2 xs:gap-4 sm:gap-6 md:gap-32 lg:gap-44 mt-5 md:mt-16 lg:mt-32">
          <p className="text-xs md:text-2xl md:text-right text-color-light md:w-2/4">
            November 18, 2023
          </p>
          <div className="relative flex flex-col md:w-2/4">
            <h3 className="text-xs md:text-2xl text-color-light">
              Teams Registration begins
            </h3>
            <p className="text-xs md:text-sm font-normal max-w-sm mt-1 md:mt-2">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>

            <div className="absolute -bottom-6 -left-7 md:-left-24 lg:bottom-2 lg:-translate-x-1/2">
              <div className="relative">
                <span className="absolute -top left-2 md:-top-32 lg:-top-36 left-r md:left-5 lg:left-7 block w-1 h-16 md:h-28 lg:h-32 bg-color-light"></span>
                <span className="flex items-center justify-center text-sm md:text-xl lg:text-2xl font-bold h-5 w-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full p-1 primary-color">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between px-4 gap-2 xs:gap-4 sm:gap-6 md:gap-32 lg:gap-44 mt-5 md:mt-28 lg:mt-36">
          <div className="relative flex flex-col md:items-end md:w-2/4">
            <h3 className="text-xs md:text-2xl md:text-right text-color-light">
              Teams Registration ends
            </h3>
            <p className="text-xs md:text-sm font-normal md:text-right max-w-sm mt-1 md:mt-2">
              Interested Participants are no longer Allowed to register
            </p>
            <div className="absolute -bottom-6 -left-7 md:left-72 lg:bottom-2 lg:left-104">
              <div className="relative">
                <span className="absolute -top left-2 md:-top-32 lg:-top-36 lg:left-7 left-r md:left-5 block w-1 h-16 md:h-28 lg:h-32 bg-color-light"></span>
                <span className="flex items-center justify-center text-sm md:text-xl lg:text-2xl font-bold h-5 w-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full p-1 primary-color">
                  3
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs md:text-2xl text-color-light md:w-2/4">
            November 18, 2023
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between px-4 md:p-0 gap-2 xs:gap-4 sm:gap-6 md:gap-32 md:mt-16 lg:gap-44 mt-5 lg:mt-28">
          <p className="text-xs md:text-2xl md:text-right text-color-light md:w-2/4">
            November 18, 2023
          </p>
          <div className="relative flex flex-col md:w-2/4">
            <h3 className="text-xs md:text-2xl text-color-light">
              Announcement of the accepted teams and ideas
            </h3>
            <p className="text-xs md:text-sm font-normal max-w-sm mt-1 md:mt-2">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
            <div className="absolute -bottom-6 -left-7 md:-left-24 lg:bottom-2  lg:-translate-x-1/2">
              <div className="relative">
                <span className="absolute -top left-2 md:-top-32 lg:-top-36 lg:left-7 left-r md:left-5 block w-1 h-16 md:h-28 lg:h-32 bg-color-light"></span>
                <span className="flex items-center justify-center text-sm md:text-xl lg:text-2xl font-bold h-5 w-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full p-1 primary-color">
                  4
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between px-4 gap-2 xs:gap-4 sm:gap-6 md:gap-32 lg:gap-44 mt-5 md:mt-20 lg:mt-32">
          <div className="relative flex flex-col md:items-end md:w-2/4">
            <h3 className="text-xs md:text-2xl md:text-right text-color-light">
              Getlinked Hackathon 1.0 Offically Begins
            </h3>
            <p className="text-xs md:text-sm font-normal md:text-right max-w-sm mt-1 md:mt-2">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
            <div className="absolute -bottom-6 -left-7 md:left-72 lg:bottom-2 lg:left-104">
              <div className="relative">
                <span className="absolute -top left-2 md:-top-32 lg:-top-36 lg:left-7 left-r md:left-5 block w-1 h-16 md:h-28 lg:h-32 bg-color-light"></span>
                <span className="flex items-center justify-center text-sm md:text-xl lg:text-2xl font-bold h-5 w-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full p-1 primary-color">
                  5
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs md:text-2xl text-color-light md:w-2/4">
            November 18, 2023
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between px-4 md:p-0 gap-2 xs:gap-4 sm:gap-6 md:gap-32 lg:gap-44 mt-5 md:mt-24 lg:mt-28">
          <p className="text-xs md:text-2xl md:text-right text-color-light md:w-2/4">
            November 18, 2023
          </p>
          <div className="relative flex flex-col md:w-2/4">
            <h3 className="text-xs md:text-2xl text-color-light">Demo Day</h3>
            <p className="text-xs md:text-sm font-normal max-w-sm mt-1 md:mt-2">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
            <div className="absolute -bottom-6 -left-7 md:-left-24 lg:bottom-2 lg:-translate-x-1/2">
              <div className="relative">
                <span className="absolute -top left-2 md:-top-32 lg:left-7 lg:-top-36 left-r md:left-5 block w-1 h-16 md:h-28 lg:h-32 bg-color-light"></span>
                <span className="flex items-center justify-center text-sm md:text-xl lg:text-2xl font-bold h-5 w-5 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full p-1 primary-color">
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={star}
          alt="star"
          className="absolute top-72 right-28 md:top-1/3 md:right-44 h-3 w-2 md:h-8 md:w-6"
        />
        <PiStarFourFill className="absolute -left-6 -bottom-8 md:bottom-10 md:left-32 text-xs md:text-2xl text-gray-700" />
      </div>
    </section>
  );
};

export default TimelineSection;
