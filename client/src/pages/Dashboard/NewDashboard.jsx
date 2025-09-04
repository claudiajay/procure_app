import React, { useEffect, useState } from "react";
import { Bell, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NewDashboard = () => {
  const userName = localStorage.getItem("userName");
  const userRole = localStorage.getItem("userRole"); 
  const token = localStorage.getItem("token");

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          "https://procure-app-latest.onrender.com/api/requests/getAllRequests",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        if (res.ok) {
          setRequests(data.data || []);
        } else {
          console.error("Failed to fetch requests:", data.msg);
        }
      } catch (err) {
        console.error("Error fetching requests:", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchRequests();
    }
  }, [token]);

  return (
    <div className="h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back, {userName}{" "}
              {userRole && <span className="font-semibold">({userRole})</span>}!
              Here's your procurement overview.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={"/new-request"}
              className="flex items-center !bg-blue-600 !text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              <Plus className="w-4 h-4 mr-2" /> New Request
            </Link>
            <Bell className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Pending Requests</p>
            <h2 className="text-2xl font-bold">
              {requests.filter((r) => r.status === "Pending").length}
            </h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Approved Requests</p>
            <h2 className="text-2xl font-bold">
              {requests.filter((r) => r.status === "Approved").length}
            </h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Rejected Requests</p>
            <h2 className="text-2xl font-bold">
              {requests.filter((r) => r.status === "Rejected").length}
            </h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">Total Requests</p>
            <h2 className="text-2xl font-bold">{requests.length}</h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Purchase Request</h3>
            <button className="text-blue-500">View all</button>
          </div>

          {loading ? (
            <p className="text-gray-500">Loading requests...</p>
          ) : requests.length === 0 ? (
            <p className="text-gray-500">No requests found.</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">REQUEST ID</th>
                  <th className="py-2">ITEM NAME</th>
                  <th className="py-2">QUANTITY</th>
                  <th className="py-2">REASON</th>
                  <th className="py-2">EST. PRICE PER UNIT</th>
                  <th className="py-2">STATUS</th>
                  <th className="py-2">DATE</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, index) => (
                  <tr key={req._id || index} className="border-b">
                    <td className="py-2 text-blue-500">
                      {req.requestId || req._id}
                    </td>
                    <td className="py-2">{req.itemName}</td>
                    <td className="py-2">{req.quantity}</td>
                    <td className="py-2">{req.reason}</td>
                    <td className="py-2">{req.estimatedPricePerUnit}</td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          req.status
                        )}`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="py-2">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default NewDashboard;
