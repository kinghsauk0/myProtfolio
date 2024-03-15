import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../assets/kingshuks.png";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5" >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex justify-center items-center gap-5">
            <Link to="/" className="flex items-center">
              <img src={img} className="w-[70px] h-[70px] rounded-[35px]" alt="portfolio " />
            </Link>
            <h1 className="text-2xl italic ">Kingshuk</h1>
          </div>
          <div>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFD700]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
                >Home</NavLink>
              </li>
              <li>
                <NavLink to="/about"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFD700]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
                >About</NavLink>
              </li>
              <li>
                <NavLink to="/resume"
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFD700]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
                >Resume</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
