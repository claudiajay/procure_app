<<<<<<< Updated upstream
import React from 'react'
=======
import React from "react";
import { Bell, Plus } from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

const NewDashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

<<<<<<< Updated upstream
export default NewDashboard
=======
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back, John! Here's your procurement overview.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/request/new"} className="flex items-center !bg-blue-600 !text-white px-4 py-2 rounded-lg cursor-pointer">
              <Plus className="w-4 h-4 mr-2" /> New Request
            </Link>
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
>>>>>>> Stashed changes
