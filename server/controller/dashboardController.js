const Request = require('../models/Request');

// Get dashboard stats
const getDashboardStats = async (req, res) => {
  try {
    const pending = await Request.countDocuments({ status: 'Pending' });
    const approved = await Request.countDocuments({ status: 'Approved' });
    const rejected = await Request.countDocuments({ status: 'Rejected' });
    const total = await Request.countDocuments();

    const recentRequests = await Request.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      data: {
        stats: { pending, approved, rejected, total },
        recentRequests,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = { getDashboardStats };
