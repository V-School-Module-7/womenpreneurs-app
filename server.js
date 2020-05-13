const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const firebase = require('firebase');
const admin = require('firebase-admin');

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan('dev'));
app.listen(port, () => console.log(`server running on port: ${port}`));



