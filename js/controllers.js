app.controller('HomeController', ['$scope', function($scope) { // Home page
  $scope.setSelectedMail = function(mail) {
    $scope.selectedMail = mail;
    console.log("-- Mail selected");
  };
  $scope.isSelected = function(mail) {
    if ($scope.selectedMail) {
      return $scope.selectedMail === mail;
    }
  };
  app.filter('to_trusted', ['$sce', function($sce) { //use $sce as a filter to trust HTML content
    return function(text) {
      return $sce.trustAsHtml(text);
    };
  }]);
}]);
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

app.controller('ContentController', ['$scope', function($scope) { // Email content @ Home page
  $scope.showingReply = false;
  $scope.reply = {};
  $scope.toggleReplyForm = function() {
    $scope.showingReply = !$scope.showingReply; //Change from true to false and vice versa
    $scope.reply = {}; // Reset scope
    $scope.reply.to = $scope.selectedMail.from.join(", ");
    $scope.reply.body = "\n\n -------------------------- \n\n" + $scope.selectedMail.body;
  };
}]);

app.controller('SettingsController', function($scope) { // Settings page
  $scope.settings = { // Useful to populate user info
    name: "Brenno",
    email: "me@example.com"
  };
  $scope.updateSettings = function() { // Form submit @ Settings page
    console.log("-- updateSettings was called.");
  };
});