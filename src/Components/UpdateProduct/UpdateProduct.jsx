import { useNavigate, useParams } from "react-router-dom";
import UpdateProductLogo from "../../assets/updateProduct.png";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const UpdateProduct = () => {
  const [product, setProduct] = useState(null);
  const { themeMode } = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const smallerBrand = brand.toLowerCase();

    const UpdateProduct = {
      image,
      name,
      brand: smallerBrand,
      type,
      price,
      description,
      rating,
    };

    fetch(`http://localhost:3000/update/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Product Updated Successfully");
        }

        navigate(-1);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1
          className={`text-4xl font-bold text-center mt-5 mb-2 ${
            themeMode ? "text-white" : ""
          } `}
        >
          Update Product
        </h1>
      </div>
      <div className="hero   mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="w-[600px]" src={UpdateProductLogo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  defaultValue={product?.image}
                  name="photo"
                  placeholder="Image Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={product?.name}
                  name="name"
                  placeholder="Name Of Product"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={product?.brand}
                  name="brand"
                  placeholder="Brand"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  defaultValue={product?.type}
                  name="type"
                  placeholder="Product Type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  defaultValue={product?.price}
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  type="text"
                  defaultValue={product?.description}
                  name="description"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  defaultValue={product?.rating}
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
