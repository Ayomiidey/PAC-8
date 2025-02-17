// import { useDispatch } from "react-redux";
// import { useAppSelector } from "../redux/hooks";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } from "../redux/cartSlice";

// const Cart = () => {
//   const { item, totalQuantity, totalPrice } = useAppSelector(
//     (state) => state.cart
//   );
//   const dispatch = useDispatch();

//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-4">
//       <div className="w-full md:w-2/3 bg-gray-100 p-4 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//         {item.length === 0 ? (
//           <p>Your cart is empty!</p>
//         ) : (
//           item.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border-b py-4"
//             >
//               <div>
//                 <h3 className="text-lg font-bold">{item.title}</h3>
//                 <p>Price: ${item.price}</p>
//                 <p>Total: ${item.totalPrice.toFixed(2)}</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   className="bg-gray-300 px-3 py-1 rounded"
//                   onClick={() => dispatch(decreaseQuantity(item.id))}
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   className="bg-gray-300 px-3 py-1 rounded"
//                   onClick={() => dispatch(increaseQuantity(item.id))}
//                 >
//                   +
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                   onClick={() => dispatch(removeFromCart(item.id))}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="w-full md:w-1/3 bg-gray-200 p-4 rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Summary</h2>
//         <p>Total Items: {totalQuantity}</p>
//         <p>Total Price: ${totalPrice.toFixed(2)}</p>
//         <button className="bg-purple-800 text-white w-full py-2 mt-4 rounded">
//           Proceed to Checkout
//         </button>
//         <div className="mt-4">
//           <h3 className="text-lg font-bold">Payment Options</h3>
//           <ul className="mt-2 space-y-2">
//             <li>
//               <button className="bg-gray-800 text-white px-4 py-2 rounded">
//                 PayPal
//               </button>
//             </li>
//             <li>
//               <button className="bg-gray-800 text-white px-4 py-2 rounded">
//                 Credit Card
//               </button>
//             </li>
//             <li>
//               <button className="bg-gray-800 text-white px-4 py-2 rounded">
//                 Bank Transfer
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import {
  ShoppingCart,
  Trash2,
  CreditCard,
  Wallet,
  Landmark,
} from "lucide-react";

const Cart = () => {
  const { item, totalQuantity, totalPrice } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  if (item.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 text-blue-500" />
          <p className="text-blue-700">
            Your cart is empty. Start shopping to add items to your cart!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[calc(100vh-2rem)]">
            {/* Fixed Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
              <div className="p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Your Shopping Cart ({totalQuantity} items)
                </h2>
              </div>
            </div>

            <div className="overflow-y-auto h-[calc(100%-5rem)]">
              <div className="p-6">
                <div className="space-y-4">
                  {item.map((cartItem) => (
                    <div
                      key={cartItem.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-lg transition-all hover:bg-gray-100"
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0" />

                      <div className="flex-grow">
                        <h3 className="font-medium text-lg">
                          {cartItem.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Unit Price: ${cartItem.price}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              dispatch(decreaseQuantity(cartItem.id))
                            }
                            className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(increaseQuantity(cartItem.id))
                            }
                            className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-medium">
                          ${cartItem.totalPrice.toFixed(2)}
                        </p>
                        <button
                          onClick={() => dispatch(removeFromCart(cartItem.id))}
                          className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-4">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Order Summary</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span>Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-lg">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors">
                  Proceed to Checkout
                </button>

                <div className="mt-6 space-y-3">
                  <p className="font-medium text-sm text-gray-600">
                    Payment Methods
                  </p>
                  <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Credit Card
                  </button>
                  <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    PayPal
                  </button>
                  <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Landmark className="h-4 w-4" />
                    Bank Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
