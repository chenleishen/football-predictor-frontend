exports.NavBarController = function($scope) {
	console.log("this is nav bar controller");
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
    	filled: false,
    	img: "none"
    };
    $scope.team2 = {
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
		new_team.src = "/icons/"+data;
    	new_team.className += "img-responsive .center-block";
		team1_container.append(new_team);

		$scope.team1.filled = true;
		$scope.team1.img = data;
    }

    $scope.appendTeam2 = function(data) {
    	var team2_container = document.getElementById("team2");
    	while (team2_container.firstChild) {
		    team2_container.removeChild(team2_container.firstChild);
		};
		team2_container.style.backgroundColor = "white";
		var new_team = document.createElement("img");
		new_team.src = "/icons/"+data;
    	new_team.className += "img-responsive .center-block";
		team2_container.append(new_team);

		$scope.team2.filled = true;
		$scope.team2.img = data;
    }
  
};

exports.DragAndDropController = function ($scope) {
	console.log("this is drag and drop controller");

}