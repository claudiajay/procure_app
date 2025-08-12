import React, { useState } from "react";

export default function RequestList() {
  const [formData, setFormData] = useState({
    itemName: "",
    preferredVendor: "",
    quantity: 1,
    department: "",
    businessReason: "",
    additionalDescription: "",
    attachments: [],
  });

  const departments = ["I.T Department", "HR Department", "Marketing Department"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachments: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    //backend 
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-1">New Requests</h1>
      <p className="text-gray-500 mb-6">Submit a new request for approval.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
              <div>
          <label className="block font-medium">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="e.g., Dell Laptop XPS 13"
            className="w-full p-2 border rounded"
          />
        </div>
      
        <div>
          <label className="block font-medium">Preferred Vendor</label>
          <input
            type="text"
            name="preferredVendor"
            value={formData.preferredVendor}
            onChange={handleChange}
            placeholder="e.g., Dell Inc."
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Department</label>
          <div className="space-y-2">
            {departments.map((dept) => (
              <label key={dept} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="department"
                  value={dept}
                  checked={formData.department === dept}
                  onChange={handleChange}
                />
                {dept}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium">Business Reason</label>
          <textarea
            name="businessReason"
            value={formData.businessReason}
            onChange={handleChange}
            placeholder="Explain why this purchase is necessary for your work..."
            className="w-full p-2 border rounded"
            maxLength="500"
          />
        </div>

        <div>
          <label className="block font-medium">Additional Description</label>
          <textarea
            name="additionalDescription"
            value={formData.additionalDescription}
            onChange={handleChange}
            placeholder="Any additional details..."
            className="w-full p-2 border rounded"
            maxLength="500"
          />
        </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <label className="block font-medium mb-2">Attachments</label>
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.png"
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 
                          file:rounded-lg file:border-0 file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100 cursor-pointer"
              />
            </div>


        <button
          type="submit"
          className="!bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
