import React, { useState } from 'react';
import { 
  ClipboardList, Clock, Flame, CheckCircle, AlertTriangle, 
  XCircle, ChefHat, TrendingUp, DollarSign, Utensils, 
  ChevronRight, Layers, Users, ShieldAlert, Timer,
  BarChart2
} from 'lucide-react';
import KitchenStats from '../../components/kitchen/KitchenStats';

function KitchenDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  // Enhanced Core Metric Counters
  const metrics = [
    { title: "Total Orders Today", value: "184", icon: ClipboardList, color: "bg-blue-500", text: "text-blue-600" },
    { title: "Pending Orders", value: "14", icon: Clock, color: "bg-amber-500", text: "text-amber-600" },
    { title: "Preparing Orders", value: "9", icon: Flame, color: "bg-orange-500", text: "text-orange-600" },
    { title: "Ready to Serve", value: "7", icon: CheckCircle, color: "bg-emerald-500", text: "text-emerald-600" },
    { title: "Delayed Orders", value: "3", icon: AlertTriangle, color: "bg-rose-500", text: "text-rose-600 animate-pulse" },
    { title: "Cancelled Orders", value: "4", icon: XCircle, color: "bg-gray-500", text: "text-gray-600" },
  ];

  // Expanded Live Active Sub-orders with Add-on instructions
  const liveOrders = [
    { id: "#1024", table: "Table 4", items: "2x Spicy Ramen, 1x Pork Gyoza", notes: "Extra Spicy, Soup separate", time: "14 mins ago", status: "Preparing", color: "border-orange-500 text-orange-700 bg-orange-50/60" },
    { id: "#1025", table: "Table 12", items: "1x California Roll, 2x Miso Soup", notes: "No Mayo in rolls", time: "6 mins ago", status: "Pending", color: "border-amber-500 text-amber-700 bg-amber-50/60" },
    { id: "#1026", table: "Table 7", items: "1x Chicken Teriyaki Bento, 1x Iced Matcha", notes: "Less ice for matcha", time: "2 mins ago", status: "Pending", color: "border-amber-500 text-amber-700 bg-amber-50/60" },
    { id: "#1023", table: "Table 2", items: "1x Salmon Aburi Sushi, 1x Tempura Udon", notes: "Regular pack", time: "26 mins ago", status: "Delayed", color: "border-rose-500 text-rose-700 bg-rose-50/60 animate-pulse" },
  ];

  // Extended Inventory Alert Items
  const inventoryAlerts = [
    { item: "Fresh Salmon Fillet", status: "Critical (0.8kg Left)", level: "w-1/12 bg-rose-500" },
    { item: "Avocados (Hass)", status: "Low Stock (9 pcs)", level: "w-2/12 bg-rose-500" },
    { item: "Ramen Noodles (Fresh)", status: "Reorder Level (25 ports)", level: "w-4/12 bg-amber-500" },
    { item: "Cooking Sake", status: "Low Stock (2 Bottles)", level: "w-3/12 bg-amber-500" },
    { item: "Shoyu/Soy Sauce", status: "Refill Bulk Container", level: "w-5/12 bg-amber-500" },
  ];

  // Expanded Metrics Value Summary Matrix
  const topItems = [
    { name: "Spicy Tonkotsu Ramen", orders: "54 orders", revenue: "₹32,400" },
    { name: "Crunchy Salmon Roll", orders: "42 orders", revenue: "₹25,200" },
    { name: "Pork Gyoza (6pc)", orders: "35 orders", revenue: "₹14,000" },
    { name: "Chicken Karaage Bowl", orders: "28 orders", revenue: "₹10,640" },
  ];

  // Expanded Kitchen Shift Resource Trackers
  const chefs = [
    { name: "Chef Aniket", role: "Head Chef (Station A)", availability: "On Duty", color: "bg-emerald-500" },
    { name: "Chef Vikram", role: "Sous Chef (Grill)", availability: "On Duty", color: "bg-emerald-500" },
    { name: "Chef Priya", role: "Pastry Chef (Desserts)", availability: "On Break", color: "bg-amber-500" },
    { name: "Chef Rahul", role: "Line Cook (Prep)", availability: "On Duty", color: "bg-emerald-500" },
  ];

  // Table-wise Order Layout details with sitting capacities
  const tableWiseCount = [
    { table: "Table 1", count: "3 Active Orders", capacity: "4 Pax", color: "text-orange-600 bg-orange-50 border-orange-100" },
    { table: "Table 2", count: "1 Active Order", capacity: "2 Pax", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { table: "Table 4", count: "4 Active Orders", capacity: "6 Pax", color: "text-orange-600 bg-orange-50 border-orange-100" },
    { table: "Table 5", count: "0 Orders", capacity: "4 Pax", color: "text-slate-400 bg-slate-50 border-slate-100" },
    { table: "Table 7", count: "2 Active Orders", capacity: "2 Pax", color: "text-amber-600 bg-amber-50 border-amber-100" },
    { table: "Table 12", count: "2 Active Orders", capacity: "8 Pax", color: "text-amber-600 bg-amber-50 border-amber-100" },
  ];

  return (
    <div className="w-full text-slate-800 font-sans p-2 sm:p-4 max-w-8xl mx-auto">
      
      {/* TOP SUMMARY STRIP (Revenue & Metrics Overview Widget) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
            <Layers size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">🍳 Dashboard Overview</h2>
            <p className="text-xs text-slate-500">Live operational monitoring console & performance trackers</p>
          </div>
        </div>
        
        {/* Navigation Action Buttons Group Toggle Layout */}
        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          <button 
            onClick={() => setActiveSection(activeSection === 'dashboard' ? 'stats' : 'dashboard')}
            className={`font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-sm cursor-pointer border ${
              activeSection === 'stats'
                ? 'bg-orange-500 text-white border-orange-600'
                : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-950'
            }`}
          >
            <BarChart2 size={15} /> 
            {activeSection === 'dashboard' ? 'View Kitchen Stats' : 'Back to Dashboard Monitor'}
          </button>

          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 flex items-center gap-3 flex-1 sm:flex-initial justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500 text-white rounded-lg">
                <DollarSign size={16} />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Revenue Today</span>
            </div>
            <span className="text-base font-extrabold text-slate-900">₹56,120</span>
          </div>
        </div>
      </div>
      {activeSection === 'stats' ? (
        <div className="animate-in fade-in duration-300">
          {/* Direct embed configuration - no messy popups/modals[cite: 5] */}
          <KitchenStats />
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-300">
      {/* CORE COUNTER METRICS GRID (6 Core Statuses) */}
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg text-white ${m.color} shadow-sm`}>
                  <Icon size={16} />
                </div>
                <span className={`text-xl font-black tracking-tight ${m.text}`}>{m.value}</span>
              </div>
              <p className="text-xs font-bold text-slate-500 group-hover:text-slate-800 transition-colors line-clamp-1">{m.title}</p>
            </div>
          );
        })}
      </section>

      {/* PRIMARY TWO-COLUMN WORKSPACE GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT & CENTER SIDE: LIVE MONITOR & TABLES */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* LIVE KITCHEN STATUS */}
          <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Live Kitchen Status</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-1 rounded-md border border-blue-100 flex items-center gap-1">
                  <Timer size={10} /> Avg Prep Time: 18m
                </span>
                <span className="text-[10px] bg-slate-100 font-bold px-2 py-1 rounded-md text-slate-500">
                  Auto Sync On
                </span>
              </div>
            </div>

            {/* Live Active Order Tickets */}
            <div className="space-y-3">
              {liveOrders.map((order, idx) => (
                <div key={idx} className={`p-3.5 rounded-xl border-l-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:scale-[1.005] ${order.color}`}>
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900 text-sm">{order.id}</span>
                      <span className="px-2 py-0.5 bg-white/90 rounded-md text-[10px] font-bold border border-black/5">{order.table}</span>
                      {order.status === "Delayed" && (
                        <span className="text-[9px] font-bold text-white bg-rose-500 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <ShieldAlert size={10} /> Priority
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-slate-800 line-clamp-2">{order.items}</p>
                    {order.notes && (
                      <p className="text-[11px] text-slate-500 font-medium italic">
                        <span className="text-rose-600 font-semibold">Note:</span> {order.notes}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-black/5">
                    <span className="text-[11px] font-semibold opacity-75 flex items-center gap-1 shrink-0">
                      <Clock size={12} /> {order.time}
                    </span>
                    <button className="bg-white hover:bg-slate-900 hover:text-white text-slate-900 font-bold text-xs px-3 py-1.5 rounded-lg transition-all shadow-sm border border-black/10 flex items-center gap-1 shrink-0">
                      Next Step <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TABLE-WISE ORDER COUNT */}
          <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Table-wise Order Count</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tableWiseCount.map((t, idx) => (
                <div key={idx} className={`p-3 rounded-xl text-left border flex flex-col justify-between min-h-[72px] ${t.color}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-800">{t.table}</span>
                    <span className="text-[9px] bg-white/60 px-1 py-0.2 rounded font-medium text-slate-500 flex items-center gap-0.5">
                      <Users size={8} /> {t.capacity}
                    </span>
                  </div>
                  <p className="text-xs font-extrabold mt-2 text-right">{t.count}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT SIDE: INVENTORY ALERTS, CHEF AVAILABILITY, TOP SELLING */}
        <div className="space-y-6">
          
          {/* INVENTORY ALERTS */}
          <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3.5">
              <AlertTriangle className="text-rose-500" size={16} />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Inventory Alerts</h3>
            </div>
            <div className="space-y-3.5">
              {inventoryAlerts.map((alert, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700 truncate mr-2">{alert.item}</span>
                    <span className="font-extrabold text-rose-600 text-[10px] bg-rose-50 px-1.5 py-0.5 rounded shrink-0">{alert.status}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${alert.level}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CHEF AVAILABILITY */}
          <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <ChefHat className="text-blue-500" size={16} />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Chef Availability</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {chefs.map((chef, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 first:pt-0 last:pb-0">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800 truncate">{chef.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium truncate">{chef.role}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${chef.color}`}></span>
                    <span className="text-[11px] font-bold text-slate-600">{chef.availability}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TOP SELLING ITEMS */}
          <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-emerald-500" size={16} />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Top Selling Items</h3>
            </div>
            <div className="space-y-2.5">
              {topItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800 truncate">{item.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{item.orders}</p>
                  </div>
                  <span className="text-xs font-extrabold text-slate-700 ml-2 shrink-0">{item.revenue}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
      </div>
      )}
    </div>
  );
}

export default KitchenDashboard;