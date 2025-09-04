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
        if (data.success) {
          setApprovedRequests(data.data);
        } else {
          setError("Failed to load approved requests.");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching approved requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchApproved();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Approved Orders</h2>

      {approvedRequests.length === 0 ? (
        <p className="text-gray-500">No approved requests yet.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border">Item</th>
                <th className="py-2 px-4 border">Quantity</th>
                <th className="py-2 px-4 border">Reason</th>
                <th className="py-2 px-4 border">Requested By</th>
                <th className="py-2 px-4 border">Approved Date</th>
              </tr>
            </thead>
            <tbody>
              {approvedRequests.map((req) => (
                <tr key={req._id} className="text-center hover:bg-gray-50">
                  <td className="py-2 px-4 border">{req.itemName}</td>
                  <td className="py-2 px-4 border">{req.quantity}</td>
                  <td className="py-2 px-4 border">{req.reason}</td>
                  <td className="py-2 px-4 border">{req.userId?.name || "N/A"}</td>
                  <td className="py-2 px-4 border">
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
