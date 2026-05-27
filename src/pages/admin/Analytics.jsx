import { useState } from "react";

function Analytics() {
  // Mock Data for Analytics
  const kpis = [
    { title: "Total Revenue", value: "₹45,230", trend: "+12.5%", isPositive: true },
    { title: "Total Orders", value: "156", trend: "+8.2%", isPositive: true },
    { title: "Active Tables", value: "8/10", trend: "High Demand", isPositive: true },
    { title: "Avg Order Value", value: "₹290", trend: "-2.1%", isPositive: false },
  ];

  const topItems = [
    { name: "Chicken Biryani", sold: 45, revenue: "₹15,705", color: "bg-orange-500" },
    { name: "Classic Margherita Pizza", sold: 38, revenue: "₹11,362", color: "bg-yellow-500" },
    { name: "Paneer Butter Masala", sold: 32, revenue: "₹7,968", color: "bg-green-500" },
    { name: "Cold Coffee", sold: 28, revenue: "₹4,172", color: "bg-blue-500" },
  ];

  // Simple CSS Bar Chart Data
  const weeklySales = [
    { day: "Mon", amount: 40 },
    { day: "Tue", amount: 55 },
    { day: "Wed", amount: 45 },
    { day: "Thu", amount: 70 },
    { day: "Fri", amount: 90 },
    { day: "Sat", amount: 100 },
    { day: "Sun", amount: 85 },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-10">
      
      {/* Header Section */}
      <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Business Analytics</h2>
          <p className="text-sm text-gray-500 mt-1">Track your restaurant's performance and sales</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block px-3 py-2 font-semibold outline-none">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <p className="text-sm font-semibold text-gray-500 mb-1">{kpi.title}</p>
            <h3 className="text-3xl font-black text-gray-800 mb-2">{kpi.value}</h3>
            <span className={`text-xs font-bold px-2 py-1 rounded-md ${kpi.isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
              {kpi.trend}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Revenue Bar Chart (Tailwind CSS Only) - FIXED FLEX CLASSES */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Weekly Revenue Overview</h3>
          <div className="flex justify-between h-64 gap-2 px-2 mt-4">
            {weeklySales.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1 group h-full">
                <div className="relative w-full flex-1 flex justify-center items-end">
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-xs font-bold py-1 px-2 rounded transition-opacity whitespace-nowrap z-10">
                    {data.amount}%
                  </div>
                  {/* Bar */}
                  <div 
                    className="w-full max-w-[3rem] bg-orange-100 group-hover:bg-orange-500 rounded-t-md transition-all duration-500 relative overflow-hidden"
                    style={{ height: `${data.amount}%` }}
                  >
                    <div className="absolute bottom-0 w-full bg-orange-500" style={{ height: '4px' }}></div>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 mt-3">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Top Selling Items</h3>
          <div className="flex flex-col gap-5">
            {topItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-gray-700 text-sm">{item.name}</span>
                  <span className="font-black text-gray-900 text-sm">{item.revenue}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">{item.sold} orders</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${(item.sold / 50) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 bg-orange-50 text-orange-600 hover:bg-orange-100 py-2.5 rounded-xl text-sm font-bold transition-colors">
            View Full Menu Report
          </button>
        </div>

      </div>

    </div>
  );
}

export default Analytics;