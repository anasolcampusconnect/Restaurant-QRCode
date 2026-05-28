import React, { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  ShoppingCart,
  Clock3,
  Flame,
  Plus,
  Minus,
} from "lucide-react";

import foodHeroImage from "../../assets/fo.png";

const Menu = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // ---------------- CART STATE ----------------
const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  const syncCart = () => {
    const storedCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  };

  // 1. initial load
  syncCart();

  // 2. when coming back to tab
  const handleFocus = () => syncCart();

  // 3. when localStorage changes (IMPORTANT for multi-tab / navigation)
  const handleStorage = () => syncCart();

  window.addEventListener("focus", handleFocus);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("focus", handleFocus);
    window.removeEventListener("storage", handleStorage);
  };
}, []);
  const categories = [
    "All",
    "Pizza",
    "Main Course",
    "Starter",
    "Beverages",
  ];

  const menuItems = [
    {
      id: 1,
      name: "Onion Pizza",
      category: "Pizza",
      price: 350,
      rating: 5.0,
      type: "Veg",
      time: "20 mins",
      spicy: "Medium",
      description:
        "Loaded with fresh onions, mozzarella cheese, and rich Italian herbs.",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    },
    {
      id: 2,
      name: "Mix Veg",
      category: "Main Course",
      price: 250,
      rating: 4.8,
      type: "Veg",
      time: "15 mins",
      spicy: "Low",
      description:
        "Fresh seasonal vegetables cooked in flavorful Indian spices.",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600",
    },
    {
      id: 3,
      name: "Chicken Tikka",
      category: "Starter",
      price: 450,
      rating: 4.9,
      type: "Non-Veg",
      time: "25 mins",
      spicy: "High",
      description:
        "Juicy grilled chicken tikka served with mint chutney and salad.",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    },
    {
      id: 4,
      name: "Cold Coffee",
      category: "Beverages",
      price: 180,
      rating: 4.7,
      type: "Veg",
      time: "5 mins",
      spicy: "None",
      description:
        "Creamy chilled coffee blended with chocolate and fresh milk.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HN8AiGNBnRRMXEzB8ONaK4QJoAW0zhJ49A&s",
    },
    {
      id: 5,
      name: "Paneer Tikka",
      category: "Starter",
      price: 320,
      rating: 4.8,
      type: "Veg",
      time: "18 mins",
      spicy: "Medium",
      description:
        "Soft paneer cubes marinated in spices and grilled to perfection.",
      img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
    },
    {
      id: 6,
      name: "Cheese Burst Pizza",
      category: "Pizza",
      price: 520,
      rating: 5.0,
      type: "Veg",
      time: "30 mins",
      spicy: "Medium",
      description:
        "Extra cheesy pizza with a crispy crust and rich tomato sauce.",
      img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600",
    },
    {
  id: 7,
  name: "Veg Burger",
  category: "Starter",
  price: 220,
  rating: 4.7,
  type: "Veg",
  time: "12 mins",
  spicy: "Low",
  description:
    "Crispy veg patty layered with cheese, lettuce, and signature sauce.",
  img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
},
{
  id: 8,
  name: "Chicken Burger",
  category: "Starter",
  price: 290,
  rating: 4.9,
  type: "Non-Veg",
  time: "15 mins",
  spicy: "Medium",
  description:
    "Juicy chicken burger with fresh veggies and creamy mayo sauce.",
  img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600",
},
{
  id: 9,
  name: "White Sauce Pasta",
  category: "Main Course",
  price: 340,
  rating: 4.8,
  type: "Veg",
  time: "20 mins",
  spicy: "Low",
  description:
    "Creamy white sauce pasta tossed with herbs and exotic vegetables.",
  img: "https://www.whiskaffair.com/wp-content/uploads/2021/05/White-Sauce-Paste-2-3.jpg",
},
{
  id: 10,
  name: "Chicken Pasta",
  category: "Main Course",
  price: 420,
  rating: 4.9,
  type: "Non-Veg",
  time: "22 mins",
  spicy: "Medium",
  description:
    "Creamy pasta loaded with tender chicken chunks and parmesan cheese.",
  img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
},
{
  id: 11,
  name: "French Fries",
  category: "Starter",
  price: 160,
  rating: 4.6,
  type: "Veg",
  time: "8 mins",
  spicy: "Low",
  description:
    "Golden crispy fries seasoned with peri peri and classic herbs.",
  img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600",
},
{
  id: 12,
  name: "Chocolate Shake",
  category: "Beverages",
  price: 210,
  rating: 4.8,
  type: "Veg",
  time: "6 mins",
  spicy: "None",
  description:
    "Rich chocolate milkshake topped with whipped cream and chocolate chips.",
  img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",
},
{
  id: 13,
  name: "Masala Dosa",
  category: "Main Course",
  price: 240,
  rating: 4.7,
  type: "Veg",
  time: "18 mins",
  spicy: "Medium",
  description:
    "Crispy dosa stuffed with flavorful potato masala and served with chutney.",
  img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
},
{
  id: 14,
  name: "Mojito",
  category: "Beverages",
  price: 190,
  rating: 4.8,
  type: "Veg",
  time: "5 mins",
  spicy: "None",
  description:
    "Refreshing mint mojito with lemon fizz and crushed ice.",
  img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600",
},
  ];

  // ---------------- FILTER ----------------
  const filteredItems = menuItems.filter((item) => {
    return (
      (activeCategory === "All" ||
        item.category === activeCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  // ---------------- ADD TO CART ----------------
  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    } else {
      updatedCart = [
        ...cartItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    }

    setCartItems(updatedCart);

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // ---------------- INCREASE QUANTITY ----------------
  const increaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // ---------------- DECREASE QUANTITY ----------------
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

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // ---------------- GET ITEM QUANTITY ----------------
  const getItemQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  // ---------------- TOTAL CART COUNT ----------------
  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white pb-28">
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={foodHeroImage}
          alt="Hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        <div className="absolute inset-0 flex items-center px-5 md:px-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-orange-500/20 text-orange-200 border border-orange-300/20 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                Welcome to DineFlow
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mt-5 leading-tight">
                Exquisite{" "}
                <span className="text-orange-500">Taste.</span>
              </h1>

              <p className="text-white/90 mt-5 text-sm sm:text-base md:text-xl leading-relaxed max-w-xl">
                Quality service and unforgettable flavors crafted
                with passion. Enjoy premium dining experience at
                table {id}.
              </p>

              <div className="flex gap-4 mt-7 flex-wrap">
                <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg">
                  Explore Menu
                </button>

                <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition px-6 py-3 rounded-xl text-white font-semibold">
                  Popular Dishes
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------------- SEARCH + FILTER ---------------- */}
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search your favorite food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto w-full lg:w-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    
{/* ---------------- RECOMMENDED FOR YOU ---------------- */}
{activeCategory === "All" && (
  <div className="mt-4">
    
    {/* HEADING */}
    <div className="mb-5">
      <h2 className="text-2xl md:text-3xl font-black text-gray-800 ml-2">
        Recommended For You
      </h2>

      <p className="text-gray-500 mt-1 text-sm ml-2">
        Handpicked dishes customers love the most.
      </p>
    </div>

    {/* SCROLLABLE 2 ROW LAYOUT */}
    <div className="overflow-x-auto scrollbar-hide">
      
      {/* GAP REDUCED */}
      <div className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-2 w-max pb-2">
        
        {[
          {
            id: 1,
            name: "Veg Pizza",
            type: "Veg",
            rating: "4.9",
            img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
          },
          {
            id: 2,
            name: "Chicken Wings",
            type: "Non-Veg",
            rating: "4.8",
            img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300",
          },
          {
            id: 3,
            name: "Pasta",
            type: "Veg",
            rating: "4.7",
            img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300",
          },
          {
            id: 4,
            name: "Cold Coffee",
            type: "Veg",
            rating: "4.6",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HN8AiGNBnRRMXEzB8ONaK4QJoAW0zhJ49A&s",
          },
          {
            id: 5,
            name: "Chicken Burger",
            type: "Non-Veg",
            rating: "4.8",
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
          },
          {
            id: 6,
            name: "Paneer Tikka",
            type: "Veg",
            rating: "4.9",
            img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300",
          },
          {
            id: 7,
            name: "Aaloo Paratha",
            type: "Veg",
            rating: "4.9",
            img: "https://static.toiimg.com/photo/53109843.cms",
          },
          {
            id: 8,
            name: "Matar Paneer",
            type: "Veg",
            rating: "4.8",
            img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg",
          },
           {
            id: 9,
            name: "Chicken shawarma",
            type: "Non-Veg",
            rating: "4.5",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRF1-4-dHmT2S4dWu2S1tH1Pjd6l-9TGOTw&s",
          }, {
            id: 10,
            name: "Litti Chokha",
            type: "Veg",
            rating: "4.8",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMCSGMKnU-zfMbGeIdYwtuTBhG8NELe7xSg&s",
          }, {
            id: 11,
            name: "Rogan Josh",
            type: "Non-Veg",
            rating: "4.9",
            img: "https://static.toiimg.com/thumb/53192600.cms?width=1200&height=900",
          }, {
            id: 12,
            name: "Dum Aloo",
            type: "Veg",
            rating: "4.7",
            img: "https://sinfullyspicy.com/wp-content/uploads/2024/01/1200-by-1200-images-3.jpg",
          },
        ].map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -2 }}
            className="w-[120px] bg-white border border-gray-100 rounded-3xl p-1 shadow-sm hover:shadow-md transition-all duration-300"
          >
            
            {/* IMAGE */}
            <div className="relative">
              
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-20 rounded-2xl object-cover"
              />

              {/* TYPE BADGE */}
              <div
                className={`absolute top-2 left-2 text-[9px] px-2 py-0.5 rounded-full font-bold ${
                  item.type === "Veg"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.type}
              </div>
            </div>

            {/* NAME */}
            <h3 className="text-sm font-bold text-gray-800 mt-2 leading-tight line-clamp-2">
              {item.name}
            </h3>

            {/* RATING */}
            <div className="flex items-center gap-1 mt-1">
              <Star
                size={12}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="text-xs font-semibold text-gray-600">
                {item.rating}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)}
  {/* ---------------- MENU SECTION ---------------- */}
<div className="max-w-7xl mx-auto px-4 py-10">
  
  {/* ---------------- DYNAMIC HEADINGS ---------------- */}
  {(() => {
    let heading = "Our Special Menu";
    let subheading =
      "Discover freshly prepared dishes made with love.";

    if (activeCategory === "Pizza") {
      heading = "Hot & Cheesy Pizzas";
      subheading =
        "Freshly baked pizzas loaded with premium toppings.";
    }

    if (activeCategory === "Main Course") {
      heading = "Delicious Main Course";
      subheading =
        "Wholesome meals crafted with rich flavors and spices.";
    }

    if (activeCategory === "Starter") {
      heading = "Tasty Starters";
      subheading =
        "Perfect bites to begin your dining experience.";
    }

    if (activeCategory === "Beverages") {
      heading = "Refreshing Beverages";
      subheading =
        "Cool drinks and refreshing beverages for every mood.";
    }

    return (
      <div className="flex items-center justify-between mb-8">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            {heading}
          </h2>

          <p className="text-gray-500 mt-2">
            {subheading}
          </p>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-xl">
          <ShoppingCart
            size={18}
            className="text-orange-500"
          />

          <span className="font-semibold text-orange-700">
            {filteredItems.length} Items
          </span>
        </div>
      </div>
    );
  })()}
        {/* ---------------- CARDS ---------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
  {filteredItems.map((item, index) => {
    const quantity = getItemQuantity(item.id);

    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        whileHover={{ y: -5 }}
        className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300"
      >
        {/* ---------------- IMAGE ---------------- */}
        <div className="relative overflow-hidden">
          
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          {/* VEG/NONVEG */}
          <div
            className={`absolute top-3 left-3 text-[11px] px-3 py-1 rounded-full font-semibold backdrop-blur-md shadow-sm ${
              item.type === "Veg"
                ? "bg-green-100/95 text-green-700"
                : "bg-red-100/95 text-red-700"
            }`}
          >
            {item.type}
          </div>

          {/* RATING */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Star
              size={13}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-xs font-bold text-gray-800">
              {item.rating}
            </span>
          </div>

          {/* PRICE ON IMAGE */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
            <span className="text-sm font-black text-orange-600">
              ₹{item.price}
            </span>
          </div>
        </div>

        {/* ---------------- CONTENT ---------------- */}
        <div className="p-4">
          
          {/* TITLE */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[18px] font-bold text-gray-800 leading-tight">
                {item.name}
              </h3>

              <p className="text-xs text-orange-500 font-semibold mt-1 tracking-wide uppercase">
                {item.category}
              </p>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[13px] text-gray-500 leading-relaxed mt-3 line-clamp-2">
            {item.description}
          </p>

          {/* INFO */}
          <div className="flex items-center gap-4 mt-4 text-[13px] text-gray-500">
            
            <div className="flex items-center gap-1.5">
              <Clock3 size={14} />
             <span className="text-green-600 font-semibold">
  {item.time}
</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame size={14} />
              <span>{item.spicy}</span>
            </div>
          </div>

          {/* ---------------- BUTTONS ---------------- */}
          <div className="mt-5">
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(item)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold transition-all shadow-md hover:shadow-orange-200 flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingCart size={17} />
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center justify-between bg-orange-50 border border-orange-100 rounded-2xl p-1.5">
                
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm hover:bg-orange-100 transition"
                >
                  <Minus size={16} />
                </button>

                <span className="text-base font-bold text-orange-600">
                  {quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-sm hover:bg-orange-600 transition"
                >
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  })}
</div>
        {/* ---------------- EMPTY STATE ---------------- */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700">
              No food found 🍽️
            </h3>

            <p className="text-gray-500 mt-2">
              Try searching something else.
            </p>
          </div>
        )}
      </div>

      {/* ---------------- FLOATING CART BUTTON ---------------- */}
      {totalCartCount > 0 && (
        <motion.button
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          onClick={() => navigate("/cart")}
          className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
        >
          <div className="relative">
            <ShoppingCart size={22} />

            <span className="absolute -top-2 -right-2 bg-white text-orange-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          </div>

          <span className="font-semibold hidden sm:block">
            View Cart
          </span>
        </motion.button>
      )}
    </div>
  );
};

export default Menu;