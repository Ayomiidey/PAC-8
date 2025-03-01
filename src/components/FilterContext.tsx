import { createContext, useContext, ReactNode, useState } from "react";

interface FilterContexType {
  filter: string;
  setFilter: (query: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  minPrice: number | undefined;
  setMinPrice: (price: number | undefined) => void;
  maxPrice: number | undefined;
  setMaxPrice: (price: number | undefined) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const FilterContext = createContext<FilterContexType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("Use filter must be used within a filter provider");
  }
  return context;
};
