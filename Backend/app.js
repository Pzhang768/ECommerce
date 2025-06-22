const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./routes/userRouter');

const cors = require('cors')
app.use(cors())
app.use("/users", userRouter);  

app.listen(port, ()=>{
  console.log(`Listening at http://localhost:${port}`)
})