const express = require('express')
const { readFile } = require('fs')
const app = express()
const port =  process.env.PORT|| 3000

app.get('/', (req, res) => {
    res.send("Hello world");
  })
})

app.get("/home",(req,res,next)=>{
  res.send("Hello world")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})