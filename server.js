const app = express();

const PORT = process.env.PORT || 3001;
const express = require('express');

const fs = require('fs');
const path = require('path');
// const database = require("./db/db.json");

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`);
});