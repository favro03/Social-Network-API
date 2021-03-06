const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
      ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
    { 
    toJSON: {
      virtuals: true,
      
    },
    id: false
});

//retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//create the user model using the userSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;