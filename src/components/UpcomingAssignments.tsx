import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "Database Design Project",
    course: "CS 340",
    dueDate: "Dec 15, 2024",
    priority: "high",
    daysLeft: 2,
  },
  {
    id: 2,
    title: "Algorithm Analysis Report",
    course: "CS 325",
    dueDate: "Dec 18, 2024",
    priority: "medium",
    daysLeft: 5,
  },
  {
    id: 3,
    title: "Linear Algebra Problem Set",
    course: "MATH 254",
    dueDate: "Dec 20, 2024",
    priority: "low",
    daysLeft: 7,
  },
  {
    id: 4,
    title: "Software Engineering Proposal",
    course: "CS 361",
    dueDate: "Dec 22, 2024",
    priority: "medium",
    daysLeft: 9,
  },
];

const priorityColors = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  low: "bg-green-100 text-green-700 border-green-200",
};

export function UpcomingAssignments() {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Upcoming Assignments</CardTitle>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                <Badge className={`text-xs ${priorityColors[assignment.priority]}`}>
                  {assignment.priority}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="font-medium">{assignment.course}</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{assignment.dueDate}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{assignment.daysLeft} days</p>
              <p className="text-xs text-gray-500">remaining</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}