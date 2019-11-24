const express = require('express');
const daysController = require('../controllers/days');
const router = express.Router();

router.post('/days',daysController.getDays);
router.get('/times',daysController.getTimes);


module.exports = router;
