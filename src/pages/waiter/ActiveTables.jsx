import React, { useState } from "react";
import {
  FaUtensils,
  FaClipboardList,
  FaMoneyBillWave,
  FaBell,
  FaConciergeBell,
  FaClock,
  FaSmile,
  FaReceipt,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

const WaiterDashboard = () => {

  const [popup, setPopup] = useState(null);

  const openPopup = (title, desc, image) => {
    setPopup({ title, desc, image });
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <div className="bg-[#f8f5ef] min-h-screen w-full overflow-x-hidden">

      {/* ================= SERVICES SECTION ================= */}

      <section className="py-12 px-5 md:px-8 bg-[#f8f5ef]">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[4px] text-[#ff6b00] font-semibold text-[11px]">
            Waiter Features
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mt-3">
            Smart Restaurant Services
          </h2>

          <div className="w-16 h-1 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-7">
            Simplify restaurant operations with real-time table management,
            billing automation, and customer tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            {
              icon: <FaUtensils />,
              title: "Table Orders",
              text: "Handle live orders efficiently and track food preparation.",
            },
            {
              icon: <FaClipboardList />,
              title: "Active Tables",
              text: "Monitor reserved, occupied, and available tables instantly.",
            },
            {
              icon: <FaMoneyBillWave />,
              title: "Smart Billing",
              text: "Generate accurate customer bills with seamless payments.",
            },
            {
              icon: <FaBell />,
              title: "Live Alerts",
              text: "Receive instant notifications for kitchen updates.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[22px] p-5 text-center shadow-md hover:-translate-y-1 transition-all duration-500 border border-orange-100"
            >

              <div className="w-14 h-14 rounded-full bg-[#fff2e8] flex items-center justify-center mx-auto text-[#ff6b00] text-xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-[#1f2937] mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-6 text-sm">
                {item.text}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* ================= ACTIVE TABLES SECTION ================= */}

      <section className="bg-white py-12 px-5 md:px-8 relative overflow-hidden">

        <div className="text-center mb-12 relative z-10">

          <p className="uppercase tracking-[4px] text-[#ff6b00] font-semibold text-[11px]">
            Restaurant Tables
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mt-3">
            Active Dining Tables
          </h2>

          <div className="w-16 h-1 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-7">
            Manage customer seating, reservations, and live order tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              table: "Table 01",
              title: "VIP Dining",
              image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
              desc:
                "Premium customer seating with personalized waiter support.",
              button: "View Orders",
            },
            {
              table: "Table 08",
              title: "Family Corner",
              image:
                "https://images.unsplash.com/photo-1552566626-52f8b828add9",
              desc:
                "Spacious seating arrangement with smooth order tracking.",
              button: "Track Table",
            },
            {
              table: "Table 12",
              title: "Business Lounge",
              image:
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
              desc:
                "Executive seating with premium dining and billing support.",
              button: "Open Details",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-[#fffdf9] rounded-[24px] p-5 shadow-md border border-orange-100 hover:-translate-y-1 transition-all duration-500"
            >

              <div className="relative flex justify-center mb-6">

                <div className="w-36 h-36 rounded-full border-[6px] border-orange-100 overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="absolute bottom-1 right-8 bg-white shadow-sm px-4 py-1 rounded-full font-bold text-xs text-[#1f2937]">
                  {item.table}
                </div>
              </div>

              <div className="text-center">

                <h3 className="text-xl font-bold text-[#1f2937]">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-6 mt-3 text-sm">
                  {item.desc}
                </p>

                <button
                  onClick={() =>
                    openPopup(item.title, item.desc, item.image)
                  }
                  className="mt-5 bg-[#ff6b00] hover:bg-[#e45f00] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
                >
                  {item.button} →
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SLIDER SECTION ================= */}

      <section className="bg-[#f8f5ef] py-12 overflow-hidden">

        <div className="text-center mb-10">

          <p className="uppercase tracking-[4px] text-[#ff6b00] font-semibold text-[11px]">
            Waiter Workflow
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mt-3">
            Smart Waiter Operations
          </h2>

          <div className="w-16 h-1 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative w-full overflow-x-hidden">

          <div className="flex animate-marquee gap-4 w-max">

            {[
              {
                icon: <FaUtensils />,
                title: "Instant Orders",
                text: "Receive and update food orders instantly.",
              },
              {
                icon: <FaMoneyBillWave />,
                title: "Smart Billing",
                text: "Generate bills quickly with payment tracking.",
              },
              {
                icon: <FaSmile />,
                title: "Customer Care",
                text: "Improve customer satisfaction with instant support.",
              },
              {
                icon: <FaConciergeBell />,
                title: "Fast Service",
                text: "Deliver meals faster with smooth coordination.",
              },
              {
                icon: <FaClock />,
                title: "Live Tracking",
                text: "Track kitchen progress and serving status live.",
              },
              {
                icon: <FaReceipt />,
                title: "Quick Receipts",
                text: "Print accurate customer receipts instantly.",
              },
              {
                icon: <FaUtensils />,
                title: "Instant Orders",
                text: "Receive and update food orders instantly.",
              },
              {
                icon: <FaMoneyBillWave />,
                title: "Smart Billing",
                text: "Generate bills quickly with payment tracking.",
              },
            ].map((item, index) => (
              <div key={index} className="workflow-card">

                <div className="icon-box">
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PREMIUM IMAGE SECTION ================= */}

      <section className="bg-[#fffaf5] py-16 px-6 md:px-10">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#ff6b00] font-semibold text-[11px]">
            Restaurant Experience
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mt-3">
            Why Restaurants Choose DineFlow
          </h2>

          <div className="w-16 h-1 bg-[#ff6b00] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-7">
            Enhance customer satisfaction with smart waiter operations,
            premium dining experiences, and real-time restaurant management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {[
            {
              title: "Fast Table Service",
              tag: "Live",
              image:
                "https://images.unsplash.com/photo-1559339352-11d035aa65de",
              desc:
                "Deliver meals quickly with smart waiter coordination and instant updates.",
              button: "Explore",
            },
            {
              title: "Smart Dining",
              tag: "Premium",
              image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
              desc:
                "Create memorable dining experiences with personalized waiter support.",
              button: "View Details",
            },
            {
              title: "Billing Automation",
              tag: "Smart",
              image:
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
              desc:
                "Simplify restaurant payments with accurate billing and seamless transactions.",
              button: "Learn More",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[28px] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 transition duration-500"
            >

              <div className="overflow-hidden h-[240px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-[#1f2937]">
                    {item.title}
                  </h3>

                  <span className="bg-[#fff2e8] text-[#ff6b00] text-xs font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <p className="text-gray-500 mt-4 leading-7 text-sm">
                  {item.desc}
                </p>

                <button
                  onClick={() =>
                    openPopup(item.title, item.desc, item.image)
                  }
                  className="mt-6 bg-[#ff6b00] hover:bg-[#e45f00] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
                >
                  {item.button} →
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}

      {popup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">

          <div className="bg-white max-w-2xl w-full rounded-[30px] overflow-hidden shadow-2xl animate-popup relative">

            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-[#ff6b00] text-lg z-10"
            >
              <FaTimes />
            </button>

            <div className="h-[280px] overflow-hidden">
              <img
                src={popup.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-12 h-12 rounded-full bg-[#fff2e8] flex items-center justify-center text-[#ff6b00]">
                  <FaCheckCircle />
                </div>

                <h2 className="text-3xl font-extrabold text-[#1f2937]">
                  {popup.title}
                </h2>
              </div>

              <p className="text-gray-600 leading-8 text-[15px]">
                {popup.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-[#fff7f1] p-5 rounded-2xl">
                  <h4 className="font-bold text-[#1f2937]">
                    Real-Time Monitoring
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Live restaurant updates and instant waiter tracking.
                  </p>
                </div>

                <div className="bg-[#fff7f1] p-5 rounded-2xl">
                  <h4 className="font-bold text-[#1f2937]">
                    Premium Experience
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Deliver smooth dining experiences with smart service.
                  </p>
                </div>

              </div>

              <button
                onClick={closePopup}
                className="mt-8 w-full bg-[#ff6b00] hover:bg-[#e45f00] text-white py-3 rounded-2xl font-semibold transition"
              >
                Close Window
              </button>

            </div>
          </div>
        </div>
      )}

      {/* ================= CUSTOM CSS ================= */}

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes popup {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-popup {
            animation: popup 0.35s ease;
          }

          .animate-marquee {
  animation: marquee 24s linear infinite;
  width: max-content;
  will-change: transform;
}

          .workflow-card {
            min-width: 300px;
            background: white;
            border-radius: 20px;
            padding: 18px 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            box-shadow: 0 8px 18px rgba(0,0,0,0.06);
            border: 1px solid #fed7aa;
            transition: 0.3s ease;
          }

          .workflow-card:hover {
            transform: translateY(-5px);
          }

          .workflow-card h3 {
            font-size: 18px;
            font-weight: 700;
            color: #1f2937;
          }

          .workflow-card p {
            margin-top: 4px;
            color: #6b7280;
            font-size: 13px;
            line-height: 1.5;
          }

          .icon-box {
  min-width: 56px;
  height: 56px;
  border-radius: 9999px;
  background: #ff6b00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 6px 16px rgba(255,107,0,0.25);
}

/* ADD THIS HERE */
body {
  overflow-x: hidden;
}

html {
  overflow-x: hidden;
}
`}
</style>
    </div>
  );
};

export default WaiterDashboard;