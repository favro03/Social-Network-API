# Social Network API

## Description
  An API for a social network web applicaiton where users can share their thoughts, react to friends' thoughts, and create a friend list. The tools used to build this app include Express.js for routing, a MongoDB database, the Mongoose ODM, and moment to format timestamps.


## Table of Contents
* [Walkthrough](#walkthrough)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Walkthrough
* Walkthrough of the [Users](https://www.awesomescreenshot.com/video/8123786?key=ec9fc38ba86b473e8dddadd0762b54dc)
* Walkthrough of the the throughs [Thoughts](https://www.awesomescreenshot.com/video/8123852?key=3d621526e29b496dd8a0044516f0309c)
* Walkthrough of the reactions [Reactions](https://www.awesomescreenshot.com/video/8124060?key=277ec4a9a56ff49639af0483dfeac902)
* Walkthrough of the friends list [Friends](https://www.awesomescreenshot.com/video/8124133?key=eab701c8fb3eb1b29a8b6c4c9169b316)

## Installation
1. Download the repo files at the below link
2.  You mush have MongoDB installed
3.  Run the following commands
`npm init -y`
`npm install` 
4.  Start the server 
`npm start` 
5.  Open Insomnia to test the API routes


## Usage
Testing restrful API calls with Insomnia
`/api/users`
* `GET` all users
* `POST` a new user:

 `// example data`
  
 `{`
  
  `"username": "lernantino",`
   
 `"email": "lernantino@gmail.com"`
  
 `}`
  

`/api/users/:userId`
* `GET` a single user by its _id and populated thought and friend data
* `PUT` to update a user by its _id
* `DELETE` to remove user by its _id

`/api/users/:userId/friends/:friendId`
* `Post` to add a new friend to a user
* `DELETE` to delete a friend from a user

`/api/thoughts/:thoughtId`
* `GET`
* `PUT`
* `DELETE`

`/api/thoughts/:thoughtId/reactions`
* `POST` to create a reaction

`// example data` 

`{`
 
  `"thoughtText": "Here's a cool thought...",`
   
  `"username": "lernantino",`
   
  `"userId": "5edff358a0fcb779aa7b118b"`
   
`}`
 

`/api/thoughts/thoughtId/reactions/:reactionId`
* `DELETE` delete a reaction by reaction Id

## License
[MIT License](https://choosealicense.com/licenses/mit/)
 
## Questions
You can view the repo here [GitHub Repo](https://github.com/favro03/Social-Network-API)

[Contact Us](mailto:wetr9902@gmail.com)
  