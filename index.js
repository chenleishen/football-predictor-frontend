var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
global.jQuery = require('jquery');
var boostrap = require('bootstrap');

var components = angular.module('football_predictor.components', ['ng']);

// _.each(controllers, function(controller, name) {
//   components.controller(name, controller);
// });
 
// _.each(directives, function(directive, name) {
//   components.directive(name, directive);
// });

// _.each(services, function(factory, name) {
//   components.factory(name, factory);
// });

for (name in controllers) {
	components.controller(name, controllers[name]);
}

for (name in directives) {
	components.directive(name, directives[name]);
}

for (name in services) {
	components.factory(name, services[name]);
}

var app = angular.module('football_predictor', ['football_predictor.components', 'ngRoute', require('angular-drag-drop')]);

// app.config(function($routeProvider) {
//   $routeProvider.
//     when('/category/:category', {
//       templateUrl: '/A-examples/templates/category_view.html'
//     }).
//     when('/product/:id', {
//       template: '<product-details></product-details>'
//     });
// });

app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/templates/main.html'
    });
});