const router = require('express').Router()
let Exercise = require('../models/exercise.model')

//get all exercises from collection
router.route('/').get((req, res) =>{
	Exercise.find()
	.then(exercises => res.json(exercises))
	.catch(err => res.status(400).json('Error' + err))

})
//add an exercise to collection exercises
router.route('/add').post((req, res) => {
	const username = req.body.username
	const description = req.body.description
	const duration = Number(req.body.duration)
	const date = Date.parse(req.body.date)

	const newExercise = new Exercise({
		username,
		description,
		duration,
		date
	})
	newExercise.save()
	.then(() => res.json('Exercise added!'))
	.catch(err => res.status(400).json('Error' + err))

})


//:id is a variable for mongoDB
//replace it with an object's ID in URL
router.route('/:id').delete((req,res) => {
	Exercise.findByIdAndDelete(req.params.id)
	.then(exercise => res.json(exercise))
	.catch(err => res.status(400).json('Error:' + err))

})

router.route('/:id').get((req,res) => {
	Exercise.findById(req.params.id)
	.then(exercise => res.json(exercise))
	.catch(error => res.status(400).json('Error:' + err))
})

//route needs to receive JSON object
//exercise already exists so update
//fields
router.route('/update/:id').post((req,res) => {
	Exercise.findById(req.params.id)
	.then(exercise => {
		exercise.username = req.body.username
		exercise.description = req.body.description
		exercise.duration = Number(req.body.duration)
		exercise.date = Date.parse(req.body.date)

		exercise.save()
		.then(() => res.json('Exercise updated!'))
		.catch(err => res.status(400).json('Error:' + err))

	})
	.catch(err => res.status(400).json('Error:' + err))

})

module.exports = router
