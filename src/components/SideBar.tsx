import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface Product {
  category: string;
}

interface FetchProduct {
  products: Product[];
}
interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const SideBar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "TREND",
    "WATCH",
    "APPLE",
    "FASHION",
    "SHOE",
    "SHIRT",
  ]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategory = (category: string) => {
    setSelectedCategory(category);
    setKeyword("");
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const handleKeyWordClick = (keyword: string) => {
    setKeyword(keyword);
    setSelectedCategory("");
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const handleResetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setKeyword("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const handleHome = () => {
    navigate("/");
    setSearchQuery("");
    setSelectedCategory("");
    setKeyword("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

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
    <>
      <div
        className={`fixed left-0 h-full w-64 bg-white shadow-lg p-5 transform transition-transform duration-300 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static z-20`}
      >
        <div className="flex justify-between items-center mb-10 mt-4">
          <h1 className="text-2xl font-bold">PAC 8</h1>
        </div>

        <nav className="mb-2 lg:hidden">
          <Link
            to="/"
            className="block py-2 px-2  text-gray-700 hover:text-black hover:bg-gray-100 rounded"
            onClick={() => handleHome()}
          >
            HOME
          </Link>
          <Link
            to="/products"
            className="block py-2 px-2  text-gray-700 hover:text-black hover:bg-gray-100 rounded"
          >
            PRODUCTS
          </Link>
          <Link
            to="/about"
            className="block py-2 px-2  text-gray-700 hover:text-black hover:bg-gray-100 rounded"
          >
            ABOUT
          </Link>
        </nav>

        <section>
          <input
            type="text"
            className="border-2 rounded px-2 mb-2 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex justify-center items-center">
            <input
              type="text"
              className="border-2 mr-2 px-5 py-3 mb-3 w-full"
              placeholder="Min"
              value={minPrice ?? ""}
              onChange={handleMinPriceChange}
            />
            <input
              type="text"
              className="border-2 mr-2 px-5 py-3 mb-3 w-full"
              placeholder="Max"
              value={maxPrice ?? ""}
              onChange={handleMaxPriceChange}
            />
          </div>

          <section>
            {categories.map((category, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  value={category}
                  onChange={() => handleRadioChangeCategory(category)}
                  checked={selectedCategory === category}
                  name="category"
                  className="mr-2 w-[16px] h-[16px]"
                />
                {category.toUpperCase()}
              </label>
            ))}
          </section>

          <div className="mb-5 mt-4">
            <h2 className="text-xl font-semibold mb-3">Keywords</h2>
            <div>
              {keywords.map((keyword, index) => (
                <button
                  key={index}
                  className="block mb-2 px-4 w-full text-left border rounded hover:bg-gray-200"
                  onClick={() => handleKeyWordClick(keyword)}
                >
                  {keyword.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleResetFilter}
            className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5"
          >
            Reset Filter
          </button>
        </section>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
