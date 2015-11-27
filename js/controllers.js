app.controller('HomeController', function($scope) { // Home page

});
//Do this so minifiers don't mess code or AngularJS will not identify the needed dependencies
app.controller('MailListingController', ['$scope', '$http', function($scope, $http) { // Email list @ Home page
  $scope.email = []; // To get from a server
  $http.get("data/mail.json")
    .then(function(response) {
      $scope.email = response.data.all;
    });

  // HTTP GET from API
  // $http({
  //   method: 'GET',
  //   url: 'api/mail'
  // })
  // .success(function(data, status, headers) {
  //   $scope.email = data.all;
  // })
  // .error(function(data, status, headers) {
  //   console.log("Connection Error: Could not access api/mail");
  // });
}]);

app.controller('ContentController', function($scope) { // Email content @ Home page

});

app.controller('SettingsController', function($scope) { // Settings page
  $scope.settings = { // Useful to populate user info
    name: "Brenno",
    email: "me@example.com"
  };
  $scope.updateSettings = function() { // Form submit @ Settings page
    console.log("-- updateSettings was called.");
  };
});