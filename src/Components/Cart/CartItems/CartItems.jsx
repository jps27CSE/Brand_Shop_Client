import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CartItems = ({ cart, cartItems, setCartItems }) => {
  const handleClick = () => {
    fetch(`http://localhost:3000/cart/${cart._id}`, {
      method: "DELETE",
    })
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
    <div
      className=" flex flex-row
    mt-5 mb-5 rounded-lg shadow-2xl w-[500px] h-[200px]"
    >
      <div>
        <img className="w-[300px] h-[200px]" src={cart.image} alt="" />
      </div>
      <div>
        <h1 className="text-xl font-bold p-5">{cart?.name}</h1>
        <h1 className="text-xl font-bold p-5">Price: {cart?.price}</h1>
      </div>
      <button onClick={handleClick} className="btn btn-accent m-5">
        Delete
      </button>
    </div>
  );
};

export default CartItems;

CartItems.propTypes = {
  cart: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};
