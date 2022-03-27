const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughts,
    deleteThoughts,
    // addReaction,
    // deleteReaction
} = require('../../controllers/thought-controller');
//Set up GET and POST at /api/thoughts
router
.route('/')
.get(getAllThoughts)
.post(createThought);

//set p GET one, PUT, and delete at /api/thoughts
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughts)
    .delete(deleteThoughts)

module.exports = router;

