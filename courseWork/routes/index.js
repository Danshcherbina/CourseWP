var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var mpromise = require('mpromise');
var crypto = require('crypto');
var UserTemplate = require('../user_template').UserTemplate;

var mongo_db = 'mongodb://localhost/kursach';

mongoose.connect(mongo_db);

const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');

let sessionSecret = "jahdgalsdg^&(*&^%  _Asds)";

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(busboyBodyParser({ limit: '10mb' }));
router.use(cookieParser());


router.use(session({
	secret: sessionSecret,
	resave: false,
	saveUninitialized: true
}));


router.use(passport.initialize());
router.use(passport.session());



passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
	console.log("deserializeUser id: " + id);
	UserTemplate.findOne({ _id: id}).exec((err, user) => {
    if(err){
      done(err, null);
    } else {
      if(user) {
				done(null, user);
			} else {
				done("No user", null);
			}
    }
  });
});


passport.use(new LocalStrategy((username, password, done) => {

	  UserTemplate.findOne({
			  username: username,
			  password: hash(password)
		  }).exec((err, user) => {
        if(!err){
          console.log(user);
  				if (user) {
  					done(null, user);
  				} else {
  					done(null, false);
  				}
        } else {
          console.log(err);
  				done(err, null);
        }
      });
}));


var salt = 'datismusalt1998!';

function hash(pass){
  return crypto.createHash('md5').update(pass + salt).digest("hex");
}

/* GET home page. */

router.get('/', function(req, res, next) {
	 res.render('main', {user : req.user});
});

router.get('/new_article', function(req, res, next) {
	if(req.user){
	 res.render('new_article', {user : req.user});
 } else {res.end('Nope');}
});


/* GET register page. */
router.get('/register', (req, res) => {
  res.render('register');
});

/* GET login page. */
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register_success', (req, res) => {
  res.render('register_success');
});

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.post('/login',
	passport.authenticate('local', { failureRedirect: '/login-error' }),
  (req, res) => res.redirect('/'));

router.get('/login-error', (req, res) => res.render('error', {error : 'Login error'}));


router.get('/user_profile', (req, res) => {
	if(req.user){
		res.render('user_profile', {user : req.user});
	} else {res.end('Nope');}
});

router.post('/user_profile',(req,res) => {
	if(req.body.email&&req.body.password&&
		req.body.password2&&req.body.password === req.body.password2){

			//console.log('Here');
			var avaObj = req.files.avatar;
			var base64String = avaObj.data.toString('base64');

			if (!base64String) base64String=req.user.image;

			UserTemplate.findOneAndUpdate({username : req.user.username},{
						$set:{
				      email : req.body.email,
				      password : hash(req.body.password),
				      image : base64String
						}},
						{new : true},
							function(err,newBook){
								if(err){
									console.log('Update error!');
								}else{
									console.log('Update success!');
									res.redirect('/user_profile');
								}
							}
						)
		}else{
			res.redirect('/user_profile');
		}
});



/* POST register. */
router.post('/register', (req, res) => {
if(req.body.username&&req.body.email&&req.body.password&&
	req.body.password2&&req.body.password === req.body.password2){

		UserTemplate.findOne({username:req.body.username},function(err,user){
			if(err) return next(err);

			if(user){
			res.end("Such username exists " + JSON.stringify(user));
			}else{

				var avaObj = req.files.avatar;
			  var base64String = avaObj.data.toString('base64');

		    var new_user = new UserTemplate({
		      username : req.body.username,
		      email : req.body.email,
		      password : hash(req.body.password),
		      image : base64String
		      });

					new_user.save((err) => {
						if(!err){

							res.redirect('/register_success');

						} else {
							console.log(err);
							if(err.name == 'ValidationError') {
											res.render('error', {error : '400. Validation error'});
									 } else {
											 res.render('error', {error : '500. Server error'});
									 }
						}
					});



			}
		})

    } else {
      res.render('error', { error : 'Invalide data. Please fill fields correctly.'});
    }
});

module.exports = router;
