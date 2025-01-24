import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="w-full flex justify-center mb-4 sm:mb-0">
      <input
        type="text"
        className="w-full sm:w-96 max-w-full border border-gray-300 px-4 py-2 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
