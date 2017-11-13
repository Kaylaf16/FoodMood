const express = require('express');
const router = express.Router();

// routing separated
router.use('/foodquery', require('./foodquery')); // this route is primarily for the database manipulation (CRUD)
//router.use('/', require('./home')); // this will be our main route
module.exports = router;
