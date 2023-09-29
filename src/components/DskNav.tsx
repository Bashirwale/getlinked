import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const DskNav = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex items-center md:gap-16 lg:gap-24">
      <div className="flex items-center md:gap-6 lg:gap-10">
        <NavLink to="/" className="text-base font-normal">
          timeline
        </NavLink>
        <NavLink to="/" className="text-base font-normal">
          Overview
        </NavLink>
        <NavLink to="/" className="text-base font-normal">
          FAQs
        </NavLink>
        <NavLink to="/contact" className="text-base font-normal">
          Contact
        </NavLink>
      </div>
      <button
        onClick={() => navigate("/register")}
        className="primary-color rounded px-10 py-2 text-base"
      >
        Register
      </button>
    </div>
  );
};

export default DskNav;
