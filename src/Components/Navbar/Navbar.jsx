import { Link, NavLink } from "react-router-dom";
import Brandlogo from "../../assets/brandLogo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BsFillSunFill } from "react-icons/bs";
import { PiMoonFill } from "react-icons/pi";

const Navbar = () => {
  const { user, logOut, themeMode, setThemeMode } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={`${themeMode ? "text-white" : ""} hover:bg-sky-700`}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`${themeMode ? "text-white" : ""} hover:bg-sky-700`}
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`${themeMode ? "text-white" : ""} hover:bg-sky-700`}
          to="/cart"
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto ">
      <div
        className={`navbar bg-base-100 w-full ${
          themeMode ? "dark:bg-slate-800" : ""
        } `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img className="w-[40px]" src={Brandlogo} alt="" />
          <a
            className={`btn btn-ghost normal-case text-sm md:text-xl lg:text-xl ${
              themeMode ? "text-white" : ""
            }`}
          >
            ElectroCart
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mr-2"
              >
                <div className="w-8  lg:w-10 rounded-full">
                  <img src={user.photoURL} data-aos="fade-down" />
                </div>
              </label>
              <div>
                <h1
                  className={`text-sm md:text-xl lg:text-xl mr-2 ${
                    themeMode ? "text-white" : ""
                  }`}
                  data-aos="fade-down"
                >
                  {user.displayName}
                </h1>
              </div>
            </>
          )}
          {themeMode ? (
            <BsFillSunFill
              onClick={() => setThemeMode(!themeMode)}
              className={`text-2xl mr-4 cursor-pointer ${
                themeMode ? "text-white" : ""
              }`}
            />
          ) : (
            <PiMoonFill
              onClick={() => setThemeMode(!themeMode)}
              className="text-2xl mr-4 cursor-pointer"
            />
          )}
          {!user ? (
            <Link to="/login">
              <button className="btn ">Login</button>
            </Link>
          ) : (
            <button onClick={logOut} className="btn">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
