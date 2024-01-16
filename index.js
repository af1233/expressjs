//to run : node filename.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! ashiq farid '));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//visit localhost:3000