exports.NavBarController = function($scope) {
	console.log("this is nav bar controller");
};

exports.DragAndDropController = function ($scope, $rootScope) {
	console.log("this is drag and drop controller");
	    $scope.team_icons = {
    	"AFC Bournemouth":"AFCBournemouth.png",
    	"Arsenal":"Arsenal.png",
    	"Burnley":"Burnley.png",
    	"Chelsea":"Chelsea.png",
    	"Crystal Palace":"CrystalPalace.png",
    	"Everton":"Everton.png",
    	"Hull City":"HullCity.png",
    	"Leicester City":"LeicesterCity.png",
    	"Liverpool":"Liverpool.png",
    	"Manchester City":"ManchesterCity.png",
    	"Manchester United":"ManchesterUnited.png",
    	"Middlesbrough":"Middlesbrough.png",
    	"Southampton":"Southampton.png",
    	"Stoke City":"StokeCity.png",
    	"Sunderland" : "Sunderland.png",
    	"Swansea City": "SwanseaCity.png",
    	"Tottenham Hotspur": "TottenhamHotspur.png",
    	"Watford":"Watford.png",
    	"West Bromwich Albion":"WestBromwichAlbion.png",
    	"West Ham United":"WestHamUnited.png"
    };

    $scope.team1 = {
    	name: "none",
    	img: "none"
    };
    $scope.team2 = {
    	name: "none",
    	img: "none"
    };

    $scope.appendTeam1 = function(data) {
    	var team1_container = document.getElementById("team1");
        if (data.team_name == $scope.team1.name || data.team_name == $scope.team2.name) {
            return;
        }
    	while (team1_container.firstChild) {
		    team1_container.removeChild(team1_container.firstChild);
		};
		team1_container.style.backgroundColor = "white";
		var new_team = document.createElement("img");
		new_team.src = "/icons/"+data.team_img;
    	new_team.className += "img-responsive center-block iconBorder";
		team1_container.append(new_team);

		$rootScope.$broadcast('show_players1', data.team_name);
		$scope.team1.img = data.team_img;
		$scope.team1.name = data.team_name;
    }

    $scope.appendTeam2 = function(data) {
    	var team2_container = document.getElementById("team2");
        if (data.team_name == $scope.team1.name || data.team_name == $scope.team2.name) {
            return;
        }
    	while (team2_container.firstChild) {
		    team2_container.removeChild(team2_container.firstChild);
		};
		team2_container.style.backgroundColor = "white";
		var new_team = document.createElement("img");
		new_team.src = "/icons/"+data.team_img;
    	new_team.className += "img-responsive center-block iconBorder";
		team2_container.append(new_team);

		$rootScope.$broadcast('show_players2', data.team_name); 
		$scope.team2.img = data.team_img;
		$scope.team2.name = data.team_name;
    }
};

exports.ChoosePlayersController = function($scope, $http) {
    // choose maximum number of players that users are allowed to select:
    var MAX_NUM_OF_PLAYERS = 11;

    $scope.status = {
        open1 : false,
        open2: false
    }

	$scope.show_choosePlayers1 = false;
	$scope.show_choosePlayers2 = false;

	$scope.team1_name = "none";
	$scope.team2_name = "none";

    $scope.team1_players = [];
    $scope.team2_players = [];

    $scope.disableSelection1 = false;
    $scope.disableSelection1 = false;

    $scope.team1.filled = false;
    $scope.team2.filled = false;

    $scope.scoreCalculated = false;

	$scope.$on('show_players1', function (event,team_name) {
        $scope.show_choosePlayers1 = true;
		$scope.team1_name = team_name;
        var team_name_underscore = team_name.split(' ').join('_');
        $http.get('/api/players/'+team_name_underscore).
            then(function(response){
                $scope.team1_players = response.data;
            });
    });

    $scope.$on('show_players2', function (event,team_name) {
        $scope.show_choosePlayers2 = true;
        $scope.team2_name = team_name;
        var team_name_underscore = team_name.split(' ').join('_');
        $http.get('/api/players/'+team_name_underscore).
            then(function(response){
                $scope.team2_players = response.data;
            });
    });

    $scope.$watch('team1_players', function(players){
        $scope.selectedPlayers1 = 0;
        $scope.team1_selected_players = [];
        players.forEach(function(player){
          $scope.selectedPlayers1 += player.selected ? 1 : 0;
          if (player.selected) {
            $scope.team1_selected_players.push(player.name);
          }
        })
        if ($scope.selectedPlayers1+1 > MAX_NUM_OF_PLAYERS) {
            $scope.disableSelection1 = true;
            $scope.team1.filled = true;
        } else {
            $scope.disableSelection1 = false;
            $scope.team1.filled = false;
            $scope.scoreCalculated = false;
        }
      }, true); 

    $scope.$watch('team2_players', function(players){
        $scope.selectedPlayers2 = 0;
        $scope.team2_selected_players = [];
        players.forEach(function(player){
          $scope.selectedPlayers2 += player.selected ? 1 : 0;
          if (player.selected) {
            $scope.team2_selected_players.push(player.name);
          }
        })
        if ($scope.selectedPlayers2+1 > MAX_NUM_OF_PLAYERS) {
            $scope.disableSelection2 = true;
            $scope.team2.filled = true;
        } else {
            $scope.disableSelection2 = false;
            $scope.team2.filled = false;
            $scope.scoreCalculated = false;
        }
      }, true); 

    $scope.calculateScore = function () {
        var data = {
            team1_name: $scope.team1_name,
            team1_players: $scope.team1_selected_players,
            team2_name: $scope.team2_name,
            team2_players: $scope.team2_selected_players
        };
        console.log(data);
        $http.post('http://54.245.215.12:9612/get_score', data).
        then(function(response){
            $scope.score = response.data.score;
            $scope.scoreCalculated = true;
        });
    }

    $scope.getPlayers = function () {
        console.log("shit works");
        var data = {
            "team1_name": "Manchester United",
            "team2_name": "Manchester City"
        };
        $http.post('http://127.0.0.1:8000/get_defaultplayers', data).
        then(function(response){
            $scope.playerssss = response.data.defaultplayers;
            console.log($scope.playerssss);
        });
    }

    $scope.reset = function () {
        var team1_container = document.getElementById("team1");
        while (team1_container.firstChild) {
            team1_container.removeChild(team1_container.firstChild);
        };
        var team2_container = document.getElementById("team2");
        while (team2_container.firstChild) {
            team2_container.removeChild(team2_container.firstChild);
        };
        $scope.show_choosePlayers1 = false;
        $scope.show_choosePlayers2 = false;
    }

};