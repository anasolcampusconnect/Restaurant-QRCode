import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  // --- MOCK DATA ---
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const [topSellers] = useState([
    { id: 1, name: "Spicy Chicken Burger", sales: 48, trend: "+12%", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
    { id: 2, name: "Margherita Pizza", sales: 36, trend: "+5%", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80" },
    { id: 3, name: "Lava Cake", sales: 24, trend: "+18%", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80" }
  ]);

  const [recentOrders] = useState([
    { id: "#ORD-102", table: "Table 4", items: "2x Burger, 1x Cola", amount: "$32.50", status: "Preparing", time: "2m ago" },
    { id: "#ORD-101", table: "Takeaway", items: "1x Margherita", amount: "$16.50", status: "Ready", time: "8m ago" },
    { id: "#ORD-100", table: "Table 9", items: "3x Lava Cake, 2x Coffee", amount: "$42.00", status: "Served", time: "15m ago" },
  ]);

  return (
    <div className="space-y-6 pb-10">
      
      {/* --- TOP BENTO ROW: Hero & Main Stats --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Hero Card (Takes up 2 columns) */}
        <div className="lg:col-span-2 relative rounded-[2rem] overflow-hidden shadow-sm group min-h-[240px] flex items-center p-8">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
            alt="Restaurant Vibe" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full">
            <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
              {today}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
              Good evening, <span className="text-orange-400">Admin</span>
            </h1>
            <p className="text-gray-300 max-w-md text-sm md:text-base">
              The kitchen is busy! You have <strong className="text-white">12 active orders</strong> and revenue is up by 18% compared to yesterday.
            </p>
            
            <div className="mt-6 flex gap-3">
              <Link to="/admin/orders" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-lg shadow-orange-500/30 text-sm">
                View Live Orders
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Column (1 Column) */}
        <div className="grid grid-rows-2 gap-6">
          {/* Stat 1 */}
          <div className="bg-white rounded-[2rem] p-6 flex flex-col justify-center border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">Today's Revenue</p>
                <h3 className="text-3xl font-black text-gray-900">$2,450.00</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center text-xl">
                📈
              </div>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-gray-900 rounded-[2rem] p-6 flex flex-col justify-center shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Active Diners</p>
                <h3 className="text-3xl font-black text-white">42 <span className="text-lg text-gray-500 font-medium">/ 50</span></h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10 flex items-center justify-center text-xl">
                🍽️
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MIDDLE ROW: Trending Photos & Quick Actions --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Trending Dishes (Highly Visual - 2 Columns) */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-extrabold text-gray-900">🔥 Trending Today</h2>
            <Link to="/admin/analytics" className="text-sm font-bold text-orange-500 hover:text-orange-600">Full Menu Stats &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topSellers.map((item) => (
              <div key={item.id} className="relative h-48 rounded-[1.5rem] overflow-hidden group cursor-pointer shadow-sm">
                <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-1 bg-green-500/20 backdrop-blur-md text-green-300 border border-green-500/20 rounded-lg text-xs font-bold mb-2">
                    {item.trend} today
                  </span>
                  <h3 className="text-white font-bold leading-tight">{item.name}</h3>
                  <p className="text-gray-300 text-sm mt-1">{item.sales} orders</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Management Grid (1 Column) */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/admin/tables" className="bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white rounded-[2rem] p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-sm">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm text-xl group-hover:scale-110 transition-transform">
              📱
            </div>
            <span className="font-bold text-sm">Table QR<br/>Codes</span>
          </Link>
          
          <button className="bg-purple-50 hover:bg-purple-500 text-purple-600 hover:text-white rounded-[2rem] p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-sm">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm text-xl group-hover:scale-110 transition-transform">
              🏷️
            </div>
            <span className="font-bold text-sm">Offers &<br/>Coupons</span>
          </button>

          <button className="bg-blue-50 hover:bg-blue-500 text-blue-600 hover:text-white rounded-[2rem] p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-sm">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm text-xl group-hover:scale-110 transition-transform">
              👥
            </div>
            <span className="font-bold text-sm">Manage<br/>Staff</span>
          </button>

          <Link to="/admin/menu" className="bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-[2rem] p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-sm relative overflow-hidden">
            <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-ping"></div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm text-xl group-hover:scale-110 transition-transform">
              ⚠️
            </div>
            <span className="font-bold text-sm">Stock<br/>Alerts</span>
          </Link>
        </div>

      </div>

      {/* --- BOTTOM ROW: Live Orders Feed --- */}
      <div className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-extrabold text-gray-900">Recent Kitchen Activity</h2>
          <Link to="/admin/orders" className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            View All History
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-100">
                <th className="pb-4 font-semibold px-4">Order Details</th>
                <th className="pb-4 font-semibold px-4">Destination</th>
                <th className="pb-4 font-semibold px-4">Amount</th>
                <th className="pb-4 font-semibold px-4">Status</th>
                <th className="pb-4 font-semibold px-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-extrabold text-gray-900 block">{order.id}</span>
                    <span className="text-xs text-gray-500 font-medium">{order.items}</span>
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-700">{order.table}</td>
                  <td className="py-4 px-4 font-black text-gray-900">{order.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold ${
                      order.status === 'Preparing' ? 'bg-orange-100 text-orange-700' :
                      order.status === 'Ready' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {order.status === 'Preparing' && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>}
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-sm font-bold text-gray-400">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;