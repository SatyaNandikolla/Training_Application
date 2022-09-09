// npm i express
// set PORT=5000 && node myApp.js

import express from 'express';
import employeeRouter from './routes/employee.js';
import messageRouter from './routes/message.js';
// import userRouter from './routes/user.js';

const app = express();

app.use(employeeRouter);
app.use(messageRouter);
// app.use(userRouter);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);