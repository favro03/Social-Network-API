const router = require('express').Router();
const { del } = require('express/lib/application');
const {
    getAllUser,
    createUser,
} = require('../../controllers/user-controller');

//Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

module.exports = router;