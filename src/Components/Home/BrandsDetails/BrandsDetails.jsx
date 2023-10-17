import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandsDetails = () => {
  const [brands, setBrands] = useState([]);
  console.log(brands);
  useEffect(() => {
    fetch("/BrandData.json")
      .then((res) => res.json())
      .then((data) => setBrands(data.brands));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5  ml-[-10px] md:ml-32 lg:ml-0">
      {brands.map((brand) => (
        <Link key={brand.id} to={`/brand/${brand.brand_name}`}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl h-[300px]">
            <figure>
              <img
                className="w-[220px] h-[150px]"
                src={brand.brand_logo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-4xl text-center text-cyan-700">
                {brand.brand_name}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BrandsDetails;
