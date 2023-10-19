import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AllProducts = () => {
  const [allData, setAllData] = useState([]);
  const { themeMode } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:3000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAllData(data);
        }
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-5">
      <h1
        className={`text-4xl font-bold mb-5 ${themeMode ? "text-white" : ""}`}
      >
        All Products
      </h1>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 ml-[20px] md:ml-40 lg:ml-0">
        {allData.map((data) => (
          <div
            className={`card card-compact w-96 bg-base-100 shadow-xl ${
              themeMode ? "dark:bg-slate-600" : ""
            }`}
            key={data._id}
          >
            <figure>
              <img src={data?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className={`card-title ${themeMode ? "text-white" : ""}`}>
                {data?.name}
              </h2>
              <p className={`font-bold ${themeMode ? "text-white" : ""} `}>
                Brand: <span className="text-blue-500">{data?.brand}</span>
              </p>
              <p className={`font-bold ${themeMode ? "text-white" : ""} `}>
                Price: <span className="text-green-500">{data?.price}</span> TK
              </p>
              <div className="card-actions justify-end">
                <Link to={`/product/${data._id}`}>
                  <button className="btn bg-[#3876BF] text-white hover:text-black border-none">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
