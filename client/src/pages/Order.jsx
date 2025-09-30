import React, { useEffect, useState } from "react";
import { getApprovedRequests } from "../services/ProcuraHub";

export default function Order() {
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApproved = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You must be logged in to view approved requests.");
        setLoading(false);
        return;
      }

      try {
        const data = await getApprovedRequests(token);
        console.log("Data received in component:", data);
        setLoading(false);

        if (data.success && Array.isArray(data.data)) {
          setApprovedRequests(data.data);
        } else {
          setError("Failed to load approved requests.");
        }
      } catch (err) {
        console.error("Error fetching approved requests:", err);
        setError("Error fetching approved requests.");
      }
    };

    fetchApproved();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">Approved Orders</h2>

      {approvedRequests.length === 0 ? (
        <p className="text-gray-500">No approved requests yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <th className="p-3">Item</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Reason</th>
                <th className="p-3">Requested By</th>
                <th className="p-3">Approved Date</th>
              </tr>
            </thead>
            <tbody>
              {approvedRequests.map((req) => (
                <tr key={req._id} className="odd:bg-white even:bg-gray-100 hover:bg-blue-50 transition cursor-pointer">
                  <td className="p-3">{req.itemName}</td>
                  <td className="p-3">{req.quantity}</td>
                  <td className="p-3">{req.reason}</td>
                  <td className="p-3">
                    {req.userId?.name || "N/A"}
                  </td>
                  <td className="py-2 px-4">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
