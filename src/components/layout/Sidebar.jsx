import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: Calendar, label: "Calendar" },
  { icon: BookOpen, label: "Notes" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-purple-600">
          🌸 Planner
        </h1>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;