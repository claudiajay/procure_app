import React from "react";
import { Bell, Plus } from "lucide-react";

const NewDashboard = () => {
  const requests = [
    {
      id: "REQ-001",
      item: "Dell laptops XPS 13",
      amount: "GHC1,299",
      department: "IT Department",
      status: "Pending",
      urgency: "High",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-002",
      item: "Office chairs",
      amount: "GHC750",
      department: "HR Department",
      status: "Approved",
      urgency: "Medium",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-003",
      item: "Software License-Adobe",
      amount: "GHC299",
      department: "Marketing",
      status: "Rejected",
      urgency: "Low",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-004",
      item: "Desk Organizers",
      amount: "GHC45",
      department: "Operations",
      status: "Fulfilled",
      urgency: "Low",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-005",
      item: "Conference Room Monitor",
      amount: "GHC120",
      department: "Operations",
      status: "Pending",
      urgency: "Medium",
      date: "Aug 11, 2025",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "Fulfilled":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className=" h-screen bg-gray-100">
      
      <main className="flex-1 p-6">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back, John! Here's your procurement overview.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center !bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              <Plus className="w-4 h-4 mr-2" /> New Request
            </button>
            <Bell className="w-6 h-6 text-gray-600" />
          </div>
        </div>


        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Pending Requests</p>
            <h2 className="text-2xl font-bold">8</h2>
            <p className="text-sm text-orange-500">+12% from last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Approved Requests</p>
            <h2 className="text-2xl font-bold">12</h2>
            <p className="text-sm text-green-500">+8% from last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Rejected Requests</p>
            <h2 className="text-2xl font-bold">4</h2>
            <p className="text-sm text-red-500">-3% from last month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Total Requests</p>
            <h2 className="text-2xl font-bold">24</h2>
            <p className="text-sm text-blue-500">+15% from last month</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Purchase Request</h3>
            <button className="text-blue-500">View all</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">REQUEST ID</th>
                <th className="py-2">ITEM</th>
                <th className="py-2">AMOUNT</th>
                <th className="py-2">DEPARTMENT</th>
                <th className="py-2">STATUS</th>
                <th className="py-2">URGENCY</th>
                <th className="py-2">DATE</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="border-b">
                  <td className="py-2 text-blue-500">{req.id}</td>
                  <td className="py-2">{req.item}</td>
                  <td className="py-2">{req.amount}</td>
                  <td className="py-2">{req.department}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        req.status
                      )}`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className={`py-2 ${getUrgencyColor(req.urgency)}`}>
                    {req.urgency}
                  </td>
                  <td className="py-2">{req.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <p className="font-bold">Create New Request</p>
            <p className="text-sm">
              Submit a new purchase request for approval.
            </p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <p className="font-bold">View Request</p>
            <p className="text-sm">
              Track status of all your submitted requests.
            </p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-lg shadow">
            <p className="font-bold">Notification</p>
            <p className="text-sm">Check updates on your requests.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewDashboard;
