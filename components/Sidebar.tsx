import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { 
  Home, 
  BookOpen, 
  ClipboardCheck, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Settings 
} from "lucide-react";

const navigationItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BookOpen, label: "Courses", active: false },
  { icon: ClipboardCheck, label: "Assignments", active: false },
  { icon: BarChart3, label: "Grades", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  return (
    <div className="w-60 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* User Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Alex Johnson" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Alex Johnson</h3>
            <p className="text-xs text-gray-500">Computer Science</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                item.active
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}