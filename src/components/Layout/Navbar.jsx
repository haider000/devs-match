/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navitems = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
  { label: 'PostFeed', to: '/postfeed' },
];

function Navbar() {
  const [burger, setburger] = useState(false);
  return (
    <div>
      <nav className="bg-gray-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* <!-- Website Logo --> */}
                <Link to="/">
                  <div className="flex items-center py-4 px-2">
                    {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                    <span className="font-semibold text-white text-lg">
                      Devs Match
                    </span>
                  </div>
                </Link>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1">
                {Navitems.map((item, idx) => {
                  return (
                    <NavLink
                      exact={true}
                      key={item.label}
                      to={item.to}
                      activeClassName="border-b-4 border-green-500"
                      className="py-4 px-2 text-green-500 font-semibold"
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ">
              <Link
                to="/login"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </button>
              {!burger && (
                <div className="md:hidden flex items-center">
                  <button
                    className="outline-none mobile-menu-button"
                    onClick={() => setburger(!burger)}
                  >
                    <svg
                      className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                      x-show="!showMenu"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        {burger && (
          <div className="md:hidden mobile-menu">
            <ul className="">
              <li className="active">
                {Navitems.map((item) => {
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
