import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "../redux/hooks";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const totalItem = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <header className="fixed top-0 left-0 w-full h-[4rem] bg-gray-800 text-white flex items-center justify-between px-6 z-30 shadow-lg">
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="p-2 bg-gray-700 rounded-md lg:hidden"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? "✖" : "☰"}
        </button>

        <Link to="/" className="text-xl font-bold ml-4">
          PAC 8
        </Link>
      </div>

      <nav className="hidden lg:flex space-x-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
      </nav>

      <Link to="/cart" className="p-2 flex">
        <ShoppingCart className="w-6 h-6" />
        {totalItem > 0 && <span>{totalItem}</span>}
      </Link>
    </header>
  );
};
export default Header;
