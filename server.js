require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080

const connectDB = require('./config/db');
connectDB()

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)
    next()
})

app.use(express.static('public'))

const Ship = require('./models/logs')
// const logs = require('./models/logs')

const logsRoutes = require('./routes/logsRoutes')


//Routes
app.use('/logs', logsRoutes)
// app.get('/logs', async (req, res) => {
//     try {
//         // use the model to interact with db and create a new document in the fruit collection
//         const result = await Ship.find()
//         console.log(result)
//         res.render('Index', {result})
//     } catch(err) {
//         console.log(err)
//     }
// })

// app.get('/logs/new', (req, res) => {
//     res.render('New')
// })

// app.get ('/logs/:id', async (req, res) => {
//     try {
//         const result = await Ship.findById(req.params.id)
//         res.render('Shows', { result })
//     } catch(err) {
//         console.log(err)
//         res.send(err.message)
//     }
// })

// app.delete('/logs/:id', async (req, res) => {
  
//     try {
//         await Ship.findByIdAndDelete(req.params.id)
//         res.redirect('/logs')
//     } catch(err) {
//         console.log(err)
//         res.send(err.message)
//     }
// })

// app.put('/logs/:id', async (req, res) => {
//     if (req.body.shipIsBroken) {
//         req.body.shipIsBroken = true;
//     } else {
//         req.body.shipIsBroken = false;
//       }

//     try {
//         // use the model to interact with db and create a new document in the fruit collection
//         const result = await Ship.findByIdAndUpdate(req.params.id, req.body)
//         console.log(result)
//         res.redirect(`/logs/${req.params.id}`)
//     } catch(err) {
//         console.log(err)
//     }
// })

// app.get('/logs/:id/edit', async (req, res) => {
  
//     try {
//         const result = await Ship.findById(req.params.id)
//         res.render('Edit', { result })
//     } catch(err) {
//         console.log(err)
//         res.send(err.message)
//     }    
// })

// app.post('/logs', async (req,res) => {
//     if (req.body.shipIsBroken) {
//         req.body.shipIsBroken = true;
//     } else {
//         req.body.shipIsBroken = false;
//       }

//     try {
//         // use the model to interact with db and create a new document in the fruit collection
//         const result = await Ship.create(req.body)
//         console.log(result)
//         res.render('Shows', {result})
//     } catch(err) {
//         console.log(err)
//     }

//     // res.redirect('/logs')

// })

app.listen(PORT, (req,res) => {
    console.log(`Listening on ${PORT}`)
})