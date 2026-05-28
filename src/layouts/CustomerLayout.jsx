import { Outlet, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Sparkles,
} from "lucide-react";

function CustomerLayout() {
  const location = useLocation();
const { id } = useParams();
  const hideNavbar =
    location.pathname === "/cart" ||
    location.pathname === "/checkout";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white text-gray-800">

      {/* ---------------- NAVBAR ---------------- */}
      {!hideNavbar && (
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between">
            
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center shadow-md shadow-orange-100">
                <Sparkles className="text-white" size={19} />
              </div>

              <div>
                <h1 className="font-black text-[20px] md:text-2xl tracking-tight text-gray-800 leading-none">
                  DineFlow
                </h1>

                <p className="text-[11px] text-gray-400 mt-1 hidden sm:block">
                  Smart Restaurant Ordering
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 sm:px-4 py-2 rounded-2xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                <div className="flex flex-col leading-none">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                    Dining At
                  </span>

                  <span className="text-sm sm:text-[15px] font-bold text-orange-600">
                    Table {id}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.nav>
      )}

      {/* MAIN */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default CustomerLayout;