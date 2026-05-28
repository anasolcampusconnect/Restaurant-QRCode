import React, { useState } from "react";

export default function WaiterDashboard() {

  const [showOrdersPopup, setShowOrdersPopup] = useState(false);
  const [showBillPopup, setShowBillPopup] = useState(false);
  const [showResponsePopup, setShowResponsePopup] = useState(false);
  const [cartPopup, setCartPopup] = useState(false);
const [selectedFood, setSelectedFood] = useState("");

  const tables = [
    {
      id: 1,
      customers: 4,
      status: "Occupied",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      customers: 2,
      status: "Reserved",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      customers: 5,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const orders = [
    {
      id: 101,
      food: "Grilled Chicken",
      table: 4,
      quantity: 2,
      status: "Preparing",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 102,
      food: "Italian Pizza",
      table: 7,
      quantity: 1,
      status: "Ready",
      price: "$32",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 103,
      food: "Burger Combo",
      table: 2,
      quantity: 3,
      status: "Served",
      price: "$28",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const requests = [
    "Table 4 requesting water",
    "Table 8 requesting bill",
    "Table 2 needs assistance",
  ];

  const statusColor = (status) => {
    if (status === "Preparing")
      return "bg-orange-100 text-orange-700";

    if (status === "Ready")
      return "bg-blue-100 text-blue-700";

    if (status === "Served")
      return "bg-green-100 text-green-700";

    if (status === "Occupied")
      return "bg-red-100 text-red-700";

    if (status === "Reserved")
      return "bg-yellow-100 text-yellow-700";

    return "bg-green-100 text-green-700";
  };

  const handleAddToOrder = (foodName) => {
  setSelectedFood(foodName);
  setCartPopup(true);
};

  return (
    <div className="min-h-screen bg-[#F8F5F0] overflow-x-hidden relative">
      

      {/* ORDERS POPUP */}
      {showOrdersPopup && (

        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">

          <div className="bg-white w-full max-w-3xl shadow-2xl overflow-hidden">

            {/* HEADER */}
            <div className="bg-orange-500 px-5 py-4 flex items-center justify-between">

              <h2 className="text-2xl font-black text-white">
                Active Orders
              </h2>

              <button
                onClick={() => setShowOrdersPopup(false)}
                className="text-white text-3xl font-bold"
              >
                ×
              </button>

            </div>

            {/* CONTENT */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[65vh] overflow-y-auto">

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="bg-white border border-gray-200 shadow-lg overflow-hidden"
                >

                  <img
                    src={order.image}
                    alt={order.food}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">

                    <div className="flex justify-between items-center">

                      <h3 className="text-xl font-black text-black">
                        {order.food}
                      </h3>

                      <span
                        className={`px-2 py-1 text-xs font-semibold ${statusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>

                    </div>

                    <div className="mt-4 text-sm text-gray-600 space-y-1">

                      <p>Table Number: {order.table}</p>
                      <p>Quantity: {order.quantity}</p>
                      <p>Price: {order.price}</p>
                      <p>Order ID: #{order.id}</p>

                    </div>

                    <div className="flex gap-2 mt-5">

                      <button className="flex-1 bg-orange-500 text-white py-2 text-sm font-semibold hover:bg-orange-600 transition-all duration-300">
                        Accept
                      </button>

                      <button className="flex-1 bg-black text-white py-2 text-sm font-semibold hover:bg-gray-800 transition-all duration-300">
                        Complete
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BILL POPUP */}
      {showBillPopup && (

        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">

          <div className="bg-white w-full max-w-md shadow-2xl p-8 relative">

            <button
              onClick={() => setShowBillPopup(false)}
              className="absolute top-3 right-4 text-3xl font-bold text-gray-600"
            >
              ×
            </button>

            <div className="text-center">

              <div className="text-6xl mb-4">
                💳
              </div>

              <h2 className="text-3xl font-black text-black mb-3">
                Bill Generated
              </h2>

              <p className="text-gray-500 text-sm leading-6">
                Total bill for Table 4 has been successfully generated.
              </p>

              <div className="bg-orange-50 mt-6 p-5 border border-orange-200">

                <div className="flex justify-between mb-3">
                  <span className="font-semibold">Food Charges</span>
                  <span>$95</span>
                </div>

                <div className="flex justify-between mb-3">
                  <span className="font-semibold">GST</span>
                  <span>$12</span>
                </div>

                <div className="flex justify-between text-xl font-black text-orange-500 mt-4">
                  <span>Total</span>
                  <span>$107</span>
                </div>

              </div>

              <button
                onClick={() => setShowBillPopup(false)}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-bold transition-all duration-300"
              >
                Print Bill
              </button>

            </div>
          </div>
        </div>
      )}

      {/* RESPONSE POPUP */}
      {showResponsePopup && (

        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">

          <div className="bg-white w-full max-w-md shadow-2xl p-8 text-center relative">

            <button
              onClick={() => setShowResponsePopup(false)}
              className="absolute top-3 right-4 text-3xl font-bold text-gray-600"
            >
              ×
            </button>

            <div className="text-6xl mb-4">
              🔔
            </div>

            <h2 className="text-3xl font-black text-black mb-3">
              Assistance Sent
            </h2>

            <p className="text-gray-500 leading-6 text-sm">
              A waiter has been assigned and is heading to the customer table.
            </p>

            <div className="mt-6 bg-green-50 border border-green-200 p-4">

              <p className="text-green-700 font-semibold">
                Response Time: 2 Minutes
              </p>

            </div>

            <button
              onClick={() => setShowResponsePopup(false)}
              className="mt-6 bg-black hover:bg-orange-500 text-white px-8 py-3 font-bold transition-all duration-300"
            >
              Done
            </button>

          </div>
        </div>
      )}

      {/* ADD TO ORDER POPUP */}
{cartPopup && (
  <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center lg:justify-end overflow-x-hidden overflow-y-auto p-2 sm:p-4 lg:pr-10">

   <div className="bg-white w-full max-w-[95vw] lg:max-w-4xl shadow-2xl overflow-hidden rounded-lg relative lg:mr-8">

      {/* HEADER */}
      <div className="bg-orange-500 p-5 text-center relative">

        <button
          onClick={() => setCartPopup(false)}
          className="absolute right-4 top-2 text-white text-3xl font-bold"
        >
          ×
        </button>

        <div className="text-5xl mb-2">
          🍽️
        </div>

        <h2 className="text-3xl font-black text-white">
          Added To Order
        </h2>

      </div>

      {/* BODY */}
      <div className="p-6 text-center">

        <h3 className="text-2xl font-black text-black mb-3">
          {selectedFood}
        </h3>

        <p className="text-gray-500 leading-7 text-sm">
          Item has been successfully added to the customer order list.
          Kitchen has received the request instantly.
        </p>

        {/* ORDER DETAILS */}
        <div className="bg-orange-50 border border-orange-200 p-4 mt-6 rounded-md">

          <div className="flex justify-between mb-3">
            <span className="font-semibold text-gray-700">
              Table
            </span>

            <span className="font-black text-black">
              #4
            </span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="font-semibold text-gray-700">
              Quantity
            </span>

            <span className="font-black text-black">
              1
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">
              Status
            </span>

            <span className="font-black text-green-600">
              Sent To Kitchen
            </span>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-7">

          <button
            onClick={() => setCartPopup(false)}
            className="flex-1 bg-black hover:bg-gray-800 text-white py-3 font-bold transition-all duration-300"
          >
            Close
          </button>

          <button
            onClick={() => setCartPopup(false)}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 font-bold transition-all duration-300"
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  </div>
)}

      {/* HERO SECTION */}
      <div className="relative w-full h-[520px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2400&auto=format&fit=crop"
          alt="restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4">

          <div className="bg-[#FFFDF9] w-full max-w-xl px-8 py-8 shadow-2xl relative">

            <div className="absolute -top-3 left-3 text-2xl rotate-[-20deg]">
              🍃
            </div>

            <div className="absolute -top-3 right-3 text-2xl rotate-[20deg]">
              🍃
            </div>

            <div className="flex justify-center mb-4">
              <div className="w-20 h-[2px] bg-orange-200"></div>
            </div>

            <h1 className="text-center leading-tight">

              <span className="text-3xl md:text-4xl font-black text-orange-500">
                Elevate Every
              </span>

              <br />

              <span className="text-2xl md:text-4xl font-black text-black">
                 Dining Experience
              </span>

            </h1>

            <p className="text-center text-gray-500 mt-5 text-sm md:text-base leading-6 max-w-lg mx-auto">
               Deliver unforgettable dining experiences with
  smart table management, instant order tracking,
  luxury customer service, and seamless billing
  operations — all from one elegant waiter dashboard.
            </p>

            <div className="flex justify-center mt-6">

              <button
                onClick={() => setShowOrdersPopup(true)}
                className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 py-2 font-bold shadow-xl hover:scale-105 text-sm"
              >
                Explore Orders →
              </button>

            </div>
          </div>
        </div>
      </div>

            {/* WAITER OPERATIONS */}
      <div className="bg-[#FAF7F2] py-10 px-6">

        <div className="text-center mb-10">

          <div className="w-24 h-[2px] bg-orange-200 mx-auto mb-4"></div>

          <h2 className="text-3xl font-black text-black">
            Waiter Panel <span className="text-orange-500">Operations</span>
          </h2>

          <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
            Manage restaurant activities smoothly with instant order handling,
            smart table monitoring, fast billing, and premium customer support.
          </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

          {[
            {
              name: "Live Orders",
              image:
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Table Status",
              image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Quick Serve",
              image:
                "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Kitchen Updates",
              image:
                "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Smart Billing",
              image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Guest Support",
              image:
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center group cursor-pointer"
            >

              <div className="w-24 h-24 overflow-hidden shadow-xl rounded-md">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />

              </div>

              <p className="mt-3 font-bold text-gray-700 text-base text-center group-hover:text-orange-500 transition-all duration-300">
                {item.name}
              </p>

            </div>
          ))}
        </div>
      </div>

      

      {/* MAIN CONTENT */}
      <div className="px-5 md:px-8 py-8">

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

          {[
            {
              title: "Active Tables",
              value: "18",
              emoji: "🍽️",
            },
            {
              title: "Pending Orders",
              value: "12",
              emoji: "📋",
            },
            {
              title: "Assistance Requests",
              value: "5",
              emoji: "🔔",
            },
            {
              title: "Bills Generated",
              value: "24",
              emoji: "💳",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white p-4 shadow-md hover:scale-105 transition-all duration-300"
            >

              <div className="text-3xl mb-2">
                {card.emoji}
              </div>

              <h2 className="text-gray-500 font-semibold text-sm">
                {card.title}
              </h2>

              <p className="text-2xl font-black mt-1 text-black">
                {card.value}
              </p>

            </div>
          ))}
        </div>

              {/* TODAY'S SPECIAL MENU */}
<section className="px-6 md:px-8 py-14">

  {/* HEADER */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

    <div>
      <h2 className="text-4xl font-black text-black">
        Today's Special Menu
      </h2>

      <p className="text-gray-500 text-base mt-2">
        Fast moving dishes and chef recommended specials.
      </p>
    </div>

    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-bold transition-all duration-300 shadow-md">
      View Full Menu
    </button>

  </div>

  {/* CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">

    {[
      {
        name: "Cheese Burst Pizza",
        price: "$24",
        status: "Best Seller",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Chicken Grill",
        price: "$32",
        status: "Hot Item",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Classic Burger",
        price: "$18",
        status: "Trending",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Creamy Pasta",
        price: "$21",
        status: "Chef Choice",
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
      },
    ].map((item) => (
      <div
        key={item.name}
        className="bg-white shadow-xl overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
      >

        {/* IMAGE */}
        <div className="relative">

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-56 object-cover"
          />

          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 shadow-md">
            {item.status}
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow">

          <div className="flex items-start justify-between gap-3 mb-4">

            <h3 className="text-2xl font-black text-black leading-tight">
              {item.name}
            </h3>

            <span className="text-orange-500 text-3xl font-black whitespace-nowrap">
              {item.price}
            </span>

          </div>

          <p className="text-gray-500 text-base leading-8 flex-grow">
            Prepared with fresh ingredients and served with premium quality taste.
          </p>

          <button
  onClick={() => handleAddToOrder(item.name)}
  className="w-full mt-6 bg-black hover:bg-orange-500 text-white py-4 text-base font-bold transition-all duration-300"
>
  Add to Order
</button>

        </div>

      </div>
    ))}
  </div>
</section>
        {/* ACTIVE TABLES */}
        <section className="mb-10">

          <h2 className="text-3xl font-black text-black mb-5">
            Active Tables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {tables.map((table) => (
              <div
                key={table.id}
                className="bg-white overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300"
              >

                <img
                  src={table.image}
                  alt="table"
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">

                  <div className="flex justify-between items-center mb-3">

                    <h3 className="text-xl font-black text-black">
                      Table {table.id}
                    </h3>

                    <span
                      className={`px-3 py-1 text-xs font-semibold ${statusColor(
                        table.status
                      )}`}
                    >
                      {table.status}
                    </span>

                  </div>

                  <p className="text-gray-500 mb-4 text-sm">
                    Customers: {table.customers}
                  </p>

                  <div className="flex gap-2">

                    <button
                      onClick={() => setShowOrdersPopup(true)}
                      className="flex-1 bg-orange-500 text-white py-2 text-sm font-semibold hover:bg-orange-600 transition-all duration-300"
                    >
                      Orders
                    </button>

                    <button
                      onClick={() => setShowBillPopup(true)}
                      className="flex-1 border border-orange-500 text-orange-500 py-2 text-sm font-semibold hover:bg-orange-50 transition-all duration-300"
                    >
                      Bill
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REQUESTS */}
        <section className="mb-10">

          <h2 className="text-3xl font-black text-black mb-5">
            Assistance Requests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {requests.map((req, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-100 to-yellow-50 p-4 shadow-md border border-orange-200 hover:scale-105 transition-all duration-300"
              >

                <div className="flex items-center gap-3 mb-3">

                  <div className="bg-orange-500 text-white p-3 text-lg animate-pulse">
                    🔔
                  </div>

                  <h3 className="text-lg font-black text-black">
                    Assistance Alert
                  </h3>

                </div>

                <p className="text-gray-700 font-medium text-sm">
                  {req}
                </p>

                <button
                  onClick={() => setShowResponsePopup(true)}
                  className="mt-5 bg-black text-white px-5 py-2 text-sm hover:bg-orange-500 transition-all duration-300 font-semibold"
                >
                  Respond
                </button>

              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}