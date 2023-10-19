import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartItems from "./CartItems/CartItems";
import { toast } from "react-toastify";

const Cart = () => {
  const { user, themeMode } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
      });
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto mb-80 mt-28">
      <h1 className={`text-2xl font-bold ${themeMode ? "text-white" : ""}`}>
        {cartItems?.length} Cart Items
      </h1>

      <div className="grid  lg:grid-cols-2">
        <div className="col-span-1">
          {cartItems?.map((item) => (
            <CartItems
              key={item._id}
              cart={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
        <div className="col-span-1">
          <div className="shadow-2xl">
            <h1
              className={`text-2xl font-bold mb-2 ${
                themeMode ? "text-white" : ""
              }`}
            >
              Ready For Purchase
            </h1>
            <button
              onClick={() => toast.success("Thanks For Purchase")}
              className="btn btn-primary w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
