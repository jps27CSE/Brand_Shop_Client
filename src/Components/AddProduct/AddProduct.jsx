import { toast } from "react-toastify";
import addProductPhoto from "../../assets/addproduct.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const AddProduct = () => {
  const { themeMode } = useContext(AuthContext);
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

    const NewProduct = {
      image,
      name,
      brand: smallerBrand,
      type,
      price,
      description,
      rating,
    };

    fetch("http://localhost:3000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Product Added Successfully");
        }

        form.reset();
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
          Add Product
        </h1>
      </div>
      <div className="hero   mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="w-[600px]" src={addProductPhoto} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
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
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  max={10}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
