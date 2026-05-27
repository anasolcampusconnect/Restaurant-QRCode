import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function KitchenLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar fits exactly on left boundary edge */}
      <Sidebar role="kitchen" />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar title="Kitchen Panel" />

        {/* Change p-5 to p-0 so content matches screen edges perfectly */}
        <div className="flex-1 overflow-y-auto -p-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default KitchenLayout;