import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import { Tally3 } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "../models/Product";
import Loading from "./Loading";

interface mainProps {
  onToggleSidebar: () => void;
}

const MainContent: React.FC<mainProps> = ({ onToggleSidebar }) => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword, filter } =
    useFilter();
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
        (currentPage - 1) * itemsPerPage
      }`;
      if (keyword) {
        url = `https://dummyjson.com/products/search?q=${keyword}`;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [keyword, currentPage]);

  const getFilteredProduct = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "cheap":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredProducts = getFilteredProduct();

  const totalProduct = 100;
  const totalPages = totalProduct / itemsPerPage;
  const handlePageChange = (page: number) => {
    if (!loading && page > 0 && page <= totalPages) {
      setLoading(true);
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - currentPage - 1));
    }

    if (currentPage + 2 > totalPages) {
      startPage = Math.min(1, startPage - (2 - totalPages - currentPage));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <section className="p-4 w-full sm:w-[90%] mx-auto transition-all">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="relative">
            <button
              className="border px-4 py-2 lg:hidden rounded-full flex items-center mb-5"
              // onClick={() => setDropDownOpen(!dropDownOpen)}
              onClick={onToggleSidebar}
            >
              <Tally3 className="mr-2" />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.thumbnail}
                  price={product.price}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
              <div className="hidden sm:flex justify-between items-center w-full mb-5">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="border px-4 py-2 mx-2 rounded-full"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="flex flex-wrap justify-center">
                  {getPaginationButtons().map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`border px-4 py-2 mx-1 rounded-full ${
                        page === currentPage ? "bg-black text-white" : ""
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="border px-4 py-2 mx-2 rounded-full"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>

              <div className="sm:hidden flex justify-center w-full mb-5">
                <div className="flex flex-wrap justify-center">
                  {getPaginationButtons().map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`border px-4 py-2 mx-1 rounded-full ${
                        page === currentPage ? "bg-black text-white" : ""
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MainContent;
