const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getMyJobs,
} = require('../controllers/jobController');

//ROUTE TO GET ONLY LOGIN PERSON UPLOADED POSTS
router.get('/my-jobs', authMiddleware, getMyJobs);

// PUBLIC ROUTES THTA CAN BE ACESSIBLE PUBLIC
router.get('/', getAllJobs);
router.get('/:id', getJobById);

//PROTECTED ROUTES WITHOUT AUTHERRIZATION YOU CANNOT ACCESS THEM 
router.post('/', authMiddleware, createJob);
router.put('/:id', authMiddleware, updateJob);
router.delete('/:id', authMiddleware, deleteJob);

module.exports = router;
