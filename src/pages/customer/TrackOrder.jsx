import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChefHat,
  Clock3,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrackOrder = () => {
  const navigate = useNavigate();

  // ---------------- ORDER DATA ----------------
  const orderData =
    JSON.parse(localStorage.getItem("latestOrder")) || {};

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center px-4 py-6">
      
      {/* ---------------- MAIN CONTAINER ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md"
      >
        
        {/* ---------------- CARD ---------------- */}
        <div className="bg-white rounded-[28px] border border-gray-100 overflow-hidden">
          
          {/* ---------------- TOP ---------------- */}
          <div className="px-6 pt-7 pb-6 border-b border-gray-100">
            
            <div className="flex items-start justify-between">
              
              <div>
                <p className="text-xs font-medium text-gray-400 tracking-wide uppercase">
                  Order Status
                </p>

                <h1 className="text-3xl font-bold text-gray-900 mt-2 leading-tight">
                  Preparing your order
                </h1>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Your food is being freshly prepared by the
                  restaurant kitchen.
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                <ChefHat
                  size={28}
                  className="text-orange-500"
                />
              </div>
            </div>

            {/* ETA */}
            <div className="mt-6 bg-[#fafafa] rounded-2xl p-4 flex items-center justify-between border border-gray-100">
              
              <div>
                <p className="text-xs text-gray-400 font-medium">
                  Estimated Time
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  20-30 mins
                </h2>
              </div>

              <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                <Clock3
                  size={20}
                  className="text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* ---------------- ORDER DETAILS ---------------- */}
          <div className="px-6 py-5">
            
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Order ID
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {orderData.orderId || "#DF102938"}
                </h3>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  Total
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  ₹{orderData.total || 0}
                </h3>
              </div>
            </div>

            {/* ITEMS */}
            <div className="mt-5 border-t border-gray-100 pt-5">
              
              <p className="text-sm font-semibold text-gray-900 mb-4">
                Order Items
              </p>

              <div className="space-y-3">
                {orderData.items?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />

                      <div className="min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 truncate">
                          {item.name}
                        </h4>

                        <p className="text-xs text-gray-400 mt-1">
                          Qty {item.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---------------- PROGRESS ---------------- */}
          <div className="px-6 pb-6">
            
            <div className="bg-[#fafafa] rounded-2xl border border-gray-100 p-5">
              
              <div className="flex items-center justify-between">
                
                <div className="flex items-center gap-3">
                  
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2
                      size={18}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Order Confirmed
                    </h4>

                    <p className="text-xs text-gray-400 mt-1">
                      Restaurant accepted your order
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="text-gray-300"
                />
              </div>

              {/* LINE */}
              <div className="ml-5 my-3 h-8 border-l-2 border-dashed border-orange-200" />

              {/* PREPARING */}
              <div className="flex items-center gap-3">
                
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <ChefHat
                    size={18}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-orange-600">
                    Preparing Food
                  </h4>

                  <p className="text-xs text-gray-400 mt-1">
                    Chefs are preparing your meal
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-5 space-y-3">
              
              <button className="w-full border border-gray-200 hover:bg-gray-50 transition py-3.5 rounded-2xl font-medium text-gray-700 flex items-center justify-center gap-2">
                <Phone size={18} />
                Contact Restaurant
              </button>

              <button
                onClick={() => navigate(-4)}
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-semibold"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrackOrder;