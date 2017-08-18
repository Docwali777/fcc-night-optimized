const express = require('express');
const app = express()
const path = require('path');
const PORT  = process.env.PORT || 3000
const axios = require('axios');
const keys = require('./PASSWORDS/keys')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise

//MONGOOSE for Mongo
mongoose.connect(keys.MONGODB_URI, {useMongoClient: false})
.then(()=>console.log('mLab conncected'))
.catch(e => 'logged out')



//Set up hot-reloading ONLY in development
if(process.env.NODE_ENV === 'dev'){
  console.log('in development mode',process.env.NODE_ENV);
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware')
  const hotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev')

const compiler = webpack(config)

const middlware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true
})

app.use(middlware)
app.use(hotMiddleware(compiler))

}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

//ROUTES
require('./ROUTES/api_yelp_search')(app)

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.listen(PORT, ()=>{
  console.log('Server running....');
})
