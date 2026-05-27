import { useState } from "react";

function Tables() {

  const [tables, setTables] = useState([
    { id: 1, name: "Table 1", capacity: 4, status: "Available" },
    { id: 2, name: "Table 2", capacity: 2, status: "Occupied" },
    { id: 3, name: "Table 3", capacity: 6, status: "Available" },
    { id: 4, name: "Table 4", capacity: 4, status: "Available" },
    { id: 5, name: "Table 5", capacity: 2, status: "Available" },
    { id: 6, name: "Table 6", capacity: 8, status: "Occupied" },
    { id: 7, name: "Table 7", capacity: 4, status: "Available" },
    { id: 8, name: "Table 8", capacity: 2, status: "Available" },
    { id: 9, name: "Table 9", capacity: 6, status: "Occupied" },
    { id: 10, name: "Table 10", capacity: 4, status: "Available" },
  ]);

  const [newTable, setNewTable] = useState({ name: "", capacity: 2 });
  const [showAddModal, setShowAddModal] = useState(false);

  const getQRCodeUrl = (tableId) => {
    // Local: http://localhost:5173/Restaurant-QRCode/
    // GitHub: https://anasolcampusconnect.github.io/Restaurant-QRCode/
    const baseUrl = window.location.href.split('#')[0];
    const tableUrl = `${baseUrl}#/table/${tableId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tableUrl)}`;
  };

  const handleAddTable = (e) => {
    e.preventDefault();
    const newId = tables.length > 0 ? Math.max(...tables.map(t => t.id)) + 1 : 1;
    setTables([...tables, { 
      id: newId, 
      name: newTable.name || `Table ${newId}`, 
      capacity: newTable.capacity, 
      status: "Available" 
    }]);
    setShowAddModal(false);
    setNewTable({ name: "", capacity: 2 });
  };

  const handleDeleteTable = (id) => {
    if(window.confirm("Are you sure you want to delete this table?")) {
      setTables(tables.filter(t => t.id !== id));
    }
  };

  const handlePrintQR = (table) => {
    const qrUrl = getQRCodeUrl(table.id);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print QR - ${table.name}</title>
          <style>
            body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif; text-align: center; }
            img { width: 300px; height: 300px; margin-bottom: 20px; }
            h1 { font-size: 40px; margin: 0; color: #333; }
            p { font-size: 20px; color: #666; }
          </style>
        </head>
        <body>
          <h1>Scan to Order</h1>
          <p>${table.name}</p>
          <img src="${qrUrl}" alt="QR Code" onload="window.print();window.close()" />
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="max-w-7xl mx-auto pb-10">
      
      <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Table Management</h2>
          <p className="text-sm text-gray-500 mt-1">Manage tables and generate QR codes</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
          Add New Table
        </button>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tables.map((table) => (
          <div key={table.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            
            {/* Table Header */}
            <div className="p-5 border-b border-gray-50 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{table.name}</h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md mt-1 inline-block">
                  Capacity: {table.capacity} Persons
                </span>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${table.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {table.status}
              </div>
            </div>

            {/* QR Code Display */}
            <div className="p-6 flex flex-col items-center justify-center bg-gray-50/50">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-4 relative group">
                <img src={getQRCodeUrl(table.id)} alt={`QR for ${table.name}`} className="w-32 h-32 object-contain" />
              </div>
              
              <div className="flex gap-3 w-full">
                <button 
                  onClick={() => handlePrintQR(table)}
                  className="flex-1 bg-gray-900 hover:bg-black text-white py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                  Print QR
                </button>
                <button 
                  onClick={() => handleDeleteTable(table.id)}
                  className="bg-red-50 hover:bg-red-100 text-red-600 px-3 rounded-lg transition-colors flex items-center justify-center"
                  title="Delete Table"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Add Table Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Add New Table</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <form onSubmit={handleAddTable} className="p-6 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Table Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Table 11 or VIP Room"
                  value={newTable.name}
                  onChange={(e) => setNewTable({...newTable, name: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Seating Capacity</label>
                <select 
                  value={newTable.capacity}
                  onChange={(e) => setNewTable({...newTable, capacity: parseInt(e.target.value)})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                >
                  <option value={2}>2 Persons</option>
                  <option value={4}>4 Persons</option>
                  <option value={6}>6 Persons</option>
                  <option value={8}>8 Persons</option>
                  <option value={10}>10+ Persons</option>
                </select>
              </div>

              <div className="flex gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-orange-500/30 transition-colors"
                >
                  Save Table
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Tables;