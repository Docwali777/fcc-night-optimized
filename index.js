const express = require('express');
const app = express()
const path = require('path');
const PORT  = process.env.PORT || 3000
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const keys = require('./PASSWORDS/keys')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise

require('./AUTH_PASSPORT/userAuth')

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
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(require('express-session')({
  secret: 'keyboard cat',
  maxAge: 30 * 24 * 60 * 60 * 1000,
  resave: false,
  saveUninitialized: false,
   keys: ['djckhkshslhafsdjkhfasjkhdfkjlds']}));
app.use(passport.initialize());
app.use(passport.session());

const User = require('./MODELS/user')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTES
require('./ROUTES/authRoutes')(app)
require('./ROUTES/api_yelp_search')(app)


app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


//MONGOOSE for Mongo
mongoose.connect(keys.MONGODB_URI, {useMongoClient: false})
.then(()=>console.log('mLab conncected'))
.catch(e => 'logged out')

app.listen(PORT, ()=>{
  console.log('Server running....');
})
