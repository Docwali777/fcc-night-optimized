const passport = require('passport');
const mongoose = require('mongoose');
let  keys = require('../PASSWORDS/keys');

const User = require('../MODELS/user')

passport.serializeUser((user, done) =>{
  done(null, user.id)
})

passport.deserializeUser((id, done)=>{
  User.findById(id)
    .then(user =>{
      done(null, user)
    })
})


passport.use(
  new GoogleStrategy(
    {
  clientID:  keys.googleClientID ,
  clientSecret: keys.googleClientSecret ,
  callbackURL: '/auth/google/callback',
  proxy: true
},(accessToken, refreshToken, profile, done)=>{
User.findOne({googleID: profile.id})
  .then(existingUSer =>{
    if(existingUSer){
        done(null, existingUSer)
    } else {
      console.log('new user craeted in mLAB DB');
        new User({googleID: profile.id}).save()
          .then(user =>{
            res.send(user)
              done(null, user)
          }).catch(e =>console.log(e))
    }
  }).catch(e =>{
    console.log(e);
  })


}

))
