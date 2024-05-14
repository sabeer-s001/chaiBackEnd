require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get("/game", (req, res)=>{
    res.send("Gane is working")
})
app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})