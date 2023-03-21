// Load the logs model
const Ship = require('../models/logs')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {

    try {
        // use the model to interact with db and create a new document in the fruit collection
        const result = await Ship.find()
        console.log('inside controller')
        res.render('Index', {result})
    } catch(err) {
        console.log(err.message)
    }
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.shows = async (req, res) => {
    try {
        const result = await Ship.findById(req.params.id)
        res.render('Shows', { result })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// GET /logs/new
module.exports.new = (req, res) => {
    res.render('New')
}

// POST /fruits
module.exports.create = async (req, res) => {

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
      }

    try {
        // use the model to interact with db and create a new document in the fruit collection
        const result = await Ship.create(req.body)
        console.log(result)
        // res.render('Shows', {result})
    } catch(err) {
        console.log(err)
    }

    res.redirect('/logs')
}

// DELETE /fruits/:id
module.exports.delete = async (req, res) => {
  
    try {
        await Ship.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

// GET /fruits/:name/edit
module.exports.edit = async (req, res) => {
  
    try {
        const result = await Ship.findById(req.params.id)
        res.render('Edit', { result })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

// PUT /fruits/:id
module.exports.update = async (req, res) => {
 
    console.log(req.body)

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    try {
        // use the model to interact with db and create a new document in the fruit collection
        const result = await Ship.findByIdAndUpdate(req.params.id, req.body)
        console.log(result)
        res.redirect(`/logs/${req.params.id}`)
    } catch(err) {
        console.log(err)
    }
}

// POST /fruits/seed
module.exports.seed = async (req, res) => {

    try {
        await Fruit.deleteMany({})
        await Fruit.create(fruits)
        res.redirect('/fruits')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// DELETE /fruits/clear
module.exports.clear = async (req, res) => {

    try {
        await Fruit.deleteMany({})
        res.redirect('/fruits')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}