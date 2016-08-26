var express = require('express');
var path = require('path');
var url  = require('url');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/game', 'index.html'));
  console.log(url.parse(req.url).path.replace("/",""));
  //res.render('index', { title: 'Express' });
  console.log(1);

});

router.post('/', function (req, res,next) {
  res.send(JSON.stringify(playerId));
//  console.log(req.body.username);
 w.createPlayer(req.body.username, playerId);
  playerId=playerId+1;
  players.push( { id: playerId, ip: req.connection.remoteAddress.replace('::ffff:', '') } );
});

module.exports = router;
