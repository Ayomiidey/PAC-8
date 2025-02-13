import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

interface ProductLayoutProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col lg:flex-row">
        <SideBar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />

        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
