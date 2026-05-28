import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Wallet,
  BadgeCheck,
  Clock3,
  ShoppingBag,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  // ---------------- STATES ----------------
  const [cartItems, setCartItems] = useState([]);
  const [selectedPayment, setSelectedPayment] =
    useState("counter");

  // ---------------- LOAD CART ----------------
  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    setCartItems(storedCart);
  }, []);

  // ---------------- CALCULATIONS ----------------
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const gst = Math.floor(subtotal * 0.05);

  const total = subtotal + gst;

  // ---------------- PLACE ORDER ----------------
  const handlePlaceOrder = () => {
    // SAVE ORDER DATA
    localStorage.setItem(
      "latestOrder",
      JSON.stringify({
        items: cartItems,
        total,
        paymentMethod: selectedPayment,
      })
    );

    // CLEAR CART
    localStorage.removeItem("cartItems");

    // GO SUCCESS PAGE
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] pb-24">
      {/* ---------------- HEADER ---------------- */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          
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
              Checkout
            </h1>

            <p className="text-xs text-gray-500">
              Complete your restaurant order
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- MAIN ---------------- */}
      <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* ---------------- LEFT ---------------- */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* ---------------- ORDER SUMMARY ---------------- */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            
            <div className="flex items-center gap-2">
              <ShoppingBag
                size={20}
                className="text-orange-500"
              />

              <h2 className="text-xl font-black text-gray-800">
                Order Summary
              </h2>
            </div>

            {/* ITEMS */}
            <div className="mt-5 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3"
                >
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />

                  {/* DETAILS */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 truncate">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Quantity : {item.quantity}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="text-right">
                    <p className="font-bold text-orange-600">
                      ₹
                      {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- PAYMENT METHODS ---------------- */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            
            <h2 className="text-xl font-black text-gray-800">
              Select Payment Method
            </h2>

            <div className="mt-5 space-y-4">
              
              {/* ---------------- PAY AT COUNTER ---------------- */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setSelectedPayment("counter")
                }
                className={`w-full border rounded-3xl p-4 flex items-center justify-between transition ${
                  selectedPayment === "counter"
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      selectedPayment === "counter"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Wallet size={24} />
                  </div>

                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">
                      Pay at Counter
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Pay directly at the billing counter
                    </p>
                  </div>
                </div>

                {selectedPayment === "counter" && (
                  <BadgeCheck className="text-orange-500" />
                )}
              </motion.button>

              {/* ---------------- ONLINE PAYMENT ---------------- */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setSelectedPayment("online")
                }
                className={`w-full border rounded-3xl p-4 flex items-center justify-between transition ${
                  selectedPayment === "online"
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      selectedPayment === "online"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <CreditCard size={24} />
                  </div>

                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">
                      Pay Online
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Pay securely using UPI or cards
                    </p>
                  </div>
                </div>

                {selectedPayment === "online" && (
                  <BadgeCheck className="text-orange-500" />
                )}
              </motion.button>
            </div>

           
          </div>
        </div>

        {/* ---------------- RIGHT ---------------- */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
            
            {/* TITLE */}
            <h2 className="text-xl font-black text-gray-800">
              Bill Details
            </h2>

            {/* BILL */}
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
                  Total Amount
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

            {/* BUTTON */}
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition shadow-lg shadow-orange-100 flex items-center justify-center gap-2"
            >
              {selectedPayment === "counter" ? (
                <>
                  <Wallet size={20} />
                  Confirm Order
                </>
              ) : (
                <>
                  <CheckCircle2 size={20} />
                  I Have Paid ₹{total}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;