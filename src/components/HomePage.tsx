import { useEffect, useState } from "react";
import homepage1 from "../assets/images/homepage1.jpg"; // Adjust the path

interface Product {
  category: string;
}

interface FetchProduct {
  products: Product[];
}

const HomePage = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data: FetchProduct = await res.json();
        const uniquecategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniquecategories);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen px-5">
      <div className="w-full h-[530px]  relative overflow-hidden">
        <img
          src={homepage1}
          alt="Homepage Carousel"
          className="w-full h-full object-cover object-top "
        />
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <h2 className="text-3xl font-bold text-white">WELCOME TO PAC 8</h2>
          <p className="text-xl mt-2.5 font-bold text-gray-200">
            MILLIONS+ PRODUCTS
          </p>
          <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="w-full mt-16 px-10">
        <h1 className="font-mono text-3xl mb-6">Shop by Categories</h1>

        <div className="w-full flex justify-center items-center gap-6 flex-wrap">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-between"
            >
              <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                <span className="text-gray-500">Image Here</span>
              </div>

              <button className="px-16 mt-[16rem] rounded-md absolute bg-red-600 text-white py-2 text-center font-semibold hover:bg-red-700 transition">
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
