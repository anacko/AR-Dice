const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

app.use(cookieParser())
require('dotenv').config()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  if (!req.cookies['d6_value']) { res.cookie('d6_value', '0') }
  const templateVars = { d6Value: req.cookies['d6_value'] }
  res.render('index.ejs', templateVars)
})

app.get('/main', (req, res) => {
  if (!req.cookies['d6_value']) { res.cookie('d6_value', '0') }
  const templateVars = { d6Value: req.cookies['d6_value'] }
  res.render('main.ejs', templateVars)
})

app.get('/models/d6', (req, res) => {
  res.sendFile(`./models/_${req.cookies['d6_value']}-d6.glb`, {root: process.env.ROOT})
})

app.post('/', (req, res) => {
  if (!req.cookies['d6_value']) { res.cookie('d6_value', '0') }
  const templateVars = { d6Value: req.cookies['d6_value'] }
  res.render('index.ejs', templateVars)
})
<<<<<<< HEAD
// app.post('/new_d6', (req, res) => {
//   const newD6 = Math.floor(Math.random()*6 + 1)
//   res.cookie('d6_value', newD6)
//   res.redirect('/')
// })

// app.post('/reset_d6', (req, res) => {
//   res.cookie('d6_value', '0')
//   res.redirect('/')
// })
=======

app.post('/new_d6', (req, res) => {
  const newD6 = Math.floor(Math.random()*6 + 1)
  res.cookie('d6-value', newD6)
  res.redirect('/')
})

app.post('/reset_d6', (req, res) => {
  res.cookie('d6-value', '0')
  res.redirect('/')
})
>>>>>>> main

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})