// pages/NewRequest.jsx
import React, { useState } from "react";

const NewRequest = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    preferredVendor: "",
    quantity: 1,
    department: "",
    businessReason: "",
    additionalDescription: "",
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Later you will send this to the backend
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">New Requests</h1>
      <p className="text-gray-500 mb-6">
        Submit a new request for approval.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block font-medium">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="e.g., Dell Laptop XPS 13"
          />
        </div>

        <div>
          <label className="block font-medium">Preferred Vendor</label>
          <input
            type="text"
            name="preferredVendor"
            value={formData.preferredVendor}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="e.g., Dell Inc."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              min="1"
            />
          </div>

          <div>
            <label className="block font-medium">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Department</option>
              <option value="IT Department">I.T Department</option>
              <option value="HR Department">HR Department</option>
              <option value="Marketing Department">Marketing Department</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium">Business Reason</label>
          <textarea
            name="businessReason"
            value={formData.businessReason}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            maxLength={500}
          />
        </div>

        <div>
          <label className="block font-medium">Additional Description</label>
          <textarea
            name="additionalDescription"
            value={formData.additionalDescription}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            maxLength={500}
          />
        </div>

        <div>
          <label className="block font-medium">Attachments</label>
          <input
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="!bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default NewRequest;
