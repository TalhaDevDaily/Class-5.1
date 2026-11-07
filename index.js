require('dotenv').config();
const express = require('express');
const app = express();
const mongooseConnect = require('./config/dbConfig');

app.use(express.json());

mongooseConnect();

app.listen(8000, () => console.log(`Server is running!`));
