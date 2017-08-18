const search = require('../MODELS/search');
const keys = require('../PASSWORDS/keys')
const axios = require('axios');
const latitude = require('latitude')

var iplocation = require('iplocation')




const publicIp = require('public-ip');

publicIp.v4().then(ip => {
    console.log(ip);
    //=> '46.5.21.123'
});

//
// const loc = publicIp.v6().then(ip => {
//   iplocation(ip, (err, address)=>{
//     if(err){console.log('can not locate')}
//     else {
//       axios({
//         method: 'get',
//         url: 'https://api.yelp.com/v3/businesses/search',
//         headers: {
//           Authorization: keys.YELP_AUTHORIZATION_KEY
//         },
//         params: {
//           longitude: address.longitude,
//           latitude: address.latitude,
//           term: term
//         }
//       }).then(term => {
//
//         res.send(term.data)
//
//       }).catch(e => {
//         console.log(e);
//       })
//
//     }
//   })
// });





module.exports = (app) => {
  app.get('/api/yelp/initialState', (req, res) => {
    search.find({}, (err, going)=>{
      if(err){console.log('Can not access Database to FIND ALL',err)}
      else {
        res.send(going)
      }
    })
  })
  app.post('/api/yelp/search', (req, res) => {

    let {city_state, term} = req.body

    ///----
    axios({
      method: 'get',
      url: 'https://api.yelp.com/v3/businesses/search',
      headers: {
        Authorization: keys.YELP_AUTHORIZATION_KEY
      },
      params: {
        location: city_state,
        term: term
      }
    }).then(term => {

      res.send(term.data)

    }).catch(e => {
      console.log(e);
    })

    ///-----

  })

  //POST likes to DATABASE
  app.post('/api/yelp/going', (req, res) => {
    let {going} = req.body
    search.findOne({
      id: going
    }, (err, isGoing) => {
      if (err) {console.log('err with database', err)}
        else if (isGoing === null) {
          search.create({id: going}, (err, going)=>{

            going.isGoing += 1
            going.save()
            res.send(going)
          })
        } else {
            isGoing.isGoing += 1
            isGoing.save()

            res.send(isGoing)
        }
    })

  })

  //Decided not to go
  app.post('/api/yelp/isNotGoing', (req, res) => {
    let {going} = req.body
    search.findOne({
      id: going
    }, (err, isGoing) => {
      if (err) {console.log('err with database', err)}
        else {
            isGoing.isGoing -= 1
            isGoing.save()

            res.send(isGoing)
        }
    })

  })
}
