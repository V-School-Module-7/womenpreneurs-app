const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan('dev'));




app.listen(port, () => console.log(`server running on port: ${port}`));



//global error handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   if (err.name === "UnauthorizedError") {
//     res.status(err.status);
//   }
//   return res.send({errMsg: err.message});
// });