const express = require('express');
const userRouter = require('./routes/userRouter');
const { mongoConnect } = require('./utils/mongoDatabaseUtils');
const mongoUserRouter = require('./routes/mongoUserRouter');
const app = express();

app.use(express.json());

app.get('/', (req,res,next) =>{
  res.send('Hello World!');
});

app.use('/users', userRouter);
app.use('/mongoUsers', mongoUserRouter);

const port = 8080;
mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
