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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})