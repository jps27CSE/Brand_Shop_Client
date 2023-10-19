import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const BrandsDetails = () => {
  const { themeMode } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/BrandData.json")
      .then((res) => res.json())
      .then((data) => setBrands(data.brands));
  }, []);

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5  ml-[15px] md:ml-40 lg:ml-0 mb-5 ">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/brand/${brand.brand_name}`}>
            <div
              className={`card card-compact w-96 bg-base-100 shadow-xl h-[300px] ${
                themeMode ? "dark:bg-slate-600" : ""
              }`}
            >
              <figure>
                <img
                  className="w-[220px] h-[150px] pt-5"
                  src={brand.brand_logo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2
                  className={`font-bold text-4xl text-center  ${
                    themeMode ? "text-white" : "text-cyan-700"
                  }`}
                >
                  {brand.brand_name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsDetails;
