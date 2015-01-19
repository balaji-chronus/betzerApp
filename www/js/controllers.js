angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('BetsCtrl', function($scope, $http, moment){
  $scope.bets = [];
  $http.get('http://localhost:3000/bets.json').then(function(response){
    $scope.bets = response.data;
    console.log(response);
  })

  $scope.getBettingStatus  = function(closing_on) {
    return (new moment().diff(closing_on, 'seconds')) <= 1
  };
})

.controller('BetCtrl', function($scope, $stateParams) {
});
