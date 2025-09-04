import { useState } from "react";
import NewDashboard from "../../pages/Dashboard/NewDashboard";
import MyRequests from "../../pages/MakeRequest";
import Sidenav from "./Sidenav"; // ✅ you forgot this import

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidenav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 overflow-auto p-6 text-black">
        {activeTab === "dashboard" && <NewDashboard />}
        {activeTab === "request" && <MyRequests />}
      </div>
    </div>
  );
}

export default Dashboard;
