import React, { useMemo, useState } from "react";

const WaiterBillingPanel = () => {

  // ================= STATES =================

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [showPrintModal, setShowPrintModal] = useState(false);
  const [selectedCustomerBill, setSelectedCustomerBill] = useState(null);

  // ================= FOOD ITEMS =================

  const foodItems = [
    {
      name: "Veg Burger",
      price: "$12",
      category: "Burgers",
      img: "https://cdn-icons-png.flaticon.com/512/5787/5787016.png",
    },
    {
      name: "Cheese Burger",
      price: "$14",
      category: "Burgers",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075978.png",
    },
    {
      name: "Chicken Pizza",
      price: "$18",
      category: "Pizza",
      img: "https://cdn-icons-png.flaticon.com/512/6978/6978255.png",
    },
    {
      name: "French Fries",
      price: "$8",
      category: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    },
    {
      name: "Cold Coffee",
      price: "$6",
      category: "Drinks",
      img: "https://cdn-icons-png.flaticon.com/512/924/924514.png",
    },
    {
      name: "Pasta",
      price: "$15",
      category: "Italian",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      name: "Chicken Biryani",
      price: "$20",
      category: "Rice",
      img: "https://cdn-icons-png.flaticon.com/512/3480/3480823.png",
    },
    {
      name: "Chocolate Cake",
      price: "$14",
      category: "Desserts",
      img: "https://cdn-icons-png.flaticon.com/512/2682/2682446.png",
    },
    {
      name: "Milk Shake",
      price: "$10",
      category: "Drinks",
      img: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
    },
    {
      name: "Tacos",
      price: "$12",
      category: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/4727/4727440.png",
    },
    {
      name: "Paneer Tikka",
      price: "$16",
      category: "Indian",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
    {
      name: "Momos",
      price: "$11",
      category: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/5787/5787100.png",
    },

    // ================= NEW SNACKS =================

    {
      name: "Spring Rolls",
      price: "$9",
      category: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/6978/6978258.png",
    },
    {
      name: "Nachos",
      price: "$10",
      category: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/4727/4727424.png",
    },
    {
      name: "Popcorn",
      price: "$7",
      category: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/2515/2515275.png",
    },
    {
      name: "Chicken Wings",
      price: "$15",
      category: "Snacks",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046751.png",
    },
  ];

  // ================= CUSTOMERS =================

  const customers = [
    {
      name: "Customer 1",
      table: "Table 01",
      emoji: "👨",
      total: "$30",
      orders: [
        { item: "Veg Burger × 2", price: "$24" },
        { item: "Cold Coffee × 1", price: "$6" },
      ],
    },
    {
      name: "Customer 2",
      table: "Table 02",
      emoji: "👩",
      total: "$34",
      orders: [
        { item: "Chicken Pizza × 1", price: "$18" },
        { item: "French Fries × 2", price: "$16" },
      ],
    },
    {
      name: "Customer 3",
      table: "Table 03",
      emoji: "🧑",
      total: "$33",
      orders: [
        { item: "Pasta × 1", price: "$15" },
        { item: "Milk Shake × 2", price: "$18" },
      ],
    },
    {
      name: "Customer 4",
      table: "Table 04",
      emoji: "👨‍🍳",
      total: "$27",
      orders: [
        { item: "Momos × 2", price: "$20" },
        { item: "Chocolate Cake × 1", price: "$7" },
      ],
    },
  ];

  // ================= FILTER =================

  const filteredItems = useMemo(() => {
    return foodItems.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  // ================= SAVE FUNCTION =================

  const handleSave = () => {
    setShowCreateModal(false);
    setShowReportModal(false);

    setShowSuccessPopup(true);

    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            🍽 Waiter Billing Dashboard
          </h1>

          <p className="text-gray-500 mt-1 text-sm">
            Manage orders, reports and customer payments
          </p>
        </div>

        {/* BUTTONS */}

        <div className="flex gap-3 mt-4 lg:mt-0">

          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-3xl font-bold text-base shadow-md transition"
          >
            + Create Order
          </button>

          <button
            onClick={() => setShowReportModal(true)}
            className="bg-white border border-gray-300 hover:bg-gray-50 px-7 py-3 rounded-3xl font-bold text-base text-gray-700 shadow-sm transition"
          >
            View Reports
          </button>

        </div>

      </div>

      {/* ================= MAIN GRID ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* ================= LEFT ================= */}

        <div className="xl:col-span-2 bg-white rounded-3xl p-5 shadow-sm">

          {/* SEARCH */}

          <div className="flex flex-col md:flex-row gap-3 mb-5">

            <input
              type="text"
              placeholder="Search food items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-gray-300 rounded-3xl px-5 py-3 text-base outline-none focus:ring-2 focus:ring-orange-300"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border-2 border-gray-800 rounded-3xl px-5 py-3 text-base font-medium outline-none"
            >
              <option value="All">All</option>
              <option value="Burgers">Burgers</option>
              <option value="Pizza">Pizza</option>
              <option value="Drinks">Drinks</option>
              <option value="Desserts">Desserts</option>
              <option value="Snacks">Snacks</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Rice">Rice</option>
            </select>

          </div>

          {/* FOOD GRID */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-[28px] p-3 border border-gray-100 hover:shadow-lg transition"
                >

                  <div className="flex justify-center">

                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-contain"
                    />

                  </div>

                  <div className="mt-3">

                    <h3 className="font-bold text-gray-800 text-[18px]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.category}
                    </p>

                    <div className="flex items-center justify-between mt-4">

                      <span className="text-orange-500 font-bold text-2xl">
                        {item.price}
                      </span>

                      <button className="bg-orange-500 hover:bg-orange-600 text-white w-11 h-11 rounded-full text-2xl font-bold">
                        +
                      </button>

                    </div>

                  </div>

                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">

                <h2 className="text-3xl font-bold text-gray-400">
                  😔 No Food Found
                </h2>

              </div>
            )}

          </div>

        </div>

        {/* ================= RIGHT BILLING ================= */}

        <div className="bg-white rounded-3xl p-5 shadow-sm">

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            🧾 Customer Billing
          </h2>

          <div className="space-y-4">

            {customers.map((customer, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-4"
              >

                <div className="flex items-center justify-between mb-3">

                  <h3 className="font-bold text-lg">
                    {customer.emoji} {customer.name}
                  </h3>

                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
                    {customer.table}
                  </span>

                </div>

                <div className="space-y-2">

                  {customer.orders.map((order, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-gray-700 text-sm"
                    >
                      <span>{order.item}</span>
                      <span className="font-semibold">
                        {order.price}
                      </span>
                    </div>
                  ))}

                </div>

                <div className="border-t mt-3 pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>{customer.total}</span>
                </div>

              </div>
            ))}

          </div>

          {/* BUTTONS */}

          <div className="grid grid-cols-2 gap-3 mt-5">

            <button
              onClick={() => setShowPrintModal(true)}
              className="bg-black hover:bg-gray-900 text-white py-3 rounded-3xl text-lg font-bold transition"
            >
              Print Bill
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-3xl text-lg font-bold transition">
              Accept Payment
            </button>

          </div>

        </div>

      </div>

      {/* ================= CREATE ORDER MODAL ================= */}

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[95%] max-w-lg rounded-3xl p-7">

            <h2 className="text-3xl font-bold mb-6">
              🍽 Create New Order
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Customer Name"
                className="w-full border rounded-2xl px-4 py-4"
              />

              <select className="w-full border rounded-2xl px-4 py-4">
                <option>Select Table</option>
                <option>Table 01</option>
                <option>Table 02</option>
                <option>Table 03</option>
              </select>

              <select className="w-full border rounded-2xl px-4 py-4">
                <option>Select Food Item</option>
                <option>Veg Burger</option>
                <option>Pizza</option>
                <option>Pasta</option>
              </select>

            </div>

            <div className="flex justify-end gap-4 mt-7">

              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-3 rounded-2xl border"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold"
              >
                Save Order
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ================= REPORT MODAL ================= */}

      {showReportModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[95%] max-w-xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              📊 Restaurant Reports
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-orange-100 rounded-3xl p-5">
                <h3 className="font-bold">Today's Orders</h3>
                <p className="text-4xl font-bold mt-2">120</p>
              </div>

              <div className="bg-green-100 rounded-3xl p-5">
                <h3 className="font-bold">Revenue</h3>
                <p className="text-4xl font-bold mt-2">$2,400</p>
              </div>

              <div className="bg-blue-100 rounded-3xl p-5">
                <h3 className="font-bold">Customers</h3>
                <p className="text-4xl font-bold mt-2">86</p>
              </div>

              <div className="bg-purple-100 rounded-3xl p-5">
                <h3 className="font-bold">Pending Bills</h3>
                <p className="text-4xl font-bold mt-2">12</p>
              </div>

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setShowReportModal(false)}
                className="px-6 py-3 rounded-2xl border"
              >
                Close
              </button>

              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold"
              >
                Save Report
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ================= SUCCESS POPUP ================= */}

      {showSuccessPopup && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-7 py-4 rounded-3xl shadow-2xl z-50">

          <h2 className="text-lg font-bold">
            ✅ Successfully Saved
          </h2>

        </div>
      )}

      {/* ================= PRINT BILL MODAL ================= */}

      {showPrintModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[95%] max-w-2xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              🖨 Select Customer Bill
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-7">

              {customers.map((customer, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCustomerBill(customer)}
                  className="bg-orange-100 hover:bg-orange-200 text-orange-700 py-4 rounded-2xl font-bold text-lg transition"
                >
                  {customer.name}
                </button>
              ))}

            </div>

            {selectedCustomerBill && (
              <div className="border rounded-3xl p-6 bg-gray-50">

                <div className="flex justify-between items-center mb-5">

                  <h2 className="text-2xl font-bold">
                    {selectedCustomerBill.emoji}{" "}
                    {selectedCustomerBill.name}
                  </h2>

                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-bold">
                    {selectedCustomerBill.table}
                  </span>

                </div>

                <div className="space-y-3">

                  {selectedCustomerBill.orders.map((order, index) => (
                    <div
                      key={index}
                      className="flex justify-between"
                    >
                      <span>{order.item}</span>
                      <span className="font-semibold">
                        {order.price}
                      </span>
                    </div>
                  ))}

                </div>

                <div className="border-t mt-5 pt-4 flex justify-between text-2xl font-bold">

                  <span>Total Bill</span>

                  <span className="text-orange-500">
                    {selectedCustomerBill.total}
                  </span>

                </div>

              </div>
            )}

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => {
                  setShowPrintModal(false);
                  setSelectedCustomerBill(null);
                }}
                className="px-6 py-3 border rounded-2xl"
              >
                Close
              </button>

              <button className="bg-black text-white px-6 py-3 rounded-2xl font-bold">
                Print Now
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default WaiterBillingPanel;