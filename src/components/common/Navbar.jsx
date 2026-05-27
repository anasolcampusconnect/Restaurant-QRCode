function Navbar({ title, role }) {
  const roleDisplay = {
    admin: { name: "Restaurant Admin", avatar: "A", color: "bg-blue-100 text-blue-600 border-blue-300" },
    kitchen: { name: "Master Chef", avatar: "C", color: "bg-orange-100 text-orange-600 border-orange-300" },
    waiter: { name: "Service Captain", avatar: "W", color: "bg-green-100 text-green-600 border-green-300" }
  };

  const currentProfile = roleDisplay[role] || roleDisplay.admin;

  return (
    <div className="bg-white px-8 py-5 flex items-center justify-between border-b border-gray-100 shadow-sm sticky top-0 z-10">
      
      <div>
        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-400 font-medium mt-0.5">Manage your restaurant efficiently</p>
      </div>

      <div className="flex items-center gap-7">
        <button className="relative p-2 text-gray-400 hover:text-orange-500 bg-gray-50 hover:bg-orange-50 rounded-full transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer group">
          <div className="flex flex-col text-right">
            <span className="text-sm font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
              {currentProfile.name}
            </span>
            <span className="text-xs text-green-500 font-semibold tracking-wide">
              • Active Now
            </span>
          </div>
          <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg border ${currentProfile.color} shadow-sm group-hover:scale-105 transition-transform`}>
            {currentProfile.avatar}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;