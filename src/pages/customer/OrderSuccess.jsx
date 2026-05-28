import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ShoppingBag,
  MapPinned,
  MessageSquareText,
  Star,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  // ---------------- GET ORDER ----------------
  const orderData =
    JSON.parse(localStorage.getItem("latestOrder")) || {};

  // ---------------- FEEDBACK STATES ----------------
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ---------------- SUBMIT FEEDBACK ----------------
  const handleSubmit = () => {
    if (!rating && feedback.trim() === "") return;

    setSubmitted(true);

    // AUTO CLOSE AFTER 2 SEC
    setTimeout(() => {
      setOpenModal(false);
      setSubmitted(false);
      setRating(0);
      setFeedback("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4 py-6">
      
      {/* ---------------- CARD ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden"
      >
        
        {/* ---------------- SUCCESS ICON ---------------- */}
        <div className="pt-10 px-6 text-center">
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
            }}
            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto"
          >
            <CheckCircle2
              size={54}
              className="text-green-500"
            />
          </motion.div>

          {/* TITLE */}
          <h1 className="text-3xl font-black text-gray-800 mt-6">
            Order Placed
          </h1>

          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Your order has been sent to the restaurant
            kitchen successfully.
          </p>
        </div>

        {/* ---------------- ORDER BOX ---------------- */}
        <div className="px-5 mt-8">
          
          <div className="bg-[#fafafa] border border-gray-100 rounded-3xl p-5">
            
            {/* ORDER ID */}
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-xs text-gray-400">
                  ORDER ID
                </p>

                <h2 className="text-xl font-black text-gray-800 mt-1">
                  {orderData.orderId || "#DF102938"}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center">
                <ShoppingBag
                  size={22}
                  className="text-white"
                />
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-dashed border-gray-200 my-5" />

            {/* TOTAL */}
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-xs text-gray-400">
                  TOTAL AMOUNT
                </p>

                <h3 className="text-3xl font-black text-orange-600 mt-1">
                  ₹{orderData.total || 0}
                </h3>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400">
                  ITEMS
                </p>

                <h3 className="text-2xl font-black text-gray-800 mt-1">
                  {orderData.items?.length || 0}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- PREPARING ---------------- */}
        <div className="px-5 mt-5">
          
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-4 flex items-center gap-3">
            
            <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center">
              <Clock3
                size={22}
                className="text-white"
              />
            </div>

            <div>
              <h3 className="font-bold text-orange-700">
                Preparing Your Order
              </h3>

              <p className="text-xs text-orange-600 mt-1">
                Estimated time : 20-30 mins
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- BUTTONS ---------------- */}
        <div className="p-5 space-y-3">
          
          {/* TRACK + FEEDBACK */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* TRACK ORDER */}
            <button
              onClick={() => navigate("/track-order")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-orange-100"
            >
              <MapPinned size={20} />
              Track Order
            </button>

            {/* FEEDBACK */}
            <button
              onClick={() => setOpenModal(true)}
              className="border border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-600 py-4 rounded-2xl font-bold transition flex items-center justify-center gap-2"
            >
              <MessageSquareText size={20} />
              Feedback
            </button>
          </div>

          {/* BACK */}
          <button
            onClick={() => navigate(-3)}
            className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 py-4 rounded-2xl font-semibold transition"
          >
            Back to Menu
          </button>
        </div>
      </motion.div>

      {/* ---------------- FEEDBACK MODAL ---------------- */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-white rounded-[30px] p-6 relative"
            >
              
              {/* CLOSE */}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <X size={22} />
              </button>

              {!submitted ? (
                <>
                  {/* TITLE */}
                  <h2 className="text-2xl font-black text-gray-800 text-center">
                    Give Feedback
                  </h2>

                  <p className="text-sm text-gray-500 text-center mt-2">
                    Tell us about your experience
                  </p>

                  {/* STARS */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                      >
                        <Star
                          size={34}
                          className={`transition ${
                            rating >= star
                              ? "fill-orange-400 text-orange-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* TEXTAREA */}
                  <textarea
                    rows="5"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write your feedback here..."
                    className="w-full mt-6 border border-gray-200 rounded-2xl p-4 outline-none focus:border-orange-400 resize-none"
                  />

                  {/* SUBMIT */}
                  <button
                    onClick={handleSubmit}
                    className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition"
                  >
                    Submit Feedback
                  </button>
                </>
              ) : (
                <div className="py-8 text-center">
                  
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <CheckCircle2
                      size={46}
                      className="text-green-500"
                    />
                  </div>

                  <h2 className="text-2xl font-black text-gray-800 mt-5">
                    Thank You!
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    Your feedback has been submitted successfully.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderSuccess;