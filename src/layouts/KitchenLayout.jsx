import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function KitchenLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar role="kitchen" />

      <div className="flex-1">

        <Navbar title="Kitchen Panel" />

        <div className="p-5">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default KitchenLayout;