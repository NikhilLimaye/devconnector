const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator/check');
//@route POST api/users
//@desc Register users
//@access Public
router.post(
'/', 
[ 
    check('name' , 'Name is invalid')
        .not()
        .isEmpty(),
    check('email' , 'Email address is invalid').isEmail() , 
    check('password' , 'Please enter valid password longer than 6 characters').isLength({min:6})
],
(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()});
    }
});

module.exports = router;
