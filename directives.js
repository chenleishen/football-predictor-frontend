
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

exports.choosePlayer = function() {
	return {
    controller: 'ChoosePlayerController',
    templateUrl: '/templates/choose_player.html'
  };
}