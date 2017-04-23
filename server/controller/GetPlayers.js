var elastic = require('../config/elasticsearch');
var elasticClient = elastic.getEsClient();
var latest_player_data = [];

module.exports.getAllPlayers = function(req, res) {
  console.log('first load');
	elasticClient.search({
        index: 'player_data',
        body: {"sort": [{"date_indexed": {"order": "desc"}}], "query": {"match_all" : {}},"size" : 1}
    }).then(function (response) {
        latest_player_data = response.hits.hits[0]._source.latest_player_data;
        console.log('first load');
        res.send("successful");
    });
};

module.exports.getPlayers = function (req, res) {
  var team_name = req.params.team_name.split('_').join(' ');
  var team_players = [];
  if (latest_player_data.length > 0) {
    console.log('getting player data');
    latest_player_data.forEach(function(player_data){
      if(player_data.team == team_name) {
        team_players.push(
                {"name": player_data.web_name,
                 "minutes_played": player_data.minutes_played
                });
      }
    });
    if (team_players.length>0) {
        team_players.sort(compare = function(a, b) {
          if (a.minutes_played < b.minutes_played) {
            return 1;
          }
          if (a.minutes_played > b.minutes_played) {
            return -1;
          }
          return 0;
        });
    }
    res.send(team_players);
  }
}

// example
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);