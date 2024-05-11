import React from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css"

function NavBar() {
  return (
    <>
      <nav className="bg-[#020024] px-20 py-7 stroke">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">SIGHTMATIC</div>

          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                WaitList
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/login" className="text-white bg-purple-600 rounded">
                Login/SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
