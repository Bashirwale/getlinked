import { FC } from "react";
import { registerer } from "../components/constant";
import { manWalk, womanWalk } from "../components/constant";

/* interface Props {
  setRegisteredStatus: () => void;
} */
const Register = () => {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between py-12 lg:py-16 px-8 md:px-12 lg:px-24">
      <h2 className="relative z-20 lg:hidden text-color-light text-xl font-semibold">
        Register
      </h2>
      <div className="lg:w-2/4">
        <img
          src={registerer}
          alt="man sitting"
          className=" relative z-30 w-full h-auto"
        />
      </div>
      <div className="lg:w-2/4 lg:p-6 lg:bg-white lg:bg-opacity-5 rounded-lg">
        <h2 className="hidden lg:block text-color-light text-3xl font-semibold">
          Register
        </h2>
        <div className="flex gap-2 items-end">
          <p className="text-xs md:text-base font-normal mt-8 lg:mt-10">
            Be part of this movement!
          </p>
          <div className="flex items-center flex-row-reverse border-b border-dotted border-purple-700 px-5">
            <img src={manWalk} alt="man walking" className="w-5 h-auto" />
            <img src={womanWalk} alt="woman walking" className="w-5 h-auto" />
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-normal mt-1 md:mt-3 lg:mt-5">
          CREATE YOUR ACCOUNT
        </h3>
        <form className="flex flex-col gap-5 mt-3">
          <div>
            <label htmlFor="team">Team's Name</label>
            <input
              type="text"
              id="team"
              className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-2 md:p-3 text-white text-base"
              placeholder="Enter the name of your group"
            />
          </div>
          <div>
            <label htmlFor="team">Team's Name</label>
            <input
              type="text"
              id="team"
              className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-2 md:p-3 text-white text-base"
              placeholder="Enter the name of your group"
            />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-2 md:p-3 text-white text-base"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="topic">Project Topic</label>
            <input
              type="text"
              id="topic"
              className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-2 md:p-3 text-white text-base"
              placeholder="What is your group project topic"
            />
          </div>
          <div className="flex gap-4 lg:flex-col">
            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-2 md:p-3 text-white text-base"
              >
                <option value="1">select your category</option>
              </select>
            </div>
            <div>
              <label htmlFor="size">Group Size</label>
              <select
                name="category"
                id="category"
                className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-2 md:p-3 text-white text-base"
              >
                <option value="1">select</option>
              </select>
            </div>
          </div>
          <p className="text-xxx text-color-light font-normal md:text-xs">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="check" id="" className="w-4 h-auto" />
            <span className="text-xs font-normal">
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>
          <button className="text-base primary-color px-6 py-2 md:py-3 lg:py-4 rounded w-full">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
