import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IndiProducts = ({ product }) => {
  const { name, image, brand, price, _id, type, rating } = product;

  return (
    <div>
      <div
        className="card card-compact w-96 h-[600px] bg-base-100 shadow-xl"
        key={_id}
      >
        <figure>
          <img src={image} alt="brands" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold">
            Brand: <span className="text-blue-500">{brand}</span>
          </p>
          <p className="font-bold">
            Type: <span className="text-rose-400">{type}</span>
          </p>
          <p className="font-bold">
            Price: <span className="text-orange-500">{price}</span> TK
          </p>
          <p className="font-bold">
            Rating: <span className="text-green-500">{rating}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/product/${_id}`}>
              <button className="btn bg-[#3876BF] text-white hover:text-black">
                Details
              </button>
            </Link>
            <Link to={{ pathname: `/updateProduct/${_id}` }}>
              <button className="btn bg-[#F99417] text-white hover:text-black">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiProducts;

IndiProducts.propTypes = {
  product: PropTypes.object,
};
