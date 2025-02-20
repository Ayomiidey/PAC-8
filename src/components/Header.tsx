// // import { Link, useNavigate } from "react-router-dom";
// // import { ShoppingCart } from "lucide-react";
// // import { useAppSelector } from "../redux/hooks";

// // interface HeaderProps {
// //   onToggleSidebar: () => void;
// //   isSidebarOpen: boolean;
// // }

// // const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
// //   const navigate = useNavigate();
// //   const totalItem = useAppSelector((state) => state.cart.totalQuantity);

// //   return (
// //     <header className="fixed top-0 left-0 w-full h-[4rem] bg-gray-800 text-white flex items-center justify-between px-6 z-30 shadow-lg">
// //       <div className="flex items-center">
// //         <button
// //           onClick={onToggleSidebar}
// //           className="p-2 bg-gray-700 rounded-md lg:hidden"
// //           aria-label="Toggle Sidebar"
// //         >
// //           {isSidebarOpen ? "✖" : "☰"}
// //         </button>

// //         <Link to="/" className="text-xl font-bold ml-4">
// //           PAC 8
// //         </Link>
// //       </div>

// //       <nav className="hidden lg:flex space-x-6">
// //         <Link to="/" className="hover:text-gray-300">
// //           Home
// //         </Link>
// //         <Link to="/products" className="hover:text-gray-300">
// //           Products
// //         </Link>
// //         <Link to="/about" className="hover:text-gray-300">
// //           About
// //         </Link>
// //       </nav>

// //       <Link to="/cart" className="p-2 flex">
// //         <ShoppingCart className="w-6 h-6" onClick={() => navigate("/cart")} />
// //         {totalItem > 0 && <span>{totalItem}</span>}
// //       </Link>
// //     </header>
// //   );
// // };
// // export default Header;

// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import logoPac8 from "../assets/images/logoPac8.jpg";
// import { useFilter } from "./FilterContext";
// import SearchBar from "./SearchBar";
// import { useAppSelector } from "../redux/hooks";
// const Header = () => {
//   const { searchQuery, setSearchQuery } = useFilter();

//   const navigate = useNavigate();

//   const totalItem = useAppSelector((state) => state.cart.totalQuantity);
//   return (
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <div className="w-full h-12 text-center text-xs bg-purple-400 text-white flex flex-col justify-center items-center font-medium">
//           <p>Place your order now, and we'll ship it out today!</p>
//           <p>Fast, tracked, and express delivery options available.</p>
//         </div>

//         <nav className="bg-white border-b">
//           <div className="mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
//             <Link to="/">
//               <div>
//                 <img src={logoPac8} alt="Logo" className="h-[55px] w-auto" />
//               </div>
//             </Link>

//             <div className="relative flex-1 mx-4">
//               <SearchBar
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//               />
//             </div>
//             <div className="flex items-center space-x-4">
//               <Link to="/cart" className="relative inline-block">
//                 <FaShoppingCart className="text-lg" />
//                 {totalItem > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
//                     {totalItem}
//                   </span>
//                 )}
//               </Link>
//               <button className="hidden md:flex items-center text-black ">
//                 <span
//                   onClick={() => navigate("/sign-in")}
//                   className="cursor-pointer"
//                 >
//                   Login
//                 </span>
//                 <span className="text-gray-400">|</span>
//                 <span
//                   onClick={() => navigate("/sign-up")}
//                   className="cursor-pointer"
//                 >
//                   Register
//                 </span>
//               </button>
//               <button className="block md:hidden">
//                 <FaUser />
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
//             <Link to="/products" className="hover:underline">
//               Shop
//             </Link>
//             <Link to="/about" className="hover:underline">
//               About Us
//             </Link>
//             <Link to="/contactUs" className="hover:underline">
//               Contact Us
//             </Link>
//           </div>
//         </nav>
//       </div>

//       <div className="pt-[168px]">
//         {/* I had this div there so my content don't go inside my fixed header */}
//       </div>
//     </>
//   );
// };

// export default Header;

import { Link, useNavigate } from "react-router";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import logoPac8 from "../assets/images/logoPac8.jpg";
import { useFilter } from "./FilterContext";
import SearchBar from "./SearchBar";
import { useAppSelector } from "../redux/hooks";

const Header = () => {
  const { searchQuery, setSearchQuery } = useFilter();
  const navigate = useNavigate();
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const totalItem = useAppSelector((state) => state.cart.totalQuantity);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsAuthMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAuthOptionClick = (path: string) => {
    navigate(path);
    setIsAuthMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full h-12 text-center text-xs bg-purple-400 text-white flex flex-col justify-center items-center font-medium">
          <p>Place your order now, and we'll ship it out today!</p>
          <p>Fast, tracked, and express delivery options available.</p>
        </div>

        <nav className="bg-white border-b">
          <div className="mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
            <Link to="/">
              <div>
                <img src={logoPac8} alt="Logo" className="h-[55px] w-auto" />
              </div>
            </Link>

            <div className="relative flex-1 mx-4">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative inline-block">
                <FaShoppingCart className="text-lg" />
                {totalItem > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItem}
                  </span>
                )}
              </Link>

              {/* Desktop Auth Buttons */}
              <button className="hidden md:flex items-center text-black space-x-2">
                <span
                  onClick={() => navigate("/sign-in")}
                  className="cursor-pointer hover:text-gray-600"
                >
                  Login
                </span>
                <span className="text-gray-400">|</span>
                <span
                  onClick={() => navigate("/sign-up")}
                  className="cursor-pointer hover:text-gray-600"
                >
                  Register
                </span>
              </button>

              {/* Mobile Auth Menu */}
              <div className="relative block md:hidden">
                <button
                  ref={buttonRef}
                  onClick={() => setIsAuthMenuOpen(!isAuthMenuOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="User menu"
                >
                  <FaUser className="text-lg" />
                </button>

                {/* Dropdown Menu */}
                {isAuthMenuOpen && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                  >
                    <button
                      onClick={() => handleAuthOptionClick("/sign-in")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <span>Login</span>
                    </button>
                    <button
                      onClick={() => handleAuthOptionClick("/sign-up")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <span>Register</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
            <Link to="/products" className="hover:underline">
              Shop
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/contactUs" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>

      <div className="pt-[168px]" />
    </>
  );
};

export default Header;
