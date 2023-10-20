import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CartItems = ({ cart, cartItems, setCartItems }) => {
  const handleClick = () => {
    fetch(
      `https://b8a10-brandshop-server-side-jps27-g9mnai010-jps27cses-projects.vercel.app/cart/${cart._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = cartItems.filter((item) => item._id !== cart._id);
          setCartItems(remaining);
          toast.success("Removed From Cart");
        }
      });
  };

  return (
    <div className="card card-compact w-96 bg-base-100 mb-2 shadow-xl">
      <figure>
        <img className="w-[150px]" src={cart?.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cart?.name}</h2>
        <p>Price: {cart?.price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleClick} className="btn btn-accent">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

CartItems.propTypes = {
  cart: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};
