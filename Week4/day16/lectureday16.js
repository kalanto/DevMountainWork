angular.module("uiroutedemo", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

   $urlRouterProvider.otherwise('/list');

   $stateProvider
      .state('list',{
         url: "/list",
         controller: "listController",
         templateUrl: "list-tmpl.html",
      });
});
