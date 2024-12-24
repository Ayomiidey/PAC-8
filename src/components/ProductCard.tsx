import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
}) => {
  const dispatch = useDispatch();
  const product = { id, image, title, price };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="border p-4 rounded h-64 flex flex-col justify-between">
      <Link to={`/product/${id}`} className="flex flex-col h-full">
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover mb-2"
          />
          <h2 className="font-bold text-sm line-clamp-2 mb-2">{title}</h2>
        </div>
        <p className="text-gray-700 font-semibold">${price}</p>
      </Link>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded mt-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
