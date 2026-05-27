import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function WaiterLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar role="waiter" />

      <div className="flex-1">

        <Navbar title="Waiter Panel" />

        <div className="p-5">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default WaiterLayout;