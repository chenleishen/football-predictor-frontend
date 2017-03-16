(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.NavBarController = function($scope, $user) {
  $scope.user = "chenlei";

  setTimeout(function() {
    $scope.$emit('NavBarController');
  }, 0);
};

exports.SayHello = function () {
	console.log('Hello World');
}
},{}],2:[function(require,module,exports){

exports.navBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: '/templates/nav_bar.html'
  };
};

// exports.productDetails = function() {
//   return {
//     controller: 'ProductDetailsController',
//     templateUrl: '/A-examples/templates/product_details.html'
//   };
// };
},{}],3:[function(require,module,exports){
var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');

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

var app = angular.module('football_predictor', ['football_predictor.components', 'ngRoute']);

// app.config(function($routeProvider) {
//   $routeProvider.
//     when('/category/:category', {
//       templateUrl: '/A-examples/templates/category_view.html'
//     }).
//     when('/product/:id', {
//       template: '<product-details></product-details>'
//     });
// });
},{"./controllers":1,"./directives":2,"./services":4}],4:[function(require,module,exports){

},{}]},{},[3])