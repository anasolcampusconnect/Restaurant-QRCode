import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// Customer Pages
import Menu from "../pages/customer/Menu";
import Cart from "../pages/customer/Cart";
import Checkout from "../pages/customer/Checkout";
import OrderSuccess from "../pages/customer/OrderSuccess";
import TrackOrder from "../pages/customer/TrackOrder";

// Auth
import Login from "../pages/auth/Login";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import MenuManagement from "../pages/admin/MenuManagement";
import Tables from "../pages/admin/Tables";
import Analytics from "../pages/admin/Analytics";

// Kitchen Pages
import KitchenDashboard from "../pages/kitchen/KitchenDashboard";
import LiveOrders from "../pages/kitchen/LiveOrders";

// Waiter Pages
import WaiterDashboard from "../pages/waiter/WaiterDashboard";
import ActiveTables from "../pages/waiter/ActiveTables";
import Bills from "../pages/waiter/Bills";

// Layouts
import CustomerLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";
import KitchenLayout from "../layouts/KitchenLayout";
import WaiterLayout from "../layouts/WaiterLayout";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        
        {/* DEFAULT ROUTE: Redirect root to login for staff */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* CUSTOMER ROUTES */}
        {/* QR scan chesthe direct ga ikkadiki vastaru, no login required */}
        <Route element={<CustomerLayout />}>
          <Route path="/table/:id" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/track-order" element={<TrackOrder />} />
        </Route>

        {/* LOGIN FOR STAFF */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="menu" element={<MenuManagement />} />
          <Route path="tables" element={<Tables />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        {/* KITCHEN ROUTES */}
        <Route path="/kitchen" element={<KitchenLayout />}>
          <Route path="dashboard" element={<KitchenDashboard />} />
          <Route path="orders" element={<LiveOrders />} />
        </Route>

        {/* WAITER ROUTES */}
        <Route path="/waiter" element={<WaiterLayout />}>
          <Route path="dashboard" element={<WaiterDashboard />} />
          <Route path="tables" element={<ActiveTables />} />
          <Route path="bills" element={<Bills />} />
        </Route>

      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;