var express = require('express');
var router = express.Router();
var GetPlayer = require('../controller/GetPlayers');

// /* GET home page. */
// router.get('/', function(req, res, next) {
// 	console.log('does it even get here?');
// 	console.log(path.join(__dirname + '../index.html'));
//   res.sendFile(path.join(__dirname + '../index.html'));
//   // res.sendFile('index.html');
// });

// module.exports = router;
router.get('/players/:team_name', GetPlayer.getPlayers);

module.exports = router;