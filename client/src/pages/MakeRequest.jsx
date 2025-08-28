import React, { useEffect, useState } from "react";
import { getAllRequests } from "../services/ProcuraHub.js";

export default function MakeRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await getAllRequests(token);

      if (response.success && Array.isArray(response.data)) {
        setRequests(response.data);
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📦 All Requests</h2>

      {loading ? (
        <p className="text-gray-500">Loading requests...</p>
      ) : requests.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <th className="p-3">Item</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Reason</th>
                <th className="p-3">Price/Unit</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => (
                <tr
                  key={idx}
                  className="odd:bg-white even:bg-gray-100 hover:bg-blue-50 transition"
                >
                  <td className="p-3 text-gray-700">{req.itemName}</td>
                  <td className="p-3 text-gray-700">{req.quantity}</td>
                  <td className="p-3 text-gray-700">{req.reason}</td>
                  <td className="p-3 text-gray-700">
                    GHC{req.estimatedPricePerUnit}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        req.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : req.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No requests found.</p>
      )}
    </div>
  );
}
