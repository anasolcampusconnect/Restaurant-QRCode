import React, { useState } from 'react';
import { 
  Flame, Clock, ShieldAlert, Star, AlertCircle, 
  CheckCircle2, XCircle, Timer, Award, User, Layers,
  ShoppingBag, X, ChefHat, Eye, ArrowRight, Check
} from 'lucide-react';
import OrderCard from '../../components/kitchen/OrderCard';

function LiveOrders() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentView, setCurrentView] = useState('live');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeOrders, setActiveOrders] = useState([
    { 
      id: "#1024", 
      table: "Table 4", 
      time: "14 mins ago",
      status: "Preparing", 
      progress: 65,
      chef: "Chef Aniket (Station A - Wok)",
      tokenNo: "TK-9081",
      orderType: "Dine-In",
      items: [
        { name: "Spicy Tonkotsu Ramen", qty: 2, price: "₹450", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80", note: "Extra Spicy, Soup separate" },
        { name: "Pork Gyoza (6pc)", qty: 1, price: "₹220", image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=400&q=80", note: "Crispy bottom crust requested" }
      ]
    },
    { 
      id: "#1025", 
      table: "Table 12", 
      time: "6 mins ago",
      status: "Waiting", 
      progress: 12,
      chef: "Chef Rahul (Station C - Prep)",
      tokenNo: "TK-9085",
      orderType: "Dine-In",
      items: [
        { name: "Crunchy Salmon Roll", qty: 1, price: "₹520", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80", note: "No Mayo inside the rolls" },
        { name: "Miso Soup", qty: 2, price: "₹180", image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=400&q=80", note: "Serve piping hot with main meal" }
      ]
    },
    { 
      id: "#1023", 
      table: "Table 2", 
      time: "26 mins ago",
      status: "Delayed", 
      progress: 92,
      chef: "Chef Vikram (Station B - Grill)",
      tokenNo: "TK-9074",
      orderType: "Takeaway",
      items: [
        { name: "Chicken Teriyaki Bento", qty: 1, price: "₹480", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", note: "Double glaze sauce coating" },
        { name: "Iced Matcha Latte", qty: 1, price: "₹210", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80", note: "Less sweet, make with alternative oat milk" }
      ]
    },
    { 
      id: "#1026", 
      table: "Table 7", 
      time: "2 mins ago",
      status: "Waiting", 
      progress: 0,
      chef: "Chef Priya (Station D - Bakery)",
      tokenNo: "TK-9089",
      orderType: "Dine-In",
      items: [
        { name: "Matcha Lava Cake", qty: 2, price: "₹310", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80", note: "Serve with a vanilla bean ice cream scoop" }
      ]
    },
    {
      id: "#1022",
      table: "Table 9",
      time: "18 mins ago",
      status: "Preparing",
      progress: 65,
      chef: "Chef Aniket (Station A - Wok)",
      tokenNo: "TK-9081",
      orderType: "Dine-In",
      items: [
        { name: "Spicy Tonkotsu Ramen", qty: 2, price: "₹450", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80", note: "Extra Spicy, Soup separate" },
        { name: "Pork Gyoza (6pc)", qty: 1, price: "₹220", image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=400&q=80", note: "Crispy bottom crust requested" }
      ]
    },
    {
      id: "#1020",
      table: "Table 11",
      time: "8 mins ago",
      status: "Waiting",
      progress: 12,
      chef: "Chef Rahul (Station C - Prep)",
      tokenNo: "TK-9085",
      orderType: "Dine-In",
      items: [
        { name: "Crunchy Salmon Roll", qty: 1, price: "₹520", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80", note: "No Mayo inside the rolls" },
        { name: "Miso Soup", qty: 2, price: "₹180", image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=400&q=80", note: "Serve piping hot with main meal" }
      ]
    }
  ]);

  // 2. EXPANDED FINISHED BILLED ORDERS LOGS (Customer Reviews Summary)
  const completedOrders = [
    { id: "#1019", table: "Table 5", billAmount: "₹1,450", items: "2x Spicy Ramen, 1x Matcha Lava Cake", rating: 5, review: "Ramen soup was top notch! Best deep flavor profile in Hyderabad." },
    { id: "#1015", table: "Table 1", billAmount: "₹890", items: "1x Salmon Aburi Sushi, 1x Green Tea", rating: 4, review: "Very fresh salmon cuts. Wait time was a little high but completely worth it." },
    { id: "#1011", table: "Table 8", billAmount: "₹2,120", items: "3x Prawn Tempura, 2x Chicken Katsu", rating: 5, review: "Super crispy fry texture. Highly recommended!" }
  ];

  // 3. MORE DETAILED CANCELLED ORDER LOGS
  const cancelledOrders = [
    { id: "#1021", table: "Table 9", items: "1x Pork Gyoza", reason: "Customer changed mind after waiting period", time: "20 mins ago" },
    { id: "#1012", table: "Table 3", items: "2x Beef Tataki", reason: "Ingredient out of stock (Premium Tenderloin cut finished)", time: "1 hour ago" }
  ];

  // 4. METRIC TELEMETRY FOR HARDWARE STATIONS
  const kitchenZones = [
    { name: "Zone Alpha (Wok/Stove)", status: "Busy", load: "85%", burnerUsage: "4 / 5 Active", color: "text-orange-600 bg-orange-50/70 border-orange-100" },
    { name: "Zone Beta (Sushi/Cold)", status: "Optimal", load: "40%", burnerUsage: "0 Active", color: "text-emerald-600 bg-emerald-50/70 border-emerald-100" },
    { name: "Zone Gamma (Grill/Oven)", status: "Critical Overload", load: "95%", burnerUsage: "3 / 3 Active", color: "text-rose-600 bg-rose-50/70 border-rose-100 animate-pulse" }
  ];

  // Handle stepping order states dynamically
  const advanceOrderStatus = (orderId, e) => {
    e.stopPropagation(); // Prevents opening the side panel drawer when clicking the status button
    setActiveOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        if (order.status === 'Waiting') return { ...order, status: 'Preparing', progress: 30 };
        if (order.status === 'Preparing') return { ...order, status: 'Ready to Serve', progress: 100 };
      }
      return order;
    }).filter(order => order.status !== 'Ready to Serve'));
  };

  const filteredOrders = activeOrders.filter(order => {
    if (activeTab === 'All') return true;
    return order.status === activeTab;
  });

  return (
    <div className="w-full text-slate-800 font-sans p-1 sm:p-4 space-y-8 relative">
     {/* 🍳 TOP UTILITY CONTROL BANNER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-orange-500 text-white rounded-2xl shadow-lg shadow-orange-500/20">
            <Flame size={24} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Live Kitchen Monitoring</h2>
            <p className="text-xs text-slate-400 font-semibold">Click on any order tile layout to open complete kitchen specifications, token numbers, and recipe breakdowns.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600 self-stretch md:self-auto justify-between">
          {/* Dynamic Switcher Button called OrdersCard */}
          <button
            onClick={() => setCurrentView(currentView === 'live' ? 'ordersCard' : 'live')}
            className={`px-4 py-2.5 rounded-xl font-black text-xs transition-all shadow-sm border cursor-pointer ${
              currentView === 'ordersCard'
                ? 'bg-orange-500 text-white border-orange-600'
                : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-950'
            }`}
          >
            {currentView === 'live' ? 'OrdersCard Console View' : 'Back to Kitchen Monitor'}
          </button>

          <span className="bg-slate-50 border border-slate-100 px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-inner">
            <Timer size={14} className="text-blue-500" /> Avg. Turnaround: 16.5 Mins
          </span>
        </div>
      </div>

      {/* 🚀 TAB FILTERS & COUNTERS */}
      {currentView === 'ordersCard' ? (
        <div className="animate-in fade-in duration-300">
          {/* Direct component mounting block with zero layout popups */}
          <OrderCard />
        </div>
      ) : (
        <> 
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100">
        {['All', 'Waiting', 'Preparing', 'Delayed'].map((tab) => {
          const count = tab === 'All' ? activeOrders.length : activeOrders.filter(o => o.status === tab).length;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl font-bold text-xs transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                activeTab === tab 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10 scale-105' 
                  : 'bg-white text-slate-500 border-slate-100 hover:bg-slate-50'
              }`}
            >
              {tab} Queue
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTab === tab ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* 🎚️ LIVE INTERACTIVE TICKETS QUEUE */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredOrders.map((order, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedOrder(order)}
              className={`bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer group relative ${
                order.status === "Delayed" ? "ring-2 ring-rose-500/30" : ""
              }`}
            >
              {/* Quick eye action layout marker displayed on desktop hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] text-white font-bold flex items-center gap-1 pointer-events-none z-10">
                <Eye size={10} /> View Details
              </div>

              {/* Ticket Header */}
              <div className="p-4 border-b border-slate-50 bg-slate-50/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-900 text-base">{order.id}</span>
                    <span className="px-2.5 py-0.5 bg-white rounded-lg text-xs font-black shadow-sm text-slate-700 border border-slate-100">{order.table}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-extrabold mt-0.5 flex items-center gap-1">
                    <Clock size={11} className="text-slate-400" /> Placed {order.time}
                  </p>
                </div>

                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                  order.status === "Preparing" ? "bg-orange-500 text-white" :
                  order.status === "Delayed" ? "bg-rose-500 text-white animate-pulse" :
                  "bg-amber-400 text-slate-900"
                }`}>
                  {order.status}
                </span>
              </div>

              {/* Enhanced Upsized Product Image Cards Layout */}
              <div className="p-4 space-y-4 flex-1">
                {order.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col sm:flex-row items-stretch gap-4 bg-slate-50/50 p-3 rounded-2xl border border-slate-100/70 hover:bg-slate-50 transition-colors">
                    
                    {/* Explicitly Upsized Image Area */}
                    <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-md border border-slate-200 bg-slate-100 relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-1 right-1 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-black px-2 py-0.5 rounded-lg shadow-sm">
                        x{item.qty}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-black text-slate-800 tracking-tight line-clamp-1">{item.name}</p>
                          <span className="text-xs font-extrabold text-slate-500 shrink-0">{item.price}</span>
                        </div>
                        {item.note && (
                          <div className="text-[11px] text-rose-600 font-semibold mt-1 bg-rose-50/60 px-2 py-1 rounded-lg border border-rose-100/50 inline-block w-full">
                            ✨ Notes: {item.note}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-2 flex items-center gap-1">
                        <ShoppingBag size={10} /> {order.orderType}
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Active Progress Monitors & Controls */}
              <div className="p-4 bg-slate-50/40 border-t border-slate-100 space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold text-slate-500">
                    <span className="flex items-center gap-1">📈 Live Order Progress Bar</span>
                    <span className={order.status === "Delayed" ? "text-rose-600 font-extrabold" : "text-orange-600 font-extrabold"}>{order.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/30">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        order.status === "Delayed" ? "bg-rose-500" : "bg-gradient-to-r from-orange-500 to-amber-500"
                      }`}
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-0.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1.5 rounded-xl border border-slate-100 min-w-0 flex-1">
                    <ChefHat size={12} className="text-slate-400 shrink-0" />
                    <span className="truncate">{order.chef.split(' ')[1]}</span>
                  </div>

                  <button 
                    onClick={(e) => advanceOrderStatus(order.id, e)}
                    className="bg-slate-900 hover:bg-orange-500 text-white font-bold text-[11px] px-3 py-1.5 rounded-xl transition-all shadow-sm flex items-center gap-1 shrink-0"
                  >
                    {order.status === 'Waiting' ? 'Start Cooking' : 'Mark Ready'} <ArrowRight size={12} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 🎛️ MIDDLE HARDWARE MONITOR & CANCELLED STATIONS GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ACTIVE STATIONS */}
        <section className="xl:col-span-2 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Layers size={16} className="text-blue-500" />
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Active Cooking Stations & Burner Allocation</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {kitchenZones.map((zone, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border flex flex-col justify-between min-h-[120px] ${zone.color}`}>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-slate-800 truncate">{zone.name}</span>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase ${
                      zone.status.includes("Critical") ? "bg-rose-600 text-white animate-pulse" :
                      zone.status === "Busy" ? "bg-orange-500 text-white" : "bg-emerald-600 text-white"
                    }`}>
                      {zone.status}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-2.5">Burners: <span className="text-slate-800 font-bold">{zone.burnerUsage}</span></p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Station Load</span>
                  <span className="text-sm font-black text-slate-800">{zone.load}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CANCELLED LOG PANEL */}
        <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <AlertCircle className="text-rose-500" size={16} />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Cancelled Orders Logs</h3>
            </div>
            <div className="space-y-2.5">
              {cancelledOrders.map((cancel, idx) => (
                <div key={idx} className="p-3 bg-rose-50/40 rounded-2xl border border-rose-100/40 flex justify-between items-start text-xs">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-slate-900">{cancel.id}</span>
                      <span className="bg-white px-2 py-0.2 rounded-md font-bold text-[10px] border border-rose-200 text-rose-700 shadow-2xs">{cancel.table}</span>
                    </div>
                    <p className="font-black text-slate-800 truncate mt-1.5">{cancel.items}</p>
                    <p className="text-[10px] text-rose-600 mt-0.5 font-medium italic">Reason: {cancel.reason}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium shrink-0 ml-2">{cancel.time}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 text-center border-t border-slate-50 pt-3 mt-3">
            System requires authorization pins for cancellations.
          </p>
        </section>
      </div>

      {/* 🌟 POST-BILLING COMPLETED FEEDBACK ENGAGEMENT REVIEW SLOTS */}
      <section className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Award size={18} className="text-amber-500" />
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Post-Billing Live Customer Reviews</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {completedOrders.map((rev, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50/40 border border-slate-100 flex flex-col justify-between hover:border-amber-300 transition-colors">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-slate-900">{rev.id}</span>
                    <span className="text-[10px] font-bold bg-slate-200 px-1.5 py-0.5 rounded-md text-slate-700">{rev.table}</span>
                    <span className="text-xs font-extrabold text-emerald-600 shadow-2xs">{rev.billAmount}</span>
                  </div>
                  <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100 shrink-0">
                    <Star size={11} className="text-amber-500 fill-amber-500" />
                    <span className="text-xs font-black text-amber-700">{rev.rating}.0</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-bold truncate">Items: {rev.items}</p>
                <p className="text-xs font-semibold text-slate-600 bg-white p-2.5 rounded-xl border border-slate-100/60 italic">
                  "{rev.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* 📥 SLIDE-OVER SIDE PANEL MODAL (ORDER DETAILED RECIPE SPEC) */}
      {/* ========================================================== */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop blur click-out exit shadow layer */}
          <div 
            onClick={() => setSelectedOrder(null)}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300"
          ></div>

          {/* Sliding box panel */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 z-10 border-l border-slate-100">
            
            {/* Modal Inside Header */}
            <div>
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black tracking-tight">Order {selectedOrder.id} Details</h3>
                    <span className="px-2 py-0.5 bg-white/20 text-white text-[11px] font-bold rounded-md">{selectedOrder.orderType}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-medium">Token: {selectedOrder.tokenNo} | Position: {selectedOrder.table}</p>
                </div>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="p-2 hover:bg-white/10 text-white rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Recipe breakdown lists area */}
              <div className="p-5 space-y-5 overflow-y-auto max-h-[calc(100vh-220px)]">
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock size={13} /> Placed Duration
                  </div>
                  <span className="text-xs font-black text-slate-700 bg-white px-2 py-1 rounded shadow-2xs border border-slate-100">{selectedOrder.time}</span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">Recipe Breakdown ({selectedOrder.items.length})</p>
                  
                  {selectedOrder.items.map((item, keyIdx) => (
                    <div key={keyIdx} className="border border-slate-100 p-3.5 rounded-2xl space-y-3 bg-white hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-black text-slate-900 leading-tight">{item.name}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-xs font-black bg-slate-900 text-white px-2 py-0.5 rounded">Quantity: {item.qty}</span>
                            <span className="text-xs font-extrabold text-slate-400">{item.price}</span>
                          </div>
                        </div>
                      </div>

                      {item.note && (
                        <div className="text-xs text-rose-700 font-bold bg-rose-50 border border-rose-100 p-2.5 rounded-xl flex items-start gap-1.5 leading-normal">
                          <span className="shrink-0">⚠️</span>
                          <span><strong>Custom note:</strong> {item.note}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Control Triggers panel */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600 px-1">
                <span className="flex items-center gap-1"><ChefHat size={14} className="text-slate-400" /> Handler Station</span>
                <span className="text-slate-900 font-extrabold">{selectedOrder.chef.split(' ')[0]} {selectedOrder.chef.split(' ')[1]}</span>
              </div>
              
              <div className="flex gap-3 mt-1">
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs py-3 rounded-xl transition-all shadow-2xs"
                >
                  Dismiss Panel
                </button>
                <button 
                  onClick={(e) => {
                    advanceOrderStatus(selectedOrder.id, e);
                    setSelectedOrder(null);
                  }}
                  className="flex-1 bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md shadow-slate-950/10 flex items-center justify-center gap-1.5"
                >
                  <Check size={14} /> Complete & Serve
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      </>
      )}
    </div>
  );
}

export default LiveOrders;