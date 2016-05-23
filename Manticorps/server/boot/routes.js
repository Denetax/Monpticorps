/**
 * Created by Mehdi on 22/05/2016.
 */

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/ping', function(req, res) {
    res.send('pongaroo');
  });
  router.get('/Denetax', function(req, res) {
    res.send('POOOPOOOOO');
  });
  app.use(router);
}
