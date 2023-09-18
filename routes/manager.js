const router = require('express').Router();
const managerController = require('../controllers/managerController');
const validator = require('express-validator')
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/is-auth');

router.post('/add_manager', 
[
    check('name').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'),
    check('email').isEmail().withMessage('Email must be valid'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars long'),
]
,managerController.add_manager);

router.post('/login',[
    check('email').isEmail().withMessage('Email must be valid'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars long'),
],
managerController.login);

router.get('/viewAvailibility', auth.isAuth,managerController.viewAvailibility);