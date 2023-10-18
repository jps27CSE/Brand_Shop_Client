import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [allData, setAllData] = useState([]);
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
      <h1 className="text-4xl font-bold mb-5">All Products</h1>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5">
        {allData.map((data) => (
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            key={data._id}
          >
            <figure>
              <img src={data?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data?.name}</h2>
              <p className="font-bold">
                Brand: <span className="text-blue-500">{data?.brand}</span>
              </p>
              <p className="font-bold">
                Price: <span className="text-green-500">{data?.price}</span> TK
              </p>
              <div className="card-actions justify-end">
                <Link to={`/product/${data._id}`}>
                  <button className="btn bg-[#3876BF] text-white hover:text-black">
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
