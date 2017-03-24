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
    	filled: false,
    	img: "none"
    };
    $scope.team2 = {
    	name: "none",
    	filled: false,
    	img: "none"
    };

    $scope.appendTeam1 = function(data) {
    	var team1_container = document.getElementById("team1");
    	while (team1_container.firstChild) {
		    team1_container.removeChild(team1_container.firstChild);
		};
		team1_container.style.backgroundColor = "white";
		var new_team = document.createElement("img");
		new_team.src = "/icons/"+data.team_img;
    	new_team.className += "img-responsive center-block";
		team1_container.append(new_team);

		$rootScope.$broadcast('show_players1', data.team_name);
		$scope.team1.filled = true;
		$scope.team1.img = data.team_img;
		$scope.team1.name = data.team_name;
    }

    $scope.appendTeam2 = function(data) {
    	var team2_container = document.getElementById("team2");
    	while (team2_container.firstChild) {
		    team2_container.removeChild(team2_container.firstChild);
		};
		team2_container.style.backgroundColor = "white";
		var new_team = document.createElement("img");
		new_team.src = "/icons/"+data.team_img;
    	new_team.className += "img-responsive center-block";
		team2_container.append(new_team);

		$rootScope.$broadcast('show_players2', data.team_name);
		$scope.team2.filled = true;
		$scope.team2.img = data.team_img;
		$scope.team2.name = data.team_name;
    }
};

exports.ChoosePlayersController = function($scope, $http) {
	$scope.show_choosePlayers1 = false;
	$scope.show_choosePlayers2 = false;

	$scope.team1_name = "none";
	$scope.team2_name = "none";

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
};