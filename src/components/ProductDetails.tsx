import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
          setMainImage(data.images[0]);
        } catch (error) {
          console.error("Error Fetching Data:", error);
        }
      }
    };
    fetchData();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-lg font-semibold">Loading...</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.title}(s) to the cart!`);
  };

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-gray-800 text-white rounded shadow-lg hover:bg-gray-600 transition"
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
              Rating:{" "}
              <span className="text-yellow-500">{product.rating} ★</span>
            </p>
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2 text-lg font-medium">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 px-2 py-1 border rounded text-center"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
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
