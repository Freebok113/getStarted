'use strict';

const express = require('express');
const app = express();

app.use(express.static('webapp'));

app.listen(8080, () => {
    console.log(`App listening at http://localhost:8080`)
})