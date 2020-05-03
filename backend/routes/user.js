const Router = require('express').Router();

let User = require('../models/user');

Router.route('/').get((req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

Router.route('/signup').post((req, res)=> {
    const newUser =  new User(req.body)
    newUser.save()
    .then(()=> res.json('user added !!!'))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = Router;