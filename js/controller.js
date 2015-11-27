app.controller('HomeController', function($scope) { // Home page

});

app.controller('MailListingController', function($scope) { // Email list

});

app.controller('ContentController', function($scope) { // Email content

});

app.controller('SettingsController', function($scope) { // Settings page
  $scope.settings = { // Útil para popular informações do usuário
    name: "Brenno",
    email: "me@example.com"
  };
  $scope.updateSettings = function() { // Função de submit do form
    console.log("-- updateSettings was called.");
  };
});