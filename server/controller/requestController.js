const Request = require('../models/Request');

// Create a new purchase request
const createRequest = async (req, res) => {
  const { itemName, quantity, reason } = req.body;

  if (!itemName || !quantity || !reason) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const request = await Request.create({
      userId: req.user.id,
      itemName,
      quantity,
      reason,
      status: 'Pending',
    });

    res.status(201).json({
      success: true,
      msg: 'Purchase request created successfully',
      data: request,
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

// Get all requests
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find()
      .populate('userId', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

// Approve a request
const approveRequest = async (req, res) => {
  try {
    if (req.user.role !== 'manager') {
      return res.status(403).json({ success: false, msg: 'Not authorized' });
    }

    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      { status: 'Approved', approvedBy: req.user.id },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, msg: 'Request not found' });
    }

    res.status(200).json({
      success: true,
      msg: 'Request approved successfully',
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

// Reject a request
const rejectRequest = async (req, res) => {
  try {
    if (req.user.role !== 'manager') {
      return res.status(403).json({ success: false, msg: 'Not authorized' });
    }

    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      { status: 'Rejected', approvedBy: req.user.id },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, msg: 'Request not found' });
    }

    res.status(200).json({
      success: true,
      msg: 'Request rejected successfully',
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = {
  createRequest,
  getAllRequests,
  approveRequest,
  rejectRequest,
};
