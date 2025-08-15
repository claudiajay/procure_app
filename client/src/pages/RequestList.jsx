import React, { useState } from "react";
import { createRequest } from "../services/ProcuraHubClient";

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const departments = ["I.T Department", "HR Department", "Marketing Department"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const files = [...e.target.files];
    setFormData({ ...formData, attachments: files });
    setErrors({ ...errors, attachments: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.itemName.trim()) newErrors.itemName = "Item name is required.";
    if (!formData.preferredVendor.trim()) newErrors.preferredVendor = "Preferred vendor is required.";
    if (!formData.quantity || formData.quantity < 1) newErrors.quantity = "Quantity must be at least 1.";
    if (!formData.department) newErrors.department = "Please select a department.";
    if (!formData.businessReason.trim()) newErrors.businessReason = "Business reason is required.";
    if (!formData.additionalDescription.trim()) newErrors.additionalDescription = "Additional description is required.";
    if (formData.attachments.length === 0) newErrors.attachments = "Please upload at least one file.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("itemName", formData.itemName);
      payload.append("preferredVendor", formData.preferredVendor);
      payload.append("quantity", formData.quantity);
      payload.append("department", formData.department);
      payload.append("businessReason", formData.businessReason);
      payload.append("additionalDescription", formData.additionalDescription);

      formData.attachments.forEach((file) => {
        payload.append("attachments", file);
      });

      const response = await createRequest("", payload);

      setSuccessMsg("Request submitted successfully!");
      console.log("API Response:", response);
      setFormData({
        itemName: "",
        preferredVendor: "",
        quantity: 1,
        department: "",
        businessReason: "",
        additionalDescription: "",
        attachments: [],
      });
    } catch (error) {
      setErrorMsg("Failed to submit request. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-1">New Requests</h1>
      <p className="text-gray-500 mb-6">Submit a new request for approval.</p>

      {successMsg && <p className="text-green-600">{successMsg}</p>}
      {errorMsg && <p className="text-red-600">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="e.g., Dell Laptop XPS 13"
            className={`w-full p-2 border rounded ${errors.itemName ? "border-red-500" : ""}`}
          />
          {errors.itemName && <p className="text-red-500 text-sm">{errors.itemName}</p>}
        </div>

        <div>
          <label className="block font-medium">Preferred Vendor</label>
          <input
            type="text"
            name="preferredVendor"
            value={formData.preferredVendor}
            onChange={handleChange}
            placeholder="e.g., Dell Inc."
            className={`w-full p-2 border rounded ${errors.preferredVendor ? "border-red-500" : ""}`}
          />
          {errors.preferredVendor && <p className="text-red-500 text-sm">{errors.preferredVendor}</p>}
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className={`w-full p-2 border rounded ${errors.quantity ? "border-red-500" : ""}`}
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
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
          {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
        </div>

        <div>
          <label className="block font-medium">Business Reason</label>
          <textarea
            name="businessReason"
            value={formData.businessReason}
            onChange={handleChange}
            placeholder="Explain why this purchase is necessary for your work..."
            className={`w-full p-2 border rounded ${errors.businessReason ? "border-red-500" : ""}`}
            maxLength="500"
          />
          {errors.businessReason && <p className="text-red-500 text-sm">{errors.businessReason}</p>}
        </div>

        <div>
          <label className="block font-medium">Additional Description</label>
          <textarea
            name="additionalDescription"
            value={formData.additionalDescription}
            onChange={handleChange}
            placeholder="Any additional details..."
            className={`w-full p-2 border rounded ${errors.additionalDescription ? "border-red-500" : ""}`}
            maxLength="500"
          />
          {errors.additionalDescription && <p className="text-red-500 text-sm">{errors.additionalDescription}</p>}
        </div>

        <div className="p-4 border rounded-lg bg-gray-50">
          <label className="block font-medium mb-2">Attachments</label>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            accept=".pdf,.doc,.docx,.jpg,.png"
            className={`block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 
              file:rounded-lg file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 cursor-pointer ${errors.attachments ? "border border-red-500" : ""}`}
          />
          {errors.attachments && <p className="text-red-500 text-sm">{errors.attachments}</p>}
        </div>

        <button
          type="submit"
          className="!bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer flex items-center gap-2"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          )}
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
