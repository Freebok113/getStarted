'use strict';

const express = require('express');
const app = express();

app.use(express.static('webapp'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Example app listens on port 3000.");
});