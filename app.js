const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));
app.use(require('./router/index'));

app.listen(3000,()=>{
    console.log('listening on 3000');
});
