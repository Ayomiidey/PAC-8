// import { Link, useNavigate } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";
// import { useAppSelector } from "../redux/hooks";

// interface HeaderProps {
//   onToggleSidebar: () => void;
//   isSidebarOpen: boolean;
// }

// const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
//   const navigate = useNavigate();
//   const totalItem = useAppSelector((state) => state.cart.totalQuantity);

//   return (
//     <header className="fixed top-0 left-0 w-full h-[4rem] bg-gray-800 text-white flex items-center justify-between px-6 z-30 shadow-lg">
//       <div className="flex items-center">
//         <button
//           onClick={onToggleSidebar}
//           className="p-2 bg-gray-700 rounded-md lg:hidden"
//           aria-label="Toggle Sidebar"
//         >
//           {isSidebarOpen ? "✖" : "☰"}
//         </button>

//         <Link to="/" className="text-xl font-bold ml-4">
//           PAC 8
//         </Link>
//       </div>

//       <nav className="hidden lg:flex space-x-6">
//         <Link to="/" className="hover:text-gray-300">
//           Home
//         </Link>
//         <Link to="/products" className="hover:text-gray-300">
//           Products
//         </Link>
//         <Link to="/about" className="hover:text-gray-300">
//           About
//         </Link>
//       </nav>

//       <Link to="/cart" className="p-2 flex">
//         <ShoppingCart className="w-6 h-6" onClick={() => navigate("/cart")} />
//         {totalItem > 0 && <span>{totalItem}</span>}
//       </Link>
//     </header>
//   );
// };
// export default Header;

import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">PAC 8</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
