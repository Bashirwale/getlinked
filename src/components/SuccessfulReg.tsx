import { happyMan, verified } from "./constant";

const SuccessfulReg = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-full bg-bgColor bg-opacity-90 z-50 px-5">
      <div className="border border-purple-600 rounded-md px-10 py-6 md:py-8 md:px-14">
        <div className="flex w-full justify-center">
          <img
            src={verified}
            alt="verified logo"
            className=" w-2/4 -mr-24 md:-mr-52"
          />
          <img src={happyMan} alt="happy man" className="w-2/4" />
        </div>
        <p className="text-base text-center font-semibold my-5">
          Congratulations you have successfully Registered!
        </p>
        <p className="text-center text-xs font-medium">
          Yes, it was easy and you did it! check your mail box for next step
        </p>
        <button className="text-base py-3 px-6 primary-color w-full rounded-md mt-4">
          back
        </button>
      </div>
    </div>
  );
};

export default SuccessfulReg;
