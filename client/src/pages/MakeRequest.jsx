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
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Requests</h2>
      {loading ? (
        <p>Loading requests...</p>
      ) : requests.length > 0 ? (
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="p-2 border">Item</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Reason</th>
              <th className="p-2 border">Price/Unit</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 border">{req.itemName}</td>
                <td className="p-2 border">{req.quantity}</td>
                <td className="p-2 border">{req.reason}</td>
                <td className="p-2 border">{req.estimatedPricePerUnit}</td>
                <td className="p-2 border">{req.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No requests found.</p>
      )}
    </div>
  );
}
