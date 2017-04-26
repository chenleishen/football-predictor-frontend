var elastic = require('../config/elasticsearch');
var elasticClient = elastic.getEsClient();
var latest_player_data = [];
var csv = require('csv');
const fs = require('fs');
var path = require('path');
var inputFile=path.join(__dirname, '../../bin/main-11.csv');
var allDefaultPlayers = {};

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

module.exports.getDefaultPlayers = function(req, res) {
  console.log('get default');
  fs.readFile(inputFile, 'utf8', function (err, data) {
    csv.parse(data, function(err, data){
      csv.transform(data, function(data){
        allDefaultPlayers[data[0]]=data[1].split(';');
      }, function(err, data){
        res.send('successful');
      });
    });
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
                {"name": player_data.first_name+' '+player_data.web_name,
                 "minutes_played": player_data.minutes_played,
                 "web_name": player_data.web_name,
                 "selected": false
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

        if (Object.keys(allDefaultPlayers).length>0) {
          var defaults = allDefaultPlayers[team_name];
          team_players.forEach(function(player){
            defaults.forEach(function(dp){
              if (dp.toString() === player['web_name']){
                player['selected'] = true;
              } 
            });
          });
        };
    };
    res.send(team_players);
  }
}