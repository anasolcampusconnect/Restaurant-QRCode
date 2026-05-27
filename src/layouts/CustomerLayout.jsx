import { Outlet } from "react-router-dom";

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}

export default CustomerLayout;