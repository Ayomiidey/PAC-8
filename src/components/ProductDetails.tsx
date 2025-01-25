import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../models/Product";
import Loading from "./Loading";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/cartSlice";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const item = useAppSelector((state) =>
    state.cart.item.find((i) => i.id === Number(id))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
          setMainImage(data.images[0]);
        } catch (error) {
          console.error("Error Fetching Data:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mx-auto">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-lg font-semibold">Loading...</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`Added ${quantity} ${product.title}(s) to the cart!`);
  };

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-600 transition sm: mt-20"
      >
        Back
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />

          <div className="flex gap-2 justify-center">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer ${
                  mainImage === image ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4 text-gray-600">{product.description}</p>
          <div className="mb-4">
            <p className="text-lg font-semibold">
              Price: <span className="text-green-600">${product.price}</span>
            </p>
            <p className="text-lg font-semibold mt-2">
              Rating:
              <span className="text-yellow-500">{product.rating} ★</span>
            </p>
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2 text-lg font-medium">
              Quantity:
            </label>
            <div className="relative">
              {item && (
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
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => handleAddToCart()}
              className="px-6 py-3 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-500 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => alert("Customization feature coming soon!")}
              className="px-6 py-3 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-600 transition"
            >
              Customize Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Product } from "../models/Product";
// import Loading from "./Loading";
// import { addToCart } from "../redux/cartSlice";
// import { useAppSelector } from "../redux/hooks";
// import { useDispatch } from "react-redux";

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [mainImage, setMainImage] = useState<string>("");
//   const [loading, setLoading] = useState(false);
//   const [quantity, setQuantity] = useState(1); // Local state for quantity

//   const item = useAppSelector((state) =>
//     state.cart.item.find((i) => i.id === Number(id))
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       if (id) {
//         setLoading(true);
//         try {
//           const response = await fetch(`https://dummyjson.com/products/${id}`);
//           const data = await response.json();
//           setProduct(data);
//           setMainImage(data.images[0]);
//         } catch (error) {
//           console.error("Error Fetching Data:", error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     };
//     fetchData();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center mx-auto">
//         <Loading />
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <h1 className="text-lg font-semibold">Loading...</h1>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     const productToAdd = {
//       ...product,
//       quantity,
//       totalPrice: product.price * quantity,
//     };

//     dispatch(addToCart(productToAdd));
//     alert(`Added ${quantity} ${product.title}(s) to the cart!`);
//   };

//   const handleIncreaseQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   return (
//     <div className="p-5 max-w-6xl mx-auto">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-5 px-4 py-2 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-600 transition sm: mt-20"
//       >
//         Back
//       </button>

//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="flex-1">
//           <img
//             src={mainImage}
//             alt={product.title}
//             className="w-full h-auto rounded-lg shadow-md mb-4"
//           />

//           <div className="flex gap-2 justify-center">
//             {product.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 className={`w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer ${
//                   mainImage === image ? "border-4 border-blue-500" : ""
//                 }`}
//                 onClick={() => setMainImage(image)}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="flex-1">
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <p className="mb-4 text-gray-600">{product.description}</p>
//           <div className="mb-4">
//             <p className="text-lg font-semibold">
//               Price: <span className="text-green-600">${product.price}</span>
//             </p>
//             <p className="text-lg font-semibold mt-2">
//               Rating:{" "}
//               <span className="text-yellow-500">{product.rating} ★</span>
//             </p>
//           </div>

//           <div className="flex items-center mb-4">
//             <label htmlFor="quantity" className="mr-2 text-lg font-medium">
//               Quantity:
//             </label>
//             <div className="flex items-center gap-2">
//               <button
//                 className="bg-gray-300 px-3 py-1 rounded"
//                 onClick={handleDecreaseQuantity}
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 className="bg-gray-300 px-3 py-1 rounded"
//                 onClick={handleIncreaseQuantity}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <button
//               onClick={handleAddToCart}
//               className="px-6 py-3 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-500 transition"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={() => alert("Customization feature coming soon!")}
//               className="px-6 py-3 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-600 transition"
//             >
//               Customize Product
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
