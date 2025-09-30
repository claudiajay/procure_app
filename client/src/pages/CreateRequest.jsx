import React, { useState } from "react";
import { createRequest } from "../services/ProcuraHub";
import { useNavigate } from "react-router-dom";

const RequestList = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    reason: "",
    estimatedPricePerUnit: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token"); 
      const response = await createRequest(token, formData);
      console.log("Request submitted successfully:", response);

      setSuccessMessage("✅ Request submitted successfully!");
      setFormData({
        itemName: "",
        quantity: "",
        reason: "",
        estimatedPricePerUnit: "",
      });
      
      setTimeout(() => navigate("/my-requests"), 2000);
    } catch (err) {
      console.error("Error submitting request:", err);
      alert("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Request</h2>
      <p className="text-gray-500 mb-6">Submit a new request for approval.</p>

      {successMessage && (
        <div className="p-3 mb-4 bg-green-100 text-green-700 rounded-lg text-center">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="Enter item name"
          required
          className="w-full border rounded p-3"
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Enter quantity"
          required
          className="w-full border rounded p-3"
        />
        <input
          type="text"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Enter reason"
          required
          className="w-full border rounded p-3"
        />
        <input
          type="number"
          name="estimatedPricePerUnit"
          value={formData.estimatedPricePerUnit}
          onChange={handleChange}
          placeholder="Enter estimated price per unit"
          required
          className="w-full border rounded p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full !bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default RequestList;
