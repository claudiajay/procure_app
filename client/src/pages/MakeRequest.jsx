import React, { useState } from "react";
import { Bell, Plus } from "lucide-react";

const MyRequests = () => {
  const requests = [
    {
      id: "REQ-001",
      item: "Dell laptops XPS 13",
      amount: "GHC1,299",
      department: "IT Department",
      status: "Pending",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-002",
      item: "Office chairs",
      amount: "GHC750",
      department: "HR Department",
      status: "Approved",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-003",
      item: "Software License-Adobe",
      amount: "GHC299",
      department: "Marketing",
      status: "Rejected",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-004",
      item: "Desk Organizers",
      amount: "GHC45",
      department: "Operations",
      status: "Fulfilled",
      date: "Aug 11, 2025",
    },
    {
      id: "REQ-005",
      item: "Conference Room Monitor",
      amount: "GHC120",
      department: "Operations",
      status: "Pending",
      date: "Aug 11, 2025",
    },
  ];

  const [filter, setFilter] = useState("All");

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Approved":
        return "text-green-500";
      case "Rejected":
        return "text-red-500";
      case "Fulfilled":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const filteredRequests =
    filter === "All"
      ? requests
      : requests.filter((req) => req.status === filter);

  return (
    <div className="flex h-screen bg-gray-100">

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Requests</h1>
            <p className="text-gray-500">
              Track and manage all your purchase requests.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center !bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              <Plus className="w-4 h-4 mr-2" /> New Request
            </button>
            <Bell className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Purchase Request</h3>
            <div className="flex gap-4">
              {["Fulfilled", "Pending", "Approved", "Rejected"].map((status) => (
                <label key={status} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="status"
                    onChange={() => setFilter(status)}
                    checked={filter === status}
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">REQUEST ID</th>
                <th className="py-2">ITEM</th>
                <th className="py-2">AMOUNT</th>
                <th className="py-2">DEPARTMENT</th>
                <th className="py-2">STATUS</th>
                <th className="py-2">DATE</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((req) => (
                <tr key={req.id} className="border-b">
                  <td className="py-2 text-blue-500">{req.id}</td>
                  <td className="py-2">{req.item}</td>
                  <td className="py-2">{req.amount}</td>
                  <td className="py-2">{req.department}</td>
                  <td className={`py-2 font-semibold ${getStatusColor(req.status)}`}>
                    {req.status}
                  </td>
                  <td className="py-2">{req.date}</td>
                  <td className="py-2 text-blue-500 cursor-pointer">View Detail</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <p className="font-bold">Create New Request</p>
            <p className="text-sm">
              Submit a new purchase request for approval.
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

export default MyRequests;
