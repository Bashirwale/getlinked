import {
  star,
  darkPurpleStar,
  lightPurpleStar,
  whispersms,
  winWise,
  libertyAssured,
  libertyPay,
} from "../constant";

const SponsorsSection = () => {
  return (
    <section className="relative py-12 px-8 md:px-12 lg:px-24 border-b border-gray-700">
      <h2 className=" text-xl md:text-3xl font-bold text-center">
        Partners and Sponsors
      </h2>
      <div className="flex justify-center md:mt-2 lg:mt-4">
        <p className="text-sm font-normal text-center max-w-md">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>

      <img
        src={lightPurpleStar}
        alt="star"
        className="absolute top-52 left-36 w-2 h-auto md:w-6"
      />
      <div className="relative px-8 py-6 s:px-12 xs:16 sm:px-20 md:px-24 md:py-10 lg:p-32 grid grid-cols-3 items-center gap-6 md:gap-10 border border-purple-600 rounded-md mt-16 md:mt-28 z-20">
        <img
          src={darkPurpleStar}
          alt="star"
          className="absolute top-28 md:top-20 right-1/2 w-2 md:w-6 h-auto"
        />
        <div className="relative flex items-center justify-center">
          <img
            src={libertyAssured}
            alt=""
            className="w-8 xs:12 sm:w-24 md:w-32 h-auto"
          />
          <span className="absolute -bottom-2.5 md:-bottom-4 lg:-bottom-5 w-14 md:w-36 lg:w-64 h-0.5 md:h-1 bg-purple-600 rounded-md"></span>
          <span className="absolute -right-3.5 md:-right-6 w-0.5 md:w-1 h-6 md:h-28 bg-purple-600 rounded-md"></span>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            src={libertyPay}
            alt="liberty pay"
            className="h-auto w-14 md:w-52"
          />
          <span className="absolute -bottom-5 md:-bottom-16 w-14 md:w-36 h-0.5 md:h-1 lg:w-64 bg-purple-600 rounded-md"></span>
          <span className="absolute -right-4 md:-right-5 w-0.5 md:w-1 h-6 md:h-28 bg-purple-600 rounded-md"></span>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            src={winWise}
            alt="win wise logo"
            className="w-9 md:w-32 h-auto"
          />
          <span className="absolute -bottom-3 md:-bottom-6 lg:-bottom-7 w-14 md:w-36 lg:w-64 h-0.5 md:h-1 bg-purple-600 rounded-md"></span>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            src={whispersms}
            alt="whisper sms logo"
            className="w-10 md:w-36"
          />
          <span className="absolute -right-3.5 md:-right-6 w-0.5 md:w-1 h-6 md:h-28 bg-purple-600 rounded-md"></span>
        </div>
        <div className="relative flex items-center justify-center">
          <p className="text-xs md:text-5xl font-normal">
            Pay<span className="text-sky-500">box</span>
          </p>
          <span className="absolute -right-4 md:-right-6 w-0.5 md:w-1 h-6 md:h-28 bg-purple-600 rounded-md"></span>
        </div>
        <div className="relative flex items-center justify-center">
          <div>
            <p className="text-xs md:text-2xl flex ml-5 gap-1 lg:text-4xl font-normal">
              Vuzual <span className="text-red-700">Plus</span>
            </p>
            <p className="text-xxs md:text-xxm lg:text-xs text-end font-normal">
              Design Studios
            </p>
          </div>
        </div>
        <img
          src={star}
          alt="star"
          className="absolute bottom-24 md:bottom-16 left-1/2 w-2 h-auto md:w-6"
        />
      </div>
      <div className="absolute top-0 -left-64  md:top-56 md:-left-12 h-28 w-44 md:h-44 md:w-56 bg-violet-900 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-4 right-6 md:-bottom-12 md:-right-16 h-32 w-28 md:h-64 md:w-64 bg-violet-900 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default SponsorsSection;
