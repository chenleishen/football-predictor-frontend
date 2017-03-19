
exports.navBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: '/templates/nav_bar.html'
  };
};

exports.dragAndDrop = function() {
  return {
    controller: 'DragAndDropController',
    templateUrl: '/templates/drag_and_drop.html'
  };
}; 

exports.choosePlayers = function() {
	return {
    controller: 'ChoosePlayersController',
    templateUrl: '/templates/choose_players.html'
  };
}