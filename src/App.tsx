import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
function App() {
  const toggleSidebar = () => {};
  const isSidebarOpen = false;

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <div className="flex flex-col lg:flex-row mt-[4rem]">
          <SideBar />

          <div className="flex-1 ">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
