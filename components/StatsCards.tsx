import { Card, CardContent } from "./ui/card";
import { GraduationCap, BookOpen, ClipboardCheck, Clock } from "lucide-react";

const stats = [
  {
    title: "Current GPA",
    value: "3.8/4.0",
    icon: GraduationCap,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Credits Completed",
    value: "78/120",
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Pending Assignments",
    value: "5",
    icon: ClipboardCheck,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Next Class",
    value: "Data Structures - 2:30 PM",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}