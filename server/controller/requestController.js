const Request = require('../models/PurchaseRequest');

const createRequest = async (req, res) => {
  const { itemName, quantity, reason } = req.body;
  try {
    const request = await Request.create({
      userId: req.user.id,
      itemName,
      quantity,
      reason,
    });
    res.status(201).json(request);
  } catch(err) {
    res.status(500).json({msg: err.message});
  }
};

const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('userId', 'name').sort({ createdAt: -1 });
    res.json(requests);
  } catch(err) {
    res.status(500).json({ msg: err.message});
  }
}

const approveRequest = async (req, res) => {
  try {
    if (req.user.role !== 'manager') return res.status(403).json({msg: 'Not authorized'});

    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      {status: 'Approved', approvedBy: req.user.id },
      {new: true}
    );
  } catch(err) {
    res.status(500).json({msg: err.message});
  }
};

const rejectRequest = async (req, res) => {
  try {
    if (req.user.role !== 'manager') return res.status(403).json({msg: 'Not authorized'});

    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      {status: 'Rejected', approvedBy: req.user.id },
      {new: true}
    );
  } catch(err) {
    res.status(500).json({msg: err.message});
  }
};

module.exports = {
  createRequest,
  getAllRequests,
  approveRequest,
  rejectRequest,
}