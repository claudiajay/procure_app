<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useState } from "react";
import { Bell, Plus } from "lucide-react";
import { Link } from "react-router-dom";

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
>>>>>>> Stashed changes

const MakeRequest = () => {
  return (
    <div>MakeRequest</div>
  )
}

export default MakeRequest