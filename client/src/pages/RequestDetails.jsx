import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RequestDetails = () => {
  const { id } = useParams();

    const requests = [
    {
      id: "REQ-001",
      item: "Dell laptops XPS 13",
      amount: "GHC1,299",
      department: "IT Department",
      status: "Pending",
      date: "Aug 11, 2025",
      description: "Purchase of Dell XPS 13 laptops for the IT team."
    },
    {
      id: "REQ-002",
      item: "Office chairs",
      amount: "GHC750",
      department: "HR Department",
      status: "Approved",
      date: "Aug 11, 2025",
      description: "Purchase of ergonomic office chairs for HR staff."
    },
    {
      id: "REQ-003",
      item: "Software License - Adobe",
      amount: "GHC299",
      department: "Marketing",
      status: "Rejected",
      date: "Aug 11, 2025",
      description: "Renewal of Adobe software licenses for marketing team."
    },
    {
      id: "REQ-004",
      item: "Desk Organizers",
      amount: "GHC45",
      department: "Operations",
      status: "Fulfilled",
      date: "Aug 11, 2025",
      description: "Purchase of desk organizers for operations department."
    },
    {
      id: "REQ-005",
      item: "Conference Room Monitor",
      amount: "GHC120",
      department: "Operations",
      status: "Pending",
      date: "Aug 11, 2025",
      description: "Purchase of a new monitor for conference room."
    }
  ];

  const request = requests.find((r) => r.id === id);

  if (!request) {
    return (
      <div className="p-6">
        <p className="text-red-500">Request not found.</p>
        <Link to="/dashboard" className="text-blue-500">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Request Details</h1>
          <Link to="/dashboard" className="flex items-center text-blue-500">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to My Requests
          </Link>
        </div>

        <div className="space-y-4">
          <p><strong>Request ID:</strong> {request.id}</p>
          <p><strong>Item:</strong> {request.item}</p>
          <p><strong>Amount:</strong> {request.amount}</p>
          <p><strong>Department:</strong> {request.department}</p>
          <p><strong>Status:</strong> {request.status}</p>
          <p><strong>Date:</strong> {request.date}</p>
          <p><strong>Description:</strong> {request.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
