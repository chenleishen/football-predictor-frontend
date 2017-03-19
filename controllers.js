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
  
   //  setTimeout(function() {
   //  	$scope.$emit('NavBarController');
  	// }, 0);
};

exports.DragAndDropController = function ($scope) {
	console.log("this is drag and drop controller");

}