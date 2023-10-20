import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndiProducts from "./IndiProducts/IndiProducts";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const IndividualBrand = () => {
  const [data, setData] = useState([]);
  const [IndiProduct, setIndiProduct] = useState([]);
  const params = useParams();
  const { themeMode } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://b8a10-brandshop-server-side-jps27-g9mnai010-jps27cses-projects.vercel.app/brand/${params.id.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((item) => setIndiProduct(item));
  }, [params.id]);
  useEffect(() => {
    fetch("/BrandData.json")
      .then((res) => res.json())
      .then((item) => {
        if (item) {
          setData(item.brands);
        }
      });
  }, []);

  const filter = data.filter((item) => item.brand_name === params.id);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="carousel h-[500px]">
        {filter[0]?.advertisement_slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full${
              index === 0 ? " active" : ""
            }`}
          >
            <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${
                  index === 0 ? filter[0]?.advertisement_slides.length : index
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${
                  index === filter[0]?.advertisement_slides.length - 1
                    ? 0
                    : index + 2
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      <h1
        className={`text-4xl font-bold text-center mt-5  ${
          themeMode ? "text-white" : ""
        } `}
      >
        Welcome To <span className="text-[#64CCC5]">{params.id}</span> EcoSystem
      </h1>

      <div>
        {IndiProduct.length > 0 && (
          <h1
            className={`text-4xl font-bold  mt-10  ${
              themeMode ? "text-white" : ""
            }`}
          >
            Products
          </h1>
        )}
      </div>
      {IndiProduct.length === 0 ? (
        <p
          className={`text-center text-4xl mt-10 mb-10  ${
            themeMode ? "text-white" : ""
          } `}
        >
          ... No Products Available ...
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {IndiProduct.map((prod) => (
            <IndiProducts product={prod} key={prod._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndividualBrand;
