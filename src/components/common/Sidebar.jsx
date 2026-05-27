import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Sidebar({ role }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

  const isActive = (path) => location.pathname.includes(path);

  const icons = {
    dashboard: <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    orders: <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    menu: <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    tables: <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>,
    analytics: <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4m8 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m16-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" /></svg>,
    bills: <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  };

  const menuItems = {
    admin: [
      { name: "Dashboard", path: "/admin/dashboard", icon: icons.dashboard },
      { name: "Orders", path: "/admin/orders", icon: icons.orders },
      { name: "Menu Management", path: "/admin/menu", icon: icons.menu },
      { name: "Tables", path: "/admin/tables", icon: icons.tables },
      { name: "Analytics", path: "/admin/analytics", icon: icons.analytics },
    ],
    kitchen: [
      { name: "Dashboard", path: "/kitchen/dashboard", icon: icons.dashboard },
      { name: "Live Orders", path: "/kitchen/orders", icon: icons.orders },
    ],
    waiter: [
      { name: "Dashboard", path: "/waiter/dashboard", icon: icons.dashboard },
      { name: "Active Tables", path: "/waiter/tables", icon: icons.tables },
      { name: "Bills", path: "/waiter/bills", icon: icons.bills },
    ],
  };

  return (
    <div className={`bg-gray-900 text-white h-screen flex flex-col transition-all duration-300 relative z-20 ${isOpen ? "w-64" : "w-20"}`}>
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="absolute -right-3.5 top-16 bg-orange-500 text-white rounded-full p-1.5 shadow-lg hover:bg-orange-600 transition z-50 flex items-center justify-center"
      >
        <svg className={`w-4 h-4 transition-transform duration-300 ${!isOpen && "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex items-center gap-3 p-5 mt-2 overflow-hidden whitespace-nowrap">
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <svg className="w-14 h-14 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-4.418 0-8 3.134-8 7v1h16v-1c0-3.866-3.582-7-8-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14h16" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v-1m0 0a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </div>
        <h1 className={`text-2xl font-bold tracking-wide transition-opacity duration-300 ${!isOpen && "opacity-0 hidden"}`}>
          Dine<span className="text-orange-500">Flow</span>
        </h1>
      </div>

      <div className="flex flex-col gap-2 mt-8 px-3 flex-grow overflow-hidden">
        {menuItems[role]?.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all whitespace-nowrap
              ${isActive(item.path) 
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/20" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
          >
            {item.icon}
            <span className={`font-medium transition-opacity duration-300 ${!isOpen && "opacity-0 hidden"}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <button 
          onClick={handleLogout}
          className={`flex items-center gap-4 w-full px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-all whitespace-nowrap ${!isOpen && "justify-center"}`}
        >
          <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className={`font-semibold transition-opacity duration-300 ${!isOpen && "opacity-0 hidden"}`}>
            Logout
          </span>
        </button>
      </div>

    </div>
  );
}

export default Sidebar;