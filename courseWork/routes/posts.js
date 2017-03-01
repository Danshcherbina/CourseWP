var express = require('express');
var router = express.Router();



//var UserTemplate = require('../user_template').UserTemplate;

var ArticleTemplate = require('../article_template').ArticleTemplate;

router.get('/', function(req, res, next) {
  ArticleTemplate.find((err, posts) => {
    if(!err){
      res.send('All posts: \n' + posts);
    } else {
      res.statusCode = 500;
      res.send('Server error');
    }
  });
});

router.get('/:id', function(req, res, next) {
  ArticleTemplate.findById(req.params.id, (err, post) => {
    if(!post){
      res.statusCode = 404;
      res.send('Not Found');
    }
    if(!err){
      res.send(post);
    } else {
      res.statusCode = 500;
      res.send('Server error');
    }
  });
});
module.exports = router;
