import React from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-20">
      <h1 className="text-2xl font-bold">PAC 8</h1>
      <button
        onClick={toggleSidebar}
        className="text-2xl bg-gray-700 p-2 rounded"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>
    </header>
  );
};

export default Header;
