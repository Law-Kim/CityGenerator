const express = require('express')
const app = express()
const port = 8001
const fs = require("fs");
let line = null;

app.use(express.json())

app.get('/', (req, res) => {
  let data = fs.readFileSync('./cities.txt', "utf-8") 
  const lines = data.split('\r\n');
  line = lines[Math.floor(Math.random()*lines.length)]
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'text/plain');
  res.write(line);
  res.end();
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
