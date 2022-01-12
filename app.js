const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cookieParser())

app.get('/', (req, res) => {
  if (!req.cookies['d6-value']) { res.cookie('d6-value', '0') }
  const templateVars = { d6Value: req.cookies['d6-value'] }
  res.render('index.ejs', templateVars)
})

app.get('/main', (req, res) => {
  if (!req.cookies['d6-value']) { res.cookie('d6-value', '0') }
  const templateVars = { d6Value: req.cookies['d6-value'] }
  res.render('main.ejs', templateVars)
})

app.get('/models/d6', (req, res) => {
  res.sendFile(`./models/_${req.cookies['d6-value']}-d6.glb`, {root: '/home/anack/Ubuntu-projects/2201-AR-Dice'})
})

app.post('/new_d6', (req, res) => {
  const newD6 = Math.floor(Math.random()*6 + 1)
  res.cookie('d6-value', newD6)
  res.redirect('/')
})

app.post('/reset_d6', (req, res) => {
  res.cookie('d6-value', '0')
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})