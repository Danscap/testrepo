
//router 
const router = require('express').Router()

//model for user
let User = require('../models/user.model')


//first endpoint, handles HTTP GET requests
//on localhost:5000/users/
//the '/' at the end IS THE TRIGGER

router.route('/').get((req, res) =>{
	User.find() //mongoose method, gets list of all users in DB
	.then(users => res.json(users)) //return users in JSON format
	.catch(err => res.status(400).json('Error:' + err))

})

//handles HTTP POST requests

router.route('/add').post((req, res) => {
	const username = req.body.username

	const newUser = new User({username})

	newUser.save()
	.then(() => res.json('User added!'))
	.catch(err => res.status(400).json('Error:' + err))

})

module.exports = router
