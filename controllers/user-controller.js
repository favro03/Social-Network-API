const { duration } = require('moment');
const { User, Thought } = require('../models');
const userController = {
    //get all users
    getAllUser(req, res){
        User.find({})
            .populate({
                path: 'thoughts',
                select:  '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            //.sort({_id: -1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    //get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            //if no user is found send 404
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    //create a new user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    //update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    //delete user and associated thoughts
    deleteUser({ params }, res) {
        Thought.deleteMany({ userId: params.id })
            .then(() => {
                User.findOneAndDelete({ _id: params.id })
                    .then(dbUserData => {
                        if (!dbUserData) {
                            res.status(400).json({ message: 'No user found with this id!'});
                            return;
                        }
                        res.json(dbUserData);
                    });
                })
                .catch(err => res.status(400).json(err));
    },
    //add a new friend to the users friend list
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId }, 
            {$push: { friends: params.friendId}},
            {new: true})
        
       
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
        res.json(dbUsersData);
        })
        .catch(err => res.status(400).json(err));
    },
    //delete friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true }
        )
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user with this id!'});
              return;
            }
           res.json(dbUserData);
          })
          .catch(err => res.status(400).json(err));
    }
};

module.exports = userController