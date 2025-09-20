const express = require('express');
const userRouter = require('./routes/userRouter');
const app = express();

app.use(express.json());

app.get('/', (req,res,next) =>{
  res.send('Hello World!');
});

app.use('/users', userRouter);

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


