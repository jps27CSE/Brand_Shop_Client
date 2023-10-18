import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartItems from "./CartItems/CartItems";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState(null);
  console.log(cartItems);
  useEffect(() => {
    fetch(`http://localhost:3000/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
      });
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto mb-80 mt-28">
      <h1 className="text-2xl font-bold">{cartItems?.length} Cart Items</h1>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          {cartItems?.map((item) => (
            <CartItems key={item._id} cart={item} />
          ))}
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Cart;
