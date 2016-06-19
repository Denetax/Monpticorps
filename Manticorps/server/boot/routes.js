/**
 * Created by Mehdi on 22/05/2016.
 */

var sqlServeur = require('../../back/config.js');
var sess;
module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/admin', function(req, res) {
    res.send('page admin');
  });
  router.get('/', function(req, res) {
    res.send('page d\'accueil');
  });

  router.post('/login',function(req,res) {
    var tampon=0;
    sess=req.session;
    sqlServeur.querySql("SELECT * FROM users", function (resultQuery) {
      for (var i = 0; i < resultQuery.length; i++) {
        if ((resultQuery[i].username == req.body.username) && (resultQuery[i].password == req.body.password)) {
          tampon = 1
        }
      }
      if(tampon == 1){
        sess.email=req.body.username;
        res.send(true);
      }else{
        res.send(false);
      }
    });
  });

  router.get('/logout',function(req,res){
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  });

  router.post('/register',function(req,res){
    sess = req.session;
    sess.email=req.body.username;
    res.end('done');
  });

  app.use(router);
};
