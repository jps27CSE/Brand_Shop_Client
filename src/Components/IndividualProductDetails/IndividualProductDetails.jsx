import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualProductDetails = () => {
  const [fetchData, setFetchData] = useState(null);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    fetch(`http://localhost:3000/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFetchData(data);
        }
      });
  }, [params.id]);

  return (
    <div className="max-w-7xl mx-auto mb-60 mt-10">
      <div className="grid lg:grid-cols-3 ">
        <div className="col-span-1">
          <img className="w-96 rounded-lg" src={fetchData?.image} alt="" />
        </div>

        <div className="shadow-lg rounded-lg col-span-2 p-5">
          <h1 className=" text-2xl md:text-4xl lg:text-4xl">
            <span className="font-bold">Product Name:</span> {fetchData?.name}
          </h1>
          <h1 className="text-xl mt-5">
            <span className="font-bold">Brand:</span> {fetchData?.brand}
          </h1>
          <h1 className="text-xl mt-5">
            <span className="font-bold">Type:</span> {fetchData?.type}
          </h1>
          <h1 className="text-xl mt-5">
            <span className="font-bold">Price:</span> {fetchData?.price} TK
          </h1>
          <p className="text-sm mt-5">
            <span className="font-bold">Description:</span>{" "}
            {fetchData?.description}
            TK
          </p>
        </div>
        <button className="btn btn-primary mt-5  ml-28 md:ml-0 lg:ml-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default IndividualProductDetails;