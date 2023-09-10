import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <>
      <nav className="flex justify-around items-center bg-slate-900 py-2">
        <Link to="/" className=" text-white no-underline">
          Website
        </Link>
        <div className="flex gap-4 items-center content-center ">
          <div>
            <Link
              to="/home"
              className="italic text-white no-underline items-center"
            >
              Home
            </Link>
          </div>
          <div>
            <Link to="/service" className="italic text-white no-underline">
              Service
            </Link>
          </div>
          <div>
            <Link to="/register" className="italic text-white no-underline">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navi;
