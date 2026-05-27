import React, { useState, useEffect } from 'react';
import { 
  Clock, Flame, ShieldAlert, Layers, ShoppingBag, X, 
  ChefHat, Eye, ArrowRight, Check, Volume2, AlertCircle, 
  Utensils, Timer, Radio, HelpCircle
} from 'lucide-react';

function OrderCard() {
  const [activeSection, setActiveSection] = useState('All Stations');
  const [activeStatusTab, setActiveStatusTab] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const kitchenSections = ['All Stations', 'Grill', 'Fry', 'Bakery', 'Juice', 'Chinese', 'Tandoor'];
  const [orders, setOrders] = useState([
    { 
      id: "#1024", 
      table: "Table 4", 
      timePlaced: "14 mins ago",
      status: "Cooking", 
      priority: "High",
      section: "Chinese",
      estCookingTime: "15 Mins",
      orderType: "Dine-In",
      tokenNo: "TK-9081",
      items: [
        { name: "Spicy Tonkotsu Ramen", qty: 2, price: "₹450", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80", instruction: "Less spicy, Extra broth separate" },
        { name: "Pork Gyoza (6pc)", qty: 1, price: "₹220", image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=500&q=80", instruction: "Crispy bottom crust" }
      ]
    },
    { 
      id: "#1025", 
      table: "Table 12", 
      timePlaced: "6 mins ago",
      status: "Pending", 
      priority: "Medium",
      section: "Chinese",
      estCookingTime: "12 Mins",
      orderType: "Dine-In",
      tokenNo: "TK-9085",
      items: [
        { name: "Crunchy Salmon Roll", qty: 1, price: "₹520", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80", instruction: "No onion, light soy glaze" },
        { name: "Miso Soup", qty: 2, price: "₹180", image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=500&q=80", instruction: "Serve hot" }
      ]
    },
    { 
      id: "#1023", 
      table: "Parcel Box A", 
      timePlaced: "26 mins ago",
      status: "Cooking", 
      priority: "Critical",
      section: "Grill",
      estCookingTime: "20 Mins",
      orderType: "Parcel",
      tokenNo: "TK-9074",
      items: [
        { name: "Chicken Teriyaki Bento", qty: 1, price: "₹480", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80", instruction: "Double sauce coating, extra sesame" }
      ]
    },
    { 
      id: "#1026", 
      table: "Online App", 
      timePlaced: "1 min ago",
      status: "Pending", 
      priority: "High",
      section: "Bakery",
      estCookingTime: "10 Mins",
      orderType: "Online Order",
      tokenNo: "TK-9089",
      items: [
        { name: "Matcha Lava Cake", qty: 2, price: "₹310", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80", instruction: "Extra cheese cream layer frosted on top" }
      ]
    },
    { 
      id: "#1027", 
      table: "Table 2", 
      timePlaced: "8 mins ago",
      status: "Ready", 
      priority: "Low",
      section: "Juice",
      estCookingTime: "5 Mins",
      orderType: "Dine-In",
      tokenNo: "TK-9092",
      items: [
        { name: "Fresh Avocado Shake", qty: 2, price: "₹190", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80", instruction: "No sugar, substitute honey" }
      ]
    },
    { 
      id: "#1028", 
      table: "Table 9", 
      timePlaced: "15 mins ago",
      status: "Served", 
      priority: "Low",
      section: "Tandoor",
      estCookingTime: "18 Mins",
      orderType: "Dine-In",
      tokenNo: "TK-9095",
      items: [
        { name: "Butter Naan & Murgh Tikka", qty: 1, price: "₹650", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80", instruction: "Naan crisp, butter light" }
      ]
    },
    { 
      id: "#1029",
      table: "Parcel Box B",
      timePlaced: "3 mins ago",
      status: "Served",
      priority: "Medium",
      section: "Fry",
      estCookingTime: "10 Mins",
      orderType: "Parcel",
      tokenNo: "TK-9098",
      items: [
        { name: "Crispy Chicken Nuggets", qty: 2, price: "₹280", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80", instruction: "Extra crispy, no MSG" }
      ]
    },
    { 
      id: "#1030",
      table: "Online App",
      timePlaced: "1 min ago",
      status: "Served",
      priority: "Low",
      section: "Juice",
      estCookingTime: "5 Mins",
      orderType: "Online Order",
      tokenNo: "TK-9101",
      items: [
        { name: "Fresh Strawberry Juice", qty: 2, price: "₹120", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80", instruction: "No ice, no sugar" }
      ]
    }
  ]);

  // Simulate notification buzzer audio ring
  const playNewOrderSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5 note bell sound
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.15); // Ring for 150ms
    } catch (e) {
      console.log("Audio contexts blocked or not supported on user hardware browser state yet.");
    }
  };

  // Step order states forward sequentially: Pending -> Cooking -> Ready -> Served
  const advanceOrderStatus = (orderId, e) => {
    e.stopPropagation(); // Avoid opening details panel when clicking state cycle button
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        if (order.status === 'Pending') return { ...order, status: 'Cooking' };
        if (order.status === 'Cooking') return { ...order, status: 'Ready' };
        if (order.status === 'Ready') return { ...order, status: 'Served' };
      }
      return order;
    }));
  };

  // Filter computations matrix based on selections
  const filteredOrders = orders.filter(order => {
    const matchesSection = activeSection === 'All Stations' || order.section === activeSection;
    const matchesStatus = activeStatusTab === 'All' || order.status === activeStatusTab;
    return matchesSection && matchesStatus;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      
      {/* 🍳 EDGE-TO-EDGE KDS CONTROL PANEL ACTION HEADER */}
      <div className="bg-white p-5 border-b border-slate-200/60 shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-md">
            <Layers size={22} className="text-orange-500 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase">KDS Display Console Monitor</h2>
            <p className="text-xs text-slate-400 font-semibold">Real-time cooking ticket router, station channels, instruction alerts, and sound notifications.</p>
          </div>
        </div>

        {/* Action simulators audio toggle element panel block wrapper */}
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          <button 
            onClick={playNewOrderSound}
            className="bg-slate-50 hover:bg-slate-100 text-slate-700 font-black text-xs px-4 py-2.5 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
          >
            <Volume2 size={16} className="text-orange-500 animate-bounce" /> Test Notification Sound
          </button>
          
          <div className="bg-orange-50 text-orange-700 border border-orange-100 font-black text-xs px-4 py-2.5 rounded-xl shadow-inner flex items-center gap-2">
            <Radio size={14} className="animate-ping" /> KDS Status Link: Active Syncing
          </div>
        </div>
      </div>

      {/* 🚀 SUB-HEADER TAB SWITCHERS PANEL STRIP FOR KITCHEN SECTIONS */}
      <div className="bg-slate-900 px-5 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none border-b border-slate-950">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1 shrink-0">
          <ChefHat size={12} /> Sections:
        </span>
        {kitchenSections.map((section) => (
          <button
            key={section}
            onClick={() => setSelectedCategory ? setActiveSection(section) : setActiveSection(section)}
            className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all whitespace-nowrap shrink-0 ${
              activeSection === section 
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/10 scale-105' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {section}
            <span className="ml-1.5 px-1.5 py-0.2 rounded-md bg-black/30 text-[10px] text-white">
              {section === 'All Stations' ? orders.length : orders.filter(o => o.section === section).length}
            </span>
          </button>
        ))}
      </div>

      {/* 📑 TICKETS STATUS FILTERS STRIP BUTTONS */}
      <div className="px-5 py-4 bg-white border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {['All', 'Pending', 'Cooking', 'Ready', 'Served'].map((tab) => {
          const count = tab === 'All' ? orders.length : orders.filter(o => o.status === tab).length;
          return (
            <button
              key={tab}
              onClick={() => setActiveStatusTab(tab)}
              className={`px-4 py-1.5 rounded-xl font-black text-xs transition-all border shrink-0 ${
                activeStatusTab === tab 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                  : 'bg-slate-50 text-slate-500 border-slate-200/60 hover:bg-slate-100'
              }`}
            >
              {tab} Queue
              <span className={`ml-2 px-1.5 py-0.2 rounded ${activeStatusTab === tab ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-600 font-bold'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* 🚀 MAIN CONTENT GRID WORKSPACE CONTAINER (EDGE-TO-EDGE) */}
      <div className="px-5 py-6">
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-xs max-w-xl mx-auto space-y-3">
            <AlertCircle className="text-slate-300 mx-auto" size={48} />
            <p className="text-sm font-black text-slate-800 uppercase tracking-wider">No active logs matching configuration</p>
            <p className="text-xs text-slate-400 font-medium">Clear or change filters to scan other active cooking station lines.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredOrders.map((order, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedOrder(order)}
                className={`bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.005] cursor-pointer group relative ${
                  order.priority === "Critical" ? "ring-2 ring-rose-500" : ""
                }`}
              >
                {/* Desktop view hover tooltip */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-white font-black uppercase tracking-wider flex items-center gap-1 pointer-events-none z-10 shadow-xs border border-white/5">
                  <Eye size={10} /> Expand Spec Sheet
                </div>

                {/* Ticket Identification Ribbon Header */}
                <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-900 text-base">{order.id}</span>
                      <span className="px-2 py-0.5 bg-slate-900 text-white rounded-md text-[10px] font-black tracking-wide shadow-xs">
                        {order.table}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-black flex items-center gap-1 uppercase tracking-wider">
                      <Clock size={11} className="text-slate-400" /> Placed {order.timePlaced}
                    </p>
                  </div>

                  {/* Priority Indicator Badge configuration */}
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider ${
                      order.priority === "Critical" ? "bg-rose-600 text-white animate-pulse" :
                      order.priority === "High" ? "bg-orange-500 text-white" : "bg-slate-200 text-slate-700"
                    }`}>
                      {order.priority} Priority
                    </span>
                    
                    {/* Channel Tag Badge (Parcel / Dine-in / Online) */}
                    <span className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider">
                      {order.orderType}
                    </span>
                  </div>
                </div>

                {/* UPSIZED FOOD LIST BLOCK IMAGES CARDS ROW CONTAINER */}
                <div className="p-4 space-y-4 flex-1">
                  {order.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col sm:flex-row items-stretch gap-4 bg-slate-50/70 p-3 rounded-2xl border border-slate-100/60 hover:bg-slate-50 transition-colors">
                      
                      {/* Explicitly Upsized Image Area Box */}
                      <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden shrink-0 shadow-md border border-slate-200 bg-slate-100 relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <span className="absolute bottom-1 right-1 bg-slate-900/90 backdrop-blur-md text-white text-xs font-black px-2.5 py-0.5 rounded-lg shadow-sm border border-white/5">
                          x{item.qty}
                        </span>
                      </div>

                      {/* Item Meta Parameters Details Block */}
                      <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-black text-slate-800 tracking-tight leading-tight line-clamp-1">{item.name}</p>
                            <span className="text-xs font-extrabold text-slate-400 shrink-0">{item.price}</span>
                          </div>
                          
                          {/* Special Instructions Parameters Field Callout Tags (Less Spicy, No Onion, Extra Cheese, etc.) */}
                          {item.instruction && (
                            <div className="text-[11px] text-rose-700 font-bold mt-2 bg-rose-50/70 border border-rose-100/50 p-2 rounded-xl leading-normal">
                              <span className="font-extrabold text-rose-600 block text-[9px] uppercase tracking-wider mb-0.5">📢 Kitchen Instructions:</span>
                              {item.instruction}
                            </div>
                          )}
                        </div>
                        
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2 flex items-center gap-1.5 border-t border-slate-200/40 pt-1.5">
                          <Utensils size={11} className="text-slate-400" /> Station Node: <span className="text-slate-700 font-extrabold">{order.section}</span>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Operational KDS Footer controllers */}
                <div className="p-4 bg-slate-50/50 border-t border-slate-100 space-y-3.5">
                  <div className="grid grid-cols-2 gap-4 text-[11px] font-bold border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Timer size={13} className="text-slate-400" />
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase block tracking-wider">Est. Duration</span>
                        <span className="text-slate-800 font-extrabold">{order.estCookingTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-500 justify-end text-right">
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase block tracking-wider">Current State</span>
                        <span className={`font-black uppercase tracking-wider ${
                          order.status === 'Pending' ? 'text-amber-600' :
                          order.status === 'Cooking' ? 'text-orange-500' :
                          order.status === 'Ready' ? 'text-emerald-600' : 'text-slate-500'
                        }`}>{order.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* KDS Status Advancer Buttons Trigger Row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1.5 rounded-xl border border-slate-100 min-w-0 flex-1 shadow-2xs">
                      <ChefHat size={12} className="text-slate-400 shrink-0" />
                      <span className="truncate">{order.chef ? order.chef.split(' ')[1] : 'Unassigned'}</span>
                    </div>

                    <button 
                      onClick={(e) => advanceOrderStatus(order.id, e)}
                      disabled={order.status === 'Served'}
                      className={`font-black text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer ${
                        order.status === 'Pending' ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/10' :
                        order.status === 'Cooking' ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10' :
                        order.status === 'Ready' ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/10' : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                      }`}
                    >
                      {order.status === 'Pending' && <>Start Cooking <Flame size={13} /></>}
                      {order.status === 'Cooking' && <>Mark Ready <Check size={13} /></>}
                      {order.status === 'Ready' && <>Dispatch & Serve <ArrowRight size={13} /></>}
                      {order.status === 'Served' && <>Served logs</>}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* ========================================================== */}
      {/* 📥 SLIDE-OVER SIDE PANEL DRAWER MODAL (ORDER DETAILED DATA) */}
      {/* ========================================================== */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop exit click panel area */}
          <div 
            onClick={() => setSelectedOrder(null)}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300"
          ></div>

          {/* Sliding sheet container layout drawer */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 z-10 border-l border-slate-200">
            
            {/* Modal Drawer Header */}
            <div>
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black uppercase tracking-tight">KDS Ticket Specs {selectedOrder.id}</h3>
                    <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] font-black uppercase rounded-md tracking-wider">{selectedOrder.orderType}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-semibold">Token Code: {selectedOrder.tokenNo} | Position Node: {selectedOrder.table}</p>
                </div>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="p-2 hover:bg-white/10 text-white rounded-xl transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Specifications parameters details content container list */}
              <div className="p-5 space-y-5 overflow-y-auto max-h-[calc(100vh-220px)]">
                
                {/* Station Assignment and Status Indicators row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Target Line Station</span>
                    <span className="text-xs font-black text-slate-800 block mt-0.5">{selectedOrder.section} Station</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Cooking Timer</span>
                    <span className="text-xs font-black text-slate-800 block mt-0.5">{selectedOrder.estCookingTime}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Recipe Breakdowns & Custom Tags ({selectedOrder.items.length})</p>
                  
                  {selectedOrder.items.map((item, keyIdx) => (
                    <div key={keyIdx} className="border border-slate-100 p-3 rounded-2xl space-y-3 bg-white hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-black text-slate-900 leading-tight">{item.name}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded">Serving: x{item.qty}</span>
                            <span className="text-xs font-extrabold text-slate-400">{item.price} each</span>
                          </div>
                        </div>
                      </div>

                      {item.instruction && (
                        <div className="text-xs text-rose-700 font-bold bg-rose-50 border border-rose-100 p-2.5 rounded-xl flex items-start gap-1.5 leading-normal">
                          <span className="shrink-0">📢</span>
                          <span><strong>Custom Modification:</strong> {item.instruction}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Drawer Action Controllers Footer panel */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600 px-1">
                <span className="flex items-center gap-1"><ChefHat size={14} className="text-slate-400" /> Handler Staff Assignment</span>
                <span className="text-slate-900 font-extrabold">{selectedOrder.chef}</span>
              </div>
              
              <div className="flex gap-3 mt-1">
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs py-3 rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  Dismiss Sheet
                </button>
                <button 
                  onClick={(e) => {
                    advanceOrderStatus(selectedOrder.id, e);
                    setSelectedOrder(null);
                  }}
                  disabled={selectedOrder.status === 'Served'}
                  className="flex-1 bg-slate-950 hover:bg-orange-500 text-white font-black text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                >
                  <Check size={14} /> Update Ticket State
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default OrderCard;