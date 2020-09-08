const _ = require('lodash');
const express = require('express')
const bodyParser = require('body-parser')
const { request, response } = require('express')
const app = express();
app.use(bodyParser.json())
const tokopandai = require('./controllers/tokopandai.js')(app)


app.get('/', (request, response) =>{
   response.send('oke')

})

app.listen(3000 , () =>{
    console.log('Server is listening')
})