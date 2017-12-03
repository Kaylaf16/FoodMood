const express = require('express');
const router = express.Router();

// routing separated
router.use('/foodquery', require('./foodquery')); // this route is primarily for the database manipulation (CRUD)
//router.use('/', require('./home')); // this will be our main route
router.post('/s',(req,res)=>{
res.json('hi');
})
module.exports = router;
