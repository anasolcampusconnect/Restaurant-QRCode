import { useState } from "react";

function Orders() {
  // Mock Data for Orders
  const [orders, setOrders] = useState([
    { id: "ORD-1025", table: "Table 5", items: "2x Chicken Biryani, 1x Cold Coffee", amount: "₹847", status: "New", time: "10:45 AM" },
    { id: "ORD-1024", table: "Table 2", items: "1x Classic Margherita Pizza", amount: "₹299", status: "Preparing", time: "10:38 AM" },
    { id: "ORD-1023", table: "Table 8", items: "2x Paneer Butter Masala, 4x Butter Naan", amount: "₹698", status: "Ready", time: "10:20 AM" },
    { id: "ORD-1022", table: "Table 1", items: "1x Cold Coffee", amount: "₹149", status: "Served", time: "09:55 AM" },
    { id: "ORD-1021", table: "Table 6", items: "1x Chicken Biryani", amount: "₹349", status: "Served", time: "09:30 AM" },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering Logic
  const filteredOrders = activeFilter === "All" 
    ? orders 
    : orders.filter(order => order.status === activeFilter);

  // Status Badge Colors Logic
  const getStatusColor = (status) => {
    switch(status) {
      case "New": return "bg-blue-100 text-blue-600";
      case "Preparing": return "bg-yellow-100 text-yellow-600";
      case "Ready": return "bg-green-100 text-green-600";
      case "Served": return "bg-gray-100 text-gray-500";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  // Update Order Status Logic
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const tabs = ["All", "New", "Preparing", "Ready", "Served"];

  return (
    <div className="max-w-7xl mx-auto pb-10">
      
      {/* Header Section */}
      <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
          <p className="text-sm text-gray-500 mt-1">Monitor and update customer orders in real-time</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="Search order ID or table..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 text-sm font-medium"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-4 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6 px-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              activeFilter === tab 
                ? "bg-gray-900 text-white shadow-md" 
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tab}
            {/* Show count for 'New' orders for extra detail */}
            {tab === "New" && orders.filter(o => o.status === "New").length > 0 && (
              <span className="ml-2 bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs">
                {orders.filter(o => o.status === "New").length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Orders Table Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Order ID & Time</th>
                <th className="p-4 font-semibold">Table Info</th>
                <th className="p-4 font-semibold w-1/3">Items Ordered</th>
                <th className="p-4 font-semibold">Total Amount</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                    
                    <td className="p-4">
                      <div className="font-bold text-gray-900">{order.id}</div>
                      <div className="text-xs font-semibold text-gray-400 mt-0.5">{order.time}</div>
                    </td>
                    
                    <td className="p-4">
                      <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        {order.table}
                      </div>
                    </td>
                    
                    <td className="p-4">
                      <div className="text-sm font-medium text-gray-700 leading-snug">
                        {order.items}
                      </div>
                    </td>
                    
                    <td className="p-4">
                      <div className="font-black text-gray-900 text-lg">{order.amount}</div>
                      <div className="text-xs font-semibold text-green-500">Paid online</div>
                    </td>
                    
                    <td className="p-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    
                    <td className="p-4 text-center">
                      {/* Status Update Dropdown */}
                      {order.status !== "Served" ? (
                        <select 
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className="bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full px-2 py-2 outline-none cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <option value="New" disabled>Move to...</option>
                          {order.status === "New" && <option value="Preparing">Preparing</option>}
                          {(order.status === "New" || order.status === "Preparing") && <option value="Ready">Ready</option>}
                          <option value="Served">Served</option>
                        </select>
                      ) : (
                        <span className="text-xs font-bold text-gray-400">Completed</span>
                      )}
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-400 font-semibold">
                    No {activeFilter !== "All" ? activeFilter.toLowerCase() : ""} orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Orders;