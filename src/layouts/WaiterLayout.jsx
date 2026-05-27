import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function WaiterLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">

      <Sidebar role="waiter" />

      <div className="flex-1 flex flex-col min-w-0">


        <Navbar title="Waiter Panel" />

        <div className="flex-1 overflow-y-auto -p-0">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default WaiterLayout;