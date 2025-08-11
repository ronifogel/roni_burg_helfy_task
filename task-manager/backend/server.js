const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasks = require('./routes/taskRoutes'); 

var app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/tasks', tasks); 

app.listen(4000);