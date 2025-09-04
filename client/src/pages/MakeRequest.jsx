import React, { useEffect, useState, useCallback, use } from "react";
import Modal from "../components/Modal";
import { getAllRequests, approveRequest, rejectRequest } from "../services/ProcuraHub";



// Main Component
export default function MakeRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchRequests = useCallback(async () => {
  try {
    setError(null);
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No authentication token found. Please log in.");
      setLoading(false);
      return;
    }

    const response = await getAllRequests(token);

    if (response.success && Array.isArray(response.data)) {
      setRequests(response.data);
    } else if (Array.isArray(response)) {
      // if backend just returns array
      setRequests(response);
    } else {
      setError("Unexpected response format");
    }
  } catch (error) {
    setError("Error fetching requests");
    console.error("Error fetching requests:", error);
  } finally {
    setLoading(false);
  }
}, []);

useEffect(()=> {
  fetchRequests();
}, [fetchRequests]);

//modal open
const handleRowClick = (req) => {
  setSelectedRequest(req);
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
  setSelectedRequest(null);
}

//Approve request
const handleApprove = async () => {
  if(!selectedRequest) return;
  setActionLoading(true);
  try {
    const token = localStorage.getItem("token");
    const response = await approveRequest(token, selectedRequest._id);

    if (response.success) {
      await fetchRequests();
      setSelectedRequest((prev) => ({...prev, status: "Approved"}));
    } else {
      setError("Failed to approve request");
    }
  } catch (err) {
    setError("Error approving request");
  } finally {
    setActionLoading(false);
  }
};

const handleReject = async () => {
  if(!selectedRequest) return;
  setActionLoading(true);
  setError(null);

  try {
    const token = localStorage.getItem("token");
    const response = await rejectRequest(token, selectedRequest._id);
    console.log("Reject response:", response);

    if (response.success) {
      setRequests((prev) => prev.filter((r) => r._id !== selectedRequest._id)
    );
    selectedRequest(null);
    setModalOpen(false);
    } else {
      setError(response)
    }
  } catch (err) {
    setError("Error rejecting request");
  } finally {
    setActionLoading(false);
  }
}

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Requests</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
          <button 
            onClick={() => setError(null)} 
            className="ml-4 text-red-800 font-bold"
            aria-label="Dismiss error"
          >
            ×
          </button>
        </div>
      )}

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
              {requests.map((req) => (
                <tr
                  key={req._id}
                  className="odd:bg-white even:bg-gray-100 hover:bg-blue-50 transition cursor-pointer"
                  onClick={() => handleRowClick(req)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${req.itemName}`}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleRowClick(req);
                    }
                  }}
                >
                  <td className="p-3 text-gray-700">{req.itemName}</td>
                  <td className="p-3 text-gray-700">{req.quantity}</td>
                  <td className="p-3 text-gray-700">{req.reason}</td>
                  <td className="p-3 text-gray-700">
                    GHC {req.estimatedPricePerUnit}
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

      <Modal open={modalOpen} onClose={closeModal}>
        {selectedRequest && (
          <div>
            <h3 className="text-xl font-bold mb-4">Request Details</h3>
            <div className="mb-2"><strong>Item:</strong> {selectedRequest.itemName}</div>
            <div className="mb-2"><strong>Quantity:</strong> {selectedRequest.quantity}</div>
            <div className="mb-2"><strong>Reason:</strong> {selectedRequest.reason}</div>
            <div className="mb-2"><strong>Price/Unit:</strong> GHC {selectedRequest.estimatedPricePerUnit}</div>
            <div className="mb-2"><strong>Status:</strong> {selectedRequest.status}</div>
            <div className="flex gap-8 justify-center mt-6">
              <button
                className="bg-green-600 text-white px-10 py-2 rounded hover:bg-green-700"
                onClick={handleApprove}
                disabled={actionLoading || selectedRequest.status !== "Pending"}
              >
                {actionLoading ? "Processing..." : "Approve"}
              </button>
              <button
                className="bg-red-600 text-white px-10 py-2 rounded hover:bg-red-700"
                onClick={handleReject}
                disabled={actionLoading || selectedRequest.status !== "Pending"}
              >
                {actionLoading ? "Processing..." : "Reject"}
              </button>
            </div>
          </div>
        )}
      </Modal>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          position: relative;
          min-width: 400px;
          max-width: 90%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .odd\\:bg-white:nth-child(odd) {
          background-color: white;
        }
        
        .even\\:bg-gray-100:nth-child(even) {
          background-color: #f7fafc;
        }
        
        .hover\\:bg-blue-50:hover {
          background-color: #ebf8ff;
        }
      `}</style>


    </div>
  );
}