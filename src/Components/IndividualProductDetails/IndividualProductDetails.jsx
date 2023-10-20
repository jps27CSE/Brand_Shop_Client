import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const IndividualProductDetails = () => {
  const [fetchData, setFetchData] = useState(null);
  const { user, themeMode } = useContext(AuthContext);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://b8a10-brandshop-server-side-jps27-g9mnai010-jps27cses-projects.vercel.app/product/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFetchData(data);
        }
      });
  }, [params.id]);

  const handleAddCart = () => {
    const sendingData = {
      email: user?.email,
      id: fetchData._id,
      image: fetchData.image,
      name: fetchData.name,
      brand: fetchData.brand,
      type: fetchData.type,
      price: fetchData.price,
      description: fetchData.description,
      rating: fetchData.rating,
    };

    fetch(
      `https://b8a10-brandshop-server-side-jps27-g9mnai010-jps27cses-projects.vercel.app/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendingData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Product Added to Cart Successfully");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto mb-60 mt-10">
      <div className="grid lg:grid-cols-3 ">
        <div className="col-span-1">
          <img className="w-96 rounded-lg" src={fetchData?.image} alt="" />
        </div>

        <div
          className={`shadow-lg rounded-lg col-span-2 p-5 ${
            themeMode ? "bg-white" : ""
          }   `}
        >
          <h1
            className="text-2xl md:text-4xl lg:text-4xl 
          "
          >
            <span className="font-bold  ">Product Name:</span>
            {fetchData?.name}
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
        <button
          onClick={handleAddCart}
          className="btn btn-primary mt-5  ml-28 md:ml-0 lg:ml-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default IndividualProductDetails;
