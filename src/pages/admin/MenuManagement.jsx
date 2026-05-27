import { useState } from "react";

function MenuManagement() {
  // --- STATE ---
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Spicy Chicken Burger", category: "Burgers", price: 12.99, isActive: true, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
    { id: 2, name: "Margherita Woodfire Pizza", category: "Pizza", price: 16.50, isActive: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80" },
    { id: 3, name: "Classic Caesar Salad", category: "Salads", price: 9.99, isActive: false, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80" },
    { id: 4, name: "Iced Caramel Macchiato", category: "Beverages", price: 5.50, isActive: true, image: "https://images.unsplash.com/photo-1461023058943-0708e5223eeb?w=500&q=80" },
    { id: 5, name: "Molten Lava Cake", category: "Desserts", price: 8.50, isActive: true, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80" },
  ]);

  // Changed to a mutable state so we can add new categories
  const [categories, setCategories] = useState(["All", "Burgers", "Pizza", "Salads", "Beverages", "Desserts"]);
  const [activeCategory, setActiveCategory] = useState("All");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); 
  
  // New Category State for the Form
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  
  const defaultForm = { id: null, name: "", category: "Burgers", price: "", isActive: true, image: "" };
  const [formData, setFormData] = useState(defaultForm);

  // --- HANDLERS ---
  const handleOpenAdd = () => {
    setFormData(defaultForm);
    setModalMode("add");
    setShowNewCategoryInput(false);
    setNewCategoryName("");
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setFormData(item);
    setModalMode("edit");
    setShowNewCategoryInput(false);
    setNewCategoryName("");
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this dish?")) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, isActive: e.target.value === "true" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalPrice = parseFloat(formData.price) || 0;
    const finalImage = formData.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80";

    // Handle Category Logic
    let finalCategory = formData.category;
    if (showNewCategoryInput && newCategoryName.trim() !== "") {
      finalCategory = newCategoryName.trim();
      
      // If it's a completely new category, add it to our top tabs list
      if (!categories.includes(finalCategory)) {
        setCategories([...categories, finalCategory]);
      }
    }

    const newItemData = { 
      ...formData, 
      price: finalPrice, 
      image: finalImage,
      category: finalCategory 
    };

    if (modalMode === "add") {
      setMenuItems([...menuItems, { ...newItemData, id: Date.now() }]);
    } else {
      setMenuItems(menuItems.map(item => item.id === formData.id ? newItemData : item));
    }
    setIsModalOpen(false);
  };

  // --- COMPUTED VALUES ---
  const totalItems = menuItems.length;
  const activeCount = menuItems.filter(i => i.isActive).length;
  const inactiveCount = totalItems - activeCount;
  const filteredItems = menuItems.filter(item => activeCategory === "All" || item.category === activeCategory);

  return (
    <div className="space-y-8 relative">
      {/* Top Bar & Stats */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center rotate-3 shadow-inner">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Menu Studio</h2>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm font-medium">
              <span className="text-gray-500">Total Items: <span className="text-gray-900">{totalItems}</span></span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="text-green-600">Active: {activeCount}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span className="text-red-500">Inactive: {inactiveCount}</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleOpenAdd}
          className="group relative px-6 py-3 font-bold text-white rounded-full bg-gray-900 hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-gray-900/20 hover:shadow-orange-500/30 flex items-center gap-2 whitespace-nowrap"
        >
          <svg className="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span>Craft New Dish</span>
        </button>
      </div>

      {/* Category Navigation Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-sm ${
              activeCategory === cat
                ? "bg-orange-500 text-white shadow-orange-500/25 scale-105"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100 hover:text-orange-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className={`group relative bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-2xl transition-all duration-500 border flex flex-col ${!item.isActive ? 'border-gray-200' : 'border-gray-100 hover:shadow-orange-500/10'}`}>
            
            {/* Image Container */}
            <div className="relative h-48 w-full rounded-[1.5rem] overflow-hidden bg-gray-100 mb-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${!item.isActive ? 'grayscale opacity-60' : ''}`} 
              />
              
              {/* Dynamic Status Badge */}
              <div className="absolute top-3 left-3">
                <span className={`backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${item.isActive ? 'bg-white/90 text-green-700' : 'bg-red-500/90 text-white'}`}>
                  {item.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Floating Action Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button onClick={() => handleOpenEdit(item)} className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75" title="Edit Item">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
                <button onClick={() => handleDelete(item.id)} className="w-10 h-10 bg-white text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100" title="Delete Item">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="px-3 pb-3 flex flex-col flex-grow">
              <span className="text-xs font-bold tracking-wider text-orange-500 uppercase mb-1">{item.category}</span>
              <h3 className={`text-lg font-bold leading-tight mb-4 line-clamp-2 ${!item.isActive ? 'text-gray-400' : 'text-gray-900'}`}>{item.name}</h3>
              
              {/* Fast Status Management Footer */}
              <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
                <span className={`text-2xl font-black ${!item.isActive ? 'text-gray-400' : 'text-gray-900'}`}>${item.price.toFixed(2)}</span>
                
                {/* Custom iOS-style Toggle Switch */}
                <button 
                  onClick={() => handleToggleStatus(item.id)}
                  title={item.isActive ? "Deactivate Item" : "Activate Item"}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    item.isActive ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span 
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      item.isActive ? 'translate-x-6' : 'translate-x-1'
                    }`} 
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- ADD / EDIT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{modalMode === "add" ? "Craft New Dish" : "Edit Dish"}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Dish Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="e.g. Truffle Fries" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                
                {/* DYNAMIC CATEGORY FIELD */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-bold text-gray-700">Category</label>
                    <button 
                      type="button" 
                      onClick={() => setShowNewCategoryInput(!showNewCategoryInput)} 
                      className="text-xs text-orange-500 hover:text-orange-600 font-bold"
                    >
                      {showNewCategoryInput ? "Choose Existing" : "+ Add New"}
                    </button>
                  </div>
                  
                  {showNewCategoryInput ? (
                    <input 
                      type="text" 
                      value={newCategoryName} 
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      required={showNewCategoryInput}
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" 
                      placeholder="e.g. Pasta" 
                    />
                  ) : (
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white">
                      {categories.filter(c => c !== "All").map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Price ($)</label>
                  <input type="number" step="0.01" name="price" required value={formData.price} onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="0.00" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Status</label>
                <select name="isActive" value={formData.isActive ? "true" : "false"} onChange={handleStatusChange} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none bg-white">
                  <option value="true">Active (Visible on Menu)</option>
                  <option value="false">Inactive (Hidden from Menu)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Dish Image</label>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden bg-gray-50 flex-shrink-0 flex items-center justify-center">
                    {formData.image ? (
                      <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    )}
                  </div>
                  
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition-all cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-colors">
                  {modalMode === "add" ? "Add to Menu" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuManagement;