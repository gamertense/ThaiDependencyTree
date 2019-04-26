const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const path = require('path')

const fs = require('fs')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/postjson', (req, res) => {
    fs.writeFileSync('./dependencyTree.json', JSON.stringify(req.body.data));
    res.send(req.body.data)
})

app.get('/getjson', (req, res) => {
    res.sendFile(path.join(__dirname, 'dependencyTree.json'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))