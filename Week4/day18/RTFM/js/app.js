angular.module('rtfmApp', ['ui.router', 'firebase'])

   .constant('fb', {
      url:'https://carfire-mine.firebaseio.com/'
   })

   .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
         .state('threads',{
            url: '/threads',
            templateUrl: 'threads/:threadId',
            controller: 'js/threads/threadsCtrl.js'
         })
         .state('...',{
            url: '...',
            templateUrl: "...",
            controller: '...'
         });
         $urlRouterProvider
            .otherwise('/');
   });
