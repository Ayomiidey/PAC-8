import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  const { item, totalQuantity, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  //   const handleRemove = (id) => {
  //     dispatch(removeFromCart(id));
  //   };

  //   const handleQuantityChange = (id, quantity) => {
  //     if (quantity > 0) {
  //       dispatch(updateQuantity({ id, quantity }));
  //     }
  //   };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>

      {item.map((item) => (
        <div key={item.id} className="border p-4 my-2 rounded">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          {/* <p>Total: ${item.totalPrice.toFixed(2)}</p> */}
          <button
            // onClick={() => handleRemove(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            className="border px-2 py-1 ml-2"
            // onChange={(e) =>
            //   handleQuantityChange(item.id, parseInt(e.target.value, 10))
            // }
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
