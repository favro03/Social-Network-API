const { Thought, User } = require('../models');

const thoughtController ={
    //GET all thoughts
    getAllThoughts(req,res){
        Thought.find({})
        // .populate({
        //     path: 'reactions',
        //     select:'-__v'
        // })
        .select('-__v')
        //.sort({_id: -1})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    },
    //GET one thought
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        // .populate({
        //     path: 'reaction',
        //     select: '-__v'
        // })
        .select('-__v')
        .then(dbThoughtData => {
            //if no user is found send 404
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No user found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    //POST a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    // example data

    createThought({  params, body }, res) {
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {username: body.username},
                {$push: {thoughts: _id}},
                {new: true}
            );
        })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No thought found with this username!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
      //PUT update a thought by it _id
    updateThoughts({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true})
        //.populate({ 
        //     path: 'reations',
        //     select: '-__v'
        // })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
//DELETE to remove a thought by it _id
    deleteThoughts({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                resstatus(400).json({ message: 'No thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }

};

module.exports = thoughtController;