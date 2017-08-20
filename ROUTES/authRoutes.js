const passport = require('passport');
const User = require('../MODELS/user')

module.exports = (app) => {

  //post to register Page
  app.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
      if (err) {
        res.send(err)
      }
      passport.authenticate('local')(req, res, () => {
        if (user) {
          return res.send(user)
        }
      })
    })
  })

  //post to login
  app.post('/login', (req, res) => {
    let {username, password} = req.body
    passport.authenticate('local')(req, res, () => {

      res.send(req.user.username)
    })
  })

  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/');
  })

}
