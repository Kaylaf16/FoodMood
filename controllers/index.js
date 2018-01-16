const express = require('express');
const router = express.Router();


router.use('/foodquery', require('./foodquery')); 


module.exports = router;
