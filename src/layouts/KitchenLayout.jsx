import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function KitchenLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      <Sidebar role="kitchen" />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar title="Kitchen Panel" role="kitchen" />

        <div className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default KitchenLayout;