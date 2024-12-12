import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchProduct {
  products: Product[];
}

const SideBar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([
    "CLOTH",
    "PLASTIC",
    "APPLE",
    "FASHION",
  ]);

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
  };

  const handleKeyWordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setKeyword("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
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
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">PAC 8</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
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
  );
};

export default SideBar;