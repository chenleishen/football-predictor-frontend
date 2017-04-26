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
router.get('/first_load', GetPlayer.getAllPlayers);
router.get('/players/:team_name', GetPlayer.getPlayers);
router.get('/getDefaultPlayers', GetPlayer.getDefaultPlayers);

module.exports = router;