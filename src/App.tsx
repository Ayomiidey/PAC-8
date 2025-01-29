import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import SideBar from "./components/SideBar";
// import MainContent from "./components/MainContent";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Cart from "./components/cart";
import HomePage from "./components/HomePage";
import ProductLayout from "./components/ProductLayout";
import { useState } from "react";
import MainContent from "./components/MainContent";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prev: boolean) => !prev);
  // };

  return (
    // <Router>
    //   <div className="flex flex-col h-screen">
    //     <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

    //     <div className="flex flex-col lg:flex-row mt-[4rem]">
    //       <SideBar
    //         setIsSidebarOpen={setIsSidebarOpen}
    //         isSidebarOpen={isSidebarOpen}
    //       />

    //       <div className="flex-1 ">
    //         <Routes>
    //           <Route path="/" element={<MainContent />} />
    //           <Route path="/product/:id" element={<ProductDetails />} />
    //           <Route path="/cart" element={<Cart />} />
    //         </Routes>
    //       </div>
    //     </div>
    //   </div>
    // </Router>

    <Router>
      <div className="h-screen">
        {/* <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} /> */}
        <Header />
        <div className="pt-[1rem]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={
                <ProductLayout
                  setIsSidebarOpen={setIsSidebarOpen}
                  isSidebarOpen={isSidebarOpen}
                />
              }
            >
              <Route index element={<MainContent />} />
            </Route>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
