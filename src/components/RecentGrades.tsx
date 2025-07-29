import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { ArrowRight, TrendingUp } from "lucide-react";

const grades = [
  {
    id: 1,
    course: "Data Structures",
    assignment: "Midterm Exam",
    grade: "A-",
    percentage: 92,
    date: "Dec 10, 2024",
  },
  {
    id: 2,
    course: "Database Systems",
    assignment: "SQL Project",
    grade: "A",
    percentage: 96,
    date: "Dec 8, 2024",
  },
  {
    id: 3,
    course: "Linear Algebra",
    assignment: "Quiz 3",
    grade: "B+",
    percentage: 87,
    date: "Dec 5, 2024",
  },
  {
    id: 4,
    course: "Software Engineering",
    assignment: "Team Project",
    grade: "A",
    percentage: 94,
    date: "Dec 3, 2024",
  },
  {
    id: 5,
    course: "Algorithm Analysis",
    assignment: "Homework 4",
    grade: "B",
    percentage: 83,
    date: "Nov 30, 2024",
  },
];

const getGradeColor = (percentage: number) => {
  if (percentage >= 90) return "text-green-600";
  if (percentage >= 80) return "text-blue-600";
  if (percentage >= 70) return "text-yellow-600";
  return "text-red-600";
};

const getProgressColor = (percentage: number) => {
  if (percentage >= 90) return "bg-green-500";
  if (percentage >= 80) return "bg-blue-500";
  if (percentage >= 70) return "bg-yellow-500";
  return "bg-red-500";
};

export function RecentGrades() {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Recent Grades</CardTitle>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {grades.map((grade) => (
          <div key={grade.id} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{grade.course}</h4>
                <p className="text-sm text-gray-600">{grade.assignment}</p>
              </div>
              <div className="text-right">
                <span className={`text-lg font-semibold ${getGradeColor(grade.percentage)}`}>
                  {grade.grade}
                </span>
                <p className="text-xs text-gray-500">{grade.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Progress 
                value={grade.percentage} 
                className="flex-1 h-2"
                style={{
                  background: '#e5e7eb'
                }}
              />
              <span className="text-sm font-medium text-gray-700">{grade.percentage}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}