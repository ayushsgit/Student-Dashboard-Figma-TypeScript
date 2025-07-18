import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { StatsCards } from "./components/StatsCards";
import { UpcomingAssignments } from "./components/UpcomingAssignments";
import { RecentGrades } from "./components/RecentGrades";
import { TodaysSchedule } from "./components/TodaysSchedule";

export default function App() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-8 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Good morning, Alex! 👋
              </h1>
              <p className="text-gray-600">{currentDate}</p>
            </div>
            
            {/* Stats Cards */}
            <div className="mb-8">
              <StatsCards />
            </div>
            
            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Left Column - Upcoming Assignments */}
              <UpcomingAssignments />
              
              {/* Right Column - Recent Grades */}
              <RecentGrades />
            </div>
            
            {/* Bottom Section - Today's Schedule */}
            <TodaysSchedule />
          </div>
        </main>
      </div>
    </div>
  );
}