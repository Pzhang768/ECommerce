const express = require('express')
const app = express()


const userRouter = require('./routes/userRouter');
const { connectToDatabase } = require('./models/database');
const { initialiseDatabase } = require('./utils/initialiseDatabase');

const cors = require('cors')
app.use(cors())

const PORT = 3000;
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/users", userRouter);  

async function startServer() {
  try {
    await connectToDatabase();
    await initialiseDatabase();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch(e){
    console.error('Failed to start server:', e);
    process.exit(1);
  }
  
}

startServer();