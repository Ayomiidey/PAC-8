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
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
// import SignUpPage from "./components/SignUpPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev: boolean) => !prev);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex-1">
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
                <Route
                  index
                  element={<MainContent onToggleSidebar={toggleSidebar} />}
                />
              </Route>
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/sign-in" element={<LoginPage />} />
              {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
