Angular.module('app', ['ui.router', 'firebase'])
   .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
         .state('cars', {
            url: '/cars',
            templateUrl: '/route/cars.html',
            controller: 'carsCtrl'
         })
         .state('car', {
            url: 'cars/:carid',
            templateUrl: 'js/routes/car.html',
            controller: 'carCtrl'
         });

   });
