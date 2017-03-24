var elastic = require('../config/elasticsearch');
var elasticClient = elastic.getEsClient();

module.exports.getPlayers = function(req, res) {
	// console.log("chenlei");
	console.log(req.params.team_name);
	var team_name = req.params.team_name.split('_').join(' ');
	console.log(team_name);
	elasticClient.search({
        index: 'player_data',
        body: {"sort": [{"date_indexed": {"order": "desc"}}], "query": {"match_all" : {}},"size" : 1}
    }).then(function (response) {
    	// console.log(response);
    	var team_players = [];
        var response_array = response.hits.hits[0]._source.latest_player_data;
        // console.log(response_array);
        response_array.forEach(function(player_data){
        	if(player_data.team == team_name) {
        		team_players.push(player_data.first_name + " " + player_data.last_name);
        	}
        });
        res.send(team_players);
    });
}