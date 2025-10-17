import express from 'express';
import { connectDB } from './ConnectDB/connectDB.js';

import authRoute from './Routes/authRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoute);


// app.use(( err, req, res, next) => {
//  const errorStatus =  err.status = err.status || 500;
//  const errorMessage = err.message = err.message || 'Something Went Wrong!';

//  return res.status(errorStatus).send(errorMessage)
// });


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});





app.listen(PORT, () => {
  connectDB();
  console.log("OK From Backend 😉");
});

