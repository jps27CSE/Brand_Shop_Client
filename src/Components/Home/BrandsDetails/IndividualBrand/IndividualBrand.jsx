import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualBrand = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("/BrandData.json")
      .then((res) => res.json())
      .then((item) => setData(item.brands));
  }, []);

  const filter = data.filter((item) => item.brand_name === params.id);
  console.log(filter);

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
    </div>
  );
};

export default IndividualBrand;
