import { Bell, Search, Moon } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-80">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-3 bg-transparent outline-none w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="p-2 rounded-xl hover:bg-gray-100 transition">
          <Moon size={20} />
        </button>

        <button className="p-2 rounded-xl hover:bg-gray-100 transition relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="font-semibold">Anushka</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;