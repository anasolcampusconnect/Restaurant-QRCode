import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Clock3,
  CreditCard,
  ShoppingCart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  // ---------------- CART STATE ----------------
  const [cartItems, setCartItems] = useState([]);

  // ---------------- LOAD CART ----------------
  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    setCartItems(storedCart);
  }, []);

  // ---------------- UPDATE CART ----------------
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);

    // SAVE IN LOCAL STORAGE
    localStorage.setItem(
      "cartItems",
      JSON.stringify(updatedCart)
    );

    // FORCE STORAGE UPDATE
    window.dispatchEvent(new Event("storage"));
  };

  // ---------------- INCREASE ----------------
  const increaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    updateCart(updatedCart);
  };

  // ---------------- DECREASE ----------------
  const decreaseQty = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  // ---------------- REMOVE ITEM ----------------
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    updateCart(updatedCart);
  };

  // ---------------- CALCULATIONS ----------------
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Restaurant dine-in app so no delivery fee
  const gst = Math.floor(subtotal * 0.05);

  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-[#f6f6f6] pb-32">
      {/* ---------------- HEADER ---------------- */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          
          {/* TOP */}
          <div className="flex items-center justify-between">
            
            {/* LEFT */}
            <div className="flex items-center gap-3">
              
              {/* BACK */}
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </button>

              {/* TITLE */}
              <div>
                <h1 className="text-xl font-black text-gray-800">
                  My Cart
                </h1>

                <p className="text-xs text-gray-500">
                  {cartItems.length} items added
                </p>
              </div>
            </div>

            {/* ICON */}
            <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-200">
              <ShoppingBag
                size={20}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- MAIN ---------------- */}
      <div className="max-w-6xl mx-auto px-3 md:px-5 py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="lg:col-span-2 space-y-4">
          
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl p-3 border border-gray-100 shadow-sm"
              >
                {/* CARD */}
                <div className="flex gap-3">
                  
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover"
                    />

                    {/* VEG/NON VEG */}
                    <div
                      className={`absolute top-2 left-2 text-[10px] px-2 py-1 rounded-full font-bold ${
                        item.type === "Veg"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.type}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 min-w-0">
                    
                    {/* TOP */}
                    <div className="flex items-start justify-between gap-3">
                      
                      <div className="min-w-0">
                        <h2 className="font-bold text-gray-800 text-base sm:text-lg truncate">
                          {item.name}
                        </h2>

                        <p className="text-xs text-orange-500 font-medium mt-1">
                          {item.category}
                        </p>
                      </div>

                      {/* DELETE */}
                      <button
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="text-red-500 mt-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* BOTTOM */}
                    <div className="flex items-end justify-between mt-4 gap-3">
                      
                      {/* PRICE */}
                      <div>
                        <h3 className="text-2xl font-black text-orange-600">
                          ₹{item.price * item.quantity}
                        </h3>

                        <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-1">
                          <Clock3 size={12} />
                          Ready in {item.time}
                        </div>
                      </div>

                      {/* QTY */}
                      <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 px-2 py-1.5 rounded-2xl">
                        <button
                          onClick={() =>
                            decreaseQty(item.id)
                          }
                          className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="text-sm font-bold text-orange-600 w-5 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQty(item.id)
                          }
                          className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            /* ---------------- EMPTY ---------------- */
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mx-auto">
                <ShoppingCart
                  size={34}
                  className="text-orange-500"
                />
              </div>

              <h2 className="text-2xl font-black text-gray-800 mt-5">
                Your Cart is Empty
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Add delicious dishes from the menu.
              </p>

              <button
                onClick={() => navigate(-1)}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-2xl font-semibold transition"
              >
                Browse Menu
              </button>
            </div>
          )}
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        {cartItems.length > 0 && (
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
              
              {/* TITLE */}
              <div className="flex items-center gap-2">
                <ShoppingBag
                  size={20}
                  className="text-orange-500"
                />

                <h2 className="text-xl font-black text-gray-800">
                  Bill Details
                </h2>
              </div>

              {/* DETAILS */}
              <div className="mt-6 space-y-4">
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Item Total
                  </span>

                  <span className="font-semibold text-gray-800">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    GST & Charges
                  </span>

                  <span className="font-semibold text-gray-800">
                    ₹{gst}
                  </span>
                </div>

                <div className="border-t border-dashed pt-4 flex items-center justify-between">
                  <span className="font-bold text-gray-800">
                    To Pay
                  </span>

                  <span className="text-3xl font-black text-orange-600">
                    ₹{total}
                  </span>
                </div>
              </div>

              {/* READY INFO */}
              <div className="mt-5 bg-orange-50 border border-orange-100 rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <Clock3
                    size={16}
                    className="text-orange-500"
                  />

                  <span className="text-sm font-semibold text-orange-700">
                    Order will be prepared in 20-30 mins
                  </span>
                </div>
              </div>

            {/* CHECKOUT */}
<button
  onClick={() => navigate("/checkout")}
  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-orange-100"
>
  <CreditCard size={20} />
  Place Order
</button>

              {/* CONTINUE */}
              <button
                onClick={() => navigate(-1)}
                className="w-full mt-3 border border-gray-200 py-3.5 rounded-2xl font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Add More Items
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;