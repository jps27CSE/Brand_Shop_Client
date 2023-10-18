import PropTypes from "prop-types";

const CartItems = ({ cart }) => {
  console.log(cart);

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
      <button className="btn btn-accent m-5">Delete</button>
    </div>
  );
};

export default CartItems;

CartItems.propTypes = {
  cart: PropTypes.object,
};
