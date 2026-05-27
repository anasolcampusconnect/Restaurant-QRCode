import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function WaiterLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      <Sidebar role="waiter" />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Navbar title="Waiter Panel" role="waiter" />

        <div className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default WaiterLayout;