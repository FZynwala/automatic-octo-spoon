const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');

const connectdb = require('./users/connectDB');
const users = require('./users/routers/users');
const teams = require('./users/routers/teams');
const login = require('./users/routers/login');

const app = express();
/*
if(!config.get('jwtPrivateKey')) {
    console.error('jwtPrivateKey is not defined');
    process.exit(1);
};*/

connectdb.connectToDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);
app.use('/teams', teams);
app.use('/login', login);


const port = process.env.PORT || 3000;
app.listen(port);
