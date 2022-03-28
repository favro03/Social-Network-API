const router = require('express').Router();
const { del } = require('express/lib/application');
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
   // deleteFriend

    
} = require('../../controllers/user-controller');

//Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

    //set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

//friend routes
router
.route('/api/users/:id/friends/:friendId')
.post(addFriend)
//.delete(deleteFriend)


module.exports = router;