app.controller('HomeController', function($scope) { // Home page

});

app.controller('MailListingController', function($scope) { // Email list @ Home page

});

app.controller('ContentController', function($scope) { // Email content @ Home page

});

app.controller('SettingsController', function($scope) { // Settings page
  $scope.settings = { // Útil para popular informações do usuário
    name: "Brenno",
    email: "me@example.com"
  };
  $scope.updateSettings = function() { // Form submit @ Settings page
    console.log("-- updateSettings was called.");
  };
});