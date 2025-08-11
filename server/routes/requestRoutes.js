const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const {
  createRequest,
  getAllRequests,
  approveRequest,
  rejectRequest,
} = require('../controller/requestController'); 

router.post('/createRequest', auth, createRequest);
router.get('/getAllRequests', auth, getAllRequests);
router.patch('/:id/approve', auth, approveRequest);
router.patch('/:id/reject', auth, rejectRequest);

module.exports = router;
