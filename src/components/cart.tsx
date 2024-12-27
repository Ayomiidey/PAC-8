import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const Cart = () => {
  const { item, totalQuantity, totalPrice } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-2/3 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {item.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          item.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Total: ${item.totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="w-full md:w-1/3 bg-gray-200 p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="bg-green-500 text-white w-full py-2 mt-4 rounded">
          Proceed to Checkout
        </button>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Payment Options</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                PayPal
              </button>
            </li>
            <li>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                Credit Card
              </button>
            </li>
            <li>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">
                Bank Transfer
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
