import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  {
    id: 1,
    course: "Data Structures",
    code: "CS 261",
    time: "9:00 AM - 10:20 AM",
    location: "Kelley Engineering Center 1003",
    color: "bg-blue-100 border-blue-300",
    dotColor: "bg-blue-500",
  },
  {
    id: 2,
    course: "Linear Algebra",
    code: "MATH 254",
    time: "11:00 AM - 12:20 PM",
    location: "Kidder Hall 350",
    color: "bg-green-100 border-green-300",
    dotColor: "bg-green-500",
  },
  {
    id: 3,
    course: "Database Systems",
    code: "CS 340",
    time: "2:30 PM - 3:50 PM",
    location: "Kelley Engineering Center 1001",
    color: "bg-purple-100 border-purple-300",
    dotColor: "bg-purple-500",
    current: true,
  },
  {
    id: 4,
    course: "Software Engineering",
    code: "CS 361",
    time: "4:00 PM - 5:20 PM",
    location: "Owen Hall 100",
    color: "bg-orange-100 border-orange-300",
    dotColor: "bg-orange-500",
  },
];

export function TodaysSchedule() {
  const currentTime = new Date();
  const currentTimeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Today's Schedule</CardTitle>
        <p className="text-sm text-gray-600">Friday, December 13, 2024</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedule.map((class_, index) => (
            <div key={class_.id} className="relative">
              {/* Timeline line */}
              {index < schedule.length - 1 && (
                <div className="absolute left-2 top-8 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Timeline dot */}
                <div className={`w-4 h-4 rounded-full ${class_.dotColor} mt-1 relative z-10 ${class_.current ? 'ring-4 ring-blue-200' : ''}`}></div>
                
                {/* Class details */}
                <div className={`flex-1 p-4 rounded-lg border ${class_.color} ${class_.current ? 'ring-2 ring-blue-400' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{class_.course}</h4>
                      <p className="text-sm text-gray-600">{class_.code}</p>
                    </div>
                    {class_.current && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-700">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{class_.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{class_.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}