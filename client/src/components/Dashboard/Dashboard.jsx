import { useState } from "react";
import NewDashboard from "../../pages/Dashboard/NewDashboard";
import MyRequests from "../../pages/MakeRequest";
import CreateRequest from "../../pages/CreateRequest";
import Order from "../../pages/Order";
import Sidenav from "./Sidenav"; 

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
        {/* {activeTab === "new-request" && <CreateRequest />} */}
        {activeTab === "orders" && <Order />}
      </div>
    </div>
  );
}

export default Dashboard;

