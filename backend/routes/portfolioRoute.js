const express = require('express');
const router = express.Router();

const { getProfileData } = require('../controllers/profileController');
const { updateIntro } = require('../controllers/introController');
const { updateAbout } = require('../controllers/aboutController');
const { addExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');
const { addProject, updateProject, deleteProject } = require('../controllers/projectController');
const { addPosition, updatePosition, deletePosition } = require('../controllers/positionController');
const { updateContact } = require('../controllers/contactController');
const { adminLogin } = require('../controllers/authController');
const { getLeetcodeData } = require('../controllers/leetcodeController');
const {getCodeforcesData} = require('../controllers/codeforcesController');
const { updateSocial } = require('../controllers/socialController');

// Get all portfolio data
router.get('/get-portfolio-data', getProfileData);

// Get LeetCode data
router.get('/get-leetcode-data', getLeetcodeData);

// Get Codeforces data
router.get('/get-codeforces-data',getCodeforcesData);

// Intro routes
router.post('/update-intro', updateIntro);

// About routes
router.post('/update-about', updateAbout);

// Experience routes
router.post('/add-experience', addExperience);
router.post('/update-experience', updateExperience);
router.post('/delete-experience', deleteExperience);

// Project routes
router.post('/add-project', addProject);
router.post('/update-project', updateProject);
router.post('/delete-project', deleteProject);

// Position routes
router.post('/add-position', addPosition);
router.post('/update-position', updatePosition);
router.post('/delete-position', deletePosition);

// Contact routes
router.post('/update-social', updateSocial);

// Admin login
router.post('/admin-login', adminLogin);

module.exports = router;
