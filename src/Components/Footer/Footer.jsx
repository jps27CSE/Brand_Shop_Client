import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../assets/brandLogo.png";

const Footer = () => {
  const { themeMode } = useContext(AuthContext);
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <footer
        className={`footer p-10 bg-base-200 text-base-content ${
          themeMode ? "dark:bg-slate-600" : ""
        }`}
      >
        <aside>
          <img className="w-24" src={logo} />

          <p className={`font-bold ${themeMode ? "text-white" : ""}`}>
            ElectroCart
            <br />
            All Rights Reserved
          </p>
        </aside>
        <nav className={` ${themeMode ? "text-white" : ""}`}>
          <header className="text-lg font-bold text-indigo-500">Explore</header>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Brands</a>
          <a className="link link-hover">Deals</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav className={` ${themeMode ? "text-white" : ""}`}>
          <header className="text-lg font-bold text-indigo-500">Company</header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav className={` ${themeMode ? "text-white" : ""}`}>
          <header className="text-lg font-bold text-indigo-500">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
