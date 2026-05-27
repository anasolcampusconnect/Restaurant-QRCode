import React, { useState } from 'react';
import { 
  Plus, Edit2, Trash2, ToggleLeft, ToggleRight, DollarSign, 
  Layers, Clock, FileText, ShoppingBag, AlertTriangle, 
  Calendar, Truck, BarChart2, ShieldAlert, UserCheck, 
  UserX, Briefcase, Award, Coffee, Search, SlidersHorizontal, X,
  UtensilsCrossed, Sparkles, Scale, Thermometer, Flame, ChefHat
} from 'lucide-react';

function KitchenStats() {
  const [currentTab, setCurrentTab] = useState('menu'); // Tabs: menu | inventory | staff
  const [selectedItem, setSelectedItem] = useState(null); // Detailed side panel focus state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false); // Controls add item form block

  // Form states for creating a new menu item dynamically
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodCategory, setNewFoodCategory] = useState('Main Course');
  const [newFoodPrice, setNewFoodPrice] = useState('');
  const [newFoodPrep, setNewFoodPrep] = useState('');
  const [newFoodImage, setNewFoodImage] = useState('');
  const [newFoodDesc, setNewFoodDesc] = useState('');
  const [newFoodInstruction, setNewFoodInstruction] = useState('');

  // ==========================================
  // 4. DEEP MENU MANAGEMENT DATA (Expanded)
  // ==========================================
  const [menuItems, setMenuItems] = useState([
    {
      id: "M-01",
      name: "Spicy Tonkotsu Ramen",
      category: "Main Course",
      price: 450,
      isAvailable: true,
      prepTime: "15 Mins",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80",
      description: "Rich 16-hour pork bone broth served with fresh house wheat noodles, flame-seared chashu pork belly, soft-boiled marinated nitamago egg, and black garlic mayu oil.",
      isCombo: false,
      isSeasonal: false,
      ingredients: [
        { name: "Ramen Noodles", quantity: "180g" },
        { name: "Tonkotsu Pork Broth", quantity: "300ml" },
        { name: "Chashu Pork Belly", quantity: "2 Slices" },
        { name: "Nitamago Egg", quantity: "1 pc" }
      ],
      instructions: "Keep tonkotsu broth at a bare simmer of 92°C. Flash-boil fresh noodles for precisely 110 seconds. Sear pork belly with a blowtorch before placing it on top gently."
    },
    {
      id: "M-02",
      name: "Crispy Pork Gyoza Combo",
      category: "Starters",
      price: 320,
      isAvailable: true,
      prepTime: "10 Mins",
      image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=500&q=80",
      description: "Pan-fried crispy Japanese dumplings filled with seasoned minced pork and green onions, paired with house shoyu dipping glaze and hot miso soup.",
      isCombo: true,
      isSeasonal: false,
      ingredients: [
        { name: "Gyoza Wrappers", quantity: "6 pcs" },
        { name: "Minced Pork filling", quantity: "120g" },
        { name: "Scallions & Garlic", quantity: "25g" },
        { name: "Miso Paste Base", quantity: "20g" }
      ],
      instructions: "Arrange gyoza in a hot oiled skillet. Sear bottoms until deep golden brown. Pour in 60ml of cornstarch water slurry, cover immediately, and steam for 4.5 minutes."
    },
    {
      id: "M-03",
      name: "Matcha Lava Cake (Winter Special)",
      category: "Desserts",
      price: 290,
      isAvailable: true,
      prepTime: "12 Mins",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
      description: "Warm, soft-baked molten green tea cake featuring a vibrant white chocolate and ceremonial Uji matcha ganache core that flows smoothly when cut.",
      isCombo: false,
      isSeasonal: true,
      ingredients: [
        { name: "Uji Matcha Powder", quantity: "15g" },
        { name: "Belgian White Chocolate", quantity: "60g" },
        { name: "Organic Pastry Flour", quantity: "45g" },
        { name: "Vanilla Bean Ice Cream", quantity: "1 Scoop" }
      ],
      instructions: "Preheat heavy deck oven to exactly 200°C. Bake in buttered, sugar-dusted ramekins for 9 minutes max. Center must remain loose and molten. Invert onto plate and dust with extra matcha."
    },
    {
      id: "M-04",
      name: "Oat Milk Iced Matcha",
      category: "Drinks",
      price: 210,
      isAvailable: false,
      prepTime: "4 Mins",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80",
      description: "Cold-whisked ceremonial stone-ground Japanese matcha layered gently over chilled organic barista-grade oat milk and sweet sugarcane syrup syrup.",
      isCombo: false,
      isSeasonal: false,
      ingredients: [
        { name: "Ceremonial Matcha powder", quantity: "4g" },
        { name: "Barista Oat Milk", quantity: "220ml" },
        { name: "Sugarcane Liquid Extract", quantity: "15ml" }
      ],
      instructions: "Sift matcha into a traditional chawan bowl. Add 40ml of water heated strictly to 80°C. Whisk vigorously in a rapid 'W' pattern using a bamboo chasen until dense foam develops. Layer carefully over iced milk."
    },
    {
      id: "M-05",
      name: "Crunchy Salmon Aburi Roll",
      category: "Main Course",
      price: 540,
      isAvailable: true,
      prepTime: "14 Mins",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80",
      description: "Inside-out sushi roll with fresh cucumber and avocado, draped in ocean salmon slices, blowtorch-seared with spicy kewpie mayo and sweet unagi reduction sauce.",
      isCombo: false,
      isSeasonal: false,
      ingredients: [
        { name: "Fresh Salmon Fillet", quantity: "90g" },
        { name: "Sushi Rice (Shari)", quantity: "140g" },
        { name: "Avocado & Cucumber", quantity: "40g" },
        { name: "Kewpie Mayonnaise", quantity: "20ml" }
      ],
      instructions: "Roll securely using a bamboo mat wrapped in cling film. Layer thinly cut salmon across the top shell. Pipe kewpie mayo streaks down the center and torch-sear until caramelized."
    }
  ]);

  // ==========================================
  // 5. EXPANDED INVENTORY & REFRIGERATOR DATA
  // ==========================================
  const [inventoryItems] = useState([
    { id: "I-01", name: "Fresh Salmon Fillets", availableQty: 4.2, unit: "KG", status: "Critical Low", expiry: "28 May 2026", vendor: "Oceanic Catch Ltd", storage: "Walk-in Freezer #2 (-18°C)", wasteQty: "0.4 KG" },
    { id: "I-02", name: "Premium Sushi Rice", availableQty: 85, unit: "KG", status: "Good", expiry: "12 Oct 2026", vendor: "Saito Grains Co", storage: "Dry Pantry Shelf A", wasteQty: "0 KG" },
    { id: "I-03", name: "Refined Soy Cooking Oil", availableQty: 12, unit: "Liters", status: "Low Stock Warning", expiry: "04 Jan 2027", vendor: "Hyderabad Agro Traders", storage: "Dry Pantry Area 2", wasteQty: "0.2 Liters" },
    { id: "I-04", name: "Fresh Chicken Breast", availableQty: 18.5, unit: "KG", status: "Good", expiry: "30 May 2026", vendor: "PoultryERP Farms Wholesale", storage: "Chiller Chamber #1 (2°C)", wasteQty: "1.1 KG" },
    { id: "I-05", name: "Artisanal Soft Paneer cubes", availableQty: 1.5, unit: "KG", status: "Critical Low", expiry: "29 May 2026", vendor: "Dairy Pure Distributers", storage: "Line Fridge Refrigerator #3", wasteQty: "0.1 KG" },
    { id: "I-06", name: "Secret Tonkotsu Masala Mix", availableQty: 14, unit: "KG", status: "Good", expiry: "15 Mar 2027", vendor: "SpiceRoute Imports", storage: "Dry Spice Containers", wasteQty: "0 KG" },
    { id: "I-07", name: "Sriracha Hot Chili Sauce", availableQty: 24, unit: "Pieces", status: "Good", expiry: "20 Jun 2027", vendor: "Global Condiments Inc", storage: "Line Counter Base Fridge", wasteQty: "0.5 Pcs" },
    { id: "I-08", name: "Whole Fat Milk Bottles", availableQty: 5, unit: "Liters", status: "Critical Low", expiry: "29 May 2026", vendor: "Dairy Pure Distributers", storage: "Main Drink Refrigerator Storage", wasteQty: "0.8 Liters" },
    { id: "I-09", name: "Vanilla Bean Ice Cream tubs", availableQty: 3, unit: "Pieces", status: "Low Stock Warning", expiry: "14 Jul 2026", vendor: "Creamery Delights", storage: "Deep Freezer Stand Alone #1", wasteQty: "0.2 Pcs" },
    { id: "I-10", name: "Premium Ramen Wheat Flour", availableQty: 120, unit: "KG", status: "Good", expiry: "08 Dec 2026", vendor: "Saito Grains Co", storage: "Dry Pantry Silo #1", wasteQty: "0 KG" }
  ]);

  // ==========================================
  // 6. CHEF & STAFF DATA (Expanded Analytics)
  // ==========================================
  const [staffMembers] = useState([
    { id: "S-01", name: "Chef Aniket", role: "Head Chef", shift: "07:00 AM - 04:00 PM", attendance: "Present", status: "On Duty", assignedOrders: 3, performance: "98.4% On-Time", breakLeft: "45 Mins", salary: "₹75,000 / month", station: "Wok & Broth Station Alpha" },
    { id: "S-02", name: "Chef Vikram", role: "Sous Chef", shift: "12:00 PM - 09:00 PM", attendance: "Present", status: "On Duty", assignedOrders: 4, performance: "94.1% On-Time", breakLeft: "20 Mins", salary: "₹55,000 / month", station: "Teppanyaki Grill Line" },
    { id: "S-03", name: "Priya Das", role: "Kitchen Supervisor", shift: "08:00 AM - 05:00 PM", attendance: "Present", status: "On Break", assignedOrders: 0, performance: "99.2% Audit Score", breakLeft: "0 Mins", salary: "₹48,000 / month", station: "Quality Pass Counter" },
    { id: "S-04", name: "Rahul Kumar", role: "Helper", shift: "07:00 AM - 04:00 PM", attendance: "Present", status: "On Duty", assignedOrders: 2, performance: "89.5% Speed Rank", breakLeft: "60 Mins", salary: "₹22,000 / month", station: "Mise En Place Vegetable Prep" },
    { id: "S-05", name: "K. Satish", role: "Inventory Manager", shift: "06:00 AM - 03:00 PM", attendance: "Present", status: "On Duty", assignedOrders: 0, performance: "100% Reconciliation", breakLeft: "30 Mins", salary: "₹35,000 / month", station: "Receiving Bay & Dry Stockroom" },
    { id: "S-06", name: "Laxmi Amma", role: "Cleaner", shift: "08:00 AM - 05:00 PM", attendance: "Present", status: "On Duty", assignedOrders: 0, performance: "Perfect Sanitation Log", breakLeft: "50 Mins", salary: "₹18,000 / month", station: "Stewarding & Wash Zone" }
  ]);

  // Handle dynamic toggle availability switches
  const handleToggleAvailability = (id) => {
    setMenuItems(prev => prev.map(item => 
      item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
    ));
  };

  // Dynamic Add Food Item Form Submit Handler
  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (!newFoodName || !newFoodPrice || !newFoodPrep) {
      alert("Please fill in the Item Name, Price, and Preparation Time to register the food profile.");
      return;
    }

    const newItem = {
      id: `M-0${menuItems.length + 1}`,
      name: newFoodName,
      category: newFoodCategory,
      price: parseFloat(newFoodPrice),
      isAvailable: true,
      prepTime: `${newFoodPrep} Mins`,
      image: newFoodImage || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80", // default fallback placeholder
      description: newFoodDesc || "Gourmet freshly cooked restaurant specialty crafted by our expert line culinary chefs.",
      isCombo: false,
      isSeasonal: false,
      ingredients: [
        { name: "Core Raw Produce Base", quantity: "As per serving specification" },
        { name: "House Secret Aromatics", quantity: "15g" }
      ],
      instructions: newFoodInstruction || "Follow default preparation guidelines. Ensure internal temperature check passes sanitation code before service plate assembly."
    };

    setMenuItems([newItem, ...menuItems]);
    
    // Clear all inputs and close form layout container view wrapper panel
    setNewFoodName('');
    setNewFoodPrice('');
    setNewFoodPrep('');
    setNewFoodImage('');
    setNewFoodDesc('');
    setNewFoodInstruction('');
    setShowAddForm(false);
  };

  // Filter conditions computations parameters for the catalog rendering array
  const filteredMenuItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full text-slate-800 font-sans p-1 sm:p-2 space-y-6">
      
      {/* 📑 DYNAMIC SUB-MODULE SYSTEM CONSOLE HEADER NAV */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-900 text-white rounded-xl shadow-xs">
            <UtensilsCrossed size={18} />
          </div>
          <div>
            <h1 className="text-base font-black text-slate-900 tracking-tight uppercase">Enterprise Kitchen Operations Console</h1>
            <p className="text-xs text-slate-400 font-semibold">Active catalog controls, refrigerator telemetry, raw weights logs, and shift rosters.</p>
          </div>
        </div>

        {/* Console Tab Select Switcher Buttons Layout Grid */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/50 overflow-x-auto scrollbar-none w-full xl:w-auto">
          {[
            { id: 'menu', label: 'Menu Catalog Engine', icon: ShoppingBag, count: menuItems.length },
            { id: 'inventory', label: 'Inventory & Cold Storage', icon: AlertTriangle, count: inventoryItems.filter(i => i.status.includes('Low') || i.status.includes('Critical')).length },
            { id: 'staff', label: 'Chef Rosters & Staff', icon: UserCheck, count: staffMembers.filter(s => s.status === 'On Duty').length }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => { setCurrentTab(tab.id); setSearchQuery(''); setSelectedCategory('All'); setShowAddForm(false); }}
                className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all whitespace-nowrap flex-1 xl:flex-initial ${
                  currentTab === tab.id 
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/20' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${currentTab === tab.id ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'}`}>{tab.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================== */}
      {/* MODULE TAB VIEW 1: ADVANCED MENU MANAGEMENT CONTROL       */}
      {/* ========================================================== */}
      {currentTab === 'menu' && (
        <div className="space-y-6">
          
          {/* Action Header Filtering Bar Interface */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                <input 
                  type="text" 
                  placeholder="Search item code, recipe names, ingredients parameters..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-900/5 transition-all"
                />
              </div>
              
              <button 
                onClick={() => setShowAddForm(!showAddForm)}
                className={`font-black text-xs px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer ${
                  showAddForm ? 'bg-rose-600 text-white hover:bg-rose-700' : 'bg-slate-900 text-white hover:bg-orange-500'
                }`}
              >
                {showAddForm ? <X size={14} /> : <Plus size={14} />}
                {showAddForm ? 'Cancel Registration' : 'Register New Recipe Item'}
              </button>
            </div>

            {/* Quick Category Tab Filtering Strip buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-slate-50 pt-3">
              {['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'bg-slate-50 text-slate-500 border border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  {cat} ({cat === 'All' ? menuItems.length : menuItems.filter(item => item.category === cat).length})
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC FORM ROW PANEL INJECTION */}
          {showAddForm && (
            <form onSubmit={handleAddMenuItem} className="bg-white rounded-2xl p-5 border-2 border-dashed border-slate-200 shadow-sm space-y-4 animate-in slide-in-from-top duration-300">
              <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider pb-2 border-b border-slate-100">
                <Sparkles className="text-orange-500 animate-spin" size={15} /> Input Recipe Parameters Field Logs
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Item Name *</label>
                  <input type="text" value={newFoodName} onChange={(e) => setNewFoodName(e.target.value)} placeholder="e.g., Chicken Karaage Bento" className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:bg-white" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Menu Category</label>
                  <select value={newFoodCategory} onChange={(e) => setNewFoodCategory(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-bold focus:outline-none focus:bg-white text-slate-700">
                    <option value="Starters">Starters</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Drinks">Drinks</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Price (INR) *</label>
                    <input type="number" value={newFoodPrice} onChange={(e) => setNewFoodPrice(e.target.value)} placeholder="₹ Price" className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:bg-white" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Prep (Mins) *</label>
                    <input type="number" value={newFoodPrep} onChange={(e) => setNewFoodPrep(e.target.value)} placeholder="Mins" className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:bg-white" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1 md:col-span-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Unsplash Image URL Link (Optional)</label>
                  <input type="url" value={newFoodImage} onChange={(e) => setNewFoodImage(e.target.value)} placeholder="https://images.unsplash.com/..." className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:bg-white" />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Brief Customer Catalog Menu Description</label>
                  <input type="text" value={newFoodDesc} onChange={(e) => setNewFoodDesc(e.target.value)} placeholder="Describe flavor profiles, garnishes, allergic notices..." className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:bg-white" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recipe Cooking Instructions (Visible to Line Cooks)</label>
                <textarea rows="2" value={newFoodInstruction} onChange={(e) => setNewFoodInstruction(e.target.value)} placeholder="Simmering thresholds, oven degree benchmarks, assembly sequences instructions..." className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-semibold focus:outline-none focus:bg-white" />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer">
                  ✔ Validate & Inject Item into Active State Array
                </button>
              </div>
            </form>
          )}

          {/* Upsized High Density Food Layout Cards Grid layout display matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMenuItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-3xl border border-slate-100 shadow-xs overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                {/* Big Image Framework housing category tag filters */}
                <div className="w-full h-56 sm:h-64 relative bg-slate-100 overflow-hidden border-b border-slate-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md font-black text-[10px] uppercase tracking-wider text-orange-400 px-3 py-1 rounded-xl shadow-xs border border-white/5">
                    {item.category}
                  </span>

                  <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                    {item.isCombo && <span className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">Combo Meal Config</span>}
                    {item.isSeasonal && <span className="bg-amber-500 text-slate-900 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">Seasonal Pack</span>}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold text-slate-300 block tracking-widest">{item.id}</span>
                    <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug drop-shadow-xs">{item.name}</h3>
                  </div>
                </div>

                {/* Content descriptors block text elements */}
                <div className="p-4 space-y-4 flex-1">
                  <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.ingredients.slice(0, 3).map((ing, kIdx) => (
                      <span key={kIdx} className="text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded-md border border-slate-100 font-bold flex items-center gap-1 shadow-2xs">
                        <Scale size={10} className="text-slate-400" /> {ing.name} ({ing.quantity})
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-bold">+{item.ingredients.length - 3} More</span>
                    )}
                  </div>
                </div>

                {/* Pricing and Action switches panels layout slot */}
                <div className="p-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Price Grid</span>
                      <span className="text-base font-black text-slate-900">₹{item.price}</span>
                    </div>
                    <div className="border-l border-slate-200 h-6 pl-4">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Target Prep</span>
                      <span className="text-xs font-extrabold text-slate-700 flex items-center gap-1 mt-0.5">
                        <Clock size={12} className="text-slate-400" /> {item.prepTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    <button 
                      onClick={() => handleToggleAvailability(item.id)}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl transition-all border ${
                        item.isAvailable 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100' 
                          : 'bg-rose-50 text-rose-700 border-rose-100 hover:bg-rose-100'
                      }`}
                    >
                      {item.isAvailable ? <ToggleRight size={18} className="text-emerald-600" /> : <ToggleLeft size={18} className="text-rose-400" />}
                      <span className="text-[10px] font-black uppercase tracking-wider">{item.isAvailable ? 'Available' : 'Sold Out'}</span>
                    </button>

                    <button className="p-2 hover:bg-slate-200 text-slate-600 rounded-lg bg-white border border-slate-100 shadow-2xs"><Edit2 size={12} /></button>
                    <button className="p-2 hover:bg-rose-50 hover:text-rose-600 text-slate-400 rounded-lg bg-white border border-slate-100 shadow-2xs"><Trash2 size={12} /></button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================== */}
      {/* MODULE TAB VIEW 2: EXPANDED INVENTORY & REFRIGERATORS     */}
      {/* ========================================================== */}
      {currentTab === 'inventory' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "SKUs Tracked", val: "54 Materials", icon: Layers, color: "border-l-blue-500 text-blue-600 bg-blue-50/40" },
              { label: "Low Level Alert", val: "3 Active SKUs", icon: AlertTriangle, color: "border-l-rose-500 text-rose-600 bg-rose-50/40 animate-pulse" },
              { label: "Cooler Units Health", val: "3 Refrigerators Safe", icon: Thermometer, color: "border-l-emerald-500 text-emerald-600 bg-emerald-50/40" },
              { label: "Waste Disposal Log", val: "3.3 KG Cleared", icon: trashIcon => <Trash2 size={16} />, color: "border-l-amber-500 text-amber-600 bg-amber-50/40" }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`bg-white p-4 rounded-xl shadow-2xs border border-slate-100 border-l-4 flex justify-between items-start ${stat.color}`}>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-sm font-black text-slate-900 mt-0.5">{stat.val}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action trigger links row section */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span><h3 className="text-xs font-black uppercase tracking-wider text-slate-500">Live Refrigerator Storage & Raw Stock Tracking Sheet</h3></div>
            <div className="flex flex-wrap gap-2">
              <button className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-2xs"><FileText size={13} /> Consumption Report</button>
              <button className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-2xs"><Truck size={13} /> Issue PO Order</button>
            </div>
          </div>

          {/* Main Inventory telemetry datagrid framework table sheet */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider border-b border-slate-800">
                    <th className="p-4 rounded-tl-2xl">Material Identifier</th>
                    <th className="p-4">Storage Cell Node</th>
                    <th className="p-4">Remaining Vol</th>
                    <th className="p-4">Status Risk</th>
                    <th className="p-4">Spoilage/Waste</th>
                    <th className="p-4">Expiry Date</th>
                    <th className="p-4 rounded-tr-2xl">Assigned Supplier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                  {inventoryItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4"><div className="font-black text-slate-900">{item.name}</div><div className="text-[10px] text-slate-400 font-bold mt-0.5">{item.id}</div></td>
                      <td className="p-4 text-slate-500 font-bold flex items-center gap-1.5 mt-2"><Layers size={12} className="text-slate-400" />{item.storage}</td>
                      <td className="p-4 font-black text-slate-900 text-sm">{item.availableQty} <span className="text-[10px] text-slate-400 font-bold">{item.unit}</span></td>
                      <td className="p-4">
                        <span className={`px-2.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${
                          item.status.includes("Critical") ? 'bg-rose-50 text-rose-700 border border-rose-100 animate-pulse' :
                          item.status.includes("Warning") ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 font-extrabold text-rose-500">{item.wasteQty}</td>
                      <td className="p-4 text-slate-400 font-bold"><Calendar size={12} className="inline mr-1 text-slate-300" /> {item.expiry}</td>
                      <td className="p-4 text-slate-500 font-bold">{item.vendor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================== */}
      {/* MODULE TAB VIEW 3: CHEF ROSTERS & PERFORMANCE METRICS       */}
      {/* ========================================================== */}
      {currentTab === 'staff' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-all space-y-4">
                
                <div className="space-y-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xs shrink-0 border border-slate-900 shadow-xs">
                        {staff.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 tracking-tight text-sm leading-tight">{staff.name}</h4>
                        <span className="text-[9px] text-slate-400 font-bold block mt-0.5">{staff.id}</span>
                      </div>
                    </div>

                    <span className="bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-lg font-black text-[9px] uppercase text-slate-600 flex items-center gap-1">
                      <ChefHat size={11} className="text-slate-400" /> {staff.role}
                    </span>
                  </div>

                  {/* Operational parameters tags block list */}
                  <div className="grid grid-cols-2 gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100/80 text-[11px] font-semibold text-slate-500">
                    <div className="col-span-2 border-b border-slate-200/40 pb-1.5">
                      <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Assigned Hot Station</span>
                      <span className="text-slate-800 font-bold block mt-0.5 truncate">{staff.station}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Shift Timing</span>
                      <span className="text-slate-700 font-bold block mt-0.5">{staff.shift.split(' ')[0]} - {staff.shift.split(' ')[3]}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Live Loads</span>
                      <span className="text-slate-900 font-black block mt-0.5">{staff.assignedOrders} Active Tickets</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Break Timer</span>
                      <span className="text-slate-700 font-bold block mt-0.5 flex items-center gap-1"><Coffee size={11} /> {staff.breakLeft}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block tracking-wider">Compensation</span>
                      <span className="text-slate-800 font-extrabold block mt-0.5">{staff.salary.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Score mapping tags container panels row footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">KPI Level</span>
                    <span className="text-xs font-black text-slate-800 flex items-center gap-0.5 mt-0.5"><Award size={12} className="text-amber-500" /> {staff.performance.split(' ')[0]}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block"></span> {staff.attendance}</span>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-md uppercase text-white shadow-2xs ${staff.status === 'On Duty' ? 'bg-emerald-600' : 'bg-amber-500'}`}>{staff.status}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* 📥 DYNAMIC DETAILS SIDE PREVIEW DRAWER (Recipe Mapping)     */}
      {/* ========================================================== */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div onClick={() => setSelectedItem(null)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"></div>
          
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 z-10 border-l border-slate-100">
            <div>
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-orange-400 tracking-wider bg-white/10 px-2 py-0.5 rounded">{selectedItem.id} Specifications</span>
                  <h3 className="text-base font-black tracking-tight mt-1">{selectedItem.name}</h3>
                </div>
                <button onClick={() => setSelectedItem(null)} className="p-1.5 hover:bg-white/10 rounded-xl transition-colors text-white"><X size={18} /></button>
              </div>

              <div className="p-5 space-y-5 overflow-y-auto max-h-[calc(100vh-160px)] text-xs">
                
                {/* Recipe Blueprint Configuration Ingredients weights mapping */}
                <div className="space-y-2">
                  <h5 className="font-black uppercase tracking-wider text-slate-400 text-[10px] flex items-center gap-1"><Scale size={11} /> Recipe Ingredients Mapping Weights</h5>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 divide-y divide-slate-200/60">
                    {selectedItem.ingredients.map((ing, i) => (
                      <div key={i} className="flex justify-between py-2 first:pt-0 last:pb-0 font-bold text-slate-600">
                        <span>{ing.name}</span>
                        <span className="text-slate-900 font-black">{ing.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparation Processing Instruction logs logs */}
                <div className="space-y-2">
                  <h5 className="font-black uppercase tracking-wider text-slate-400 text-[10px] flex items-center gap-1"><Flame size={12} /> Line Preparation Cooking Instructions</h5>
                  <p className="bg-orange-50/40 border border-orange-100 text-slate-700 p-3.5 rounded-xl font-medium leading-relaxed italic">
                    "{selectedItem.instructions}"
                  </p>
                </div>

                {/* Additional diagnostic labels parameters grids */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="border border-slate-100 p-3 rounded-xl bg-slate-50 text-center">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Target Timer Threshold</span>
                    <span className="font-black text-slate-800 text-xs mt-1 block">{selectedItem.prepTime}</span>
                  </div>
                  <div className="border border-slate-100 p-3 rounded-xl bg-slate-50 text-center">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Base Menu Matrix Cost</span>
                    <span className="font-black text-slate-800 text-xs mt-1 block">₹{selectedItem.price}</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <button onClick={() => setSelectedItem(null)} className="w-full bg-white hover:bg-slate-100 font-black border border-slate-200 text-slate-700 py-2.5 rounded-xl text-xs transition-all shadow-2xs">
                Dismiss Blueprint Specification
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default KitchenStats;