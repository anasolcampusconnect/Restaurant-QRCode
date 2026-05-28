import { useState, useEffect, useRef } from "react";

function Navbar({ title, role }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);

  // Click outside close logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const roleDisplay = {
    admin: { name: "Restaurant Admin", avatar: "A", color: "bg-blue-100 text-blue-600 border-blue-300" },
    kitchen: { name: "Master Chef", avatar: "C", color: "bg-orange-100 text-orange-600 border-orange-300" },
    waiter: { name: "Service Captain", avatar: "W", color: "bg-green-100 text-green-600 border-green-300" }
  };

  const currentProfile = roleDisplay[role] || roleDisplay.admin;

  // Mock Notifications based on roles
  const notificationsData = {
    admin: [
      { id: 1, message: "Table 5 paid bill ₹847 via UPI.", time: "2 mins ago" },
      { id: 2, message: "Inventory alert: Tomatoes running low.", time: "1 hour ago" },
      { id: 3, message: "Daily revenue crossed ₹40,000.", time: "3 hours ago" }
    ],
    kitchen: [
      { id: 1, message: "New Order (Table 2): 2x Chicken Biryani.", time: "Just now" },
      { id: 2, message: "Order ORD-1023 has been modified.", time: "5 mins ago" },
      { id: 3, message: "Reminder: Prepare special request for Table 8.", time: "10 mins ago" }
    ],
    waiter: [
      { id: 1, message: "Table 7 needs assistance (Waiter Call).", time: "1 min ago" },
      { id: 2, message: "Order ORD-1025 is Ready to serve.", time: "3 mins ago" },
      { id: 3, message: "Table 4 requested the bill.", time: "10 mins ago" }
    ]
  };

  const currentNotifications = notificationsData[role] || notificationsData.admin;

  return (
    <div className="bg-white px-8 py-5 flex items-center justify-between border-b border-gray-100 shadow-sm sticky top-0 z-50">
      
      <div>
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-400 font-medium mt-0.5">Manage your restaurant efficiently</p>
      </div>

      <div className="flex items-center gap-7">
        
        {/* Notification Bell Container with Ref for click outside detection */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-400 hover:text-orange-500 bg-gray-50 hover:bg-orange-50 rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-800">Notifications</h3>
                <span className="text-xs font-semibold text-orange-500 cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="max-h-80 overflow-y-auto hide-scrollbar pb-2">
                {currentNotifications.map((notif) => (
                  <div key={notif.id} className="px-4 py-3 border-b border-gray-50 hover:bg-orange-50/50 cursor-pointer transition-colors">
                    <p className="text-sm text-gray-700 font-medium leading-snug">{notif.message}</p>
                    <span className="text-xs font-bold text-gray-400 mt-1 block">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer group">
          <div className="flex flex-col text-right">
            <span className="text-sm font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
              {currentProfile.name}
            </span>
            <span className="text-xs text-green-500 font-semibold tracking-wide">
              • Active Now
            </span>
          </div>
          <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg border ${currentProfile.color} shadow-sm group-hover:scale-105 transition-transform`}>
            {currentProfile.avatar}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;