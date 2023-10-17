import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useContext } from "react";

function App() {
  const { themeMode } = useContext(AuthContext);

  return (
    <div className={`${themeMode ? "dark:bg-slate-800" : ""}`}>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
