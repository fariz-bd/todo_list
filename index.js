const express = require('express')
const app = express()
const port = 3000
let bodyParser = require('body-parser');
let router = require('./router/index')


app.set('views', './view');
app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', router);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`) );