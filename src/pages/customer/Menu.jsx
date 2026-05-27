import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import menuItems from "../../data/menuData";

function Menu() {
  const { id } = useParams(); // URL nunchi Table Number theeskuntunnam
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  const filteredMenu = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      
      {/* Header Profile / Table Info */}
      <div className="bg-white shadow-sm sticky top-0 z-10 px-5 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black text-gray-900">
            Dine<span className="text-orange-500">Flow</span>
          </h1>
          <p className="text-xs text-gray-500 font-bold mt-0.5 tracking-wide">
            TABLE <span className="text-orange-500">{id}</span>
          </p>
        </div>
        <div className="bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Waiter
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="px-5 py-4 overflow-x-auto hide-scrollbar flex gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === category 
                ? "bg-gray-900 text-white shadow-md" 
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items List */}
      <div className="px-5 mt-2 flex flex-col gap-4">
        {filteredMenu.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex gap-4">
            {/* Image */}
            <div className="w-28 h-28 shrink-0 relative">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
              <div className={`absolute top-2 left-2 w-4 h-4 bg-white rounded flex items-center justify-center p-0.5 ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'} border-2`}>
                <div className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></div>
              </div>
            </div>
            
            {/* Details */}
            <div className="flex flex-col justify-between py-1 w-full">
              <div>
                <h3 className="font-bold text-gray-900 leading-tight">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex justify-between items-end mt-2">
                <span className="font-black text-gray-900">₹{item.price}</span>
                <button className="bg-orange-50 text-orange-600 border border-orange-200 px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-orange-100 transition">
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Button (Mock) */}
      <div className="fixed bottom-6 left-0 right-0 px-5 z-20">
        <button 
          onClick={() => navigate('/cart')}
          className="w-full bg-orange-500 text-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(249,115,22,0.3)] flex justify-between items-center active:scale-95 transition-transform"
        >
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-orange-100 uppercase tracking-wider">2 Items added</span>
            <span className="font-black text-lg">₹648</span>
          </div>
          <div className="flex items-center gap-2 font-bold">
            View Cart
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </div>
        </button>
      </div>

    </div>
  );
}

export default Menu;