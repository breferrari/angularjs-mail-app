var app = angular.module("myApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "template/home.html",
      controller: 'HomeController'
    })
    .state('settings', {
      url: "/settings",
      templateUrl: "template/settings.html",
      controller: "SettingsController"
    });
});