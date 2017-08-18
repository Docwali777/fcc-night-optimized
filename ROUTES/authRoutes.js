const passport = require('passport');
const User = require('../MODELS/user')

module.exports = (app) => {

  //post to register Page
  app.post('/register', (req, res) => {
    User.register(new naUser({username: req.body.username}), req.body.password, (err, user) => {
      if (err) {console.log('Err post new user', err)}
      passport.authenticate('local')(req, res, () => {
        res.send(req.user)
      })
    })
  })

  //post to login
  app.get('/login', (req, res)=>{
    passport.authenticate('local')(req, res, ()=>{
      res.send(req.user)
    })
  })

  app.get('/logout', (req, res)=>{
    req.logout()
     res.redirect('/');
  })

}
