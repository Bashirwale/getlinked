import React from "react";

const Contact = () => {
  return (
    <div className="py-12 lg:py-16 px-8 md:px-12 lg:px-24">
      <div className="hidden lg:flex items-center gap-32 px-14">
        <div className="w-1/4 py-6">
          <h2 className="text-color-light text-3xl font-semibold">
            Get in touch
          </h2>
          <p className="text-base font-normal mt-5">Contact Information</p>
          <p className="text-base font-normal mt-5">
            27,Alara Street Yaba 100012 Lagos State
          </p>
          <p className="text-base font-normal mt-5">Call Us : 07067981819</p>
          <p className="text-base font-normal mt-5">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>
          <div className="mt-7">
            <h3 className="text-color-dark ">Share on</h3>
            <div className="flex items-center gap-4 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
              >
                <path
                  d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
              >
                <path
                  d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                  fill="#F8F8F8"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z"
                  fill="#F8F8F8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-8 bg-white bg-opacity-5 rounded-xl shadow-md">
          <h2 className="text-color-light text-xl font-semibold">
            <span className="block">Questions or need assistance?</span>
            <span className="block">Let us know about it!</span>
          </h2>
          <form className=" flex flex-col items-center gap-5 mt-4">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-3 text-white text-base"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Mail"
              className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-3 text-white text-base"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="border rounded-md bg-white bg-opacity-5 w-full h-28 outline-none p-3 text-white text-base"
            ></textarea>
            <button className="text-base primary-color px-5 py-2 rounded">
              submit
            </button>
          </form>
        </div>
      </div>
      <div className="lg:hidden">
        <h2 className="text-color-light text-xl font-semibold">
          <span className="block">Questions or need assistance?</span>
          <span className="block">Let us know about it!</span>
        </h2>
        <p className="text-xs font-normal mt-6">
          Email us below to any question related to our event
        </p>
        <form className="flex flex-col items-center gap-6 mt-5">
          <input
            type="text"
            placeholder="Team's Name"
            className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-3 text-white text-base"
          />
          <input
            type="text"
            placeholder="Topic"
            className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-3 text-white text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-3 text-white text-base"
          />
          <textarea
            className="border rounded-md bg-white bg-opacity-5 w-full outline-none p-3 text-white text-base h-40"
            placeholder="Message"
          ></textarea>
          <button className="text-base primary-color px-5 py-2 rounded w-full">
            submit
          </button>
        </form>
        <div className="mt-7">
          <h3 className="text-color-dark text-center">Share on</h3>
          <div className="flex items-center justify-center gap-4 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M5.38143 1.37985H11.1768C13.3845 1.37985 15.1783 3.17365 15.1783 5.3814V11.1768C15.1783 12.238 14.7567 13.2558 14.0063 14.0063C13.2559 14.7567 12.2381 15.1783 11.1768 15.1783H5.38143C3.17368 15.1783 1.37988 13.3845 1.37988 11.1768V5.3814C1.37988 4.32013 1.80147 3.30232 2.55191 2.55188C3.30235 1.80144 4.32016 1.37985 5.38143 1.37985ZM5.24345 2.7597C4.58472 2.7597 3.95298 3.02137 3.48719 3.48716C3.0214 3.95295 2.75973 4.58469 2.75973 5.24342V11.3147C2.75973 12.6877 3.8705 13.7985 5.24345 13.7985H11.3148C11.9735 13.7985 12.6052 13.5368 13.071 13.071C13.5368 12.6052 13.7985 11.9735 13.7985 11.3147V5.24342C13.7985 3.87047 12.6877 2.7597 11.3148 2.7597H5.24345ZM11.9012 3.79458C12.1299 3.79458 12.3493 3.88544 12.511 4.04717C12.6727 4.2089 12.7636 4.42826 12.7636 4.65698C12.7636 4.88571 12.6727 5.10506 12.511 5.26679C12.3493 5.42853 12.1299 5.51939 11.9012 5.51939C11.6725 5.51939 11.4531 5.42853 11.2914 5.26679C11.1297 5.10506 11.0388 4.88571 11.0388 4.65698C11.0388 4.42826 11.1297 4.2089 11.2914 4.04717C11.4531 3.88544 11.6725 3.79458 11.9012 3.79458ZM8.27911 4.82946C9.194 4.82946 10.0714 5.1929 10.7184 5.83983C11.3653 6.48676 11.7287 7.36418 11.7287 8.27908C11.7287 9.19397 11.3653 10.0714 10.7184 10.7183C10.0714 11.3652 9.194 11.7287 8.27911 11.7287C7.36421 11.7287 6.48679 11.3652 5.83986 10.7183C5.19294 10.0714 4.82949 9.19397 4.82949 8.27908C4.82949 7.36418 5.19294 6.48676 5.83986 5.83983C6.48679 5.1929 7.36421 4.82946 8.27911 4.82946ZM8.27911 6.20931C7.73017 6.20931 7.20372 6.42737 6.81556 6.81553C6.4274 7.20369 6.20934 7.73014 6.20934 8.27908C6.20934 8.82801 6.4274 9.35447 6.81556 9.74262C7.20372 10.1308 7.73017 10.3488 8.27911 10.3488C8.82804 10.3488 9.3545 10.1308 9.74265 9.74262C10.1308 9.35447 10.3489 8.82801 10.3489 8.27908C10.3489 7.73014 10.1308 7.20369 9.74265 6.81553C9.3545 6.42737 8.82804 6.20931 8.27911 6.20931Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                d="M4.83764 0.759689H0.666748L5.5884 7.21867L0.934877 12.4884H2.51386L6.3201 8.17867L9.60438 12.4884H13.7753L8.64627 5.75728L13.0603 0.759689H11.4813L7.91457 4.79787L4.83764 0.759689ZM10.2002 11.3155L3.05012 1.93256H4.2418L11.3919 11.3155H10.2002Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
            >
              <path
                d="M5.64342 8.00387H7.36823L8.05815 5.24418H5.64342V3.86434C5.64342 3.15372 5.64342 2.48449 7.02327 2.48449H8.05815V0.166352C7.83324 0.136686 6.98394 0.0697632 6.08704 0.0697632C4.2139 0.0697632 2.88373 1.21296 2.88373 3.3124V5.24418H0.813965V8.00387H2.88373V13.8682H5.64342V8.00387Z"
                fill="#F8F8F8"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M5.22991 3.44961C5.22972 3.81557 5.08417 4.16647 4.82527 4.42511C4.56637 4.68375 4.21533 4.82895 3.84937 4.82877C3.48341 4.82858 3.13252 4.68303 2.87387 4.42413C2.61523 4.16523 2.47003 3.81419 2.47022 3.44823C2.4704 3.08227 2.61595 2.73138 2.87485 2.47274C3.13375 2.21409 3.48479 2.06889 3.85075 2.06908C4.21671 2.06926 4.5676 2.21481 4.82625 2.47371C5.08489 2.73261 5.23009 3.08365 5.22991 3.44961ZM5.2713 5.85054H2.51161V14.4884H5.2713V5.85054ZM9.63161 5.85054H6.88572V14.4884H9.60401V9.95558C9.60401 7.43046 12.8949 7.19589 12.8949 9.95558V14.4884H15.6201V9.01729C15.6201 4.76046 10.7493 4.91915 9.60401 7.00961L9.63161 5.85054Z"
                fill="#F8F8F8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
