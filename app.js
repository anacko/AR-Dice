const express = require('express')
const app = express()
const port = 3000

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.send('<a href="./main">Click to go to main.</a>')
})

app.get('/main', (req, res) => {
  res.render('main.ejs')
})

app.get('/models/d6', (req, res) => {
  res.sendFile('./models/d6.glb', {root: '/home/anack/Ubuntu-projects/2201-AR-Dice'})
  console.log('logging d6')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})