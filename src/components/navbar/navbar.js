import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <>
      <nav className="flex justify-around items-center bg-white py-4 sticky w-full ">
        <Link to="/" className="  no-underline text-orange-300 text-xl">
          Website
        </Link>
        <div className="flex gap-4 items-center content-center ">
          <div>
            <Link
              to="/home"
              className=" text-white no-underline items-center text-orange-300 text-xl"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/repo"
              className=" text-white no-underline items-center text-orange-300 text-xl"
            >
              Report
            </Link>
          </div>
          <div>
            <Link
              to="/Dashboard"
              className=" text-white no-underline text-orange-300 text-xl"
            >
              Dashboard
            </Link>
          </div>
          <div>
            <Link
              to="/About us"
              className=" text-white no-underline text-orange-300 text-xl"
            >
              About us
            </Link>
          </div>
        </div>

        <div>
          <button className="bg-orange-200 px-3 text-orange-500  mx-3 rounded-lg">
            Register
          </button>
          <button className="bg-orange-200 px-3 text-orange-500  mx-3 rounded-lg">
            Login
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navi;
