var express = require('express');
var router = express.Router();

var UserTemplate = require('../user_template').UserTemplate;

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserTemplate.find((err, users) => {
    if(!err){
      res.send('All users: \n' + users);
    } else {
      res.statusCode = 500;
      res.send('Server error');
    }
  });
});

router.post('/', function(req, res) {
  var user = new UserTemplate({
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    image : req.body.image,
    admin : false,
  });

  user.save((err) => {
    if(!err){
      res.send({Status : 'ok\n', user : user});
    } else {
      console.log(err);
      if(err.name == 'ValidationError') {
               res.statusCode = 400;
               res.send({ error: 'Validation error' });
           } else {
               res.statusCode = 500;
               res.send({ error: 'Server error' });
           }
    }
  });
});



router.delete('/:id', (req, res) => {
    UserTemplate.findById(req.params.id, (err, user) => {
      if(!user){
        res.statusCode = 404;
        res.send({error : 'Not Found'});
      }
      user.remove((err) => {
        if(!err){
          res.send({Status : 'OK'});
        } else {
          res.statusCode = 500;
          res.send({error : 'Server Error'});
        }
      });
    });
});

module.exports = router;
